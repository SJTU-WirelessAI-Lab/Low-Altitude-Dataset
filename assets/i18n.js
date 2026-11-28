/* ==========================================================================
   Low-Altitude Datasets — UI strings (zh / en)

   界面文案的唯一来源。assets/app.js 通过 t(key, vars) 取值，index.html 通过
   data-i18n / data-i18n-html / data-i18n-ph 属性由 applyStaticI18n() 批量填充。

   约定：
   - 顶层只定义数据与纯函数，不触碰 document / window，
     这样 Node 端（gen.js、test_data.js）可以直接加载本文件而不报错。
   - 带变量的文案写 {name} 占位，由 t() 的第二个参数替换。
   ========================================================================== */

const I18N = {
  zh: {
    /* ---- meta ---- */
    'meta.title': '低空数据集 | Low-Altitude Datasets',
    'meta.desc': '低空经济与UAV通感一体化(ISAC)相关的开源数据集索引：汇编名称、官网链接、年份、作者与模态覆盖对比。',

    /* ---- header ---- */
    'brand.title': '低空数据集',
    'brand.sub': 'Low-Altitude Datasets',
    'nav.datasets': '数据集',
    'nav.matrix': '对比矩阵',
    'nav.about': '关于',

    /* ---- hero ---- */
    'hero.h1': '低空经济与UAV通感一体化的<br><span class="grad">开源数据集索引</span>',
    'hero.lede':
      '面向<strong>低空通感一体化(ISAC)</strong>研究，系统收集并展示已有的开源与半开源数据集，' +
      '统一给出<strong>名称、官方网站链接、发布年份、作者/机构</strong>以及<strong>模态覆盖对比</strong>。' +
      '清单以 <a href="https://arxiv.org/abs/2607.03826" target="_blank" rel="noopener">LAMBDA（arXiv:2607.03826）</a>' +
      '表1 为基准，并补充核实各数据集的官方主页与论文链接。',
    'hero.btnBrowse': '浏览数据集 ↓',
    'hero.btnMatrix': '查看模态对比矩阵',
    'hero.btnJson': '下载数据(datasets.json)',

    /* ---- section 01 ---- */
    'sec1.h2': '<span class="idx">01</span>数据集清单',
    'sec1.p': '点击卡片标题或「数据集主页」直达官方站点。搜索匹配名称、机构、作者、出处与年份；下方分面按范围、年份、模态、信道数据、无线类型、获取方式与数据来源组合筛选——同一行内多选取「或」，跨行取「且」，模态行多选为「同时具备」。',
    'search.ph': '搜索名称、作者、机构、出处、年份…',
    'sort.label': '排序',
    'sort.yearDesc': '年份（新→旧）',
    'sort.yearAsc': '年份（旧→新）',
    'sort.name': '名称（A→Z）',
    'sort.rich': '模态丰富度',
    'btn.reset': '重置',
    'btn.resetN': '清空 {n} 项',
    'wtype.unverified': '类型待核实',
    'wtype.none': '无适用类型',

    /* ---- facets ---- */
    'facet.scope': '范围',
    'facet.year': '年份',
    'facet.mod': '模态',
    'facet.chan': '信道数据',
    'facet.wtype': '无线类型',
    'facet.access': '获取方式',
    'facet.source': '数据来源',
    'facet.mod.hint': '多选表示「同时具备这些模态」',
    'facet.wtype.hint': '同一数据集可同时带有多种无线数据类型',
    'scope.la': '低空相关',
    'scope.gen': '通用基准',

    /* ---- section 02 ---- */
    'sec2.h2': '<span class="idx">02</span>模态覆盖对比矩阵',
    'sec2.p':
      '模态覆盖对照 LAMBDA 论文表1，并含编者补充收录的数据集。<strong>&#10003;</strong> 包含、' +
      '<strong>&#9651;</strong> 有限或部分支持、<strong>&#215;</strong> 缺失或不适用；单元格底色同步区分：' +
      '<strong>浅青绿</strong>为包含、<strong>浅琥珀</strong>为部分支持、<strong>留白</strong>为缺失或不适用。' +
      '表格按<strong>是否涉及低空场景</strong>拆为两张。「CSI 信道」与「射频信号」是两类不同模态——' +
      '前者为信道估计结果，后者为原始 I/Q、频谱等射频采集，二者互不替代。',
    'legend.mark': '模态标记',
    'legend.y': '包含',
    'legend.p': '有限 / 部分支持',
    'legend.n': '缺失 / 不适用',
    'legend.channel': '信道级数据',
    'legend.csiFull': '有 CSI（完整 MIMO 信道）',
    'legend.csiPart': '部分 CSI（实测信道测量）',
    'legend.csiRf': '射频信号（原始 I/Q，无 CSI）',
    'legend.csiNone': '均无',
    'legend.origin': '数据来源（低空）',
    'legend.real': '实测',
    'legend.mixed': '混合',
    'legend.sim': '仿真',
    'mx.laTitle': '低空相关数据集',
    'mx.laNote': '含无人机 / UAV 或低空场景的数据集；名称左侧色条表示信道级数据：<strong>完整 CSI</strong> / <strong>部分 CSI</strong> / <strong>仅射频信号</strong>（无 CSI）/ 均无。',
    'mx.genTitle': '通用 / 上游基准数据集',
    'mx.genNote': '完全不含低空场景，多为地面视角感知或纯信道 / 电磁数据集，作为上游经典基准一并列出。',
    'mx.note': '基准来源：LAMBDA (arXiv:2607.03826), Table 1（含编者补充收录）',
    'mx.count': '{n} 个',

    /* ---- section 03 ---- */
    'sec3.h2': '<span class="idx">03</span>关于本索引',
    'sec3.p': '收录范围、数据来源与使用说明。',
    'about.scopeTitle': '收录范围',
    'about.scopeP': '覆盖通感一体化(ISAC)仿真与实测、无线信道建模、射频/雷达探测、声学感知、无人机视觉与多模态感知等方向，并特别标注支持<strong>低空/UAV场景</strong>的数据集。',
    'about.scope1': '统计按索引条目计。AERPAW 合集及有独立引用的 AADM 各计一条，合集内仅链接的子集单列链接。',
    'about.scope2': '时间跨度 2012–2026',
    'about.scope3': '标注 10 类模态：7 类核心模态（低空、CSI、RGB/深度、LiDAR、雷达、IMU/GPS、天气/时间）+ 3 类补充模态（射频信号、红外、声学）',
    'about.scope4': '低空相关数据集按<strong>信道级数据</strong>着色：完整 MIMO 信道 / 部分信道测量 / <strong>仅射频信号</strong>（原始 I/Q 等，无 CSI）/ 均无',
    'about.scope5': '另标注 <strong>获取方式</strong>：默认开放下载，获取受限的条目（仅预览 / 需注册 / 需申请 / 未发布）在卡片上以徽章单独提示',
    'about.scope6': '另标注 <strong>数据来源</strong>：<strong>实测</strong>（真实传感器 / 外场采集）、<strong>混合</strong>（真实与合成并用）、<strong>仿真</strong>（射线追踪 / 数字孪生 / 渲染器生成），卡片徽章与矩阵图例同步显示',
    'about.scope7': '以 LAMBDA 表1 为基准，另补充收录 ISAC 仿真/实测、空地信道实测（南京航空航天大学两组 CIR、韩国航空大学 TSMS-Drone）、射频与雷达探测、红外/可见光探测、声学、视觉多模态等方向的公开数据集（含 KU Leuven、隆德大学等团队的低空实测数据）',
    'about.scope8': '「低空」模态记 <strong>0.5</strong> 表示数据或平台<strong>部分支持</strong>低空场景（如仅有平台扩展能力、当前发布版本尚无飞行轨迹），这类条目仍按 <code>la &gt; 0</code> 归入低空相关组',
    'about.srcTitle': '数据来源',
    'about.src1': '清单以 <strong>LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication</strong>（arXiv:2607.03826）表1 为基准。',
    'about.src2': '各数据集的<strong>官方网站链接、作者与出处</strong>由编者逐一核实。若链接失效或有遗漏，欢迎提交 Issue 或 Pull Request。',
    'about.src3': '查看 LAMBDA 论文 ↗',
    'about.citeTitle': '引用本索引',
    'about.citeP': '若本索引对你的研究有帮助，请引用 LAMBDA 论文：',
    'about.contribTitle': '贡献与维护',
    'about.contribP': '本站为静态站点，数据结构在 <code>data/datasets.json</code>，渲染逻辑在 <code>assets/app.js</code>。',
    'about.contrib1': '新增数据集：修改 <code>assets/app.js</code>，再用 <code>tools/</code> 中的脚本生成 JSON 与 README',
    'about.contrib2': '模态字段取值：<code>1</code> 包含 / <code>0.5</code> 部分 / <code>0</code> 缺失',
    'about.contrib3': '仓库：',

    /* ---- footer ---- */
    'footer.copy': '低空数据集索引 · 由 SJTU-WirelessAI-Lab 维护 · 数据来源 LAMBDA (arXiv:2607.03826)',
    'footer.paper': '论文',
    'footer.json': '数据(JSON)',

    /* ---- stats ---- */
    'stat.total': '收录条目',
    'stat.la': '低空相关',
    'stat.gen': '通用 / 上游基准',
    'stat.laCsi': '低空且含 CSI',
    'stat.laRf': '低空且含射频信号',
    'stat.span': '时间跨度',

    /* ---- grid ---- */
    'grid.laTitle': '低空相关数据集',
    'grid.laNote': '含无人机/UAV 或低空场景',
    'grid.genTitle': '通用 / 上游基准数据集',
    'grid.genNote': '完全不含低空场景',
    'grid.count': '{n} 个',
    'result.line': '显示 <b>{n}</b> / {total} 条索引记录（低空相关 <b>{la}</b> · 通用基准 <b>{gen}</b>）',
    'result.lineBare': '显示 <b>{n}</b> / {total} 条索引记录',
    'empty': '没有匹配的数据集，试试调整筛选条件或清空搜索。',

    /* ---- card ---- */
    'card.authors': '作者',
    'card.site': '数据集主页',
    'card.paper': '论文',
    'card.noPaper': '无正式论文',
    'card.noPaperTip': '该数据集由数据仓库直接发布，暂无配套正式论文',
    'card.alt': '备用镜像',
    'card.partOf': '所属合集：',
    'card.collection': '合集',
    'card.wtypePending': '无线数据类型待核实',
    'card.wireless': '无线数据：',
    'card.sourceTip': '数据来源：',

    /* ---- matrix table ---- */
    'mx.th.dataset': '数据集',
    'mx.th.focus': '主要关注点',
    'mx.genNoteLine': '通用 / 上游基准：实测 {real} · 混合 {mixed} · 仿真 {sim}',

    /* ---- mark / modality tags ---- */
    'mark.y': '包含',
    'mark.p': '部分支持',
    'mark.n': '缺失',
    'mod.included': '包含',
    'mod.partial': '部分支持',

    /* ---- channel-level (CSI) ---- */
    'csi.full.label': '有 CSI',
    'csi.full.note': '提供完整 MIMO 信道 CSI',
    'csi.part.label': '部分 CSI',
    'csi.part.note': '实测信道测量，但未给完整 MIMO CSI（如波束 SNR、功率时延谱、下行信道传递函数）',
    'csi.rf.label': '射频信号',
    'csi.rf.note': '提供无人机/电磁射频信号采集（原始 I/Q、频谱、距离-多普勒图等），不含信道 CSI',
    'csi.rfPart.label': '部分射频',
    'csi.rfPart.note': '仅提供射频侧派生指标（KPI、RSRP、频谱统计等），无原始波形，也无信道 CSI',
    'csi.none.label': '无 CSI',
    'csi.none.note': '不含 CSI / 射频信号数据',

    /* ---- access ---- */
    'access.open.label': '开放下载',
    'access.open.note': '官方页面公开提供下载',
    'access.preview.label': '仅预览',
    'access.preview.note': '只公开部分 / 预览子集，完整数据待发布',
    'access.register.label': '需注册',
    'access.register.note': '需在托管平台注册（免费）账号后下载',
    'access.request.label': '需申请',
    'access.request.note': '需邮件 / 表单申请，授权后获取',
    'access.pending.label': '未发布',
    'access.pending.note': '官方标注即将发布，当前无法获取',

    /* ---- data origin ---- */
    'source.real.label': '实测',
    'source.real.note': '真实传感器 / 外场采集',
    'source.mixed.label': '混合',
    'source.mixed.note': '真实采集与仿真 / 合成增强并用',
    'source.sim.label': '仿真',
    'source.sim.note': '射线追踪、数字孪生或渲染器生成，无真实采集'
  },

  en: {
    /* ---- meta ---- */
    'meta.title': 'Low-Altitude Datasets | UAV Sensing & Communication',
    'meta.desc': 'An index of open datasets for low-altitude economy and UAV integrated sensing and communication (ISAC): names, official links, release years, authors and modality coverage.',

    /* ---- header ---- */
    'brand.title': 'Low-Altitude Datasets',
    'brand.sub': 'UAV Sensing & Communication',
    'nav.datasets': 'Datasets',
    'nav.matrix': 'Matrix',
    'nav.about': 'About',

    /* ---- hero ---- */
    'hero.h1': 'Open Dataset Index for<br><span class="grad">Low-Altitude Economy & UAV ISAC</span>',
    'hero.lede':
      'A systematic collection of public and partially open datasets for <strong>low-altitude integrated sensing and ' +
      'communication (ISAC)</strong> research, reporting for every entry its <strong>name, official website, release ' +
      'year, authors / affiliation</strong> and a <strong>modality coverage comparison</strong>. The catalogue is ' +
      'built on Table 1 of <a href="https://arxiv.org/abs/2607.03826" target="_blank" rel="noopener">LAMBDA ' +
      '(arXiv:2607.03826)</a> and cross-checked against each dataset&rsquo;s official page and paper.',
    'hero.btnBrowse': 'Browse datasets ↓',
    'hero.btnMatrix': 'Modality matrix',
    'hero.btnJson': 'Download datasets.json',

    /* ---- section 01 ---- */
    'sec1.h2': '<span class="idx">01</span>Dataset catalogue',
    'sec1.p': 'Click a card title or “Dataset site” to open the official page. The search box matches names, affiliations, authors, venues and years; the facets below combine scope, year, modality, channel data, wireless type, access and data source — values inside a row are OR-ed, rows are AND-ed, and multiple modalities mean “has all of them”.',
    'search.ph': 'Search name, authors, affiliation, venue, year…',
    'sort.label': 'Sort',
    'sort.yearDesc': 'Year (new → old)',
    'sort.yearAsc': 'Year (old → new)',
    'sort.name': 'Name (A → Z)',
    'sort.rich': 'Modality coverage',
    'btn.reset': 'Reset',
    'btn.resetN': 'Clear {n}',
    'wtype.unverified': 'To be verified',
    'wtype.none': 'No applicable type',

    /* ---- facets ---- */
    'facet.scope': 'Scope',
    'facet.year': 'Year',
    'facet.mod': 'Modality',
    'facet.chan': 'Channel data',
    'facet.wtype': 'Wireless type',
    'facet.access': 'Access',
    'facet.source': 'Data source',
    'facet.mod.hint': 'Multiple selections mean “has all of these modalities”',
    'facet.wtype.hint': 'One dataset may carry several wireless data types',
    'scope.la': 'Low-altitude',
    'scope.gen': 'General',

    /* ---- section 02 ---- */
    'sec2.h2': '<span class="idx">02</span>Modality coverage matrix',
    'sec2.p':
      'Coverage follows Table 1 of the LAMBDA paper, plus curator-added datasets. <strong>&#10003;</strong> included, ' +
      '<strong>&#9651;</strong> limited or partial, <strong>&#215;</strong> absent or not applicable; cell shading ' +
      'mirrors this — <strong>light teal</strong> included, <strong>light amber</strong> partial, ' +
      '<strong>blank</strong> absent. Tables are split by <strong>whether low-altitude scenarios are involved</strong>. ' +
      '“CSI” and “RF signal” are distinct modalities: the former is a channel-estimation ' +
      'product, the latter raw I/Q or spectrum captures. Neither substitutes for the other.',
    'legend.mark': 'Markers',
    'legend.y': 'Included',
    'legend.p': 'Limited / partial',
    'legend.n': 'Absent / n.a.',
    'legend.channel': 'Channel-level data',
    'legend.csiFull': 'Full CSI (MIMO channel)',
    'legend.csiPart': 'Partial CSI (measured)',
    'legend.csiRf': 'RF signal (raw I/Q, no CSI)',
    'legend.csiNone': 'None',
    'legend.origin': 'Data origin (low-alt.)',
    'legend.real': 'Measured',
    'legend.mixed': 'Mixed',
    'legend.sim': 'Simulated',
    'mx.laTitle': 'Low-altitude datasets',
    'mx.laNote': 'Datasets involving UAV or low-altitude scenarios. The colour bar left of each name encodes channel-level data: <strong>full CSI</strong> / <strong>partial CSI</strong> / <strong>RF signal only</strong> (no CSI) / none.',
    'mx.genTitle': 'General / upstream benchmark datasets',
    'mx.genNote': 'No low-altitude scenarios at all; mostly terrestrial perception or pure channel / electromagnetic datasets, listed as upstream references.',
    'mx.note': 'Source: LAMBDA (arXiv:2607.03826), Table 1, with curator additions',
    'mx.count': '{n} datasets',

    /* ---- section 03 ---- */
    'sec3.h2': '<span class="idx">03</span>About this index',
    'sec3.p': 'Scope, provenance and usage notes.',
    'about.scopeTitle': 'Scope',
    'about.scopeP': 'Covers ISAC simulation and measurement, wireless channel modelling, RF / radar detection, acoustic sensing, and UAV vision and multimodal perception, with datasets supporting <strong>low-altitude / UAV scenarios</strong> explicitly flagged.',
    'about.scope1': 'Counts are per indexed entry. The AERPAW collection and the independently cited AADM each count as one; subsets that are only linked are listed as links.',
    'about.scope2': 'Time span 2012–2026',
    'about.scope3': '10 modalities: 7 core (low-altitude, CSI, RGB/depth, LiDAR, radar, IMU/GPS, weather/time) plus 3 supplementary (RF signal, infrared, acoustic)',
    'about.scope4': 'Low-altitude datasets are colour-coded by <strong>channel-level data</strong>: full MIMO channel / partial channel measurement / <strong>RF signal only</strong> (raw I/Q, no CSI) / none',
    'about.scope5': 'Also flagged: <strong>access</strong>. Open download is the default; restricted entries (preview only / registration / request / not yet released) carry a badge on the card',
    'about.scope6': 'Also flagged: <strong>data origin</strong> — <strong>measured</strong> (real sensors / field campaigns), <strong>mixed</strong> (real plus synthetic), <strong>simulated</strong> (ray tracing / digital twin / renderer). Shown on cards and in the matrix legend',
    'about.scope7': 'Based on Table 1 of LAMBDA, extended with public datasets on ISAC simulation and measurement, measured air–ground channels (two CIR sets from NUAA, TSMS-Drone from Korea Aerospace University), RF and radar detection, infrared / visible detection, acoustics and multimodal vision, including field data from KU Leuven and Lund University',
    'about.scope8': 'A <strong>0.5</strong> on the low-altitude modality means the data or platform only <strong>partially</strong> supports low-altitude scenarios (e.g. platform-level extensibility, or no flight trajectories in the current release). Such entries still count as low-altitude via <code>la &gt; 0</code>',
    'about.srcTitle': 'Provenance',
    'about.src1': 'The catalogue is based on Table 1 of <strong>LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication</strong> (arXiv:2607.03826).',
    'about.src2': 'Official links, authors and venues were verified entry by entry. If a link is broken or an entry is missing, please open an Issue or Pull Request.',
    'about.src3': 'Read the LAMBDA paper ↗',
    'about.citeTitle': 'Cite this index',
    'about.citeP': 'If this index helps your research, please cite the LAMBDA paper:',
    'about.contribTitle': 'Contributing',
    'about.contribP': 'This is a static site. Data lives in <code>data/datasets.json</code> and rendering in <code>assets/app.js</code>.',
    'about.contrib1': 'Adding a dataset: edit <code>assets/app.js</code>, then regenerate the JSON and README with the scripts in <code>tools/</code>',
    'about.contrib2': 'Modality values: <code>1</code> included / <code>0.5</code> partial / <code>0</code> absent',
    'about.contrib3': 'Repository: ',

    /* ---- footer ---- */
    'footer.copy': 'Low-Altitude Dataset Index · maintained by SJTU-WirelessAI-Lab · based on LAMBDA (arXiv:2607.03826)',
    'footer.paper': 'Paper',
    'footer.json': 'Data (JSON)',

    /* ---- stats ---- */
    'stat.total': 'Datasets',
    'stat.la': 'Low-altitude',
    'stat.gen': 'General benchmarks',
    'stat.laCsi': 'LA with CSI',
    'stat.laRf': 'LA with RF',
    'stat.span': 'Year span',

    /* ---- grid ---- */
    'grid.laTitle': 'Low-altitude datasets',
    'grid.laNote': 'involving UAV or low-altitude scenarios',
    'grid.genTitle': 'General / upstream benchmarks',
    'grid.genNote': 'no low-altitude scenarios',
    'grid.count': '{n} datasets',
    'result.line': 'Showing <b>{n}</b> of {total} entries (low-altitude <b>{la}</b> · general <b>{gen}</b>)',
    'result.lineBare': 'Showing <b>{n}</b> of {total} entries',
    'empty': 'No dataset matches these filters. Try adjusting them or clearing the search.',

    /* ---- card ---- */
    'card.authors': 'Authors',
    'card.site': 'Dataset site',
    'card.paper': 'Paper',
    'card.noPaper': 'No paper',
    'card.noPaperTip': 'Released directly as a data repository; no accompanying paper',
    'card.alt': 'Mirror',
    'card.partOf': 'Part of: ',
    'card.collection': 'Collection',
    'card.wtypePending': 'Wireless data type not yet verified',
    'card.wireless': 'Wireless data: ',
    'card.sourceTip': 'Data origin: ',

    /* ---- matrix table ---- */
    'mx.th.dataset': 'Dataset',
    'mx.th.focus': 'Main focus',
    'mx.genNoteLine': 'General: measured {real} · mixed {mixed} · simulated {sim}',

    /* ---- mark / modality tags ---- */
    'mark.y': 'Included',
    'mark.p': 'Partial',
    'mark.n': 'Absent',
    'mod.included': 'included',
    'mod.partial': 'partial',

    /* ---- channel-level (CSI) ---- */
    'csi.full.label': 'Full CSI',
    'csi.full.note': 'Provides complete MIMO channel CSI',
    'csi.part.label': 'Partial CSI',
    'csi.part.note': 'Measured channel data, but not full MIMO CSI (e.g. beam SNR, power delay profile, downlink channel transfer function)',
    'csi.rf.label': 'RF signal',
    'csi.rf.note': 'Provides UAV / electromagnetic RF captures (raw I/Q, spectrum, range-Doppler maps), without channel CSI',
    'csi.rfPart.label': 'Partial RF',
    'csi.rfPart.note': 'Only RF-side derived metrics (KPI, RSRP, spectrum statistics); no raw waveforms and no channel CSI',
    'csi.none.label': 'No CSI',
    'csi.none.note': 'Contains neither CSI nor RF signal data',

    /* ---- access ---- */
    'access.open.label': 'Open',
    'access.open.note': 'Publicly downloadable from the official page',
    'access.preview.label': 'Preview',
    'access.preview.note': 'Only a subset / preview is public; full data pending release',
    'access.register.label': 'Register',
    'access.register.note': 'Requires a (free) account on the hosting platform',
    'access.request.label': 'On request',
    'access.request.note': 'Requires an email / form request and approval',
    'access.pending.label': 'Unreleased',
    'access.pending.note': 'Announced but not yet available',

    /* ---- data origin ---- */
    'source.real.label': 'Measured',
    'source.real.note': 'Real sensors / field campaign',
    'source.mixed.label': 'Mixed',
    'source.mixed.note': 'Real acquisition combined with simulation / synthetic augmentation',
    'source.sim.label': 'Simulated',
    'source.sim.note': 'Ray tracing, digital twin or renderer output; no real acquisition'
  }
};

