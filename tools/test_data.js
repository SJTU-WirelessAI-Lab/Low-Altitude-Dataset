/* 单测：CSI 与射频信号分离（rf 模态）+ 数据与渲染自检 */
const fs = require('fs'), vm = require('vm');
const src = fs.readFileSync('assets/app.js', 'utf8');

const els = {};
function el(sel) {
  if (!els[sel]) els[sel] = { innerHTML: '', textContent: '', value: '', checked: false,
    addEventListener() {}, classList: { add() {}, remove() {} }, dataset: {} };
  return els[sel];
}
const ctx = { console, Date,
  document: { addEventListener: (t, f) => { if (t === 'DOMContentLoaded') ctx.__boot = f; }, querySelector: el, querySelectorAll: () => [] } };
vm.createContext(ctx);
vm.runInContext(src + `
;globalThis.__M = MODALITIES; globalThis.__D = DATASETS; globalThis.__st = state;
globalThis.__f = filtered; globalThis.__cards = renderCards; globalThis.__mx = renderMatrix;
globalThis.__wireless = WIRELESS_BY_ID; globalThis.__chips = renderChips; globalThis.__stats = renderStats;`, ctx);

const M = ctx.__M, D = ctx.__D, st = ctx.__st;
let bad = 0;
const ck = (name, got, want) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) bad++;
  console.log((ok ? 'PASS ' : 'FAIL ') + name, '=>', JSON.stringify(got), ok ? '' : '期待 ' + JSON.stringify(want));
};
const byId = Object.fromEntries(D.map(d => [d.id, d]));

ck('模态数与顺序', M.map(m => m.key), ['la','csi','rf','rgb','ir','lidar','radar','imu','weather','acoustic']);
ck('核心模态数', M.filter(m => m.core).length, 7);
ck('补充模态', M.filter(m => !m.core).map(m => m.key), ['rf','ir','acoustic']);
ck('数据集总数', D.length, 71);

/* 每条都必须有 10 个模态字段且取值合法 */
const missing = D.filter(d => M.some(m => !(d.modality[m.key] === 1 || d.modality[m.key] === .5 || d.modality[m.key] === 0)));
ck('模态字段缺失/非法', missing.map(d => d.id), []);

/* 分组 */
const la = D.filter(d => d.modality.la > 0), gen = D.filter(d => d.modality.la === 0);
ck('低空 / 通用', [la.length, gen.length], [57, 14]);

/* 获取方式 */
const LEGAL_ACCESS = ['open','preview','register','request','pending'];
ck('access 字段非法或缺失', D.filter(d => !LEGAL_ACCESS.includes(d.access)).map(d => d.id), []);
ck('access 分布', ['open','preview','register','request','pending'].map(k => D.filter(d => (d.access||'open') === k).length), [60,4,3,2,2]);
ck('非开放条目', D.filter(d => d.access !== 'open').map(d => d.id).sort(),
   ['a2a-uav','a2g-cir-rt','aerpaw','ata','cpd-uav','diat-msat','eflash','isac-uav-ilmenau','multifly','tmrgbt-d2d','tricross-d2d']);

/* CSI / 射频：两类模态不得混用 */
ck('CSI 分布 (1/.5/0)', [1,.5,0].map(v => D.filter(d => d.modality.csi === v).length), [18, 6, 47]);
ck('射频分布 (1/.5/0)', [1,.5,0].map(v => D.filter(d => d.modality.rf === v).length), [14, 1, 56]);
const RF_ONLY = ['dronerfa','dronerfb-dir','dronerfc-mm','rfuav','cagedronerf',
                 'ku-leuven-drone-rf','drone-rf-mendeley','em-134k','em-bench','lipase'];
ck('纯射频条目：CSI 必须为 0', RF_ONLY.filter(i => byId[i].modality.csi !== 0), []);
ck('纯射频条目：射频必须为 1', RF_ONLY.filter(i => byId[i].modality.rf !== 1), []);
ck('纯射频条目不再是 .5 CSI', D.filter(d => d.modality.csi === .5).map(d => d.id).sort(),
   ['a2g-cir','a2g-cir-rt','aerpaw','deepsense6g','eflash','pml-cellulareye']);
