/* ==========================================================================
   Low-Altitude Datasets — data + rendering
   Base list: LAMBDA (arXiv:2607.03826), Table 1.
   Extended: curator-verified additions (see README「收录说明」).
   Modality scale: 1 = included, 0.5 = limited/partial, 0 = absent.
   ========================================================================== */

const MODALITIES = [
  { key: 'la',       zh: '低空',     en: 'Low-altitude',  core: true },
  { key: 'csi',      zh: 'CSI信道',  en: 'CSI',           core: true },
  { key: 'rgb',      zh: 'RGB/深度', en: 'RGB/Depth',     core: true },
  { key: 'lidar',    zh: 'LiDAR',    en: 'LiDAR',         core: true },
  { key: 'radar',    zh: '雷达',     en: 'Radar',         core: true },
  { key: 'imu',      zh: 'IMU/GPS',  en: 'IMU/GPS',       core: true },
  { key: 'weather',  zh: '天气/时间', en: 'Weather/Time',  core: true },
  { key: 'acoustic', zh: '声学',     en: 'Acoustic' }
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
    modality: { la: 0, csi: 0, rgb: 1, lidar: 1, radar: 0, imu: 1, weather: .5, acoustic: 0 }
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
    modality: { la: 0, csi: 1, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 }
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
    modality: { la: 0, csi: 1, rgb: 1, lidar: .5, radar: 0, imu: 0, weather: .5, acoustic: 0 }
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
    modality: { la: 0, csi: 0, rgb: 1, lidar: 1, radar: 0, imu: .5, weather: .5, acoustic: 0 }
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
    modality: { la: 0, csi: 0, rgb: 1, lidar: 1, radar: 0, imu: .5, weather: .5, acoustic: 0 }
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
    modality: { la: 0, csi: .5, rgb: .5, lidar: 1, radar: 0, imu: 1, weather: .5, acoustic: 0 }
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
    modality: { la: 0, csi: 1, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
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
    modality: { la: 0, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 0, weather: 1, acoustic: 0 }
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
    modality: { la: .5, csi: .5, rgb: 1, lidar: 1, radar: 1, imu: .5, weather: .5, acoustic: 0 }
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
    modality: { la: 0, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 }
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
    modality: { la: .5, csi: 1, rgb: 1, lidar: .5, radar: 1, imu: .5, weather: .5, acoustic: 0 }
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
    modality: { la: .5, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 0, weather: 1, acoustic: 0 }
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
    modality: { la: 0, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 1, weather: 1, acoustic: 0 }
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
    modality: { la: 1, csi: 1, rgb: 1, lidar: 1, radar: 0, imu: 1, weather: .5, acoustic: 0 }
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
    modality: { la: 1, csi: .5, rgb: .5, lidar: 0, radar: .5, imu: 1, weather: 1, acoustic: 0 }
  },
  {
    id: 'dronerfa', name: 'DroneRFa', year: 2024,
    authors: '俞宁宁, 毛盛健, 周成伟, 孙国威, 史治国, 陈积明',
    org: '浙江大学信息与电子工程学院',
    venue: '电子与信息学报 46(4): 1147–1156 (2024)',
    site: 'https://www.scidb.cn/detail?dataSetId=34f0a91e8a544904998b8fdc44477380',
    siteAlt: 'https://jeit.ac.cn/web/data/getData?dataType=Dataset3',
    paper: 'https://jeit.ac.cn/cn/article/doi/10.11999/JEIT230570',
    focusZh: '大规模无人机射频信号低空探测（25类场景，3个ISM频段）',
    focusEn: 'Large-scale drone RF signals for low-altitude detection',
    modality: { la: 1, csi: .5, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'dronerfb-dir', name: 'DroneRFb-DIR', year: 2025,
    authors: '任俊宇, 俞宁宁, 周成伟, 史治国, 陈积明',
    org: '浙江大学信息与电子工程学院 / 工业控制技术全国重点实验室',
    venue: '电子与信息学报 47(3): 573–581 (2025)',
    site: 'https://www.scidb.cn/detail?dataSetId=84cf9101e739402784b1396783881202',
    paper: 'https://jeit.ac.cn/cn/article/doi/10.11999/JEIT240804',
    focusZh: '非合作无人机个体识别（6类×3架，含视距/非视距标注）',
    focusEn: 'Non-cooperative drone individual identification',
    modality: { la: 1, csi: .5, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'dronerfc-mm', name: 'DroneRFc-MM', year: 2026,
    authors: '虞涛菘, 杨倩倩, 胡卓, 李明锴, 吴嘉俊, 苏煜繁, 潘俊宇, 史治国, 陈积明',
    org: '浙江大学全省空域感知与自主无人系统重点实验室',
    venue: '电子与信息学报（网络优先出版, 2026）',
    site: 'https://www.scidb.cn/detail?dataSetId=0af05173ce5d45528ebd707d67f3d641',
    paper: 'https://jeit.ac.cn/cn/article/doi/10.11999/JEIT260889',
    focusZh: '反无人机多模态实测数据集（六类传感器同步观测城市低空目标）',
    focusEn: 'Anti-UAV multimodal measured dataset',
    modality: { la: 1, csi: .5, rgb: 1, lidar: 1, radar: 1, imu: 1, weather: 0, acoustic: 0 }
  },
  {
    id: 'em-134k', name: 'EM-134K', year: 2026,
    authors: 'Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun',
    org: 'Tsinghua University / BUPT / Tianjin University / IMECAS 等',
    venue: 'MERLIN, arXiv:2603.08174',
    site: 'https://em-merlin.github.io/',
    paper: 'https://arxiv.org/abs/2603.08174',
    focusZh: '电磁信号-文本配对预训练集（13.4万对，源自3500万信号）',
    focusEn: 'EM signal-text pair corpus for MLLM pre-training',
    modality: { la: 0, csi: .5, rgb: 0, lidar: 0, radar: .5, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'em-bench', name: 'EM-Bench', year: 2026,
    authors: 'Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, et al., Maosong Sun',
    org: 'Tsinghua University / BUPT / Tianjin University / IMECAS 等',
    venue: 'MERLIN, arXiv:2603.08174',
    site: 'https://em-merlin.github.io/',
    paper: 'https://arxiv.org/abs/2603.08174',
    focusZh: '电磁信号理解与推理评测基准（4200+问答，3级14子任务）',
    focusEn: 'EM signal perception & reasoning benchmark',
    modality: { la: 0, csi: .5, rgb: 0, lidar: 0, radar: .5, imu: 0, weather: 0, acoustic: 0 }
  },

  /* ---------- curator-verified additions ---------- */

  {
    id: 'great-msd', name: 'Great-MSD', year: 2025,
    authors: 'Kongwu Huang, Shiyi Mu, Jun Jiang, Yuan Gao, Shugong Xu',
    org: 'Shanghai University / Xi\'an Jiaotong-Liverpool University',
    venue: 'arXiv:2507.08716（Great-X 平台）',
    site: 'https://github.com/hkw-xg/Great-MCD',
    paper: 'https://arxiv.org/abs/2507.08716',
    focusZh: '单引擎仿真低空多模态通感一体化数据集（10万样本）',
    focusEn: 'Single-engine multimodal ISAC simulation dataset',
    modality: { la: 1, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 1, weather: 0, acoustic: 0 }
  },
  {
    id: 'sensiverse', name: 'Sensiverse', year: 2023,
    authors: 'Jiajin Luo, Baojian Zhou, Yang Yu, Ping Zhang, et al. (Huawei)',
    org: 'Huawei Technologies',
    venue: 'arXiv:2308.13789',
    site: 'https://sensiverse.github.io/',
    paper: 'https://arxiv.org/abs/2308.13789',
    focusZh: '多场景多频段ISAC感知信道数据集（3.5/10/26/100 GHz）',
    focusEn: 'Multi-scenario multi-band ISAC sensing channel dataset',
    modality: { la: .5, csi: 1, rgb: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'crosslayer-uav6g', name: 'Cross-layer UAV 6G', year: 2026,
    authors: 'Francesco Paolucci, Emilio Paolini, Massimo Satler, et al.',
    org: 'CNIT / Scuola Superiore Sant\'Anna',
    venue: 'Zenodo (2026)',
    site: 'https://zenodo.org/records/21468734',
    paper: 'https://doi.org/10.5281/zenodo.21468734',
    focusZh: '5G测试床无人机跨层（移动性-无线-应用）测量',
    focusEn: 'Cross-layer UAV measurements over a 5G testbed',
    modality: { la: 1, csi: .5, rgb: 0, lidar: 0, radar: 0, imu: 1, weather: 0, acoustic: 0 }
  },
  {
    id: 'aerpaw', name: 'AERPAW', year: 2024,
    authors: 'Ismail Guvenc, Mihail L. Sichitiu, Rudra Dutta, et al.',
    org: 'North Carolina State University',
    venue: 'AERPAW / Dryad / IEEE DataPort (2024–2026)',
    site: 'https://aerpaw.org/experiments/datasets/',
    paper: 'https://arxiv.org/abs/2510.08752',
    focusZh: '空地/空空信道探测、频谱监测与5G KPI实测合集（30+数据集）',
    focusEn: 'A2G/A2A channel sounding, spectrum & KPI datasets',
    modality: { la: 1, csi: .5, rgb: 0, lidar: 0, radar: .5, imu: 1, weather: 0, acoustic: 0 }
  },
  {
    id: 'lipase', name: 'LIPASE', year: 2025,
    authors: 'Yifei Sun, Chao Yu, Yan Luo, Tony Xiao Han, Haisheng Tan, Rui Wang, Francis C. M. Lau',
    org: 'The University of Hong Kong / SUSTech / Huawei 等',
    venue: 'IEEE OJ-COMS 6: 3779–3794 (2025)',
    site: 'https://github.com/yfsun0327/lipase-dataset',
    paper: 'https://doi.org/10.1109/OJCOMS.2025.3558430',
    focusZh: 'LTE下行信号+数字阵列的无人机被动雷达跟踪',
    focusEn: 'Passive UAV tracking with LTE downlink & digital arrays',
    modality: { la: 1, csi: .5, rgb: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'drone-swarm-sounding', name: 'Drone Swarm Sounding', year: 2025,
    authors: 'Julia Beuster, Carsten Andrich, Sebastian Giehl, Marc Miranda, et al.',
    org: 'Technische Universität Ilmenau',
    venue: 'arXiv:2507.12010',
    site: 'https://arxiv.org/abs/2507.12010',
    paper: 'https://arxiv.org/abs/2507.12010',
    focusZh: '无人机群多基地信道探测与雷达感知实测',
    focusEn: 'Multi-static channel sounding with a drone swarm',
    modality: { la: 1, csi: 1, rgb: 0, lidar: 0, radar: 1, imu: .5, weather: 0, acoustic: 0 }
  },
  {
    id: 'rfuav', name: 'RFUAV', year: 2025,
    authors: 'Rui Shi, Xiaodong Yu, Shengming Wang, Yijia Zhang, Lu Xu, Peng Pan, Chunlai Ma',
    org: 'Beijing University of Posts and Telecommunications 等',
    venue: 'arXiv:2503.09033',
    site: 'https://github.com/kitoweeknd/RFUAV',
    paper: 'https://arxiv.org/abs/2503.09033',
    focusZh: '37种无人机大规模射频指纹基准（约1.3 TB原始I/Q）',
    focusEn: 'Large-scale RF drone fingerprint benchmark',
    modality: { la: 1, csi: .5, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'cagedronerf', name: 'CageDroneRF', year: 2026,
    authors: 'Mohammad Rostami, Atik Faysal, Hongtao Xia, Hadi Kasasbeh, Ziang Gao, Huaxia Wang',
    org: 'Rowan University',
    venue: 'arXiv:2601.03302',
    site: 'https://arxiv.org/abs/2601.03302',
    paper: 'https://arxiv.org/abs/2601.03302',
    focusZh: '射频笼采集+合成增强的无人机检测与识别基准',
    focusEn: 'RF drone detection benchmark with synthetic augmentation',
    modality: { la: 1, csi: .5, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'skyev', name: 'SkyEV', year: 2026,
    authors: 'Jakub Mandula, Sebastian Heusinger, Julian Moosmann, Christian Vogt, Michele Magno',
    org: 'ETH Zurich',
    venue: 'arXiv:2607.18747',
    site: 'https://arxiv.org/abs/2607.18747',
    paper: 'https://arxiv.org/abs/2607.18747',
    focusZh: 'RGB-事件相机同步的无人机检测与跟踪数据集',
    focusEn: 'Synchronized RGB-event UAV detection & tracking',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'lss-fmcwr', name: 'LSS-FMCWR-1.0', year: 2024,
    authors: '陈小龙, 袁旺, 杜晓林, 于刚, 何肖阳, 关键, 汪兴海',
    org: '海军航空大学 / 烟台大学 / 济南大学',
    venue: '雷达学报 13(3): 539–553 (2024)',
    site: 'https://radars.ac.cn/article/doi/10.12000/JR23142',
    paper: 'https://radars.ac.cn/article/doi/10.12000/JR23142',
    focusZh: '多波段FMCW雷达低慢小目标探测（6类无人机微动特征）',
    focusEn: 'Multiband FMCW radar low-slow-small target dataset',
    modality: { la: 1, csi: 0, rgb: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'diat-msat', name: 'DIAT-µSAT', year: 2022,
    authors: 'Harish Chandra Kumawat, Mainak Chakraborty, A. Arockia Bazil Raj, Sunita Vikrant Dhavale',
    org: 'Defence Institute of Advanced Technology (DIAT), India',
    venue: 'IEEE GRSL 19: 6004005 (2022)',
    site: 'https://ieee-dataport.org/documents/diat-msat-micro-doppler-signature-dataset-small-unmanned-aerial-vehicle-suav',
    paper: 'https://doi.org/10.1109/LGRS.2021.3102039',
    focusZh: 'X波段连续波雷达小型无人机微多普勒特征（6类4849幅）',
    focusEn: 'Micro-Doppler signatures of small UAVs',
    modality: { la: 1, csi: 0, rgb: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'mathworks-radar-drone', name: 'MathWorks Radar Drone', year: 2025,
    authors: 'Zhongliang Guo, Samiur Rahman, Duncan Robertson',
    org: 'University of St Andrews',
    venue: 'Zenodo (2025)',
    site: 'https://doi.org/10.5281/zenodo.15224887',
    paper: 'https://doi.org/10.5281/zenodo.15224887',
    focusZh: '大规模雷达无人机分类微多普勒训练集（约10.9 TB）',
    focusEn: 'Large-scale radar drone classification dataset',
    modality: { la: 1, csi: 0, rgb: 0, lidar: 0, radar: 1, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'itu-aris-acoustic', name: 'ITU-ARIS Acoustic', year: 2026,
    authors: 'İhsan Mert Muhacıroğlu, Tayfun Akgül',
    org: 'Istanbul Technical University (ARIS Lab)',
    venue: 'IEEE SIU 2026 / Zenodo',
    site: 'https://zenodo.org/records/22682339',
    paper: 'https://doi.org/10.1109/SIU71813.2026.11636719',
    focusZh: '户外无人机声学探测数据集（无人机/背景两类，5491段）',
    focusEn: 'Outdoor acoustic drone detection dataset',
    modality: { la: 1, csi: 0, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 1 }
  },
  {
    id: 'dads', name: 'DADS', year: 2024,
    authors: '社区整理（schiffman / geronimobasso）',
    org: 'Community (Hugging Face)',
    venue: 'Hugging Face Datasets',
    site: 'https://huggingface.co/datasets/geronimobasso/drone-audio-detection-samples',
    siteAlt: 'https://huggingface.co/datasets/schiffman/drone-audio-detection-samples',
    paper: 'https://huggingface.co/datasets/geronimobasso/drone-audio-detection-samples',
    focusZh: '目前规模最大的公开无人机音频库（约18万条）',
    focusEn: 'Largest public drone audio database',
    modality: { la: 1, csi: 0, rgb: 0, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 1 }
  },
  {
    id: 'uavscenes', name: 'UAVScenes', year: 2025,
    authors: 'Sijie Wang, Siqi Li, Yawei Zhang, Shangshu Yu, Shenghai Yuan, et al., Lihua Xie, Wee Peng Tay',
    org: 'Nanyang Technological University / Shanghai Jiao Tong University 等',
    venue: 'ICCV 2025',
    site: 'https://github.com/sijieaaa/UAVScenes',
    paper: 'https://arxiv.org/abs/2507.22412',
    focusZh: '多模态无人机感知（图像+LiDAR逐帧语义标注，12万+帧）',
    focusEn: 'Multi-modal UAV perception benchmark',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 1, radar: 0, imu: 1, weather: 0, acoustic: 0 }
  },
  {
    id: 'drift', name: 'DrIFT', year: 2025,
    authors: 'Fardad Dadboud, Hamid Azad, Varun Mehta, Miodrag Bolic, Iraj Mantegh',
    org: 'University of Ottawa / NRC Canada',
    venue: 'WACV 2025',
    site: 'https://github.com/CARG-uOttawa/DrIFT',
    paper: 'https://openaccess.thecvf.com/content/WACV2025/html/Dadboud_DrIFT_Autonomous_Drone_Dataset_with_Integrated_Real_and_Synthetic_Data_WACV_2025_paper.html',
    focusZh: '域漂移下的视觉无人机检测（14个域，含背景分割图）',
    focusEn: 'Visual drone detection under domain shifts',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 }
  },
  {
    id: 'flyawarev2', name: 'FlyAwareV2', year: 2026,
    authors: 'Francesco Barbato, Matteo Caligiuri, Pietro Zanuttigh',
    org: 'University of Padova',
    venue: 'Signal Processing: Image Communication (2026)',
    site: 'https://medialab.dei.unipd.it/paper_data/FlyAwareV2',
    paper: 'https://doi.org/10.1016/j.image.2026.117483',
    focusZh: '城市场景理解的多模态跨域无人机数据（真实+合成，含天气昼夜；真实样本深度为单目估计）',
    focusEn: 'Multimodal cross-domain UAV urban-scene dataset',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 }
  },
  {
    id: 'anyvisloc', name: 'AnyVisLoc', year: 2025,
    authors: 'Yibin Ye, Xichao Teng, Shuo Chen, Zhang Li, Leqi Liu, Qifeng Yu, Tao Tan',
    org: 'National University of Defense Technology / Macao Polytechnic University',
    venue: 'arXiv:2503.10692',
    site: 'https://github.com/UAV-AVL/Benchmark',
    paper: 'https://arxiv.org/abs/2503.10692',
    focusZh: '低空多视角无人机绝对视觉定位基准（1.8万图像）',
    focusEn: 'Low-altitude multi-view UAV visual localization benchmark',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'lae-uav', name: 'LAE UAV', year: 2025,
    authors: 'Zhengru Fang, Zhenghao Liu, Jingjing Wang, Senkang Hu, et al., Yuguang Fang',
    org: 'City University of Hong Kong / Beihang University',
    venue: 'arXiv:2504.18317',
    site: 'https://github.com/fangzr/TOC-Edge-Aerial',
    paper: 'https://arxiv.org/abs/2504.18317',
    focusZh: 'GNSS拒止城市环境下的无人机视觉导航数据集（35.7万帧）',
    focusEn: 'UAV visual navigation in GNSS-denied urban LAE',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: .5, weather: 0, acoustic: 0 }
  },
  {
    id: 'neodrone', name: 'NeoDrone', year: 2025,
    authors: 'NeoDrone 团队（北京市数据知识产权登记）',
    org: '北京 · 低空智能系统',
    venue: '北京市数据知识产权登记 (2025)',
    site: 'https://github.com/playezio/NeoDrone',
    paper: 'https://webs.bjidex.com/sys-bsc-home/#/bscConsole/intellectualProperty/infoPublicity?action=1',
    focusZh: '无人机近地观测视觉感知（15万+图像，可见光-红外对齐）',
    focusEn: 'Near-earth drone observation vision dataset',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 1, acoustic: 0 }
  },
  {
    id: 'uav-lowalt-mot', name: 'UAV-LowAlt-MOT', year: 2025,
    authors: 'Xin Wang',
    org: 'Xidian University',
    venue: 'Science Data Bank / IEEE DataPort (2025)',
    site: 'https://www.scidb.cn/en/detail?dataSetId=239a78b317464fb9943387df112a0345',
    paper: 'https://doi.org/10.21227/2gt9-aa39',
    focusZh: '低空无人机对地多目标检测与跟踪（行人/车辆）',
    focusEn: 'Low-altitude UAV multi-target detection & tracking',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'visdrone', name: 'VisDrone', year: 2018,
    authors: 'AISKYEYE team（Zhu, Wen, Bian, Ling, Liang, et al.）',
    org: 'Tianjin University',
    venue: 'ECCV Workshops 2018 / TPAMI 2021',
    site: 'https://github.com/VisDrone/VisDrone-Dataset',
    paper: 'https://arxiv.org/abs/2001.07420',
    focusZh: '无人机视角目标检测与跟踪基准（14城市，260万+框）',
    focusEn: 'Drone-view object detection & tracking benchmark',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 }
  },
  {
    id: 'dota', name: 'DOTA', year: 2018,
    authors: 'Gui-Song Xia, Xiang Bai, Jian Ding, Zhen Zhu, Serge Belongie, et al.',
    org: 'Wuhan University',
    venue: 'CVPR 2018',
    site: 'https://captain-whu.github.io/DOTA/dataset.html',
    paper: 'https://arxiv.org/abs/1711.10398',
    focusZh: '航空影像目标检测（15/16类，18.8万实例）',
    focusEn: 'Aerial image object detection',
    modality: { la: .5, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
  },
  {
    id: 'uavdt', name: 'UAVDT', year: 2018,
    authors: 'Dawei Du, Yuankai Qi, Hongyang Yu, Yifan Yang, et al.',
    org: 'Chinese Academy of Sciences 等',
    venue: 'ECCV 2018 / IJCV 2019',
    site: 'https://sites.google.com/site/daviddo0323/projects/uavdt',
    siteAlt: 'https://sites.google.com/view/grli-uavdt/',
    paper: 'https://arxiv.org/abs/1804.00518',
    focusZh: '无人机车辆检测与跟踪基准（8万帧，含14类属性）',
    focusEn: 'UAV vehicle detection & tracking benchmark',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: .5, acoustic: 0 }
  },
  {
    id: 'uav123', name: 'UAV123', year: 2016,
    authors: 'Matthias Mueller, Neil Smith, Bernard Ghanem',
    org: 'King Abdullah University of Science and Technology (KAUST)',
    venue: 'ECCV 2016',
    site: 'https://cemse.kaust.edu.sa/ivul/datasets',
    paper: 'https://doi.org/10.1007/978-3-319-46448-0_27',
    focusZh: '低空无人机视角单目标跟踪基准（123段，11万帧）',
    focusEn: 'Low-altitude UAV single-object tracking benchmark',
    modality: { la: 1, csi: 0, rgb: 1, lidar: 0, radar: 0, imu: 0, weather: 0, acoustic: 0 }
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
    modality: { la: 1, csi: 1, rgb: 1, lidar: 1, radar: 1, imu: 1, weather: 1, acoustic: 0 },
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
  const core = MODALITIES.filter(m => m.core);
  $('#chips').innerHTML = core.map(m =>
    `<span class="chip" data-mod="${m.key}">${m.zh} <small>${m.en}</small></span>`).join('')
    + `<span class="chip" data-mod="acoustic">声学 <small>Acoustic</small></span>`;
}

function renderStats() {
  const total = DATASETS.length;
  const la = DATASETS.filter(d => d.modality.la > 0).length;
  const years = DATASETS.map(d => d.year);
  const span = `${Math.min(...years)}\u2013${Math.max(...years)}`;
  const core = MODALITIES.filter(m => m.core);
  const full = DATASETS.filter(d => core.every(m => d.modality[m.key] === 1)).length;
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