/* 无线数据类型标签的英文名。数据里（datasets.json 的 wirelessTypes）保留中文原值，
   只在英文界面渲染时映射——避免动数据层，也不影响下游消费方。 */
const WIRELESS_EN = {
  'MIMO CSI': 'MIMO CSI',
  'Beam/RSRP': 'Beam/RSRP',
  'RF KPI': 'RF KPI',
  'Raw I/Q': 'Raw I/Q',
  'CIR/PDP': 'CIR/PDP',
  'Path Loss/RSSI': 'Path loss/RSSI',
  '信道传递函数': 'Channel transfer function',
  'I/Q 波形': 'I/Q waveform',
  '距离-多普勒图': 'Range-Doppler map',
  '频谱/PSD': 'Spectrum/PSD',
  '微多普勒谱': 'Micro-Doppler spectrum',
  '雷达点云': 'Radar point cloud',
  'RF 采样（CSV）': 'RF samples (CSV)',
  '传播路径参数': 'Propagation path parameters'
};

/** 无线数据类型标签按当前语言显示 */
function wlLabel(x) {
  return isZh() ? x : (WIRELESS_EN[x] || x);
}

/* 数据里以中文记录的机构名与出处，英文界面用下列英文名替换。
   与 .workbuddy/tools/gen_readme.py 的 EN_FIELD 保持同一口径。
   作者姓名保留原文——中文人名转写作容易出错，不做自动拼音化。 */
