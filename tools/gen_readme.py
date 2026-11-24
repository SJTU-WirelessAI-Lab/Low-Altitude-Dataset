# -*- coding: utf-8 -*-
"""Generate README.md from data/datasets.json (single source of truth)."""
import json, io

D = json.load(open('data/datasets.json', encoding='utf-8'))
mods = D['modalities']
core_keys = [m['key'] for m in mods]                    # 全部模态（含补充模态）
ds_all = D['datasets']

# 分组：低空相关（la > 0）在前，完全不含低空（la == 0）单独一表
CSI_DOT = {1: '\U0001F7E2', 0.5: '\U0001F7E1', 0: '\u26AA'}
RF_DOT = '\U0001F535'
RF_MARK = {1: '\U0001F535', 0.5: '\U0001F539', 0: '\u00B7'}
CSI_TXT = {1: '有 CSI（完整 MIMO 信道）',
           0.5: '部分 CSI（实测信道测量，但未给完整 MIMO CSI）',
           0: '无 CSI'}
RF_TXT = {1: '有 —— 提供原始射频采集（原始 I/Q、频谱、信号片段等）',
          0.5: '部分 —— 仅射频侧派生指标（KPI、RSRP、频谱统计等），无原始波形',
          0: '无'}


def sig_dot(x):
    """矩阵 / 总览表名称前的圆点：CSI 优先，其次射频信号"""
    v = x['modality']['csi']
    if v in (1, 0.5):
        return CSI_DOT[v]
    return RF_DOT if x['modality'].get('rf', 0) > 0 else CSI_DOT[0]


def csi_txt(x):
    return CSI_TXT.get(x['modality']['csi'], '无 CSI')


def rf_txt(x):
    return RF_TXT.get(x['modality'].get('rf', 0), RF_TXT[0])

ACCESS_LABEL = {'open': '开放下载', 'preview': '仅预览', 'register': '需注册',
                'request': '需申请', 'pending': '未发布'}
ACCESS_TXT = {
    'open': '官方页面公开提供下载',
    'preview': '只公开部分 / 预览子集，完整数据待发布',
    'register': '需在托管平台注册（免费）账号后下载',
    'request': '需邮件 / 表单申请，授权后获取',
    'pending': '官方标注即将发布，当前无法获取',
}

SOURCE_LABEL = {'real': '实测', 'mixed': '混合', 'sim': '仿真'}
SOURCE_TXT = {
    'real': '真实传感器 / 外场采集',
    'mixed': '真实采集与仿真 / 合成增强并用',
    'sim': '射线追踪、数字孪生或渲染器生成，无真实采集',
}

def src(x):
    return SOURCE_LABEL.get(x.get('source'), '实测')

def acc(x):
    return x.get('access', 'open')

def csi(v):
    return CSI_DOT.get(v, '\u26AA')

def year_key(x):
    return (x['year'], x['name'])

def sort_group(items):
    return sorted([x for x in items if not x.get('self')], key=year_key) \
         + [x for x in items if x.get('self')]

LA  = sort_group([x for x in ds_all if x['modality']['la'] > 0])
GEN = sort_group([x for x in ds_all if x['modality']['la'] == 0])
GROUPS = [('低空相关数据集', LA), ('通用 / 上游基准数据集', GEN)]

