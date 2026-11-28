/* ==========================================================================
   Low-Altitude Datasets — data + rendering
   Base list: LAMBDA (arXiv:2607.03826), Table 1.
   Extended: curator-verified additions (see README「收录说明」).
   Modality scale: 1 = included, 0.5 = limited/partial, 0 = absent.
   csi = 信道估计（CSI）；rf = 射频采集（原始 I/Q、频谱、距离-多普勒图）。两者是不同模态，
   只采波形不做信道估计的射频数据集记 csi: 0, rf: 1，不要塞进 csi 的中间档。
   Data origin (source, required): real = measured, mixed = measured + synthetic, sim = fully generated.
   ========================================================================== */

const MODALITIES = [
  { key: 'la',       zh: '低空',     en: 'Low-altitude',  core: true },
  { key: 'csi',      zh: 'CSI信道',  en: 'CSI',           core: true },
  { key: 'rf',       zh: '射频信号', en: 'RF' },
  { key: 'rgb',      zh: 'RGB/深度', en: 'RGB/Depth',     core: true },
  { key: 'ir',       zh: '红外',     en: 'IR' },
  { key: 'lidar',    zh: 'LiDAR',    en: 'LiDAR',         core: true },
  { key: 'radar',    zh: '雷达',     en: 'Radar',         core: true },
  { key: 'imu',      zh: 'IMU/GPS',  en: 'IMU/GPS',       core: true },
  { key: 'weather',  zh: '天气/时间', en: 'Weather/Time',  core: true },
  { key: 'acoustic', zh: '声学',     en: 'Acoustic' }
];

