# -*- coding: utf-8 -*-
"""Generate README.md (English) and README.zh-CN.md (Chinese) from data/datasets.json.

Single source of truth: assets/app.js -> data/datasets.json -> this script.

Usage (repository root):
    python tools/gen_readme.py

The Chinese output reproduces the previously hand-maintained README.md verbatim
(including the wireless-data-type index section that an earlier revision of this
script did not emit), so the two can be diffed against each other.
"""
import json, io, re

D = json.load(open('data/datasets.json', encoding='utf-8'))
mods = D['modalities']
ds_all = D['datasets']

CSI_DOT = {1: '\U0001F7E2', 0.5: '\U0001F7E1', 0: '\u26AA'}
RF_DOT = '\U0001F535'
RF_MARK = {1: '\U0001F535', 0.5: '\U0001F539', 0: '\u00B7'}
ICON = {1: ('✓', 'assets/icon-yes.svg'), 0.5: ('△', 'assets/icon-part.svg'), 0: ('×', 'assets/icon-none.svg')}

# ---------------------------------------------------------------- 文案表
S = {
'zh': {
 'title': '# 低空数据集索引 · Low-Altitude Datasets',
 'langbar': '**中文** ｜ [English](README.md)',
 'intro1': '面向**低空经济**与**UAV通感一体化（ISAC）**研究的开源数据集汇编，系统收集并展示已有数据集，'
           '统一给出**名称、官方网站链接、发布年份、作者/机构**以及**模态覆盖对比**。',
 'intro2': '清单以 **[LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication]'
           '(https://arxiv.org/abs/2607.03826)**（arXiv:2607.03826）表1 为基准，并逐一核实各数据集的官方主页与论文链接；'
           '此外补充收录了 ISAC 仿真与实测、射频/雷达探测、声学感知、无人机视觉与多模态感知等方向的公开数据集。',
 'partition': '> 总览、矩阵与详情均按**是否涉及低空 / UAV 场景**拆为两张表：**低空相关数据集**与**通用 / 上游基准数据集**'
              '（后者完全不含低空场景）。低空部分另按**信道级数据**用颜色区分：🟢 有 CSI、🟡 部分 CSI、'
              '🔵 仅射频信号（波形、频谱或射频指标，无 CSI）、⚪ 均无。',
 'online': '> 🌐 **在线浏览**：[sjtu-wirelessai-lab.github.io/Low-Altitude-Dataset]'
           '(https://sjtu-wirelessai-lab.github.io/Low-Altitude-Dataset/)（可搜索、可筛选、含对比矩阵）。',
 'json': '> 📦 **结构化数据**：[data/datasets.json](https://cdn.jsdelivr.net/gh/SJTU-WirelessAI-Lab/'
         'Low-Altitude-Dataset@main/data/datasets.json)（jsDelivr CDN，返回 `application/json`，可直接 fetch；'
         'CDN 有缓存延迟，数据更新以仓库内同路径文件为准）。',
 'growth': '**增长趋势**：当前索引覆盖至 {ymax} 出版年，低空相关索引条目累计 **{n}** 个，'
           '其中 **{c}** 个提供完整 MIMO 信道 CSI。下图按出版年分组累计：实线为全部低空相关索引条目，虚线为含完整 CSI 者。',
 'chart_alt': '低空索引条目累计数量（{y0}\u2013{y1}）',
 'chart_src': 'assets/timeline.svg',
 'toc': '## 目录',
 'toc_items': ['- [数据集总览](#数据集总览)', '- [模态覆盖对比矩阵](#模态覆盖对比矩阵)',
               '- [数据集详情](#数据集详情)', '- [收录说明](#收录说明)',
               '- [贡献方式](#贡献方式)', '- [引用](#引用)'],
 'overview': '## 数据集总览',
 'overview_stat': '共 **{total}** 条索引记录（含本文 LAMBDA），时间跨度 **{y0}–{y1}**；'
                  '其中**低空相关 {la} 个**、**通用 / 上游基准 {gen} 个**。',
 'csi_note': '**信道级数据标注**：🟢 有 CSI（完整 MIMO 信道）、🟡 部分 CSI（实测信道测量，但未给完整 MIMO CSI）、'
             '🔵 仅射频信号（波形、频谱或射频指标，数据本身不含 CSI）、⚪ 均无。'
             '**CSI 与射频信号是两类不同模态**，不能互相替代：前者是信道估计结果，后者是接收机采到的原始波形 / 频谱。',
 'access_note': '**获取方式**：默认标为 **开放下载**（官方页面公开提供，卡片上不另加徽章）；另有 4 种受限情形会单独标注'
                '——**仅预览**（只公开子集）、**需注册**（平台账号）、**需申请**（邮件 / 表单审批）、**未发布**（官方标注即将发布）。'
                '当前 {total} 条中：开放下载 {open}、仅预览 {preview}、需注册 {register}、需申请 {request}、未发布 {pending}。',
 'source_note': '**数据来源**：**实测**（真实传感器 / 外场采集）、**混合**（真实与合成并用）、**仿真**（射线追踪 / 数字孪生 / 渲染器生成）。'
                '当前 {total} 条中实测 {r}、混合 {m}、仿真 {s}；其中低空相关 {la} 条为实测 {lr}、混合 {lm}、仿真 {ls}。',
 'grp_la': '低空相关数据集',
 'grp_gen': '通用 / 上游基准数据集',
 'grp_n': '（{n} 个）',
 'gen_preface': '以下数据集**完全不含低空 / UAV 场景**，多为地面视角感知或纯信道 / 电磁数据集，'
                '作为上游经典基准一并列出，不与低空场景条目混排。',
 'tbl_hdr': '| # | 数据集 | 来源 | CSI | 射频 | 年份 | 作者 | 机构 | 官网 |',
 'link': '链接',
 'limited': '**获取受限的 {n} 条**（其余 {m} 条可在官网直接下载）：',
 'ltd_hdr': '| 数据集 | 年份 | 获取方式 | 说明 |',
 'mx': '## 模态覆盖对比矩阵',
 'mx_note': '模态覆盖对照 LAMBDA 论文表1（并含补充收录的数据集）：'
            '![包含](assets/icon-yes.svg) 包含；![部分支持](assets/icon-part.svg) 有限或部分支持；'
            '![缺失或不适用](assets/icon-none.svg) 缺失或不适用。'
            '数据集名称前的圆点表示**信道级数据**（🟢 完整 CSI / 🟡 部分 CSI / 🔵 仅射频信号 / ⚪ 均无）。',
 'mx_tip': '> **阅读提示**：仿真集的模态覆盖系统性高于实测集——仿真器可任意开模态，'
           '实测受设备配置与多传感器硬同步限制。若关注可直接复现的实测数据，'
           '建议同时看「来源」列与「CSI」列，两者叠加后的可选面比总表窄得多。',
 'mx_icon': '> **关于图标**：Markdown 表格无法填充单元格底色（GitHub、GitLab、VS Code 都会过滤 `style` 与 `bgcolor`），'
            '故每格用一个 20×20 的图标表示覆盖情况，配色与网页版一致：'
            '深绿 = 包含、琥珀 = 部分支持、浅灰 = 缺失或不适用。',
 'mx_hdr': '| 数据集 | 年份 | {hdr} | 主要关注点 |',
 'detail': '## 数据集详情',
 'f_author': '作者', 'f_org': '机构', 'f_venue': '出处', 'f_paper': '论文',
 'f_site': '官网', 'f_primary': '主链接', 'f_alt': '备用',
 'f_csi': 'CSI', 'f_rf': '射频信号', 'f_src': '数据来源', 'f_access': '获取方式', 'f_desc': '说明',
 'notes': '## 收录说明',
 'contrib': '## 贡献方式',
 'contrib_intro': '欢迎补充遗漏的数据集或修正失效链接：',
 'contrib_steps': ['1. Fork 本仓库；',
                   '2. 在 `assets/app.js` 的 `DATASETS` 数组中新增/修改条目，并运行 `node tools/gen.js` 、`python tools/gen_readme.py` '
                   '和 `python tools/gen_chart.py` 同步 JSON、README 与趋势图；',
                   '3. 提交 Pull Request，或直接开 Issue 说明（数据集名称、官网、年份、作者、模态覆盖）。'],
 'cite': '## 引用',
 'cite_intro': '若本索引对你的研究有帮助，请引用 LAMBDA 论文：',
 'cite_after': '使用具体数据集时，请另行引用其对应论文或数据论文（见各条目「出处」）。',
 'license': '## License',
 'license_body': '本索引的整理内容以 CC BY 4.0 发布；各数据集本身的使用请遵循其各自许可协议。',
 'widx': '## 无线数据类型索引',
 'widx_intro': '字段 `wirelessTypes` 独立于模态矩阵；标签只列已确认的格式，可能还有待核实的格式。'
               '字段 `wirelessStatus` 区分 `tagged`（已有标签）、`unverified`（涉及无线或雷达，类型待核实）、'
               '`none`（按索引的模态和记录范围无适用无线类型）。网页可筛选这两类空标签条目。'
               'RF KPI 不代表原始 I/Q；CIR/PDP 不自动等同于完整 MIMO CSI。',
 'widx_hdr': '| 类型 | 数据集 |',
 'widx_sub': 'AERPAW 子集保留在父条目下，不增加总数：',
 'widx_ci': '本地检查：运行 `node tools/test_data.js`。CI 会检查重新生成的 JSON、README 与趋势图是否和仓库版本一致。',
 'src_label': {'real': '实测', 'mixed': '混合', 'sim': '仿真'},
 'src_txt': {'real': '真实传感器 / 外场采集', 'mixed': '真实采集与仿真 / 合成增强并用',
             'sim': '射线追踪、数字孪生或渲染器生成，无真实采集'},
 'acc_label': {'open': '开放下载', 'preview': '仅预览', 'register': '需注册', 'request': '需申请', 'pending': '未发布'},
 'acc_txt': {'open': '官方页面公开提供下载', 'preview': '只公开部分 / 预览子集，完整数据待发布',
             'register': '需在托管平台注册（免费）账号后下载', 'request': '需邮件 / 表单申请，授权后获取',
             'pending': '官方标注即将发布，当前无法获取'},
 'csi_txt': {1: '有 CSI（完整 MIMO 信道）', 0.5: '部分 CSI（实测信道测量，但未给完整 MIMO CSI）', 0: '无 CSI'},
 'rf_txt': {1: '有 —— 提供原始射频采集（原始 I/Q、频谱、信号片段等）',
            0.5: '部分 —— 仅射频侧派生指标（KPI、RSRP、频谱统计等），无原始波形', 0: '无'},
},
'en': {
 'title': '# Low-Altitude Datasets · An Open Dataset Index',
 'langbar': '[中文](README.zh-CN.md) ｜ **English**',
 'intro1': 'An open catalogue of datasets for **low-altitude economy** and **UAV integrated sensing and communication '
           '(ISAC)** research. Every entry reports its **name, official website, release year, authors / affiliation** '
           'and a **modality coverage comparison**.',
 'intro2': 'The catalogue is built on Table 1 of **[LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing '
           'and Communication](https://arxiv.org/abs/2607.03826)** (arXiv:2607.03826), with official pages and paper '
           'links verified entry by entry. It extends that table with public datasets on ISAC simulation and '
           'measurement, RF and radar detection, acoustic sensing, and UAV vision and multimodal perception.',
 'partition': '> Overview, matrix and details are all split into two tables by **whether low-altitude / UAV scenarios '
              'are involved**: **low-altitude datasets** and **general / upstream benchmarks** (the latter contain no '
              'low-altitude scenarios at all). Low-altitude entries are further colour-coded by **channel-level data**: '
              '🟢 full CSI, 🟡 partial CSI, 🔵 RF signal only (waveform, spectrum or RF metrics, no CSI), ⚪ none.',
 'online': '> 🌐 **Browse online**: [sjtu-wirelessai-lab.github.io/Low-Altitude-Dataset]'
           '(https://sjtu-wirelessai-lab.github.io/Low-Altitude-Dataset/) — searchable, filterable, with a comparison matrix.',
 'json': '> 📦 **Structured data**: [data/datasets.json](https://cdn.jsdelivr.net/gh/SJTU-WirelessAI-Lab/'
         'Low-Altitude-Dataset@main/data/datasets.json) — served by jsDelivr as `application/json` and directly '
         'fetchable; the CDN caches, so treat the in-repo file at the same path as authoritative.',
 'growth': '**Growth**: the catalogue currently covers publication years up to {ymax}, with **{n}** low-altitude entries '
           'in total, **{c}** of which provide full MIMO channel CSI. The chart below accumulates by publication year: '
           'the solid line counts all low-altitude entries, the dashed line those with full CSI.',
 'chart_alt': 'Cumulative low-altitude entries ({y0}\u2013{y1})',
 'chart_src': 'assets/timeline-en.svg',
 'toc': '## Table of contents',
 'toc_items': ['- [Dataset overview](#dataset-overview)', '- [Modality coverage matrix](#modality-coverage-matrix)',
               '- [Dataset details](#dataset-details)', '- [Inclusion notes](#inclusion-notes)',
               '- [Contributing](#contributing)', '- [Citation](#citation)'],
 'overview': '## Dataset overview',
 'overview_stat': '**{total}** indexed records (including LAMBDA itself), spanning **{y0}–{y1}**: '
                  '**{la} low-altitude** and **{gen} general / upstream benchmarks**.',
 'csi_note': '**Channel-level annotation**: 🟢 full CSI (complete MIMO channel); 🟡 partial CSI (measured channel data, '
             'but not full MIMO CSI); 🔵 RF signal only (waveform, spectrum or RF metrics; the data itself carries no CSI); '
             '⚪ none. **CSI and RF signal are distinct modalities** and do not substitute for each other: the first is a '
             'channel-estimation product, the second is the raw waveform or spectrum captured by the receiver.',
 'access_note': '**Access**: **open** is the default (publicly downloadable from the official page; no badge on the card). '
                'Four restricted cases are flagged separately — **preview** (subset only), **register** (platform account), '
                '**request** (email / form approval) and **unreleased** (announced but not yet available). '
                'Of the {total} entries: open {open}, preview {preview}, register {register}, request {request}, unreleased {pending}.',
 'source_note': '**Data origin**: **measured** (real sensors / field campaign), **mixed** (real acquisition plus '
                'synthetic augmentation), **simulated** (ray tracing / digital twin / renderer). '
                'Of the {total} entries: measured {r}, mixed {m}, simulated {s}; among the {la} low-altitude entries: '
                'measured {lr}, mixed {lm}, simulated {ls}.',
 'grp_la': 'Low-altitude datasets',
 'grp_gen': 'General / upstream benchmark datasets',
 'grp_n': ' ({n})',
 'gen_preface': 'These datasets contain **no low-altitude / UAV scenarios at all**. Most are terrestrial perception or '
                'pure channel / electromagnetic datasets, listed here as upstream references and never mixed with '
                'low-altitude entries.',
 'tbl_hdr': '| # | Dataset | Origin | CSI | RF | Year | Authors | Affiliation | Website |',
 'link': 'link',
 'limited': '**{n} entries with restricted access** (the other {m} are directly downloadable from their official pages):',
 'ltd_hdr': '| Dataset | Year | Access | Note |',
 'mx': '## Modality coverage matrix',
 'mx_note': 'Coverage follows Table 1 of the LAMBDA paper, plus curator-added datasets: '
            '![included](assets/icon-yes.svg) included; ![partial](assets/icon-part.svg) limited or partial; '
            '![absent](assets/icon-none.svg) absent or not applicable. '
            'The dot before each dataset name indicates **channel-level data** (🟢 full CSI / 🟡 partial CSI / '
            '🔵 RF signal only / ⚪ none).',
 'mx_tip': '> **Reading note**: simulated datasets show systematically higher modality coverage than measured ones — '
           'a simulator can switch on any modality at will, while real campaigns are limited by sensor configuration and '
           'multi-sensor hard synchronization. If you need directly reproducible measured data, read the Origin and CSI '
           'columns together: the usable subset is far narrower than the full table suggests.',
 'mx_icon': '> **About the icons**: Markdown tables cannot fill cell backgrounds (GitHub, GitLab and VS Code all filter '
            '`style` and `bgcolor`), so each cell carries a 20×20 icon whose colours match the web version: '
            'dark green = included, amber = partial, light grey = absent or not applicable.',
 'mx_hdr': '| Dataset | Year | {hdr} | Main focus |',
 'detail': '## Dataset details',
 'f_author': 'Authors', 'f_org': 'Affiliation', 'f_venue': 'Venue', 'f_paper': 'Paper',
 'f_site': 'Website', 'f_primary': 'Primary', 'f_alt': 'Mirror',
 'f_csi': 'CSI', 'f_rf': 'RF signal', 'f_src': 'Data origin', 'f_access': 'Access', 'f_desc': 'Notes',
 'notes': '## Inclusion notes',
 'contrib': '## Contributing',
 'contrib_intro': 'Corrections and additions are welcome:',
 'contrib_steps': ['1. Fork this repository;',
                   '2. Add or edit an entry in the `DATASETS` array of `assets/app.js`, then run `node tools/gen.js`, '
                   '`python tools/gen_readme.py` and `python tools/gen_chart.py` to regenerate the JSON, README and timeline;',
                   '3. Open a Pull Request, or simply file an Issue with the dataset name, website, year, authors and '
                   'modality coverage.'],
 'cite': '## Citation',
 'cite_intro': 'If this index helps your research, please cite the LAMBDA paper:',
 'cite_after': 'When using a specific dataset, please also cite its own paper or data descriptor (see the venue field '
               'of each entry).',
 'license': '## License',
 'license_body': 'The curated content of this index is released under CC BY 4.0. Each dataset remains governed by its '
                 'own licence.',
 'widx': '## Wireless data type index',
 'widx_intro': 'The `wirelessTypes` field is independent of the modality matrix; tags list only confirmed formats, and '
               'other formats may still await verification. The `wirelessStatus` field distinguishes `tagged` (labels '
               'present), `unverified` (wireless or radar scope, type not yet confirmed) and `none` (no applicable '
               'wireless type given the indexed modalities and scope). Both kinds of untagged entry can be filtered on '
               'the website. RF KPI does not imply raw I/Q; CIR/PDP is not automatically equivalent to full MIMO CSI.',
 'widx_hdr': '| Type | Datasets |',
 'widx_sub': 'AERPAW subsets stay under the parent entry and do not add to the total:',
 'widx_ci': 'Local check: run `node tools/test_data.js`. CI verifies that the regenerated JSON, README and timeline match '
            'the repository versions.',
 'src_label': {'real': 'Measured', 'mixed': 'Mixed', 'sim': 'Simulated'},
 'src_txt': {'real': 'Real sensors / field campaign', 'mixed': 'Real acquisition combined with simulation / synthetic augmentation',
             'sim': 'Ray tracing, digital twin or renderer output; no real acquisition'},
 'acc_label': {'open': 'Open', 'preview': 'Preview', 'register': 'Register', 'request': 'On request', 'pending': 'Unreleased'},
 'acc_txt': {'open': 'Publicly downloadable from the official page',
             'preview': 'Only a subset / preview is public; full data pending release',
             'register': 'Requires a (free) account on the hosting platform',
             'request': 'Requires an email / form request and approval',
             'pending': 'Announced but not yet available'},
 'csi_txt': {1: 'Full CSI (complete MIMO channel)', 0.5: 'Partial CSI (measured channel data, no full MIMO CSI)',
             0: 'No CSI'},
 'rf_txt': {1: 'Yes — provides raw RF captures (raw I/Q, spectrum, signal segments, etc.)',
            0.5: 'Partial — RF-side derived metrics only (KPI, RSRP, spectrum statistics), no raw waveform', 0: 'None'},
},
}