DESC = {
 'kitti': '自动驾驶感知领域经典基准，提供双目相机、LiDAR 与 GPS 数据。',
 'deepmimo': '基于 3D 射线追踪的可配置毫米波/大规模MIMO信道数据集生成框架。',
 'viwi': '面向视觉辅助无线通信的深度学习数据集框架。',
 'opv2v': '基于 CARLA 的车车协同感知基准数据集与融合流水线。',
 'dairv2x': '大规模真实车路协同 3D 目标检测数据集。',
 'eflash': '真实毫米波 V2X 场景下同步 LiDAR/相机/GPS 的多模态波束选择数据集（约 23 GB）。',
 'waird': '覆盖 40+ 城市真实地图的无线AI研究信道数据集，含稀疏/密集两种部署场景。',
 'm3sc': '混合多模态感知与通信一体化数据集，物理空间与电磁空间精确对齐。',
 'deepsense6g': '大规模真实世界感知-通信一体化多模态数据集，含 100 万+ 样本。',
 'sdcd': '合成数字城市数据集，93 万张高清 RGB 图像与完美深度图，覆盖 6 种天气。',
 'deepverse6g': '数字孪生数据集生成框架，融合无线射线追踪与逼真视觉/雷达/LiDAR 仿真。',
 'synthsom': '面向机器联觉(SoM)的空地多链路协同合成数据集，含 5 个典型场景。',
 'multimodal-wireless': '基于 CARLA + Sionna 的大规模开源数据集，约 16.1 万帧，CSI 与 5 类传感器模态 100 Hz 同步。',
 'multimodal-nf': '面向近场低空 XL-MIMO 的无线数据集，同步近场 CSI 与 RGB/LiDAR/GPS 多模态数据。',
 'pml-cellulareye': '基于商用 5G/5G-A 基站设备的实测多模态数据集，含 IQ、可见光/红外视频与气象数据。CSI 以距离域形式随 I/Q 归档，用官方工具包做一次 FFT 即还原为子载波×慢时间的复数 CSI；但采集按 30 波束分时扫描、每波束单 OFDM 符号单接收通道，不含 MIMO 天线对维度，故记为部分 CSI。数据托管于 ScienceDB（DOI: 10.57760/sciencedb.018bv，约 2.7 TB，CC BY-NC 4.0），工具包与格式说明见官网与备用链接。',
 'dronerfa': '依托 USRP-2955 采集的大规模无人机射频信号数据集，覆盖城市户外 9 类、室内 15 类及背景参照 1 类，涉及 915 MHz / 2.4 GHz / 5.8 GHz 三个 ISM 频段，每类不少于 12 个片段、每片段 1 亿采样点以上，以原始 I/Q 存储并带机型、探测距离、频段标签。2026 年入选 ScienceDB「科学数据奖」十佳数据集。',
 'dronerfb-dir': '面向非合作无人机**个体识别**的射频数据集，含 6 种机型、每型 3 架不同个体及 1 类背景信号；2.4–2.48 GHz、80 MHz 采样，原始 I/Q 存储，共 4690 个片段（每片段 4 M 以上采样点），含个体编号与视距/非视距标注，并已划分训练/测试集。',
 'dronerfc-mm': '城市低空场景下**六类传感器同步采集**的反无人机多模态数据集——云台相机、广角相机、射频天线（USRP-2955 + VERT2450，2.45 GHz）、激光雷达（RoboSense EM4）、毫米波雷达（Arbe Phoenix，77–81 GHz）与传声器阵列；覆盖 6 种消费级 DJI 机型，飞行数据总时长超 30 分钟，含机型、三维位置、姿态与速度细粒度标注，并附样本处理代码。',
 'em-134k': '面向多模态大模型的**电磁信号-文本配对预训练集**，由 3500 万+ 真实与仿真信号（10 个子集：调制识别、参数估计、协议识别、雷达/通信干扰及抗干扰等）程序化生成 134,107 条指令微调样本，采用类 LLaVA 的单轮对话格式。',
 'em-bench': '电磁信号**理解与推理评测基准**，含 4200+ 条专家校验问答，按 3 个层级、14 个子任务组织：感知（信号刻画、干扰识别、片段检测）与推理（雷达/通信场景下的干扰与抗干扰策略生成）。',
 'lambda': '低空多模态基础数据集，通过高保真数字孪生流水线生成，同步 RGB、深度、LiDAR、IMU、UAV 位姿、CSI 与雷达资源，覆盖城市/郊区/园区场景与晴雨雪雾天气。',
 'great-msd': '基于 Great-X 平台（在 Unreal Engine 内重构 Sionna 射线追踪）生成的低空多模态通感一体化数据集，10 万样本同步 CSI、RGB、深度、雷达、LiDAR 与三维坐标/轨迹，并附基于 CSI 的无人机三维定位基线。',
 'sensiverse': '华为发布的 ISAC 感知信道数据集，覆盖 25+ 城市、100+ 场景，总量 15 TB 级，含 3.5/10/26/100 GHz 四个频段，支持三维环境重建与单/双基地动目标检测。',
 'crosslayer-uav6g': '5G 测试床中以无人机为移动终端采集的跨层数据集，同步 UAV 移动性测量、O-RAN 分离式 DU/CU/UE 无线指标与应用层（合成流量、视频流）性能指标。',
 'aerpaw': '北卡州立大学 AERPAW 平台的公开数据集族（30+ 个），涵盖空地/空空信道探测与路损、宽频段频谱监测、5G-NSA KPI、LoRaWAN 传播与 TDOA 定位等，多数托管于 Dryad / IEEE DataPort。',
 'lipase': '基于 LTE 下行信号与数字阵列的无人机被动雷达跟踪实测数据集，提供距离-多普勒图与 GPS 轨迹，面向被动雷达与 ISAC 研究。',
 'drone-swarm-sounding': '伊尔梅瑙工业大学 Oryx 数据，配套 Drone Swarm Sounding 论文。公开多静态节点间的 SISO 复信道频响和位置记录，支持空空与空地链路分析。按公开数据格式计为部分 CSI。',
 'rfuav': '大规模射频无人机检测识别基准，约 1.3 TB 原始 I/Q，覆盖 37 种机型与多档 SNR，并附预处理与评测工具。',
 'cagedronerf': '由真实采集与系统化合成增强（SNR 控制、干扰注入、频移）构成的射频无人机检测识别基准，覆盖大量当代机型，支持分类、开集识别与检测。',
 'skyev': '面向反无人机检测与跟踪的 RGB-事件相机同步数据集，采集未压缩、高同步的双模态数据，覆盖相机自运动、小目标尺度等真实挑战。',
 'lss-fmcwr': '基于 Ku 波段与 L 波段 FMCW 雷达采集的 6 类无人机回波数据，面向低慢小目标检测与高分辨微动特征提取，并附局部极大值同步提取变换方法。',
 'diat-msat': 'X 波段连续波雷达采集的 6 类空中小目标微多普勒特征图像数据集（4849 幅），含 RC 飞机、三叶/长叶旋翼、四旋翼、仿生鸟与迷你直升机等。',
 'mathworks-radar-drone': '圣安德鲁斯大学与 MathWorks 发布的雷达无人机分类微多普勒训练集，约 10.9 TB，面向雷达无人机分类。',
 'itu-aris-acoustic': '户外无人机声学探测数据集，单次连续采集约 3.12 小时，切分为 5491 段 1 秒音频（无人机 4491 / 背景 1000），并附防泄漏的分组与划分协议。',
 'dads': '目前规模最大的公开无人机音频库（约 18 万条 16 kHz 音频），含「有/无无人机」两类，用于声学无人机检测。',
 'uavscenes': '基于 MARS-LVIG 扩展的大规模多模态无人机数据集，提供逐帧图像与 LiDAR 语义标注及精确 6-DoF 位姿，支持分割、深度估计、定位、场景识别与新视角合成等任务。',
 'drift': '面向域漂移下视觉无人机检测的数据集，含 14 个域（视角/真实-合成/季节/恶劣天气），并提供背景分割图以支持按背景评估。',
 'flyawarev2': '面向城市场景理解的多模态跨域无人机数据集，融合真实与合成影像，提供 RGB/深度/语义标注与天气、昼夜变化。合成样本的深度由 CARLA/UE 渲染引擎的 3D 几何直接导出；真实样本（训练集取自 VisDrone、测试集取自 UAVid）原本无深度标注，改用 **Marigold 单目深度估计**生成，因此真实部分深度为**估计值而非传感器实测**，且统一逐样本归一化到 [0,1] 后绝对尺度已被去除。',
 'anyvisloc': '低空多视角条件下的无人机绝对视觉定位基准，含 1.8 万幅多场景多高度图像与 2.5D 参考图，并统一评测主流 AVL 方法。',
 'lae-uav': '面向低空经济中 GNSS 拒止城市环境的无人机视觉导航数据集，基于 CARLA 仿真，含 35.7 万帧对齐的 RGB/深度/语义多视角图像与精确位姿。',
 'neodrone': '面向低空无人机视觉感知的近地观测数据集，含 15 万+ 图像、150 万+ 标注实例与 7176 对时空对齐的可见光-红外图像，附 15 项结构化元数据。',
 'uav-lowalt-mot': '低空无人机对地多目标检测与跟踪基准，含行人、车辆等地物目标的带框与身份标注图像与视频序列，突出小目标、遮挡与尺度变化等挑战。',
 'visdrone': '天津大学 AISKYEYE 团队构建的无人机视角目标检测与跟踪基准，含 288 段视频（26 万+ 帧）与 1 万+ 静态图像，覆盖 14 个城市。',
 'dota': '武汉大学发布的航空影像目标检测数据集，含 15/16 类、约 18.8 万实例，图像分辨率最高达 2 万像素级。',
 'uavdt': '无人机车辆检测与跟踪基准，含约 8 万帧带框与 14 类属性（天气、飞行高度、视角、遮挡等）标注。',
 'uav123': '低空无人机视角单目标跟踪基准，含 123 段视频、11 万+ 帧，全部标注直立边界框，并含长期跟踪子集 UAV20L。',
 'mamimo-uav': 'KU Leuven 在校园内采集的无人机–Massive MIMO 基站三维非平稳信道数据集：ESAT 楼前停车场架设 8×8 矩形贴片阵列基站指向天空，无人机沿多条轨迹飞行并发射导频序列，据此估计空地信道，采样点带 GPS 位置标注；约 15.8 GB，CC-BY-NC-4.0。',
 'mamimo-a2g-uav': 'KU Leuven 校园环境下的无人机–64 天线 Massive MIMO 基站空对地 CSI 数据集：基站位于距 25 m 高楼 17 m、距 25 m 树线 12 m 的停车场，无人机按预设航迹机控飞行，提供**带 GPS 位置标注的信道状态信息**；约 46.3 GB，CC-BY-NC-4.0。',
 'ku-leuven-drone-rf': 'KU Leuven 与比利时皇家军事学院（RMA）联合发布的无人机射频数据集：在 RMA 半电波暗室内用 USRP X310 采集，100 MSps 采样、中心频率 2.44 GHz、全向天线，无人机与遥控器距接收天线 7 m，以 .mat 存储原始 I/Q；约 43.5 GB，CC-BY-NC-4.0。',
 'lund-drone-audio': '隆德大学（数学科学中心）与 SAAB 联合发布的无人机声学探测数据集：12 元麦克风阵列配合 9 台固定相机（合计 280° 视场）与 PTZ 云台，在 Ljungbyhed 试验场用多种旋翼与固定翼无人机开展真实飞行实验，用到达方向（DOA）方法仅凭无人机自噪声即可定位至数百米，数据集含真实录音与无人机**真值位置**；约 17.7 GiB。',
 'drone-rf-mendeley': '卡塔尔大学发布的射频无人机数据库：用两台 NI-USRP2943R 接收机（2.4 GHz 频段，各 40 MHz 瞬时带宽）拦截无人机与遥控器之间的通信链路，覆盖 3 型无人机在关机/开机连接/悬停/飞行/录像等飞行模式下的射频采样，共 227 个片段（454 个 csv 文件，约 40 GB），并含无无人机的背景射频记录。',
 'drone-detection-dregon': '瑞典哈尔姆斯塔德大学与瑞典国防军联合构建的多传感器无人机探测数据集（DREGON）：在 3 座瑞典机场以云台自动跟踪采集，含 365 段红外视频、285 段可见光视频（合计 203328 个标注帧）与 90 段音频（无人机/直升机/背景），目标类别含 3 型无人机及鸟类、飞机、直升机等易混目标，并按行业 DRI（检测-识别-辨认）准则随传感器-目标距离分档（近/中/远，最大 200 m）。',
 'anti-uav300': '中国科学院大学与北方电子设备研究所发布的反无人机多模态跟踪基准：318 对高清 RGB 与热红外视频（合计 58 万余个人工标注包围框），6 种消费级机型、昼夜两种光照与建筑/云/树木等多样背景，两模态为非对齐采集；文中给出 DFSC 训练策略与 40 余种跟踪器的基准评测，并附可见性、遮挡、快速运动、尺度变化等属性标签。',
 'mmaud': '南洋理工大学 ARIS 实验室发布的反无人机多模态基准：在屋顶与停车场上以**俯视视角**采集 DJI Mavic2/3、Phantom4、Avata、M300 等 5 型消费级无人机的双 3D LiDAR（Conic + Peripheral）、双时间同步鱼眼相机、毫米波雷达与四路麦克风阵列数据，并以 **Leica 全站仪**生成高精度三维真值；面向无人机检测、机型分类、跟踪与轨迹估计，刻意保留重型机械等强背景噪声，V1 飞行高度约 30 m 以内，V2/V3（停车场场景）最高达 100 m。',
 'isac-uav-ilmenau': '伊尔梅瑙工业大学 EMS 组的 3.75 GHz 多基地 ISAC 实测库：以 3 部接收机同时采集无人机回波与发射信号，共 60 个场景（360 个文件、约 200 GB，完整版约 4 TB），每个场景含信道传递函数 H(f,t)、目标时延与多普勒估计、收发天线位置，以及机载 RTK 提供的真值位置/速度/加速度；航线按 15 m 与 30 m 两档飞行高度、5 m/s 与 11 m/s 两档最大速度组合，便于分离多径遮挡与时延-多普勒估计性能。数据需邮件申请解密口令，CC BY-NC-ND 4.0。',
 'multifly': '弗劳恩霍夫 IVI 联合慕尼黑工业大学、剑桥大学与因戈尔施塔特应用技术大学发布的真实低空多模态感知数据集：仅人工标注 115 帧 RGB，即借助共享三维几何把标签迁移到其余 RGB、热成像图像以及 8.4 亿个 LiDAR 点与 340 万个雷达点，得到 4 个郊区场景、2 档飞行高度、15 类语义的 17,272 个同步样本，跨模态标注与留出人工标注平均一致率 89.93%；另附标定与 GNSS-RTK/IMU 数据。**截至 2026-11 数据与代码仍标注为即将发布**，仓库目前仅有项目页与示意图。',
 'a2a-uav': '南京航空航天大学联合香港科技大学发布的**空对空**反无人机多模态数据集：以无人机挂载 RGB-热成像云台、全景相机、频谱仪与毫米波雷达，在 3 个室外场地对 13 款商用机型的 15 架目标无人机昼夜采集，共 105,294 个时间对齐样本（210,588 幅 RGB/全景图像、209,539 个人工校核框），并给出按采集组分隔的训练/验证/测试划分。热成像与频谱图均为处理后显示产品，不含标定温度/功率；雷达点云无逐点目标身份。200 样本预览子集已公开，完整数据待论文接收后发布。',
 'drone-acoustic-16ch': '东南大学发布的 16 通道平面十字麦克风阵列无人机被动声学监测数据集：以 SMD-CR16 阵列采集 200 段 DJI Flip 悬停、28 段现场背景与 45 段非无人机声音对照，合计 273 条记录、4,368 个 48 kHz/16 bit WAV 文件、7.221 小时；无人机子集覆盖 4 个方位、5–30 m 的 4 档高度与 5–70 m 的 6 档水平距离，含安静的户外与临路城市两类环境，并附麦克风坐标、记录级 JSON 元数据、数据划分与可复现的检测/方位分类基线（检测平衡准确率 0.917、四类方位分类 macro-F1 0.910）。',
 'uav-flow': '北京航空航天大学联合新加坡国立大学与香港中文大学 MMLab 发布的语言引导无人机飞行基准（Flow / Flying-on-a-Word 任务）：含 30,692 条由持证飞行员在 3 座校园（约 5.02 km²）遥控采集的真实轨迹与 10,109 条 UAV-Flow-Sim 仿真轨迹，覆盖平移、旋转、悬停、后退、环绕、靠近、穿过、降落 8 类动作、100 余小时第一视角视频；每条样本对齐自然语言指令、机载 FPV 图像、6-DoF 位姿与 RTK 定位及连续动作，并提供闭环仿真评测协议。真值采集平台为 DJI Mavic 3T RTK。',
 'luvira': '隆德大学「视觉-射频-音频」（LuViRA）三模态同步室内定位数据集：RGB-D 相机、5G Massive MIMO（LuMaMi）射频系统与分布式麦克风阵列在同一环境下同步采集（真值 100 Hz、相机 30/15 fps、无线 100 Hz、音频 96 kHz），含 89 条轨迹并附各模态基线。**场景为室内，不含低空/UAV**，故归入通用/上游基准。',
 'u6g-wise': '上海智联信息技术研究院与上海大学联合发布的上6GHz频段实测多模态数据集（U6G-WISE：Wireless, Imaging, and Spatial Sensing of Environments）：44000+ 样本、20 余类室内场景与无线配置，同步无线信道测量、场景图像与 LiDAR 点云，面向 6G 无线 AI 从仿真走向实测、从单模态走向多模态的环境-信道联合建模。V1 于 2026-11-23 上线（CC BY 4.0），官方表示将持续扩充。**场景为室内，不含低空/UAV**，故归入通用/上游基准。',
 'huangpu-river': '上海交通大学 Wireless AI 团队构建的黄浦江水域-低空一体化多模态感知仿真数据集：以 Unreal Engine 5 还原黄浦江三维场景，配合 ASVSim 模拟岸基基站与船舶的运动、水动力与多传感器输出，再由 Sionna RT 依据同帧位姿做电磁射线追踪，生成**多频段复数 CSI 及其传播路径参数**（保留未归一化的原始复信道系数，便于跨频段信道建模与对比）。模态含 RGB、深度、GPS/位姿、LiDAR 点云、雷达点云，以及晴/雨/云/雾/雪与不同时段等天气条件；提供相遇与追踪两类运动场景，并要求按船号 + 同一帧号跨模态读取。约 375 GB，V1 于 2026-09-20 发布、V3 于 2026-10-30 更新（CC BY 4.0）。**当前支持水面船舶与低空无人机场景**；UAV 支持状态依据维护者于 2026-11-24 的确认更新。',
 'tsms-drone': '韩国航空大学（Korea Aerospace University）发布的时间同步多传感器无人机数据集：将 24 GHz FMCW 雷达（Analog Devices Eval-TinyRad）、2.495 GHz CW 雷达与 2.4 GHz 射频接收机（均为 ADALM-Pluto SDR 平台）物理共址安装，由单一 MATLAB 主循环控制三路并行采集，靠结构化文件名 `Model_Distance_Index.mat` 保证跨传感器对齐，未使用 GPS/PPS 硬件触发。目标含 DJI Inspire 2、Mavic 2 Pro、Phantom 4 Pro、Matrice 30 四款机型与一个四面角反射器参照物，悬停高度 1.5 m，距离 2–30 m 每 2 m 一档共 15 个距离点，每个条件重复 500 次（分 5 个 100 次子集交替采集机型以防过拟合）。FMCW 侧输出预处理后的距离-多普勒图（161×4096）并附少量原始 ADC 样本与重建代码，CW 与 RF 侧保留原始复 I/Q（分别为 16,384 与 262,144 样本）。数据约 2026-03 发布于 Figshare（CC BY 4.0），附 MATLAB 加载/预处理/融合与 GoogLeNet 分类基线代码。**与 DroneRF 系列、LSS-FMCWR 的关键区别在于跨传感器的时间同步采集**，可直接用于雷达-射频融合检测。',
 'a2g-cir': '南京航空航天大学朱秋明团队发布的 3.6 GHz 空地信道实测 CIR 数据集：中心频率 3.6 GHz、带宽 61.44 MHz，覆盖运动场（SportsField）、农田（Farmland）与水域（OverWater）三类场景，各含 10 m 与 15 m 两档飞行高度。每个场景-高度组合提供功率时延谱（PDP，含时延轴与时间轴两个维度）、路径损耗与 RMS 时延扩展的 `.mat` 文件，另附 `.xlsx` 汇总表与 `guidemanual.pdf` 说明。**测量为实测信道探测而非射线追踪仿真，是本索引中最接近真实低空传播环境的一类数据**；但只给 CIR/PDP 级结果、未提供完整 MIMO 天线对维度的 CSI，故信道级数据记为「部分 CSI」。数据于 2025-08-26 发布（V2），CC BY 4.0。',
 'a2g-cir-rt': '南京航空航天大学朱秋明团队发布的空地 CIR 实测与射线追踪对照数据集：标称覆盖城市（Urban）、郊区（Suburban）、农田（Farmland）与水域（Over-water）四类场景，频段 1.4/3.2/4.9 GHz，飞行高度 25/50/100 m，带宽 50 MHz，同时给出实测 CIR 与射线追踪结果，便于比较数字孪生与真实传播的偏差。**需注意当前公开文件只含 100 m 高度下 1.4 GHz 与 3.2 GHz 两档**（每个 `.xlsx` 按场景分文件，单文件 33–269 MB），4.9 GHz 与 25/50 m 两档尚未随数据发布，故获取方式记为「仅预览」。V1 于 2026-11-16 发布，CC BY 4.0。',
 'uav-mm-bench': '意大利国家研究委员会 ISTI 发布的无人机无线通信多模态仿真基准：用 Wireless InSite X3D 射线追踪在 11 个乡村/郊区/城市区域（美国田纳西、加州 Palo Alto、意大利比萨西区、韩国首尔、曼哈顿等）生成 2/3.5/28 GHz 三个频段的信道数据，覆盖静态与移动场景及 G2A/A2G/A2A 三类链路。每个场景输出五类 CSV——空中节点与地面节点空间元数据、链路级统计（多径数、接收功率、平均 ToA、时延扩展、LOS/NLOS/Blocked 状态）、路径级参数（各多径功率、相位、精确 ToA、到达/离开方位角与俯仰角、交互编码）与射线交互序列，另附 GeoJSON/STL/OBJ/DXF 多格式三维环境几何。**该数据集完全基于仿真（作者自述 "entirely simulation-based"），不含原始 CSI、CIR 或任何实测波形**，提供的是几何感知的传播描述符；天线为 0 dBi 全向基线，无波束赋形与极化维度。数据托管于 Zenodo（CC BY 4.0），无需商业仿真软件即可读取。',
 'ata': '武警工程大学信息工程学院发布的空空反无人机微小目标视觉-语言跟踪基准（ATA：Air-to-Air）：50 段真实飞行视频序列合计 38,094 帧，统一 1920×1080、30 fps、总时长约 21 分钟，训练集 40 段（uav-m1~m22、uav-s1~s18）、测试集 10 段；每序列提供逐帧边界框（`groundtruth.txt`）与视频级英文描述（`language.txt`），支持纯框（BBox-only）与语言辅助两种任务设定。目标平均仅占画面 0.03%，呈现显著的微小目标特性，并覆盖双动态扰动（跟踪平台与目标同时运动）、复杂背景切换与同类无人机干扰三类难点；论文另评测 8 个代表性跟踪器并验证相邻帧时序增强模块 AFTE。**截至 2026-11 其 GitHub 仓库仅有说明页，明确标注待数据整理完成后发布，故获取方式记为「未发布」**，引用前需先核仓库状态。',
 'aerpaw-aadm': '北卡州立大学 AERPAW 团队发布的自主空中数据中继（AADM，Autonomous Aerial Data Mule）竞赛多模态无线测量集：单包 7.7 GB，含比赛所用的 USRP 测量、无人机遥测、Keysight 射频传感器的位置估计、LoRa 接收机链路质量与 Fortem 雷达测量，同时覆盖第一阶段数字孪生环境与第二阶段室外试验场的最终试飞。任务设定为一架自主无人机充当数据中继，在多基站之间规划航迹与接入决策以在限定时间内最大化下载量，故数据天然带有**多小区关联、调度与空地传播**的标注价值，也可用于数字孪生到真实世界的迁移研究。该集有独立 Dryad DOI（2026-03-12 发布，V4），可视作 AERPAW 体系下的独立子集引用。',
 'tricross-d2d': '武警工程大学信息工程学院发布的可跨场景、跨视角、跨天气迁移的空对空无人机检测基准（TriCross-D2D）：由 DJI Mavic 3T 在单一有限区域内对 DJI Avata 2、Mini 3 Pro、Mini 4 Pro 三型消费级目标机采集，13 段 RGB 视频共 23,403 帧，按间隔抽帧得到 7,045 张基准图像（`Source_train` 4,045、`Target_train` 2,000、`Target_val` 1,000），合计 9,771 个单类 UAV 水平框实例。三重域偏移由 4 类背景语境（操场、树林、建筑、工地）× 3 类视角（低角度、平视、鸟瞰）× 2 类天气（晴天实拍、基于大气散射模型合成的雾）耦合而成，按视频片段级划分以避免帧级泄漏，支持仅用源域标签的 UDA 与使用部分目标域标签的 SSDA 两种协议；作者的单因子实验显示**视角变化带来的域间差距最大**。极小/微小/小目标合计占 73.8%，双标注一致性平均 IoU > 0.75。**当前 GitHub 仓库仅含 32 对图像-标注样例（约 17 MB），README 明确标注待完整发布**，故获取方式记为「仅预览」；另有 115 网盘镜像（论文给出访问密码）。',
 'tmrgbt-d2d': '武警工程大学发布的空对空 RGB-热成像双模态检测数据集（TMRGBT-D2D）：由 DJI Mavic 3T 的广角可见光相机（1920×1080）与非制冷 VOx 长波红外相机（640×512，8–14 μm，NETD < 50 mK）并行采集 19 对视频、两模态各 21,312 帧，共 94,323 个标注框（RGB 55,086、红外 39,237），夜间场景占 38.8%，并覆盖静止/移动平台、正前视/俯视/仰视与天空、森林、建筑、工地、操场、道路六类背景。**其最具辨识度的特性是「时间同步、空间错位」**：两路视频同一时刻出发、帧率同为 30 fps，但因传感器视差与视场差异，目标在两模态中的位置与视角不同且随景深变化，常规单应性变换无法全局配准（只能对齐固定景深），因此作者对两个模态**分别独立标注**而非只标单模态。快速运动帧（相邻帧位移 > 10 像素）1,830 个；目标尺度极小，平均面积约占图像 0.02%，微小目标在可见光中占 80.4%。**当前 GitHub 仓库仅含 1 段样例序列（1 个 mp4 + 843 个 VOC xml，约 11 MB），README 标注待完整发布**，故记为「仅预览」。',
 'cpd-uav': '武警工程大学发布的无人机视角「与环境视觉融合人员」检测基准（CPD-UAV，Wilderness Search and Rescue 场景）：以 DJI Mavic 3T 在 20–80 m 高度、变化斜视角下模拟搜救扫描航迹采集 15 段视频，每 10 帧抽 1 帧并统一到 1920×1080，共 1,061 张图像（野外实拍 929 张 + 网络补充 132 张），按 848/106/107 划分训练、验证、测试。地形背景为丛林 46%、草地 42%、雪地 6.5%、沙漠 5.5%（雪地与沙漠为网络补充图像，用于抑制绿/棕色调先验）；目标是身着低对比度户外装备、采取蹲伏或藏于枝叶下姿态的人员，属**人工伪装**而非自然生物伪装，传统 COD 数据集存在明显域偏移。**标注为像素级二值掩码**（ISAT + Segment Anything 半自动标注后人工精修，抽检 30 张平均 IoU 90.89%），不是检测框；目标面积绝大多数 < 2.5%，呈长尾分布。**仅公开部分**：GitHub 仓库只放 31 对图像-掩码样例，完整 1,061 张需向通讯作者提交正式申请并逐案审批，限人道主义非商业研究用途（论文附 DURC 双重用途声明，故限制完整数据访问）。作者自述当前缺少雾、雨、极端低光与季节变化。',
}