const DATASETS = [
  {
    id: 'kitti', name: 'KITTI', year: 2012,
    access: 'open',
    source: 'real',
    authors: 'Andreas Geiger, Philip Lenz, Raquel Urtasun',
    org: 'Karlsruhe Institute of Technology (KIT)',
    venue: 'CVPR 2012',
    site: 'https://www.cvlibs.net/datasets/kitti/',
    paper: 'https://doi.org/10.1109/CVPR.2012.6248074',
    focusZh: '地面自动驾驶感知基准',
    focusEn: 'Terrestrial autonomous-driving perception',
    modality: { la: 0, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 0, imu: 1, weather: .5, acoustic: 0 },
    descZh: "自动驾驶感知领域经典基准，提供双目相机、LiDAR 与 GPS 数据。",
    descEn: "The classic benchmark for autonomous-driving perception: stereo cameras, LiDAR and GPS/IMU from 22 sequences of urban, rural and highway driving. Still the de-facto upstream reference for camera-LiDAR fusion work, although it contains no wireless or aerial data."
  },
  {
    id: 'deepmimo', name: 'DeepMIMO', year: 2019,
    access: 'open',
    source: 'sim',
    authors: 'Ahmed Alkhateeb',
    org: 'Arizona State University',
    venue: 'ITA Workshop 2019',
    site: 'https://www.deepmimo.net/',
    paper: 'https://doi.org/10.48550/arXiv.1902.06435',
    focusZh: '可配置射线追踪信道数据集',
    focusEn: 'Configurable ray-tracing channels',
    modality: { la: 0, csi: 1, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 },
    descZh: "基于 3D 射线追踪的可配置毫米波/大规模MIMO信道数据集生成框架。",
    descEn: "A configurable ray-tracing channel generator for mmWave and massive MIMO research. Users choose a scenario, antenna geometry and carrier frequency, and the toolkit returns channel tensors along with ray-tracing metadata. Because scenarios are reconfigurable rather than fixed, DeepMIMO serves as an upstream channel-model source rather than a measured campaign."
  },
  {
    id: 'viwi', name: 'ViWi', year: 2020,
    access: 'open',
    source: 'mixed',
    authors: 'Muhammad Alrabeiah, Andrew Hredzak, Zhenhao Liu, Ahmed Alkhateeb',
    org: 'Arizona State University',
    venue: 'IEEE VTC2020-Spring',
    site: 'https://www.viwi-dataset.net/',
    paper: 'https://doi.org/10.1109/VTC2020-Spring48590.2020.9128579',
    focusZh: '视觉辅助无线通信',
    focusEn: 'Vision-aided wireless communications',
    modality: { la: 0, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: .5, radar: 0, imu: 0, weather: .5, acoustic: 0 },
    descZh: "面向视觉辅助无线通信的深度学习数据集框架。",
    descEn: "A deep-learning dataset framework for vision-aided wireless communication: synchronized camera images and mmWave beam power vectors, so that visual context can be used to predict beam selection. Both synthetic ray-traced and measured subsets are provided."
  },
  {
    id: 'opv2v', name: 'OPV2V', year: 2022,
    access: 'open',
    source: 'sim',
    authors: 'Runsheng Xu, Hao Xiang, Zhengzhong Tu, Xin Xia, Ming-Hsuan Yang, Jiaqi Ma',
    org: 'University of California, Los Angeles (UCLA)',
    venue: 'ICRA 2022',
    site: 'https://mobility-lab.seas.ucla.edu/opv2v/',
    paper: 'https://doi.org/10.1109/ICRA46639.2022.9812038',
    focusZh: '车车协同感知',
    focusEn: 'V2V cooperative perception',
    modality: { la: 0, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 0, imu: .5, weather: .5, acoustic: 0 },
    descZh: "基于 CARLA 的车车协同感知基准数据集与融合流水线。",
    descEn: "A CARLA-based benchmark for vehicle-to-vehicle cooperative perception, with LiDAR and camera data from connected vehicles that share their observations. Ships a fusion baseline (Attentive Fusion) and the accompanying training pipeline."
  },
  {
    id: 'dairv2x', name: 'DAIR-V2X', year: 2022,
    access: 'open',
    source: 'real',
    authors: 'Haibao Yu, Yizhen Luo, Mao Shu, Yiyi Huo, et al.',
    org: 'Tsinghua University AIR / Baidu',
    venue: 'CVPR 2022',
    site: 'https://air.tsinghua.edu.cn/DAIR-V2X/index.html',
    siteAlt: 'https://thudair.baai.ac.cn/index',
    paper: 'https://doi.org/10.1109/CVPR52688.2022.02067',
    focusZh: '真实车路协同感知',
    focusEn: 'Real-world vehicle-infrastructure perception',
    modality: { la: 0, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 0, imu: .5, weather: .5, acoustic: 0 },
    descZh: "大规模真实车路协同 3D 目标检测数据集。",
    descEn: "A large real-world vehicle-infrastructure cooperative 3D detection dataset collected on Beijing roads, pairing roadside and on-board sensors with calibrated annotations. A standard reference for V2X perception; terrestrial only."
  },
  {
    id: 'eflash', name: 'E-FLASH', year: 2022,
    access: 'register',
    source: 'real',
    authors: 'Jerry Gu, Batool Salehi, Debashri Roy, Kaushik R. Chowdhury',
    org: 'Northeastern University',
    venue: 'IEEE Communications Magazine 2022',
    site: 'https://ieee-dataport.org/documents/e-flash',
    paper: 'https://doi.org/10.1109/MCOM.002.2200028',
    focusZh: '实测毫米波V2X波束选择',
    focusEn: 'Real-world mmWave V2X beam selection',
    modality: { la: 0, csi: .5, rf: 0, rgb: .5, ir: 0, lidar: 1, radar: 0, imu: 1, weather: .5, acoustic: 0 },
    descZh: "真实毫米波 V2X 场景下同步 LiDAR/相机/GPS 的多模态波束选择数据集（约 23 GB）。",
    descEn: "A real-world mmWave V2X beam-selection dataset with synchronized LiDAR, camera, GPS and mmWave beam measurements (about 23 GB). Targets multimodal beam prediction in vehicular settings; access requires an IEEE DataPort account."
  },
  {
    id: 'waird', name: 'WAIR-D', year: 2022,
    access: 'open',
    source: 'sim',
    authors: 'Yourui Huangfu, Jian Wang, Shengchen Dai, Rong Li, et al.',
    org: 'Huawei Wireless Technology Lab / Zhejiang University',
    venue: 'IEEE/CIC ICCC 2022',
    site: 'https://www.mobileai-dataset.com/html/default/yingwen/DateSet/1590994253188792322.html?index=1',
    paper: 'https://ieeexplore.ieee.org/document/9880684',
    focusZh: '真实地图上的无线AI信道',
    focusEn: 'Wireless AI channels over real-world maps',
    modality: { la: 0, csi: 1, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "覆盖 40+ 城市真实地图的无线AI研究信道数据集，含稀疏/密集两种部署场景。",
    descEn: "A channel dataset for wireless AI research built on real maps of more than 40 cities, with sparse and dense deployment variants. Provides channel matrices for user to base-station pairs so that deep-learning beamforming and CSI-feedback methods can be trained offline."
  },
  {
    id: 'm3sc', name: 'M3SC', year: 2023,
    access: 'open',
    source: 'mixed',
    authors: 'Xiang Cheng, Ziwei Huang, Lu Bai, Haotian Zhang, et al.',
    org: 'Peking University (PCNI Lab)',
    venue: 'China Communications 2023',
    site: 'http://pcni.pku.edu.cn/dataset_1.html',
    paper: 'https://doi.org/10.23919/JCC.fa.2023-0268.202311',
    focusZh: '混合多模态通感一体化数据',
    focusEn: 'Mixed multimodal ISAC data',
    modality: { la: 0, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: 0, weather: 1, acoustic: 0 },
    descZh: "混合多模态感知与通信一体化数据集，物理空间与电磁空间精确对齐。",
    descEn: "A hybrid multimodal sensing-and-communication dataset that aligns physical space with electromagnetic space, pairing sensor observations with channel data for the same scene. Designed for joint sensing-communication studies in which geometry must stay consistent across modalities."
  },
  {
    id: 'deepsense6g', name: 'DeepSense 6G', year: 2023,
    access: 'open',
    source: 'real',
    authors: 'Ahmed Alkhateeb, et al.',
    org: 'Arizona State University',
    venue: 'IEEE Communications Magazine 2023',
    site: 'https://www.deepsense6g.net/',
    paper: 'https://doi.org/10.1109/MCOM.006.2200730',
    focusZh: '实测多模态无线测量',
    focusEn: 'Real-world multimodal wireless measurements',
    modality: { la: .5, csi: .5, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: .5, weather: .5, acoustic: 0 },
    descZh: "大规模真实世界感知-通信一体化多模态数据集，含 100 万+ 样本。",
    descEn: "A large real-world sensing-communication dataset with more than one million synchronized samples: camera, GPS, LiDAR and 5G mmWave beam and power measurements collected across multiple cities and scenarios. Widely used as a benchmark for beam prediction and multimodal wireless learning."
  },
  {
    id: 'sdcd', name: 'SDCD', year: 2024,
    access: 'open',
    source: 'sim',
    authors: 'Jihao Li, Jincheng Hu, Yanjun Huang, Zheng Chen, Bingzhao Gao, Jingjing Jiang, Yuanjian Zhang',
    org: 'University of Southampton / Tongji University',
    venue: 'Scientific Data 11:301 (2024)',
    site: 'https://github.com/ReparkHjc/SDCD',
    paper: 'https://doi.org/10.1038/s41597-024-03025-5',
    focusZh: '合成数字城市RGB-深度鲁棒性',
    focusEn: 'Synthetic digital-city RGB-depth robustness',
    modality: { la: 0, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 },
    descZh: "合成数字城市数据集，93 万张高清 RGB 图像与完美深度图，覆盖 6 种天气。",
    descEn: "A synthetic digital-city dataset with roughly 930,000 high-resolution RGB images and perfectly aligned depth maps across six weather conditions. Built for segmentation and depth estimation, and frequently reused as a vision backbone in wireless multimodal pipelines."
  },
  {
    id: 'deepverse6g', name: 'DeepVerse 6G', year: 2024,
    access: 'open',
    source: 'sim',
    authors: 'Umut Demirhan, Abdelrahman Taha, Ahmed Alkhateeb',
    org: 'Arizona State University',
    venue: 'Preprint / IEEE DataPort',
    site: 'https://deepverse6g.net/',
    siteAlt: 'https://www.wi-lab.net/datasets-page/',
    paper: 'https://doi.org/10.21227/nk8m-6087',
    focusZh: '数字孪生无线数据集',
    focusEn: 'Digital-twin wireless datasets',
    modality: { la: .5, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: .5, radar: 1, imu: .5, weather: .5, acoustic: 0 },
    descZh: "数字孪生数据集生成框架，融合无线射线追踪与逼真视觉/雷达/LiDAR 仿真。",
    descEn: "A digital-twin data-generation framework that couples wireless ray tracing with photorealistic visual, radar and LiDAR simulation, so the same 3D scene yields both electromagnetic and perceptual observations. Suited to sensing-communication co-design and cross-modal pretraining."
  },
  {
    id: 'synthsom', name: 'SynthSoM', year: 2025,
    access: 'open',
    source: 'sim',
    authors: 'Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, Mingran Sun, et al.',
    org: 'Peking University / Shandong University',
    venue: 'Scientific Data 12:819 (2025)',
    site: 'https://github.com/ZiweiHuang96/SynthSoM',
    siteAlt: 'https://figshare.com/s/3c0203236d3ae2eed872',
    paper: 'https://doi.org/10.1038/s41597-025-05065-x',
    focusZh: '空地协同机器联觉(SoM)合成数据集',
    focusEn: 'Synthetic SoM dataset with air-ground scenarios',
    modality: { la: .5, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: 0, weather: 1, acoustic: 0 },
    descZh: "面向机器联觉(SoM)的空地多链路协同合成数据集，含 5 个典型场景。",
    descEn: "A synthetic air-ground dataset for machine synesthesia (SoM): five representative scenarios, each with multiple simultaneous links and aligned multimodal observations. Targets joint optimization of sensing and communication over heterogeneous links."
  },
  {
    id: 'multimodal-wireless', name: 'Multimodal-Wireless', year: 2025,
    access: 'open',
    source: 'sim',
    authors: 'Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li',
    org: 'Southeast University / Imperial College London',
    venue: 'arXiv:2511.03220 · ICC 2026',
    site: 'https://le-liang.github.io/mmw',
    paper: 'https://arxiv.org/abs/2511.03220',
    focusZh: 'V2X多模态通信与感知',
    focusEn: 'V2X multimodal communication and perception',
    modality: { la: 0, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: 1, weather: 1, acoustic: 0 },
    descZh: "基于 CARLA + Sionna 的大规模开源数据集，约 16.1 万帧，CSI 与 5 类传感器模态 100 Hz 同步。",
    descEn: "A large open dataset coupling CARLA rendering with Sionna ray tracing: about 161,000 frames in which CSI is synchronized at 100 Hz with five sensor modalities. Built for multimodal wireless learning where channel state and scene appearance must be temporally aligned."
  },
  {
    id: 'multimodal-nf', name: 'Multimodal-NF', year: 2026,
    access: 'open',
    source: 'sim',
    authors: 'Mengyuan Li, Qianfan Lu, Jiachen Tian, Hongjun Hu, Yu Han, Xiao Li, Chao-Kai Wen, Shi Jin',
    org: 'Southeast University',
    venue: 'arXiv:2603.28280',
    site: 'https://lmyxxn.github.io/6GXLMIMODatasets/',
    paper: 'https://arxiv.org/abs/2603.28280',
    focusZh: '近场低空XL-MIMO',
    focusEn: 'Near-field low-altitude XL-MIMO',
    modality: { la: 1, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 0, imu: 1, weather: .5, acoustic: 0 },
    descZh: "面向近场低空 XL-MIMO 的无线数据集，同步近场 CSI 与 RGB/LiDAR/GPS 多模态数据。",
    descEn: "A wireless dataset for near-field low-altitude XL-MIMO, synchronizing near-field CSI with RGB, LiDAR and GPS observations. Addresses the near-field regime of large-aperture arrays where far-field plane-wave assumptions break down."
  },
  {
    id: 'pml-cellulareye', name: 'PML-CellularEye', year: 2026,
    access: 'open',
    source: 'real',
    authors: 'Ziguo Zhong, Yongming Huang, Huazhou Hou, Fanfei Xu, Haisheng Feng, Shengheng Liu, Xiaohu You',
    org: 'Purple Mountain Laboratories / Southeast University',
    venue: 'Science China Information Sciences 69(6):167301 (2026)',
    site: 'https://ffxu1024.github.io/CellularEye/',
    siteAlt: 'https://github.com/ffxu1024/CellularEye',
    paper: 'https://doi.org/10.1007/s11432-026-4923-1',
    focusZh: '实测基站侧低空ISAC数据（含可见光/红外视频）',
    focusEn: 'Real-world BS-side low-altitude ISAC data',
    modality: { la: 1, csi: .5, rf: 1, rgb: .5, ir: .5, lidar: 0, radar: .5, imu: 1, weather: 1, acoustic: 0 },
    descZh: "基于商用 5G/5G-A 基站设备的实测多模态数据集，含 IQ、可见光/红外视频与气象数据。CSI 以距离域形式随 I/Q 归档，用官方工具包做一次 FFT 即还原为子载波×慢时间的复数 CSI；但采集按 30 波束分时扫描、每波束单 OFDM 符号单接收通道，不含 MIMO 天线对维度，故记为部分 CSI。数据托管于 ScienceDB（DOI: 10.57760/sciencedb.018bv，约 2.7 TB，CC BY-NC 4.0），工具包与格式说明见官网与备用链接。",
    descEn: "A measured multimodal dataset acquired with commercial 5G/5G-A base-station equipment, combining raw I/Q, visible and infrared video, and weather records. CSI is archived in the range domain alongside I/Q and recovered as subcarrier-by-slow-time complex CSI with a single FFT via the official toolkit; because acquisition scans 30 beams in time and each beam records one OFDM symbol on one receive channel, there is no MIMO antenna-pair dimension, so the entry is classed as partial CSI. Roughly 2.7 TB on ScienceDB under CC BY-NC 4.0."
  },
  {
    id: 'dronerfa', name: 'DroneRFa', year: 2024,
    access: 'open',
    source: 'real',
    authors: '俞宁宁, 毛盛健, 周成伟, 孙国威, 史治国, 陈积明',
    org: '浙江大学信息与电子工程学院',
    venue: '电子与信息学报 46(4): 1147–1156 (2024)',
    site: 'https://www.scidb.cn/detail?dataSetId=34f0a91e8a544904998b8fdc44477380',
    siteAlt: 'https://jeit.ac.cn/web/data/getData?dataType=Dataset3',
    paper: 'https://jeit.ac.cn/cn/article/doi/10.11999/JEIT230570',
    focusZh: '大规模无人机射频信号低空探测（25类场景，3个ISM频段）',
    focusEn: 'Large-scale drone RF signals for low-altitude detection',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "依托 USRP-2955 采集的大规模无人机射频信号数据集，覆盖城市户外 9 类、室内 15 类及背景参照 1 类，涉及 915 MHz / 2.4 GHz / 5.8 GHz 三个 ISM 频段，每类不少于 12 个片段、每片段 1 亿采样点以上，以原始 I/Q 存储并带机型、探测距离、频段标签。2026 年入选 ScienceDB「科学数据奖」十佳数据集。",
    descEn: "A large-scale UAV RF dataset collected with a USRP-2955 across 9 outdoor urban classes, 15 indoor classes and one background class, covering the 915 MHz, 2.4 GHz and 5.8 GHz ISM bands. Each class holds at least 12 segments of more than 100 million samples, stored as raw I/Q and labelled with drone model, standoff distance and band. Named one of the ten best datasets at the 2026 Science Data Awards."
  },
  {
    id: 'dronerfb-dir', name: 'DroneRFb-DIR', year: 2025,
    access: 'open',
    source: 'real',
    authors: '任俊宇, 俞宁宁, 周成伟, 史治国, 陈积明',
    org: '浙江大学信息与电子工程学院 / 工业控制技术全国重点实验室',
    venue: '电子与信息学报 47(3): 573–581 (2025)',
    site: 'https://www.scidb.cn/detail?dataSetId=84cf9101e739402784b1396783881202',
    paper: 'https://jeit.ac.cn/cn/article/doi/10.11999/JEIT240804',
    focusZh: '非合作无人机个体识别（6类×3架，含视距/非视距标注）',
    focusEn: 'Non-cooperative drone individual identification',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "面向非合作无人机**个体识别**的射频数据集，含 6 种机型、每型 3 架不同个体及 1 类背景信号；2.4–2.48 GHz、80 MHz 采样，原始 I/Q 存储，共 4690 个片段（每片段 4 M 以上采样点），含个体编号与视距/非视距标注，并已划分训练/测试集。",
    descEn: "An RF dataset aimed at non-cooperative drone individual identification: 6 models, 3 distinct airframes per model and one background class, captured at 2.4-2.48 GHz with 80 MHz sampling as raw I/Q. Contains 4690 segments of over 4 million samples each, annotated with airframe identity and LOS/NLOS condition, with predefined train and test splits."
  },
  {
    id: 'dronerfc-mm', name: 'DroneRFc-MM', year: 2026,
    access: 'open',
    source: 'real',
    authors: '虞涛菘, 杨倩倩, 胡卓, 李明锴, 吴嘉俊, 苏煜繁, 潘俊宇, 史治国, 陈积明',
    org: '浙江大学全省空域感知与自主无人系统重点实验室',
    venue: '电子与信息学报（网络优先出版, 2026）',
    site: 'https://www.scidb.cn/detail?dataSetId=0af05173ce5d45528ebd707d67f3d641',
    paper: 'https://jeit.ac.cn/cn/article/doi/10.11999/JEIT260889',
    focusZh: '反无人机多模态实测数据集（六类传感器同步观测城市低空目标）',
    focusEn: 'Anti-UAV multimodal measured dataset',
    modality: { la: 1, csi: 0, rf: 1, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: 1, weather: 0, acoustic: 1 },
    descZh: "城市低空场景下**六类传感器同步采集**的反无人机多模态数据集——云台相机、广角相机、射频天线（USRP-2955 + VERT2450，2.45 GHz）、激光雷达（RoboSense EM4）、毫米波雷达（Arbe Phoenix，77–81 GHz）与传声器阵列；覆盖 6 种消费级 DJI 机型，飞行数据总时长超 30 分钟，含机型、三维位置、姿态与速度细粒度标注，并附样本处理代码。",
    descEn: "A counter-UAV multimodal dataset with six synchronized sensor types: gimbal camera, wide-angle camera, RF front end (USRP-2955 with VERT2450 at 2.45 GHz), LiDAR (RoboSense EM4), mmWave radar (Arbe Phoenix, 77-81 GHz) and a microphone array. Covers six consumer DJI models over more than 30 minutes of flight, with fine-grained labels for model, 3D position, attitude and velocity, plus sample-processing code."
  },
  {
    id: 'em-134k', name: 'EM-134K', year: 2026,
    access: 'open',
    source: 'mixed',
    authors: 'Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun',
    org: 'Tsinghua University / BUPT / Tianjin University / IMECAS 等',
    venue: 'MERLIN, arXiv:2603.08174',
    site: 'https://em-merlin.github.io/',
    paper: 'https://arxiv.org/abs/2603.08174',
    focusZh: '电磁信号-文本配对预训练集（13.4万对，源自3500万信号）',
    focusEn: 'EM signal-text pair corpus for MLLM pre-training',
    modality: { la: 0, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: .5, imu: 0, weather: 0, acoustic: 0 },
    descZh: "面向多模态大模型的**电磁信号-文本配对预训练集**，由 3500 万+ 真实与仿真信号（10 个子集：调制识别、参数估计、协议识别、雷达/通信干扰及抗干扰等）程序化生成 134,107 条指令微调样本，采用类 LLaVA 的单轮对话格式。",
    descEn: "An electromagnetic signal-text pretraining corpus for multimodal large language models: 134,107 instruction-tuning samples generated programmatically from more than 35 million real and simulated signals across 10 subsets (modulation recognition, parameter estimation, protocol identification, radar and communication jamming and anti-jamming, among others), formatted as LLaVA-style single-turn dialogues."
  },
  {
    id: 'em-bench', name: 'EM-Bench', year: 2026,
    access: 'open',
    source: 'mixed',
    authors: 'Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun',
    org: 'Tsinghua University / BUPT / Tianjin University / IMECAS 等',
    venue: 'MERLIN, arXiv:2603.08174',
    site: 'https://em-merlin.github.io/',
    paper: 'https://arxiv.org/abs/2603.08174',
    focusZh: '电磁信号理解与推理评测基准（4200+问答，3级14子任务）',
    focusEn: 'EM signal perception & reasoning benchmark',
    modality: { la: 0, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: .5, imu: 0, weather: 0, acoustic: 0 },
    descZh: "电磁信号**理解与推理评测基准**，含 4200+ 条专家校验问答，按 3 个层级、14 个子任务组织：感知（信号刻画、干扰识别、片段检测）与推理（雷达/通信场景下的干扰与抗干扰策略生成）。",
    descEn: "An evaluation benchmark for electromagnetic signal understanding and reasoning: over 4200 expert-verified question-answer pairs organized into 3 levels and 14 subtasks, spanning perception (signal characterization, jamming identification, burst detection) and reasoning (jamming and anti-jamming strategy generation in radar and communication scenarios)."
  },

  /* ---------- curator-verified additions ---------- */

  {
    id: 'great-msd', name: 'Great-MSD', year: 2025,
    access: 'open',
    source: 'sim',
    authors: 'Kongwu Huang, Shiyi Mu, Jun Jiang, Yuan Gao, Shugong Xu',
    org: 'Shanghai University / Xi\'an Jiaotong-Liverpool University',
    venue: 'arXiv:2507.08716（Great-X 平台）',
    site: 'https://github.com/hkw-xg/Great-MCD',
    paper: 'https://arxiv.org/abs/2507.08716',
    focusZh: '单引擎仿真低空多模态通感一体化数据集（10万样本）',
    focusEn: 'Single-engine multimodal ISAC simulation dataset',
    modality: { la: 1, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: 1, weather: 0, acoustic: 0 },
    descZh: "基于 Great-X 平台（在 Unreal Engine 内重构 Sionna 射线追踪）生成的低空多模态通感一体化数据集，10 万样本同步 CSI、RGB、深度、雷达、LiDAR 与三维坐标/轨迹，并附基于 CSI 的无人机三维定位基线。",
    descEn: "A low-altitude multimodal ISAC dataset generated on the Great-X platform, which rebuilds Sionna ray tracing inside Unreal Engine. Provides 100,000 samples with synchronized CSI, RGB, depth, radar, LiDAR and 3D coordinates and trajectories, together with a CSI-based 3D UAV localization baseline."
  },
  {
    id: 'sensiverse', name: 'Sensiverse', year: 2023,
    access: 'open',
    source: 'sim',
    authors: 'Jiajin Luo, Baojian Zhou, Yang Yu, Ping Zhang, et al. (Huawei)',
    org: 'Huawei Technologies',
    venue: 'arXiv:2308.13789',
    site: 'https://sensiverse.github.io/',
    paper: 'https://arxiv.org/abs/2308.13789',
    focusZh: '多场景多频段ISAC感知信道数据集（3.5/10/26/100 GHz）',
    focusEn: 'Multi-scenario multi-band ISAC sensing channel dataset',
    modality: { la: .5, csi: 1, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 },
    descZh: "华为发布的 ISAC 感知信道数据集，覆盖 25+ 城市、100+ 场景，总量 15 TB 级，含 3.5/10/26/100 GHz 四个频段，支持三维环境重建与单/双基地动目标检测。",
    descEn: "Huawei's ISAC sensing-channel dataset covering more than 25 cities and 100 scenarios at 3.5, 10, 26 and 100 GHz, at a total scale of about 15 TB. Supports 3D environment reconstruction and monostatic or bistatic moving-target detection; fully simulated."
  },
  {
    id: 'crosslayer-uav6g', name: 'Cross-layer UAV 6G', year: 2026,
    access: 'open',
    source: 'real',
    authors: 'Francesco Paolucci, Emilio Paolini, Massimo Satler, et al.',
    org: 'CNIT / Scuola Superiore Sant\'Anna',
    venue: 'Zenodo (2026)',
    site: 'https://zenodo.org/records/21468734',
    paper: 'https://doi.org/10.5281/zenodo.21468734',
    focusZh: '5G测试床无人机跨层（移动性-无线-应用）测量',
    focusEn: 'Cross-layer UAV measurements over a 5G testbed',
    modality: { la: 1, csi: 0, rf: .5, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 1, weather: 0, acoustic: 0 },
    descZh: "5G 测试床中以无人机为移动终端采集的跨层数据集，同步 UAV 移动性测量、O-RAN 分离式 DU/CU/UE 无线指标与应用层（合成流量、视频流）性能指标。",
    descEn: "A cross-layer dataset from a 5G testbed with a UAV as the mobile terminal, synchronizing UAV mobility traces, O-RAN disaggregated DU/CU/UE radio metrics and application-layer performance (synthetic traffic, video streaming). Useful for cross-layer optimization; the radio side provides KPIs only, not raw waveforms."
  },
  {
    kind: 'collection',
    id: 'aerpaw', name: 'AERPAW', year: 2024,
    access: 'register',
    source: 'real',
    authors: 'Ismail Guvenc, Mihail L. Sichitiu, Rudra Dutta, et al.',
    org: 'North Carolina State University',
    venue: 'AERPAW / Dryad / IEEE DataPort (2024–2026)',
    site: 'https://aerpaw.org/experiments/datasets/',
    paper: 'https://arxiv.org/abs/2510.08752',
    focusZh: '空地/空空信道探测、频谱监测与5G KPI实测合集（30+数据集；其中 Dataset-31 空空信道探测、Dataset-32 3.4 GHz 空地信道探测可单独引用，AADM 多模态测量集已另立条目）',
    focusEn: 'A2G/A2A channel sounding, spectrum & KPI datasets',
    modality: { la: 1, csi: .5, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: .5, imu: 1, weather: 0, acoustic: 0 },
    descZh: "北卡州立大学 AERPAW 平台的公开数据集族（30+ 个），涵盖空地/空空信道探测与路损、宽频段频谱监测、5G-NSA KPI、LoRaWAN 传播与 TDOA 定位等，多数托管于 Dryad / IEEE DataPort。",
    descEn: "The public dataset family of North Carolina State University's AERPAW platform, comprising more than 30 datasets on air-ground and air-air channel sounding and path loss, wideband spectrum monitoring, 5G-NSA KPIs, and LoRaWAN propagation and TDOA localization. Most are hosted on Dryad or IEEE DataPort; linked subsets are listed separately on the card."
  },
  {
    id: 'lipase', name: 'LIPASE', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Yifei Sun, Chao Yu, Yan Luo, Tony Xiao Han, Haisheng Tan, Rui Wang, Francis C. M. Lau',
    org: 'The University of Hong Kong / SUSTech / Huawei 等',
    venue: 'IEEE OJ-COMS 6: 3779–3794 (2025)',
    site: 'https://github.com/yfsun0327/lipase-dataset',
    paper: 'https://doi.org/10.1109/OJCOMS.2025.3558430',
    focusZh: 'LTE下行信号+数字阵列的无人机被动雷达跟踪',
    focusEn: 'Passive UAV tracking with LTE downlink & digital arrays',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 },
    descZh: "基于 LTE 下行信号与数字阵列的无人机被动雷达跟踪实测数据集，提供距离-多普勒图与 GPS 轨迹，面向被动雷达与 ISAC 研究。",
    descEn: "A measured passive-radar UAV tracking dataset that exploits LTE downlink signals with a digital array, providing range-Doppler maps together with GPS ground truth. Targeted at passive radar and ISAC research where the illuminator is a commercial cellular network."
  },
  {
    id: 'drone-swarm-sounding', name: 'Oryx (Drone Swarm Sounding)', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Julia Beuster, Carsten Andrich, Sebastian Giehl, Marc Miranda, et al.',
    org: 'Technische Universität Ilmenau',
    venue: 'arXiv:2507.12010',
    site: 'https://doi.org/10.71758/refodat.60',
    siteAlt: 'https://ems-tu-ilmenau.github.io/dataset/multi-node-uav-sensing/',
    paper: 'https://arxiv.org/abs/2507.12010',
    focusZh: '无人机群多基地信道探测实测，公开多节点 SISO 链路的复信道频响与位置数据',
    focusEn: 'Multi-static channel sounding with a drone swarm',
    modality: { la: 1, csi: .5, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: .5, weather: 0, acoustic: 0 },
    descZh: "伊尔梅瑙工业大学 Oryx 数据，配套 Drone Swarm Sounding 论文。公开多静态节点间的 SISO 复信道频响和位置记录，支持空空与空地链路分析。按公开数据格式计为部分 CSI。",
    descEn: "TU Ilmenau's Oryx dataset, released alongside the Drone Swarm Sounding paper. It provides SISO complex channel frequency responses and position records among multiple static sounding nodes, supporting air-air and air-ground link analysis. Classified as partial CSI based on the released data format."
  },
  {
    id: 'rfuav', name: 'RFUAV', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Rui Shi, Xiaodong Yu, Shengming Wang, Yijia Zhang, Lu Xu, Peng Pan, Chunlai Ma',
    org: 'Beijing University of Posts and Telecommunications 等',
    venue: 'arXiv:2503.09033',
    site: 'https://github.com/kitoweeknd/RFUAV',
    paper: 'https://arxiv.org/abs/2503.09033',
    focusZh: '37种无人机大规模射频指纹基准（约1.3 TB原始I/Q）',
    focusEn: 'Large-scale RF drone fingerprint benchmark',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "大规模射频无人机检测识别基准，约 1.3 TB 原始 I/Q，覆盖 37 种机型与多档 SNR，并附预处理与评测工具。",
    descEn: "A large-scale RF drone detection and identification benchmark with about 1.3 TB of raw I/Q covering 37 drone models at multiple SNR levels, shipped with preprocessing and evaluation tooling."
  },
  {
    id: 'cagedronerf', name: 'CageDroneRF', year: 2026,
    access: 'open',
    source: 'mixed',
    authors: 'Mohammad Rostami, Atik Faysal, Hongtao Xia, Hadi Kasasbeh, Ziang Gao, Huaxia Wang',
    org: 'Rowan University',
    venue: 'arXiv:2601.03302',
    site: 'https://arxiv.org/abs/2601.03302',
    paper: 'https://arxiv.org/abs/2601.03302',
    focusZh: '射频笼采集+合成增强的无人机检测与识别基准',
    focusEn: 'RF drone detection benchmark with synthetic augmentation',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "由真实采集与系统化合成增强（SNR 控制、干扰注入、频移）构成的射频无人机检测识别基准，覆盖大量当代机型，支持分类、开集识别与检测。",
    descEn: "An RF drone detection and identification benchmark built from real captures plus systematic synthetic augmentation (SNR control, interference injection, frequency shifting), covering a broad set of contemporary models. Supports classification, open-set recognition and detection."
  },
  {
    id: 'skyev', name: 'SkyEV', year: 2026,
    access: 'open',
    source: 'real',
    authors: 'Jakub Mandula, Sebastian Heusinger, Julian Moosmann, Christian Vogt, Michele Magno',
    org: 'ETH Zurich',
    venue: 'arXiv:2607.18747',
    site: 'https://arxiv.org/abs/2607.18747',
    paper: 'https://arxiv.org/abs/2607.18747',
    focusZh: 'RGB-事件相机同步的无人机检测与跟踪数据集',
    focusEn: 'Synchronized RGB-event UAV detection & tracking',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "面向反无人机检测与跟踪的 RGB-事件相机同步数据集，采集未压缩、高同步的双模态数据，覆盖相机自运动、小目标尺度等真实挑战。",
    descEn: "A synchronized RGB and event-camera dataset for counter-UAV detection and tracking, recorded uncompressed and tightly synchronized. Reproduces real challenges such as camera ego-motion and extreme small-target scale."
  },
  {
    id: 'lss-fmcwr', name: 'LSS-FMCWR-1.0', year: 2024,
    access: 'open',
    source: 'real',
    authors: '陈小龙, 袁旺, 杜晓林, 于刚, 何肖阳, 关键, 汪兴海',
    org: '海军航空大学 / 烟台大学 / 济南大学',
    venue: '雷达学报 13(3): 539–553 (2024)',
    site: 'https://radars.ac.cn/article/doi/10.12000/JR23142',
    paper: 'https://radars.ac.cn/article/doi/10.12000/JR23142',
    focusZh: '多波段FMCW雷达低慢小目标探测（6类无人机微动特征）',
    focusEn: 'Multiband FMCW radar low-slow-small target dataset',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 },
    descZh: "基于 Ku 波段与 L 波段 FMCW 雷达采集的 6 类无人机回波数据，面向低慢小目标检测与高分辨微动特征提取，并附局部极大值同步提取变换方法。",
    descEn: "Six classes of UAV radar echoes captured with Ku-band and L-band FMCW radars, aimed at low-slow-small target detection and high-resolution micro-motion feature extraction. Accompanied by a local-maximum synchroextracting transform method."
  },
  {
    id: 'diat-msat', name: 'DIAT-µSAT', year: 2022,
    access: 'register',
    source: 'real',
    authors: 'Harish Chandra Kumawat, Mainak Chakraborty, A. Arockia Bazil Raj, Sunita Vikrant Dhavale',
    org: 'Defence Institute of Advanced Technology (DIAT), India',
    venue: 'IEEE GRSL 19: 6004005 (2022)',
    site: 'https://ieee-dataport.org/documents/diat-msat-micro-doppler-signature-dataset-small-unmanned-aerial-vehicle-suav',
    paper: 'https://doi.org/10.1109/LGRS.2021.3102039',
    focusZh: 'X波段连续波雷达小型无人机微多普勒特征（6类4849幅）',
    focusEn: 'Micro-Doppler signatures of small UAVs',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 },
    descZh: "X 波段连续波雷达采集的 6 类空中小目标微多普勒特征图像数据集（4849 幅），含 RC 飞机、三叶/长叶旋翼、四旋翼、仿生鸟与迷你直升机等。",
    descEn: "A micro-Doppler signature image dataset of small aerial targets recorded with an X-band continuous-wave radar: 4849 images across six classes including RC planes, three-blade and long-blade rotors, quadrotors, a biomimetic bird and a mini helicopter."
  },
  {
    id: 'mathworks-radar-drone', name: 'MathWorks Radar Drone', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Zhongliang Guo, Samiur Rahman, Duncan Robertson',
    org: 'University of St Andrews',
    venue: 'Zenodo (2025)',
    site: 'https://doi.org/10.5281/zenodo.15224887',
    paper: 'https://doi.org/10.5281/zenodo.15224887',
    focusZh: '大规模雷达无人机分类微多普勒训练集（约10.9 TB）',
    focusEn: 'Large-scale radar drone classification dataset',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 },
    descZh: "圣安德鲁斯大学与 MathWorks 发布的雷达无人机分类微多普勒训练集，约 10.9 TB，面向雷达无人机分类。",
    descEn: "A micro-Doppler training set for radar-based drone classification, released by the University of St Andrews with MathWorks. Roughly 10.9 TB of radar returns from multiple drone types, intended for training deep classifiers on micro-Doppler spectrograms."
  },
  {
    id: 'itu-aris-acoustic', name: 'ITU-ARIS Acoustic', year: 2026,
    access: 'open',
    source: 'real',
    authors: 'İhsan Mert Muhacıroğlu, Tayfun Akgül',
    org: 'Istanbul Technical University (ARIS Lab)',
    venue: 'IEEE SIU 2026 / Zenodo',
    site: 'https://zenodo.org/records/22682339',
    paper: 'https://doi.org/10.1109/SIU71813.2026.11636719',
    focusZh: '户外无人机声学探测数据集（无人机/背景两类，5491段）',
    focusEn: 'Outdoor acoustic drone detection dataset',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 1 },
    descZh: "户外无人机声学探测数据集，单次连续采集约 3.12 小时，切分为 5491 段 1 秒音频（无人机 4491 / 背景 1000），并附防泄漏的分组与划分协议。",
    descEn: "An outdoor UAV acoustic detection dataset derived from a single continuous 3.12-hour recording, split into 5491 one-second clips (4491 drone, 1000 background) with a leakage-safe grouping and splitting protocol."
  },
  {
    id: 'dads', name: 'DADS', year: 2024,
    access: 'open',
    source: 'real',
    authors: '社区整理（schiffman / geronimobasso）',
    org: 'Community (Hugging Face)',
    venue: 'Hugging Face Datasets',
    site: 'https://huggingface.co/datasets/geronimobasso/drone-audio-detection-samples',
    siteAlt: 'https://huggingface.co/datasets/schiffman/drone-audio-detection-samples',
    paper: 'https://huggingface.co/datasets/geronimobasso/drone-audio-detection-samples',
    focusZh: '目前规模最大的公开无人机音频库（约18万条）',
    focusEn: 'Largest public drone audio database',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 1 },
    descZh: "目前规模最大的公开无人机音频库（约 18 万条 16 kHz 音频），含「有/无无人机」两类，用于声学无人机检测。",
    descEn: "The largest public drone audio library to date: about 180,000 clips at 16 kHz, labelled as containing or not containing a drone, for acoustic drone detection."
  },
  {
    id: 'uavscenes', name: 'UAVScenes', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Sijie Wang, Siqi Li, Yawei Zhang, Shangshu Yu, Shenghai Yuan, et al., Lihua Xie, Wee Peng Tay',
    org: 'Nanyang Technological University / Shanghai Jiao Tong University 等',
    venue: 'ICCV 2025',
    site: 'https://github.com/sijieaaa/UAVScenes',
    paper: 'https://arxiv.org/abs/2507.22412',
    focusZh: '多模态无人机感知（图像+LiDAR逐帧语义标注，12万+帧）',
    focusEn: 'Multi-modal UAV perception benchmark',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 0, imu: 1, weather: 0, acoustic: 0 },
    descZh: "基于 MARS-LVIG 扩展的大规模多模态无人机数据集，提供逐帧图像与 LiDAR 语义标注及精确 6-DoF 位姿，支持分割、深度估计、定位、场景识别与新视角合成等任务。",
    descEn: "A large multimodal UAV dataset extending MARS-LVIG, with per-frame image and LiDAR semantic labels plus accurate 6-DoF poses. Supports segmentation, depth estimation, localization, scene recognition and novel-view synthesis."
  },
  {
    id: 'drift', name: 'DrIFT', year: 2025,
    access: 'open',
    source: 'mixed',
    authors: 'Fardad Dadboud, Hamid Azad, Varun Mehta, Miodrag Bolic, Iraj Mantegh',
    org: 'University of Ottawa / NRC Canada',
    venue: 'WACV 2025',
    site: 'https://github.com/CARG-uOttawa/DrIFT',
    paper: 'https://openaccess.thecvf.com/content/WACV2025/html/Dadboud_DrIFT_Autonomous_Drone_Dataset_with_Integrated_Real_and_Synthetic_Data_WACV_2025_paper.html',
    focusZh: '域漂移下的视觉无人机检测（14个域，含背景分割图）',
    focusEn: 'Visual drone detection under domain shifts',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 },
    descZh: "面向域漂移下视觉无人机检测的数据集，含 14 个域（视角/真实-合成/季节/恶劣天气），并提供背景分割图以支持按背景评估。",
    descEn: "A visual drone detection dataset for domain-shift research, spanning 14 domains that vary viewpoint, real versus synthetic imagery, season and adverse weather. Provides background segmentation masks so performance can be broken down by background."
  },
  {
    id: 'flyawarev2', name: 'FlyAwareV2', year: 2026,
    access: 'open',
    source: 'mixed',
    authors: 'Francesco Barbato, Matteo Caligiuri, Pietro Zanuttigh',
    org: 'University of Padova',
    venue: 'Signal Processing: Image Communication (2026)',
    site: 'https://medialab.dei.unipd.it/paper_data/FlyAwareV2',
    paper: 'https://doi.org/10.1016/j.image.2026.117483',
    focusZh: '城市场景理解的多模态跨域无人机数据（真实+合成，含天气昼夜；真实样本深度为单目估计）',
    focusEn: 'Multimodal cross-domain UAV urban-scene dataset',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 },
    descZh: "面向城市场景理解的多模态跨域无人机数据集，融合真实与合成影像，提供 RGB/深度/语义标注与天气、昼夜变化。合成样本的深度由 CARLA/UE 渲染引擎的 3D 几何直接导出；真实样本（训练集取自 VisDrone、测试集取自 UAVid）原本无深度标注，改用 **Marigold 单目深度估计**生成，因此真实部分深度为**估计值而非传感器实测**，且统一逐样本归一化到 [0,1] 后绝对尺度已被去除。",
    descEn: "A multimodal cross-domain UAV dataset for urban scene understanding that fuses real and synthetic imagery with RGB, depth and semantic labels under varying weather and day-night conditions. Synthetic depth comes directly from CARLA/UE 3D geometry; real samples (VisDrone for training, UAVid for testing) lack depth, so Marigold monocular estimation is used instead, meaning depth there is estimated rather than sensed and per-sample normalization removes absolute scale."
  },
  {
    id: 'anyvisloc', name: 'AnyVisLoc', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Yibin Ye, Xichao Teng, Shuo Chen, Zhang Li, Leqi Liu, Qifeng Yu, Tao Tan',
    org: 'National University of Defense Technology / Macao Polytechnic University',
    venue: 'arXiv:2503.10692',
    site: 'https://github.com/UAV-AVL/Benchmark',
    paper: 'https://arxiv.org/abs/2503.10692',
    focusZh: '低空多视角无人机绝对视觉定位基准（1.8万图像）',
    focusEn: 'Low-altitude multi-view UAV visual localization benchmark',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "低空多视角条件下的无人机绝对视觉定位基准，含 1.8 万幅多场景多高度图像与 2.5D 参考图，并统一评测主流 AVL 方法。",
    descEn: "An absolute visual localization benchmark for UAVs under low-altitude multi-view conditions: about 18,000 images across multiple scenes and altitudes plus 2.5D reference maps, with a unified evaluation of mainstream AVL methods."
  },
  {
    id: 'lae-uav', name: 'LAE UAV', year: 2025,
    access: 'open',
    source: 'sim',
    authors: 'Zhengru Fang, Zhenghao Liu, Jingjing Wang, Senkang Hu, et al., Yuguang Fang',
    org: 'City University of Hong Kong / Beihang University',
    venue: 'arXiv:2504.18317',
    site: 'https://github.com/fangzr/TOC-Edge-Aerial',
    paper: 'https://arxiv.org/abs/2504.18317',
    focusZh: 'GNSS拒止城市环境下的无人机视觉导航数据集（35.7万帧）',
    focusEn: 'UAV visual navigation in GNSS-denied urban LAE',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: .5, weather: 0, acoustic: 0 },
    descZh: "面向低空经济中 GNSS 拒止城市环境的无人机视觉导航数据集，基于 CARLA 仿真，含 35.7 万帧对齐的 RGB/深度/语义多视角图像与精确位姿。",
    descEn: "A UAV visual navigation dataset for GNSS-denied urban environments, generated in CARLA: 357,000 aligned multi-view RGB, depth and semantic frames with accurate poses."
  },
  {
    id: 'neodrone', name: 'NeoDrone', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'NeoDrone 团队（北京市数据知识产权登记）',
    org: '北京 · 低空智能系统',
    venue: '北京市数据知识产权登记 (2025)',
    site: 'https://github.com/playezio/NeoDrone',
    paper: 'https://webs.bjidex.com/sys-bsc-home/#/bscConsole/intellectualProperty/infoPublicity?action=1',
    focusZh: '无人机近地观测视觉感知（15万+图像，可见光-红外对齐）',
    focusEn: 'Near-earth drone observation vision dataset',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 1, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 },
    descZh: "面向低空无人机视觉感知的近地观测数据集，含 15 万+ 图像、150 万+ 标注实例与 7176 对时空对齐的可见光-红外图像，附 15 项结构化元数据。",
    descEn: "A near-ground observation dataset for low-altitude UAV visual perception: more than 150,000 images, over 1.5 million annotated instances and 7176 spatio-temporally aligned visible-infrared pairs, with 15 structured metadata fields per record."
  },
  {
    id: 'uav-lowalt-mot', name: 'UAV-LowAlt-MOT', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Xin Wang',
    org: 'Xidian University',
    venue: 'Science Data Bank / IEEE DataPort (2025)',
    site: 'https://www.scidb.cn/en/detail?dataSetId=239a78b317464fb9943387df112a0345',
    paper: 'https://doi.org/10.21227/2gt9-aa39',
    focusZh: '低空无人机对地多目标检测与跟踪（行人/车辆）',
    focusEn: 'Low-altitude UAV multi-target detection & tracking',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "低空无人机对地多目标检测与跟踪基准，含行人、车辆等地物目标的带框与身份标注图像与视频序列，突出小目标、遮挡与尺度变化等挑战。",
    descEn: "A low-altitude UAV benchmark for multi-object detection and tracking of ground targets such as pedestrians and vehicles, with bounding boxes and identity labels. Emphasizes small targets, occlusion and scale variation."
  },
  {
    id: 'visdrone', name: 'VisDrone', year: 2018,
    access: 'open',
    source: 'real',
    authors: 'AISKYEYE team（Zhu, Wen, Bian, Ling, Liang, et al.）',
    org: 'Tianjin University',
    venue: 'ECCV Workshops 2018 / TPAMI 2021',
    site: 'https://github.com/VisDrone/VisDrone-Dataset',
    paper: 'https://arxiv.org/abs/2001.07420',
    focusZh: '无人机视角目标检测与跟踪基准（14城市，260万+框）',
    focusEn: 'Drone-view object detection & tracking benchmark',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 },
    descZh: "天津大学 AISKYEYE 团队构建的无人机视角目标检测与跟踪基准，含 288 段视频（26 万+ 帧）与 1 万+ 静态图像，覆盖 14 个城市。",
    descEn: "The Tianjin University AISKYEYE benchmark for UAV-view object detection and tracking: 288 video sequences (over 260,000 frames) and more than 10,000 static images collected across 14 cities."
  },
  {
    id: 'dota', name: 'DOTA', year: 2018,
    access: 'open',
    source: 'real',
    authors: 'Gui-Song Xia, Xiang Bai, Jian Ding, Zhen Zhu, Serge Belongie, et al.',
    org: 'Wuhan University',
    venue: 'CVPR 2018',
    site: 'https://captain-whu.github.io/DOTA/dataset.html',
    paper: 'https://arxiv.org/abs/1711.10398',
    focusZh: '航空影像目标检测（15/16类，18.8万实例）',
    focusEn: 'Aerial image object detection',
    modality: { la: .5, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "武汉大学发布的航空影像目标检测数据集，含 15/16 类、约 18.8 万实例，图像分辨率最高达 2 万像素级。",
    descEn: "Wuhan University's aerial image object detection dataset with 15 (later 16) categories and about 188,000 instances, in images up to 20,000 pixels on the long side. Oriented bounding boxes make it a standard upstream reference for aerial detection."
  },
  {
    id: 'uavdt', name: 'UAVDT', year: 2018,
    access: 'open',
    source: 'real',
    authors: 'Dawei Du, Yuankai Qi, Hongyang Yu, Yifan Yang, et al.',
    org: 'Chinese Academy of Sciences 等',
    venue: 'ECCV 2018 / IJCV 2019',
    site: 'https://sites.google.com/site/daviddo0323/projects/uavdt',
    siteAlt: 'https://sites.google.com/view/grli-uavdt/',
    paper: 'https://arxiv.org/abs/1804.00518',
    focusZh: '无人机车辆检测与跟踪基准（8万帧，含14类属性）',
    focusEn: 'UAV vehicle detection & tracking benchmark',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 },
    descZh: "无人机车辆检测与跟踪基准，含约 8 万帧带框与 14 类属性（天气、飞行高度、视角、遮挡等）标注。",
    descEn: "A UAV vehicle detection and tracking benchmark with roughly 80,000 annotated frames and 14 attribute types covering weather, flight altitude, viewpoint and occlusion."
  },
  {
    id: 'uav123', name: 'UAV123', year: 2016,
    access: 'open',
    source: 'real',
    authors: 'Matthias Mueller, Neil Smith, Bernard Ghanem',
    org: 'King Abdullah University of Science and Technology (KAUST)',
    venue: 'ECCV 2016',
    site: 'https://cemse.kaust.edu.sa/ivul/datasets',
    paper: 'https://doi.org/10.1007/978-3-319-46448-0_27',
    focusZh: '低空无人机视角单目标跟踪基准（123段，11万帧）',
    focusEn: 'Low-altitude UAV single-object tracking benchmark',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "低空无人机视角单目标跟踪基准，含 123 段视频、11 万+ 帧，全部标注直立边界框，并含长期跟踪子集 UAV20L。",
    descEn: "A low-altitude single-object tracking benchmark with 123 sequences and more than 110,000 frames, all annotated with upright bounding boxes, plus the long-term UAV20L subset."
  },
  {
    id: 'mamimo-uav', name: 'MaMIMO-UAV 3D CSI', year: 2023,
    access: 'open',
    source: 'real',
    authors: 'Achiel Colpaert, Cel Thys, Zhuangzhuang Cui, Sofie Pollin',
    org: 'KU Leuven (ESAT)',
    venue: 'IEEE TVT 73(5): 6061–6072 (2024) · KU Leuven RDR',
    site: 'https://doi.org/10.48804/0IMQDF',
    paper: 'https://doi.org/10.1109/TVT.2023.3340447',
    focusZh: '鲁汶大学：无人机与8×8 Massive MIMO基站的3D非平稳信道CSI（校园飞行轨迹）',
    focusEn: '3D non-stationary UAV–MaMIMO channel CSI',
    modality: { la: 1, csi: 1, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 1, weather: 0, acoustic: 0 },
    descZh: "KU Leuven 在校园内采集的无人机–Massive MIMO 基站三维非平稳信道数据集：ESAT 楼前停车场架设 8×8 矩形贴片阵列基站指向天空，无人机沿多条轨迹飞行并发射导频序列，据此估计空地信道，采样点带 GPS 位置标注；约 15.8 GB，CC-BY-NC-4.0。",
    descEn: "A three-dimensional non-stationary drone-to-massive-MIMO channel dataset collected on the KU Leuven campus: an 8x8 rectangular patch array mounted in a parking lot and steered skyward, with a UAV flying several trajectories while transmitting pilots so the air-ground channel can be estimated. Sampling points carry GPS labels; about 15.8 GB under CC BY-NC 4.0."
  },
  {
    id: 'mamimo-a2g-uav', name: '3D MaMIMO A2G UAV CSI', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Achiel Colpaert, Sofie Pollin',
    org: 'KU Leuven (ESAT)',
    venue: 'KU Leuven RDR (2025)',
    site: 'https://doi.org/10.48804/MTNAEG',
    paper: 'https://doi.org/10.48804/MTNAEG',
    focusZh: '鲁汶大学：GPS标注的无人机–64天线Massive MIMO空对地信道CSI（校园环境，46 GB）',
    focusEn: 'GPS-labeled UAV–MaMIMO air-to-ground CSI',
    modality: { la: 1, csi: 1, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 1, weather: 0, acoustic: 0 },
    descZh: "KU Leuven 校园环境下的无人机–64 天线 Massive MIMO 基站空对地 CSI 数据集：基站位于距 25 m 高楼 17 m、距 25 m 树线 12 m 的停车场，无人机按预设航迹机控飞行，提供**带 GPS 位置标注的信道状态信息**；约 46.3 GB，CC-BY-NC-4.0。",
    descEn: "An air-to-ground CSI dataset for a 64-antenna massive MIMO base station in a campus parking lot, sited 17 m from a 25 m building and 12 m from a 25 m tree line. The UAV flies pre-programmed waypoints, and the released CSI carries GPS position labels; about 46.3 GB under CC BY-NC 4.0."
  },
  {
    id: 'ku-leuven-drone-rf', name: 'KU Leuven Drone RF', year: 2024,
    access: 'open',
    source: 'real',
    authors: 'Sanjoy Basak, Sofie Pollin, Bart Scheers',
    org: 'KU Leuven (ESAT) / Royal Military Academy',
    venue: 'KU Leuven RDR (2024) · ICACT 2023',
    site: 'https://doi.org/10.48804/HZRVNZ',
    paper: 'https://doi.org/10.23919/ICACT56868.2023.10079363',
    focusZh: '鲁汶大学：半电波暗室采集的无人机射频I/Q（100 MSps @2.44 GHz，43.5 GB）',
    focusEn: 'Drone RF I/Q in a semi-anechoic chamber',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "KU Leuven 与比利时皇家军事学院（RMA）联合发布的无人机射频数据集：在 RMA 半电波暗室内用 USRP X310 采集，100 MSps 采样、中心频率 2.44 GHz、全向天线，无人机与遥控器距接收天线 7 m，以 .mat 存储原始 I/Q；约 43.5 GB，CC-BY-NC-4.0。",
    descEn: "A drone RF dataset from KU Leuven and the Belgian Royal Military Academy, captured in a semi-anechoic chamber with a USRP X310 at 100 MSps, 2.44 GHz centre frequency and an omnidirectional antenna, with drone and controller 7 m from the receive antenna. Raw I/Q is stored as .mat; about 43.5 GB under CC BY-NC 4.0."
  },
  {
    id: 'lund-drone-audio', name: 'Lund UAV Audio', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Erik Tegler, Max Modig, Per Skarin, Kalle Åström, Magnus Oskarsson, Gabrielle Flood',
    org: 'Lund University / SAAB',
    venue: 'CVPRW 2025 (Anti-UAV)',
    site: 'https://vision.maths.lth.se/drone_sound/',
    paper: 'https://openaccess.thecvf.com/content/CVPR2025W/Anti-UAV/html/Tegler_Detection_and_Localization_of_Drones_and_UAVs_Using_Sound_and_CVPRW_2025_paper.html',
    focusZh: '隆德大学：无人机自噪声的12元麦克风阵列测向定位（真实飞行+真值位置，17.7 GiB）',
    focusEn: 'Mic-array DOA drone localization from sound',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: .5, weather: 0, acoustic: 1 },
    descZh: "隆德大学（数学科学中心）与 SAAB 联合发布的无人机声学探测数据集：12 元麦克风阵列配合 9 台固定相机（合计 280° 视场）与 PTZ 云台，在 Ljungbyhed 试验场用多种旋翼与固定翼无人机开展真实飞行实验，用到达方向（DOA）方法仅凭无人机自噪声即可定位至数百米，数据集含真实录音与无人机**真值位置**；约 17.7 GiB。",
    descEn: "A drone acoustic detection dataset from Lund University and SAAB: a 12-element microphone array with nine fixed cameras (280 degrees total field of view) and a PTZ unit, deployed at the Ljungbyhed test range with several rotary- and fixed-wing drones. Direction-of-arrival processing localizes drones from their own noise out to several hundred metres, and recordings come with true positions. About 17.7 GiB."
  },
  {
    id: 'luvira', name: 'LuViRA', year: 2024,
    access: 'open',
    source: 'real',
    authors: 'Ilayda Yaman, Guoda Tian, Martin Larsson, Patrik Persson, et al. (Lund University)',
    org: 'Lund University',
    venue: 'ICRA 2024 · arXiv:2302.05309',
    site: 'https://github.com/ilaydayaman/LuViRA_Dataset',
    paper: 'https://arxiv.org/abs/2302.05309',
    focusZh: '隆德大学：视觉+5G Massive MIMO射频+音频三模态同步室内定位（非低空）',
    focusEn: 'Synchronized vision/radio/audio indoor localization',
    modality: { la: 0, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 1, weather: 0, acoustic: 1 },
    descZh: "隆德大学「视觉-射频-音频」（LuViRA）三模态同步室内定位数据集：RGB-D 相机、5G Massive MIMO（LuMaMi）射频系统与分布式麦克风阵列在同一环境下同步采集（真值 100 Hz、相机 30/15 fps、无线 100 Hz、音频 96 kHz），含 89 条轨迹并附各模态基线。**场景为室内，不含低空/UAV**，故归入通用/上游基准。",
    descEn: "Lund University's vision-radio-audio (LuViRA) synchronized indoor localization dataset: RGB-D cameras, a 5G massive MIMO (LuMaMi) radio system and distributed microphone arrays recorded in the same environment (ground truth at 100 Hz, cameras at 30/15 fps, radio at 100 Hz, audio at 96 kHz), with 89 trajectories and per-modality baselines. Indoor only, with no low-altitude content, hence filed as a general benchmark."
  },

  /* ---------- 表1「彩色标签总览」补录（2026-10-08） ---------- */

  {
    id: 'drone-rf-mendeley', name: 'DroneRF (Mendeley)', year: 2019,
    access: 'open',
    source: 'real',
    authors: "Mohammad F. Al-Sa'd, Mhd Saria Allahham, Amr Mohamed, Abdulla Al-Ali, Tamer Khattab, Aiman Erbad",
    org: 'Qatar University',
    venue: 'Mendeley Data v1 (2019) · Future Generation Computer Systems 98: 259–269 (2019)',
    site: 'https://data.mendeley.com/datasets/f4c2b4n755/1',
    siteAlt: 'https://al-sad.github.io/DroneRF/',
    paper: 'https://doi.org/10.1016/j.future.2019.05.007',
    focusZh: '三型无人机多飞行模式的射频采样库（CSV）（227段、约40 GB，含背景射频）',
    focusEn: 'RF samples (CSV) of three drones in multiple flight modes',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "卡塔尔大学发布的射频无人机数据库：用两台 NI-USRP2943R 接收机（2.4 GHz 频段，各 40 MHz 瞬时带宽）拦截无人机与遥控器之间的通信链路，覆盖 3 型无人机在关机/开机连接/悬停/飞行/录像等飞行模式下的射频采样，共 227 个片段（454 个 csv 文件，约 40 GB），并含无无人机的背景射频记录。",
    descEn: "A drone RF database from Qatar University: two NI-USRP2943R receivers at 2.4 GHz with 40 MHz instantaneous bandwidth each intercept the link between drone and controller for three drone models across power-off, connected, hovering, flying and recording modes. 227 segments (454 CSV files, about 40 GB) of RF samples plus drone-free background recordings."
  },
  {
    id: 'drone-detection-dregon', name: 'Drone-detection (DREGON)', year: 2021,
    access: 'open',
    source: 'real',
    authors: 'Fredrik Svanström, Fernando Alonso-Fernandez, Cristofer Englund',
    org: 'Halmstad University (CAISR) / Swedish Armed Forces',
    venue: 'Data in Brief 39: 107521 (2021)',
    site: 'https://github.com/DroneDetectionThesis/Drone-detection-dataset',
    paper: 'https://doi.org/10.1016/j.dib.2021.107521',
    focusZh: '红外+可见光视频与音频的多传感器无人机探测（650段视频、20.3万标注帧，按DRI距离分档）',
    focusEn: 'Multi-sensor drone detection with IR, visible and audio',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 1, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 1 },
    descZh: "瑞典哈尔姆斯塔德大学与瑞典国防军联合构建的多传感器无人机探测数据集（DREGON）：在 3 座瑞典机场以云台自动跟踪采集，含 365 段红外视频、285 段可见光视频（合计 203328 个标注帧）与 90 段音频（无人机/直升机/背景），目标类别含 3 型无人机及鸟类、飞机、直升机等易混目标，并按行业 DRI（检测-识别-辨认）准则随传感器-目标距离分档（近/中/远，最大 200 m）。",
    descEn: "A multi-sensor drone detection dataset (DREGON) from Halmstad University and the Swedish Armed Forces, collected at three Swedish airports with automated PTZ tracking: 365 infrared and 285 visible-light sequences (203,328 annotated frames in total) plus 90 audio clips of drones, helicopters and background. Classes include three drone types and confusable targets such as birds and aircraft, binned by sensor-to-target distance following DRI criteria (near, mid, far, up to 200 m)."
  },
  {
    id: 'anti-uav300', name: 'Anti-UAV300', year: 2021,
    access: 'open',
    source: 'real',
    authors: 'Nan Jiang, Kuiran Wang, Xiaoke Peng, Xuehui Yu, Qiang Wang, Junliang Xing, Guorong Li, Jian Zhao, Guodong Guo, Zhenjun Han',
    org: '中国科学院大学 / 北方电子设备研究所',
    venue: 'arXiv:2101.08466 · CVPR 2021 Workshop',
    site: 'https://github.com/ucas-vg/Anti-UAV',
    siteAlt: 'https://anti-uav.github.io/',
    paper: 'https://arxiv.org/abs/2101.08466',
    focusZh: 'RGB-红外成对视频的反无人机跟踪基准（318对视频、58万+框，昼夜两类光照）',
    focusEn: 'RGB-T multi-modal benchmark for UAV tracking',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 1, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 },
    descZh: "中国科学院大学与北方电子设备研究所发布的反无人机多模态跟踪基准：318 对高清 RGB 与热红外视频（合计 58 万余个人工标注包围框），6 种消费级机型、昼夜两种光照与建筑/云/树木等多样背景，两模态为非对齐采集；文中给出 DFSC 训练策略与 40 余种跟踪器的基准评测，并附可见性、遮挡、快速运动、尺度变化等属性标签。",
    descEn: "A multimodal anti-UAV tracking benchmark from UCAS and the North Institute of Electronic Equipment: 318 pairs of high-definition RGB and thermal infrared videos with more than 580,000 manually annotated boxes, covering six consumer drone models, day and night illumination and diverse backgrounds. The two modalities are not spatially aligned. Ships the DFSC training strategy and benchmarks of more than 40 trackers, with attribute labels for visibility, occlusion, fast motion and scale change."
  },

  {
    id: 'mmaud', name: 'MMAUD', year: 2024,
    access: 'open',
    source: 'real',
    authors: 'Shenghai Yuan, Yizhuo Yang, Thien Hoang Nguyen, Thien-Minh Nguyen, Jianfei Yang, Fen Liu, Jianping Li, Han Wang, Lihua Xie',
    org: 'Nanyang Technological University (NTU)',
    venue: 'ICRA 2024',
    site: 'https://github.com/ntu-aris/MMAUD',
    siteAlt: 'https://ntu-aris.github.io/MMAUD/',
    paper: 'https://doi.org/10.1109/ICRA57147.2024.10610957',
    focusZh: '南洋理工大学：俯视视角的反无人机多模态探测/分类/跟踪与轨迹估计基准（双3D LiDAR、双鱼眼相机、毫米波雷达与四路麦克风阵列，Leica全站仪真值）',
    focusEn: 'Multi-modal anti-UAV detection, classification and trajectory estimation',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: .5, weather: 0, acoustic: 1 },
    descZh: "南洋理工大学 ARIS 实验室发布的反无人机多模态基准：在屋顶与停车场上以**俯视视角**采集 DJI Mavic2/3、Phantom4、Avata、M300 等 5 型消费级无人机的双 3D LiDAR（Conic + Peripheral）、双时间同步鱼眼相机、毫米波雷达与四路麦克风阵列数据，并以 **Leica 全站仪**生成高精度三维真值；面向无人机检测、机型分类、跟踪与轨迹估计，刻意保留重型机械等强背景噪声，V1 飞行高度约 30 m 以内，V2/V3（停车场场景）最高达 100 m。",
    descEn: "NTU's ARIS multimodal anti-UAV benchmark, captured top-down from rooftops and parking lots for five consumer drones (Mavic 2/3, Phantom 4, Avata, M300). Sensors include dual 3D LiDAR (conic plus peripheral), dual time-synchronized fisheye cameras, mmWave radar and a four-channel microphone array, with high-precision 3D ground truth from a Leica total station. Targets detection, model classification, tracking and trajectory estimation; flight altitude is within about 30 m in V1 and up to 100 m in V2/V3."
  },

  /* ---------- 2026-11 新一轮补录（按 2026-11 检索结果核实） ---------- */

  {
    id: 'isac-uav-ilmenau', name: 'ISAC UAV (TU Ilmenau)', year: 2023,
    access: 'request',
    source: 'real',
    authors: 'Julia Beuster, Carsten Andrich, Michael Döbereiner, Steffen Schieler, Maximilian Engelhardt, Christian Schneider, Reiner Thomä',
    org: 'Technische Universität Ilmenau (EMS Group)',
    venue: 'EuCAP 2023',
    site: 'https://ems-tu-ilmenau.github.io/isac-uav-dataset-docs/',
    siteAlt: 'https://github.com/EMS-TU-Ilmenau/isac-uav-dataset',
    paper: 'https://doi.org/10.23919/EuCAP57121.2023.10133118',
    focusZh: '伊尔梅瑙工业大学：3.75 GHz 三接收机 ISAC 实测库（60场景、约200 GB，含信道传递函数 H(f,t)、目标时延/多普勒估计与机载 RTK 真值，15/30 m 两档飞行高度，需邮件申请解密口令）',
    focusEn: 'Multistatic ISAC channel measurements of UAV at 3.75 GHz',
    modality: { la: 1, csi: 1, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 1, weather: 0, acoustic: 0 },
    descZh: "伊尔梅瑙工业大学 EMS 组的 3.75 GHz 多基地 ISAC 实测库：以 3 部接收机同时采集无人机回波与发射信号，共 60 个场景（360 个文件、约 200 GB，完整版约 4 TB），每个场景含信道传递函数 H(f,t)、目标时延与多普勒估计、收发天线位置，以及机载 RTK 提供的真值位置/速度/加速度；航线按 15 m 与 30 m 两档飞行高度、5 m/s 与 11 m/s 两档最大速度组合，便于分离多径遮挡与时延-多普勒估计性能。数据需邮件申请解密口令，CC BY-NC-ND 4.0。",
    descEn: "A 3.75 GHz multistatic ISAC measurement library from TU Ilmenau's EMS group: three receivers capture UAV echoes and the transmit signal simultaneously across 60 scenarios (360 files, about 200 GB; the complete set is about 4 TB). Each scenario provides the channel transfer function H(f,t), target delay and Doppler estimates, antenna positions, and RTK-derived position, velocity and acceleration. Trajectories combine 15 m and 30 m altitudes with 5 m/s and 11 m/s maximum speeds; decryption requires an email request, under CC BY-NC-ND 4.0."
  },

  {
    id: 'multifly', name: 'MultiFly', year: 2026,
    access: 'pending',
    source: 'real',
    authors: 'Markus Gross, Andreas Greiner, Taehyoung Kim, Sivasubiramaniam Subbiah, Tomaž Cotič, Conrad Christoph, Oussema Dhaouadi, Simon Zieher, Surya Kumar, Gordon Elger, Henri Meeß, Olaf Wysocki, Paul Spannaus, Daniel Cremers',
    org: 'Fraunhofer IVI / TU Munich / University of Cambridge / TH Ingolstadt',
    venue: 'arXiv:2610.10359 (2026)',
    site: 'https://markus-42.github.io/multifly/',
    siteAlt: 'https://github.com/Markus-42/MultiFly',
    paper: 'https://arxiv.org/abs/2610.10359',
    focusZh: '弗劳恩霍夫IVI：真实低空多模态语义感知基准（RGB/热成像（红外）/LiDAR/雷达四模态逐帧一致标注，4个郊区场景×2档高度×15类语义，17272同步样本，含GNSS-RTK/IMU；截至2026-11数据与代码仍标为即将发布）',
    focusEn: 'Real-world multimodal aerial semantic perception',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 1, lidar: 1, radar: 1, imu: 1, weather: 0, acoustic: 0 },
    descZh: "弗劳恩霍夫 IVI 联合慕尼黑工业大学、剑桥大学与因戈尔施塔特应用技术大学发布的真实低空多模态感知数据集：仅人工标注 115 帧 RGB，即借助共享三维几何把标签迁移到其余 RGB、热成像图像以及 8.4 亿个 LiDAR 点与 340 万个雷达点，得到 4 个郊区场景、2 档飞行高度、15 类语义的 17,272 个同步样本，跨模态标注与留出人工标注平均一致率 89.93%；另附标定与 GNSS-RTK/IMU 数据。**截至 2026-11 数据与代码仍标注为即将发布**，仓库目前仅有项目页与示意图。",
    descEn: "A real low-altitude multimodal perception dataset from Fraunhofer IVI with TU Munich, Cambridge and TH Ingolstadt. Only 115 RGB frames are hand-annotated; shared 3D geometry propagates those labels to the remaining RGB and thermal images and to 840 million LiDAR and 3.4 million radar points, yielding 17,272 synchronized samples over four suburban scenes, two flight altitudes and 15 classes, with 89.93 percent mean agreement between propagated and held-out manual labels. Calibration and GNSS-RTK/IMU data are included; as of November 2026 data and code are still marked as forthcoming."
  },

  {
    id: 'a2a-uav', name: 'A2A-UAV', year: 2026,
    access: 'preview',
    source: 'real',
    authors: 'Hongtao Liang, Yiyao Wan, Kezhi Zhu, Jiayi Zhang, Zequn Jiang, Ziyu Zhou, Jiahuan Ji, Fuhui Zhou, Qihui Wu',
    org: 'Nanjing University of Aeronautics and Astronautics (NUAA) / HKUST',
    venue: 'arXiv:2611.21311 (2026)',
    site: 'https://github.com/lht-research/A2A-UAV',
    paper: 'https://arxiv.org/abs/2611.21311',
    focusZh: '南京航空航天大学：空对空反无人机多模态探测与机型识别基准（机载RGB-热成像（红外）云台+全景相机+频谱仪+毫米波雷达，13机型15类、昼夜两档、105294同步样本与209539框；200样本预览集已公开，完整集待接收）',
    focusEn: 'Air-to-air multimodal UAV detection and identification',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 1, lidar: 0, radar: 1, imu: 0, weather: .5, acoustic: 0 },
    descZh: "南京航空航天大学联合香港科技大学发布的**空对空**反无人机多模态数据集：以无人机挂载 RGB-热成像云台、全景相机、频谱仪与毫米波雷达，在 3 个室外场地对 13 款商用机型的 15 架目标无人机昼夜采集，共 105,294 个时间对齐样本（210,588 幅 RGB/全景图像、209,539 个人工校核框），并给出按采集组分隔的训练/验证/测试划分。热成像与频谱图均为处理后显示产品，不含标定温度/功率；雷达点云无逐点目标身份。200 样本预览子集已公开，完整数据待论文接收后发布。",
    descEn: "An air-to-air counter-UAV multimodal dataset from NUAA and HKUST: a UAV carries an RGB-thermal gimbal, panoramic camera, spectrum analyser and mmWave radar, and records 15 target drones of 13 commercial models across three outdoor sites by day and night. Totals 105,294 time-aligned samples (210,588 RGB and panoramic images, 209,539 manually verified boxes) with collection-group-separated train, validation and test splits. Thermal and spectrum images are processed display products without calibrated temperature or power, and radar point clouds carry no per-point identity. A 200-sample preview subset is public; the full set awaits paper acceptance."
  },

  {
    id: 'drone-acoustic-16ch', name: '16-Ch UAV Acoustic', year: 2026,
    access: 'open',
    source: 'real',
    authors: 'Huilong Wang, Peng Chen, Zhimin Chen, Yuye Liu',
    org: 'Southeast University / Shanghai Dianji University',
    venue: 'Zenodo (2026)',
    site: 'https://doi.org/10.5281/zenodo.23613504',
    focusZh: '东南大学：16通道平面十字麦克风阵列的无人机被动声学监测数据集（DJI Flip 悬停200段、背景28段、非无人机对照45段，273条记录/4368个WAV/7.22小时，覆盖四方位、5–30 m高度与5–70 m距离）',
    focusEn: '16-channel passive acoustic monitoring of small UAVs',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 1 },
    descZh: "东南大学发布的 16 通道平面十字麦克风阵列无人机被动声学监测数据集：以 SMD-CR16 阵列采集 200 段 DJI Flip 悬停、28 段现场背景与 45 段非无人机声音对照，合计 273 条记录、4,368 个 48 kHz/16 bit WAV 文件、7.221 小时；无人机子集覆盖 4 个方位、5–30 m 的 4 档高度与 5–70 m 的 6 档水平距离，含安静的户外与临路城市两类环境，并附麦克风坐标、记录级 JSON 元数据、数据划分与可复现的检测/方位分类基线（检测平衡准确率 0.917、四类方位分类 macro-F1 0.910）。",
    descEn: "A 16-channel planar cross microphone array dataset for passive UAV acoustic monitoring from Southeast University: 200 hovering DJI Flip recordings, 28 field-background and 45 non-drone control recordings, giving 273 records, 4368 WAV files at 48 kHz/16 bit and 7.221 hours in total. The drone subset spans four bearings, four altitudes from 5 to 30 m and six horizontal distances from 5 to 70 m in both quiet outdoor and roadside urban settings, with microphone coordinates, record-level JSON metadata, data splits and reproducible detection and bearing baselines (balanced accuracy 0.917, four-class bearing macro-F1 0.910)."
  },

  {
    id: 'uav-flow', name: 'UAV-Flow', year: 2026,
    access: 'open',
    source: 'mixed',
    authors: 'Donglin Yang, Xiangyu Wang, Yantong Zhong, Wenhao Zheng, Zihan Ding, Yue Liao, Hongsheng Li, Ke Xu, Si Liu',
    org: 'Beihang University / National University of Singapore / CUHK MMLab',
    venue: 'arXiv:2611.17163 (2026)',
    site: 'https://prince687028.github.io/UAV-Flow/',
    siteAlt: 'https://github.com/buaa-colalab/UAV-Flow',
    paper: 'https://arxiv.org/abs/2611.17163',
    focusZh: '北京航空航天大学：语言引导短程无人机机动的视觉-语言-动作基准（30692条真实专家轨迹+10109条仿真轨迹，覆盖8类动作与100余小时第一视角视频，同步自然语言指令、6-DoF状态与RTK定位；数据托管于 Hugging Face）',
    focusEn: 'Language-guided UAV flight benchmark',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 1, weather: 0, acoustic: 0 },
    descZh: "北京航空航天大学联合新加坡国立大学与香港中文大学 MMLab 发布的语言引导无人机飞行基准（Flow / Flying-on-a-Word 任务）：含 30,692 条由持证飞行员在 3 座校园（约 5.02 km²）遥控采集的真实轨迹与 10,109 条 UAV-Flow-Sim 仿真轨迹，覆盖平移、旋转、悬停、后退、环绕、靠近、穿过、降落 8 类动作、100 余小时第一视角视频；每条样本对齐自然语言指令、机载 FPV 图像、6-DoF 位姿与 RTK 定位及连续动作，并提供闭环仿真评测协议。真值采集平台为 DJI Mavic 3T RTK。",
    descEn: "A language-guided UAV flight benchmark (Flow, also called Flying-on-a-Word) from Beihang, NUS and CUHK MMLab: 30,692 real trajectories flown by licensed pilots at three campuses (about 5.02 square kilometres) plus 10,109 simulated UAV-Flow-Sim trajectories. Covers eight action types (translate, rotate, hover, retreat, orbit, approach, pass through, land) over more than 100 hours of first-person video, with each sample aligning a natural-language instruction, FPV image, 6-DoF pose, RTK fix and continuous action. A closed-loop simulation protocol is provided; ground truth was captured with a DJI Mavic 3T RTK."
  },

  {
    id: 'u6g-wise', name: 'U6G-WISE', year: 2026,
    access: 'open',
    source: 'real',
    authors: 'Yijia Feng, Hanzhong Zhang, Tao Tao, Ting Zhou, Yang Wang, Dong Li, Yunbo Hu, Zhenghang Zhu, Mingrui Zhu, Shuang Chen, Zhi Wang, Guangxing Li, Jingxin Liu, Liyu Cai',
    org: 'Shanghai Academy of Networked Intelligence / Shanghai University / Transcom Technologies',
    venue: 'Science Data Bank V1 (2026)',
    site: 'https://doi.org/10.57760/sciencedb.01a31',
    siteAlt: 'https://www.scidb.cn/en/detail?dataSetId=b234b4646bf34e95bf401365bd2b1bf0',
    focusZh: '上海智联信息技术研究院与上海大学：上6GHz（6425–7125 MHz）实测多模态信道测量数据集（44000+样本、室内20余类场景，同步无线信道测量、图像与LiDAR点云）',
    focusEn: 'Measured U6G multimodal channel dataset (44k+ samples, 20+ indoor scenes)',
    modality: { la: 0, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "上海智联信息技术研究院与上海大学联合发布的上6GHz频段实测多模态数据集（U6G-WISE：Wireless, Imaging, and Spatial Sensing of Environments）：44000+ 样本、20 余类室内场景与无线配置，同步无线信道测量、场景图像与 LiDAR 点云，面向 6G 无线 AI 从仿真走向实测、从单模态走向多模态的环境-信道联合建模。V1 于 2026-11-23 上线（CC BY 4.0），官方表示将持续扩充。**场景为室内，不含低空/UAV**，故归入通用/上游基准。",
    descEn: "A measured upper-6 GHz multimodal dataset (U6G-WISE, for Wireless, Imaging and Spatial Sensing of Environments) from the Shanghai Academy of Networked Intelligence and Shanghai University: more than 44,000 samples over 20-plus indoor scene and radio configurations, synchronizing wireless channel measurements, scene images and LiDAR point clouds. Aims at environment-channel joint modelling as 6G wireless AI moves from simulation to measurement. V1 was released on 23 November 2026 under CC BY 4.0 and is still growing; indoor only, with no low-altitude content."
  },

  {
    id: 'tsms-drone', name: 'TSMS-Drone', year: 2026,
    access: 'open',
    source: 'real',
    authors: 'Seung-Kyu Han, Young-Ho Jung',
    org: 'Korea Aerospace University',
    venue: 'Scientific Data 13:407 (2026)',
    site: 'https://doi.org/10.25452/figshare.plus.30027313',
    paper: 'https://doi.org/10.1038/s41597-026-06802-6',
    focusZh: '韩国航空大学：时间同步多传感器无人机数据集（24 GHz FMCW雷达、2.495 GHz CW雷达与2.4 GHz射频接收机三者同步采集，DJI Inspire 2 / Mavic 2 Pro / Phantom 4 Pro / Matrice 30 及角反射器参照，2–30 m共15个距离点、每条件500次重复；输出原始I/Q、距离-多普勒图与PSD）',
    focusEn: 'Time-synchronized FMCW radar / CW radar / RF receiver drone dataset',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 },
    descZh: "韩国航空大学（Korea Aerospace University）发布的时间同步多传感器无人机数据集：将 24 GHz FMCW 雷达（Analog Devices Eval-TinyRad）、2.495 GHz CW 雷达与 2.4 GHz 射频接收机（均为 ADALM-Pluto SDR 平台）物理共址安装，由单一 MATLAB 主循环控制三路并行采集，靠结构化文件名 `Model_Distance_Index.mat` 保证跨传感器对齐，未使用 GPS/PPS 硬件触发。目标含 DJI Inspire 2、Mavic 2 Pro、Phantom 4 Pro、Matrice 30 四款机型与一个四面角反射器参照物，悬停高度 1.5 m，距离 2–30 m 每 2 m 一档共 15 个距离点，每个条件重复 500 次（分 5 个 100 次子集交替采集机型以防过拟合）。FMCW 侧输出预处理后的距离-多普勒图（161×4096）并附少量原始 ADC 样本与重建代码，CW 与 RF 侧保留原始复 I/Q（分别为 16,384 与 262,144 样本）。数据约 2026-03 发布于 Figshare（CC BY 4.0），附 MATLAB 加载/预处理/融合与 GoogLeNet 分类基线代码。**与 DroneRF 系列、LSS-FMCWR 的关键区别在于跨传感器的时间同步采集**，可直接用于雷达-射频融合检测。",
    descEn: "A time-synchronized multi-sensor drone dataset from Korea Aerospace University that co-locates a 24 GHz FMCW radar (Analog Devices Eval-TinyRad), a 2.495 GHz CW radar and a 2.4 GHz RF receiver, all on ADALM-Pluto SDR platforms. A single MATLAB main loop drives the three acquisitions in parallel, and alignment relies on structured filenames (Model_Distance_Index.mat) rather than GPS or PPS triggering. Targets are four DJI models plus a four-sided corner reflector, hovering at 1.5 m over 15 standoff distances from 2 to 30 m in 2 m steps, with 500 repetitions per condition split into five interleaved 100-run subsets. FMCW output is a preprocessed 161x4096 range-Doppler map plus a few raw ADC samples and reconstruction code; the CW and RF sides keep complex I/Q (16,384 and 262,144 samples). Released in March 2026 on Figshare under CC BY 4.0 with MATLAB loading, preprocessing, fusion and a GoogLeNet baseline. Its distinguishing feature against the DroneRF series and LSS-FMCWR is cross-sensor time synchronization, which makes it directly usable for radar-RF fusion detection."
  },

  {
    id: 'a2g-cir', name: 'A2G CIR (3.6 GHz)', year: 2025,
    access: 'open',
    source: 'real',
    authors: 'Qiuming Zhu, Hangang Li, Kai Mao, Hanpeng Li, Xuhan Wen, Shaolong Zhang, Jie Wang',
    org: 'Nanjing University of Aeronautics and Astronautics (NUAA)',
    venue: 'Mendeley Data V2 (2025)',
    site: 'https://doi.org/10.17632/8p6r8ft4fz.2',
    focusZh: '南京航空航天大学：3.6 GHz（带宽61.44 MHz）空地信道实测CIR数据集（运动场、农田、水域三类场景×10 m与15 m飞行高度，提供功率时延谱、路径损耗与RMS时延扩展）',
    focusEn: 'Measured 3.6 GHz A2G channel CIR over sports field, farmland and over-water',
    modality: { la: 1, csi: .5, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "南京航空航天大学朱秋明团队发布的 3.6 GHz 空地信道实测 CIR 数据集：中心频率 3.6 GHz、带宽 61.44 MHz，覆盖运动场（SportsField）、农田（Farmland）与水域（OverWater）三类场景，各含 10 m 与 15 m 两档飞行高度。每个场景-高度组合提供功率时延谱（PDP，含时延轴与时间轴两个维度）、路径损耗与 RMS 时延扩展的 `.mat` 文件，另附 `.xlsx` 汇总表与 `guidemanual.pdf` 说明。**测量为实测信道探测而非射线追踪仿真，是本索引中最接近真实低空传播环境的一类数据**；但只给 CIR/PDP 级结果、未提供完整 MIMO 天线对维度的 CSI，故信道级数据记为「部分 CSI」。数据于 2025-08-26 发布（V2），CC BY 4.0。",
    descEn: "A measured 3.6 GHz air-ground CIR dataset from Qiuming Zhu's group at NUAA: 3.6 GHz centre frequency and 61.44 MHz bandwidth over sports field, farmland and over-water scenarios at 10 m and 15 m flight altitudes. Each scene-altitude combination provides power delay profiles (with both delay and time axes), path loss and RMS delay spread as .mat files, plus an .xlsx summary and guidemanual.pdf. Measurement-based rather than ray-traced, it is the closest data here to a real low-altitude propagation environment; since only CIR/PDP-level results are released without full MIMO antenna-pair CSI, it is classed as partial CSI. V2 was released on 26 August 2025 under CC BY 4.0."
  },

  {
    id: 'a2g-cir-rt', name: 'A2G CIR + RT (Multi-band)', year: 2026,
    access: 'preview',
    source: 'mixed',
    authors: 'Qiuming Zhu, Nan Ming, Jianan Xie, Weidong Li, Junwei Bao, Kai Mao, et al.',
    org: 'Nanjing University of Aeronautics and Astronautics (NUAA)',
    venue: 'Mendeley Data V1 (2026)',
    site: 'https://doi.org/10.17632/pztzfz4vy4.1',
    focusZh: '南京航空航天大学：城市、郊区、农田、水域四类场景的空地CIR实测与射线追踪对照数据集（标称1.4/3.2/4.9 GHz三频段与25/50/100 m三档高度，带宽50 MHz；当前公开文件仅含100 m高度的1.4 GHz与3.2 GHz两档，其余档位待发布）',
    focusEn: 'Measured and ray-tracing A2G CIR across urban / suburban / farmland / over-water',
    modality: { la: 1, csi: .5, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "南京航空航天大学朱秋明团队发布的空地 CIR 实测与射线追踪对照数据集：标称覆盖城市（Urban）、郊区（Suburban）、农田（Farmland）与水域（Over-water）四类场景，频段 1.4/3.2/4.9 GHz，飞行高度 25/50/100 m，带宽 50 MHz，同时给出实测 CIR 与射线追踪结果，便于比较数字孪生与真实传播的偏差。**需注意当前公开文件只含 100 m 高度下 1.4 GHz 与 3.2 GHz 两档**（每个 `.xlsx` 按场景分文件，单文件 33–269 MB），4.9 GHz 与 25/50 m 两档尚未随数据发布，故获取方式记为「仅预览」。V1 于 2026-11-16 发布，CC BY 4.0。",
    descEn: "A paired measured and ray-traced air-ground CIR dataset from the same NUAA group: nominally urban, suburban, farmland and over-water scenarios at 1.4, 3.2 and 4.9 GHz, flight altitudes of 25, 50 and 100 m, and 50 MHz bandwidth, giving measured CIR alongside ray-tracing output so that digital-twin error can be quantified. Note that the public files currently cover only 100 m altitude at 1.4 and 3.2 GHz (one .xlsx per scene, 33-269 MB); 4.9 GHz and the 25/50 m tiers are not yet released, hence the preview-only access level. V1 was released on 16 November 2026 under CC BY 4.0."
  },

  {
    id: 'uav-mm-bench', name: 'UAV Wireless MM-Bench', year: 2026,
    access: 'open',
    source: 'sim',
    authors: 'Najmeh Alibabaie, Antonello Calabrò, Eda Marchetti',
    org: 'CNR-ISTI (Italy)',
    venue: 'Drones 10(4):244 (2026)',
    site: 'https://doi.org/10.5281/zenodo.17486134',
    paper: 'https://doi.org/10.3390/drones10040244',
    focusZh: '意大利国家研究委员会ISTI：无人机无线通信多模态仿真基准（Wireless InSite射线追踪生成11个乡村/郊区/城市区域、2/3.5/28 GHz、静动态场景的链路级与路径级参数——接收功率、ToA、时延扩展、AoA/AoD与多径交互序列，另附GeoJSON/STL/OBJ/DXF环境几何；纯仿真，不含CSI与原始波形）',
    focusEn: 'Ray-tracing UAV wireless benchmark: link/path-level parameters and 3D geometry',
    modality: { la: 1, csi: 0, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "意大利国家研究委员会 ISTI 发布的无人机无线通信多模态仿真基准：用 Wireless InSite X3D 射线追踪在 11 个乡村/郊区/城市区域（美国田纳西、加州 Palo Alto、意大利比萨西区、韩国首尔、曼哈顿等）生成 2/3.5/28 GHz 三个频段的信道数据，覆盖静态与移动场景及 G2A/A2G/A2A 三类链路。每个场景输出五类 CSV——空中节点与地面节点空间元数据、链路级统计（多径数、接收功率、平均 ToA、时延扩展、LOS/NLOS/Blocked 状态）、路径级参数（各多径功率、相位、精确 ToA、到达/离开方位角与俯仰角、交互编码）与射线交互序列，另附 GeoJSON/STL/OBJ/DXF 多格式三维环境几何。**该数据集完全基于仿真（作者自述 \"entirely simulation-based\"），不含原始 CSI、CIR 或任何实测波形**，提供的是几何感知的传播描述符；天线为 0 dBi 全向基线，无波束赋形与极化维度。数据托管于 Zenodo（CC BY 4.0），无需商业仿真软件即可读取。",
    descEn: "A multimodal UAV wireless simulation benchmark from CNR-ISTI: Wireless InSite X3D ray tracing over 11 rural, suburban and urban areas (Tennessee and Palo Alto in the US, western Pisa, Seoul, Manhattan and others) at 2, 3.5 and 28 GHz, covering static and mobile scenarios with G2A, A2G and A2A links. Each scenario ships five CSV families: node spatial metadata, link-level statistics (path count, received power, mean ToA, delay spread, LOS/NLOS/blocked state), path-level parameters (power, phase, exact ToA, azimuth and elevation of departure and arrival, interaction codes) and the ray interaction sequence, plus 3D geometry as GeoJSON/STL/OBJ/DXF. Entirely simulation-based by the authors' own description, it contains no raw CSI, CIR or measured waveform; antennas are 0 dBi omnidirectional baselines with no beamforming or polarization dimension. Hosted on Zenodo under CC BY 4.0 and readable without commercial simulation software."
  },

  {
    id: 'ata', name: 'ATA', year: 2026,
    access: 'pending',
    source: 'real',
    authors: 'Wenchao Kang, Xuekai Zhang, Yueping Peng, Wei Tang, Qilong Li, Hexiang Hao, Kang Liu, Qinghe Chen',
    org: 'Engineering University of the Chinese People\'s Armed Police Force',
    venue: 'Drones 10(6):429 (2026)',
    site: 'https://github.com/kkbushi/ATA',
    paper: 'https://doi.org/10.3390/drones10060429',
    focusZh: '武警工程大学：空空反无人机微小目标视觉-语言跟踪基准（50段真实飞行序列、38094帧，逐帧框标注+视频级英文描述，目标平均仅占画面0.03%，支持纯框与语言辅助两种设定；GitHub仓库当前仅放说明页，标注待数据整理后发布）',
    focusEn: 'Vision-language tracking benchmark for air-to-air counter-UAV of tiny drones',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "武警工程大学信息工程学院发布的空空反无人机微小目标视觉-语言跟踪基准（ATA：Air-to-Air）：50 段真实飞行视频序列合计 38,094 帧，统一 1920×1080、30 fps、总时长约 21 分钟，训练集 40 段（uav-m1~m22、uav-s1~s18）、测试集 10 段；每序列提供逐帧边界框（`groundtruth.txt`）与视频级英文描述（`language.txt`），支持纯框（BBox-only）与语言辅助两种任务设定。目标平均仅占画面 0.03%，呈现显著的微小目标特性，并覆盖双动态扰动（跟踪平台与目标同时运动）、复杂背景切换与同类无人机干扰三类难点；论文另评测 8 个代表性跟踪器并验证相邻帧时序增强模块 AFTE。**截至 2026-11 其 GitHub 仓库仅有说明页，明确标注待数据整理完成后发布，故获取方式记为「未发布」**，引用前需先核仓库状态。",
    descEn: "An air-to-air visual-language tracking benchmark for tiny counter-UAV targets from the Engineering University of the Chinese People's Armed Police Force (ATA): 50 real flight sequences totalling 38,094 frames, standardized to 1920x1080 at 30 fps for about 21 minutes and split into 40 training and 10 test sequences. Each sequence provides per-frame boxes (groundtruth.txt) and a video-level English description (language.txt), supporting both box-only and language-assisted settings. Targets average only 0.03 percent of the frame area, and the data covers dual dynamic disturbance (platform and target both moving), complex background switches and same-class drone distractors; the paper benchmarks eight representative trackers and validates an adjacent-frame temporal enhancement module (AFTE). As of November 2026 the GitHub repository holds only a description page and states that data will follow once organized, hence the unreleased access level."
  },

  {
    parentId: 'aerpaw',
    id: 'aerpaw-aadm', name: 'AERPAW AADM', year: 2026,
    access: 'open',
    source: 'mixed',
    authors: 'Md Sharif Hossen, Cole Dickerson, Ozgur Ozdemir, Mihail Sichitiu, Ismail Guvenc',
    org: 'North Carolina State University',
    venue: 'Dryad V4 (2026)',
    site: 'https://doi.org/10.5061/dryad.7d7wm3898',
    focusZh: '北卡州立大学AERPAW：自主空中数据中继（AADM）竞赛多模态无线测量集（7.7 GB，含USRP链路质量与数据下载测量、无人机遥测、Keysight射频传感器定位、LoRa接收机链路质量与Fortem雷达测量，覆盖数字孪生与真实外场两阶段；可作为AERPAW体系的独立子集引用）',
    focusEn: 'AERPAW autonomous aerial data mule multi-modal wireless measurements',
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: .5, imu: 1, weather: 0, acoustic: 0 },
    descZh: "北卡州立大学 AERPAW 团队发布的自主空中数据中继（AADM，Autonomous Aerial Data Mule）竞赛多模态无线测量集：单包 7.7 GB，含比赛所用的 USRP 测量、无人机遥测、Keysight 射频传感器的位置估计、LoRa 接收机链路质量与 Fortem 雷达测量，同时覆盖第一阶段数字孪生环境与第二阶段室外试验场的最终试飞。任务设定为一架自主无人机充当数据中继，在多基站之间规划航迹与接入决策以在限定时间内最大化下载量，故数据天然带有**多小区关联、调度与空地传播**的标注价值，也可用于数字孪生到真实世界的迁移研究。该集有独立 Dryad DOI（2026-03-12 发布，V4），可视作 AERPAW 体系下的独立子集引用。",
    descEn: "The multimodal wireless measurement set for AERPAW's Autonomous Aerial Data Mule (AADM) challenge at North Carolina State University: a 7.7 GB package containing the USRP measurements used in the competition, UAV telemetry, position estimates from Keysight RF sensors, LoRa receiver link quality and Fortem radar measurements, spanning both the phase-one digital-twin environment and the final phase-two outdoor flights. The task, one autonomous drone acting as a data relay that plans trajectories and access decisions to maximize downloads under a deadline, gives the data natural labels for multi-cell association, scheduling and air-ground propagation, and makes it useful for digital-twin-to-reality transfer studies. Carries its own Dryad DOI (V4, 12 March 2026) and can be cited independently within the AERPAW family."
  },

  {
    id: 'tricross-d2d', name: 'TriCross-D2D', year: 2026,
    access: 'preview',
    source: 'real',
    authors: 'Wei Tang, Qilong Li, Yueping Peng, Hexiang Hao, Wenchao Kang, Xuekai Zhang, Liming Hou, Hongyan Lu',
    org: 'Engineering University of the Chinese People\'s Armed Police Force',
    venue: 'Drones 10(6):459 (2026)',
    site: 'https://github.com/vv0930/TriCross-D2D',
    paper: 'https://doi.org/10.3390/drones10060459',
    focusZh: '武警工程大学：空对空无人机检测的跨场景-跨视角-跨天气域适应基准（13段RGB视频/23403帧抽取7045张图，源域4045+目标域训练2000/验证1000，9771个目标框；操场/树林/建筑/工地四类场景×低角度/平视/鸟瞰三视角×晴天与合成雾两档天气，支持UDA与SSDA两种协议，单类UAV且微小目标占73.8%；GitHub当前仅公开32对样例，完整集待发布）',
    focusEn: 'Cross-scene / cross-view / cross-weather drone-to-drone detection benchmark',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 },
    descZh: "武警工程大学信息工程学院发布的可跨场景、跨视角、跨天气迁移的空对空无人机检测基准（TriCross-D2D）：由 DJI Mavic 3T 在单一有限区域内对 DJI Avata 2、Mini 3 Pro、Mini 4 Pro 三型消费级目标机采集，13 段 RGB 视频共 23,403 帧，按间隔抽帧得到 7,045 张基准图像（`Source_train` 4,045、`Target_train` 2,000、`Target_val` 1,000），合计 9,771 个单类 UAV 水平框实例。三重域偏移由 4 类背景语境（操场、树林、建筑、工地）× 3 类视角（低角度、平视、鸟瞰）× 2 类天气（晴天实拍、基于大气散射模型合成的雾）耦合而成，按视频片段级划分以避免帧级泄漏，支持仅用源域标签的 UDA 与使用部分目标域标签的 SSDA 两种协议；作者的单因子实验显示**视角变化带来的域间差距最大**。极小/微小/小目标合计占 73.8%，双标注一致性平均 IoU > 0.75。**当前 GitHub 仓库仅含 32 对图像-标注样例（约 17 MB），README 明确标注待完整发布**，故获取方式记为「仅预览」；另有 115 网盘镜像（论文给出访问密码）。",
    descEn: "An air-to-air UAV detection benchmark (TriCross-D2D) for cross-scene, cross-view and cross-weather transfer, published by the Engineering University of the Chinese People's Armed Police Force. A DJI Mavic 3T films three consumer targets (Avata 2, Mini 3 Pro, Mini 4 Pro) in a single limited area; 13 RGB videos totalling 23,403 frames are subsampled to 7,045 benchmark images (Source_train 4,045, Target_train 2,000, Target_val 1,000) with 9,771 single-class UAV horizontal boxes. Three domain shifts are coupled: four background contexts (playground, woods, buildings, construction site) times three viewpoints (low angle, eye level, bird's eye) times two weathers (clear-sky capture and fog synthesized from an atmospheric scattering model). Splits are made at video-clip level to avoid frame leakage and support both UDA (source labels only) and SSDA (partial target labels) protocols; the authors' single-factor study finds viewpoint change causes the largest domain gap. Tiny, very tiny and small targets make up 73.8 percent of instances, and dual-annotation mean IoU exceeds 0.75. The GitHub repository currently holds only 32 image-label pairs (about 17 MB) and states the full release is pending, hence preview-only; a 115 cloud-drive mirror with a paper-supplied password also exists."
  },

  {
    id: 'tmrgbt-d2d', name: 'TMRGBT-D2D', year: 2025,
    access: 'preview',
    source: 'real',
    authors: 'Hexiang Hao, Yueping Peng, Zecong Ye, Baixuan Han, Wei Tang, Wenchao Kang, Xuekai Zhang, Qilong Li, Wenchao Liu',
    org: 'Engineering University of the Chinese People\'s Armed Police Force',
    venue: 'Drones 9(10):694 (2025)',
    site: 'https://github.com/HexiangH/TMRGBT-D2D',
    paper: 'https://doi.org/10.3390/drones9100694',
    focusZh: '武警工程大学：时间同步但空间错位的空对空RGB-热成像（红外）检测数据集（DJI Mavic 3T双相机并行采集19对视频、各21312帧，夜间占38.8%；两模态分别独立标注共94323框，快速运动帧1830个；因视差与视场差异无法全局配准，平均目标仅占画面0.02%；GitHub当前仅公开1段样例序列，完整集待发布）',
    focusEn: 'Temporally aligned but spatially misaligned RGB-thermal drone-to-drone detection',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 1, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 },
    descZh: "武警工程大学发布的空对空 RGB-热成像双模态检测数据集（TMRGBT-D2D）：由 DJI Mavic 3T 的广角可见光相机（1920×1080）与非制冷 VOx 长波红外相机（640×512，8–14 μm，NETD < 50 mK）并行采集 19 对视频、两模态各 21,312 帧，共 94,323 个标注框（RGB 55,086、红外 39,237），夜间场景占 38.8%，并覆盖静止/移动平台、正前视/俯视/仰视与天空、森林、建筑、工地、操场、道路六类背景。**其最具辨识度的特性是「时间同步、空间错位」**：两路视频同一时刻出发、帧率同为 30 fps，但因传感器视差与视场差异，目标在两模态中的位置与视角不同且随景深变化，常规单应性变换无法全局配准（只能对齐固定景深），因此作者对两个模态**分别独立标注**而非只标单模态。快速运动帧（相邻帧位移 > 10 像素）1,830 个；目标尺度极小，平均面积约占图像 0.02%，微小目标在可见光中占 80.4%。**当前 GitHub 仓库仅含 1 段样例序列（1 个 mp4 + 843 个 VOC xml，约 11 MB），README 标注待完整发布**，故记为「仅预览」。",
    descEn: "An air-to-air RGB-thermal dual-modality detection dataset (TMRGBT-D2D) from the Engineering University of the Chinese People's Armed Police Force. A DJI Mavic 3T records in parallel with its wide-angle visible camera (1920x1080) and an uncooled VOx long-wave infrared camera (640x512, 8-14 micrometres, NETD below 50 mK): 19 video pairs, 21,312 frames per modality, 94,323 boxes in total (55,086 RGB, 39,237 thermal), with 38.8 percent of scenes at night. Covers static and moving platforms, front, downward and upward views, and six background types (sky, forest, buildings, construction site, playground, road). Its defining property is temporal synchronization with spatial misalignment: both streams start at the same instant at 30 fps, but sensor parallax and field-of-view differences place targets differently in the two modalities and this shifts with depth, so a single homography cannot globally register them (only a fixed depth plane). The authors therefore annotate each modality independently. Fast-motion frames (inter-frame displacement above 10 px) number 1,830; targets are extremely small, averaging about 0.02 percent of image area, with 80.4 percent of tiny targets in the visible band. The GitHub repository currently holds one sample sequence (one mp4 plus 843 VOC XML files, about 11 MB) and states the full release is pending, hence preview-only."
  },

  {
    id: 'cpd-uav', name: 'CPD-UAV', year: 2026,
    access: 'request',
    source: 'real',
    authors: 'Xuekai Zhang, Wenchao Kang, Yueping Peng, Wei Tang, Qilong Li, Hexiang Hao, Liming Hou, Xin Ying',
    org: 'Engineering University of the Chinese People\'s Armed Police Force',
    venue: 'Drones 10(6):447 (2026)',
    site: 'https://github.com/18510004596/CPD-UAV',
    paper: 'https://doi.org/10.3390/drones10060447',
    focusZh: '武警工程大学：无人机视角下与环境视觉融合人员的搜救检测基准（DJI Mavic 3T在20–80 m高度采集15段视频抽帧1061张1920×1080图像，丛林46%/草地42%/雪地6.5%/沙漠5.5%，目标多为面积<2.5%的长尾小目标；提供像素级二值掩码而不用框标注。GitHub仅公开31对样例，完整集需向通讯作者申请且限定人道主义非商业用途）',
    focusEn: 'UAV-view detection of personnel visually blended with the environment',
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "武警工程大学发布的无人机视角「与环境视觉融合人员」检测基准（CPD-UAV，Wilderness Search and Rescue 场景）：以 DJI Mavic 3T 在 20–80 m 高度、变化斜视角下模拟搜救扫描航迹采集 15 段视频，每 10 帧抽 1 帧并统一到 1920×1080，共 1,061 张图像（野外实拍 929 张 + 网络补充 132 张），按 848/106/107 划分训练、验证、测试。地形背景为丛林 46%、草地 42%、雪地 6.5%、沙漠 5.5%（雪地与沙漠为网络补充图像，用于抑制绿/棕色调先验）；目标是身着低对比度户外装备、采取蹲伏或藏于枝叶下姿态的人员，属**人工伪装**而非自然生物伪装，传统 COD 数据集存在明显域偏移。**标注为像素级二值掩码**（ISAT + Segment Anything 半自动标注后人工精修，抽检 30 张平均 IoU 90.89%），不是检测框；目标面积绝大多数 < 2.5%，呈长尾分布。**仅公开部分**：GitHub 仓库只放 31 对图像-掩码样例，完整 1,061 张需向通讯作者提交正式申请并逐案审批，限人道主义非商业研究用途（论文附 DURC 双重用途声明，故限制完整数据访问）。作者自述当前缺少雾、雨、极端低光与季节变化。",
    descEn: "A UAV-view detection benchmark for persons visually blended into their surroundings (CPD-UAV), framed as wilderness search and rescue, from the Engineering University of the Chinese People's Armed Police Force. A DJI Mavic 3T simulates search-and-rescue scan tracks at 20-80 m altitude and varying oblique angles; 15 videos are subsampled every 10 frames and standardized to 1920x1080, giving 1,061 images (929 field captures plus 132 web-sourced) split 848/106/107 into train, validation and test. Terrain is jungle 46 percent, grassland 42 percent, snow 6.5 percent and desert 5.5 percent (snow and desert are web-sourced additions that suppress green and brown colour priors). Targets are people in low-contrast outdoor gear, crouching or hidden under foliage, which is artificial rather than natural camouflage, so conventional camouflaged-object-detection datasets show a clear domain shift. Labels are pixel-level binary masks (ISAT plus Segment Anything, semi-automatic then manually refined; 30 sampled images give a mean IoU of 90.89 percent), not boxes, and target areas are mostly below 2.5 percent with a long-tailed distribution. Only part is public: the GitHub repository holds 31 image-mask pairs and the full 1,061 images require a formal request to the corresponding author, approved case by case and restricted to humanitarian non-commercial research (the paper carries a DURC dual-use statement, which is why full access is limited). The authors note the absence of fog, rain, extreme low light and seasonal variation."
  },

  {
    id: "lacn", name: "LACN-Dataset", year: 2026,
    access: "open",
    source: "real",
    authors: "Boqun Huang, Yancheng Wang, Wei Guo, Zhaojie Guo, Di Wu, Ran Li, Dayang Liu, Wanshun Lan, Chuan Huang, Shuguang Cui",
    org: "UESTC / CUHK-Shenzhen / HKUST / China Mobile",
    venue: "arXiv:2604.17781",
    site: "https://github.com/ycw671/LACN-Dataset/tree/main/dataset",
    paper: "https://arxiv.org/abs/2604.17781",
    focusZh: "5G NR 低空覆盖实测：约 75、230、400、500 m 四档飞行高度，提供基站配置优化前后的配对 RSRP、SINR 与位置记录。",
    focusEn: "Before/after 5G NR coverage measurements over four UAV altitudes",
    modality: { la: 1, csi: 0, rf: 0.5, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0.5, weather: 0, acoustic: 0 },
    descZh: "电子科技大学与香港中文大学（深圳）、香港科技大学、中国移动等联合发布的 5G NR 低空覆盖实测数据集：在约 75、230、400、500 m 四档飞行高度上采集基站配置优化前后的配对 RSRP、SINR 与位置记录。配对结构使其可直接用于覆盖增益的前后对比与低空网络部署参数调优；射频侧交付的是派生指标（KPI、RSRP 等）而非原始波形，故 `射频信号` 记为部分支持。",
    descEn: "A measured 5G NR low-altitude coverage dataset from UESTC and collaborators: paired RSRP, SINR and position logs recorded at four nominal UAV altitudes (about 75, 230, 400 and 500 m) before and after base-station configuration optimization. The paired structure supports before-and-after coverage comparison and deployment-parameter tuning for low-altitude networks; the radio data are derived KPIs rather than raw waveforms."
  },
  {
    id: "live-ris", name: "LIVE-RIS", year: 2026,
    access: "open",
    source: "real",
    authors: "David Müller, Kevin Weinberger, Aydin Sezgin, Martin Mönnigmann",
    org: "Ruhr University Bochum",
    venue: "Zenodo / arXiv:2609.34993",
    site: "https://zenodo.org/records/23011126",
    paper: "https://arxiv.org/abs/2609.34993",
    focusZh: "室内无人机挂载 RIS 飞行实测，提供 VNA 测得的 S21、RIS 配置、状态估计与位置真值。Zenodo 提供 19.7 MB 下载包。",
    focusEn: "In-flight UAV-mounted RIS S21 channel measurements",
    modality: { la: 1, csi: 0.5, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0.5, weather: 0, acoustic: 0 },
    descZh: "鲁尔波鸿大学发布的室内无人机挂载可重构智能表面（RIS）飞行实测数据集：用矢量网络分析仪测得 S21 信道传递函数，配套 RIS 配置、状态估计与位置真值，Zenodo 提供约 19.7 MB 下载包。面向上机载 RIS 的信道建模与波束控制验证，属实测信道测量但未给完整 MIMO CSI，故信道级数据记为「部分 CSI」。",
    descEn: "An indoor in-flight measurement dataset for a UAV-mounted reconfigurable intelligent surface, from Ruhr University Bochum. A vector network analyser records S21 channel transfer functions together with the RIS configuration, state estimates and position ground truth. Aimed at airborne RIS channel modelling and beam-control validation; the Zenodo package is about 19.7 MB."
  },
  {
    id: "uavsig", name: "UAVSig", year: 2024,
    access: "open",
    source: "real",
    authors: "T. Zhao, B. W. Domae, C. Steigerwald, L. B. Paradis, T. Chabuk, D. Cabric",
    org: "University of California, Los Angeles (UCLA)",
    venue: "MILCOM 2024 / UCLA Dataverse",
    site: "https://cores.ee.ucla.edu/downloads/datasets/uavsig/",
    paper: "https://ieeexplore.ieee.org/document/10773837",
    focusZh: "无人机及遥控器射频指纹数据，含带标注的原始 I/Q。官方说明部分采样段丢失，原始序列存在随机缺口。",
    focusEn: "Labeled raw I/Q for drone and controller RF fingerprinting",
    modality: { la: 1, csi: 0, rf: 1, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 },
    descZh: "加州大学洛杉矶分校发布的无人机与遥控器射频指纹数据集：提供带标注的原始 I/Q 序列，面向特定辐射源识别（SEI）与射频指纹研究，覆盖多型无人机及其遥控链路。需注意官方已说明部分采样段丢失，原始序列存在随机缺口，使用前应做完整性检查。",
    descEn: "A UCLA dataset of labelled raw I/Q for drone and controller RF fingerprinting, targeting specific emitter identification and RF fingerprinting research. Note that the official description confirms some sample segments are lost, leaving random gaps in the raw sequences, so integrity checking is advisable before use."
  },
  {
    id: "m3ed", name: "M3ED", year: 2023,
    access: "open",
    source: "real",
    authors: "Kenneth Chaney, Fernando Cladera, Ziyun Wang, Anthony Bisulco, M. Ani Hsieh, Christopher Korpela, Vijay Kumar, Camillo J. Taylor, Kostas Daniilidis",
    org: "University of Pennsylvania et al.",
    venue: "CVPR Workshops 2023",
    site: "https://m3ed.io/",
    paper: "https://openaccess.thecvf.com/content/CVPR2023W/EventVision/papers/Chaney_M3ED_Multi-Robot_Multi-Sensor_Multi-Environment_Event_Dataset_CVPRW_2023_paper.pdf",
    focusZh: "无人机、地面车辆与四足机器人实测集合。包含无人机飞行序列，传感器涵盖同步事件相机、RGB／灰度图像、LiDAR、IMU 与 RTK。",
    focusEn: "Multi-robot event-camera benchmark with aerial sequences",
    modality: { la: 0.5, csi: 0, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 0, imu: 1, weather: 0, acoustic: 0 },
    descZh: "宾夕法尼亚大学等发布的多机器人多模态事件相机数据集（M3ED）：在同一采集框架下覆盖无人机、地面车辆与四足机器人，传感器含同步事件相机、RGB/灰度图像、LiDAR、IMU 与 RTK。其中无人机飞行序列与本索引的低空主题一致，但数据集整体并非专为低空设计，故 `低空` 记为 0.5 并按 `la > 0` 归入低空相关组。",
    descEn: "A multi-robot multimodal event-camera dataset (M3ED) from the University of Pennsylvania and collaborators, collected across UAVs, ground vehicles and quadruped robots with one acquisition framework. Sensors include synchronized event cameras, RGB and greyscale images, LiDAR, IMU and RTK. Only the aerial sequences are relevant to low-altitude research, hence the partial low-altitude flag."
  },
  {
    id: "uav-mm3d", name: "UAV-MM3D", year: 2025,
    access: "register",
    source: "sim",
    authors: "Longkun Zou, Jiale Wang, Rongqin Liang, Hai Wu, Ke Chen, Yaowei Wang",
    org: "Pengcheng Laboratory / University of Southern California",
    venue: "arXiv:2511.22404",
    site: "https://github.com/zou-longkun/UAVMM3D",
    paper: "https://arxiv.org/abs/2511.22404",
    focusZh: "CARLA 合成低空 3D 感知基准，约 40 万同步帧，提供 RGB、红外、LiDAR、雷达及事件相机数据，覆盖晴、阴、雨、雾。作者提供百度网盘入口，完整包未实测。",
    focusEn: "Synthetic multimodal low-altitude UAV perception and tracking",
    modality: { la: 1, csi: 0, rf: 0, rgb: 1, ir: 1, lidar: 1, radar: 1, imu: 0, weather: 1, acoustic: 0 },
    descZh: "鹏城实验室与南加州大学发布的 CARLA 合成低空三维感知基准（UAV-MM3D）：约 40 万帧同步数据，同时提供 RGB、红外、LiDAR、雷达与事件相机五种模态，覆盖晴、阴、雨、雾四类天气，面向低空目标检测与跟踪。数据经百度网盘分发、需登录后获取，完整数据包尚未逐项实测，故获取方式记为「需注册」。",
    descEn: "A synthetic low-altitude 3D perception benchmark (UAV-MM3D) from Pengcheng Laboratory and USC, generated in CARLA: about 400,000 synchronized frames providing five modalities (RGB, infrared, LiDAR, radar and event camera) across clear, overcast, rainy and foggy weather. Distributed through a Baidu cloud-drive link that requires an account, and the complete package has not been verified end to end, hence the registration access level."
  },
  {
    id: "taltech-5g-mmwave", name: "TalTech UAV 5G mmWave", year: 2026,
    access: "request",
    source: "real",
    authors: "Junaid Sajid, Marika Kulmar, Lauri Anton, Margus Rohtla, Priit Roosipuu, Ivo Müürsepp, Muhammad Mahtab Alam",
    org: "Tallinn University of Technology / University of Essex",
    venue: "TalTech Data Repository V1",
    site: "https://data.taltech.ee/records/p1hk3-ve652",
    focusZh: "5G NR n258 波束实测，包含无人机、地面和屋顶记录，提供坐标、SSB 索引、RSSI、RSRP、SINR 和 RSRQ。记录公开，文件受限，需登录查看权限。",
    focusEn: "Restricted 5G NR beam and coverage measurements from UAV and ground scans",
    modality: { la: 0.5, csi: 0, rf: 0.5, rgb: 0, ir: 0, lidar: 0, radar: 0, imu: 0.5, weather: 0, acoustic: 0 },
    descZh: "塔林理工大学与埃塞克斯大学发布的 5G NR n258（26 GHz）毫米波波束实测数据集：记录空中无人机、地面与屋顶三类采集点的坐标、SSB 波束索引、RSSI、RSRP、SINR 与 RSRQ。记录元数据公开，但文件本身受限、需登录并获得查看权限，故获取方式记为「需申请」。低空仅为三类采集点之一，故 `低空` 记为 0.5。",
    descEn: "A measured 5G NR n258 (26 GHz) mmWave beam dataset from Tallinn University of Technology and the University of Essex, covering aerial UAV, ground and rooftop measurement points. Each record logs coordinates, SSB beam index, RSSI, RSRP, SINR and RSRQ. The metadata records are public but the files themselves are restricted and require a login with granted permission, hence the on-request access level."
  },
  {
    id: "cooperative-uav-isac", name: "Cooperative Monostatic/Bistatic UAV ISAC", year: 2026,
    access: "request",
    source: "real",
    authors: "Nan Ming, Hanwen Xu, Kai Mao, Hanpeng Li, Mingqi Guo, Xiaomin Chen, Qiuming Zhu",
    org: "NUAA / Queen’s University Belfast",
    venue: "Sensors 26(16):5015",
    site: "https://www.mdpi.com/1424-8220/26/16/5015#data-availability",
    paper: "https://doi.org/10.3390/s26165015",
    focusZh: "同一低空城市场景的机载单站与空地双站 ISAC 实测，主要测量结果为 CIR 和 PDP。数据须向通讯作者申请，原始 IQ 的交付范围未公开。",
    focusEn: "Cooperative monostatic and bistatic low-altitude UAV ISAC sounding",
    modality: { la: 1, csi: 0.5, rf: 0, rgb: 0, ir: 0, lidar: 0, radar: 1, imu: 0.5, weather: 0, acoustic: 0 },
    descZh: "南京航空航天大学与贝尔法斯特女王大学联合发布的协同 ISAC 实测数据集：在同一低空城市场景中同时开展机载单站与空地双站探测，主要交付结果为 CIR 与功率时延谱（PDP）。数据须向通讯作者申请，原始 I/Q 的交付范围官方未明确说明，故获取方式记为「需申请」。",
    descEn: "A cooperative ISAC measurement dataset from NUAA and Queen's University Belfast that runs airborne monostatic and air-to-ground bistatic sounding in the same low-altitude urban scenario. The main delivered products are CIR and power delay profiles. Access requires a request to the corresponding author, and the scope of raw I/Q delivery is not specified, hence the on-request access level."
  },

  {
    id: 'huangpu-river', name: 'Huangpu River Water–Air', year: 2026,
    access: 'open',
    source: 'sim',
    authors: 'Haofeng Zhong, Jianhua Mo',
    org: 'Shanghai Jiao Tong University',
    venue: 'Science Data Bank V3 (2026)',
    site: 'https://doi.org/10.57760/sciencedb.0130w',
    siteAlt: 'https://www.scidb.cn/en/detail?dataSetId=b84d794e94634d3e80e63422df4fb07b&version=V3',
    focusZh: '上海交通大学：黄浦江水域-低空一体化多模态感知仿真数据集（UE5+ASVSim 构建岸基基站与船舶场景，同步RGB/深度/LiDAR/雷达点云与多模态天气，Sionna RT 生成多频段复数CSI；当前支持水面船舶与低空无人机场景（UAV 支持状态依据维护者于 2026-11-24 的确认更新））',
    focusEn: 'Huangpu River multimodal simulation dataset supporting surface vessels and low-altitude UAVs',
    modality: { la: 1, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: 1, weather: 1, acoustic: 0 },
    descZh: "上海交通大学 Wireless AI 团队构建的黄浦江水域-低空一体化多模态感知仿真数据集：以 Unreal Engine 5 还原黄浦江三维场景，配合 ASVSim 模拟岸基基站与船舶的运动、水动力与多传感器输出，再由 Sionna RT 依据同帧位姿做电磁射线追踪，生成**多频段复数 CSI 及其传播路径参数**（保留未归一化的原始复信道系数，便于跨频段信道建模与对比）。模态含 RGB、深度、GPS/位姿、LiDAR 点云、雷达点云，以及晴/雨/云/雾/雪与不同时段等天气条件；提供相遇与追踪两类运动场景，并要求按船号 + 同一帧号跨模态读取。约 375 GB，V1 于 2026-09-20 发布、V3 于 2026-10-30 更新（CC BY 4.0）。**当前支持水面船舶与低空无人机场景**；UAV 支持状态依据维护者于 2026-11-24 的确认更新。",
    descEn: "A multimodal simulation dataset for the Huangpu River water-air scene, built by the SJTU Wireless AI group. Unreal Engine 5 reconstructs the 3D river environment; ASVSim models the motion, hydrodynamics and multi-sensor output of shore base stations and vessels; Sionna RT then performs electromagnetic ray tracing on the same per-frame poses to generate multi-band complex CSI plus propagation path parameters (unnormalized complex channel coefficients are retained for cross-band modelling). Modalities include RGB, depth, GPS and pose, LiDAR point cloud, radar point cloud and weather states (clear, rain, cloudy, fog, snow, various times of day). Two motion scenarios (encounter and pursuit) are provided, with cross-modal reads keyed by vessel ID plus frame index. About 375 GB; V1 released on 20 September 2026 and V3 updated on 30 October 2026 under CC BY 4.0. Supports both surface vessels and low-altitude UAVs, per maintainer confirmation on 24 November 2026.",
    self: true
  },

  {
    id: 'lambda', name: 'LAMBDA', year: 2026,
    access: 'open',
    source: 'sim',
    authors: 'Lin Zhou, Peichuan Rao, Chenshuo Zhang, Jianhua Mo, Shu Sun, Zhiyong Chen, Meixia Tao',
    org: 'Shanghai Jiao Tong University',
    venue: 'arXiv:2607.03826 · Science Data Bank',
    site: 'https://doi.org/10.57760/sciencedb.36052',
    paper: 'https://arxiv.org/abs/2607.03826',
    focusZh: '低空多模态通感一体化基础数据集',
    focusEn: 'Low-altitude multimodal ISAC data',
    modality: { la: 1, csi: 1, rf: 0, rgb: 1, ir: 0, lidar: 1, radar: 1, imu: 1, weather: 1, acoustic: 0 },
    descZh: "低空多模态基础数据集，通过高保真数字孪生流水线生成，同步 RGB、深度、LiDAR、IMU、UAV 位姿、CSI 与雷达资源，覆盖城市/郊区/园区场景与晴雨雪雾天气。",
    descEn: "The LAMBDA low-altitude multimodal base dataset, generated by a high-fidelity digital-twin pipeline that synchronizes RGB, depth, LiDAR, IMU, UAV pose, CSI and radar returns. Covers urban, suburban and campus scenes under clear, rainy, snowy and foggy weather. It is the reference catalogue for this index and the only entry with full coverage across all seven core modalities.",
    self: true
  }
];