const FIELD_EN = {
  org: {
    'dronerfa': 'College of Information Science and Electronic Engineering, Zhejiang University',
    'dronerfb-dir': 'College of Information Science and Electronic Engineering, Zhejiang University / State Key Laboratory of Industrial Control Technology',
    'dronerfc-mm': 'Zhejiang Provincial Key Laboratory of Airspace Perception and Autonomous Unmanned Systems, Zhejiang University',
    'em-134k': 'Tsinghua University / BUPT / Tianjin University / IMECAS, among others',
    'em-bench': 'Tsinghua University / BUPT / Tianjin University / IMECAS, among others',
    'lipase': 'The University of Hong Kong / SUSTech / Huawei, among others',
    'rfuav': 'Beijing University of Posts and Telecommunications and others',
    'lss-fmcwr': 'Naval Aviation University / Yantai University / University of Jinan',
    'uavscenes': 'Nanyang Technological University / Shanghai Jiao Tong University, among others',
    'neodrone': 'Beijing Low-Altitude Intelligent Systems',
    'uavdt': 'Chinese Academy of Sciences and others',
    'anti-uav300': 'University of Chinese Academy of Sciences / North Institute of Electronic Equipment'
  },
  authors: {
    'dads': 'Community (schiffman / geronimobasso)',
    'neodrone': 'NeoDrone team (Beijing data intellectual property registration)'
  },
  venue: {
    'dronerfa': 'Journal of Electronics & Information Technology 46(4): 1147–1156 (2024)',
    'dronerfb-dir': 'Journal of Electronics & Information Technology 47(3): 573–581 (2025)',
    'dronerfc-mm': 'Journal of Electronics & Information Technology (online first, 2026)',
    'great-msd': 'arXiv:2507.08716 (Great-X platform)',
    'lss-fmcwr': 'Journal of Radars 13(3): 539–553 (2024)',
    'neodrone': 'Beijing Data Intellectual Property Registration (2025)'
  }
};