# Markdown 无法给单元格上底色，但可以放图片：用 20×20 的图标表达覆盖状态
ICON = {
    1:   ('✓', 'assets/icon-yes.svg'),
    0.5: ('△', 'assets/icon-part.svg'),
    0:   ('×', 'assets/icon-none.svg'),
}
def mk(v):
    alt, src = ICON.get(v, ICON[0])
    return f'![{alt}]({src})'

out = io.StringIO()
w = out.write

w('# 低空数据集索引 · Low-Altitude Datasets\n\n')
w('面向**低空经济**与**UAV通感一体化（ISAC）**研究的开源数据集汇编，系统收集并展示已有数据集，'
  '统一给出**名称、官方网站链接、发布年份、作者/机构**以及**模态覆盖对比**。\n\n')
w('清单以 **[LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication](https://arxiv.org/abs/2607.03826)**'
  '（arXiv:2607.03826）表1 为基准，并逐一核实各数据集的官方主页与论文链接；'
  '此外补充收录了 ISAC 仿真与实测、射频/雷达探测、声学感知、无人机视觉与多模态感知等方向的公开数据集。\n\n')
w('> 总览、矩阵与详情均按**是否涉及低空 / UAV 场景**拆为两张表：'
  '**低空相关数据集**与**通用 / 上游基准数据集**（后者完全不含低空场景）。'
  f'低空部分另按**信道级数据**用颜色区分：{csi(1)} 有 CSI、{csi(.5)} 部分 CSI、'
  f'{RF_DOT} 仅射频信号（波形、频谱或射频指标，无 CSI）、{csi(0)} 均无。\n\n')