/* ---------------- state ---------------- */

const WIRELESS_BY_ID = {
  'lacn': ['Beam/RSRP', 'RF KPI'],
  'live-ris': ['信道传递函数'],
  'uavsig': ['Raw I/Q'],
  'taltech-5g-mmwave': ['Beam/RSRP', 'Path Loss/RSSI', 'RF KPI'],
  'cooperative-uav-isac': ['CIR/PDP'],
  'drone-swarm-sounding': ['信道传递函数'],
  'a2g-cir': ['CIR/PDP', 'Path Loss/RSSI'],
  'a2g-cir-rt': ['CIR/PDP'],
  'deepsense6g': ['Beam/RSRP'],
  'eflash': ['Beam/RSRP'],
  'crosslayer-uav6g': ['RF KPI'],
  'aerpaw': ['Raw I/Q', 'Path Loss/RSSI', 'Beam/RSRP', 'RF KPI'],
  'aerpaw-aadm': ['RF KPI'],
  'ku-leuven-drone-rf': ['Raw I/Q'],
  'rfuav': ['Raw I/Q'],
  'dronerfa': ['Raw I/Q'],
  'dronerfb-dir': ['Raw I/Q'],
  'pml-cellulareye': ['Raw I/Q'],
  'em-134k': ['I/Q 波形'],
  'em-bench': ['I/Q 波形'],
  'lipase': ['距离-多普勒图'],
  'tsms-drone': ['Raw I/Q', 'Radar I/Q', '距离-多普勒图', '频谱/PSD'],
  'isac-uav-ilmenau': ['信道传递函数'],
  'diat-msat': ['微多普勒谱'],
  'mathworks-radar-drone': ['微多普勒谱'],
  'multifly': ['雷达点云'],
  'mmaud': ['雷达点云'],
  'drone-rf-mendeley': ['RF 采样（CSV）'],
  'huangpu-river': ['传播路径参数', '雷达点云'],
  'uav-mm-bench': ['传播路径参数']
};
for (const ds of DATASETS) {
  ds.wirelessTypes = [...(ds.modality.csi === 1 ? ['MIMO CSI'] : []), ...(WIRELESS_BY_ID[ds.id] || [])];
  const hasWirelessScope = ds.modality.csi || ds.modality.rf || ds.modality.radar || ds.id === 'a2a-uav';
  ds.wirelessStatus = ds.wirelessTypes.length ? 'tagged' : hasWirelessScope ? 'unverified' : 'none';
}
const WIRELESS_TYPES = [...new Set(DATASETS.flatMap(ds => ds.wirelessTypes))].sort();
/* 分面里按出现次数降序展示，比字母序更贴合实际检索；顺序在初始化时固定，
   不随当前筛选结果重排，否则胶囊会在每次点击后跳位。 */