/** 取 org / authors / venue；英文界面用英文覆盖并把全角括号换成半角 */
function fieldOf(ds, kind) {
  const v = ds[kind];
  if (isZh()) return v;
  const m = FIELD_EN[kind] || {};
  /* 全角括号转半角；英文正文里左括号前应留一个空格（team（X）→ team (X)） */
  return (m[ds.id] || v)
    .replace(/([A-Za-z0-9])（/g, '$1 (')
    .replace(/（/g, '(')
    .replace(/）/g, ')');
}

/* 当前语言：'zh' | 'en'。由 app.js 的 setLang() 更新。 */
let LANG = 'zh';

/**
 * 取当前语言的文案。vars 用于替换 {name} 占位符。
 * 找不到键时回退到中文再回退到键名本身，避免界面上出现 undefined。
 */
function t(key, vars) {
  const pack = I18N[LANG] || I18N.zh;
  let s = pack[key];
  if (s === undefined) s = I18N.zh[key];
  if (s === undefined) return key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] === undefined ? m : String(vars[k])));
  return s;
}

/** 当前是否中文界面 */
const isZh = () => LANG === 'zh';

/**
 * 探测初始语言：URL 参数 > 显式记忆 > 浏览器语言。
 * `?lang=en` / `?lang=zh` 便于分享指定语言的链接。
 * 全程用 try/catch 包住，Node 环境或隐私模式下不会抛错。
 */
function detectLang() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'zh' || q === 'en') return q;
  } catch (e) { /* 无 location（Node / 测试）则忽略 */ }
  try {
    const saved = localStorage.getItem('lad-lang');
    if (saved === 'zh' || saved === 'en') return saved;
  } catch (e) { /* localStorage 不可用则忽略 */ }
  try {
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('zh')) return 'zh';
    if (nav) return 'en';
  } catch (e) { /* navigator 不可用则忽略 */ }
  return 'zh';
}

/**
 * 把 index.html 里带 data-i18n* 属性的静态节点按当前语言填好。
 * data-i18n        → textContent
 * data-i18n-html   → innerHTML（文案含 <strong> / <br> 等标记）
 * data-i18n-ph     → placeholder
 * data-i18n-title  → title 属性
 */
function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
  });
  document.title = t('meta.title');
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', t('meta.desc'));
  document.documentElement.setAttribute('lang', isZh() ? 'zh-CN' : 'en');
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('on', b.getAttribute('data-lang') === LANG);
    b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === LANG));
  });
}