w('> 🌐 **在线浏览**：[sjtu-wirelessai-lab.github.io/Low-Altitude-Dataset]'
  '(https://sjtu-wirelessai-lab.github.io/Low-Altitude-Dataset/)'
  '（可搜索、可筛选、含对比矩阵）。\n')
w('> 📦 **结构化数据**：[data/datasets.json]'
  '(https://cdn.jsdelivr.net/gh/SJTU-WirelessAI-Lab/Low-Altitude-Dataset@main/data/datasets.json)'
  '（jsDelivr CDN，返回 `application/json`，可直接 fetch；CDN 有缓存延迟，'
  '数据更新以仓库内同路径文件为准）。\n\n')

_chart_la = len(LA)
_chart_csi = sum(1 for x in LA if x['modality'].get('csi') == 1)
_chart_y0 = min(x['year'] for x in LA) - 1
_chart_y1 = max(x['year'] for x in ds_all)
w(f'**增长趋势**：当前索引覆盖至 {_chart_y1} 出版年，低空相关索引条目累计 **{_chart_la}** 个，'
  f'其中 **{_chart_csi}** 个提供完整 MIMO 信道 CSI。'
  f'下图按出版年分组累计：实线为全部低空相关索引条目，虚线为含完整 CSI 者。\n\n')