const WIRELESS_TYPES_BY_COUNT = WIRELESS_TYPES.slice().sort((a, b) => {
  const n = x => DATASETS.filter(d => d.wirelessTypes.includes(x)).length;
  return (n(b) - n(a)) || a.localeCompare(b);
});
const DATASET_BY_ID = new Map(DATASETS.map(ds => [ds.id, ds]));
const aerpawEntry = DATASETS.find(ds => ds.id === 'aerpaw');
aerpawEntry.subsets = [
  { name: 'Dataset-12: A2G I/Q / RSS', url: 'https://aerpaw.org/dataset/uav-based-signal-data-collected-at-varying-altitudes-and-sampling-rates-for-wireless-communication-studies/' },
  { name: 'Dataset-18: 5G NSA RF / throughput', url: 'https://doi.org/10.5061/dryad.wh70rxx06' },
  { name: 'Dataset-31: A2A channel sounding', url: 'https://aerpaw.org/dataset/dataset-31-aerpaw-air-to-air-channel-sounding-measurement-with-uavs/' },
  { name: 'Dataset-32: A2G sounding / path loss', url: 'https://aerpaw.org/dataset/dataset-32-aerpaw-air-to-ground-channel-sounding-and-path-loss-measurements-at-3-4-ghz-with-linear-and-zigzag-uav-trajectories/' }
];