# 收录说明：中文逐条照抄现有 README；英文为对应译文
NOTES = {
'zh': [
'- **统计单位**：总览、网页与趋势图均按索引条目计数。合集及另有独立引用的子集可各占一条（如 AERPAW 和 AERPAW AADM），'
'因此条目可能覆盖同一批数据。仅列在合集下的子集链接不计数，同一索引条目的版本更新不另计。',
'- **模态标注**：`1` 包含 / `0.5` 有限或部分支持 / `0` 缺失或不适用。',
'- **低空 / 通用分区**：`la = 0` 即完全不含低空 / UAV 场景的数据集，统一归入「通用 / 上游基准数据集」表，'
'不与低空相关条目混排。`la = 0.5` 表示数据或构建平台**部分支持**低空场景——例如仅有平台级扩展能力、'
'当前发布版本仅部分覆盖飞行场景，或低空仅为若干场景之一；这类条目按 `la > 0` 一并归入低空组。',
'- **获取方式（`access` 字段）**：`open` 为默认档——官方页面公开提供下载，页面卡片不另加徽章；'
'`preview`（仅预览子集）、`register`（需平台账号）、`request`（需申请审批）、`pending`（尚未发布）'
'四档会在卡片上标出，并集中列于「获取受限」表。该字段只记录**获取门槛**，'
'不等同于许可条款——各数据集的许可证（CC BY、CC BY-NC、自定义学术用途等）请以官网为准。',
'- **数据来源（`source` 字段）**：`real` 实测——真实传感器 / 外场采集；`mixed` 混合——真实采集与合成增强并用；'
'`sim` 仿真——射线追踪、数字孪生或渲染器生成，无真实采集。判定口径看**底层数据是否来自真实传感器采集**：'
'由实测 I/Q 处理出的微多普勒谱图仍算实测（如 MathWorks Radar Drone），纯渲染 / 射线追踪生成的一律算仿真'
'（LAMBDA、Sensiverse、DeepVerse 6G、SynthSoM、Great-MSD、Multimodal-NF、LAE UAV、UAV Wireless MM-Bench），'
'真实与合成拼接的算混合（DrIFT、FlyAwareV2、UAV-Flow、CageDroneRF、A2G CIR + RT、AERPAW AADM）。每条都必须显式声明，'
'`gen.js` 生成时会校验缺失或非法取值。',
'- **信道级数据颜色标注**：🟢 有 CSI —— 提供完整 MIMO 信道 CSI（含仿真射线追踪与实测信道）；'
'🟡 部分 CSI —— 有实测信道测量（波束 SNR、功率时延谱、下行信道传递函数等），但未给完整 MIMO CSI；'
'🔵 仅射频信号 —— 数据是接收机采到的射频波形 / 频谱（原始 I/Q、距离-多普勒图等）或射频侧指标，'
'**本身不含 CSI**，矩阵中 `CSI` 列为 `×`、`射频信号` 列为 `✓` 或有限支持；'
'⚪ 均无 —— 既无 CSI 也无射频采集数据。同一颜色同时体现在总览表、矩阵表名称前的圆点与详情条目。',
'- **核心模态与补充模态**：核心模态为低空、CSI、RGB/深度、LiDAR、雷达、IMU/GPS、天气/时间 7 类；'
'**射频信号**、**红外**与**声学**为补充模态。射频信号见于 DroneRF 系列、RFUAV、CageDroneRF、KU Leuven Drone RF、'
'EM-134K / EM-Bench、LIPASE、TSMS-Drone（雷达与射频同步采集）、AERPAW AADM、AERPAW、PML-CellularEye（后两条同时含 CSI）'
'与 Cross-layer UAV 6G、LACN、TalTech UAV 5G mmWave（仅射频侧指标）；'
'红外见于 Anti-UAV300、Drone-detection、NeoDrone 与 PML-CellularEye（部分）；'
'声学见于 DroneRFc-MM、Drone-detection、LuViRA、ITU-ARIS Acoustic、DADS 与 Lund UAV Audio。',
'- **年份**：以 LAMBDA 论文表1 为准；个别数据集论文发表年与数据集发布年不同，已在详情中注明出处。',
'- **链接**：优先给出数据集官方主页；如官网不稳定，另附备用镜像或代码仓库链接。',
'- **范围**：聚焦低空/UAV 通感一体化相关，同时收录必要的上游经典基准（如 KITTI、DeepMIMO 等）、'
'低空安防常用的射频/雷达探测数据集（DroneRF 系列、RFUAV、LSS-FMCWR 等）与电磁信号理解数据集（EM-134K / EM-Bench）。',
'- **射频信号（`rf`）与 CSI 分开标注**：`CSI` 只记信道估计结果，`rf` 记射频采集数据——'
'`1` 提供原始波形 / 频谱（I/Q、距离-多普勒图、信号片段），`0.5` 仅射频侧派生指标（KPI、RSRP、频谱统计），'
'`0` 无。DroneRF 系列、RFUAV、CageDroneRF、KU Leuven Drone RF、DroneRF (Mendeley)、'
'EM-134K / EM-Bench、LIPASE 等只采射频、不做信道估计，故 `CSI` 为 `0`、`射频信号` 为 `1`；'
'AERPAW 与 PML-CellularEye 两者兼有，两列同时标注。EM-134K / EM-Bench 同时含雷达与通信域信号，'
'`雷达` 列另标为「有限支持」。',
'- **已知访问限制**：UAVDT 官网（Google Sites）与 DADS 托管页（Hugging Face）在部分网络环境下不可达，'
'如无法访问可改用各自的镜像或联系数据发布方。',
],
'en': [
'- **Counting unit**: overview, website and timeline all count index entries. A collection and an independently '
'cited subset may each occupy one entry (e.g. AERPAW and AERPAW AADM), so entries may cover overlapping data. '
'Subsets that appear only as links under a collection are not counted, and a version update of the same entry is not '
'counted again.',
'- **Modality annotation**: `1` included / `0.5` limited or partial / `0` absent or not applicable.',
'- **Low-altitude / general partition**: `la = 0` means a dataset contains no low-altitude / UAV scenarios at all and '
'is filed under the general / upstream benchmark table, never mixed with low-altitude entries. `la = 0.5` means the '
'data or the construction platform only **partially** supports low-altitude scenarios — for example platform-level '
'extensibility only, partial coverage of flight scenarios in the current release, or low altitude as one of several '
'scenarios. Such entries are still grouped with low-altitude datasets via `la > 0`.',
'- **Access (the `access` field)**: `open` is the default — publicly downloadable from the official page, with no '
'badge on the card. The four restricted levels — `preview` (subset only), `register` (platform account), `request` '
'(approval required) and `pending` (not yet released) — are shown on the card and collected in the restricted-access '
'table. This field records the **access barrier only** and is not a licence statement: check the official page for '
'each dataset licence (CC BY, CC BY-NC, custom academic-use terms, etc.).',
'- **Data origin (the `source` field)**: `real` measured — real sensors / field campaign; `mixed` — real acquisition '
'combined with synthetic augmentation; `sim` simulated — ray tracing, digital twin or renderer output with no real '
'acquisition. The criterion is **whether the underlying data came from real sensor acquisition**: micro-Doppler '
'spectrograms computed from measured I/Q still count as measured (e.g. MathWorks Radar Drone); anything purely '
'rendered or ray-traced counts as simulated (LAMBDA, Sensiverse, DeepVerse 6G, SynthSoM, Great-MSD, Multimodal-NF, '
'LAE UAV, UAV Wireless MM-Bench); real stitched with synthetic counts as mixed (DrIFT, FlyAwareV2, UAV-Flow, '
'CageDroneRF, A2G CIR + RT, AERPAW AADM). Every entry must declare this explicitly, and `gen.js` rejects a missing '
'or invalid value at generation time.',
'- **Channel-level colour coding**: 🟢 full CSI — provides complete MIMO channel CSI (both ray-traced simulation and '
'measured channels); 🟡 partial CSI — measured channel data (beam SNR, power delay profile, downlink channel transfer '
'function, etc.) without full MIMO CSI; 🔵 RF signal only — the data are RF waveforms or spectra captured by a '
'receiver (raw I/Q, range-Doppler maps, etc.) or RF-side metrics, and **contain no CSI**; in the matrix the `CSI` '
'column is `×` and the `RF signal` column is `✓` or limited; ⚪ none — neither CSI nor RF capture data. The same '
'colour appears in the overview table, the dot before each matrix row name, and the detail entry.',
'- **Core and supplementary modalities**: the seven core modalities are low-altitude, CSI, RGB/depth, LiDAR, radar, '
'IMU/GPS and weather/time; **RF signal**, **infrared** and **acoustic** are supplementary. RF signal appears in the '
'DroneRF series, RFUAV, CageDroneRF, KU Leuven Drone RF, EM-134K / EM-Bench, LIPASE, TSMS-Drone (synchronized radar '
'and RF), AERPAW AADM, AERPAW, PML-CellularEye (the last two also carry CSI), Cross-layer UAV 6G, LACN and TalTech '
'UAV 5G mmWave (RF-side metrics only); infrared appears in Anti-UAV300, Drone-detection, NeoDrone and '
'PML-CellularEye (partial); acoustics appear in DroneRFc-MM, Drone-detection, LuViRA, ITU-ARIS Acoustic, DADS and '
'Lund UAV Audio.',
'- **Year**: follows Table 1 of the LAMBDA paper; where a dataset paper year differs from the dataset release year, '
'the venue is noted in the detail entry.',
'- **Links**: the official dataset homepage is preferred; where it is unstable, a mirror or code repository is added.',
'- **Scope**: focused on low-altitude / UAV ISAC, while also including the necessary upstream classics (KITTI, '
'DeepMIMO, etc.), the RF and radar detection datasets commonly used in low-altitude security (DroneRF series, RFUAV, '
'LSS-FMCWR, etc.) and electromagnetic signal understanding datasets (EM-134K / EM-Bench).',
'- **RF signal (`rf`) is annotated separately from CSI**: `CSI` records channel-estimation results only, `rf` records '
'RF capture data — `1` raw waveform / spectrum (I/Q, range-Doppler map, signal segments), `0.5` RF-side derived '
'metrics only (KPI, RSRP, spectrum statistics), `0` none. The DroneRF series, RFUAV, CageDroneRF, KU Leuven Drone RF, '
'DroneRF (Mendeley), EM-134K / EM-Bench and LIPASE capture RF without channel estimation, so `CSI` is `0` and '
'`RF signal` is `1`; AERPAW and PML-CellularEye have both and are annotated in both columns. EM-134K / EM-Bench also '
'contain radar and communication-domain signals, so the `radar` column is marked as limited.',
'- **Known access limitations**: the UAVDT homepage (Google Sites) and the DADS hosting page (Hugging Face) are '
'unreachable on some networks; use a mirror or contact the data publisher if needed.',
],
}