w(f'![低空索引条目累计数量（{_chart_y0}–{_chart_y1}）](assets/timeline.svg)\n\n')
w('---\n\n')
w('## 目录\n\n')
w('- [数据集总览](#数据集总览)\n- [模态覆盖对比矩阵](#模态覆盖对比矩阵)\n- [数据集详情](#数据集详情)\n'
  '- [收录说明](#收录说明)\n- [贡献方式](#贡献方式)\n- [引用](#引用)\n\n---\n\n')

total = len(ds_all)
la = len(LA)
gen = len(GEN)

w('## 数据集总览\n\n')
w(f'共 **{total}** 条索引记录（含本文 LAMBDA），时间跨度 **2012–2026**；'
  f'其中**低空相关 {la} 个**、**通用 / 上游基准 {gen} 个**。\n\n')
w('**信道级数据标注**：'
  f'{csi(1)} 有 CSI（完整 MIMO 信道）、{csi(.5)} 部分 CSI（实测信道测量，但未给完整 MIMO CSI）、'
  f'{RF_DOT} 仅射频信号（波形、频谱或射频指标，数据本身不含 CSI）、{csi(0)} 均无。'
  '**CSI 与射频信号是两类不同模态**，不能互相替代：前者是信道估计结果，后者是接收机采到的原始波形 / 频谱。\n\n')