ck('Cross-layer UAV 6G 只有 KPI', [byId['crosslayer-uav6g'].modality.csi, byId['crosslayer-uav6g'].modality.rf], [0, .5]);
ck('AERPAW 两者兼有', [byId['aerpaw'].modality.csi, byId['aerpaw'].modality.rf], [.5, 1]);
ck('PML-CellularEye 两者兼有', [byId['pml-cellulareye'].modality.csi, byId['pml-cellulareye'].modality.rf], [.5, 1]);
ck('低空且含 CSI 计数', D.filter(d => d.modality.la > 0 && d.modality.csi > 0).length, 16);
ck('低空且含射频计数', D.filter(d => d.modality.la > 0 && d.modality.rf > 0).length, 13);

/* 新增条目 */
ck('DroneRF(Mendeley) 模态', byId['drone-rf-mendeley'].modality, { la:1, csi:0, rf:1, rgb:0, ir:0, lidar:0, radar:0, imu:0, weather:0, acoustic:0 });
ck('MMAUD 存在且模态正确', byId['mmaud'] && byId['mmaud'].modality, { la:1, csi:0, rf:0, rgb:1, ir:0, lidar:1, radar:1, imu:.5, weather:0, acoustic:1 });
ck('MMAUD 年份/机构', [byId['mmaud'].year, /Nanyang/.test(byId['mmaud'].org)], [2024, true]);
ck('ISAC UAV 模态', byId['isac-uav-ilmenau'].modality, { la:1, csi:1, rf:0, rgb:0, ir:0, lidar:0, radar:1, imu:1, weather:0, acoustic:0 });
ck('MultiFly 模态', byId['multifly'].modality, { la:1, csi:0, rf:0, rgb:1, ir:1, lidar:1, radar:1, imu:1, weather:0, acoustic:0 });
ck('A2A-UAV 模态', byId['a2a-uav'].modality, { la:1, csi:0, rf:0, rgb:1, ir:1, lidar:0, radar:1, imu:0, weather:.5, acoustic:0 });
ck('16Ch 声学模态', byId['drone-acoustic-16ch'].modality, { la:1, csi:0, rf:0, rgb:0, ir:0, lidar:0, radar:0, imu:0, weather:0, acoustic:1 });
ck('UAV-Flow 模态', byId['uav-flow'].modality, { la:1, csi:0, rf:0, rgb:1, ir:0, lidar:0, radar:0, imu:1, weather:0, acoustic:0 });
ck('DREGON 模态', byId['drone-detection-dregon'].modality, { la:1, csi:0, rf:0, rgb:1, ir:1, lidar:0, radar:0, imu:0, weather:.5, acoustic:1 });
ck('Anti-UAV300 模态', byId['anti-uav300'].modality, { la:1, csi:0, rf:0, rgb:1, ir:1, lidar:0, radar:0, imu:0, weather:.5, acoustic:0 });
ck('DroneRFc-MM acoustic 已修正', byId['dronerfc-mm'].modality.acoustic, 1);
ck('NeoDrone ir', byId['neodrone'].modality.ir, 1);
ck('PML-CellularEye ir', byId['pml-cellulareye'].modality.ir, .5);