# 无线数据类型的英文名（与 assets/i18n.js 的 WIRELESS_EN 保持一致）。
# 数据里保留中文原值，仅在英文 README 渲染时映射。
WL_EN = {
    'I/Q 波形': 'I/Q waveform',
    '传播路径参数': 'Propagation path parameters',
    '信道传递函数': 'Channel transfer function',
    '微多普勒谱': 'Micro-Doppler spectrum',
    '距离-多普勒图': 'Range-Doppler map',
    '雷达点云': 'Radar point cloud',
    '频谱/PSD': 'Spectrum/PSD',
    'RF 采样（CSV）': 'RF samples (CSV)',
}

# 数据里以中文记录的机构名与出处，英文 README 用下列英文名替换。
# 作者姓名保留原文（中文人名转写容易出错，不做自动拼音化）。
EN_FIELD = {
    ('org', 'dronerfa'): 'College of Information Science and Electronic Engineering, Zhejiang University',
    ('org', 'dronerfb-dir'): 'College of Information Science and Electronic Engineering, Zhejiang University / '
                             'State Key Laboratory of Industrial Control Technology',
    ('org', 'dronerfc-mm'): 'Zhejiang Provincial Key Laboratory of Airspace Perception and Autonomous Unmanned Systems, '
                            'Zhejiang University',
    ('org', 'em-134k'): 'Tsinghua University / BUPT / Tianjin University / IMECAS, among others',
    ('org', 'em-bench'): 'Tsinghua University / BUPT / Tianjin University / IMECAS, among others',
    ('org', 'lipase'): 'The University of Hong Kong / SUSTech / Huawei, among others',
    ('org', 'rfuav'): 'Beijing University of Posts and Telecommunications and others',
    ('org', 'lss-fmcwr'): 'Naval Aviation University / Yantai University / University of Jinan',
    ('org', 'uavscenes'): 'Nanyang Technological University / Shanghai Jiao Tong University, among others',
    ('org', 'neodrone'): 'Beijing Low-Altitude Intelligent Systems',
    ('org', 'uavdt'): 'Chinese Academy of Sciences and others',
    ('org', 'anti-uav300'): 'University of Chinese Academy of Sciences / North Institute of Electronic Equipment',
    ('authors', 'dads'): 'Community (schiffman / geronimobasso)',
    ('authors', 'neodrone'): 'NeoDrone team (Beijing data intellectual property registration)',
    ('venue', 'dronerfa'): 'Journal of Electronics & Information Technology 46(4): 1147–1156 (2024)',
    ('venue', 'dronerfb-dir'): 'Journal of Electronics & Information Technology 47(3): 573–581 (2025)',
    ('venue', 'dronerfc-mm'): 'Journal of Electronics & Information Technology (online first, 2026)',
    ('venue', 'great-msd'): 'arXiv:2507.08716 (Great-X platform)',
    ('venue', 'lss-fmcwr'): 'Journal of Radars 13(3): 539–553 (2024)',
    ('venue', 'neodrone'): 'Beijing Data Intellectual Property Registration (2025)',
}