/* 筛选状态：q 为关键字，facets 每个维度一个 Set（空集 = 该维度不设限）。
   行内多选取「或」，跨行取「且」；模态行是唯一的例外，多选取「同时具备」。 */
const EMPTY_FACETS = () => ({
  scope: new Set(), year: new Set(), mod: new Set(), chan: new Set(),
  wtype: new Set(), access: new Set(), source: new Set()
});
const state = { q: '', sort: 'year-desc', view: 'grid', facets: EMPTY_FACETS() };

/* ---------------- helpers ---------------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function markOf(v) {
  if (v === 1)   return { cls: 'y', ch: '\u2713', txt: t('mark.y') };
  if (v === .5)  return { cls: 'p', ch: '\u25B3', txt: t('mark.p') };
  return { cls: 'n', ch: '\u00D7', txt: t('mark.n') };
}

/* 信道级数据的四档口径 —— 决定矩阵名称色条与卡片徽章。
   注意 rf 不是 CSI 的弱化档：原始 I/Q、频谱、距离-多普勒图属于「射频信号采集」，
   数据里没有信道估计，故 csi = 0 而 rf > 0。
   label / note 用 getter，切换语言时无需重建对象。 */
const CSI_LEVELS = {
  full:   { key: 'full', get label() { return t('csi.full.label'); },   get note() { return t('csi.full.note'); } },
  part:   { key: 'part', get label() { return t('csi.part.label'); },   get note() { return t('csi.part.note'); } },
  rf:     { key: 'rf',   get label() { return t('csi.rf.label'); },     get note() { return t('csi.rf.note'); } },
  rfPart: { key: 'rf',   get label() { return t('csi.rfPart.label'); }, get note() { return t('csi.rfPart.note'); } },
  none:   { key: 'none', get label() { return t('csi.none.label'); },   get note() { return t('csi.none.note'); } }
};
function csiOf(ds) {
  const v = ds.modality.csi;
  if (v === 1)  return CSI_LEVELS.full;
  if (v === .5) return CSI_LEVELS.part;
  if (ds.modality.rf === 1)  return CSI_LEVELS.rf;
  if (ds.modality.rf === .5) return CSI_LEVELS.rfPart;
  return CSI_LEVELS.none;
}
/* CSI 列自身的底色只看 csi 取值，不受 rf 影响 */
function csiCellKey(ds) {
  const v = ds.modality.csi;
  return v === 1 ? 'full' : (v === .5 ? 'part' : 'none');
}

