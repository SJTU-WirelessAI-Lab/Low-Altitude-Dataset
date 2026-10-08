# 低空数据集索引 · Low-Altitude Datasets

面向**低空经济**与**UAV通感一体化（ISAC）**研究的开源数据集汇编，系统收集并展示已有数据集，统一给出**名称、官方网站链接、发布年份、作者/机构**以及**模态覆盖对比**。

清单以 **[LAMBDA: A Low-Altitude Multimodal Base Dataset for UAV Sensing and Communication](https://arxiv.org/abs/2607.03826)**（arXiv:2607.03826）表1 为基准，并逐一核实各数据集的官方主页与论文链接。

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

共 **16** 个数据集（含本文 LAMBDA），时间跨度 **2012–2026**。

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
| 12 | **SynthSoM** | 2025 | Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, et al. | Peking University / Shandong University | [链接](https://github.com/ZiweiHuang96/SynthSoM) |
| 13 | **Multimodal-Wireless** | 2025 | Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li | Southeast University / Imperial College London | [链接](https://le-liang.github.io/mmw) |
| 14 | **Multimodal-NF** | 2026 | Mengyuan Li, Qianfan Lu, Jiachen Tian, et al. | Southeast University | [链接](https://lmyxxn.github.io/6GXLMIMODatasets/) |
| 15 | **PML-CellularEye** | 2026 | Ziguo Zhong, Yongming Huang, Haizhou Hou, et al. | Purple Mountain Laboratories / Southeast University | [链接](https://github.com/ffxu1024/CellularEye_web) |
| 16 | **LAMBDA** ⭐ | 2026 | Lin Zhou, Peichuan Rao, Chenshuo Zhang, Jianhua Mo, Shu Sun, Zhiyong Chen, Meixia Tao | Shanghai Jiao Tong University | [链接](https://doi.org/10.57760/sciencedb.36052) |

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
| SynthSoM | 2025 | △ | ✓ | ✓ | ✓ | ✓ | × | ✓ | 空地协同机器联觉(SoM)合成数据集 |
| Multimodal-Wireless | 2025 | × | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | V2X多模态通信与感知 |
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

### 12. SynthSoM (2025)
- **作者**：Xiang Cheng, Ziwei Huang, Yong Yu, Lu Bai, Mingran Sun, et al.
- **机构**：Peking University / Shandong University
- **出处**：Scientific Data 12:819 · [DOI](https://doi.org/10.1038/s41597-025-05065-x)
- **官网**：https://github.com/ZiweiHuang96/SynthSoM ｜ [figshare 数据](https://figshare.com/s/3c0203236d3ae2eed872)
- **说明**：面向机器联觉(SoM)的空地多链路协同合成数据集，含 5 个典型场景。

### 13. Multimodal-Wireless (2025)
- **作者**：Tianhao Mao, Le Liang, Jie Yang, Hao Ye, Shi Jin, Geoffrey Ye Li
- **机构**：Southeast University / Imperial College London
- **出处**：arXiv:2511.03220 · ICC 2026
- **官网**：https://le-liang.github.io/mmw
- **说明**：基于 CARLA + Sionna 的大规模开源数据集，约 16.1 万帧，CSI 与 5 类传感器模态 100 Hz 同步。

### 14. Multimodal-NF (2026)
- **作者**：Mengyuan Li, Qianfan Lu, Jiachen Tian, Hongjun Hu, Yu Han, Xiao Li, Chao-Kai Wen, Shi Jin
- **机构**：Southeast University
- **出处**：arXiv:2603.28280 · [DOI](https://doi.org/10.48550/arXiv.2603.28280)
- **官网**：https://lmyxxn.github.io/6GXLMIMODatasets/
- **说明**：面向近场低空 XL-MIMO 的无线数据集，同步近场 CSI 与 RGB/LiDAR/GPS 多模态数据。

### 15. PML-CellularEye (2026)
- **作者**：Ziguo Zhong, Yongming Huang, Huazhou Hou, Fanfei Xu, Haisheng Feng, Shengheng Liu, Xiaohu You
- **机构**：Purple Mountain Laboratories / Southeast University
- **出处**：Sci China Inf Sci 69(6):167301 · [DOI](https://doi.org/10.1007/s11432-026-4923-1)
- **官网**：https://github.com/ffxu1024/CellularEye_web
- **说明**：基于商用 5G/5G-A 基站设备的实测多模态数据集，含 IQ、可见光/红外视频与气象数据。

### 16. LAMBDA (2026) ⭐
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
- **范围**：聚焦低空/UAV 通感一体化相关，同时收录必要的上游经典基准（如 KITTI、DeepMIMO 等）。

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

## License

本索引的整理内容以 CC BY 4.0 发布；各数据集本身的使用请遵循其各自许可协议。