_acc_n = {k: sum(1 for x in ds_all if acc(x) == k) for k in ACCESS_LABEL}
w('**获取方式**：默认标为 **开放下载**（官方页面公开提供，卡片上不另加徽章）；'
  '另有 4 种受限情形会单独标注——**仅预览**（只公开子集）、**需注册**（平台账号）、'
  '**需申请**（邮件 / 表单审批）、**未发布**（官方标注即将发布）。'
  f'当前 {total} 条中：开放下载 {_acc_n["open"]}、仅预览 {_acc_n["preview"]}、'
  f'需注册 {_acc_n["register"]}、需申请 {_acc_n["request"]}、未发布 {_acc_n["pending"]}。\n\n')

_src_n = {k: sum(1 for x in ds_all if x.get('source') == k) for k in SOURCE_LABEL}
_src_la = {k: sum(1 for x in LA if x.get('source') == k) for k in SOURCE_LABEL}
_src_gen = {k: sum(1 for x in GEN if x.get('source') == k) for k in SOURCE_LABEL}
w('**数据来源**：**实测**（真实传感器 / 外场采集）、**混合**（真实与合成并用）、'
  '**仿真**（射线追踪 / 数字孪生 / 渲染器生成）。'
  f'当前 {total} 条中实测 {_src_n["real"]}、混合 {_src_n["mixed"]}、仿真 {_src_n["sim"]}；'
  f'其中低空相关 {la} 条为实测 {_src_la["real"]}、混合 {_src_la["mixed"]}、仿真 {_src_la["sim"]}。\n\n')

for label, group in GROUPS:
    w(f'### {label}（{len(group)} 个）\n\n')
    if label.startswith('通用'):
        w('以下数据集**完全不含低空 / UAV 场景**，多为地面视角感知或纯信道 / 电磁数据集，'
          '作为上游经典基准一并列出，不与低空场景条目混排。\n\n')
    w('| # | 数据集 | 来源 | CSI | 射频 | 年份 | 作者 | 机构 | 官网 |\n')
    w('|---|--------|:----:|:---:|:----:|------|------|------|------|\n')
    for i, x in enumerate(group, 1):
        star = ' ⭐' if x.get('self') else ''
        rf_mark = RF_MARK.get(x['modality'].get('rf', 0), RF_MARK[0])
        w(f"| {i} | **{x['name']}**{star} | {src(x)} | {csi(x['modality']['csi'])} | {rf_mark} | {x['year']} | "
          f"{x['authors']} | {x['org']} | [链接]({x['site']}) |\n")
    w('\n')

