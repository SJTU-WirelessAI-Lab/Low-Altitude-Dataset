# 低空数据集索引 · Low-Altitude Datasets

面向**低空经济**与**UAV通感一体化（ISAC）**研究的开源数据集汇编，系统收集并展示已有数据集，统一给出**名称、官方网站链接、发布年份、作者/机构**以及**模态覆盖对比**。

清单以 **[LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication](https://arxiv.org/abs/2607.03826)**（arXiv:2607.03826）表1 为基准，并逐一核实各数据集的官方主页与论文链接；此外补充收录了浙江大学史治国团队的 DroneRF 系列与 MERLIN 论文的电磁信号数据集。

> 🌐 **在线浏览**：打开 [`index.html`](index.html)（可搜索、可筛选、含对比矩阵）。
> 📦 **结构化数据**： [`data/datasets.json`](data/datasets.json)。

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

共 **21** 个数据集（含本文 LAMBDA 及补充收录的 5 个），时间跨度 **2012–2026**。

| # | 数据集 | 年份 | 作者 | 机构 | 官网 |
|---|--------|------|------|------|------|
| 1 | **KITTI** | 2012 | Andreas Geiger, Philip Lenz, Raquel Urtasun | Karlsruhe Institute of Technology | [链接](https://www.cvlibs.net/datasets/kitti/) |
| 2 | **DeepMIMO** | 2019 | Ahmed Alkhateeb | Arizona State University | [链接](https://www.deepmimo.net/) |
| 3 | **ViWi** | 2020 | M. Alrabeiah, A. Hredzak, Z. Liu, A. Alkhateeb | Arizona State University | [链接](https://www.viwi-dataset.net/) |
| 4 | **OPV2V** | 2022 | Runsheng Xu, Hao Xiang, Zhengzhong Tu, et al. | University of California, Los Angeles | [链接](https://mobility-lab.seas.ucla.edu/opv2v/) |
| 5 | **DAIR-V2X** | 2022 | Haibao Yu, Yizhen Luo, Mao Shu, et al. | Tsinghua University AIR / Baidu | [链接](https://air.tsinghua.edu.cn/DAIR-V2X/index.html) |
| 6 | **E-FLASH** | 2022 | Jerry Gu, Batool Salehi, Debashri Roy, K. R. Chowdhury | Northeastern University | [链接](https://ieee-dataport.org/documents/e-flash) |
| 7 | **WAIR-D** | 2022 | Yourui Huangfu, Jian Wang, Shengchen Dai, et al. | Huawei Wireless Technology Lab / Zhejiang University | [链接](https://www.mobileai-dataset.com/html/default/yingwen/DateSet/1590994253188792322.html?index=1) |
| 8 | **M3SC** | 2023 | Xiang Cheng, Ziwei Huang, Lu Bai, et al. | Peking University (PCNI Lab) | [链接](http://pcni.pku.edu.cn/dataset_1.html) |
| 9 | **DeepSense 6G** | 2023 | Ahmed Alkhateeb et al. | Arizona State University | [链接](https://www.deepsense6g.net/) |
| 10 | **SDCD** | 2024 | Jihao Li, Jincheng Hu, Yanjun Huang, et al. | University of Southampton / Tongji University | [链接](https://github.com/ReparkHjc/SDCD) |
| 11 | **DeepVerse 6G** | 2024 | Umut Demirhan, Abdelrahman Taha, Ahmed Alkhateeb | Arizona State University | [链接](https://deepverse6g.net/) |
| 12 | **DroneRFa** | 2024 | 俞宁宁, 毛盛健, 周成伟, 孙国威, 史治国, 陈积明 | 浙江大学 | [链接](https://www.scidb.cn/detail?dataSetId=34f0a91e8a544904998b8fdc44477380) |
| 13 | **SynthSoM** | 2025 | Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, et al. | Peking University / Shandong University | [链接](https://github.com/ZiweiHuang96/SynthSoM) |
| 14 | **DroneRFb-DIR** | 2025 | 任俊宇, 俞宁宁, 周成伟, 史治国, 陈积明 | 浙江大学 | [链接](https://www.scidb.cn/detail?dataSetId=84cf9101e739402784b1396783881202) |
| 15 | **Multimodal-Wireless** | 2025 | Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li | Southeast University / Imperial College London | [链接](https://le-liang.github.io/mmw) |
| 16 | **DroneRFc-MM** | 2026 | 虞涛菘, 杨倩倩, 胡卓, 等, 史治国, 陈积明 | 浙江大学 | [链接](https://www.scidb.cn/detail?dataSetId=0af05173ce5d45528ebd707d67f3d641) |
| 17 | **EM-134K** | 2026 | Junyu Shen, Zhendong She, Chenghanyu Zhang, et al. | Tsinghua University / BUPT / Tianjin University 等 | [链接](https://em-merlin.github.io/) |
| 18 | **EM-Bench** | 2026 | Junyu Shen, Zhendong She, Chenghanyu Zhang, et al. | Tsinghua University / BUPT / Tianjin University 等 | [链接](https://em-merlin.github.io/) |
| 19 | **Multimodal-NF** | 2026 | Mengyuan Li, Qianfan Lu, Jiachen Tian, et al. | Southeast University | [链接](https://lmyxxn.github.io/6GXLMIMODatasets/) |
| 20 | **PML-CellularEye** | 2026 | Ziguo Zhong, Yongming Huang, Haizhou Hou, et al. | Purple Mountain Laboratories / Southeast University | [链接](https://github.com/ffxu1024/CellularEye_web) |
| 21 | **LAMBDA** ⭐ | 2026 | Lin Zhou, Peichuan Rao, Chenshuo Zhang, Jianhua Mo, Shu Sun, Zhiyong Chen, Meixia Tao | Shanghai Jiao Tong University | [链接](https://doi.org/10.57760/sciencedb.36052) |

---

## 模态覆盖对比矩阵

对照 LAMBDA 论文表1：**✓** 包含；**△** 有限或部分支持；**×** 缺失或不适用。

| 数据集 | 年份 | 低空 | CSI | RGB/深度 | LiDAR | 雷达 | IMU/GPS | 天气/时间 | 主要关注点 |
|--------|------|:----:|:---:|:--------:|:-----:|:----:|:-------:|:---------:|------------|
| KITTI | 2012 | × | × | ✓ | ✓ | × | ✓ | △ | 地面自动驾驶感知基准 |
| DeepMIMO | 2019 | × | ✓ | × | × | × | × | △ | 可配置射线追踪信道 |
| ViWi | 2020 | × | ✓ | ✓ | △ | × | × | △ | 视觉辅助无线通信 |
| OPV2V | 2022 | × | × | ✓ | ✓ | × | △ | △ | 车车协同感知 |
| DAIR-V2X | 2022 | × | × | ✓ | ✓ | × | △ | △ | 真实车路协同感知 |
| E-FLASH | 2022 | × | △ | △ | ✓ | × | ✓ | △ | 实测毫米波V2X波束选择 |
| WAIR-D | 2022 | × | ✓ | × | × | × | × | × | 真实地图上的无线AI信道 |
| M3SC | 2023 | × | ✓ | ✓ | ✓ | ✓ | × | ✓ | 混合多模态通感一体化数据 |
| DeepSense 6G | 2023 | △ | △ | ✓ | ✓ | ✓ | △ | △ | 实测多模态无线测量 |
| SDCD | 2024 | × | × | ✓ | × | × | × | ✓ | 合成数字城市RGB-深度鲁棒性 |
| DeepVerse 6G | 2024 | △ | ✓ | ✓ | △ | ✓ | △ | △ | 数字孪生无线数据集 |
| DroneRFa | 2024 | ✓ | △ | × | × | × | × | × | 大规模无人机射频信号低空探测 |
| SynthSoM | 2025 | △ | ✓ | ✓ | ✓ | ✓ | × | ✓ | 空地协同机器联觉(SoM)合成数据集 |
| DroneRFb-DIR | 2025 | ✓ | △ | × | × | × | × | × | 非合作无人机个体识别 |
| Multimodal-Wireless | 2025 | × | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | V2X多模态通信与感知 |
| DroneRFc-MM | 2026 | ✓ | △ | ✓ | ✓ | ✓ | ✓ | × | 反无人机多模态实测数据集 |
| EM-134K | 2026 | × | △ | × | × | △ | × | × | 电磁信号-文本配对预训练集 |
| EM-Bench | 2026 | × | △ | × | × | △ | × | × | 电磁信号理解与推理评测基准 |
| Multimodal-NF | 2026 | ✓ | ✓ | ✓ | ✓ | × | ✓ | △ | 近场低空XL-MIMO |
| PML-CellularEye | 2026 | ✓ | △ | △ | × | △ | ✓ | ✓ | 实测基站侧低空ISAC数据 |
| **LAMBDA** ⭐ | 2026 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **低空多模态通感一体化基础数据集** |

---

## 数据集详情

### 1. KITTI (2012)
- **作者**：Andreas Geiger, Philip Lenz, Raquel Urtasun
- **机构**：Karlsruhe Institute of Technology (KIT)
- **出处**：CVPR 2012 · [DOI](https://doi.org/10.1109/CVPR.2012.6248074)
- **官网**：https://www.cvlibs.net/datasets/kitti/
- **说明**：自动驾驶感知领域经典基准，提供双目相机、LiDAR 与 GPS 数据。

### 2. DeepMIMO (2019)
- **作者**：Ahmed Alkhateeb
- **机构**：Arizona State University
- **出处**：ITA Workshop 2019 · [arXiv:1902.06435](https://doi.org/10.48550/arXiv.1902.06435)
- **官网**：https://www.deepmimo.net/
- **说明**：基于 3D 射线追踪的可配置毫米波/大规模MIMO信道数据集生成框架。

### 3. ViWi (2020)
- **作者**：Muhammad Alrabeiah, Andrew Hredzak, Zhenhao Liu, Ahmed Alkhateeb
- **机构**：Arizona State University
- **出处**：IEEE VTC2020-Spring · [DOI](https://doi.org/10.1109/VTC2020-Spring48590.2020.9128579)
- **官网**：https://www.viwi-dataset.net/
- **说明**：面向视觉辅助无线通信的深度学习数据集框架。

### 4. OPV2V (2022)
- **作者**：Runsheng Xu, Hao Xiang, Zhengzhong Tu, Xin Xia, Ming-Hsuan Yang, Jiaqi Ma
- **机构**：University of California, Los Angeles (UCLA)
- **出处**：ICRA 2022 · [DOI](https://doi.org/10.1109/ICRA46639.2022.9812038)
- **官网**：https://mobility-lab.seas.ucla.edu/opv2v/
- **说明**：基于 CARLA 的车车协同感知基准数据集与融合流水线。

### 5. DAIR-V2X (2022)
- **作者**：Haibao Yu, Yizhen Luo, Mao Shu, Yiyi Huo, et al.
- **机构**：Tsinghua University AIR / Baidu
- **出处**：CVPR 2022 · [DOI](https://doi.org/10.1109/CVPR52688.2022.02067)
- **官网**：https://air.tsinghua.edu.cn/DAIR-V2X/index.html
- **说明**：大规模真实车路协同 3D 目标检测数据集。

### 6. E-FLASH (2022)
- **作者**：Jerry Gu, Batool Salehi, Debashri Roy, Kaushik R. Chowdhury
- **机构**：Northeastern University
- **出处**：IEEE Communications Magazine 60(11) · [DOI](https://doi.org/10.1109/MCOM.002.2200028)
- **官网**：https://ieee-dataport.org/documents/e-flash
- **说明**：真实毫米波 V2X 场景下同步 LiDAR/相机/GPS 的多模态波束选择数据集（约 23 GB）。

### 7. WAIR-D (2022)
- **作者**：Yourui Huangfu, Jian Wang, Shengchen Dai, Rong Li, et al.
- **机构**：Huawei Wireless Technology Lab / Zhejiang University
- **出处**：IEEE/CIC ICCC 2022 · [IEEE Xplore](https://ieeexplore.ieee.org/document/9880684)
- **官网**：https://www.mobileai-dataset.com/
- **说明**：覆盖 40+ 城市真实地图的无线AI研究信道数据集，含稀疏/密集两种部署场景。

### 8. M3SC (2023)
- **作者**：Xiang Cheng, Ziwei Huang, Lu Bai, Haotian Zhang, et al.
- **机构**：Peking University (PCNI Lab)
- **出处**：China Communications 20(11) · [DOI](https://doi.org/10.23919/JCC.fa.2023-0268.202311)
- **官网**：http://pcni.pku.edu.cn/dataset_1.html
- **说明**：混合多模态感知与通信一体化数据集，物理空间与电磁空间精确对齐。

### 9. DeepSense 6G (2023)
- **作者**：Ahmed Alkhateeb et al.
- **机构**：Arizona State University
- **出处**：IEEE Communications Magazine 61(9) · [DOI](https://doi.org/10.1109/MCOM.006.2200730)
- **官网**：https://www.deepsense6g.net/
- **说明**：全球首个大规模真实世界感知-通信一体化多模态数据集，含 100 万+ 样本。

### 10. SDCD (2024)
- **作者**：Jihao Li, Jincheng Hu, Yanjun Huang, Zheng Chen, Bingzhao Gao, Jingjing Jiang, Yuanjian Zhang
- **机构**：University of Southampton / Tongji University
- **出处**：Scientific Data 11:301 · [DOI](https://doi.org/10.1038/s41597-024-03025-5)
- **官网**：https://github.com/ReparkHjc/SDCD
- **说明**：合成数字城市数据集，93 万张高清 RGB 图像与完美深度图，覆盖 6 种天气。

### 11. DeepVerse 6G (2024)
- **作者**：Umut Demirhan, Abdelrahman Taha, Ahmed Alkhateeb
- **机构**：Arizona State University
- **出处**：Preprint / IEEE DataPort · [DOI](https://doi.org/10.21227/nk8m-6087)
- **官网**：https://deepverse6g.net/ ｜ [WI-Lab 数据集页](https://www.wi-lab.net/datasets-page/)
- **说明**：数字孪生数据集生成框架，融合无线射线追踪与逼真视觉/雷达/LiDAR 仿真。

### 12. DroneRFa (2024)
- **作者**：俞宁宁, 毛盛健, 周成伟, 孙国威, 史治国, 陈积明
- **机构**：浙江大学信息与电子工程学院
- **出处**：电子与信息学报 46(4): 1147–1156 · [DOI](https://jeit.ac.cn/cn/article/doi/10.11999/JEIT230570)
- **官网**：[ScienceDB](https://www.scidb.cn/detail?dataSetId=34f0a91e8a544904998b8fdc44477380) ｜ [学报数据页](https://jeit.ac.cn/web/data/getData?dataType=Dataset3)
- **说明**：依托 USRP-2955 采集的大规模无人机射频信号数据集，覆盖城市户外 9 类、室内 15 类及背景参照 1 类，涉及 915 MHz / 2.4 GHz / 5.8 GHz 三个 ISM 频段，每类不少于 12 个片段、每片段 1 亿采样点以上，以原始 I/Q 存储并带机型、探测距离、频段标签。2026 年入选 ScienceDB「科学数据奖」十佳数据集。

### 13. SynthSoM (2025)
- **作者**：Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, Mingran Sun, et al.
- **机构**：Peking University / Shandong University
- **出处**：Scientific Data 12:819 · [DOI](https://doi.org/10.1038/s41597-025-05065-x)
- **官网**：https://github.com/ZiweiHuang96/SynthSoM ｜ [figshare 数据](https://figshare.com/s/3c0203236d3ae2eed872)
- **说明**：面向机器联觉(SoM)的空地多链路协同合成数据集，含 5 个典型场景。

### 14. DroneRFb-DIR (2025)
- **作者**：任俊宇, 俞宁宁, 周成伟, 史治国, 陈积明
- **机构**：浙江大学信息与电子工程学院 / 工业控制技术全国重点实验室
- **出处**：电子与信息学报 47(3): 573–581 · [DOI](https://jeit.ac.cn/cn/article/doi/10.11999/JEIT240804)
- **官网**：[ScienceDB](https://www.scidb.cn/detail?dataSetId=84cf9101e739402784b1396783881202)
- **说明**：面向非合作无人机**个体识别**的射频数据集，含 6 种机型、每型 3 架不同个体及 1 类背景信号；2.4–2.48 GHz、80 MHz 采样，原始 I/Q 存储，共 4690 个片段（每片段 4 M 以上采样点），含个体编号与视距/非视距标注，并已划分训练/测试集。

### 15. Multimodal-Wireless (2025)
- **作者**：Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li
- **机构**：Southeast University / Imperial College London
- **出处**：arXiv:2511.03220 · ICC 2026
- **官网**：https://le-liang.github.io/mmw
- **说明**：基于 CARLA + Sionna 的大规模开源数据集，约 16.1 万帧，CSI 与 5 类传感器模态 100 Hz 同步。

### 16. DroneRFc-MM (2026)
- **作者**：虞涛菘, 杨倩倩, 胡卓, 李明锴, 吴嘉俊, 苏煜繁, 潘俊宇, 史治国, 陈积明
- **机构**：浙江大学全省空域感知与自主无人系统重点实验室 / 控制学院 / 国际联合学院
- **出处**：电子与信息学报（网络优先出版）· [DOI](https://jeit.ac.cn/cn/article/doi/10.11999/JEIT260889)
- **官网**：[ScienceDB](https://www.scidb.cn/detail?dataSetId=0af05173ce5d45528ebd707d67f3d641)
- **说明**：城市低空场景下**六类传感器同步采集**的反无人机多模态数据集——云台相机、广角相机、射频天线（USRP-2955 + VERT2450，2.45 GHz）、激光雷达（RoboSense EM4）、毫米波雷达（Arbe Phoenix，77–81 GHz）与传声器阵列；覆盖 6 种消费级 DJI 机型，飞行数据总时长超 30 分钟，含机型、三维位置、姿态与速度细粒度标注，并附样本处理代码。

### 17. EM-134K (2026)
- **作者**：Junyu Shen, Zhendong She, Chenghanyu Zhang, Yuchuang Sun, Luqing Luo, Dingwei Tan, Zonghao Guo, Bo Guo, Zehua Han, Wupeng Xie, Yaxin Mu, Peng Zhang, Peipei Li, Fengxiang Wang, Yangang Sun, Maosong Sun
- **机构**：Tsinghua University / Beijing University of Posts and Telecommunications / Tianjin University / IMECAS / HKUST (Guangzhou) / National University of Defense Technology / Beihang University 等
- **出处**：MERLIN, arXiv:2603.08174 · [论文](https://arxiv.org/abs/2603.08174)
- **官网**：https://em-merlin.github.io/
- **说明**：面向多模态大模型的**电磁信号-文本配对预训练集**，由 3500 万+ 真实与仿真信号（10 个子集：调制识别、参数估计、协议识别、雷达/通信干扰及抗干扰等）程序化生成 134,107 条指令微调样本，采用类 LLaVA 的单轮对话格式。

### 18. EM-Bench (2026)
- **作者**：同上（MERLIN 作者团队）
- **机构**：同上
- **出处**：MERLIN, arXiv:2603.08174 · [论文](https://arxiv.org/abs/2603.08174)
- **官网**：https://em-merlin.github.io/
- **说明**：电磁信号**理解与推理评测基准**，含 4200+ 条专家校验问答，按 3 个层级、14 个子任务组织：感知（信号刻画、干扰识别、片段检测）与推理（雷达/通信场景下的干扰与抗干扰策略生成）。

### 19. Multimodal-NF (2026)
- **作者**：Mengyuan Li, Qianfan Lu, Jiachen Tian, Hongjun Hu, Yu Han, Xiao Li, Chao-Kai Wen, Shi Jin
- **机构**：Southeast University
- **出处**：arXiv:2603.28280 · [DOI](https://doi.org/10.48550/arXiv.2603.28280)
- **官网**：https://lmyxxn.github.io/6GXLMIMODatasets/
- **说明**：面向近场低空 XL-MIMO 的无线数据集，同步近场 CSI 与 RGB/LiDAR/GPS 多模态数据。

### 20. PML-CellularEye (2026)
- **作者**：Ziguo Zhong, Yongming Huang, Huazhou Hou, Fanfei Xu, Haisheng Feng, Shengheng Liu, Xiaohu You
- **机构**：Purple Mountain Laboratories / Southeast University
- **出处**：Sci China Inf Sci 69(6):167301 · [DOI](https://doi.org/10.1007/s11432-026-4923-1)
- **官网**：https://github.com/ffxu1024/CellularEye_web
- **说明**：基于商用 5G/5G-A 基站设备的实测多模态数据集，含 IQ、可见光/红外视频与气象数据。

### 21. LAMBDA (2026) ⭐
- **作者**：Lin Zhou, Peichuan Rao, Chenshuo Zhang, **Jianhua Mo**, Shu Sun, Zhiyong Chen, Meixia Tao
- **机构**：Shanghai Jiao Tong University
- **出处**：arXiv:2607.03826 · [DOI](https://doi.org/10.57760/sciencedb.36052)
- **官网**：https://doi.org/10.57760/sciencedb.36052
- **说明**：低空多模态基础数据集，通过高保真数字孪生流水线生成，同步 RGB、深度、LiDAR、IMU、UAV 位姿、CSI 与雷达资源，覆盖城市/郊区/园区场景与晴雨雪雾天气。

---

## 收录说明

- **模态标注**：`1` 包含 / `0.5` 有限或部分支持 / `0` 缺失或不适用。
- **年份**：以 LAMBDA 论文表1 为准；个别数据集论文发表年与数据集发布年不同，已在详情中注明出处。
- **链接**：优先给出数据集官方主页；如官网不稳定，另附备用镜像或代码仓库链接。
- **范围**：聚焦低空/UAV 通感一体化相关，同时收录必要的上游经典基准（如 KITTI、DeepMIMO 等），以及低空安防常用的无人机射频探测数据集（DroneRF 系列）与电磁信号理解数据集（EM-134K / EM-Bench）。
- **射频类数据集的模态标注**：DroneRF 系列提供原始 I/Q 射频数据而非 MIMO 信道 CSI，故 `CSI` 列标注为「有限支持」；EM-134K / EM-Bench 同时含雷达与通信域信号，`CSI` 与 `雷达` 列同样标为「有限支持」。

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

使用 DroneRF 系列与 EM-134K / EM-Bench 时，请另行引用其对应数据论文（见各条目「出处」）。

## License

本索引的整理内容以 CC BY 4.0 发布；各数据集本身的使用请遵循其各自许可协议。
