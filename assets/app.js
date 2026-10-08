/* ==========================================================================
   Low-Altitude Datasets — data + rendering
   Data source: LAMBDA (arXiv:2607.03826), Table 1.
   Modality scale: 1 = included, 0.5 = limited/partial, 0 = absent.
   ========================================================================== */

const MODALITIES = [
  { key: 'la',      zh: '低空',     en: 'Low-altitude' },
  { key: 'csi',     zh: 'CSI信道',  en: 'CSI' },
  { key: 'rgb',     zh: 'RGB/深度', en: 'RGB/Depth' },
  { key: 'lidar',   zh: 'LiDAR',    en: 'LiDAR' },
  { key: 'radar',   zh: '雷达',     en: 'Radar' },
  { key: 'imu',     zh: 'IMU/GPS',  en: 'IMU/GPS' },
  { key: 'weather', zh: '天气/时间', en: 'Weather/Time' }
];

const DATASETS = [
  {
    id: 'kitti', name: 'KITTI', year: 2012,
    authors: 'Andreas Geiger, Philip Lenz, Raquel Urtasun',
    org: 'Karlsruhe Institute of Technology (KIT)',
    venue: 'CVPR 2012',
    site: 'https://www.cvlibs.net/datasets/kitti/',
    paper: 'https://doi.org/10.1109/CVPR.2012.6248074',
    focusZh: '地面自动驾驶感知基准',
    focusEn: 'Terrestrial autonomous-driving perception',
    modality: { la: 0, csi: 0, rgb: 1, lidar: 1, radar: 0, imu: 1, weather: .5 }
  },
  {
    id: 'deepmimo', name: 'DeepMIMO', year: 2019,
    authors: 'Ahmed Alkhateeb',
    org: 'Arizona State University',
    venue: 'ITA Workshop 2019',
    site: 'https://www.deepmimo.net/',
    paper: 'https://doi.org/10.48550/arXiv.1902.06435',
    focusZh: '可配置射线追踪信道数据集',
    focusEn: 'Configurable ray-tracing channels',
    modality: { la: 0, csi: 1, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: .5 }
  },
  {
    id: 'viwi', name: 'ViWi', year: 2020,
    authors: 'Muhammad Alrabeiah, Andrew Hredzak, Zhenhao Liu, Ahmed Alkhateeb',
    org: 'Arizona State University',
    venue: 'IEEE VTC2020-Spring',
    site: 'https://www.viwi-dataset.net/',
    paper: 'https://doi.org/10.1109/VTC2020-Spring48590.2020.9128579',
    focusZh: '视觉辅助无线通信',
    focusEn: 'Vision-aided wireless communications',
    modality: { la: 0, csi: 1, rgb: 1, lidar: .5, radar: 0, imu: 0, weather: .5 }
  },
  {
    id: 'opv2v', name: 'OPV2V', year: 2022,
    authors: 'Runsheng Xu, Hao Xiang, Zhengzhong Tu, Xin Xia, Ming-Hsuan Yang, Jiaqi Ma',
    org: 'University of California, Los Angeles (UCLA)',
    venue: 'ICRA 2022',
    site: 'https://mobility-lab.seas.ucla.edu/opv2v/',
    paper: 'https://doi.org/10.1109/ICRA46639.2022.9812038',
    focusZh: '车车协同感知',
    focusEn: 'V2V cooperative perception',
    modality: { la: 0, csi: 0, rgb: 1, lidar: 1, radar: 0, imu: .5, weather: .5 }
  },
  {
    id: 'dairv2x', name: 'DAIR-V2X', year: 2022,
    authors: 'Haibao Yu, Yizhen Luo, Mao Shu, Yiyi Huo, et al.',
    org: 'Tsinghua University AIR / Baidu',
    venue: 'CVPR 2022',
    site: 'https://air.tsinghua.edu.cn/DAIR-V2X/index.html',
    siteAlt: 'https://thudair.baai.ac.cn/index',
    paper: 'https://doi.org/10.1109/CVPR52688.2022.02067',
    focusZh: '真实车路协同感知',
    focusEn: 'Real-world vehicle-infrastructure perception',
    modality: { la: 0, csi: 0, rgb: 1, lidar: 1, radar: 0, imu: .5, weather: .5 }
  },
  {
    id: 'eflash', name: 'E-FLASH', year: 2022,
    authors: 'Jerry Gu, Batool Salehi, Debashri Roy, Kaushik R. Chowdhury',
    org: 'Northeastern University',
    venue: 'IEEE Communications Magazine 2022',
    site: 'https://ieee-dataport.org/documents/e-flash',
    paper: 'https://doi.org/10.1109/MCOM.002.2200028',
    focusZh: '实测毫米波V2X波束选择',
    focusEn: 'Real-world mmWave V2X beam selection',
    modality: { la: 0, csi: .5, rgb: .5, lidar: 1, radar: 0, imu: 1, weather: .5 }
  },
  {
    id: 'waird', name: 'WAIR-D', year: 2022,
    authors: 'Yourui Huangfu, Jian Wang, Shengchen Dai, Rong Li, et al.',
    org: 'Huawei Wireless Technology Lab / Zhejiang University',
    venue: 'IEEE/CIC ICCC 2022',
    site: 'https://www.mobileai-dataset.com/html/default/yingwen/DateSet/1590994253188792322.html?index=1',
    paper: 'https://ieeexplore.ieee.org/document/9880684',
    focusZh: '真实地图上的无线AI信道',
    focusEn: 'Wireless AI channels over real-world maps',
    modality: { la: 0, csi: 1, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0 }
  },
  {
    id: 'm3sc', name: 'M3SC', year: 2023,
    authors: 'Xiang Cheng, Ziwei Huang, Lu Bai, Haotian Zhang, et al.',
    org: 'Peking University (PCNI Lab)',
    venue: 'China Communications 2023',
    site: 'http://pcni.pku.edu.cn/dataset_1.html',
    paper: 'https://doi.org/10.23919/JCC.fa.2023-0268.202311',
    focusZh: '混合多模态通感一体化数据',
    focusEn: 'Mixed multimodal ISAC data',
    modality: { la: 0, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 0, weather: 1 }
  },
  {
    id: 'deepsense6g', name: 'DeepSense 6G', year: 2023,
    authors: 'Ahmed Alkhateeb, et al.',
    org: 'Arizona State University',
    venue: 'IEEE Communications Magazine 2023',
    site: 'https://www.deepsense6g.net/',
    paper: 'https://doi.org/10.1109/MCOM.006.2200730',
    focusZh: '实测多模态无线测量',
    focusEn: 'Real-world multimodal wireless measurements',
    modality: { la: .5, csi: .5, rgb: 1, lidar: 1, radar: 1, imu: .5, weather: .5 }
  },
  {
    id: 'sdcd', name: 'SDCD', year: 2024,
    authors: 'Jihao Li, Jincheng Hu, Yanjun Huang, Zheng Chen, Bingzhao Gao, Jingjing Jiang, Yuanjian Zhang',
    org: 'University of Southampton / Tongji University',
    venue: 'Scientific Data 11:301 (2024)',
    site: 'https://github.com/ReparkHjc/SDCD',
    paper: 'https://doi.org/10.1038/s41597-024-03025-5',
    focusZh: '合成数字城市RGB-深度鲁棒性',
    focusEn: 'Synthetic digital-city RGB-depth robustness',
    modality: { la: 0, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 1 }
  },
  {
    id: 'deepverse6g', name: 'DeepVerse 6G', year: 2024,
    authors: 'Umut Demirhan, Abdelrahman Taha, Ahmed Alkhateeb',
    org: 'Arizona State University',
    venue: 'Preprint / IEEE DataPort',
    site: 'https://deepverse6g.net/',
    siteAlt: 'https://www.wi-lab.net/datasets-page/',
    paper: 'https://doi.org/10.21227/nk8m-6087',
    focusZh: '数字孪生无线数据集',
    focusEn: 'Digital-twin wireless datasets',
    modality: { la: .5, csi: 1, rgb: 1, lidar: .5, radar: 1, imu: .5, weather: .5 }
  },
  {
    id: 'synthsom', name: 'SynthSoM', year: 2025,
    authors: 'Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, Mingran Sun, et al.',
    org: 'Peking University / Shandong University',
    venue: 'Scientific Data 12:819 (2025)',
    site: 'https://github.com/ZiweiHuang96/SynthSoM',
    siteAlt: 'https://figshare.com/s/3c0203236d3ae2eed872',
    paper: 'https://doi.org/10.1038/s41597-025-05065-x',
    focusZh: '空地协同机器联觉(SoM)合成数据集',
    focusEn: 'Synthetic SoM dataset with air-ground scenarios',
    modality: { la: .5, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 0, weather: 1 }
  },
  {
    id: 'multimodal-wireless', name: 'Multimodal-Wireless', year: 2025,
    authors: 'Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li',
    org: 'Southeast University / Imperial College London',
    venue: 'arXiv:2511.03220 · ICC 2026',
    site: 'https://le-liang.github.io/mmw',
    paper: 'https://arxiv.org/abs/2511.03220',
    focusZh: 'V2X多模态通信与感知',
    focusEn: 'V2X multimodal communication and perception',
    modality: { la: 0, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 1, weather: 1 }
  },
  {
    id: 'multimodal-nf', name: 'Multimodal-NF', year: 2026,
    authors: 'Mengyuan Li, Qianfan Lu, Jiachen Tian, Hongjun Hu, Yu Han, Xiao Li, Chao-Kai Wen, Shi Jin',
    org: 'Southeast University',
    venue: 'arXiv:2603.28280',
    site: 'https://lmyxxn.github.io/6GXLMIMODatasets/',
    paper: 'https://arxiv.org/abs/2603.28280',
    focusZh: '近场低空XL-MIMO',
    focusEn: 'Near-field low-altitude XL-MIMO',
    modality: { la: 1, csi: 1, rgb: 1, lidar: 1, radar: 0, imu: 1, weather: .5 }
  },
  {
    id: 'pml-cellulareye', name: 'PML-CellularEye', year: 2026,
    authors: 'Ziguo Zhong, Yongming Huang, Huazhou Hou, Fanfei Xu, Haisheng Feng, Shengheng Liu, Xiaohu You',
    org: 'Purple Mountain Laboratories / Southeast University',
    venue: 'Science China Information Sciences 69(6):167301 (2026)',
    site: 'https://github.com/ffxu1024/CellularEye_web',
    paper: 'https://doi.org/10.1007/s11432-026-4923-1',
    focusZh: '实测基站侧低空ISAC数据',
    focusEn: 'Real-world BS-side low-altitude ISAC data',
    modality: { la: 1, csi: .5, rgb: .5, lidar: 0, radar: .5, imu: 1, weather: 1 }
  },
  {
    id: 'lambda', name: 'LAMBDA', year: 2026,
    authors: 'Lin Zhou, Peichuan Rao, Chenshuo Zhang, Jianhua Mo, Shu Sun, Zhiyong Chen, Meixia Tao',
    org: 'Shanghai Jiao Tong University',
    venue: 'arXiv:2607.03826 · Science Data Bank',
    site: 'https://doi.org/10.57760/sciencedb.36052',
    paper: 'https://arxiv.org/abs/2607.03826',
    focusZh: '低空多模态通感一体化基础数据集',
    focusEn: 'Low-altitude multimodal ISAC data',
    modality: { la: 1, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 1, weather: 1 },
    self: true
  }
];