/* Data access levels — 数据能否拿到、要什么门槛。open 为默认值，卡片上不显示徽章 */
const ACCESS_LEVELS = {};
['open', 'preview', 'register', 'request', 'pending'].forEach(k => {
  ACCESS_LEVELS[k] = {
    key: k,
    get label() { return t('access.' + k + '.label'); },
    get note()  { return t('access.' + k + '.note'); }
  };
});
function accessOf(ds) {
  return ACCESS_LEVELS[ds.access] || ACCESS_LEVELS.open;
}

/* Data-origin levels — 底层数据从哪来。每条都必须显式声明，不设默认值（gen.js 会校验） */
const SOURCE_LEVELS = {};
['real', 'mixed', 'sim'].forEach(k => {
  SOURCE_LEVELS[k] = {
    key: k,
    get label() { return t('source.' + k + '.label'); },
    get note()  { return t('source.' + k + '.note'); }
  };
});
function sourceOf(ds) {
  return SOURCE_LEVELS[ds.source] || SOURCE_LEVELS.real;
}

/* datasets that involve low-altitude / UAV scenarios */
const isLowAlt = ds => ds.modality.la > 0;

function modalityTags(ds) {
  return MODALITIES
    .filter(m => ds.modality[m.key] > 0)
    .map(m => {
      const full = ds.modality[m.key] === 1;
      const label = isZh() ? m.zh : m.en;
      return `<span class="mod ${full ? 'full' : 'part'}" title="${m.en}: ${full ? t('mod.included') : t('mod.partial')}">
                <span class="m">${full ? '\u2713' : '\u25B3'}</span>${label}
              </span>`;
    }).join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------------- facets（分面定义） ---------------- */

/* 每一行是一个维度。values 可以是数组，也可以是函数（年份、无线类型要按数据算）。
   hit(ds, v) 判断条目是否落在该取值上；mode === 'all' 表示行内多选取「且」，
   默认取「或」。 */
const FACET_DEFS = [
  {
    key: 'scope', labelKey: 'facet.scope',
    values: ['la', 'gen'],
    label: v => t('scope.' + v),
    hit: (ds, v) => (v === 'la' ? isLowAlt(ds) : !isLowAlt(ds))
  },
  {
    key: 'year', labelKey: 'facet.year',
    values: () => [...new Set(DATASETS.map(d => d.year))].sort((a, b) => b - a),
    label: v => String(v),
    hit: (ds, v) => ds.year === Number(v)
  },
  {
    key: 'mod', labelKey: 'facet.mod', hintKey: 'facet.mod.hint', mode: 'all',
    values: () => MODALITIES.map(m => m.key),
    label: k => { const m = MODALITIES.find(x => x.key === k); return m ? (isZh() ? m.zh : m.en) : k; },
    sub: k => { const m = MODALITIES.find(x => x.key === k); return m ? !m.core : false; },
    hit: (ds, v) => ds.modality[v] > 0
  },
  {
    key: 'chan', labelKey: 'facet.chan',
    values: ['full', 'part', 'rf', 'none'],
    label: v => t('csi.' + v + '.label'),
    hit: (ds, v) => csiOf(ds).key === v
  },
  {
    key: 'wtype', labelKey: 'facet.wtype', hintKey: 'facet.wtype.hint',
    values: () => [...WIRELESS_TYPES_BY_COUNT, 'unverified', 'none'],
    label: v => v === 'unverified' ? t('wtype.unverified')
             : v === 'none' ? t('wtype.none') : wlLabel(v),
    hit: (ds, v) => (v === 'unverified' || v === 'none')
      ? ds.wirelessStatus === v
      : ds.wirelessTypes.includes(v)
  },
  {
    key: 'access', labelKey: 'facet.access',
    values: ['open', 'preview', 'register', 'request', 'pending'],
    label: v => t('access.' + v + '.label'),
    hit: (ds, v) => (ds.access || 'open') === v
  },
  {
    key: 'source', labelKey: 'facet.source',
    values: ['real', 'mixed', 'sim'],
    label: v => t('source.' + v + '.label'),
    hit: (ds, v) => (ds.source || 'real') === v
  }
];

/* 关键字索引按语言缓存：切换语言后 wlLabel() 的结果会变，必须重建。
   英文机构/出处也进索引，这样中文界面搜 "Zhejiang" 同样命中。 */
let hayCache = null;
function hayOf(ds) {
  if (!hayCache) hayCache = new Map();
  let h = hayCache.get(ds.id);
  if (h == null) {
    h = [ds.name, ds.org, ds.venue, ds.authors, ds.focusZh, ds.focusEn,
         ds.descZh, ds.descEn, ds.id,
         fieldOf(ds, 'org'), fieldOf(ds, 'venue'), fieldOf(ds, 'authors'),
         ...ds.wirelessTypes, ...ds.wirelessTypes.map(wlLabel), String(ds.year)]
      .join(' ').toLowerCase();
    hayCache.set(ds.id, h);
  }
  return h;
}

/* skipKey 用于分面计数：算某一行的数量时忽略该行自身的选择，否则选中后同排会全变 0 */
function facetMatch(ds, skipKey) {
  for (const def of FACET_DEFS) {
    if (def.key === skipKey) continue;
    const sel = state.facets[def.key];
    if (!sel || sel.size === 0) continue;
    if (def.mode === 'all') {
      for (const v of sel) if (!def.hit(ds, v)) return false;
    } else {
      let any = false;
      for (const v of sel) { if (def.hit(ds, v)) { any = true; break; } }
      if (!any) return false;
    }
  }
  return true;
}

function countOf(def, val) {
  const q = state.q.trim().toLowerCase();
  return DATASETS.filter(ds =>
    (!q || hayOf(ds).includes(q)) && facetMatch(ds, def.key) && def.hit(ds, val)).length;
}

/* ---------------- filtering ---------------- */
function filtered() {
  const q = state.q.trim().toLowerCase();
  let list = DATASETS.filter(ds => (!q || hayOf(ds).includes(q)) && facetMatch(ds, null));

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
  const alt = ds.siteAlt ? `<a class="link-btn" href="${ds.siteAlt}" target="_blank" rel="noopener">${t('card.alt')}</a>` : '';
  const c = csiOf(ds), src = sourceOf(ds), acc = accessOf(ds);
  /* 中文界面保留「中文主文案 + 英文小字」的原有双层结构；英文界面只给英文，避免中英混排 */
  const focus = isZh()
    ? `${escapeHtml(ds.focusZh)}<span class="en">${escapeHtml(ds.focusEn)}</span>`
    : escapeHtml(ds.focusEn);
  return `
  <article class="card${ds.self ? ' is-self' : ''}">
    <div class="card-top">
      <div class="card-title">
        <h3><a href="${ds.site}" target="_blank" rel="noopener">${escapeHtml(ds.name)}</a></h3>
        <div class="org">${escapeHtml(fieldOf(ds, 'org'))}</div>
      </div>
      <div class="badges">
        <span class="badge-year">${ds.year}</span>
        <span class="badge-csi csi-${c.key}" title="${escapeHtml(c.note)}">${c.label}</span>
        <span class="badge-source src-${src.key}" title="${t('card.sourceTip')}${escapeHtml(src.note)}">${src.label}</span>
        ${acc.key === 'open' ? '' :
          `<span class="badge-access acc-${acc.key}" title="${escapeHtml(acc.note)}">${acc.label}</span>`}
        ${ds.self ? '<span class="badge-self">This work</span>' : ''}
      </div>
    </div>
    <div class="card-focus">${focus}</div>
    ${ds.parentId ? `<div class="venue-row">${t('card.partOf')}${escapeHtml(DATASET_BY_ID.get(ds.parentId).name)}</div>` : ''}
    ${ds.kind === 'collection' ? `<div class="venue-row">${t('card.collection')}</div>` : ''}
    ${ds.wirelessStatus === 'unverified' ? `<div class="venue-row">${t('card.wtypePending')}</div>` : ''}
    <div class="card-authors"><strong>${t('card.authors')}</strong> ${escapeHtml(fieldOf(ds, 'authors'))}</div>
    <div class="mods">${modalityTags(ds)}</div>
    ${ds.wirelessTypes.length ? `<div class="venue-row">${t('card.wireless')}${ds.wirelessTypes.map(x => escapeHtml(wlLabel(x))).join(' · ')}</div>` : ''}
    <div class="venue-row">${escapeHtml(fieldOf(ds, 'venue'))}</div>
    <div class="card-links">
      <a class="link-btn primary" href="${ds.site}" target="_blank" rel="noopener">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>
        ${t('card.site')}
      </a>
      ${ds.paper
        ? `<a class="link-btn" href="${ds.paper}" target="_blank" rel="noopener">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
        ${t('card.paper')}
      </a>`
        : `<span class="link-btn is-muted" title="${t('card.noPaperTip')}">${t('card.noPaper')}</span>`}
      ${alt}
      ${(ds.subsets || []).map(x => `<a class="link-btn" href="${x.url}" target="_blank" rel="noopener">${escapeHtml(x.name)}</a>`).join('')}
    </div>
  </article>`;
}

function renderCards() {
  const list = filtered();
  const la  = list.filter(isLowAlt);
  const gen = list.filter(ds => !isLowAlt(ds));
  const block = (arr, cls, title, note) => arr.length ? `
    <div class="grid-head ${cls}">
      <h3>${title}</h3>
      <span>${t('grid.count', { n: arr.length })} \u00B7 ${note}</span>
    </div>
    <div class="grid">${arr.map(cardHtml).join('')}</div>` : '';
  const html = block(la, 'la', t('grid.laTitle'), t('grid.laNote'))
             + block(gen, 'gen', t('grid.genTitle'), t('grid.genNote'));
  $('#grid-host').innerHTML = list.length
    ? html
    : `<div class="empty">${t('empty')}</div>`;
  $('#result-line').innerHTML = list.length
    ? t('result.line', { n: list.length, total: DATASETS.length, la: la.length, gen: gen.length })
    : t('result.lineBare', { n: 0, total: DATASETS.length });
}

/* ---------------- render: matrix ---------------- */
function matrixHtml(list) {
  const head = MODALITIES.map(m => isZh()
    ? `<th>${m.zh}<span class="en">${m.en}</span></th>`
    : `<th>${m.en}</th>`).join('');
  const body = list.map(ds => {
    const c = csiOf(ds);
    const cells = MODALITIES.map(m => {
      const k = markOf(ds.modality[m.key]);
      const csiCls = m.key === 'csi' ? ` csi-cell csi-${csiCellKey(ds)}` : '';
      return `<td class="cell-${k.cls}${csiCls}"><span class="mark ${k.cls}" title="${m.en}: ${k.txt}">${k.ch}</span></td>`;
    }).join('');
    return `<tr class="${ds.self ? 'hl' : ''}">
      <td class="name csi-bar csi-${c.key}" title="${escapeHtml(c.note)}"><a href="${ds.site}" target="_blank" rel="noopener">${escapeHtml(ds.name)}</a><span class="yr">${ds.year}</span></td>
      ${cells}
      <td class="name" style="font-weight:400;color:var(--text-2);white-space:normal;min-width:180px">${escapeHtml(ds.focusEn)}</td>
    </tr>`;
  }).join('');
  /* 中文界面表头带英文小字注释，英文界面不再重复 */
  const thName = isZh() ? `${t('mx.th.dataset')}<span class="en">Dataset</span>` : t('mx.th.dataset');
  const thFocus = isZh() ? `${t('mx.th.focus')}<span class="en">Main focus</span>` : t('mx.th.focus');
  return `<thead><tr><th class="name" style="min-width:150px">${thName}</th>${head}<th>${thFocus}</th></tr></thead>
    <tbody>${body}</tbody>`;
}

function renderMatrix() {
  const all = DATASETS.slice().sort((a, b) => (a.year - b.year) || a.name.localeCompare(b.name));
  const la  = all.filter(isLowAlt);
  const gen = all.filter(ds => !isLowAlt(ds));
  $('#matrix-table').innerHTML = matrixHtml(la);
  $('#matrix-table-other').innerHTML = matrixHtml(gen);
  $('#mx-la-count').textContent  = t('mx.count', { n: la.length });
  $('#mx-gen-count').textContent = t('mx.count', { n: gen.length });

  /* 数据来源统计：低空表逐档给出，通用表用一句带过 */
  const cnt = (arr, k) => arr.filter(d => (d.source || 'real') === k).length;
  const put = (sel, v) => { const el = $(sel); if (el) el.textContent = v; };
  put('#src-la-real',  cnt(la, 'real'));
  put('#src-la-mixed', cnt(la, 'mixed'));
  put('#src-la-sim',   cnt(la, 'sim'));
  const genNote = $('#src-gen-note');
  if (genNote) {
    genNote.innerHTML = t('mx.genNoteLine', {
      real: cnt(gen, 'real'), mixed: cnt(gen, 'mixed'), sim: cnt(gen, 'sim')
    });
  }
}

/* ---------------- render: facets + stats ---------------- */
function activeFilterCount() {
  return Object.keys(state.facets).reduce((n, k) => n + state.facets[k].size, 0);
}

/* 分面整体由 JS 渲染：数量要随其他筛选条件实时变化，静态 HTML 做不到。
   某取值数量为 0 时置灰但保留可点，方便用户看清「再选就没有结果了」。 */
function renderFacets() {
  const host = $('#facets');
  if (!host) return;
  host.innerHTML = FACET_DEFS.map(def => {
    const vals = typeof def.values === 'function' ? def.values() : def.values;
    const sel = state.facets[def.key];
    const chips = vals.map(v => {
      /* 年份取值是数字，而选中集合存的是 data-value 里的字符串，统一转成字符串再比较，
         否则年份胶囊永远不会高亮（筛选生效但看起来没选中） */
      const key = String(v);
      const on = sel.has(key);
      const n = countOf(def, v);
      const cls = ['f-chip'];
      if (def.sub && def.sub(v)) cls.push('sub');
      if (on) cls.push('on');
      if (!n && !on) cls.push('is-empty');
      return `<button type="button" class="${cls.join(' ')}" data-facet="${def.key}"`
        + ` data-value="${escapeHtml(key)}" aria-pressed="${on}">`
        + `${escapeHtml(def.label(v))}<span class="n">${n}</span></button>`;
    }).join('');
    const hint = def.hintKey ? ` title="${escapeHtml(t(def.hintKey))}"` : '';
    return `<div class="facet-row"><span class="facet-name"${hint}>${t(def.labelKey)}</span>`
      + `<div class="facet-values">${chips}</div></div>`;
  }).join('');

  const n = activeFilterCount();
  const btn = $('#reset');
  if (btn) btn.textContent = n ? t('btn.resetN', { n }) : t('btn.reset');
}

/* 一次刷新 = 分面（数量随条件变化）+ 卡片列表 */
function refresh() {
  renderFacets();
  renderCards();
}

function renderStats() {
  const total = DATASETS.length;
  const la = DATASETS.filter(isLowAlt).length;
  const gen = total - la;
  const laCsi = DATASETS.filter(ds => isLowAlt(ds) && ds.modality.csi > 0).length;
  const laRf  = DATASETS.filter(ds => isLowAlt(ds) && ds.modality.rf > 0).length;
  const years = DATASETS.map(d => d.year);
  const span = `${Math.min(...years)}\u2013${Math.max(...years)}`;
  const cells = [
    [t('stat.total'), total],
    [t('stat.la'), la],
    [t('stat.gen'), gen],
    [t('stat.laCsi'), laCsi],
    [t('stat.laRf'), laRf],
    [t('stat.span'), span]
  ];
  $('#stats').innerHTML = cells.map(([l, v]) =>
    `<div class="stat"><div class="num${String(v).length > 6 ? ' long' : ''}">${v}</div><div class="lbl">${l}</div></div>`).join('');
}

/* ---------------- language ---------------- */
function renderAll() {
  hayCache = null;          /* 语言变了，关键字索引（含 wlLabel 结果）要重建 */
  applyStaticI18n();
  renderStats();
  renderFacets();
  renderMatrix();
  renderCards();
}

function setLang(lang) {
  LANG = (lang === 'en') ? 'en' : 'zh';
  try { localStorage.setItem('lad-lang', LANG); } catch (e) { /* 隐私模式下忽略 */ }
  renderAll();
}

/* ---------------- events ---------------- */
function bind() {
  $('#search').addEventListener('input', e => { state.q = e.target.value; refresh(); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; renderCards(); });

  $('#facets').addEventListener('click', e => {
    const chip = e.target.closest('.f-chip');
    if (!chip) return;
    const sel = state.facets[chip.dataset.facet];
    if (!sel) return;
    const v = chip.dataset.value;
    if (sel.has(v)) sel.delete(v); else sel.add(v);
    refresh();
  });

  $('#reset').addEventListener('click', () => {
    state.q = '';
    state.facets = EMPTY_FACETS();
    state.sort = 'year-desc';
    $('#search').value = '';
    $('#sort').value = 'year-desc';
    refresh();
  });

  $$('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
}

/* ---------------- boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  LANG = detectLang();
  $('#year-now').textContent = new Date().getFullYear();
  renderAll();
  bind();
});
