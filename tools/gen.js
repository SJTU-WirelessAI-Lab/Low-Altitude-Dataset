const fs=require('fs'), vm=require('vm');
const src=fs.readFileSync('assets/app.js','utf8');
const ctx={console, document:{addEventListener:()=>{},querySelector:()=>null,querySelectorAll:()=>[]}};
vm.createContext(ctx);
vm.runInContext(src+'\n;globalThis.__M=MODALITIES;globalThis.__D=DATASETS;', ctx);
const M=ctx.__M, D=ctx.__D;

/* source 是必填字段：漏写会在生成阶段就报错，避免 datasets.json 静默丢字段 */
const missing = D.filter(d => !['real','mixed','sim'].includes(d.source)).map(d => d.id);
if (missing.length) throw new Error('source 字段缺失或取值非法（应为 real / mixed / sim）: ' + missing.join(', '));
const out={
  meta:{
    title:"Low-Altitude Datasets",
    titleZh:"低空数据集",
    source:"LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication (arXiv:2607.03826), Table 1 + curator-verified additions",
    sourceUrl:"https://arxiv.org/abs/2607.03826",
    catalogUpdated: '2026-11-28',
    legend:{ "1":"included", "0.5":"limited / partial", "0":"absent or not applicable" },
    groupLegend:{ "low-altitude":"涉及无人机 / 低空场景", "general":"完全不含低空场景的上游基准" },
    csiLegend:{ "full":"有 CSI（完整 MIMO 信道）", "part":"部分 CSI（实测信道测量，未给完整 MIMO CSI）", "rf":"仅射频信号（原始 I/Q 等，无 CSI）", "none":"无 CSI" },
    accessLegend:{
      "open":"官方页面公开提供下载",
      "preview":"只公开部分 / 预览子集，完整数据待发布",
      "register":"需在托管平台注册（免费）账号后下载",
      "request":"需邮件 / 表单申请，授权后获取",
      "pending":"官方标注即将发布，当前无法获取"
    },
    groupLegendEn:{ "low-altitude":"Involves UAV / low-altitude scenarios", "general":"Upstream benchmarks with no low-altitude scenarios" },
    csiLegendEn:{ "full":"Full CSI (complete MIMO channel)", "part":"Partial CSI (measured channel, no complete MIMO CSI)", "rf":"RF signal only (raw I/Q etc., no CSI)", "none":"No CSI" },
    accessLegendEn:{
      "open":"Publicly downloadable from the official page",
      "preview":"Only part / a preview subset released; full data pending",
      "register":"Download after registering a (free) account on the hosting platform",
      "request":"Available after an email / form request is approved",
      "pending":"Announced as upcoming; not available yet"
    },
    sourceLegend:{
      "real":"真实传感器 / 外场采集",
      "mixed":"真实采集与仿真 / 合成增强并用",
      "sim":"射线追踪、数字孪生或渲染器生成，无真实采集"
    },
    sourceLegendEn:{
      "real":"Real sensors / field measurement",
      "mixed":"Real measurement combined with simulation / synthetic augmentation",
      "sim":"Ray tracing, digital twin or renderer output; no real measurement"
    }
  },
  modalities: M.map(m=>({key:m.key,zh:m.zh,en:m.en,core:!!m.core})),
  datasets: D.map(d=>({
    id:d.id,name:d.name,year:d.year,authors:d.authors,org:d.org,venue:d.venue,
    site:d.site, ...(d.siteAlt?{siteAlt:d.siteAlt}:{}), paper:d.paper,
    access: d.access || 'open',
    source: d.source,
    focusZh:d.focusZh,focusEn:d.focusEn,
    descZh:d.descZh,descEn:d.descEn,
    wirelessTypes:d.wirelessTypes, wirelessStatus:d.wirelessStatus,
    ...(d.kind ? {kind:d.kind} : {}), ...(d.parentId ? {parentId:d.parentId} : {}), ...(d.subsets ? {subsets:d.subsets} : {}),
    modality: Object.fromEntries(M.map(m=>[m.key, d.modality[m.key]===undefined?0:d.modality[m.key]])),
    group: (d.modality.la > 0 ? 'low-altitude' : 'general'),
    csiLevel: (d.modality.csi === 1 ? 'full' : (d.modality.csi === .5 ? 'part' : (d.modality.rf > 0 ? 'rf' : 'none'))),
    ...(d.self?{self:true}:{})
  }))
};
fs.writeFileSync('data/datasets.json', JSON.stringify(out,null,2)+'\n','utf8');
console.log('datasets =', out.datasets.length, '| modalities =', out.modalities.length);