def sort_group(items):
    return sorted([x for x in items if not x.get('self')], key=lambda x: (x['year'], x['name'])) \
         + [x for x in items if x.get('self')]


LA = sort_group([x for x in ds_all if x['modality']['la'] > 0])
GEN = sort_group([x for x in ds_all if x['modality']['la'] == 0])

total, n_la, n_gen = len(ds_all), len(LA), len(GEN)
years_all = [x['year'] for x in ds_all]
y_first, y_last = min(years_all), max(years_all)
chart_y0 = min(x['year'] for x in LA) - 1
chart_y1 = max(years_all)
la_csi = sum(1 for x in LA if x['modality'].get('csi') == 1)

acc_n = {k: sum(1 for x in ds_all if x.get('access', 'open') == k) for k in
         ['open', 'preview', 'register', 'request', 'pending']}
src_n = {k: sum(1 for x in ds_all if x.get('source') == k) for k in ['real', 'mixed', 'sim']}
src_la = {k: sum(1 for x in LA if x.get('source') == k) for k in ['real', 'mixed', 'sim']}


def mk(v):
    alt, src = ICON.get(v, ICON[0])
    return f'![{alt}]({src})'


def sig_dot(x):
    v = x['modality']['csi']
    if v in (1, 0.5):
        return CSI_DOT[v]
    return RF_DOT if x['modality'].get('rf', 0) > 0 else CSI_DOT[0]