/* 2026-11 补录：空地信道实测 / 雷达-射频同步 / 视觉跟踪 / AERPAW 子集 */
ck('TSMS-Drone 模态（雷达+射频，无 CSI）', byId['tsms-drone'].modality, { la:1, csi:0, rf:1, rgb:0, ir:0, lidar:0, radar:1, imu:0, weather:0, acoustic:0 });
ck('TSMS-Drone 归类', [byId['tsms-drone'].year, byId['tsms-drone'].modality.la > 0], [2026, true]);
ck('A2G CIR (3.6 GHz) 记为部分 CSI', byId['a2g-cir'].modality.csi, .5);
ck('A2G CIR (3.6 GHz) 不含射频原始波形', byId['a2g-cir'].modality.rf, 0);
ck('A2G CIR + RT 为混合来源且仅预览', [byId['a2g-cir-rt'].source, byId['a2g-cir-rt'].access], ['mixed', 'preview']);
ck('UAV MM-Bench 为纯仿真且无 CSI', [byId['uav-mm-bench'].source, byId['uav-mm-bench'].modality.csi, byId['uav-mm-bench'].modality.rf], ['sim', 0, 0]);
ck('ATA 归入低空视觉轨道', [byId['ata'].modality.la, byId['ata'].modality.rgb, byId['ata'].access], [1, 1, 'pending']);
ck('AERPAW AADM 射频+遥测+雷达', byId['aerpaw-aadm'].modality, { la:1, csi:0, rf:1, rgb:0, ir:0, lidar:0, radar:.5, imu:1, weather:0, acoustic:0 });
ck('AADM 无正式论文以外字段齐全', [byId['aerpaw-aadm'].site.startsWith('https://doi.org/10.5061/dryad.'), !!byId['aerpaw-aadm'].authors], [true, true]);

/* 武警工程大学同系列三条（样例已公开、完整集未发布） */
ck('TriCross-D2D 纯 RGB 单模态', byId['tricross-d2d'].modality, { la:1, csi:0, rf:0, rgb:1, ir:0, lidar:0, radar:0, imu:0, weather:.5, acoustic:0 });
ck('TriCross-D2D 仅样例', byId['tricross-d2d'].access, 'preview');
ck('TMRGBT-D2D 双模态且年份为 2025', [byId['tmrgbt-d2d'].year, byId['tmrgbt-d2d'].modality.rgb, byId['tmrgbt-d2d'].modality.ir], [2025, 1, 1]);
ck('CPD-UAV 掩码数据需申请', [byId['cpd-uav'].access, byId['cpd-uav'].modality.ir], ['request', 0]);

/* 筛选：射频 / 红外 / 声学 */
const hit = (k) => { st.mods = new Set([k]); const n = ctx.__f().length; st.mods = new Set(); return n; };
ck('射频筛选命中数', hit('rf'), 15);
ck('红外筛选命中数', hit('ir'), 7);
ck('声学筛选命中数', hit('acoustic'), 8);
ck('红外命中条目', (() => { st.mods = new Set(['ir']); const ids = ctx.__f().map(d => d.id).sort(); st.mods = new Set(); return ids; })(),
   ['a2a-uav','anti-uav300','drone-detection-dregon','multifly','neodrone','pml-cellulareye','tmrgbt-d2d']);

/* 搜索 */
const q = (s) => { st.q = s; const n = ctx.__f().length; st.q = ''; return n; };
ck('搜 DREGON', q('dregon'), 1);
ck('搜 Mendeley', q('mendeley'), 3);
ck('搜 中国科学院大学', q('中国科学院大学'), 1);
ck('搜 Svanström', q('svanström'), 1);
ck('搜 南洋理工大学', q('南洋理工大学'), 1);
ck('搜 MMAUD', q('mmaud'), 1);
ck('搜 红外', q('红外'), 7);