_limited = [x for x in ds_all if acc(x) != 'open']
if _limited:
    w(f'**获取受限的 {len(_limited)} 条**（其余 {total - len(_limited)} 条可在官网直接下载）：\n\n')
    w('| 数据集 | 年份 | 获取方式 | 说明 |\n|---|---|---|---|\n')
    for x in sorted(_limited, key=lambda v: (v['year'], v['name'])):
        w(f"| **{x['name']}** | {x['year']} | {ACCESS_LABEL[acc(x)]} | {ACCESS_TXT[acc(x)]} |\n")
    w('\n')

w('---\n\n')
w(f'## 模态覆盖对比矩阵\n\n')
w('模态覆盖对照 LAMBDA 论文表1（并含补充收录的数据集）：'
  '![包含](assets/icon-yes.svg) 包含；![部分支持](assets/icon-part.svg) 有限或部分支持；'
  '![缺失或不适用](assets/icon-none.svg) 缺失或不适用。'
  f'数据集名称前的圆点表示**信道级数据**（{csi(1)} 完整 CSI / {csi(.5)} 部分 CSI / '
  f'{RF_DOT} 仅射频信号 / {csi(0)} 均无）。\n\n')
w('> **阅读提示**：仿真集的模态覆盖系统性高于实测集——仿真器可任意开模态，'
  '实测受设备配置与多传感器硬同步限制。若关注可直接复现的实测数据，'
  '建议同时看「来源」列与「CSI」列，两者叠加后的可选面比总表窄得多。\n\n')
w('> **关于图标**：Markdown 表格无法填充单元格底色（GitHub、GitLab、VS Code 都会过滤 `style` 与 `bgcolor`），'
  '故每格用一个 20×20 的图标表示覆盖情况，配色与网页版一致：'
  '深绿 = 包含、琥珀 = 部分支持、浅灰 = 缺失或不适用。\n\n')
hdr = ' | '.join(m['zh'] for m in mods)
sep = ' | '.join(':----:' for _ in mods)

for label, group in GROUPS:
    w(f'### {label}（{len(group)} 个）\n\n')
    w(f'| 数据集 | 年份 | {hdr} | 主要关注点 |\n')
    w(f'|--------|------|{sep}|------------|\n')
    for x in group:
        cells = ' | '.join(mk(x['modality'][m['key']]) for m in mods)
        nm = f"{x['name']} ⭐" if x.get('self') else x['name']
        if x.get('self'):
            nm = f"**{nm}**"
        focus = f"**{x['focusZh']}**" if x.get('self') else x['focusZh']
        w(f"| {sig_dot(x)} {nm} | {x['year']} | {cells} | {focus} |\n")
    w('\n')

w('---\n\n')

w('## 数据集详情\n\n')
for label, group in GROUPS:
    w(f'### {label}（{len(group)} 个）\n\n')
    for i, x in enumerate(group, 1):
        star = ' ⭐' if x.get('self') else ''
        w(f"#### {i}. {x['name']} ({x['year']}){star}  {sig_dot(x)}\n")
        w(f"- **作者**：{x['authors']}\n")
        w(f"- **机构**：{x['org']}\n")
        if x.get('paper'):
            w(f"- **出处**：{x['venue']} · [论文]({x['paper']})\n")
        else:
            w(f"- **出处**：{x['venue']}\n")
        site_line = f"- **官网**：[主链接]({x['site']})"
        if x.get('siteAlt'):
            site_line += f" ｜ [备用]({x['siteAlt']})"
        w(site_line + '\n')
        w(f"- **CSI**：{csi_txt(x)}\n")
        w(f"- **射频信号**：{rf_txt(x)}\n")
        w(f"- **数据来源**：{src(x)} —— {SOURCE_TXT.get(x.get('source'), '')}\n")
        w(f"- **获取方式**：{ACCESS_LABEL[acc(x)]} —— {ACCESS_TXT[acc(x)]}\n")
        w(f"- **说明**：{DESC.get(x['id'], '')}\n\n")
w('---\n\n')

w('## 收录说明\n\n')
w('- **统计单位**：总览、网页与趋势图均按索引条目计数。合集及另有独立引用的子集可各占一条（如 AERPAW 和 AERPAW AADM），因此条目可能覆盖同一批数据。仅列在合集下的子集链接不计数，同一索引条目的版本更新不另计。\n')
w('- **模态标注**：`1` 包含 / `0.5` 有限或部分支持 / `0` 缺失或不适用。\n')
w('- **低空 / 通用分区**：`la = 0` 即完全不含低空 / UAV 场景的数据集，统一归入「通用 / 上游基准数据集」表，'
  '不与低空相关条目混排。`la = 0.5` 表示数据或构建平台**部分支持**低空场景——例如仅有平台级扩展能力、'
  '当前发布版本仅部分覆盖飞行场景，或低空仅为若干场景之一；这类条目按 `la > 0` 一并归入低空组。\n')
w('- **获取方式（`access` 字段）**：`open` 为默认档——官方页面公开提供下载，页面卡片不另加徽章；'
  '`preview`（仅预览子集）、`register`（需平台账号）、`request`（需申请审批）、`pending`（尚未发布）'
  '四档会在卡片上标出，并集中列于「获取受限」表。该字段只记录**获取门槛**，'
  '不等同于许可条款——各数据集的许可证（CC BY、CC BY-NC、自定义学术用途等）请以官网为准。\n')
w('- **数据来源（`source` 字段）**：`real` 实测——真实传感器 / 外场采集；`mixed` 混合——真实采集与合成增强并用；'
  '`sim` 仿真——射线追踪、数字孪生或渲染器生成，无真实采集。判定口径看**底层数据是否来自真实传感器采集**：'
  '由实测 I/Q 处理出的微多普勒谱图仍算实测（如 MathWorks Radar Drone），纯渲染 / 射线追踪生成的一律算仿真'
  '（LAMBDA、Sensiverse、DeepVerse 6G、SynthSoM、Great-MSD、Multimodal-NF、LAE UAV、UAV Wireless MM-Bench），'
  '真实与合成拼接的算混合（DrIFT、FlyAwareV2、UAV-Flow、CageDroneRF、A2G CIR + RT、AERPAW AADM）。每条都必须显式声明，'
  '`gen.js` 生成时会校验缺失或非法取值。\n')
