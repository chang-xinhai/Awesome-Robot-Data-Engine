<div align="center">

<h1 id="awesome-robot-data-engine">Awesome Robot Data Engine</h1>

<p>
  <strong>A curated map of how robotics data is collected, processed, aligned, scaled, and evaluated.</strong>
</p>

<!-- [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) -->
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<p>
  <a href="#robot-centric"><img alt="Robot-Centric" src="https://img.shields.io/badge/Robot--Centric-Real%20Robot%20Data-a8d8ff?style=for-the-badge"></a>
  <a href="#umi"><img alt="UMI" src="https://img.shields.io/badge/UMI-Portable%20Interfaces-b8e6c9?style=for-the-badge"></a>
  <a href="#human--egocentric"><img alt="Human / Egocentric" src="https://img.shields.io/badge/Human%20%2F%20Ego-Human%20Data-ffd6a5?style=for-the-badge"></a>
  <a href="#simulation"><img alt="Simulation" src="https://img.shields.io/badge/Simulation-Synthetic%20Data-d7c5ff?style=for-the-badge"></a>
  <a href="#data-engine-taxonomy"><img alt="Taxonomy" src="https://img.shields.io/badge/Taxonomy-Cross--Source%20Engine-ffb7b2?style=for-the-badge"></a>
</p>

</div>

## About

**Awesome Robot Data Engine** maps the systems that turn experience into
trainable robot data. It follows four primary data sources—**Robot-Centric**,
**UMI**, **Human / Egocentric**, and **Simulation**—through the common data
engine:

> **Collect → Recover → Curate → Align → Mix → Train → Evaluate**

| Source | Primary advantage | Central data-engine question |
| :---: | :--- | :--- |
| **Robot-Centric** | Embodiment-matched observations and actions | How can real-robot experience be collected and curated at scale? |
| **UMI** | Portable, robot-free collection with deployable action structure | Which interfaces, sensors, and recovery methods preserve robot-usable trajectories? |
| **Human / Egocentric** | Massive natural interaction coverage | How can human video become metric actions, interaction states, rewards, or policy supervision? |
| **Simulation** | Cheap ground truth, controlled variation, and scalable generation | How can synthetic experience remain diverse, physically meaningful, and transferable? |

**Scope.** Data must be a central contribution. This is not a generic robot
learning, VLA, computer-vision, or manipulation bibliography.

**Selection.** Each work has one canonical entry based on its main new asset:
collection, processing, dataset, data-centric training, infrastructure, or
evaluation. Related sections use links rather than duplicate rows.

**Curation.** Entries require a primary source and use the initial arXiv `v1`
date when available. See [AGENTS.md](AGENTS.md) for source priority, placement,
table, sorting, and commit rules.

## Must Read