/* 渲染 */
ctx.__mx();
const cnt = (html) => (html.match(/<tr /g) || []).length;
ck('低空矩阵行数', cnt(els['#matrix-table'].innerHTML), 57);
ck('通用矩阵行数', cnt(els['#matrix-table-other'].innerHTML), 14);
ck('矩阵表头列数', (els['#matrix-table'].innerHTML.match(/<th[ >]/g) || []).length, 12);
ck('矩阵含射频列', els['#matrix-table'].innerHTML.includes('射频信号'), true);
ck('矩阵射频色条数', (els['#matrix-table'].innerHTML.match(/csi-bar csi-rf/g) || []).length, 11);
ck('矩阵计数标签', [els['#mx-la-count'].textContent, els['#mx-gen-count'].textContent], ['57 个','14 个']);
ctx.__chips();
ck('筛选 chip 数', (els['#chips'].innerHTML.match(/class="chip/g) || []).length, 10);
ck('chip 中补充模态数', (els['#chips'].innerHTML.match(/class="chip sub"/g) || []).length, 3);
ck('chip 含射频', els['#chips'].innerHTML.includes('data-mod="rf"'), true);
ctx.__stats();
ck('hero 统计', (els['#stats'].innerHTML.match(/<div class="num[^"]*">([^<]*)<\/div>/g) || []).map(x => x.replace(/<[^>]+>/g, '')),
   ['71','57','14','16','13','2012\u20132026']);
ctx.__cards();
ck('卡片总数', (els['#grid-host'].innerHTML.match(/<article class="/g) || []).length, 71);
ck('access 徽章只标非开放', (els['#grid-host'].innerHTML.match(/badge-access/g) || []).length, 11);
/* 关键：射频类卡片不得再出现「部分 CSI」，且要有「射频信号」徽章 */
ck('「部分 CSI」徽章数 = 真·部分 CSI 条目数', (els['#grid-host'].innerHTML.match(/部分 CSI/g) || []).length, 6);
ck('「射频信号」徽章数', (els['#grid-host'].innerHTML.match(/badge-csi csi-rf/g) || []).length, 13);
ck('「部分射频」只给 KPI 类一条', (els['#grid-host'].innerHTML.match(/部分射频/g) || []).length, 1);
ck('结果行', els['#result-line'].innerHTML.replace(/<[^>]+>/g, ''), '显示 71 / 71 条索引记录（低空相关 57 · 通用基准 14）');

/* 无 paper 的条目：卡片不得输出 href="undefined" */
ck('卡片无 undefined 链接', /href="undefined"/.test(els['#grid-host'].innerHTML), false);
ck('无正式论文标签数', (els['#grid-host'].innerHTML.match(/无正式论文/g) || []).length, 6);

const exportData = JSON.parse(fs.readFileSync('data/datasets.json', 'utf8')).datasets;
const normalize = data => JSON.parse(JSON.stringify(data));
const datasetById = new Map(D.map(d => [d.id, d]));
ck('唯一数据集 ID', datasetById.size, D.length);
ck('无线标签引用有效条目', Object.keys(ctx.__wireless).filter(id => !datasetById.has(id)), []);
ck('无线标签无重复且状态与内容一致', D.filter(d =>
  new Set(d.wirelessTypes).size !== d.wirelessTypes.length ||
  (d.wirelessTypes.length ? d.wirelessStatus !== 'tagged' : !['none', 'unverified'].includes(d.wirelessStatus))
).map(d => d.id), []);
ck('父条目必须是合集', D.filter(d =>
  d.parentId && (d.parentId === d.id || datasetById.get(d.parentId)?.kind !== 'collection')
).map(d => d.id), []);
const wirelessMetadata = d => [d.id, d.wirelessStatus, d.wirelessTypes, d.kind, d.parentId, d.subsets];
const exportedById = new Map(exportData.map(d => [d.id, d]));
ck('网页与 JSON 条目数', exportData.length, D.length);
ck('网页与 JSON 无线标签及合集关系', D.filter(d => {
  const exported = exportedById.get(d.id);
  return !exported || JSON.stringify(normalize(wirelessMetadata(d))) !==
    JSON.stringify(normalize(wirelessMetadata(exported)));
}).map(d => d.id), []);
el('#wireless-type').value = 'Radar I/Q';
ck('雷达 I/Q 使用细分类型筛选', ctx.__f().some(d => d.id === 'tsms-drone'), true);
ck('雷达 I/Q 筛选排除纯射频条目', ctx.__f().some(d => d.id === 'rfuav'), false);
el('#wireless-type').value = 'unverified';
ck('待核实筛选排除无适用类型', ctx.__f().some(d => d.id === 'kitti'), false);
ck('待核实筛选保留待核实条目', ctx.__f().length > 0, true);

console.log(bad === 0 ? '\nALL PASS' : '\n' + bad + ' FAILED');
process.exit(bad ? 1 : 0);