w('- **信道级数据颜色标注**：'
  f'{csi(1)} 有 CSI —— 提供完整 MIMO 信道 CSI（含仿真射线追踪与实测信道）；'
  f'{csi(.5)} 部分 CSI —— 有实测信道测量（波束 SNR、功率时延谱、下行信道传递函数等），但未给完整 MIMO CSI；'
  f'{RF_DOT} 仅射频信号 —— 数据是接收机采到的射频波形 / 频谱（原始 I/Q、距离-多普勒图等）或射频侧指标，**本身不含 CSI**，'
  '矩阵中 `CSI` 列为 `×`、`射频信号` 列为 `✓` 或有限支持；'
  f'{csi(0)} 均无 —— 既无 CSI 也无射频采集数据。'
  '同一颜色同时体现在总览表、矩阵表名称前的圆点与详情条目。\n')
w('- **核心模态与补充模态**：核心模态为低空、CSI、RGB/深度、LiDAR、雷达、IMU/GPS、天气/时间 7 类；'
  '**射频信号**、**红外**与**声学**为补充模态（页面筛选条中以虚线边框区分）。'
  '射频信号见于 DroneRF 系列、RFUAV、CageDroneRF、KU Leuven Drone RF、EM-134K / EM-Bench、LIPASE、'
  'TSMS-Drone（雷达与射频同步采集）、AERPAW AADM、AERPAW、PML-CellularEye（后两条同时含 CSI）'
  '与 Cross-layer UAV 6G、LACN、TalTech UAV 5G mmWave（仅射频侧指标）；'
  '红外见于 Anti-UAV300、Drone-detection、NeoDrone 与 PML-CellularEye（部分）；'
  '声学见于 DroneRFc-MM、Drone-detection、LuViRA、ITU-ARIS Acoustic、DADS 与 Lund UAV Audio。\n')
w('- **年份**：以 LAMBDA 论文表1 为准；个别数据集论文发表年与数据集发布年不同，已在详情中注明出处。\n')
w('- **链接**：优先给出数据集官方主页；如官网不稳定，另附备用镜像或代码仓库链接。\n')
w('- **范围**：聚焦低空/UAV 通感一体化相关，同时收录必要的上游经典基准（如 KITTI、DeepMIMO 等）、'
  '低空安防常用的射频/雷达探测数据集（DroneRF 系列、RFUAV、LSS-FMCWR 等）与电磁信号理解数据集（EM-134K / EM-Bench）。\n')
w('- **射频信号（`rf`）与 CSI 分开标注**：`CSI` 只记信道估计结果，`rf` 记射频采集数据——'
  '`1` 提供原始波形 / 频谱（I/Q、距离-多普勒图、信号片段），`0.5` 仅射频侧派生指标（KPI、RSRP、频谱统计），'
  '`0` 无。DroneRF 系列、RFUAV、CageDroneRF、KU Leuven Drone RF、DroneRF (Mendeley)、'
  'EM-134K / EM-Bench、LIPASE 等只采射频、不做信道估计，故 `CSI` 为 `0`、`射频信号` 为 `1`；'
  'AERPAW 与 PML-CellularEye 两者兼有，两列同时标注。EM-134K / EM-Bench 同时含雷达与通信域信号，'
  '`雷达` 列另标为「有限支持」。\n')
w('- **已知访问限制**：UAVDT 官网（Google Sites）与 DADS 托管页（Hugging Face）在部分网络环境下不可达，'
  '如无法访问可改用各自的镜像或联系数据发布方。\n\n')

w('## 贡献方式\n\n')
w('欢迎补充遗漏的数据集或修正失效链接：\n\n')
w('1. Fork 本仓库；\n')
w('2. 在 `assets/app.js` 的 `DATASETS` 数组中新增/修改条目，并运行 `node tools/gen.js` 、`python tools/gen_readme.py` 和 `python tools/gen_chart.py` 同步 JSON、README 与趋势图；\n')
w('3. 提交 Pull Request，或直接开 Issue 说明（数据集名称、官网、年份、作者、模态覆盖）。\n\n')

w('## 引用\n\n')
w('若本索引对你的研究有帮助，请引用 LAMBDA 论文：\n\n')
w('```bibtex\n')
w('@article{zhou2026lambda,\n')
w('  title   = {LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication},\n')
w('  author  = {Zhou, Lin and Rao, Peichuan and Zhang, Chenshuo and Mo, Jianhua\n')
w('             and Sun, Shu and Chen, Zhiyong and Tao, Meixia},\n')
w('  journal = {arXiv:2607.03826},\n')
w('  year    = {2026}\n')
w('}\n')
w('```\n\n')
w('使用具体数据集时，请另行引用其对应论文或数据论文（见各条目「出处」）。\n\n')

w('## License\n\n')
w('本索引的整理内容以 CC BY 4.0 发布；各数据集本身的使用请遵循其各自许可协议。\n')

open('README.md', 'w', encoding='utf-8', newline='\n').write(out.getvalue())
print('README.md written. datasets =', total, '| low-altitude =', la)

# Wireless types are a separate index, not additional modalities.
with open('README.md', 'a', encoding='utf-8') as f:
    f.write('\n## 无线数据类型索引\n\n字段 `wirelessTypes` 独立于模态矩阵；标签只列已确认的格式，可能还有待核实的格式。字段 `wirelessStatus` 区分 `tagged`（已有标签）、`unverified`（涉及无线或雷达，类型待核实）、`none`（按索引的模态和记录范围无适用无线类型）。网页可筛选这两类空标签条目。RF KPI 不代表原始 I/Q；CIR/PDP 不自动等同于完整 MIMO CSI。\n\n| 类型 | 数据集 |\n|---|---|\n')
    kinds = sorted({k for d in ds_all for k in d.get('wirelessTypes', [])})
    for k in kinds:
        names = ', '.join(d['name'] for d in ds_all if k in d.get('wirelessTypes', []))
        f.write(f'| {k} | {names} |\n')
    f.write('\nAERPAW 子集保留在父条目下，不增加总数：\n\n')
    for d in ds_all:
        for subset in d.get('subsets', []):
            f.write(f"- [{subset['name']}]({subset['url']})\n")
    f.write('\n本地检查：运行 `node tools/test_data.js`。CI 会检查重新生成的 JSON、README 与趋势图是否和仓库版本一致。\n')