| Goal | Start with |
| :--- | :--- |
| Understand the full data-engine landscape | [Open X-Embodiment](https://arxiv.org/abs/2310.08864), [LeRobot](https://github.com/huggingface/lerobot), [Data Scaling Laws](https://arxiv.org/abs/2410.18647) |
| Collect real-robot data | [ALOHA](https://arxiv.org/abs/2304.13705), [DROID](https://arxiv.org/abs/2403.12945), [HIL-SERL](https://arxiv.org/abs/2410.21845) |
| Explore UMI | [UMI](https://arxiv.org/abs/2402.10329), [UMI Data](https://umi-data.github.io/), [Awesome-UMI](https://github.com/chang-xinhai/Awesome-UMI) |
| Learn from human / egocentric data | [Ego4D](https://arxiv.org/abs/2110.07058), [EgoMimic](https://arxiv.org/abs/2410.24221), [HumanEgo](https://arxiv.org/abs/2605.24934) |
| Generate demonstrations in simulation | [MimicGen](https://arxiv.org/abs/2310.17596), [RoboGen](https://arxiv.org/abs/2311.01455), [RoboCasa](https://arxiv.org/abs/2406.02523) |
| Compare formats and benchmarks | [RLDS](https://github.com/google-research/rlds), [LeRobotDataset](https://huggingface.co/docs/lerobot/lerobot-dataset-v3), [LIBERO](https://arxiv.org/abs/2306.03310) |

## News

- [2026-07-31] Launched **Awesome Robot Data Engine** with a source-to-policy
  taxonomy and an initial verified list spanning robot-centric, UMI, human /
  egocentric, simulation, and cross-source data systems.

## Contents

- [About](#about)
- [Must Read](#must-read)
- [News](#news)
- [Robot-Centric](#robot-centric)
  - [Robot Data Collection](#robot-data-collection)
    - [Direct Teleoperation](#direct-teleoperation)
    - [Interactive Collection](#interactive-collection)
    - [Autonomous Collection](#autonomous-collection)
  - [Robot Data Processing](#robot-data-processing)
  - [Robot-Centric Datasets](#robot-centric-datasets)
    - [Single-Embodiment Datasets](#single-embodiment-datasets)
    - [Multi-Embodiment / Aggregated Datasets](#multi-embodiment--aggregated-datasets)
- [UMI](#umi)
  - [UMI Collection Systems](#umi-collection-systems)
    - [End-effector Interfaces](#end-effector-interfaces)
    - [Dexterous Hand Interfaces](#dexterous-hand-interfaces)
    - [Whole-body Interfaces](#whole-body-interfaces)
  - [UMI State and Action Recovery](#umi-state-and-action-recovery)
    - [Pose / Trajectory Tracking](#pose--trajectory-tracking)
    - [Interaction Sensing](#interaction-sensing)
    - [UMI-to-Robot Retargeting](#umi-to-robot-retargeting)
  - [UMI Datasets](#umi-datasets)
- [Human / Egocentric](#human--egocentric)
  - [Interaction Perception](#interaction-perception)
    - [Hand–Object Interaction](#handobject-interaction)
    - [Tracking / Reconstruction](#tracking--reconstruction)
  - [Human Action Extraction](#human-action-extraction)
    - [Image-space / Latent Actions](#image-space--latent-actions)
    - [Metric Actions / Retargeting](#metric-actions--retargeting)
  - [Human Data-to-Policy](#human-data-to-policy)
    - [Human-data Pretraining](#human-data-pretraining)
    - [Human–Robot Co-training](#humanrobot-co-training)
    - [Human-derived Rewards / Goals](#human-derived-rewards--goals)
    - [Robot-free Policy Learning](#robot-free-policy-learning)
  - [Human / Egocentric Datasets](#human--egocentric-datasets)
- [Simulation](#simulation)
  - [Simulation Demonstrations](#simulation-demonstrations)
    - [Scripted / Planner / Expert Rollouts](#scripted--planner--expert-rollouts)
    - [Demonstration Expansion](#demonstration-expansion)
    - [Generated / Model Rollouts](#generated--model-rollouts)
  - [Simulation Environments](#simulation-environments)
    - [Task Generation](#task-generation)
    - [Scene Generation](#scene-generation)
    - [Asset Generation](#asset-generation)
    - [Real-to-Sim / Digital Twins](#real-to-sim--digital-twins)
  - [Synthetic Observations](#synthetic-observations)
    - [Rendering / Domain Randomization](#rendering--domain-randomization)
    - [Image / Video Generation](#image--video-generation)
  - [Simulation Datasets](#simulation-datasets)
- [Data Engine Taxonomy](#data-engine-taxonomy)
  - [Surveys / Systems](#surveys--systems)
  - [Modalities / Representations](#modalities--representations)
  - [Processing / Curation](#processing--curation)
  - [Formats / Infrastructure](#formats--infrastructure)
  - [Mixing / Scaling](#mixing--scaling)
  - [Evaluation / Benchmarks](#evaluation--benchmarks)
- [Citation](#citation)
- [Acknowledgement](#acknowledgement)

## Robot-Centric

Robot-native data collected from physical embodiments, covering direct
teleoperation, interactive supervision, autonomous exploration, offline
curation, and representative real-world datasets.

### Robot Data Collection

#### Direct Teleoperation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-07-01 | VR / XR, Bimanual, Active Vision | UC San Diego | [Open-TeleVision: Teleoperation with Immersive Active Visual Feedback](https://arxiv.org/abs/2407.01512) | CoRL 2024 | [github](https://github.com/OpenTeleVision/TeleVision) |
| 2024-01-04 | Leader–Follower, Mobile, Whole-Body | Stanford | [Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation](https://arxiv.org/abs/2401.02117) | arXiv | [project](https://mobile-aloha.github.io/) |
| 2023-04-23 | Leader–Follower, Bimanual, Low-Cost | Stanford | [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://arxiv.org/abs/2304.13705) | RSS 2023 | [project](https://tonyzhaozh.github.io/aloha/) |

#### Interactive Collection

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-10-29 | Human Intervention, Corrective Data, Real-World RL | UC Berkeley | [Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning](https://arxiv.org/abs/2410.21845) | arXiv | [project](https://hil-serl.github.io/) / [github](https://github.com/rail-berkeley/hil-serl) |
| 2022-12-09 | Policy Assistance, Shared Autonomy, Robot Fleet | University of Southern California | [PATO: Policy Assisted TeleOperation for Scalable Robot Data Collection](https://arxiv.org/abs/2212.04708) | RSS 2023 | [project](https://clvrai.com/pato/) |

#### Autonomous Collection

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2023-02-13 | Autonomous Exploration, Environment Change, Skill Discovery | Carnegie Mellon University | [ALAN: Autonomously Exploring Robotic Agents in the Real World](https://arxiv.org/abs/2302.06604) | ICRA 2023 | [project](https://robo-explorer.github.io/) |

### Robot Data Processing

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-02-12 | Data Curation, Mutual Information, Trajectory Filtering | Google DeepMind | [Robot Data Curation with Mutual Information Estimators](https://arxiv.org/abs/2502.08623) | RSS 2025 | [project](https://joeyhejna.com/demonstration-info/) |

### Robot-Centric Datasets

#### Single-Embodiment Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-03-09 | Humanoid, 1M+ Trajectories, Long-Horizon | HKU | [AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems](https://arxiv.org/abs/2503.06669) | arXiv | [project](https://agibot-world.com/) / [github](https://github.com/OpenDriveLab/AgiBot-World) |
| 2024-03-19 | Franka, In-the-Wild, 76K Demonstrations | Stanford | [DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset](https://arxiv.org/abs/2403.12945) | RSS 2024 | [project](https://droid-dataset.github.io/) / [github](https://github.com/droid-dataset/droid) |
| 2023-08-24 | WidowX, 60K Trajectories, 24 Environments | UC Berkeley | [BridgeData V2: A Dataset for Robot Learning at Scale](https://arxiv.org/abs/2308.12952) | CoRL 2023 | [project](https://rail-berkeley.github.io/bridgedata/) |

#### Multi-Embodiment / Aggregated Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-12-18 | Multi-Embodiment, Failure Data, Digital Twin | Beijing Innovation Center of Humanoid Robotics | [RoboMIND: Benchmark on Multi-embodiment Intelligence Normative Data for Robot Manipulation](https://arxiv.org/abs/2412.13877) | RSS 2025 | [project](https://x-humanoid-robomind.github.io/) / [dataset](https://huggingface.co/datasets/x-humanoid-robomind/RoboMIND) |
| 2023-10-13 | Cross-Embodiment, RLDS, Dataset Aggregation | Google DeepMind | [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864) | ICRA 2024 | [project](https://robotics-transformer-x.github.io/) / [github](https://github.com/google-deepmind/open_x_embodiment) |
| 2023-07-02 | Multimodal, Multi-Robot, Human–Robot Pairs | Shanghai Jiao Tong University | [RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot](https://arxiv.org/abs/2307.00595) | ICRA 2024 | [project](https://rh20t.github.io/) |
| 2019-10-24 | Multi-Robot, 15M Frames, Visual Foresight | UC Berkeley | [RoboNet: Large-Scale Multi-Robot Learning](https://arxiv.org/abs/1910.11215) | CoRL 2019 | [project](https://www.robonet.wiki/) |

## UMI

Robot-free and portable manipulation interfaces that preserve deployable
observations, actions, interaction signals, and embodiment mappings.

### UMI Collection Systems

#### End-effector Interfaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-09-23 | Multi-View, Wrist + Third-Person, Cross-Embodiment | NYU Abu Dhabi | [MV-UMI: A Scalable Multi-View Interface for Cross-Embodiment Learning](https://arxiv.org/abs/2509.18757) | arXiv | [project](https://mv-umi.github.io/) |
| 2024-09-29 | Hardware-Independent, T265 VIO, Fast Deployment | Shanghai AI Lab | [FastUMI: A Scalable and Hardware-Independent Universal Manipulation Interface with Dataset](https://arxiv.org/abs/2409.19499) | arXiv | [project](https://fastumi.com/) / [dataset](https://github.com/MrKeee/FastUMI-100K) |
| 2024-02-15 | Handheld Gripper, Robot-Free, Bimanual | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) / [data](https://umi-data.github.io/) |

#### Dexterous Hand Interfaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-06-08 | Bidigital Gripper, Finger-Aligned, Bimanual | AIRoA | [YUBI: Yielding Universal Bidigital Interface for Bimanual Dexterous Manipulation at Scale](https://arxiv.org/abs/2606.10244) | arXiv | [project](https://yubi.airoa.io/) / [hardware](https://github.com/toyota/yubi-hw) / [software](https://github.com/airoa-org/yubi-sw) |
| 2026-06-04 | Wearable DexHand, In-Hand Vision, Tactile | Peking University | [RealDexUMI: A Wearable Universal Manipulation Interface for Dexterous Robot Learning](https://arxiv.org/abs/2606.06033) | arXiv | [project](https://research.beingbeyond.com/realdexumi) |

#### Whole-body Interfaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-05-05 | VR-UMI, Humanoid, Sparse Keypoints | BAAI | [BifrostUMI: Bridging Robot-Free Demonstrations and Humanoid Whole-Body Manipulation](https://arxiv.org/abs/2605.03452) | arXiv | [project](https://baai-aether.github.io/BifrostUMI/) |
| 2026-02-06 | Humanoid, Whole-Body, Portable Capture | Tsinghua | [Humanoid Manipulation Interface: Humanoid Whole-Body Manipulation from Robot-Free Demonstrations](https://arxiv.org/abs/2602.06643) | arXiv | [project](https://humanoid-manipulation-interface.github.io/) |
| 2025-10-31 | Active Vision, Head–Hand Coordination, Semi-Humanoid | UC Berkeley | [EgoMI: Learning Active Vision and Whole-Body Manipulation from Egocentric Human Demonstrations](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |

### UMI State and Action Recovery

#### Pose / Trajectory Tracking

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-04-15 | LiDAR-Inertial SLAM, Metric Pose, Multimodal Calibration | HKU | [UMI-3D: Extending Universal Manipulation Interface from Vision-Limited to 3D Spatial Perception](https://arxiv.org/abs/2604.14089) | arXiv | [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) / [policy](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy) |

#### Interaction Sensing

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-01-21 | Vision + Tactile + F/T, Event Segmentation, Contact-Rich | TU Munich | [TacUMI: A Multi-Modal Universal Manipulation Interface for Contact-Rich Tasks](https://arxiv.org/abs/2601.14550) | arXiv | [github](https://github.com/Tac-UMI/TacUMI) |
| 2026-01-15 | Finger-Level Wrench, RGB-D, Compliance | Stanford | [In-the-Wild Compliant Manipulation with UMI-FT](https://arxiv.org/abs/2601.09988) | arXiv | [project](https://umi-ft.github.io/) / [github](https://github.com/real-stanford/UMI-FT) |
| 2025-09-18 | Visuo-Tactile, Proprioception, Tactile Pretraining | Shanghai Jiao Tong University | [exUMI: Extensible Robot Teaching System with Action-aware Task-agnostic Tactile Representation](https://arxiv.org/abs/2509.14688) | CoRL 2025 | [project](https://silicx.github.io/exUMI/) / [github](https://github.com/silicx/exUMI) |

#### UMI-to-Robot Retargeting

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-05-28 | Human Hand, Exoskeleton, Robot-Hand Inpainting | Stanford | [DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation](https://arxiv.org/abs/2505.21864) | CoRL 2025 | [github](https://github.com/real-stanford/DexUMI) / [data](https://umi-data.github.io/) |

### UMI Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-28 | Bimanual, 2,000 Hours, LeRobot v3 | Simple AI | [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](https://arxiv.org/abs/2607.25895) | arXiv | [project](https://cloud.simpleai.tech/simple-world-lab/hifi-umi/) / [dataset](https://huggingface.co/datasets/simple-world-lab/HiFi-UMI-2K) |

## Human / Egocentric

Human / egocentric data captures natural interaction at a scale that robot-only
collection cannot match. This section covers the perception, action recovery,
embodiment transfer, policy learning, and datasets required to turn human
activity into robot-usable supervision.

### Interaction Perception

#### Hand–Object Interaction

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-08-19 | Affordance, HOI, Depth Prior | University of Edinburgh | [Learning Precise Affordances from Egocentric Videos for Robotic Manipulation](https://arxiv.org/abs/2408.10123) | ICCV 2025 | Graspable and functional affordance masks |
| 2023-12-25 | HOI, Stable Grasp, Contact | University of Bristol | [Get a Grip: Reconstructing Hand-Object Stable Grasps in Egocentric Videos](https://arxiv.org/abs/2312.15719) | arXiv | [project / code](https://zhifanzhu.github.io/getagrip/) |
| 2023-04-17 | Affordance, Human Video, Robot Learning | Carnegie Mellon University | [Affordances from Human Videos as a Versatile Representation for Robotics](https://arxiv.org/abs/2304.08488) | CVPR 2023 | [project](https://robo-affordances.github.io/) |

#### Tracking / Reconstruction

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-06-17 | 4D Hand, Gaussian Splatting | Yonsei University | [Hand-4DGS: Feed-Forward 3D Gaussian Splatting for 4D Hand Reconstruction from Egocentric Videos](https://arxiv.org/abs/2606.19156) | arXiv | [project](https://jeongminb.github.io/hand-4dgs/) |
| 2024-11-14 | 4D Scene, Monocular, Self-Supervised | Tsinghua University | [Self-Supervised Monocular 4D Scene Reconstruction for Egocentric Videos](https://arxiv.org/abs/2411.09145) | ICCV 2025 | [project / code](https://egomono4d.github.io/) |
| 2023-12-08 | 3D Hand, MANO, Reconstruction | UC Berkeley | [Reconstructing Hands in 3D with Transformers](https://arxiv.org/abs/2312.05251) | CVPR 2024 | [project / code](https://geopavlakos.github.io/hamer/) |

### Human Action Extraction

#### Image-space / Latent Actions

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2023-12-28 | Point Trajectories, Actionless Video | UC Berkeley | [Any-point Trajectory Modeling for Policy Learning](https://arxiv.org/abs/2401.00025) | RSS 2024 | [project / code](https://xingyu-lin.github.io/atm/) |

#### Metric Actions / Retargeting

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-06-10 | Video-to-Robot, Dexterous, Feasibility | Georgia Tech | [EgoEngine: From Egocentric Human Videos to High-Fidelity Dexterous Robot Demonstrations](https://arxiv.org/abs/2606.12604) | arXiv | [project](https://egoengine.github.io/) |
| 2025-05-17 | Robot Inpainting, Visual Retargeting | Peking University | [H2R: A Human-to-Robot Data Augmentation for Robot Pre-training from Videos](https://arxiv.org/abs/2505.11920) | arXiv | 1M-scale robotized video datasets |
| 2024-10-11 | AR Feedback, Kinematic Constraints | Stanford University | [ARCap: Collecting High-quality Human Demonstrations for Robot Learning with Augmented Reality Feedback](https://arxiv.org/abs/2410.08464) | ICRA 2025 | [project / code / data](https://tml.stanford.edu/ARCap/) |
| 2024-03-12 | Mocap, Dexterous Hand, Retargeting | Stanford University | [DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation](https://arxiv.org/abs/2403.07788) | RSS 2024 | [project](https://dex-cap.github.io/) |
| 2022-12-08 | Hand Retargeting, Internet Video | Carnegie Mellon University | [VideoDex: Learning Dexterity from Internet Videos](https://arxiv.org/abs/2212.04498) | CoRL 2022 | [project](https://video-dex.github.io/) |
| 2021-08-12 | Hand–Object Pose, Dexterous Retargeting | UC San Diego | [DexMV: Imitation Learning for Dexterous Manipulation from Human Videos](https://arxiv.org/abs/2108.05877) | ECCV 2022 | [project / code](https://yzqin.github.io/dexmv/) |

### Human Data-to-Policy

#### Human-data Pretraining

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-02-06 | World Model, Latent Action, Scaling | NVIDIA | [DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos](https://arxiv.org/abs/2602.06949) | ICML 2026 | [project](https://dreamdojo-world.github.io/) / [github](https://github.com/NVIDIA/DreamDojo) |
| 2025-05-21 | World Modeling, Human–Robot Co-training | NVIDIA | [FLARE: Robot Learning with Implicit World Modeling](https://arxiv.org/abs/2505.15659) | CoRL 2025 | [project](https://research.nvidia.com/labs/gear/flare/) |
| 2022-03-23 | Representation Pretraining, Ego4D | Stanford University | [R3M: A Universal Visual Representation for Robot Manipulation](https://arxiv.org/abs/2203.12601) | CoRL 2022 | [github](https://github.com/facebookresearch/r3m) |

#### Human–Robot Co-training

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-06-15 | VLA Pretraining, Pseudo-Action, Reliability | ACE Robotics | [ACE-Ego-0: Unifying Egocentric Human and Robotic Data for VLA Pretraining](https://arxiv.org/abs/2606.17200) | arXiv | [github](https://github.com/ACERobotics-VLA/ACE-Ego-0) |
| 2024-10-31 | Human–Robot Co-training, Project Aria | Georgia Tech | [EgoMimic: Scaling Imitation Learning via Egocentric Video](https://arxiv.org/abs/2410.24221) | ICRA 2025 | [project / code / data](https://egomimic.github.io/) |

#### Human-derived Rewards / Goals

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2022-07-19 | Human Intent, Robot Exploration, Reward | Carnegie Mellon University | [Human-to-Robot Imitation in the Wild](https://arxiv.org/abs/2207.09450) | RSS 2022 | [project / dataset](https://human2robot.github.io/) |

#### Robot-free Policy Learning

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-05-24 | Interaction Tokens, Zero-Shot, Egocentric | University of Maryland | [HumanEgo: Zero-Shot Robot Learning from Minutes of Human Egocentric Videos](https://arxiv.org/abs/2605.24934) | arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) |
| 2025-05-26 | Smart Glasses, 3D Points, Zero Robot Data | New York University | [EgoZero: Robot Learning from Smart Glasses](https://arxiv.org/abs/2505.20290) | arXiv | [project](https://egozero-robot.github.io/) |
| 2025-03-02 | Visual Editing, Zero-Shot, Human Video | Stanford University | [Phantom: Training Robots Without Robots Using Only Human Videos](https://arxiv.org/abs/2503.00779) | CoRL 2025 | [project](https://phantom-human-videos.github.io/) / [github](https://github.com/MarionLepert/phantom) |

### Human / Egocentric Datasets

Dataset-release papers are listed only here, even when they also introduce
perception or policy baselines.

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-05-16 | 829 h, Vision Pro, Hand / Body | Apple | [EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video](https://arxiv.org/abs/2505.11709) | ICLR 2026 | [github / data](https://github.com/apple/ml-egodex) |
| 2024-06-13 | Aria / Quest 3, 3D Hand–Object GT | Meta Reality Labs | [Introducing HOT3D: An Egocentric Dataset for 3D Hand and Object Tracking](https://arxiv.org/abs/2406.09598) | ECCV 2024 | [project / data](https://facebookresearch.github.io/hot3d/) |
| 2023-11-30 | Ego–Exo, Skilled Activity, 3D | UT Austin | [Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives](https://arxiv.org/abs/2311.18259) | CVPR 2024 | [project / data](https://ego-exo4d-data.org/) |
| 2023-09-29 | 166 h, Multimodal, Human Assistance | Microsoft Research | [HoloAssist: An Egocentric Human Interaction Dataset for Interactive AI Assistants in the Real World](https://arxiv.org/abs/2309.17024) | ICCV 2023 | [project / data](https://holoassist.github.io/) |
| 2022-04-28 | Bimanual HOI, Multi-View, Contact | ETH Zurich | [ARCTIC: A Dataset for Dexterous Bimanual Hand-Object Manipulation](https://arxiv.org/abs/2204.13662) | CVPR 2023 | [project / data](https://arctic.is.tue.mpg.de/) |
| 2022-03-28 | Multi-View, Procedural Activities | University of Bristol | [Assembly101: A Large-Scale Multi-View Video Dataset for Understanding Procedural Activities](https://arxiv.org/abs/2203.14712) | CVPR 2022 | [project / data](https://assembly-101.github.io/) |
| 2022-03-03 | RGB-D, 4D HOI, 3D Pose | Tsinghua University | [HOI4D: A 4D Egocentric Dataset for Category-Level Human-Object Interaction](https://arxiv.org/abs/2203.01577) | CVPR 2022 | [project / data](https://hoi4d.github.io/) |
| 2021-10-13 | 3,000 h, Global, Ego Video | Meta AI Research | [Ego4D: Around the World in 3,000 Hours of Egocentric Video](https://arxiv.org/abs/2110.07058) | CVPR 2022 | [project / data](https://ego4d-data.org/) |
| 2018-04-08 | Kitchen, RGB, Action Narration | University of Bristol | [Scaling Egocentric Vision: The EPIC-KITCHENS Dataset](https://arxiv.org/abs/1804.02748) | ECCV 2018 | [project / data](https://epic-kitchens.github.io/) |

## Simulation

Synthetic data engines provide controllable ground truth, scalable task
variation, and inexpensive experience. Entries are separated by their primary
asset: demonstrations, environments, observations, or released datasets.

### Simulation Demonstrations

#### Scripted / Planner / Expert Rollouts

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-10-04 | Task Generation, Expert Rollouts, Simulation | Tsinghua University | [GenSim2: Scaling Robot Data Generation with Multi-modal and Reasoning LLMs](https://arxiv.org/abs/2410.03645) | CoRL 2024 | [project](https://gensim2.github.io/) / [github](https://github.com/GenSim2/GenSim2) |

#### Demonstration Expansion

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-10-24 | Skill Segmentation, Data Generation, Imitation Learning | NVIDIA | [SkillMimicGen: Automated Demonstration Generation for Efficient Skill Learning and Deployment](https://arxiv.org/abs/2410.18907) | CoRL 2024 | [project](https://skillgen.github.io/) |
| 2023-10-26 | Data Augmentation, Demonstration Generation, Manipulation | NVIDIA | [MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations](https://arxiv.org/abs/2310.17596) | CoRL 2023 | [project](https://mimicgen.github.io/) / [github](https://github.com/NVlabs/mimicgen_environments) |

#### Generated / Model Rollouts

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-05-19 | DreamGen, Video World Model, Synthetic Trajectories | NVIDIA | [DreamGen: Unlocking Generalization in Robot Learning through Video World Models](https://arxiv.org/abs/2505.12705) | arXiv | [project](https://research.nvidia.com/labs/gear/dreamgen/) |

### Simulation Environments

#### Task Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-06-04 | RoboCasa, Household Simulation, Generative Tasks | UT Austin | [RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots](https://arxiv.org/abs/2406.02523) | RSS 2024 | [project](https://robocasa.ai/) / [github](https://github.com/robocasa/robocasa) |
| 2023-11-02 | Generative Simulation, Task Generation, Skill Learning | Carnegie Mellon University | [RoboGen: Towards Unleashing Infinite Data for Automated Robot Learning via Generative Simulation](https://arxiv.org/abs/2311.01455) | ICML 2024 | [project](https://generativesimulation.github.io/) / [github](https://github.com/Genesis-Embodied-AI/RoboGen) |

#### Scene Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2022-06-14 | Procedural Generation, Indoor Scenes, Embodied AI | Allen Institute for AI | [ProcTHOR: Large-Scale Embodied AI Using Procedural Generation](https://arxiv.org/abs/2206.06994) | NeurIPS 2022 | [project](https://procthor.allenai.org/) / [github](https://github.com/allenai/procthor) |

#### Asset Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2022-12-15 | 3D Assets, Object Dataset, Simulation | Allen Institute for AI | [Objaverse: A Universe of Annotated 3D Objects](https://arxiv.org/abs/2212.08051) | CVPR 2023 | [project](https://objaverse.allenai.org/) / [github](https://github.com/allenai/objaverse-xl) |

#### Real-to-Sim / Digital Twins

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-03-06 | RialTo, Real-to-Sim, Digital Twin | MIT | [Reconciling Reality through Simulation: A Real-to-Sim-to-Real Approach for Robust Manipulation](https://arxiv.org/abs/2403.03949) | RSS 2024 | [project](https://real-to-sim-to-real.github.io/RialTo/) / [github](https://github.com/real-to-sim-to-real/RialToPolicyLearning) |

### Synthetic Observations

#### Rendering / Domain Randomization

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2017-03-20 | Domain Randomization, Sim-to-Real, Vision | OpenAI | [Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World](https://arxiv.org/abs/1703.06907) | IROS 2017 | — |

#### Image / Video Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-03-15 | Video Generation, Data Augmentation, Robot Learning | UNC-Chapel Hill | [ReBot: Scaling Robot Learning with Real-to-Sim-to-Real Robotic Video Synthesis](https://arxiv.org/abs/2503.14526) | arXiv | [project](https://yuffish.github.io/rebot/) |

### Simulation Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-06-22 | Data Generator, Benchmark, Dataset, Bimanual | HKU MMLab | [RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation](https://arxiv.org/abs/2506.18088) | arXiv | [project](https://robotwin-platform.github.io/) / [github](https://github.com/robotwin-Platform/RoboTwin) |

## Data Engine Taxonomy

Cross-source methods and infrastructure that apply to more than one of the four
data origins, plus standardized evaluation protocols and benchmarks. A
source-specific benchmark is placed here when evaluation—not the underlying
data source—is its primary asset.

### Surveys / Systems

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2021-11-01 | Simulation, Domain Randomization, Review | TU Darmstadt | [Robot Learning from Randomized Simulations: A Review](https://arxiv.org/abs/2111.00956) | IJRR 2022 | — |

### Modalities / Representations

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-01-17 | UniAct, Universal Actions, Cross-Embodiment | Tsinghua University | [Universal Actions for Enhanced Embodied Foundation Models](https://arxiv.org/abs/2501.10105) | CVPR 2025 | [github](https://github.com/2toinf/UniAct) |
| 2025-01-16 | Action Tokenization, Compression, VLA | Physical Intelligence | [FAST: Efficient Action Tokenization for Vision-Language-Action Models](https://arxiv.org/abs/2501.09747) | arXiv | [github](https://github.com/Physical-Intelligence/openpi) |
| 2024-09-30 | HPT, Heterogeneous Embodiments, Proprioception | MIT | [Scaling Proprioceptive-Visual Learning with Heterogeneous Pre-trained Transformers](https://arxiv.org/abs/2409.20537) | arXiv | [project](https://liruiw.github.io/hpt/) |

### Processing / Curation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-05-28 | SCIZOR, Deduplication, Data Curation | UT Austin | [SCIZOR: A Self-Supervised Approach to Data Curation for Large-Scale Imitation Learning](https://arxiv.org/abs/2505.22626) | ICRA 2026 | [project](https://ut-austin-rpl.github.io/SCIZOR/) |
| 2024-10-23 | NILS, Zero-Shot Labeling, Foundation Models | Karlsruhe Institute of Technology | [Scaling Robot Policy Learning via Zero-Shot Labeling with Foundation Models](https://arxiv.org/abs/2410.17772) | CoRL 2024 | [project](https://robottasklabeling.github.io/) |
| 2024-07-16 | Multi-Sensor Calibration, IMU, Camera | Wuhan University | [iKalibr: Unified Targetless Spatiotemporal Calibration for Resilient Integrated Inertial Systems](https://arxiv.org/abs/2407.11420) | T-RO 2025 | [github](https://github.com/Unsigned-Long/iKalibr) |
| 2023-06-14 | TAPIR, 2D Point Tracking, Long-Term Tracks | Google DeepMind | [TAPIR: Tracking Any Point with per-frame Initialization and temporal Refinement](https://arxiv.org/abs/2306.08637) | ICCV 2023 | [github](https://github.com/google-deepmind/tapnet) |
| 2023-03-24 | General Tracking, 6D Pose, Reconstruction | NVIDIA | [BundleSDF: Neural 6-DoF Tracking and 3D Reconstruction of Unknown Objects](https://arxiv.org/abs/2303.14158) | CVPR 2023 | [project](https://bundlesdf.github.io/) / [github](https://github.com/NVlabs/BundleSDF) |

### Formats / Infrastructure

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-02-26 | LeRobot, Dataset Hub, Reproducibility | Hugging Face | [LeRobot: An Open-Source Library for End-to-End Robot Learning](https://arxiv.org/abs/2602.22818) | ICLR 2026 | [github](https://github.com/huggingface/lerobot) / [docs](https://huggingface.co/docs/lerobot) |
| 2021-11-04 | Dataset Schema, Episodic Data, RL | Google DeepMind | [RLDS: An Ecosystem to Generate, Share and Use Datasets in Reinforcement Learning](https://arxiv.org/abs/2111.02767) | arXiv | [github](https://github.com/google-research/rlds) |
| 2021-08-06 | Offline Demonstrations, Benchmarking, Tooling | Stanford University | [What Matters in Learning from Offline Human Demonstrations for Robot Manipulation](https://arxiv.org/abs/2108.03298) | CoRL 2021 | [project](https://robomimic.github.io/) / [github](https://github.com/ARISE-Initiative/robomimic) |

### Mixing / Scaling

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2024-10-24 | Scaling Laws, Imitation Learning, Data Composition | Tsinghua University | [Data Scaling Laws in Imitation Learning for Robotic Manipulation](https://arxiv.org/abs/2410.18647) | ICLR 2025 | [project](https://data-scaling-laws.github.io/) |
| 2024-08-26 | Dataset Mixture, Data Weighting, Imitation Learning | Stanford University | [Re-Mix: Optimizing Data Mixtures for Large Scale Imitation Learning](https://arxiv.org/abs/2408.14037) | arXiv | — |
| 2024-08-21 | CrossFormer, Cross-Embodiment, Data Scaling | UC Berkeley | [Scaling Cross-Embodied Learning: One Policy for Manipulation, Navigation, Locomotion and Aviation](https://arxiv.org/abs/2408.11812) | arXiv | [project](https://crossformer-model.github.io/) |

### Evaluation / Benchmarks

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-06-09 | UMI-Bench, Real-Robot Protocol, Reproducibility | Soochow University | [UMI-Bench 1.0: An Open and Reproducible Real-World Benchmark for Tabletop Robotic Manipulation with UMI Data](https://arxiv.org/abs/2606.10382) | arXiv | [project](https://umibenchmark.github.io/) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) / [models](https://huggingface.co/UMIbenchmark/UMI-Benchmark-v1-checkpoints) |
| 2024-09-14 | Experimental Design, Evaluation, Reproducibility | Cornell University | [Robot Learning as an Empirical Science: Best Practices for Policy Evaluation](https://arxiv.org/abs/2409.09491) | arXiv | — |
| 2024-05-09 | SimplerEnv, Sim-to-Real Evaluation, Policy Ranking | UC San Diego | [Evaluating Real-World Robot Manipulation Policies in Simulation](https://arxiv.org/abs/2405.05941) | arXiv | [project](https://simpler-env.github.io/) / [github](https://github.com/simpler-env/SimplerEnv) |
| 2024-03-14 | BEHAVIOR-1K, Household, 1,000 Activities | Stanford University | [BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation](https://arxiv.org/abs/2403.09227) | CoRL 2024 | [project](https://behavior.stanford.edu/) / [github](https://github.com/StanfordVL/BEHAVIOR-1K) |
| 2024-02-13 | Generalization, Perturbations, Manipulation | University of Washington | [THE COLOSSEUM: A Benchmark for Evaluating Generalization for Robotic Manipulation](https://arxiv.org/abs/2402.08191) | arXiv | [project](https://robot-colosseum.github.io/) |
| 2023-06-05 | Lifelong Learning, Teleoperation, Benchmark | UT Austin | [LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning](https://arxiv.org/abs/2306.03310) | NeurIPS 2023 | [project](https://libero-project.github.io/) / [github](https://github.com/Lifelong-Robot-Learning/LIBERO) |
| 2019-09-26 | Task Benchmark, Scripted Experts, Demonstrations | Imperial College London | [RLBench: The Robot Learning Benchmark & Learning Environment](https://arxiv.org/abs/1909.12271) | RA-L 2020 | [github](https://github.com/stepjam/RLBench) |
| 2012-10 | RGB-D SLAM, Trajectory Accuracy, Ground Truth | Technical University of Munich | [A Benchmark for the Evaluation of RGB-D SLAM Systems](https://jsturm.de/publications/data/sturm12iros.pdf) | IROS 2012 | [benchmark](https://cvg.cit.tum.de/data/datasets/rgbd-dataset) |

## Citation

If this list helps your research, please cite:

```bibtex
@misc{awesome_robot_data_engine,
  author       = {Xinhai Chang},
  title        = {Awesome Robot Data Engine},
  year         = {2026},
  howpublished = {\url{https://github.com/chang-xinhai/Awesome-Robot-Data-Engine}}
}
```

## Acknowledgement

This list builds on the open robotics community and complements
[Awesome-UMI](https://github.com/chang-xinhai/Awesome-UMI),
[Awesome VLA Data Collection, Synthesis and Curation](https://github.com/AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation),
[VLA Datasets & Benchmarks](https://github.com/ziyaow1010/vla-datasets-benchmarks),
[Awesome-WAM](https://github.com/OpenMOSS/Awesome-WAM),
[Robot Learning from Human Videos](https://github.com/IRMVLab/awesome-robot-learning-from-human-videos),
and other curated resources listed in [AGENTS.md](AGENTS.md).

Contributions are welcome. Please follow the canonical-placement and
primary-source verification rules before opening a pull request.
