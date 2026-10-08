# 低空数据集索引 · Low-Altitude Datasets

面向**低空经济**与**UAV通感一体化（ISAC）**研究的开源数据集汇编，系统收集并展示已有数据集，统一给出**名称、官方网站链接、发布年份、作者/机构**以及**模态覆盖对比**。

清单以 **[LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication](https://arxiv.org/abs/2607.03826)**（arXiv:2607.03826）表1 为基准，并逐一核实各数据集的官方主页与论文链接；此外补充收录了 ISAC 仿真与实测、射频/雷达探测、声学感知、无人机视觉与多模态感知等方向的公开数据集。

> 总览、矩阵与详情均按**是否涉及低空 / UAV 场景**拆为两张表：**低空相关数据集**与**通用 / 上游基准数据集**（后者完全不含低空场景）。低空部分另按 **CSI 可得性**用颜色区分：🟢 有 CSI、🟡 部分 CSI、⚪ 无 CSI。

> 🌐 **在线浏览**：打开 [`index.html`](index.html)（可搜索、可筛选、含对比矩阵）。
> 📦 **结构化数据**：[`data/datasets.json`](data/datasets.json)。

---

## 目录

- [数据集总览](#数据集总览)
- [模态覆盖对比矩阵](#模态覆盖对比矩阵)
- [数据集详情](#数据集详情)
- [收录说明](#收录说明)
- [贡献方式](#贡献方式)
- [引用](#引用)

---

## 数据集总览

共 **46** 个数据集（含本文 LAMBDA），时间跨度 **2012–2026**；其中**低空相关 34 个**、**通用 / 上游基准 12 个**。

**CSI 标注**：🟢 有 CSI（完整 MIMO 信道）、🟡 部分 CSI（原始 I/Q、非 MIMO 信道等）、⚪ 无 CSI。该标记用于区分低空相关数据集在信道数据上的可得性差异。

### 低空相关数据集（34 个）

| # | 数据集 | CSI | 年份 | 作者 | 机构 | 官网 |
|---|--------|:---:|------|------|------|------|
| 1 | **UAV123** | ⚪ | 2016 | Matthias Mueller, Neil Smith, Bernard Ghanem | King Abdullah University of Science and Technology (KAUST) | [链接](https://cemse.kaust.edu.sa/ivul/datasets) |
| 2 | **DOTA** | ⚪ | 2018 | Gui-Song Xia, Xiang Bai, Jian Ding, Zhen Zhu, Serge Belongie, et al. | Wuhan University | [链接](https://captain-whu.github.io/DOTA/dataset.html) |
| 3 | **UAVDT** | ⚪ | 2018 | Dawei Du, Yuankai Qi, Hongyang Yu, Yifan Yang, et al. | Chinese Academy of Sciences 等 | [链接](https://sites.google.com/site/daviddo0323/projects/uavdt) |
| 4 | **VisDrone** | ⚪ | 2018 | AISKYEYE team（Zhu, Wen, Bian, Ling, Liang, et al.） | Tianjin University | [链接](https://github.com/VisDrone/VisDrone-Dataset) |
| 5 | **DIAT-µSAT** | ⚪ | 2022 | Harish Chandra Kumawat, Mainak Chakraborty, A. Arockia Bazil Raj, Sunita Vikrant Dhavale | Defence Institute of Advanced Technology (DIAT), India | [链接](https://ieee-dataport.org/documents/diat-msat-micro-doppler-signature-dataset-small-unmanned-aerial-vehicle-suav) |
| 6 | **DeepSense 6G** | 🟡 | 2023 | Ahmed Alkhateeb, et al. | Arizona State University | [链接](https://www.deepsense6g.net/) |
| 7 | **Sensiverse** | 🟢 | 2023 | Jiajin Luo, Baojian Zhou, Yang Yu, Ping Zhang, et al. (Huawei) | Huawei Technologies | [链接](https://sensiverse.github.io/) |
| 8 | **AERPAW** | 🟡 | 2024 | Ismail Guvenc, Mihail L. Sichitiu, Rudra Dutta, et al. | North Carolina State University | [链接](https://aerpaw.org/experiments/datasets/) |
| 9 | **DADS** | ⚪ | 2024 | 社区整理（schiffman / geronimobasso） | Community (Hugging Face) | [链接](https://huggingface.co/datasets/geronimobasso/drone-audio-detection-samples) |
| 10 | **DeepVerse 6G** | 🟢 | 2024 | Umut Demirhan, Abdelrahman Taha, Ahmed Alkhateeb | Arizona State University | [链接](https://deepverse6g.net/) |
| 11 | **DroneRFa** | 🟡 | 2024 | 俞宁宁, 毛盛健, 周成伟, 孙国威, 史治国, 陈积明 | 浙江大学信息与电子工程学院 | [链接](https://www.scidb.cn/detail?dataSetId=34f0a91e8a544904998b8fdc44477380) |
| 12 | **LSS-FMCWR-1.0** | ⚪ | 2024 | 陈小龙, 袁旺, 杜晓林, 于刚, 何肖阳, 关键, 汪兴海 | 海军航空大学 / 烟台大学 / 济南大学 | [链接](https://radars.ac.cn/article/doi/10.12000/JR23142) |
| 13 | **AnyVisLoc** | ⚪ | 2025 | Yibin Ye, Xichao Teng, Shuo Chen, Zhang Li, Leqi Liu, Qifeng Yu, Tao Tan | National University of Defense Technology / Macao Polytechnic University | [链接](https://github.com/UAV-AVL/Benchmark) |
| 14 | **DrIFT** | ⚪ | 2025 | Fardad Dadboud, Hamid Azad, Varun Mehta, Miodrag Bolic, Iraj Mantegh | University of Ottawa / NRC Canada | [链接](https://github.com/CARG-uOttawa/DrIFT) |
| 15 | **Drone Swarm Sounding** | 🟢 | 2025 | Julia Beuster, Carsten Andrich, Sebastian Giehl, Marc Miranda, et al. | Technische Universität Ilmenau | [链接](https://arxiv.org/abs/2507.12010) |
| 16 | **DroneRFb-DIR** | 🟡 | 2025 | 任俊宇, 俞宁宁, 周成伟, 史治国, 陈积明 | 浙江大学信息与电子工程学院 / 工业控制技术全国重点实验室 | [链接](https://www.scidb.cn/detail?dataSetId=84cf9101e739402784b1396783881202) |
| 17 | **Great-MSD** | 🟢 | 2025 | Kongwu Huang, Shiyi Mu, Jun Jiang, Yuan Gao, Shugong Xu | Shanghai University / Xi'an Jiaotong-Liverpool University | [链接](https://github.com/hkw-xg/Great-MCD) |
| 18 | **LAE UAV** | ⚪ | 2025 | Zhengru Fang, Zhenghao Liu, Jingjing Wang, Senkang Hu, et al., Yuguang Fang | City University of Hong Kong / Beihang University | [链接](https://github.com/fangzr/TOC-Edge-Aerial) |
| 19 | **LIPASE** | 🟡 | 2025 | Yifei Sun, Chao Yu, Yan Luo, Tony Xiao Han, Haisheng Tan, Rui Wang, Francis C. M. Lau | The University of Hong Kong / SUSTech / Huawei 等 | [链接](https://github.com/yfsun0327/lipase-dataset) |
| 20 | **MathWorks Radar Drone** | ⚪ | 2025 | Zhongliang Guo, Samiur Rahman, Duncan Robertson | University of St Andrews | [链接](https://doi.org/10.5281/zenodo.15224887) |
| 21 | **NeoDrone** | ⚪ | 2025 | NeoDrone 团队（北京市数据知识产权登记） | 北京 · 低空智能系统 | [链接](https://github.com/playezio/NeoDrone) |
| 22 | **RFUAV** | 🟡 | 2025 | Rui Shi, Xiaodong Yu, Shengming Wang, Yijia Zhang, Lu Xu, Peng Pan, Chunlai Ma | Beijing University of Posts and Telecommunications 等 | [链接](https://github.com/kitoweeknd/RFUAV) |
| 23 | **SynthSoM** | 🟢 | 2025 | Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, Mingran Sun, et al. | Peking University / Shandong University | [链接](https://github.com/ZiweiHuang96/SynthSoM) |
| 24 | **UAV-LowAlt-MOT** | ⚪ | 2025 | Xin Wang | Xidian University | [链接](https://www.scidb.cn/en/detail?dataSetId=239a78b317464fb9943387df112a0345) |
| 25 | **UAVScenes** | ⚪ | 2025 | Sijie Wang, Siqi Li, Yawei Zhang, Shangshu Yu, Shenghai Yuan, et al., Lihua Xie, Wee Peng Tay | Nanyang Technological University / Shanghai Jiao Tong University 等 | [链接](https://github.com/sijieaaa/UAVScenes) |
| 26 | **CageDroneRF** | 🟡 | 2026 | Mohammad Rostami, Atik Faysal, Hongtao Xia, Hadi Kasasbeh, Ziang Gao, Huaxia Wang | Rowan University | [链接](https://arxiv.org/abs/2601.03302) |
| 27 | **Cross-layer UAV 6G** | 🟡 | 2026 | Francesco Paolucci, Emilio Paolini, Massimo Satler, et al. | CNIT / Scuola Superiore Sant'Anna | [链接](https://zenodo.org/records/21468734) |
| 28 | **DroneRFc-MM** | 🟡 | 2026 | 虞涛菘, 杨倩倩, 胡卓, 李明锴, 吴嘉俊, 苏煜繁, 潘俊宇, 史治国, 陈积明 | 浙江大学全省空域感知与自主无人系统重点实验室 | [链接](https://www.scidb.cn/detail?dataSetId=0af05173ce5d45528ebd707d67f3d641) |
| 29 | **FlyAwareV2** | ⚪ | 2026 | Francesco Barbato, Matteo Caligiuri, Pietro Zanuttigh | University of Padova | [链接](https://medialab.dei.unipd.it/paper_data/FlyAwareV2) |
| 30 | **ITU-ARIS Acoustic** | ⚪ | 2026 | İhsan Mert Muhacıroğlu, Tayfun Akgül | Istanbul Technical University (ARIS Lab) | [链接](https://zenodo.org/records/22682339) |
| 31 | **Multimodal-NF** | 🟢 | 2026 | Mengyuan Li, Qianfan Lu, Jiachen Tian, Hongjun Hu, Yu Han, Xiao Li, Chao-Kai Wen, Shi Jin | Southeast University | [链接](https://lmyxxn.github.io/6GXLMIMODatasets/) |
| 32 | **PML-CellularEye** | 🟡 | 2026 | Ziguo Zhong, Yongming Huang, Huazhou Hou, Fanfei Xu, Haisheng Feng, Shengheng Liu, Xiaohu You | Purple Mountain Laboratories / Southeast University | [链接](https://github.com/ffxu1024/CellularEye_web) |
| 33 | **SkyEV** | ⚪ | 2026 | Jakub Mandula, Sebastian Heusinger, Julian Moosmann, Christian Vogt, Michele Magno | ETH Zurich | [链接](https://arxiv.org/abs/2607.18747) |
| 34 | **LAMBDA** ⭐ | 🟢 | 2026 | Lin Zhou, Peichuan Rao, Chenshuo Zhang, Jianhua Mo, Shu Sun, Zhiyong Chen, Meixia Tao | Shanghai Jiao Tong University | [链接](https://doi.org/10.57760/sciencedb.36052) |

### 通用 / 上游基准数据集（12 个）

以下数据集**完全不含低空 / UAV 场景**，多为地面视角感知或纯信道 / 电磁数据集，作为上游经典基准一并列出，不与低空场景条目混排。

| # | 数据集 | CSI | 年份 | 作者 | 机构 | 官网 |
|---|--------|:---:|------|------|------|------|
| 1 | **KITTI** | ⚪ | 2012 | Andreas Geiger, Philip Lenz, Raquel Urtasun | Karlsruhe Institute of Technology (KIT) | [链接](https://www.cvlibs.net/datasets/kitti/) |
| 2 | **DeepMIMO** | 🟢 | 2019 | Ahmed Alkhateeb | Arizona State University | [链接](https://www.deepmimo.net/) |
| 3 | **ViWi** | 🟢 | 2020 | Muhammad Alrabeiah, Andrew Hredzak, Zhenhao Liu, Ahmed Alkhateeb | Arizona State University | [链接](https://www.viwi-dataset.net/) |
| 4 | **DAIR-V2X** | ⚪ | 2022 | Haibao Yu, Yizhen Luo, Mao Shu, Yiyi Huo, et al. | Tsinghua University AIR / Baidu | [链接](https://air.tsinghua.edu.cn/DAIR-V2X/index.html) |
| 5 | **E-FLASH** | 🟡 | 2022 | Jerry Gu, Batool Salehi, Debashri Roy, Kaushik R. Chowdhury | Northeastern University | [链接](https://ieee-dataport.org/documents/e-flash) |
| 6 | **OPV2V** | ⚪ | 2022 | Runsheng Xu, Hao Xiang, Zhengzhong Tu, Xin Xia, Ming-Hsuan Yang, Jiaqi Ma | University of California, Los Angeles (UCLA) | [链接](https://mobility-lab.seas.ucla.edu/opv2v/) |
| 7 | **WAIR-D** | 🟢 | 2022 | Yourui Huangfu, Jian Wang, Shengchen Dai, Rong Li, et al. | Huawei Wireless Technology Lab / Zhejiang University | [链接](https://www.mobileai-dataset.com/html/default/yingwen/DateSet/1590994253188792322.html?index=1) |
| 8 | **M3SC** | 🟢 | 2023 | Xiang Cheng, Ziwei Huang, Lu Bai, Haotian Zhang, et al. | Peking University (PCNI Lab) | [链接](http://pcni.pku.edu.cn/dataset_1.html) |
| 9 | **SDCD** | ⚪ | 2024 | Jihao Li, Jincheng Hu, Yanjun Huang, Zheng Chen, Bingzhao Gao, Jingjing Jiang, Yuanjian Zhang | University of Southampton / Tongji University | [链接](https://github.com/ReparkHjc/SDCD) |
| 10 | **Multimodal-Wireless** | 🟢 | 2025 | Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li | Southeast University / Imperial College London | [链接](https://le-liang.github.io/mmw) |
| 11 | **EM-134K** | 🟡 | 2026 | Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun | Tsinghua University / BUPT / Tianjin University / IMECAS 等 | [链接](https://em-merlin.github.io/) |
| 12 | **EM-Bench** | 🟡 | 2026 | Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun | Tsinghua University / BUPT / Tianjin University / IMECAS 等 | [链接](https://em-merlin.github.io/) |

---

## 模态覆盖对比矩阵

模态覆盖对照 LAMBDA 论文表1（并含补充收录的数据集）：**✓** 包含；**△** 有限或部分支持；**×** 缺失或不适用。「全模态覆盖」统计针对 7 类核心模态（不含声学），当前为 **1** 个。数据集名称前的圆点表示 **CSI 可得性**（🟢 完整 / 🟡 部分 / ⚪ 无）。

### 低空相关数据集（34 个）

| 数据集 | 年份 | 低空 | CSI信道 | RGB/深度 | LiDAR | 雷达 | IMU/GPS | 天气/时间 | 声学 | 主要关注点 |
|--------|------|:----: | :----: | :----: | :----: | :----: | :----: | :----: | :----:|------------|
| ⚪ UAV123 | 2016 | ✓ | × | ✓ | × | × | × | × | × | 低空无人机视角单目标跟踪基准（123段，11万帧） |
| ⚪ DOTA | 2018 | △ | × | ✓ | × | × | × | × | × | 航空影像目标检测（15/16类，18.8万实例） |
| ⚪ UAVDT | 2018 | ✓ | × | ✓ | × | × | × | △ | × | 无人机车辆检测与跟踪基准（8万帧，含14类属性） |
| ⚪ VisDrone | 2018 | ✓ | × | ✓ | × | × | × | △ | × | 无人机视角目标检测与跟踪基准（14城市，260万+框） |
| ⚪ DIAT-µSAT | 2022 | ✓ | × | × | × | ✓ | × | × | × | X波段连续波雷达小型无人机微多普勒特征（6类4849幅） |
| 🟡 DeepSense 6G | 2023 | △ | △ | ✓ | ✓ | ✓ | △ | △ | × | 实测多模态无线测量 |
| 🟢 Sensiverse | 2023 | △ | ✓ | × | × | ✓ | × | × | × | 多场景多频段ISAC感知信道数据集（3.5/10/26/100 GHz） |
| 🟡 AERPAW | 2024 | ✓ | △ | × | × | △ | ✓ | × | × | 空地/空空信道探测、频谱监测与5G KPI实测合集（30+数据集） |
| ⚪ DADS | 2024 | ✓ | × | × | × | × | × | × | ✓ | 目前规模最大的公开无人机音频库（约18万条） |
| 🟢 DeepVerse 6G | 2024 | △ | ✓ | ✓ | △ | ✓ | △ | △ | × | 数字孪生无线数据集 |
| 🟡 DroneRFa | 2024 | ✓ | △ | × | × | × | × | × | × | 大规模无人机射频信号低空探测（25类场景，3个ISM频段） |
| ⚪ LSS-FMCWR-1.0 | 2024 | ✓ | × | × | × | ✓ | × | × | × | 多波段FMCW雷达低慢小目标探测（6类无人机微动特征） |
| ⚪ AnyVisLoc | 2025 | ✓ | × | ✓ | × | × | × | × | × | 低空多视角无人机绝对视觉定位基准（1.8万图像） |
| ⚪ DrIFT | 2025 | ✓ | × | ✓ | × | × | × | ✓ | × | 域漂移下的视觉无人机检测（14个域，含背景分割图） |
| 🟢 Drone Swarm Sounding | 2025 | ✓ | ✓ | × | × | ✓ | △ | × | × | 无人机群多基地信道探测与雷达感知实测 |
| 🟡 DroneRFb-DIR | 2025 | ✓ | △ | × | × | × | × | × | × | 非合作无人机个体识别（6类×3架，含视距/非视距标注） |
| 🟢 Great-MSD | 2025 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | × | × | 单引擎仿真低空多模态通感一体化数据集（10万样本） |
| ⚪ LAE UAV | 2025 | ✓ | × | ✓ | × | × | △ | × | × | GNSS拒止城市环境下的无人机视觉导航数据集（35.7万帧） |
| 🟡 LIPASE | 2025 | ✓ | △ | × | × | ✓ | × | × | × | LTE下行信号+数字阵列的无人机被动雷达跟踪 |
| ⚪ MathWorks Radar Drone | 2025 | ✓ | × | × | × | ✓ | × | × | × | 大规模雷达无人机分类微多普勒训练集（约10.9 TB） |
| ⚪ NeoDrone | 2025 | ✓ | × | ✓ | × | × | × | ✓ | × | 无人机近地观测视觉感知（15万+图像，可见光-红外对齐） |
| 🟡 RFUAV | 2025 | ✓ | △ | × | × | × | × | × | × | 37种无人机大规模射频指纹基准（约1.3 TB原始I/Q） |
| 🟢 SynthSoM | 2025 | △ | ✓ | ✓ | ✓ | ✓ | × | ✓ | × | 空地协同机器联觉(SoM)合成数据集 |
| ⚪ UAV-LowAlt-MOT | 2025 | ✓ | × | ✓ | × | × | × | × | × | 低空无人机对地多目标检测与跟踪（行人/车辆） |
| ⚪ UAVScenes | 2025 | ✓ | × | ✓ | ✓ | × | ✓ | × | × | 多模态无人机感知（图像+LiDAR逐帧语义标注，12万+帧） |
| 🟡 CageDroneRF | 2026 | ✓ | △ | × | × | × | × | × | × | 射频笼采集+合成增强的无人机检测与识别基准 |
| 🟡 Cross-layer UAV 6G | 2026 | ✓ | △ | × | × | × | ✓ | × | × | 5G测试床无人机跨层（移动性-无线-应用）测量 |
| 🟡 DroneRFc-MM | 2026 | ✓ | △ | ✓ | ✓ | ✓ | ✓ | × | × | 反无人机多模态实测数据集（六类传感器同步观测城市低空目标） |
| ⚪ FlyAwareV2 | 2026 | ✓ | × | ✓ | × | × | × | ✓ | × | 城市场景理解的多模态跨域无人机数据（真实+合成，含天气昼夜；真实样本深度为单目估计） |
| ⚪ ITU-ARIS Acoustic | 2026 | ✓ | × | × | × | × | × | × | ✓ | 户外无人机声学探测数据集（无人机/背景两类，5491段） |
| 🟢 Multimodal-NF | 2026 | ✓ | ✓ | ✓ | ✓ | × | ✓ | △ | × | 近场低空XL-MIMO |
| 🟡 PML-CellularEye | 2026 | ✓ | △ | △ | × | △ | ✓ | ✓ | × | 实测基站侧低空ISAC数据 |
| ⚪ SkyEV | 2026 | ✓ | × | ✓ | × | × | × | × | × | RGB-事件相机同步的无人机检测与跟踪数据集 |
| 🟢 **LAMBDA ⭐** | 2026 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | × | **低空多模态通感一体化基础数据集** |

### 通用 / 上游基准数据集（12 个）

| 数据集 | 年份 | 低空 | CSI信道 | RGB/深度 | LiDAR | 雷达 | IMU/GPS | 天气/时间 | 声学 | 主要关注点 |
|--------|------|:----: | :----: | :----: | :----: | :----: | :----: | :----: | :----:|------------|
| ⚪ KITTI | 2012 | × | × | ✓ | ✓ | × | ✓ | △ | × | 地面自动驾驶感知基准 |
| 🟢 DeepMIMO | 2019 | × | ✓ | × | × | × | × | △ | × | 可配置射线追踪信道数据集 |
| 🟢 ViWi | 2020 | × | ✓ | ✓ | △ | × | × | △ | × | 视觉辅助无线通信 |
| ⚪ DAIR-V2X | 2022 | × | × | ✓ | ✓ | × | △ | △ | × | 真实车路协同感知 |
| 🟡 E-FLASH | 2022 | × | △ | △ | ✓ | × | ✓ | △ | × | 实测毫米波V2X波束选择 |
| ⚪ OPV2V | 2022 | × | × | ✓ | ✓ | × | △ | △ | × | 车车协同感知 |
| 🟢 WAIR-D | 2022 | × | ✓ | × | × | × | × | × | × | 真实地图上的无线AI信道 |
| 🟢 M3SC | 2023 | × | ✓ | ✓ | ✓ | ✓ | × | ✓ | × | 混合多模态通感一体化数据 |
| ⚪ SDCD | 2024 | × | × | ✓ | × | × | × | ✓ | × | 合成数字城市RGB-深度鲁棒性 |
| 🟢 Multimodal-Wireless | 2025 | × | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | × | V2X多模态通信与感知 |
| 🟡 EM-134K | 2026 | × | △ | × | × | △ | × | × | × | 电磁信号-文本配对预训练集（13.4万对，源自3500万信号） |
| 🟡 EM-Bench | 2026 | × | △ | × | × | △ | × | × | × | 电磁信号理解与推理评测基准（4200+问答，3级14子任务） |

---

## 数据集详情

### 低空相关数据集（34 个）

#### 1. UAV123 (2016)  ⚪
- **作者**：Matthias Mueller, Neil Smith, Bernard Ghanem
- **机构**：King Abdullah University of Science and Technology (KAUST)
- **出处**：ECCV 2016 · [论文](https://doi.org/10.1007/978-3-319-46448-0_27)
- **官网**：[主链接](https://cemse.kaust.edu.sa/ivul/datasets)
- **CSI**：无 CSI
- **说明**：低空无人机视角单目标跟踪基准，含 123 段视频、11 万+ 帧，全部标注直立边界框，并含长期跟踪子集 UAV20L。

#### 2. DOTA (2018)  ⚪
- **作者**：Gui-Song Xia, Xiang Bai, Jian Ding, Zhen Zhu, Serge Belongie, et al.
- **机构**：Wuhan University
- **出处**：CVPR 2018 · [论文](https://arxiv.org/abs/1711.10398)
- **官网**：[主链接](https://captain-whu.github.io/DOTA/dataset.html)
- **CSI**：无 CSI
- **说明**：武汉大学发布的航空影像目标检测数据集，含 15/16 类、约 18.8 万实例，图像分辨率最高达 2 万像素级。

#### 3. UAVDT (2018)  ⚪
- **作者**：Dawei Du, Yuankai Qi, Hongyang Yu, Yifan Yang, et al.
- **机构**：Chinese Academy of Sciences 等
- **出处**：ECCV 2018 / IJCV 2019 · [论文](https://arxiv.org/abs/1804.00518)
- **官网**：[主链接](https://sites.google.com/site/daviddo0323/projects/uavdt) ｜ [备用](https://sites.google.com/view/grli-uavdt/)
- **CSI**：无 CSI
- **说明**：无人机车辆检测与跟踪基准，含约 8 万帧带框与 14 类属性（天气、飞行高度、视角、遮挡等）标注。

#### 4. VisDrone (2018)  ⚪
- **作者**：AISKYEYE team（Zhu, Wen, Bian, Ling, Liang, et al.）
- **机构**：Tianjin University
- **出处**：ECCV Workshops 2018 / TPAMI 2021 · [论文](https://arxiv.org/abs/2001.07420)
- **官网**：[主链接](https://github.com/VisDrone/VisDrone-Dataset)
- **CSI**：无 CSI
- **说明**：天津大学 AISKYEYE 团队构建的无人机视角目标检测与跟踪基准，含 288 段视频（26 万+ 帧）与 1 万+ 静态图像，覆盖 14 个城市。

#### 5. DIAT-µSAT (2022)  ⚪
- **作者**：Harish Chandra Kumawat, Mainak Chakraborty, A. Arockia Bazil Raj, Sunita Vikrant Dhavale
- **机构**：Defence Institute of Advanced Technology (DIAT), India
- **出处**：IEEE GRSL 19: 6004005 (2022) · [论文](https://doi.org/10.1109/LGRS.2021.3102039)
- **官网**：[主链接](https://ieee-dataport.org/documents/diat-msat-micro-doppler-signature-dataset-small-unmanned-aerial-vehicle-suav)
- **CSI**：无 CSI
- **说明**：X 波段连续波雷达采集的 6 类空中小目标微多普勒特征图像数据集（4849 幅），含 RC 飞机、三叶/长叶旋翼、四旋翼、仿生鸟与迷你直升机等。

#### 6. DeepSense 6G (2023)  🟡
- **作者**：Ahmed Alkhateeb, et al.
- **机构**：Arizona State University
- **出处**：IEEE Communications Magazine 2023 · [论文](https://doi.org/10.1109/MCOM.006.2200730)
- **官网**：[主链接](https://www.deepsense6g.net/)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：大规模真实世界感知-通信一体化多模态数据集，含 100 万+ 样本。

#### 7. Sensiverse (2023)  🟢
- **作者**：Jiajin Luo, Baojian Zhou, Yang Yu, Ping Zhang, et al. (Huawei)
- **机构**：Huawei Technologies
- **出处**：arXiv:2308.13789 · [论文](https://arxiv.org/abs/2308.13789)
- **官网**：[主链接](https://sensiverse.github.io/)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：华为发布的 ISAC 感知信道数据集，覆盖 25+ 城市、100+ 场景，总量 15 TB 级，含 3.5/10/26/100 GHz 四个频段，支持三维环境重建与单/双基地动目标检测。

#### 8. AERPAW (2024)  🟡
- **作者**：Ismail Guvenc, Mihail L. Sichitiu, Rudra Dutta, et al.
- **机构**：North Carolina State University
- **出处**：AERPAW / Dryad / IEEE DataPort (2024–2026) · [论文](https://arxiv.org/abs/2510.08752)
- **官网**：[主链接](https://aerpaw.org/experiments/datasets/)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：北卡州立大学 AERPAW 平台的公开数据集族（30+ 个），涵盖空地/空空信道探测与路损、宽频段频谱监测、5G-NSA KPI、LoRaWAN 传播与 TDOA 定位等，多数托管于 Dryad / IEEE DataPort。

#### 9. DADS (2024)  ⚪
- **作者**：社区整理（schiffman / geronimobasso）
- **机构**：Community (Hugging Face)
- **出处**：Hugging Face Datasets · [论文](https://huggingface.co/datasets/geronimobasso/drone-audio-detection-samples)
- **官网**：[主链接](https://huggingface.co/datasets/geronimobasso/drone-audio-detection-samples) ｜ [备用](https://huggingface.co/datasets/schiffman/drone-audio-detection-samples)
- **CSI**：无 CSI
- **说明**：目前规模最大的公开无人机音频库（约 18 万条 16 kHz 音频），含「有/无无人机」两类，用于声学无人机检测。

#### 10. DeepVerse 6G (2024)  🟢
- **作者**：Umut Demirhan, Abdelrahman Taha, Ahmed Alkhateeb
- **机构**：Arizona State University
- **出处**：Preprint / IEEE DataPort · [论文](https://doi.org/10.21227/nk8m-6087)
- **官网**：[主链接](https://deepverse6g.net/) ｜ [备用](https://www.wi-lab.net/datasets-page/)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：数字孪生数据集生成框架，融合无线射线追踪与逼真视觉/雷达/LiDAR 仿真。

#### 11. DroneRFa (2024)  🟡
- **作者**：俞宁宁, 毛盛健, 周成伟, 孙国威, 史治国, 陈积明
- **机构**：浙江大学信息与电子工程学院
- **出处**：电子与信息学报 46(4): 1147–1156 (2024) · [论文](https://jeit.ac.cn/cn/article/doi/10.11999/JEIT230570)
- **官网**：[主链接](https://www.scidb.cn/detail?dataSetId=34f0a91e8a544904998b8fdc44477380) ｜ [备用](https://jeit.ac.cn/web/data/getData?dataType=Dataset3)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：依托 USRP-2955 采集的大规模无人机射频信号数据集，覆盖城市户外 9 类、室内 15 类及背景参照 1 类，涉及 915 MHz / 2.4 GHz / 5.8 GHz 三个 ISM 频段，每类不少于 12 个片段、每片段 1 亿采样点以上，以原始 I/Q 存储并带机型、探测距离、频段标签。2026 年入选 ScienceDB「科学数据奖」十佳数据集。

#### 12. LSS-FMCWR-1.0 (2024)  ⚪
- **作者**：陈小龙, 袁旺, 杜晓林, 于刚, 何肖阳, 关键, 汪兴海
- **机构**：海军航空大学 / 烟台大学 / 济南大学
- **出处**：雷达学报 13(3): 539–553 (2024) · [论文](https://radars.ac.cn/article/doi/10.12000/JR23142)
- **官网**：[主链接](https://radars.ac.cn/article/doi/10.12000/JR23142)
- **CSI**：无 CSI
- **说明**：基于 Ku 波段与 L 波段 FMCW 雷达采集的 6 类无人机回波数据，面向低慢小目标检测与高分辨微动特征提取，并附局部极大值同步提取变换方法。

#### 13. AnyVisLoc (2025)  ⚪
- **作者**：Yibin Ye, Xichao Teng, Shuo Chen, Zhang Li, Leqi Liu, Qifeng Yu, Tao Tan
- **机构**：National University of Defense Technology / Macao Polytechnic University
- **出处**：arXiv:2503.10692 · [论文](https://arxiv.org/abs/2503.10692)
- **官网**：[主链接](https://github.com/UAV-AVL/Benchmark)
- **CSI**：无 CSI
- **说明**：低空多视角条件下的无人机绝对视觉定位基准，含 1.8 万幅多场景多高度图像与 2.5D 参考图，并统一评测主流 AVL 方法。

#### 14. DrIFT (2025)  ⚪
- **作者**：Fardad Dadboud, Hamid Azad, Varun Mehta, Miodrag Bolic, Iraj Mantegh
- **机构**：University of Ottawa / NRC Canada
- **出处**：WACV 2025 · [论文](https://openaccess.thecvf.com/content/WACV2025/html/Dadboud_DrIFT_Autonomous_Drone_Dataset_with_Integrated_Real_and_Synthetic_Data_WACV_2025_paper.html)
- **官网**：[主链接](https://github.com/CARG-uOttawa/DrIFT)
- **CSI**：无 CSI
- **说明**：面向域漂移下视觉无人机检测的数据集，含 14 个域（视角/真实-合成/季节/恶劣天气），并提供背景分割图以支持按背景评估。

#### 15. Drone Swarm Sounding (2025)  🟢
- **作者**：Julia Beuster, Carsten Andrich, Sebastian Giehl, Marc Miranda, et al.
- **机构**：Technische Universität Ilmenau
- **出处**：arXiv:2507.12010 · [论文](https://arxiv.org/abs/2507.12010)
- **官网**：[主链接](https://arxiv.org/abs/2507.12010)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：基于地面与机载同步节点的真实信道探测数据集，最多 4 架无人机编队，面向 ISAC 网络中的多基地雷达跟踪与空地/空空定位。

#### 16. DroneRFb-DIR (2025)  🟡
- **作者**：任俊宇, 俞宁宁, 周成伟, 史治国, 陈积明
- **机构**：浙江大学信息与电子工程学院 / 工业控制技术全国重点实验室
- **出处**：电子与信息学报 47(3): 573–581 (2025) · [论文](https://jeit.ac.cn/cn/article/doi/10.11999/JEIT240804)
- **官网**：[主链接](https://www.scidb.cn/detail?dataSetId=84cf9101e739402784b1396783881202)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：面向非合作无人机**个体识别**的射频数据集，含 6 种机型、每型 3 架不同个体及 1 类背景信号；2.4–2.48 GHz、80 MHz 采样，原始 I/Q 存储，共 4690 个片段（每片段 4 M 以上采样点），含个体编号与视距/非视距标注，并已划分训练/测试集。

#### 17. Great-MSD (2025)  🟢
- **作者**：Kongwu Huang, Shiyi Mu, Jun Jiang, Yuan Gao, Shugong Xu
- **机构**：Shanghai University / Xi'an Jiaotong-Liverpool University
- **出处**：arXiv:2507.08716（Great-X 平台） · [论文](https://arxiv.org/abs/2507.08716)
- **官网**：[主链接](https://github.com/hkw-xg/Great-MCD)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：基于 Great-X 平台（在 Unreal Engine 内重构 Sionna 射线追踪）生成的低空多模态通感一体化数据集，10 万样本同步 CSI、RGB、深度、雷达、LiDAR 与三维坐标/轨迹，并附基于 CSI 的无人机三维定位基线。

#### 18. LAE UAV (2025)  ⚪
- **作者**：Zhengru Fang, Zhenghao Liu, Jingjing Wang, Senkang Hu, et al., Yuguang Fang
- **机构**：City University of Hong Kong / Beihang University
- **出处**：arXiv:2504.18317 · [论文](https://arxiv.org/abs/2504.18317)
- **官网**：[主链接](https://github.com/fangzr/TOC-Edge-Aerial)
- **CSI**：无 CSI
- **说明**：面向低空经济中 GNSS 拒止城市环境的无人机视觉导航数据集，基于 CARLA 仿真，含 35.7 万帧对齐的 RGB/深度/语义多视角图像与精确位姿。

#### 19. LIPASE (2025)  🟡
- **作者**：Yifei Sun, Chao Yu, Yan Luo, Tony Xiao Han, Haisheng Tan, Rui Wang, Francis C. M. Lau
- **机构**：The University of Hong Kong / SUSTech / Huawei 等
- **出处**：IEEE OJ-COMS 6: 3779–3794 (2025) · [论文](https://doi.org/10.1109/OJCOMS.2025.3558430)
- **官网**：[主链接](https://github.com/yfsun0327/lipase-dataset)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：基于 LTE 下行信号与数字阵列的无人机被动雷达跟踪实测数据集，提供距离-多普勒图与 GPS 轨迹，面向被动雷达与 ISAC 研究。

#### 20. MathWorks Radar Drone (2025)  ⚪
- **作者**：Zhongliang Guo, Samiur Rahman, Duncan Robertson
- **机构**：University of St Andrews
- **出处**：Zenodo (2025) · [论文](https://doi.org/10.5281/zenodo.15224887)
- **官网**：[主链接](https://doi.org/10.5281/zenodo.15224887)
- **CSI**：无 CSI
- **说明**：圣安德鲁斯大学与 MathWorks 发布的雷达无人机分类微多普勒训练集，约 10.9 TB，面向雷达无人机分类。

#### 21. NeoDrone (2025)  ⚪
- **作者**：NeoDrone 团队（北京市数据知识产权登记）
- **机构**：北京 · 低空智能系统
- **出处**：北京市数据知识产权登记 (2025) · [论文](https://webs.bjidex.com/sys-bsc-home/#/bscConsole/intellectualProperty/infoPublicity?action=1)
- **官网**：[主链接](https://github.com/playezio/NeoDrone)
- **CSI**：无 CSI
- **说明**：面向低空无人机视觉感知的近地观测数据集，含 15 万+ 图像、150 万+ 标注实例与 7176 对时空对齐的可见光-红外图像，附 15 项结构化元数据。

#### 22. RFUAV (2025)  🟡
- **作者**：Rui Shi, Xiaodong Yu, Shengming Wang, Yijia Zhang, Lu Xu, Peng Pan, Chunlai Ma
- **机构**：Beijing University of Posts and Telecommunications 等
- **出处**：arXiv:2503.09033 · [论文](https://arxiv.org/abs/2503.09033)
- **官网**：[主链接](https://github.com/kitoweeknd/RFUAV)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：大规模射频无人机检测识别基准，约 1.3 TB 原始 I/Q，覆盖 37 种机型与多档 SNR，并附预处理与评测工具。

#### 23. SynthSoM (2025)  🟢
- **作者**：Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, Mingran Sun, et al.
- **机构**：Peking University / Shandong University
- **出处**：Scientific Data 12:819 (2025) · [论文](https://doi.org/10.1038/s41597-025-05065-x)
- **官网**：[主链接](https://github.com/ZiweiHuang96/SynthSoM) ｜ [备用](https://figshare.com/s/3c0203236d3ae2eed872)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：面向机器联觉(SoM)的空地多链路协同合成数据集，含 5 个典型场景。

#### 24. UAV-LowAlt-MOT (2025)  ⚪
- **作者**：Xin Wang
- **机构**：Xidian University
- **出处**：Science Data Bank / IEEE DataPort (2025) · [论文](https://doi.org/10.21227/2gt9-aa39)
- **官网**：[主链接](https://www.scidb.cn/en/detail?dataSetId=239a78b317464fb9943387df112a0345)
- **CSI**：无 CSI
- **说明**：低空无人机对地多目标检测与跟踪基准，含行人、车辆等地物目标的带框与身份标注图像与视频序列，突出小目标、遮挡与尺度变化等挑战。

#### 25. UAVScenes (2025)  ⚪
- **作者**：Sijie Wang, Siqi Li, Yawei Zhang, Shangshu Yu, Shenghai Yuan, et al., Lihua Xie, Wee Peng Tay
- **机构**：Nanyang Technological University / Shanghai Jiao Tong University 等
- **出处**：ICCV 2025 · [论文](https://arxiv.org/abs/2507.22412)
- **官网**：[主链接](https://github.com/sijieaaa/UAVScenes)
- **CSI**：无 CSI
- **说明**：基于 MARS-LVIG 扩展的大规模多模态无人机数据集，提供逐帧图像与 LiDAR 语义标注及精确 6-DoF 位姿，支持分割、深度估计、定位、场景识别与新视角合成等任务。

#### 26. CageDroneRF (2026)  🟡
- **作者**：Mohammad Rostami, Atik Faysal, Hongtao Xia, Hadi Kasasbeh, Ziang Gao, Huaxia Wang
- **机构**：Rowan University
- **出处**：arXiv:2601.03302 · [论文](https://arxiv.org/abs/2601.03302)
- **官网**：[主链接](https://arxiv.org/abs/2601.03302)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：由真实采集与系统化合成增强（SNR 控制、干扰注入、频移）构成的射频无人机检测识别基准，覆盖大量当代机型，支持分类、开集识别与检测。

#### 27. Cross-layer UAV 6G (2026)  🟡
- **作者**：Francesco Paolucci, Emilio Paolini, Massimo Satler, et al.
- **机构**：CNIT / Scuola Superiore Sant'Anna
- **出处**：Zenodo (2026) · [论文](https://doi.org/10.5281/zenodo.21468734)
- **官网**：[主链接](https://zenodo.org/records/21468734)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：5G 测试床中以无人机为移动终端采集的跨层数据集，同步 UAV 移动性测量、O-RAN 分离式 DU/CU/UE 无线指标与应用层（合成流量、视频流）性能指标。

#### 28. DroneRFc-MM (2026)  🟡
- **作者**：虞涛菘, 杨倩倩, 胡卓, 李明锴, 吴嘉俊, 苏煜繁, 潘俊宇, 史治国, 陈积明
- **机构**：浙江大学全省空域感知与自主无人系统重点实验室
- **出处**：电子与信息学报（网络优先出版, 2026） · [论文](https://jeit.ac.cn/cn/article/doi/10.11999/JEIT260889)
- **官网**：[主链接](https://www.scidb.cn/detail?dataSetId=0af05173ce5d45528ebd707d67f3d641)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：城市低空场景下**六类传感器同步采集**的反无人机多模态数据集——云台相机、广角相机、射频天线（USRP-2955 + VERT2450，2.45 GHz）、激光雷达（RoboSense EM4）、毫米波雷达（Arbe Phoenix，77–81 GHz）与传声器阵列；覆盖 6 种消费级 DJI 机型，飞行数据总时长超 30 分钟，含机型、三维位置、姿态与速度细粒度标注，并附样本处理代码。

#### 29. FlyAwareV2 (2026)  ⚪
- **作者**：Francesco Barbato, Matteo Caligiuri, Pietro Zanuttigh
- **机构**：University of Padova
- **出处**：Signal Processing: Image Communication (2026) · [论文](https://doi.org/10.1016/j.image.2026.117483)
- **官网**：[主链接](https://medialab.dei.unipd.it/paper_data/FlyAwareV2)
- **CSI**：无 CSI
- **说明**：面向城市场景理解的多模态跨域无人机数据集，融合真实与合成影像，提供 RGB/深度/语义标注与天气、昼夜变化。合成样本的深度由 CARLA/UE 渲染引擎的 3D 几何直接导出；真实样本（训练集取自 VisDrone、测试集取自 UAVid）原本无深度标注，改用 **Marigold 单目深度估计**生成，因此真实部分深度为**估计值而非传感器实测**，且统一逐样本归一化到 [0,1] 后绝对尺度已被去除。

#### 30. ITU-ARIS Acoustic (2026)  ⚪
- **作者**：İhsan Mert Muhacıroğlu, Tayfun Akgül
- **机构**：Istanbul Technical University (ARIS Lab)
- **出处**：IEEE SIU 2026 / Zenodo · [论文](https://doi.org/10.1109/SIU71813.2026.11636719)
- **官网**：[主链接](https://zenodo.org/records/22682339)
- **CSI**：无 CSI
- **说明**：户外无人机声学探测数据集，单次连续采集约 3.12 小时，切分为 5491 段 1 秒音频（无人机 4491 / 背景 1000），并附防泄漏的分组与划分协议。

#### 31. Multimodal-NF (2026)  🟢
- **作者**：Mengyuan Li, Qianfan Lu, Jiachen Tian, Hongjun Hu, Yu Han, Xiao Li, Chao-Kai Wen, Shi Jin
- **机构**：Southeast University
- **出处**：arXiv:2603.28280 · [论文](https://arxiv.org/abs/2603.28280)
- **官网**：[主链接](https://lmyxxn.github.io/6GXLMIMODatasets/)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：面向近场低空 XL-MIMO 的无线数据集，同步近场 CSI 与 RGB/LiDAR/GPS 多模态数据。

#### 32. PML-CellularEye (2026)  🟡
- **作者**：Ziguo Zhong, Yongming Huang, Huazhou Hou, Fanfei Xu, Haisheng Feng, Shengheng Liu, Xiaohu You
- **机构**：Purple Mountain Laboratories / Southeast University
- **出处**：Science China Information Sciences 69(6):167301 (2026) · [论文](https://doi.org/10.1007/s11432-026-4923-1)
- **官网**：[主链接](https://github.com/ffxu1024/CellularEye_web)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：基于商用 5G/5G-A 基站设备的实测多模态数据集，含 IQ、可见光/红外视频与气象数据。

#### 33. SkyEV (2026)  ⚪
- **作者**：Jakub Mandula, Sebastian Heusinger, Julian Moosmann, Christian Vogt, Michele Magno
- **机构**：ETH Zurich
- **出处**：arXiv:2607.18747 · [论文](https://arxiv.org/abs/2607.18747)
- **官网**：[主链接](https://arxiv.org/abs/2607.18747)
- **CSI**：无 CSI
- **说明**：面向反无人机检测与跟踪的 RGB-事件相机同步数据集，采集未压缩、高同步的双模态数据，覆盖相机自运动、小目标尺度等真实挑战。

#### 34. LAMBDA (2026) ⭐  🟢
- **作者**：Lin Zhou, Peichuan Rao, Chenshuo Zhang, Jianhua Mo, Shu Sun, Zhiyong Chen, Meixia Tao
- **机构**：Shanghai Jiao Tong University
- **出处**：arXiv:2607.03826 · Science Data Bank · [论文](https://arxiv.org/abs/2607.03826)
- **官网**：[主链接](https://doi.org/10.57760/sciencedb.36052)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：低空多模态基础数据集，通过高保真数字孪生流水线生成，同步 RGB、深度、LiDAR、IMU、UAV 位姿、CSI 与雷达资源，覆盖城市/郊区/园区场景与晴雨雪雾天气。

### 通用 / 上游基准数据集（12 个）

#### 1. KITTI (2012)  ⚪
- **作者**：Andreas Geiger, Philip Lenz, Raquel Urtasun
- **机构**：Karlsruhe Institute of Technology (KIT)
- **出处**：CVPR 2012 · [论文](https://doi.org/10.1109/CVPR.2012.6248074)
- **官网**：[主链接](https://www.cvlibs.net/datasets/kitti/)
- **CSI**：无 CSI
- **说明**：自动驾驶感知领域经典基准，提供双目相机、LiDAR 与 GPS 数据。

#### 2. DeepMIMO (2019)  🟢
- **作者**：Ahmed Alkhateeb
- **机构**：Arizona State University
- **出处**：ITA Workshop 2019 · [论文](https://doi.org/10.48550/arXiv.1902.06435)
- **官网**：[主链接](https://www.deepmimo.net/)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：基于 3D 射线追踪的可配置毫米波/大规模MIMO信道数据集生成框架。

#### 3. ViWi (2020)  🟢
- **作者**：Muhammad Alrabeiah, Andrew Hredzak, Zhenhao Liu, Ahmed Alkhateeb
- **机构**：Arizona State University
- **出处**：IEEE VTC2020-Spring · [论文](https://doi.org/10.1109/VTC2020-Spring48590.2020.9128579)
- **官网**：[主链接](https://www.viwi-dataset.net/)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：面向视觉辅助无线通信的深度学习数据集框架。

#### 4. DAIR-V2X (2022)  ⚪
- **作者**：Haibao Yu, Yizhen Luo, Mao Shu, Yiyi Huo, et al.
- **机构**：Tsinghua University AIR / Baidu
- **出处**：CVPR 2022 · [论文](https://doi.org/10.1109/CVPR52688.2022.02067)
- **官网**：[主链接](https://air.tsinghua.edu.cn/DAIR-V2X/index.html) ｜ [备用](https://thudair.baai.ac.cn/index)
- **CSI**：无 CSI
- **说明**：大规模真实车路协同 3D 目标检测数据集。

#### 5. E-FLASH (2022)  🟡
- **作者**：Jerry Gu, Batool Salehi, Debashri Roy, Kaushik R. Chowdhury
- **机构**：Northeastern University
- **出处**：IEEE Communications Magazine 2022 · [论文](https://doi.org/10.1109/MCOM.002.2200028)
- **官网**：[主链接](https://ieee-dataport.org/documents/e-flash)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：真实毫米波 V2X 场景下同步 LiDAR/相机/GPS 的多模态波束选择数据集（约 23 GB）。

#### 6. OPV2V (2022)  ⚪
- **作者**：Runsheng Xu, Hao Xiang, Zhengzhong Tu, Xin Xia, Ming-Hsuan Yang, Jiaqi Ma
- **机构**：University of California, Los Angeles (UCLA)
- **出处**：ICRA 2022 · [论文](https://doi.org/10.1109/ICRA46639.2022.9812038)
- **官网**：[主链接](https://mobility-lab.seas.ucla.edu/opv2v/)
- **CSI**：无 CSI
- **说明**：基于 CARLA 的车车协同感知基准数据集与融合流水线。

#### 7. WAIR-D (2022)  🟢
- **作者**：Yourui Huangfu, Jian Wang, Shengchen Dai, Rong Li, et al.
- **机构**：Huawei Wireless Technology Lab / Zhejiang University
- **出处**：IEEE/CIC ICCC 2022 · [论文](https://ieeexplore.ieee.org/document/9880684)
- **官网**：[主链接](https://www.mobileai-dataset.com/html/default/yingwen/DateSet/1590994253188792322.html?index=1)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：覆盖 40+ 城市真实地图的无线AI研究信道数据集，含稀疏/密集两种部署场景。

#### 8. M3SC (2023)  🟢
- **作者**：Xiang Cheng, Ziwei Huang, Lu Bai, Haotian Zhang, et al.
- **机构**：Peking University (PCNI Lab)
- **出处**：China Communications 2023 · [论文](https://doi.org/10.23919/JCC.fa.2023-0268.202311)
- **官网**：[主链接](http://pcni.pku.edu.cn/dataset_1.html)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：混合多模态感知与通信一体化数据集，物理空间与电磁空间精确对齐。

#### 9. SDCD (2024)  ⚪
- **作者**：Jihao Li, Jincheng Hu, Yanjun Huang, Zheng Chen, Bingzhao Gao, Jingjing Jiang, Yuanjian Zhang
- **机构**：University of Southampton / Tongji University
- **出处**：Scientific Data 11:301 (2024) · [论文](https://doi.org/10.1038/s41597-024-03025-5)
- **官网**：[主链接](https://github.com/ReparkHjc/SDCD)
- **CSI**：无 CSI
- **说明**：合成数字城市数据集，93 万张高清 RGB 图像与完美深度图，覆盖 6 种天气。

#### 10. Multimodal-Wireless (2025)  🟢
- **作者**：Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li
- **机构**：Southeast University / Imperial College London
- **出处**：arXiv:2511.03220 · ICC 2026 · [论文](https://arxiv.org/abs/2511.03220)
- **官网**：[主链接](https://le-liang.github.io/mmw)
- **CSI**：有 CSI（完整 MIMO 信道）
- **说明**：基于 CARLA + Sionna 的大规模开源数据集，约 16.1 万帧，CSI 与 5 类传感器模态 100 Hz 同步。

#### 11. EM-134K (2026)  🟡
- **作者**：Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun
- **机构**：Tsinghua University / BUPT / Tianjin University / IMECAS 等
- **出处**：MERLIN, arXiv:2603.08174 · [论文](https://arxiv.org/abs/2603.08174)
- **官网**：[主链接](https://em-merlin.github.io/)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：面向多模态大模型的**电磁信号-文本配对预训练集**，由 3500 万+ 真实与仿真信号（10 个子集：调制识别、参数估计、协议识别、雷达/通信干扰及抗干扰等）程序化生成 134,107 条指令微调样本，采用类 LLaVA 的单轮对话格式。

#### 12. EM-Bench (2026)  🟡
- **作者**：Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun
- **机构**：Tsinghua University / BUPT / Tianjin University / IMECAS 等
- **出处**：MERLIN, arXiv:2603.08174 · [论文](https://arxiv.org/abs/2603.08174)
- **官网**：[主链接](https://em-merlin.github.io/)
- **CSI**：部分 CSI（原始 I/Q、非 MIMO 信道等）
- **说明**：电磁信号**理解与推理评测基准**，含 4200+ 条专家校验问答，按 3 个层级、14 个子任务组织：感知（信号刻画、干扰识别、片段检测）与推理（雷达/通信场景下的干扰与抗干扰策略生成）。

---

## 收录说明

- **模态标注**：`1` 包含 / `0.5` 有限或部分支持 / `0` 缺失或不适用。
- **低空 / 通用分区**：`la = 0` 即完全不含低空 / UAV 场景的数据集，统一归入「通用 / 上游基准数据集」表，不与低空相关条目混排。
- **CSI 颜色标注**：🟢 有 CSI —— 数据集提供完整 MIMO 信道 CSI（含仿真射线追踪与实测信道）；🟡 部分 CSI —— 仅提供原始 I/Q 或非 MIMO 信道的数据；⚪ 无 CSI —— 不含信道 / 射频数据。同一颜色同时体现在总览表的 CSI 列、矩阵表名称前的圆点与详情条目的 CSI 字段。
- **核心模态与声学**：核心模态为低空、CSI、RGB/深度、LiDAR、雷达、IMU/GPS、天气/时间 7 类；声学为补充模态，仅 ITU-ARIS Acoustic 与 DADS 覆盖。「全模态覆盖」统计针对 7 类核心模态。
- **年份**：以 LAMBDA 论文表1 为准；个别数据集论文发表年与数据集发布年不同，已在详情中注明出处。
- **链接**：优先给出数据集官方主页；如官网不稳定，另附备用镜像或代码仓库链接。
- **范围**：聚焦低空/UAV 通感一体化相关，同时收录必要的上游经典基准（如 KITTI、DeepMIMO 等）、低空安防常用的射频/雷达探测数据集（DroneRF 系列、RFUAV、LSS-FMCWR 等）与电磁信号理解数据集（EM-134K / EM-Bench）。
- **射频类数据集的模态标注**：DroneRF 系列、RFUAV、CageDroneRF 等提供原始 I/Q 射频数据而非 MIMO 信道 CSI，故 `CSI` 列标注为「有限支持」；EM-134K / EM-Bench 同时含雷达与通信域信号，`CSI` 与 `雷达` 列同样标为「有限支持」。
- **已知访问限制**：UAVDT 官网（Google Sites）与 DADS 托管页（Hugging Face）在部分网络环境下不可达，如无法访问可改用各自的镜像或联系数据发布方。

## 贡献方式

欢迎补充遗漏的数据集或修正失效链接：

1. Fork 本仓库；
2. 在 `data/datasets.json` 与 `assets/app.js` 的 `DATASETS` 数组中同步新增/修改条目；
3. 提交 Pull Request，或直接开 Issue 说明（数据集名称、官网、年份、作者、模态覆盖）。

## 引用

若本索引对你的研究有帮助，请引用 LAMBDA 论文：

```bibtex
@article{zhou2026lambda,
  title   = {LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication},
  author  = {Zhou, Lin and Rao, Peichuan and Zhang, Chenshuo and Mo, Jianhua
             and Sun, Shu and Chen, Zhiyong and Tao, Meixia},
  journal = {arXiv:2607.03826},
  year    = {2026}
}
```

使用具体数据集时，请另行引用其对应论文或数据论文（见各条目「出处」）。

## License

本索引的整理内容以 CC BY 4.0 发布；各数据集本身的使用请遵循其各自许可协议。