/* ---------------- state ---------------- */
const state = { q: '', mods: new Set(), laOnly: false, sort: 'year-desc', view: 'grid' };

/* ---------------- helpers ---------------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function markOf(v) {
  if (v === 1)   return { cls: 'y', ch: '\u2713', txt: '包含' };
  if (v === .5)  return { cls: 'p', ch: '\u25B3', txt: '部分支持' };
  return { cls: 'n', ch: '\u00D7', txt: '缺失' };
}

function modalityTags(ds) {
  return MODALITIES
    .filter(m => ds.modality[m.key] > 0)
    .map(m => {
      const full = ds.modality[m.key] === 1;
      return `<span class="mod ${full ? 'full' : 'part'}" title="${m.en}：${full ? '包含' : '部分支持'}">
                <span class="m">${full ? '\u2713' : '\u25B3'}</span>${m.zh}
              </span>`;
    }).join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------------- filtering ---------------- */
function filtered() {
  const q = state.q.trim().toLowerCase();
  let list = DATASETS.filter(ds => {
    if (state.laOnly && ds.modality.la === 0) return false;
    if (state.mods.size) {
      for (const k of state.mods) if (ds.modality[k] === 0) return false;
    }
    if (q) {
      const hay = [ds.name, ds.org, ds.venue, ds.authors, ds.focusZh, ds.focusEn, String(ds.year)]
        .join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const byYear = (a, b) => (a.year - b.year) || a.name.localeCompare(b.name);
  if (state.sort === 'year-desc') list.sort((a, b) => (b.year - a.year) || a.name.localeCompare(b.name));
  else if (state.sort === 'year-asc') list.sort(byYear);
  else if (state.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  else if (state.sort === 'rich') {
    const score = d => MODALITIES.reduce((s, m) => s + d.modality[m.key], 0);
    list.sort((a, b) => (score(b) - score(a)) || byYear(a, b));
  }
  return list;
}

/* ---------------- render: cards ---------------- */
function cardHtml(ds) {
  const alt = ds.siteAlt ? `<a class="link-btn" href="${ds.siteAlt}" target="_blank" rel="noopener">备用镜像</a>` : '';
  return `
  <article class="card${ds.self ? ' is-self' : ''}">
    <div class="card-top">
      <div class="card-title">
        <h3><a href="${ds.site}" target="_blank" rel="noopener">${escapeHtml(ds.name)}</a></h3>
        <div class="org">${escapeHtml(ds.org)}</div>
      </div>
      <div class="badges">
        <span class="badge-year">${ds.year}</span>
        ${ds.self ? '<span class="badge-self">This work</span>' : ''}
      </div>
    </div>
    <div class="card-focus">
      ${escapeHtml(ds.focusZh)}
      <span class="en">${escapeHtml(ds.focusEn)}</span>
    </div>
    <div class="card-authors"><strong>作者</strong> ${escapeHtml(ds.authors)}</div>
    <div class="mods">${modalityTags(ds)}</div>
    <div class="venue-row">${escapeHtml(ds.venue)}</div>
    <div class="card-links">
      <a class="link-btn primary" href="${ds.site}" target="_blank" rel="noopener">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>
        数据集主页
      </a>
      <a class="link-btn" href="${ds.paper}" target="_blank" rel="noopener">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
        论文
      </a>
      ${alt}
    </div>
  </article>`;
}

function renderCards() {
  const list = filtered();
  const box = $('#grid');
  box.innerHTML = list.length
    ? list.map(cardHtml).join('')
    : '<div class="empty">没有匹配的数据集，试试调整筛选条件或清空搜索。</div>';
  $('#result-line').innerHTML = `显示 <b>${list.length}</b> / ${DATASETS.length} 个数据集`;
}

/* ---------------- render: matrix ---------------- */
function renderMatrix() {
  const list = DATASETS.slice().sort((a, b) => (a.year - b.year) || a.name.localeCompare(b.name));
  const head = MODALITIES.map(m => `<th>${m.zh}<span class="en">${m.en}</span></th>`).join('');
  const body = list.map(ds => {
    const cells = MODALITIES.map(m => {
      const k = markOf(ds.modality[m.key]);
      return `<td><span class="mark ${k.cls}" title="${m.en}：${k.txt}">${k.ch}</span></td>`;
    }).join('');
    return `<tr class="${ds.self ? 'hl' : ''}">
      <td class="name"><a href="${ds.site}" target="_blank" rel="noopener">${escapeHtml(ds.name)}</a><span class="yr">${ds.year}</span></td>
      ${cells}
      <td class="name" style="font-weight:400;color:var(--text-2);white-space:normal;min-width:180px">${escapeHtml(ds.focusEn)}</td>
    </tr>`;
  }).join('');

  $('#matrix-table').innerHTML = `
    <thead><tr><th class="name" style="min-width:150px">数据集<span class="en">Dataset</span></th>${head}<th>主要关注点<span class="en">Main focus</span></th></tr></thead>
    <tbody>${body}</tbody>`;
}

/* ---------------- render: toolbar + stats ---------------- */
function renderChips() {
  $('#chips').innerHTML = MODALITIES.map(m =>
    `<span class="chip" data-mod="${m.key}">${m.zh} <small>${m.en}</small></span>`).join('');
}

function renderStats() {
  const total = DATASETS.length;
  const la = DATASETS.filter(d => d.modality.la > 0).length;
  const years = DATASETS.map(d => d.year);
  const span = `${Math.min(...years)}\u2013${Math.max(...years)}`;
  const full = DATASETS.filter(d => MODALITIES.every(m => d.modality[m.key] === 1)).length;
  const cells = [
    ['收录数据集', total],
    ['支持低空场景', la],
    ['时间跨度', span],
    ['全模态覆盖', full]
  ];
  $('#stats').innerHTML = cells.map(([l, v]) =>
    `<div class="stat"><div class="num">${v}</div><div class="lbl">${l}</div></div>`).join('');
}

/* ---------------- events ---------------- */
function bind() {
  $('#search').addEventListener('input', e => { state.q = e.target.value; renderCards(); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; renderCards(); });
  $('#la-only').addEventListener('change', e => { state.laOnly = e.target.checked; renderCards(); });

  $('#chips').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    const k = chip.dataset.mod;
    if (state.mods.has(k)) { state.mods.delete(k); chip.classList.remove('on'); }
    else { state.mods.add(k); chip.classList.add('on'); }
    renderCards();
  });

  $('#reset').addEventListener('click', () => {
    state.q = ''; state.mods.clear(); state.laOnly = false; state.sort = 'year-desc';
    $('#search').value = ''; $('#sort').value = 'year-desc'; $('#la-only').checked = false;
    $$('.chip').forEach(c => c.classList.remove('on'));
    renderCards();
  });
}

/* ---------------- boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year-now').textContent = new Date().getFullYear();
  renderStats();
  renderChips();
  renderMatrix();
  renderCards();
  bind();
});