def build(lang):
    t = S[lang]
    out = io.StringIO()
    w = out.write
    acc = lambda x: x.get('access', 'open')
    src = lambda x: x.get('source', 'real')

    def field(x, kind):
        """取 org / venue / authors 字段；英文版用英文覆盖并统一全角括号。"""
        v = x[kind]
        if lang != 'zh':
            v = EN_FIELD.get((kind, x['id']), v)
            # 英文正文里左括号前留一个空格：team（X）-> team (X)
            v = re.sub(r'([A-Za-z0-9])（', r'\1 (', v).replace('（', '(').replace('）', ')')
        return v

    w(t['title'] + '\n\n')
    w(t['langbar'] + '\n\n')
    w(t['intro1'] + '\n\n')
    w(t['intro2'] + '\n\n')
    w(t['partition'] + '\n\n')
    w(t['online'] + '\n' + t['json'] + '\n\n')
    w(t['growth'].format(ymax=chart_y1, n=n_la, c=la_csi) + '\n\n')
    w(f"![{t['chart_alt'].format(y0=chart_y0, y1=chart_y1)}]({t['chart_src']})\n\n")
    w('---\n\n')

    w(t['toc'] + '\n\n')
    for line in t['toc_items']:
        w(line + '\n')
    w('\n---\n\n')

    # ---------------- 总览 ----------------
    w(t['overview'] + '\n\n')
    w(t['overview_stat'].format(total=total, y0=y_first, y1=y_last, la=n_la, gen=n_gen) + '\n\n')
    w(t['csi_note'] + '\n\n')
    w(t['access_note'].format(total=total, **acc_n) + '\n\n')
    w(t['source_note'].format(total=total, la=n_la, r=src_n['real'], m=src_n['mixed'], s=src_n['sim'],
                              lr=src_la['real'], lm=src_la['mixed'], ls=src_la['sim']) + '\n\n')

    for label, group in [(t['grp_la'], LA), (t['grp_gen'], GEN)]:
        w(f"### {label}{t['grp_n'].format(n=len(group))}\n\n")
        if label == t['grp_gen']:
            w(t['gen_preface'] + '\n\n')
        w(t['tbl_hdr'] + '\n')
        w('|---|--------|:----:|:---:|:----:|------|------|------|------|\n')
        for i, x in enumerate(group, 1):
            star = ' ⭐' if x.get('self') else ''
            rf_mark = RF_MARK.get(x['modality'].get('rf', 0), RF_MARK[0])
            w(f"| {i} | **{x['name']}**{star} | {t['src_label'][src(x)]} | {CSI_DOT.get(x['modality']['csi'], CSI_DOT[0])} | "
              f"{rf_mark} | {x['year']} | {field(x, 'authors')} | {field(x, 'org')} | "
              f"[{t['link']}]({x['site']}) |\n")
        w('\n')

    limited = [x for x in ds_all if acc(x) != 'open']
    if limited:
        w(t['limited'].format(n=len(limited), m=total - len(limited)) + '\n\n')
        w(t['ltd_hdr'] + '\n|---|---|---|---|\n')
        for x in sorted(limited, key=lambda v: (v['year'], v['name'])):
            w(f"| **{x['name']}** | {x['year']} | {t['acc_label'][acc(x)]} | {t['acc_txt'][acc(x)]} |\n")
        w('\n')

    w('---\n\n')

    # ---------------- 矩阵 ----------------
    w(t['mx'] + '\n\n')
    w(t['mx_note'] + '\n\n')
    w(t['mx_tip'] + '\n\n')
    w(t['mx_icon'] + '\n\n')
    hdr = ' | '.join(m['zh'] if lang == 'zh' else m['en'] for m in mods)
    sep = ' | '.join(':----:' for _ in mods)
    for label, group in [(t['grp_la'], LA), (t['grp_gen'], GEN)]:
        w(f"### {label}{t['grp_n'].format(n=len(group))}\n\n")
        w(t['mx_hdr'].format(hdr=hdr) + '\n')
        w(f'|--------|------|{sep}|------------|\n')
        for x in group:
            cells = ' | '.join(mk(x['modality'][m['key']]) for m in mods)
            nm = f"{x['name']} ⭐" if x.get('self') else x['name']
            if x.get('self'):
                nm = f"**{nm}**"
            focus = x['focusZh'] if lang == 'zh' else x['focusEn']
            if x.get('self'):
                focus = f"**{focus}**"
            w(f"| {sig_dot(x)} {nm} | {x['year']} | {cells} | {focus} |\n")
        w('\n')

    w('---\n\n')

    # ---------------- 详情 ----------------
    w(t['detail'] + '\n\n')
    for label, group in [(t['grp_la'], LA), (t['grp_gen'], GEN)]:
        w(f"### {label}{t['grp_n'].format(n=len(group))}\n\n")
        for i, x in enumerate(group, 1):
            star = ' ⭐' if x.get('self') else ''
            colon = '：' if lang == 'zh' else ': '
            w(f"#### {i}. {x['name']} ({x['year']}){star}  {sig_dot(x)}\n")
            w(f"- **{t['f_author']}**{colon}{field(x, 'authors')}\n")
            w(f"- **{t['f_org']}**{colon}{field(x, 'org')}\n")
            if x.get('paper'):
                w(f"- **{t['f_venue']}**{colon}{field(x, 'venue')} · [{t['f_paper']}]({x['paper']})\n")
            else:
                w(f"- **{t['f_venue']}**{colon}{field(x, 'venue')}\n")
            site_line = (f"- **{t['f_site']}**：[{t['f_primary']}]({x['site']})" if lang == 'zh'
                         else f"- **{t['f_site']}**: [{t['f_primary']}]({x['site']})")
            if x.get('siteAlt'):
                site_line += f" ｜ [{t['f_alt']}]({x['siteAlt']})"
            w(site_line + '\n')
            colon = '：' if lang == 'zh' else ': '
            w(f"- **{t['f_csi']}**{colon}{t['csi_txt'][x['modality']['csi']]}\n")
            w(f"- **{t['f_rf']}**{colon}{t['rf_txt'][x['modality'].get('rf', 0)]}\n")
            w(f"- **{t['f_src']}**{colon}{t['src_label'][src(x)]} —— {t['src_txt'][src(x)]}\n" if lang == 'zh'
              else f"- **{t['f_src']}**: {t['src_label'][src(x)]} — {t['src_txt'][src(x)]}\n")
            w(f"- **{t['f_access']}**{colon}{t['acc_label'][acc(x)]} —— {t['acc_txt'][acc(x)]}\n" if lang == 'zh'
              else f"- **{t['f_access']}**: {t['acc_label'][acc(x)]} — {t['acc_txt'][acc(x)]}\n")
            desc = (x.get('descZh') if lang == 'zh' else x.get('descEn')) or ''
            w(f"- **{t['f_desc']}**{colon}{desc}\n\n")

    w('---\n\n')

    # ---------------- 收录说明 ----------------
    w(t['notes'] + '\n\n')
    for line in NOTES[lang]:
        w(line + '\n')
    w('\n')

    # ---------------- 贡献 / 引用 / License ----------------
    w(t['contrib'] + '\n\n')
    w(t['contrib_intro'] + '\n\n')
    for line in t['contrib_steps']:
        w(line + '\n')
    w('\n')
    w(t['cite'] + '\n\n')
    w(t['cite_intro'] + '\n\n')
    w('```bibtex\n')
    w('@article{zhou2026lambda,\n')
    w('  title   = {LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication},\n')
    w('  author  = {Zhou, Lin and Rao, Peichuan and Zhang, Chenshuo and Mo, Jianhua\n')
    w('             and Sun, Shu and Chen, Zhiyong and Tao, Meixia},\n')
    w('  journal = {arXiv:2607.03826},\n')
    w('  year    = {2026}\n')
    w('}\n')
    w('```\n\n')
    w(t['cite_after'] + '\n\n')
    w(t['license'] + '\n\n')
    w(t['license_body'] + '\n\n')

    # ---------------- 无线数据类型索引 ----------------
    w(t['widx'] + '\n\n')
    w(t['widx_intro'] + '\n\n')
    w(t['widx_hdr'] + '\n|---|---|\n')
    by_type = {}
    for x in ds_all:
        for wt in x.get('wirelessTypes') or []:
            by_type.setdefault(wt, []).append(x['name'])
    for wt in sorted(by_type):                       # 与前端 JS .sort() 的 code-unit 顺序一致
        label = wt if lang == 'zh' else WL_EN.get(wt, wt)
        w(f"| {label} | {', '.join(by_type[wt])} |\n")
    w('\n')
    w(t['widx_sub'] + '\n\n')
    for sub in (next((x.get('subsets') for x in ds_all if x['id'] == 'aerpaw'), None) or []):
        w(f"- [{sub['name']}]({sub['url']})\n")
    w('\n')
    w(t['widx_ci'] + '\n')

    return out.getvalue()


io.open('README.md', 'w', encoding='utf-8', newline='\n').write(build('en'))
io.open('README.zh-CN.md', 'w', encoding='utf-8', newline='\n').write(build('zh'))
print('README.md (en) + README.zh-CN.md (zh) written. datasets =', total,
      '| low-altitude =', n_la, '| general =', n_gen)
