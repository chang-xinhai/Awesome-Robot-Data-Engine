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
| Understand the full data-engine landscape | [Data Pyramid](https://arxiv.org/abs/2607.24744), [VLA Data Survey](https://arxiv.org/abs/2604.23001), [Open X-Embodiment](https://arxiv.org/abs/2310.08864) |
| Collect and improve real-robot data | [AXIS](https://arxiv.org/abs/2607.21588), [DROID](https://arxiv.org/abs/2403.12945), [HIL-SERL](https://arxiv.org/abs/2410.21845) |
| Explore UMI | [UMI](https://arxiv.org/abs/2402.10329), [HiFi-UMI](https://arxiv.org/abs/2607.25895), [Awesome-UMI](https://github.com/chang-xinhai/Awesome-UMI) |
| Learn from human / egocentric data | [Ego4D](https://arxiv.org/abs/2110.07058), [EgoMimic](https://arxiv.org/abs/2410.24221), [EgoInfinity](https://arxiv.org/abs/2606.17385) |
| Generate demonstrations in simulation | [MimicGen](https://arxiv.org/abs/2310.17596), [RoboCasa365](https://arxiv.org/abs/2603.04356), [DreamGen](https://arxiv.org/abs/2505.12705) |
| Compare formats and benchmarks | [RLDS](https://arxiv.org/abs/2111.02767), [LeRobot](https://arxiv.org/abs/2602.22818), [CALVIN](https://arxiv.org/abs/2112.03227) |

## News

- [2026-07-31] Deeply expanded and primary-source-checked the list from 94 to
  296 entries across all four data sources and the cross-source taxonomy.
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
    - [Scripted / Planner / Expert / RL Rollouts](#scripted--planner--expert--rl-rollouts)
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
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-30 | Kinesthetic Guidance, Dexterous Hand, Low-Setup Collection | UCLA | [DexDirect: Direct Kinesthetic Arm Guidance for Efficient Dexterous Demonstration Collection](https://arxiv.org/abs/2607.27784) | arXiv | — |
| 2026-07-23 | Browser Teleoperation, Community Data Engine, Data Refinement | Axis Robotics | [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](https://arxiv.org/abs/2607.21588) | arXiv | [project](https://axisaiorg.github.io/AXIS-V1/) |
| 2026-07-21 | Modular Teleoperation, Bimanual Mobile, Wearable Backpack | Stanford | [ModPack: An Extensible Teleoperation Interface for Bimanual Mobile Manipulation](https://arxiv.org/abs/2607.19479) | arXiv | [project](https://modpack-robotics.github.io/) |
| 2026-07-20 | Leader–Follower, Dual-Arm, Open Hardware | University of Tokyo | [MEVION: Low-Cost Open-Source Data Collection System for Powerful and High-Speed Dual-Arm Manipulation](https://arxiv.org/abs/2607.17970) | IEEE RAP 2026 | [project](https://haraduka.github.io/mevion-hardware/) / [github](https://github.com/haraduka/mevion) |
| 2026-07-16 | VR Teleoperation, Intent Prediction, Low Latency | Georgia Tech | [AHEAD: Anticipatory Hand-Driven Teleoperation via Human Intent Prediction](https://arxiv.org/abs/2607.15172) | IROS 2026 | — |
| 2026-05-12 | Cross-Embodiment I/O, Teleoperation, Hardware-Agnostic | Carnegie Mellon University | [RIO: Flexible Real-Time Robot I/O for Cross-Embodiment Robot Learning](https://arxiv.org/abs/2605.11564) | RSS 2026 | [project](https://robot-i-o.github.io/) / [github](https://github.com/robot-i-o/rio) |
| 2024-07-01 | VR / XR, Bimanual, Active Vision | UC San Diego | [Open-TeleVision: Teleoperation with Immersive Active Visual Feedback](https://arxiv.org/abs/2407.01512) | CoRL 2024 | [github](https://github.com/OpenTeleVision/TeleVision) |
| 2024-03-12 | Mobile Manipulation, Whole-Body, Modular VR | UT Austin | [TeleMoMa: A Modular and Versatile Teleoperation System for Mobile Manipulation](https://arxiv.org/abs/2403.07869) | arXiv | [project](https://robin-lab.cs.utexas.edu/telemoma-web) |
| 2024-03-12 | VR Teleoperation, Bimanual, Dexterous Hand | NYU | [OPEN TEACH: A Versatile Teleoperation System for Robotic Manipulation](https://arxiv.org/abs/2403.07870) | arXiv | [github](https://github.com/aadhithya14/Open-Teach) |
| 2024-01-04 | Leader–Follower, Mobile, Whole-Body | Stanford | [Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation](https://arxiv.org/abs/2401.02117) | arXiv | [project](https://mobile-aloha.github.io/) |
| 2023-09-22 | Leader–Follower, Low-Cost, Cross-Robot | UC Berkeley | [GELLO: A General, Low-Cost, and Intuitive Teleoperation Framework for Robot Manipulators](https://arxiv.org/abs/2309.13037) | CoRL 2023 | [project](https://wuphilipp.github.io/gello/) |
| 2023-07-10 | Cross-Embodiment, Dexterous Hand, VR | UC San Diego | [AnyTeleop: A General Vision-Based Dexterous Robot Arm-Hand Teleoperation System](https://arxiv.org/abs/2307.04577) | arXiv | [project](https://yzqin.github.io/anyteleop/) |
| 2023-04-23 | Leader–Follower, Bimanual, Low-Cost | Stanford | [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://arxiv.org/abs/2304.13705) | RSS 2023 | [project](https://tonyzhaozh.github.io/aloha/) |
| 2018-11-07 | Crowdsourcing, Web Teleoperation, Human Demonstration | Stanford | [RoboTurk: A Crowdsourcing Platform for Robotic Skill Learning through Imitation](https://arxiv.org/abs/1811.02790) | CoRL 2018 | [project](https://roboturk.stanford.edu/) |

#### Interactive Collection

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2024-10-29 | Human Intervention, Corrective Data, Real-World RL | UC Berkeley | [Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning](https://arxiv.org/abs/2410.21845) | arXiv | [project](https://hil-serl.github.io/) / [github](https://github.com/rail-berkeley/hil-serl) |
| 2023-10-26 | Runtime Monitoring, Human Intervention, Failure Detection | UT Austin | [Model-Based Runtime Monitoring with Interactive Imitation Learning](https://arxiv.org/abs/2310.17552) | arXiv | [project](https://ut-austin-rpl.github.io/sirius-runtime-monitor/) |
| 2022-12-09 | Policy Assistance, Shared Autonomy, Robot Fleet | University of Southern California | [PATO: Policy Assisted TeleOperation for Scalable Robot Data Collection](https://arxiv.org/abs/2212.04708) | RSS 2023 | [project](https://clvrai.com/pato/) |
| 2022-11-15 | Human Intervention, Online Deployment, Corrective Data | UT Austin | [Robot Learning on the Job: Human-in-the-Loop Autonomy and Learning During Deployment](https://arxiv.org/abs/2211.08416) | RSS 2023 | [project](https://ut-austin-rpl.github.io/sirius/) |
| 2022-06-29 | Robot Fleet, DAgger, Scalable Supervision | UC Berkeley | [Fleet-DAgger: Interactive Robot Fleet Learning with Scalable Human Supervision](https://arxiv.org/abs/2206.14349) | arXiv | — |
| 2020-12-12 | Remote Intervention, Imitation Learning, Corrective Demonstration | Stanford | [Human-in-the-Loop Imitation Learning using Remote Teleoperation](https://arxiv.org/abs/2012.06733) | arXiv | — |

#### Autonomous Collection

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-15 | Autonomous Collection, Corrective Memory, Data Flywheel | GigaAI | [Zero2Skill: Bootstrapping Robot Skills through Autonomous Data Collection, Training, and Deployment](https://arxiv.org/abs/2607.14047) | arXiv | [project](https://open-gigaai.github.io/Zero2Skill/) / [github](https://github.com/open-gigaai/Zero2Skill) |
| 2024-12-13 | RL Specialists, Autonomous Rollouts, Policy Distillation | UC Berkeley | [RLDG: Robotic Generalist Policy Distillation via Reinforcement Learning](https://arxiv.org/abs/2412.09858) | RSS 2025 | [project](https://generalist-distillation.github.io/) |
| 2024-01-23 | Foundation Models, Fleet Orchestration, Autonomous Data | Google DeepMind | [AutoRT: Embodied Foundation Models for Large Scale Orchestration of Robotic Agents](https://arxiv.org/abs/2401.12963) | arXiv | [publication](https://deepmind.google/research/publications/48151/) |
| 2023-06-20 | Self-Improvement, Multi-Embodiment, Autonomous Practice | Google DeepMind | [RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation](https://arxiv.org/abs/2306.11706) | TMLR 2023 | [project](https://deepmind.google/blog/robocat-a-self-improving-robotic-agent/) |
| 2023-02-13 | Autonomous Exploration, Environment Change, Skill Discovery | Carnegie Mellon University | [ALAN: Autonomously Exploring Robotic Agents in the Real World](https://arxiv.org/abs/2302.06604) | ICRA 2023 | [project](https://robo-explorer.github.io/) |
| 2018-06-27 | Distributed RL, Autonomous Grasping, 580K Trials | Google Brain | [QT-Opt: Scalable Deep Reinforcement Learning for Vision-Based Robotic Manipulation](https://arxiv.org/abs/1806.10293) | CoRL 2018 | [project](https://sites.google.com/view/qtopt) |
| 2016-03-07 | Self-Supervision, Hand–Eye Coordination, Large-Scale Grasping | Google | [Learning Hand-Eye Coordination for Robotic Grasping with Deep Learning and Large-Scale Data Collection](https://arxiv.org/abs/1603.02199) | ISER 2016 | — |

### Robot Data Processing

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2025-02-12 | Data Curation, Mutual Information, Trajectory Filtering | Google DeepMind | [Robot Data Curation with Mutual Information Estimators](https://arxiv.org/abs/2502.08623) | RSS 2025 | [project](https://joeyhejna.com/demonstration-info/) |
| 2023-06-04 | Demonstration Quality, Data Selection, Imitation Learning | Stanford | [Data Quality in Imitation Learning](https://arxiv.org/abs/2306.02437) | NeurIPS 2023 | — |

### Robot-Centric Datasets

#### Single-Embodiment Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2025-10-09 | Humanoid, Household, Open-World | University of Southern California | [Humanoid Everyday: A Comprehensive Robotic Dataset for Open-World Humanoid Manipulation](https://arxiv.org/abs/2510.08807) | arXiv | [project](https://humanoideveryday.github.io/) / [github](https://github.com/ausbxuse/Humanoid-Everyday) / [dataset](https://huggingface.co/datasets/USC-PSI-Lab/humanoid-everyday) |
| 2025-08-30 | Mobile Dual-Arm, Open-World, Language | Galaxea AI | [Galaxea Open-World Dataset and G0 Dual-System VLA Model](https://arxiv.org/abs/2509.00576) | arXiv | [github](https://github.com/OpenGalaxea/GalaxeaVLA) / [dataset](https://huggingface.co/datasets/OpenGalaxea/Galaxea-Open-World-Dataset) |
| 2025-03-09 | Humanoid, 1M+ Trajectories, Long-Horizon | HKU | [AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems](https://arxiv.org/abs/2503.06669) | arXiv | [project](https://agibot-world.com/) / [github](https://github.com/OpenDriveLab/AgiBot-World) |
| 2024-03-19 | Franka, In-the-Wild, 76K Demonstrations | Stanford | [DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset](https://arxiv.org/abs/2403.12945) | RSS 2024 | [project](https://droid-dataset.github.io/) / [github](https://github.com/droid-dataset/droid) |
| 2023-08-24 | WidowX, 60K Trajectories, 24 Environments | UC Berkeley | [BridgeData V2: A Dataset for Robot Learning at Scale](https://arxiv.org/abs/2308.12952) | CoRL 2023 | [project](https://rail-berkeley.github.io/bridgedata/) |
| 2022-10-12 | Language-Conditioned, 600K Trajectories, Real + Sim | Google Research | [Interactive Language: Talking to Robots in Real Time](https://arxiv.org/abs/2210.06407) | RA-L 2023 | [project](https://interactive-language.github.io/) / [github](https://github.com/google-research/language-table) |

#### Multi-Embodiment / Aggregated Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
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
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-25 | Handheld + Teleoperation, State-Gated Experts, Contact-Rich | RAI Institute | [Bridging Handheld and Teleoperated Supervision for Contact-Rich Manipulation via State-Gated Experts](https://arxiv.org/abs/2606.26603) | arXiv | [project](https://nperi-rai.github.io/bridge-project/) |
| 2026-06-12 | Egocentric Guidance, Data Quality, AR | Shanghai Jiao Tong University | [EgoGuide: Egocentric Guidance for Efficient Robot-Free Demonstration Collection and Learning](https://arxiv.org/abs/2606.14665) | arXiv | [project](https://silicx.github.io/EgoGuide/) |
| 2026-03-27 | Underwater, Robot-Free, Domain Transfer | Stanford | [UMI-Underwater: Learning Underwater Manipulation without Underwater Teleoperation](https://arxiv.org/abs/2603.27012) | arXiv | [project](https://umi-under-water.github.io/) / [github](https://github.com/umi-under-water/UMI_underwater) |
| 2026-03-17 | Gripper Design, Demonstration Quality, Ergonomics | UMass Amherst | [Influence of Gripper Design on Human Demonstration Quality for Robot Learning](https://arxiv.org/abs/2603.17189) | ICRA 2026 | — |
| 2025-10-02 | Active Perception, VR, Robot-Free | Shanghai University | [ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations](https://arxiv.org/abs/2510.01607) | arXiv | [project](https://activeumi.github.io/) |
| 2025-09-23 | Multi-View, Wrist + Third-Person, Cross-Embodiment | NYU Abu Dhabi | [MV-UMI: A Scalable Multi-View Interface for Cross-Embodiment Learning](https://arxiv.org/abs/2509.18757) | arXiv | [project](https://mv-umi.github.io/) |
| 2025-07-20 | Portable Gripper, Visuo-Tactile, In-the-Wild | Columbia University | [Touch in the Wild: Learning Fine-Grained Manipulation with a Portable Visuo-Tactile Gripper](https://arxiv.org/abs/2507.15062) | NeurIPS 2025 | [project](https://binghao-huang.github.io/touch_in_the_wild/) / [github](https://github.com/YolandaXinyueZhu/touch_in_the_wild) / [dataset](https://huggingface.co/datasets/binghaohuang-robot/touch_in_the_wild-dataset) |
| 2024-09-29 | Hardware-Independent, T265 VIO, Fast Deployment | Shanghai AI Lab | [FastUMI: A Scalable and Hardware-Independent Universal Manipulation Interface with Dataset](https://arxiv.org/abs/2409.19499) | arXiv | [project](https://fastumi.com/) / [dataset](https://github.com/MrKeee/FastUMI-100K) |
| 2024-02-15 | Handheld Gripper, Robot-Free, Bimanual | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) / [data](https://umi-data.github.io/) |

#### Dexterous Hand Interfaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-15 | Tactile Glove, 22-DoF, Contact Capture | Carnegie Mellon University | [ART-Glove: Articulated Tactile Glove for Contact-Grounded Dexterous Interaction Capture](https://arxiv.org/abs/2606.16370) | arXiv | [project](https://linchangyi1.github.io/ART-Glove/) |
| 2026-06-08 | Bidigital Gripper, Finger-Aligned, Bimanual | AIRoA | [YUBI: Yielding Universal Bidigital Interface for Bimanual Dexterous Manipulation at Scale](https://arxiv.org/abs/2606.10244) | arXiv | [project](https://yubi.airoa.io/) / [hardware](https://github.com/toyota/yubi-hw) / [software](https://github.com/airoa-org/yubi-sw) |
| 2026-06-04 | Wearable DexHand, In-Hand Vision, Tactile | Peking University | [RealDexUMI: A Wearable Universal Manipulation Interface for Dexterous Robot Learning](https://arxiv.org/abs/2606.06033) | arXiv | [project](https://research.beingbeyond.com/realdexumi) |
| 2026-04-14 | DexHand, Interface, Data Quality | X Square Robot | [XRZero-G0: Pushing the Frontier of Dexterous Robotic Manipulation with Interfaces, Quality and Ratios](https://arxiv.org/abs/2604.13001) | arXiv | [github](https://github.com/X-Square-Robot/XRZero-G0) |
| 2025-07-05 | Human Hand, Robot-Free, Policy Learning | Peking University | [RwoR: Generating Robot Demonstrations from Human Hand Collection for Policy Learning without Robot](https://arxiv.org/abs/2507.03930) | IROS 2025 | [project](https://rwor.github.io/) |

#### Whole-body Interfaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-17 | Humanoid, Active Perception, Head–Hand | Shanghai Jiao Tong University | [HALOMI: Learning Humanoid Loco-Manipulation with Active Perception from Human Demonstrations](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-05-20 | Mobile Manipulation, Cross-View, Robot-Free | Zhejiang University | [Mobile UMI: Cross-View Diffusion Policy with Decoupled Kinematics for Mobile Manipulation](https://arxiv.org/abs/2605.20894) | arXiv | — |
| 2026-05-05 | VR-UMI, Humanoid, Sparse Keypoints | BAAI | [BifrostUMI: Bridging Robot-Free Demonstrations and Humanoid Whole-Body Manipulation](https://arxiv.org/abs/2605.03452) | arXiv | [project](https://baai-aether.github.io/BifrostUMI/) |
| 2026-03-03 | Whole-Body, Egocentric, Mobile Manipulation | Stanford | [HoMMI: Learning Whole-Body Mobile Manipulation from Human Demonstrations](https://arxiv.org/abs/2603.03243) | arXiv | — |
| 2026-02-06 | Humanoid, Whole-Body, Portable Capture | Tsinghua | [Humanoid Manipulation Interface: Humanoid Whole-Body Manipulation from Robot-Free Demonstrations](https://arxiv.org/abs/2602.06643) | arXiv | [project](https://humanoid-manipulation-interface.github.io/) |
| 2025-10-31 | Active Vision, Head–Hand Coordination, Semi-Humanoid | UC Berkeley | [EgoMI: Learning Active Vision and Whole-Body Manipulation from Egocentric Human Demonstrations](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | Aerial Manipulation, Embodiment-Aware Guidance | Carnegie Mellon University | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2024-07-14 | Mobile Manipulation, Whole-Body, Legged | Stanford | [UMI on Legs: Making Manipulation Policies Mobile with Manipulation-Centric Whole-body Controllers](https://arxiv.org/abs/2407.10353) | CoRL 2024 | [github](https://github.com/real-stanford/umi-on-legs) |

### UMI State and Action Recovery

#### Pose / Trajectory Tracking

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-04-15 | LiDAR-Inertial SLAM, Metric Pose, Multimodal Calibration | HKU | [UMI-3D: Extending Universal Manipulation Interface from Vision-Limited to 3D Spatial Perception](https://arxiv.org/abs/2604.14089) | arXiv | [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) / [policy](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy) |

#### Interaction Sensing

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-24 | Wrist-Worn sEMG, Per-Finger Force, Robot-Free | Amazon FAR | [ForceBand: Learning Forceful Manipulation with sEMG](https://arxiv.org/abs/2606.26093) | arXiv | [project](https://forceband-emg.github.io/) |
| 2026-06-11 | Whole-Body Tactile, Force-Supervised, Humanoid | Georgia Tech | [WT-UMI: Tactile-based Whole-Body Manipulation via Force-Supervised Contact-Aware Planning](https://arxiv.org/abs/2606.13232) | arXiv | [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | Arm-Worn, Force, Vision–Tactile | Shanghai Jiao Tong University | [AetheRock: An Arm-Worn Robot Teaching System for Force-Guided Vision-Tactile Learning](https://arxiv.org/abs/2606.09777) | arXiv | — |
| 2026-04-12 | Multimodal, Tactile, Force / Wrench | BAAI | [OmniUMI: Towards Physically Grounded Robot Learning via Human-Aligned Multimodal Interaction](https://arxiv.org/abs/2604.10647) | arXiv | — |
| 2026-04-08 | Visuo-Tactile, Closed-Loop, Recovery Data | Fudan University | [TAMEn: Tactile-Aware Manipulation Engine for Closed-Loop Data Collection in Contact-Rich Tasks](https://arxiv.org/abs/2604.07335) | arXiv | [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) / [dataset](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) |
| 2026-01-21 | Vision + Tactile + F/T, Event Segmentation, Contact-Rich | TU Munich | [TacUMI: A Multi-Modal Universal Manipulation Interface for Contact-Rich Tasks](https://arxiv.org/abs/2601.14550) | arXiv | [github](https://github.com/Tac-UMI/TacUMI) |
| 2026-01-15 | Finger-Level Wrench, RGB-D, Compliance | Stanford | [In-the-Wild Compliant Manipulation with UMI-FT](https://arxiv.org/abs/2601.09988) | arXiv | [project](https://umi-ft.github.io/) / [github](https://github.com/real-stanford/UMI-FT) |
| 2025-09-18 | Visuo-Tactile, Proprioception, Tactile Pretraining | Shanghai Jiao Tong University | [exUMI: Extensible Robot Teaching System with Action-aware Task-agnostic Tactile Representation](https://arxiv.org/abs/2509.14688) | CoRL 2025 | [project](https://silicx.github.io/exUMI/) / [github](https://github.com/silicx/exUMI) |
| 2025-06-02 | Robot-Free, Visuo-Tactile, Wearable | Shanghai Innovation Institute | [FreeTacMan: Robot-free Visuo-Tactile Data Collection System for Contact-rich Manipulation](https://arxiv.org/abs/2506.01941) | ICRA 2026 | [project](https://opendrivelab.com/FreeTacMan) / [github](https://github.com/OpenDriveLab/FreeTacMan) |
| 2024-06-27 | Audio-Visual, In-the-Wild, Contact Events | Stanford | [ManiWAV: Learning Robot Manipulation from In-the-Wild Audio-Visual Data](https://arxiv.org/abs/2406.19464) | CoRL 2024 | [project](https://real.stanford.edu/maniwav) / [github](https://github.com/real-stanford/maniwav) |

#### UMI-to-Robot Retargeting

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-09 | Calibration-Free, Hand Retargeting, Few-Shot Guidance | Noematrix | [AnyDexRT: Calibration-Free Dexterous Hand Retargeting with Few-Shot Human Guidance](https://arxiv.org/abs/2607.08341) | arXiv | [project](https://chenxi-wang.github.io/projects/anydexrt/) |
| 2026-07-08 | Low-Jitter Retargeting, Real-Time, User Study | ETH Zurich | [Smooth Operator: A Real-Time Sampling-Based Algorithm for Kinematic Hand Retargeting](https://arxiv.org/abs/2607.07491) | arXiv | [project](https://mimicrobotics.github.io/smooth-operator/) |
| 2025-05-28 | Human Hand, Exoskeleton, Robot-Hand Inpainting | Stanford | [DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation](https://arxiv.org/abs/2505.21864) | CoRL 2025 | [github](https://github.com/real-stanford/DexUMI) / [data](https://umi-data.github.io/) |

### UMI Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-28 | Bimanual, 2,000 Hours, LeRobot v3 | Simple AI | [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](https://arxiv.org/abs/2607.25895) | arXiv | [project](https://cloud.simpleai.tech/simple-world-lab/hifi-umi/) / [dataset](https://huggingface.co/datasets/simple-world-lab/HiFi-UMI-2K) |
| 2026-06-12 | Bimanual, 2K+ Hours, Lance / LeRobot | Tencent Robotics X | [Hy-Embodied-0.5-VLA: From Vision-Language-Action Models to a Real-World Robot Learning Stack](https://arxiv.org/abs/2606.14409) | arXiv | [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) / [dataset](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) |
| 2026-06-03 | UMI-VQA, Fisheye, Physically Validated Trajectories | TeleAI | [VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training](https://arxiv.org/abs/2606.04708) | arXiv | [project](https://tele-umi-vista.github.io/) / [github](https://github.com/TeleHuman/umi-vista) / [dataset](https://huggingface.co/collections/TeleEmbodied/vista) |

## Human / Egocentric

Human / egocentric data captures natural interaction at a scale that robot-only
collection cannot match. This section covers the perception, action recovery,
embodiment transfer, policy learning, and datasets required to turn human
activity into robot-usable supervision.

### Interaction Perception

#### Hand–Object Interaction

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-03-26 | Articulation, Egocentric, In-the-Wild | Aalto University | [PAWS: Perception of Articulation in the Wild at Scale from Egocentric Videos](https://arxiv.org/abs/2603.25539) | arXiv | [project](https://aaltoml.github.io/PAWS/) / [github](https://github.com/AaltoML/PAWS) |
| 2026-01-08 | Object Forecasting, 3D Trajectory, Human Video | University of Washington | [ObjectForesight: Predicting Future 3D Object Trajectories from Human Videos](https://arxiv.org/abs/2601.05237) | arXiv | [project](https://objectforesight.github.io/) |
| 2025-11-17 | Hand Forecasting, Egocentric, Future Motion | Shanghai Jiao Tong University | [Uni-Hand: Universal Hand Motion Forecasting in Egocentric Views](https://arxiv.org/abs/2511.12878) | TPAMI 2026 | [project](https://irmvlab.github.io/unihand.github.io/) / [github](https://github.com/IRMVLab/UniHand) |
| 2025-09-01 | Articulated Object, Motion Estimation, In-the-Wild | University of Freiburg | [Articulated Object Estimation in the Wild](https://arxiv.org/abs/2509.01708) | CoRL 2025 | [github](https://github.com/robot-learning-freiburg/artipoint) |
| 2025-03-12 | Bimanual Affordance, Contact, Human Video | TU Darmstadt | [2HandedAfforder: Learning Precise Actionable Bimanual Affordances from Human Videos](https://arxiv.org/abs/2503.09320) | ICCV 2025 | [project](https://sites.google.com/view/2handedafforder) / [github](https://github.com/pearl-robot-lab/2HandedAfforder) |
| 2024-08-19 | Affordance, HOI, Depth Prior | University of Edinburgh | [Learning Precise Affordances from Egocentric Videos for Robotic Manipulation](https://arxiv.org/abs/2408.10123) | ICCV 2025 | Graspable and functional affordance masks |
| 2023-12-25 | HOI, Stable Grasp, Contact | University of Bristol | [Get a Grip: Reconstructing Hand-Object Stable Grasps in Egocentric Videos](https://arxiv.org/abs/2312.15719) | arXiv | [project / code](https://zhifanzhu.github.io/getagrip/) |
| 2023-04-17 | Affordance, Human Video, Robot Learning | Carnegie Mellon University | [Affordances from Human Videos as a Versatile Representation for Robotics](https://arxiv.org/abs/2304.08488) | CVPR 2023 | [project](https://robo-affordances.github.io/) |
| 2021-12-16 | Contact, Object State, Human Hands | University of Illinois Urbana-Champaign | [Human Hands as Probes for Interactive Object Understanding](https://arxiv.org/abs/2112.09120) | CVPR 2022 | [project](https://s-gupta.github.io/hands-as-probes/) / [github](https://github.com/uiuc-robovision/hands-as-probes) |

#### Tracking / Reconstruction

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-06-17 | 4D Hand, Gaussian Splatting | Yonsei University | [Hand-4DGS: Feed-Forward 3D Gaussian Splatting for 4D Hand Reconstruction from Egocentric Videos](https://arxiv.org/abs/2606.19156) | arXiv | [project](https://jeongminb.github.io/hand-4dgs/) |
| 2025-01-06 | World-Space Hand, Egocentric SLAM, Motion Infilling | Shanghai Jiao Tong University | [HaWoR: World-Space Hand Motion Reconstruction from Egocentric Videos](https://arxiv.org/abs/2501.02973) | CVPR 2025 | [project](https://hawor-project.github.io/) / [github](https://github.com/ThunderVVV/HaWoR) |
| 2024-11-14 | 4D Scene, Monocular, Self-Supervised | Tsinghua University | [Self-Supervised Monocular 4D Scene Reconstruction for Egocentric Videos](https://arxiv.org/abs/2411.09145) | ICCV 2025 | [project / code](https://egomono4d.github.io/) |
| 2023-12-11 | 3D Hand Pose, Egocentric, In-the-Wild | University of Illinois Urbana-Champaign | [3D Hand Pose Estimation in Everyday Egocentric Images](https://arxiv.org/abs/2312.06583) | arXiv | WildHands |
| 2023-12-08 | 3D Hand, MANO, Reconstruction | UC Berkeley | [Reconstructing Hands in 3D with Transformers](https://arxiv.org/abs/2312.05251) | CVPR 2024 | [project / code](https://geopavlakos.github.io/hamer/) |
| 2023-11-30 | Joint Hand–Object, Monocular, Category-Agnostic | ETH Zurich | [HOLD: Category-agnostic 3D Reconstruction of Interacting Hands and Objects from Video](https://arxiv.org/abs/2311.18448) | CVPR 2024 | [github](https://github.com/zc-alexfan/hold) |

### Human Action Extraction

#### Image-space / Latent Actions

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-02-25 | Joint-Aligned Latent Action, In-the-Wild, VLA | Peking University | [Joint-Aligned Latent Action: Towards Scalable VLA Pretraining in the Wild](https://arxiv.org/abs/2602.21736) | CVPR 2026 | [project](https://research.beingbeyond.com/jala) / [github](https://github.com/BeingBeyond/JALA) |
| 2026-01-31 | Contrastive Latent Action, Human Video, Manipulation | Harbin Institute of Technology, Shenzhen | [ConLA: Contrastive Latent Action Learning from Human Videos for Robotic Manipulation](https://arxiv.org/abs/2602.00557) | arXiv | [github](https://github.com/WeishengDAI/ConLA) |
| 2026-01-07 | Latent Action, VLA Pretraining, Human Video | Tsinghua University | [CLAP: Contrastive Latent Action Pretraining for Learning Vision-Language-Action Models from Human Videos](https://arxiv.org/abs/2601.04061) | arXiv | [project](https://lin-shan.com/CLAP/) / [github](https://github.com/LinShan-Bin/OpenCLAP) |
| 2024-12-05 | Motion Token, Video Pretraining, VLA | University of Hong Kong | [Moto: Latent Motion Token as the Bridging Language for Learning Robot Manipulation from Videos](https://arxiv.org/abs/2412.04445) | ICCV 2025 | [project](https://chenyi99.github.io/moto/) / [github](https://github.com/TencentARC/Moto) |
| 2024-10-15 | Latent Action, Actionless Video, Pretraining | KAIST | [Latent Action Pretraining from Videos](https://arxiv.org/abs/2410.11758) | ICLR 2025 | [project](https://latentactionpretraining.github.io/) / [github](https://github.com/LatentActionPretraining/LAPA) |
| 2024-07-21 | Optical Flow, Cross-Domain, Action Interface | Stanford University | [Flow as the Cross-Domain Manipulation Interface](https://arxiv.org/abs/2407.15208) | CoRL 2024 | [project](https://im-flow-act.github.io/) / [github](https://github.com/real-stanford/im2Flow2Act) |
| 2024-05-02 | Point Tracks, Internet Video, Robot Action | Carnegie Mellon University | [Track2Act: Predicting Point Tracks from Internet Videos Enables Generalizable Robot Manipulation](https://arxiv.org/abs/2405.01527) | ECCV 2024 | [project](https://homangab.github.io/track2act/) / [github](https://github.com/homangab/Track-2-Act) |
| 2024-01-21 | General Flow, Foundation Affordance, Point Trajectory | Tsinghua University | [General Flow as Foundation Affordance for Scalable Robot Learning](https://arxiv.org/abs/2401.11439) | CoRL 2024 | [project](https://general-flow.github.io/) / [github](https://github.com/michaelyuancb/general_flow) |
| 2023-12-28 | Point Trajectories, Actionless Video | UC Berkeley | [Any-point Trajectory Modeling for Policy Learning](https://arxiv.org/abs/2401.00025) | RSS 2024 | [project / code](https://xingyu-lin.github.io/atm/) |
| 2023-10-12 | Dense Correspondence, Actionless Video, Closed-Form Action | National Taiwan University | [Learning to Act from Actionless Videos through Dense Correspondences](https://arxiv.org/abs/2310.08576) | ICLR 2024 | [project](https://flow-diffusion.github.io/) / [github](https://github.com/flow-diffusion/AVDC) |

#### Metric Actions / Retargeting

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-06-16 | 4D HOI, Metric Retargeting, Web Video | Rice University | [EgoInfinity: A Web-Scale 4D Hand-Object Interaction Data Engine for Any-View Robot Retargeting and Video-to-Action Robot Learning](https://arxiv.org/abs/2606.17385) | arXiv | [project](https://huggingface.co/spaces/Rice-RobotPI-Lab/EgoInfinity) |
| 2026-06-10 | Video-to-Robot, Dexterous, Feasibility | Georgia Tech | [EgoEngine: From Egocentric Human Videos to High-Fidelity Dexterous Robot Demonstrations](https://arxiv.org/abs/2606.12604) | arXiv | [project](https://egoengine.github.io/) |
| 2026-06-06 | RGB-D, Asset-Free Reconstruction, Dexterous Policy | Harbin Institute of Technology | [EgoAERO: Learning Dexterous Manipulation from a Single Egocentric Video without Object Assets](https://arxiv.org/abs/2606.08057) | arXiv | — |
| 2026-02-25 | Active Vision, 3D Flow, Camera Trajectory | Georgia Tech | [EgoAVFlow: Robot Policy Learning with Active Vision from Human Egocentric Videos via 3D Flow](https://arxiv.org/abs/2602.22461) | arXiv | — |
| 2026-02-09 | 3D Hand–Object Trajectory, RGB Video, Dexterous Policy | Carnegie Mellon University | [Dexterous Manipulation Policies from RGB Human Videos via 3D Hand-Object Trajectory Reconstruction](https://arxiv.org/abs/2602.09013) | arXiv | [project](https://videomanip.github.io/) |
| 2025-11-20 | Smart Lenses, Hand Retargeting, Dexterous | New York University | [Dexterity from Smart Lenses: Multi-Fingered Robot Manipulation with In-the-Wild Human Demonstrations](https://arxiv.org/abs/2511.16661) | arXiv | [project](https://aina-robot.github.io/) / [github](https://github.com/facebookresearch/AINA) |
| 2025-06-04 | Object-Centric, 3D Motion Field, Human Video | UC Berkeley | [Object-centric 3D Motion Field for Robot Learning from Human Videos](https://arxiv.org/abs/2506.04227) | arXiv | [project](https://zhaohengyin.github.io/3DMF/) / [github](https://github.com/zhaohengyin/3dmf-mod) |
| 2025-05-17 | Robot Inpainting, Visual Retargeting | Peking University | [H2R: A Human-to-Robot Data Augmentation for Robot Pre-training from Videos](https://arxiv.org/abs/2505.11920) | arXiv | 1M-scale robotized video datasets |
| 2025-05-13 | Skill Representation, Cross-Embodiment, Human Video | Yonsei University | [UniSkill: Imitating Human Videos via Cross-Embodiment Skill Representations](https://arxiv.org/abs/2505.08787) | CoRL 2025 | [project](https://kimhanjung.github.io/UniSkill/) / [github](https://github.com/KimHanjung/UniSkill) |
| 2025-03-31 | Web Video, Skill Distillation, Metric Trajectory | University of Pennsylvania | [ZeroMimic: Distilling Robotic Manipulation Skills from Web Videos](https://arxiv.org/abs/2503.23877) | ICRA 2025 | [project](https://zeromimic.github.io/) / [github](https://github.com/junyaoshi/ZeroMimic) |
| 2025-03-27 | Bimanual Retargeting, Dexterous, Residual Learning | Beijing Institute for General Artificial Intelligence | [ManipTrans: Efficient Dexterous Bimanual Manipulation Transfer via Residual Learning](https://arxiv.org/abs/2503.21860) | CVPR 2025 | [project](https://maniptrans.github.io/) / [github](https://github.com/ManipTrans/ManipTrans) |
| 2025-03-10 | 2D-to-3D Action, Web Video, Zero-Shot | Technical University of Munich | [VidBot: Learning Generalizable 3D Actions from In-the-Wild 2D Human Videos for Zero-Shot Robotic Manipulation](https://arxiv.org/abs/2503.07135) | CVPR 2025 | [project](https://hanzhic.github.io/vidbot-project/) / [github](https://github.com/ethz-mrl/VidBot) |
| 2025-02-17 | Tool Function, One-Shot, Functional Correspondence | Southern University of Science and Technology | [FUNCTO: Function-Centric One-Shot Imitation Learning for Tool Manipulation](https://arxiv.org/abs/2502.11744) | CoRL 2025 | [project](https://sites.google.com/view/functo) / [github](https://github.com/mkt1412/FUNCTO_public) |
| 2025-01-13 | Motion Tracks, Cross-Embodiment, 6-DoF Recovery | Cornell University | [Motion Tracks: A Unified Representation for Human-Robot Transfer in Few-Shot Imitation Learning](https://arxiv.org/abs/2501.06994) | ICRA 2025 | [project](https://portal-cornell.github.io/motion_track_policy/) / [github](https://github.com/jren03/mt_pi_codebase) |
| 2024-10-15 | Humanoid, Single Video, Whole-Body Retargeting | UT Austin | [OKAMI: Teaching Humanoid Robots Manipulation Skills through Single Video Imitation](https://arxiv.org/abs/2410.11792) | CoRL 2024 | [project](https://ut-austin-rpl.github.io/OKAMI/) / [github](https://github.com/UT-Austin-RPL/OKAMI) |
| 2024-05-06 | Bimanual, Screw Space, Human Video | UT Austin | [ScrewMimic: Bimanual Imitation from Human Videos with Screw Space Projection](https://arxiv.org/abs/2405.03666) | RSS 2024 | [project](https://robin-lab.cs.utexas.edu/ScrewMimic/) / [github](https://github.com/UT-Austin-RobIn/ScrewMimic) |
| 2024-04-24 | Dexterous Retargeting, Human Video, Simulation | Inria | [ViViDex: Learning Vision-Based Dexterous Manipulation from Human Videos](https://arxiv.org/abs/2404.15709) | ICRA 2025 | [project](https://zerchen.github.io/projects/vividex.html) |
| 2024-03-22 | Trajectory Transformation, Demonstration, One-Shot | University of Freiburg | [DITTO: Demonstration Imitation by Trajectory Transformation](https://arxiv.org/abs/2403.15203) | IROS 2024 | [project](https://ditto.cs.uni-freiburg.de/) / [github](https://github.com/robot-learning-freiburg/DITTO) |
| 2024-03-12 | Mocap, Dexterous Hand, Retargeting | Stanford University | [DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation](https://arxiv.org/abs/2403.07788) | RSS 2024 | [project](https://dex-cap.github.io/) |
| 2023-02-24 | Human Play, Hierarchical Imitation, Long-Horizon | Stanford University | [MimicPlay: Long-Horizon Imitation Learning by Watching Human Play](https://arxiv.org/abs/2302.12422) | CoRL 2023 | [project](https://mimic-play.github.io/) / [github](https://github.com/j96w/MimicPlay) |
| 2022-12-08 | Hand Retargeting, Internet Video | Carnegie Mellon University | [VideoDex: Learning Dexterity from Internet Videos](https://arxiv.org/abs/2212.04498) | CoRL 2022 | [project](https://video-dex.github.io/) |
| 2022-11-23 | 4D HOI, Object-Centric, Physics Retargeting | UC Berkeley | [Learning to Imitate Object Interactions from Internet Videos](https://arxiv.org/abs/2211.13225) | arXiv | [project](https://austinapatel.github.io/imitate-video/) |
| 2022-09-07 | Keypoints, Geometric Constraints, Embodiment-Independent | Karlsruhe Institute of Technology | [K-VIL: Keypoints-Based Visual Imitation Learning](https://arxiv.org/abs/2209.03277) | TRO 2023 | [project](https://sites.google.com/view/k-vil) / [code](https://gitlab.com/paper-code/kvil_public) |
| 2022-02-21 | Monocular RGB, Hand Retargeting, YouTube | Carnegie Mellon University | [Robotic Telekinesis: Learning a Robotic Hand Imitator by Watching Humans on YouTube](https://arxiv.org/abs/2202.10448) | RSS 2022 | [project](https://robotic-telekinesis.github.io/) |
| 2022-02-01 | Human Hand Prior, Dexterous Grasping, Web Video | UT Austin | [DexVIP: Learning Dexterous Grasping with Human Hand Pose Priors from Video](https://arxiv.org/abs/2202.00164) | CoRL 2021 | [project](https://vision.cs.utexas.edu/projects/dexvip-dexterous-grasp-pose-prior/) |
| 2021-08-12 | Hand–Object Pose, Dexterous Retargeting | UC San Diego | [DexMV: Imitation Learning for Dexterous Manipulation from Human Videos](https://arxiv.org/abs/2108.05877) | ECCV 2022 | [project / code](https://yzqin.github.io/dexmv/) |

### Human Data-to-Policy

#### Human-data Pretraining

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-02-18 | Egocentric Scale, Dexterous Manipulation, Diverse Human Data | NVIDIA | [EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data](https://arxiv.org/abs/2602.16710) | arXiv | [project](https://research.nvidia.com/labs/gear/egoscale/) |
| 2026-02-06 | World Model, Latent Action, Scaling | NVIDIA | [DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos](https://arxiv.org/abs/2602.06949) | ICML 2026 | [project](https://dreamdojo-world.github.io/) / [github](https://github.com/NVIDIA/DreamDojo) |
| 2026-01-19 | Human-Centric Scaling, Cross-Embodiment, VLA | BeingBeyond | [Being-H0.5: Scaling Human-Centric Robot Learning for Cross-Embodiment Generalization](https://arxiv.org/abs/2601.12993) | arXiv | [project](https://research.beingbeyond.com/being-h05) / [github](https://github.com/BeingBeyond/Being-H) |
| 2025-12-15 | Visual–Physical Alignment, Spatial Supervision, VLA | Peking University | [Spatial-Aware VLA Pretraining through Visual-Physical Alignment from Human Videos](https://arxiv.org/abs/2512.13080) | CVPR 2026 | [project](https://beingbeyond.github.io/VIPA-VLA/) / [github](https://github.com/BeingBeyond/VIPA-VLA) |
| 2025-07-21 | Large-Scale Human Video, VLA, Action Pretraining | Peking University | [Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos](https://arxiv.org/abs/2507.15597) | arXiv | [project](https://beingbeyond.github.io/Being-H0/) / [github](https://github.com/BeingBeyond/Being-H0) |
| 2025-07-16 | Egocentric Video, VLA, Pseudo-Action | UC San Diego | [EgoVLA: Learning Vision-Language-Action Models from Egocentric Human Videos](https://arxiv.org/abs/2507.12440) | arXiv | [project](https://rchalyang.github.io/EgoVLA/) / [github](https://github.com/RchalYang/EgoVLA_Release) |
| 2025-05-21 | World Modeling, Human–Robot Co-training | NVIDIA | [FLARE: Robot Learning with Implicit World Modeling](https://arxiv.org/abs/2505.15659) | CoRL 2025 | [project](https://research.nvidia.com/labs/gear/flare/) |
| 2024-09-12 | HOI Pretraining, Human Video, Robot Policy | UC Berkeley | [Hand-Object Interaction Pretraining from Videos](https://arxiv.org/abs/2409.08273) | ICRA 2025 | [project](https://hgaurav2k.github.io/hop/) / [github](https://github.com/hgaurav2k/hop) |
| 2024-07-26 | Human Affordance, Video Pretraining, Robot Learning | Carnegie Mellon University | [HRP: Human Affordances for Robotic Pre-Training](https://arxiv.org/abs/2407.18911) | RSS 2024 | [project](https://hrp-robot.github.io/) / [github](https://github.com/SudeepDasari/data4robotics/tree/hrp_release) |
| 2024-06-20 | Domain Alignment, Visual Pretraining, Human–Robot | HKUST (Guangzhou) | [Mitigating the Human-Robot Domain Discrepancy in Visual Pre-Training for Robotic Manipulation](https://arxiv.org/abs/2406.14235) | CVPR 2025 | [project](https://jiaming-zhou.github.io/projects/HumanRobotAlign/) / [github](https://github.com/jiaming-zhou/HumanRobotAlign) |
| 2022-03-23 | Representation Pretraining, Ego4D | Stanford University | [R3M: A Universal Visual Representation for Robot Manipulation](https://arxiv.org/abs/2203.12601) | CoRL 2022 | [github](https://github.com/facebookresearch/r3m) |

#### Human–Robot Co-training

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-08 | World Action Model, Human–Robot Co-training, 3D Flow | Georgia Tech | [EgoWAM: World Action Models Beyond Pixels with In-the-Wild Egocentric Human Data](https://arxiv.org/abs/2607.08436) | arXiv | [project](https://gatech-rl2.github.io/egowam.github.io/) |
| 2026-06-15 | VLA Pretraining, Pseudo-Action, Reliability | ACE Robotics | [ACE-Ego-0: Unifying Egocentric Human and Robotic Data for VLA Pretraining](https://arxiv.org/abs/2606.17200) | arXiv | [github](https://github.com/ACERobotics-VLA/ACE-Ego-0) |
| 2026-06-06 | Egocentric Human + Robot, VLA Fine-Tuning | Stanford University | [Ego-Pi: VLA Fine-Tuning for Ego-Centric Human and Robot Data](https://arxiv.org/abs/2606.08107) | arXiv | [project](https://egopipaper.github.io/) |
| 2025-09-26 | Human–Robot Alignment, Robotized Video, VLA | GigaAI | [MimicDreamer: Aligning Human and Robot Demonstrations for Scalable VLA Training](https://arxiv.org/abs/2509.22199) | arXiv | [project](https://mimicdreamer.github.io/) / [github](https://github.com/GigaAI-research/MimicDreamer) |
| 2025-09-23 | Domain Adaptation, Egocentric Human Data, Imitation | Georgia Tech | [EgoBridge: Domain Adaptation for Generalizable Imitation from Egocentric Human Data](https://arxiv.org/abs/2509.19626) | NeurIPS 2025 | [project](https://ego-bridge.github.io/) |
| 2025-09-18 | Human Demonstrations, VLA, Robot Manipulation | Alibaba DAMO Academy | [RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation](https://arxiv.org/abs/2509.15212) | arXiv | [github](https://github.com/alibaba-damo-academy/RynnVLA-001) |
| 2025-09-04 | Mobile Manipulation, Egocentric Human Data, Scaling | Georgia Tech | [EMMA: Scaling Mobile Manipulation via Egocentric Human Data](https://arxiv.org/abs/2509.04443) | RA-L 2026 | [project](https://ego-moma.github.io/) |
| 2025-07-31 | Human Manipulation, Bimanual, Co-training | Tsinghua University | [H-RDT: Human Manipulation Enhanced Bimanual Robotic Manipulation](https://arxiv.org/abs/2507.23523) | AAAI 2026 | [project](https://embodiedfoundation.github.io/hrdt) / [github](https://github.com/HongzheBi/H_RDT) |
| 2024-10-31 | Human–Robot Co-training, Project Aria | Georgia Tech | [EgoMimic: Scaling Imitation Learning via Egocentric Video](https://arxiv.org/abs/2410.24221) | ICRA 2025 | [project / code / data](https://egomimic.github.io/) |

#### Human-derived Rewards / Goals

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-04-27 | Human Intention, Large-Scale Demonstrations, Policy Prior | Tsinghua University | [Learning Human-Intention Priors from Large-Scale Human Demonstrations for Robotic Manipulation](https://arxiv.org/abs/2604.24681) | arXiv | — |
| 2022-07-19 | Human Intent, Robot Exploration, Reward | Carnegie Mellon University | [Human-to-Robot Imitation in the Wild](https://arxiv.org/abs/2207.09450) | RSS 2022 | [project / dataset](https://human2robot.github.io/) |
| 2021-06-07 | Cross-Embodiment, Inverse RL, Temporal Alignment | Stanford University | [XIRL: Cross-Embodiment Inverse Reinforcement Learning](https://arxiv.org/abs/2106.03911) | CoRL 2021 | [project](https://x-irl.github.io/) / [github](https://github.com/google-research/google-research/tree/master/xirl) |
| 2021-03-31 | In-the-Wild Human Video, Visual Reward, Robot RL | Stanford University | [Learning Generalizable Robotic Reward Functions from “In-The-Wild” Human Videos](https://arxiv.org/abs/2103.16817) | RSS 2021 | [project](https://sites.google.com/view/dvd-human-videos) / [github](https://github.com/anniesch/dvd) |

#### Robot-free Policy Learning

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-05-24 | Interaction Tokens, Zero-Shot, Egocentric | University of Maryland | [HumanEgo: Zero-Shot Robot Learning from Minutes of Human Egocentric Videos](https://arxiv.org/abs/2605.24934) | arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) |
| 2026-04-09 | Active Vision, Head–Hand Coordination, Egocentric | Shanghai Jiao Tong University | [ActiveGlasses: Learning Manipulation with Active Vision from Ego-centric Human Demonstration](https://arxiv.org/abs/2604.08534) | arXiv | [project](https://yanwen-zou.github.io/activeglasses/) |
| 2026-03-23 | Egocentric Human Video, Dexterous Hand, Universal Control | Tsinghua University | [UniDex: A Robot Foundation Suite for Universal Dexterous Hand Control from Egocentric Human Videos](https://arxiv.org/abs/2603.22264) | CVPR 2026 | [project](https://unidex-ai.github.io/) / [github](https://github.com/unidex-ai/UniDex) |
| 2025-05-26 | Smart Glasses, 3D Points, Zero Robot Data | New York University | [EgoZero: Robot Learning from Smart Glasses](https://arxiv.org/abs/2505.20290) | arXiv | [project](https://egozero-robot.github.io/) |
| 2025-03-02 | Visual Editing, Zero-Shot, Human Video | Stanford University | [Phantom: Training Robots Without Robots Using Only Human Videos](https://arxiv.org/abs/2503.00779) | CoRL 2025 | [project](https://phantom-human-videos.github.io/) / [github](https://github.com/MarionLepert/phantom) |

### Human / Egocentric Datasets

Dataset-release papers are listed only here, even when they also introduce
perception or policy baselines.

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-15 | 2,000 h Scale, Smartphone Capture, Training Toolchain | Ant Group | [Open-AoE: An Open Egocentric Manipulation Dataset and Toolchain for Embodied Learning](https://arxiv.org/abs/2607.14183) | arXiv | [github](https://github.com/ant-research/Open-AoE) / [dataset](https://huggingface.co/datasets/inclusionAI/OpenAoE-2000h) |
| 2026-05-07 | 1M Hours, Ego + Exo, Human-Centric Video | Peking University | [HumanNet: Scaling Human-centric Video Learning to One Million Hours](https://arxiv.org/abs/2605.06747) | arXiv | [project](https://dagroup-pku.github.io/HumanNet/) / [github](https://github.com/DAGroup-PKU/HumanNet) |
| 2026-04-26 | Egocentric, Real-World Work, Multimodal Annotation | JD.com | [EgoLive: A Large-Scale Egocentric Dataset from Real-World Human Tasks](https://arxiv.org/abs/2604.23570) | arXiv | [data](https://robotdata-market.jdcloud.com/console/market) |
| 2026-01-15 | 100M Clips, Ego + Exo, Action-Centric | HKUST | [Action100M: A Large-scale Video Action Dataset](https://arxiv.org/abs/2601.10592) | arXiv | [github](https://github.com/facebookresearch/Action100M) / [dataset](https://huggingface.co/datasets/facebook/action100m-preview) |
| 2025-12-30 | 1,000+ h, Multimodal, Dexterous Manipulation | TARS Robotics | [World In Your Hands: A Large-Scale and Open-Source Ecosystem for Learning Human-Centric Manipulation in the Wild](https://arxiv.org/abs/2512.24310) | arXiv | [project](https://wiyh.tars-ai.com/) / [github](https://github.com/tars-robotics/World-In-Your-Hands) |
| 2025-05-16 | 829 h, Vision Pro, Hand / Body | Apple | [EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video](https://arxiv.org/abs/2505.11709) | ICLR 2026 | [github / data](https://github.com/apple/ml-egodex) |
| 2025-02-06 | 41 h, Multi-Sensor, Fine-Grained HOI | University of Bristol | [HD-EPIC: A Highly-Detailed Egocentric Video Dataset](https://arxiv.org/abs/2502.04144) | CVPR 2025 | [project / data](https://hd-epic.github.io/) / [github](https://github.com/hd-epic/hd-epic-annotations) |
| 2024-11-13 | 5M Clips, Video–Action Pairs, Egocentric Generation | Alibaba | [EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation](https://arxiv.org/abs/2411.08380) | NeurIPS 2025 | [project](https://egovid.github.io/) / [github](https://github.com/JeffWang987/EgoVid) |
| 2024-06-14 | 300 h, Aria + IMU + Eye Gaze, Full-Body Motion | Meta Reality Labs | [Nymeria: A Massive Collection of Multimodal Egocentric Daily Motion in the Wild](https://arxiv.org/abs/2406.09905) | ECCV 2024 | [project / data](https://www.projectaria.com/datasets/nymeria/) / [github](https://github.com/facebookresearch/nymeria_dataset) |
| 2024-06-13 | Aria / Quest 3, 3D Hand–Object GT | Meta Reality Labs | [Introducing HOT3D: An Egocentric Dataset for 3D Hand and Object Tracking](https://arxiv.org/abs/2406.09598) | ECCV 2024 | [project / data](https://facebookresearch.github.io/hot3d/) |
| 2024-06-10 | Multi-View RGB-D, 3D HOI, Pose Tracking | University of Texas at Dallas | [HO-Cap: A Capture System and Dataset for 3D Reconstruction and Pose Tracking of Hand-Object Interaction](https://arxiv.org/abs/2406.06843) | NeurIPS 2025 | [project / data](https://irvlutd.github.io/HOCap/) / [github](https://github.com/IRVLUTD/HO-Cap) |
| 2024-03-28 | Bimanual, Multi-View, Body / Hand / Object Pose | Shanghai Jiao Tong University | [OAKINK2: A Dataset of Bimanual Hands-Object Manipulation in Complex Task Completion](https://arxiv.org/abs/2403.19417) | CVPR 2024 | [project / data](https://oakink.net/v2/) / [github](https://github.com/oakink/OakInk2) |
| 2023-12-22 | Egocentric, Procedural Errors, 4D | University of Texas at Dallas | [CaptainCook4D: A Dataset for Understanding Errors in Procedural Activities](https://arxiv.org/abs/2312.14556) | NeurIPS 2024 Datasets and Benchmarks | [project / data](https://captaincook4d.github.io/captain-cook/) / [github](https://github.com/CaptainCook4D) |
| 2023-11-30 | Ego–Exo, Skilled Activity, 3D | UT Austin | [Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives](https://arxiv.org/abs/2311.18259) | CVPR 2024 | [project / data](https://ego-exo4d-data.org/) |
| 2023-09-29 | 166 h, Multimodal, Human Assistance | Microsoft Research | [HoloAssist: An Egocentric Human Interaction Dataset for Interactive AI Assistants in the Real World](https://arxiv.org/abs/2309.17024) | ICCV 2023 | [project / data](https://holoassist.github.io/) |
| 2022-08-07 | Egocentric RGB, Hand–Object Segmentation, Contact | University of Pennsylvania | [Fine-Grained Egocentric Hand-Object Segmentation: Dataset, Model, and Applications](https://arxiv.org/abs/2208.03826) | ECCV 2022 | [github / data](https://github.com/owenzlz/EgoHOS) |
| 2022-04-28 | Bimanual HOI, Multi-View, Contact | ETH Zurich | [ARCTIC: A Dataset for Dexterous Bimanual Hand-Object Manipulation](https://arxiv.org/abs/2204.13662) | CVPR 2023 | [project / data](https://arctic.is.tue.mpg.de/) |
| 2022-03-29 | Hand–Object Pose, Grasp Knowledge, Multi-View | Shanghai Jiao Tong University | [OakInk: A Large-scale Knowledge Repository for Understanding Hand-Object Interaction](https://arxiv.org/abs/2203.15709) | CVPR 2022 | [project / data](https://oakink.net/) / [github](https://github.com/oakink/OakInk) |
| 2022-03-28 | Multi-View, Procedural Activities | University of Bristol | [Assembly101: A Large-Scale Multi-View Video Dataset for Understanding Procedural Activities](https://arxiv.org/abs/2203.14712) | CVPR 2022 | [project / data](https://assembly-101.github.io/) |
| 2022-03-24 | RGB-D, 3D Action Target, Future Hand Trajectory | New York University | [Egocentric Prediction of Action Target in 3D](https://arxiv.org/abs/2203.13116) | CVPR 2022 | [project / data](https://ai4ce.github.io/EgoPAT3D/) / [github](https://github.com/ai4ce/EgoPAT3D) |
| 2022-03-18 | 2D Affordance, Ego + Exo, 20K Images | University of Science and Technology of China | [Learning Affordance Grounding from Exocentric Images](https://arxiv.org/abs/2203.09905) | CVPR 2022 | [github](https://github.com/lhc1224/Cross-View-AG) |
| 2022-03-03 | RGB-D, 4D HOI, 3D Pose | Tsinghua University | [HOI4D: A 4D Egocentric Dataset for Category-Level Human-Object Interaction](https://arxiv.org/abs/2203.01577) | CVPR 2022 | [project / data](https://hoi4d.github.io/) |
| 2021-10-13 | 3,000 h, Global, Ego Video | Meta AI Research | [Ego4D: Around the World in 3,000 Hours of Egocentric Video](https://arxiv.org/abs/2110.07058) | CVPR 2022 | [project / data](https://ego4d-data.org/) |
| 2021-04-22 | Egocentric RGB-D, Bimanual HOI, 6D Object Pose | ETH Zurich | [H2O: Two Hands Manipulating Objects for First Person Interaction Recognition](https://arxiv.org/abs/2104.11181) | ICCV 2021 | [project / data](https://taeinkwon.com/projects/h2o/) / [github](https://github.com/taeinkwon/h2odataset) |
| 2021-04-09 | Multi-View RGB-D, Hand Pose, Object Pose | NVIDIA | [DexYCB: A Benchmark for Capturing Hand Grasping of Objects](https://arxiv.org/abs/2104.04631) | CVPR 2021 | [project / data](https://dex-ycb.github.io/) / [github](https://github.com/NVlabs/dex-ycb-toolkit) |
| 2020-06-11 | 100K Frames, Hand Contact, Internet Video | University of Michigan | [Understanding Human Hands in Contact at Internet Scale](https://arxiv.org/abs/2006.06669) | CVPR 2020 | [github](https://github.com/ddshan/hand_object_detector) |
| 2018-04-08 | Kitchen, RGB, Action Narration | University of Bristol | [Scaling Egocentric Vision: The EPIC-KITCHENS Dataset](https://arxiv.org/abs/1804.02748) | ECCV 2018 | [project / data](https://epic-kitchens.github.io/) |

## Simulation

Synthetic data engines provide controllable ground truth, scalable task
variation, and inexpensive experience. Entries are separated by their primary
asset: demonstrations, environments, observations, or released datasets.

### Simulation Demonstrations

#### Scripted / Planner / Expert / RL Rollouts

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-01 | Bimanual, Furniture Assembly, Simulation Experts | Mitsubishi Electric Research Laboratories | [FurnitureVLA: Learning Long-Horizon Bimanual Furniture Assembly with Vision-Language-Action Model](https://arxiv.org/abs/2607.01212) | arXiv | — |
| 2026-05-29 | RL Rollouts, Sim-to-Real, VLA Data | Synthoid.ai | [RDGen: Demonstration Generation for High-Quality Robot Learning via Reinforcement Learning](https://arxiv.org/abs/2605.30957) | arXiv | — |
| 2026-04-09 | Text-to-Sim, pHRI, Policy Rollouts | Carnegie Mellon University | [Generative Simulation for Policy Learning in Physical Human-Robot Interaction](https://arxiv.org/abs/2604.08664) | arXiv | — |
| 2026-03-19 | Generative 3D Worlds, RL Rollouts, Sim-to-Real | Horizon Robotics | [Scaling Sim-to-Real Reinforcement Learning for Robot VLAs with Generative 3D Worlds](https://arxiv.org/abs/2603.18532) | arXiv | — |
| 2025-10-21 | Mobile Bimanual, Constraints, Planner Rollouts | Stanford University | [MoMaGen: Generating Demonstrations under Soft and Hard Constraints for Multi-Step Bimanual Mobile Manipulation](https://arxiv.org/abs/2510.18316) | arXiv | — |
| 2025-09-24 | Diffusion RL, VLA Training Data, LIBERO | HKUST | [Beyond Human Demonstrations: Diffusion-Based Reinforcement Learning to Generate Data for VLA Training](https://arxiv.org/abs/2509.19752) | arXiv | — |
| 2025-04-25 | Residual RL, Dexterous Grasping, Synthetic Data | Microsoft | [RL-Driven Data Generation for Robust Vision-Based Dexterous Grasping](https://arxiv.org/abs/2504.18084) | arXiv | — |
| 2024-10-04 | Task Generation, Expert Rollouts, Simulation | Tsinghua University | [GenSim2: Scaling Robot Data Generation with Multi-modal and Reasoning LLMs](https://arxiv.org/abs/2410.03645) | CoRL 2024 | [project](https://gensim2.github.io/) / [github](https://github.com/GenSim2/GenSim2) |
| 2024-05-12 | Differentiable Physics, VLM Objective, Optimization | Shanghai Jiao Tong University | [DiffGen: Robot Demonstration Generation via Differentiable Physics Simulation, Differentiable Rendering, and Vision-Language Model](https://arxiv.org/abs/2405.07309) | arXiv | [project](https://sites.google.com/view/diffgen) |
| 2024-02-22 | Simulated Teleoperation, Dexterous Hand, Sim-to-Real | UC San Diego | [CyberDemo: Augmenting Simulated Human Demonstration for Real-World Dexterous Manipulation](https://arxiv.org/abs/2402.14795) | CVPR 2024 | — |
| 2023-07-26 | LLM Planning, Language Labels, Expert Trajectories | Google DeepMind | [Scaling Up and Distilling Down: Language-Guided Robot Skill Acquisition](https://arxiv.org/abs/2307.14535) | CoRL 2023 | [project](https://www.cs.columbia.edu/~huy/scalingup/) |

#### Demonstration Expansion

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-14 | One Demo, Synthetic Data Engine, Mobile Manipulation | Carnegie Mellon University | [Worlds in One Demo: A Synthetic Data Engine for Learning Open-World Mobile Manipulation](https://arxiv.org/abs/2607.13154) | arXiv | [project](https://wanda.lecar-lab.org/) / [dataset](https://huggingface.co/datasets/LeCAR-Lab/Wanda) |
| 2026-07-01 | Action Composition, Offline Augmentation, VLA | Shenzhen Technology University | [Unleashing More Actions via Action Compositional Training for VLA Models](https://arxiv.org/abs/2607.00351) | arXiv | — |
| 2026-03-26 | Deformable Objects, Bimanual, MimicGen | NVIDIA | [SoftMimicGen: A Data Generation System for Scalable Robot Learning in Deformable Object Manipulation](https://arxiv.org/abs/2603.25725) | arXiv | — |
| 2025-11-20 | Dynamic Tasks, DMP, Few Demonstrations | SUPSI | [DynaMimicGen: A Data Generation Framework for Robot Learning of Dynamic Tasks](https://arxiv.org/abs/2511.16223) | arXiv | — |
| 2025-02-24 | One-Shot, Point Cloud, TAMP | Tsinghua University | [DemoGen: Synthetic Demonstration Generation for Data-Efficient Visuomotor Policy Learning](https://arxiv.org/abs/2502.16932) | RSS 2025 | — |
| 2024-10-24 | Skill Segmentation, Data Generation, Imitation Learning | NVIDIA | [SkillMimicGen: Automated Demonstration Generation for Efficient Skill Learning and Deployment](https://arxiv.org/abs/2410.18907) | CoRL 2024 | [project](https://skillgen.github.io/) |
| 2024-05-02 | Corrective Interventions, Recovery Data, Robustness | UC Berkeley | [IntervenGen: Interventional Data Generation for Robust and Data-Efficient Robot Imitation Learning](https://arxiv.org/abs/2405.01472) | arXiv | — |
| 2023-10-26 | Object-Centric Retargeting, Demonstration Generation | NVIDIA | [MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations](https://arxiv.org/abs/2310.17596) | CoRL 2023 | [project](https://mimicgen.github.io/) / [github](https://github.com/NVlabs/mimicgen_environments) |

#### Generated / Model Rollouts

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-04-13 | Classical + Neural Simulation, Action-Video Pairs | CUHK-Shenzhen | [ComSim: Building Scalable Real-World Robot Data Generation via Compositional Simulation](https://arxiv.org/abs/2604.11386) | arXiv | — |
| 2026-04-04 | Video Diffusion, Bimanual, Action-Consistent Data | University of Southern California | [CRAFT: Video Diffusion for Bimanual Robot Data Generation](https://arxiv.org/abs/2604.03552) | arXiv | — |
| 2026-03-19 | Video Prior, Scene Synthesis, Trajectory Lifting | Nanjing University | [V-Dreamer: Automating Robotic Simulation and Trajectory Synthesis via Video Generation Priors](https://arxiv.org/abs/2603.18811) | arXiv | [project](https://jia-handsome.github.io/v-Dreamer/) |
| 2025-05-19 | Video World Model, Action-Labeled Trajectories | NVIDIA | [DreamGen: Unlocking Generalization in Robot Learning through Video World Models](https://arxiv.org/abs/2505.12705) | arXiv | [project](https://research.nvidia.com/labs/gear/dreamgen/) |
| 2025-02-14 | Internet Video, Task Reconstruction, RL | UC Berkeley | [Video2Policy: Scaling up Manipulation Tasks in Simulation through Internet Videos](https://arxiv.org/abs/2502.09886) | arXiv | — |
| 2023-10-09 | Neural Simulator, Long-Horizon Interaction, Hindsight Labels | Google DeepMind | [Learning Interactive Real-World Simulators](https://arxiv.org/abs/2310.06114) | ICLR 2024 | [project](https://universal-simulator.github.io/unisim/) |
| 2023-02-22 | Semantic Augmentation, Generated Experience, Sim-to-Real | Google Research | [Scaling Robot Learning with Semantically Imagined Experience](https://arxiv.org/abs/2302.11550) | RSS 2023 | [project](https://diffusion-rosie.github.io/) |

### Simulation Environments

#### Task Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-03-04 | 365 Tasks, 2,500 Kitchens, Mobile Manipulation | UT Austin | [RoboCasa365: A Large-Scale Simulation Framework for Training and Benchmarking Generalist Robots](https://arxiv.org/abs/2603.04356) | ICLR 2026 | [project](https://robocasa.ai/) |
| 2026-02-12 | Affordance Graph, Self-Evolution, Task Worlds | Tsinghua University | [Affordance-Graphed Task Worlds: Self-Evolving Task Generation for Scalable Embodied Learning](https://arxiv.org/abs/2602.12065) | arXiv | — |
| 2025-07-01 | Humanoid, Bimanual Dexterity, LLM + MCTS | TeleAI | [HumanoidGen: Data Generation for Bimanual Dexterous Manipulation via LLM Reasoning](https://arxiv.org/abs/2507.00833) | NeurIPS 2025 | [project](https://openhumanoidgen.github.io/) / [github](https://github.com/TeleHuman/HumanoidGen) |
| 2024-06-04 | Household Simulation, Generative Tasks | UT Austin | [RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots](https://arxiv.org/abs/2406.02523) | RSS 2024 | [project](https://robocasa.ai/) / [github](https://github.com/robocasa/robocasa) |
| 2023-11-02 | Generative Simulation, Task + Reward Generation | Carnegie Mellon University | [RoboGen: Towards Unleashing Infinite Data for Automated Robot Learning via Generative Simulation](https://arxiv.org/abs/2311.01455) | ICML 2024 | [project](https://generativesimulation.github.io/) / [github](https://github.com/Genesis-Embodied-AI/RoboGen) |
| 2023-10-02 | LLM Code Generation, Task Curricula, Experts | MIT | [GenSim: Generating Robotic Simulation Tasks via Large Language Models](https://arxiv.org/abs/2310.01361) | arXiv | [project](https://liruiw.github.io/gensim/) / [github](https://github.com/liruiw/GenSim) |

#### Scene Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-08 | Agentic 3D Worlds, Sim-Ready Assets, Cross-Simulator | Horizon Robotics | [EmbodiedGen V2: An Agentic, Simulation-Ready 3D World Engine for Embodied AI](https://arxiv.org/abs/2607.07459) | arXiv | — |
| 2025-06-12 | Generative 3D World, URDF, Articulated Assets | Horizon Robotics | [EmbodiedGen: Towards a Generative 3D World Engine for Embodied Intelligence](https://arxiv.org/abs/2506.10600) | arXiv | [project](https://horizonrobotics.github.io/robot_lab/embodied_gen/index.html) |
| 2024-06-17 | Procedural Interiors, Photorealism, Dense GT | Princeton University | [Infinigen Indoors: Photorealistic Indoor Scenes using Procedural Generation](https://arxiv.org/abs/2406.11824) | CVPR 2024 | [github](https://github.com/princeton-vl/infinigen) |
| 2023-12-14 | Language-to-3D, AI2-THOR, Objaverse | Allen Institute for AI | [Holodeck: Language Guided Generation of 3D Embodied AI Environments](https://arxiv.org/abs/2312.09067) | CVPR 2024 | [project](https://yueyang1996.github.io/holodeck/) |
| 2023-06-15 | Procedural Worlds, Photorealism, Ground Truth | Princeton University | [Infinite Photorealistic Worlds using Procedural Generation](https://arxiv.org/abs/2306.09310) | CVPR 2023 | [github](https://github.com/princeton-vl/infinigen) |
| 2022-06-14 | Procedural Generation, Indoor Scenes, Embodied AI | Allen Institute for AI | [ProcTHOR: Large-Scale Embodied AI Using Procedural Generation](https://arxiv.org/abs/2206.06994) | NeurIPS 2022 | [project](https://procthor.allenai.org/) / [github](https://github.com/allenai/procthor) |

#### Asset Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2023-07-11 | 10M+ 3D Objects, Open Assets, Scale | Allen Institute for AI | [Objaverse-XL: A Universe of 10M+ 3D Objects](https://arxiv.org/abs/2307.05663) | NeurIPS 2023 | [project](https://objaverse.allenai.org/) |
| 2022-12-15 | 3D Assets, Object Dataset, Simulation | Allen Institute for AI | [Objaverse: A Universe of Annotated 3D Objects](https://arxiv.org/abs/2212.08051) | CVPR 2023 | [project](https://objaverse.allenai.org/) / [github](https://github.com/allenai/objaverse-xl) |

#### Real-to-Sim / Digital Twins

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-07-29 | 3DGS + MuJoCo, Real2Sim2Real, Open Simulator | Tsinghua University | [DISCOVERSE: Efficient Robot Simulation in Complex High-Fidelity Environments](https://arxiv.org/abs/2507.21981) | arXiv | [github](https://github.com/TATP-233/DISCOVERSE) |
| 2025-05-14 | Scan-to-Render, Human Video, Robot-Free Scaling | UC Berkeley | [Real2Render2Real: Scaling Robot Data Without Dynamics Simulation or Robot Hardware](https://arxiv.org/abs/2505.09601) | TMLR 2026 | [github](https://github.com/uynitsuj/real2render2real) |
| 2025-04-17 | Editable 3DGS, One-Shot, Novel Demonstrations | Shanghai AI Laboratory | [Novel Demonstration Generation with Gaussian Splatting Enables Robust One-Shot Manipulation](https://arxiv.org/abs/2504.13175) | RSS 2025 | [project](https://yangsizhe.github.io/robosplat/) / [github](https://github.com/InternRobotics/RoboSplat) |
| 2024-11-18 | 3DGS, Physics Interaction, Real2Sim2Real | Shanghai Jiao Tong University | [RoboGSim: A Real2Sim2Real Robotic Gaussian Splatting Simulator](https://arxiv.org/abs/2411.11839) | arXiv | [project](https://robogsim.github.io/) |
| 2024-09-16 | Gaussian Splatting, Photoreal Rendering, Sim-to-Real | Carnegie Mellon University | [SplatSim: Zero-Shot Sim2Real Transfer of RGB Manipulation Policies Using Gaussian Splatting](https://arxiv.org/abs/2409.10161) | arXiv | [project](https://splatsim.github.io/) |
| 2024-03-06 | RialTo, Real-to-Sim, Digital Twin | MIT | [Reconciling Reality through Simulation: A Real-to-Sim-to-Real Approach for Robust Manipulation](https://arxiv.org/abs/2403.03949) | RSS 2024 | [project](https://real-to-sim-to-real.github.io/RialTo/) / [github](https://github.com/real-to-sim-to-real/RialToPolicyLearning) |

### Synthetic Observations

#### Rendering / Domain Randomization

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2022-03-07 | Procedural Data Generator, Dense Annotations, Rendering | Google DeepMind | [Kubric: A Scalable Dataset Generator](https://arxiv.org/abs/2203.03570) | CVPR 2022 | [github](https://github.com/google-research/kubric) |
| 2017-03-20 | Domain Randomization, Sim-to-Real, Vision | OpenAI | [Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World](https://arxiv.org/abs/1703.06907) | IROS 2017 | — |

#### Image / Video Generation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2025-03-15 | Video Generation, Data Augmentation, Robot Learning | UNC-Chapel Hill | [ReBot: Scaling Robot Learning with Real-to-Sim-to-Real Robotic Video Synthesis](https://arxiv.org/abs/2503.14526) | arXiv | [project](https://yuffish.github.io/rebot/) |

### Simulation Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-23 | 100K Scenes, Real2Sim, Expert Trajectories | ByteDance | [TableVerse: A Large-scale Tabletop Dataset with Real-world Grounded Layouts for Generalizable Manipulation](https://arxiv.org/abs/2607.21017) | arXiv | [project](https://bytedance.github.io/TableVerse/) / [github](https://github.com/bytedance/TableVerse) / [dataset](https://huggingface.co/datasets/ByteDance/TableVerse) |
| 2025-11-20 | 630K Trajectories, 7,433 h, Four Embodiments | Shanghai AI Laboratory | [InternData-A1: Pioneering High-Fidelity Synthetic Data for Pre-training Generalist Policy](https://arxiv.org/abs/2511.16651) | arXiv | — |
| 2025-06-22 | Data Generator, Benchmark, Dataset, Bimanual | HKU MMLab | [RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation](https://arxiv.org/abs/2506.18088) | arXiv | [project](https://robotwin-platform.github.io/) / [github](https://github.com/robotwin-Platform/RoboTwin) |
| 2024-10-01 | GPU Simulation, Diverse Tasks, Demonstration Dataset | UC San Diego | [ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI](https://arxiv.org/abs/2410.00425) | arXiv | [github](https://github.com/haosulab/ManiSkill) |

## Data Engine Taxonomy

Cross-source methods and infrastructure that apply to more than one of the four
data origins, plus standardized evaluation protocols and benchmarks. A
source-specific benchmark is placed here when evaluation—not the underlying
data source—is its primary asset.

### Surveys / Systems

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-27 | Data Pyramid, Five Sources, Data Recipes | Peking University | [Data Pyramid for Embodied Manipulation](https://arxiv.org/abs/2607.24744) | arXiv | [project](https://jasper-aaa.github.io/embodied-data-pyramid/) / [github](https://github.com/worldbench/awesome-embodied-data-pyramid) |
| 2026-06-04 | Physical Data Engine, Grounding, Position Paper | Motoniq.ai | [Robots Need More than VLA and World Models](https://arxiv.org/abs/2606.06556) | arXiv | — |
| 2026-04-24 | VLA Data Survey, Datasets, Benchmarks, Data Engines | University of Maryland, College Park | [Vision-Language-Action in Robotics: A Survey of Datasets, Benchmarks, and Data Engines](https://arxiv.org/abs/2604.23001) | TMLR 2026 | [github](https://github.com/ziyaow1010/vla-datasets-benchmarks) |
| 2021-11-01 | Simulation, Domain Randomization, Review | TU Darmstadt | [Robot Learning from Randomized Simulations: A Review](https://arxiv.org/abs/2111.00956) | IJRR 2022 | — |

### Modalities / Representations

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-03-04 | Structural Action, Joint Codebook, Cross-Embodiment | University of Science and Technology of China | [Structural Action Transformer for 3D Dexterous Manipulation](https://arxiv.org/abs/2603.03960) | CVPR 2026 | — |
| 2025-06-06 | 3D Object Flow, Human + Robot, Cross-Embodiment | South China University of Technology | [3DFlowAction: Learning Cross-Embodiment Manipulation from 3D Flow World Model](https://arxiv.org/abs/2506.06199) | arXiv | — |
| 2025-01-17 | UniAct, Universal Actions, Cross-Embodiment | Tsinghua University | [Universal Actions for Enhanced Embodied Foundation Models](https://arxiv.org/abs/2501.10105) | CVPR 2025 | [github](https://github.com/2toinf/UniAct) |
| 2025-01-16 | Action Tokenization, Compression, VLA | Physical Intelligence | [FAST: Efficient Action Tokenization for Vision-Language-Action Models](https://arxiv.org/abs/2501.09747) | arXiv | [github](https://github.com/Physical-Intelligence/openpi) |
| 2024-09-30 | HPT, Heterogeneous Embodiments, Proprioception | MIT | [Scaling Proprioceptive-Visual Learning with Heterogeneous Pre-trained Transformers](https://arxiv.org/abs/2409.20537) | arXiv | [project](https://liruiw.github.io/hpt/) |
| 2023-11-03 | Trajectory Sketches, Hindsight Labels, Task Generalization | UC San Diego | [RT-Trajectory: Robotic Task Generalization via Hindsight Trajectory Sketches](https://arxiv.org/abs/2311.01977) | ICRA 2024 | [project](https://rt-trajectory.github.io/) |

### Processing / Curation

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-07 | Primitive Discovery, Structure-Aware Selection, VLA | Shanghai AI Laboratory | [SIEVE: Structure-Aware Data Selection for Imitation Learning with VLA Models](https://arxiv.org/abs/2607.06442) | arXiv | — |
| 2026-02-21 | Action Verification, Simulation Replay, Filtering | KAIST | [RoboCurate: Harnessing Diversity with Action-Verified Neural Trajectory for Robot Learning](https://arxiv.org/abs/2602.18742) | arXiv | [project](https://seungkukim.github.io/robocurate/) |
| 2025-05-28 | SCIZOR, Deduplication, Data Curation | UT Austin | [SCIZOR: A Self-Supervised Approach to Data Curation for Large-Scale Imitation Learning](https://arxiv.org/abs/2505.22626) | ICRA 2026 | [project](https://ut-austin-rpl.github.io/SCIZOR/) |
| 2024-10-23 | NILS, Zero-Shot Labeling, Foundation Models | Karlsruhe Institute of Technology | [Scaling Robot Policy Learning via Zero-Shot Labeling with Foundation Models](https://arxiv.org/abs/2410.17772) | CoRL 2024 | [project](https://robottasklabeling.github.io/) |
| 2024-10-15 | Point Tracking, Pseudo-Labels, Real Video | University of Oxford | [CoTracker3: Simpler and Better Point Tracking by Pseudo-Labelling Real Videos](https://arxiv.org/abs/2410.11831) | arXiv | [github](https://github.com/facebookresearch/co-tracker) |
| 2024-07-16 | Multi-Sensor Calibration, IMU, Camera | Wuhan University | [iKalibr: Unified Targetless Spatiotemporal Calibration for Resilient Integrated Inertial Systems](https://arxiv.org/abs/2407.11420) | T-RO 2025 | [github](https://github.com/Unsigned-Long/iKalibr) |
| 2024-06-14 | MASt3R, Image Matching, Metric 3D | Naver Labs Europe | [Grounding Image Matching in 3D with MASt3R](https://arxiv.org/abs/2406.09756) | ECCV 2024 | [github](https://github.com/naver/mast3r) |
| 2024-04-05 | 3D Point Tracking, Depth, Camera Motion | Zhejiang University | [SpatialTracker: Tracking Any 2D Pixels in 3D Space](https://arxiv.org/abs/2404.04319) | CVPR 2024 | [github](https://github.com/henry123-boy/SpaTracker) |
| 2023-12-21 | Dense Reconstruction, Uncalibrated Images, 3D | Naver Labs Europe | [DUSt3R: Geometric 3D Vision Made Easy](https://arxiv.org/abs/2312.14132) | CVPR 2024 | [github](https://github.com/naver/dust3r) |
| 2023-12-13 | Model-Free 6D Pose, Tracking, Novel Objects | NVIDIA | [FoundationPose: Unified 6D Pose Estimation and Tracking of Novel Objects](https://arxiv.org/abs/2312.08344) | CVPR 2024 | [github](https://github.com/NVlabs/FoundationPose) |
| 2023-06-14 | TAPIR, 2D Point Tracking, Long-Term Tracks | Google DeepMind | [TAPIR: Tracking Any Point with per-frame Initialization and temporal Refinement](https://arxiv.org/abs/2306.08637) | ICCV 2023 | [github](https://github.com/google-deepmind/tapnet) |
| 2023-03-24 | General Tracking, 6D Pose, Reconstruction | NVIDIA | [BundleSDF: Neural 6-DoF Tracking and 3D Reconstruction of Unknown Objects](https://arxiv.org/abs/2303.14158) | CVPR 2023 | [project](https://bundlesdf.github.io/) / [github](https://github.com/NVlabs/BundleSDF) |
| 2021-08-24 | Visual SLAM, Monocular / Stereo / RGB-D | Princeton University | [DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras](https://arxiv.org/abs/2108.10869) | NeurIPS 2021 | [github](https://github.com/princeton-vl/DROID-SLAM) |
| 2020-07-23 | Visual-Inertial SLAM, Multi-Map, Open Source | University of Zaragoza | [ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM](https://arxiv.org/abs/2007.11898) | T-RO 2021 | [github](https://github.com/UZ-SLAMLab/ORB_SLAM3) |

### Formats / Infrastructure

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-02-26 | LeRobot, Dataset Hub, Reproducibility | Hugging Face | [LeRobot: An Open-Source Library for End-to-End Robot Learning](https://arxiv.org/abs/2602.22818) | ICLR 2026 | [github](https://github.com/huggingface/lerobot) / [docs](https://huggingface.co/docs/lerobot) |
| 2023-10-10 | Unified Environments, Demonstrations, Hardware Interface | Meta AI | [RoboHive: A Unified Framework for Robot Learning](https://arxiv.org/abs/2310.06828) | arXiv | [github](https://github.com/vikashplus/robohive) |
| 2023-01-10 | GPU Simulation, Modular Environments, Sim-to-Real | NVIDIA | [Orbit: A Unified Simulation Framework for Interactive Robot Learning Environments](https://arxiv.org/abs/2301.04195) | RA-L 2023 | [github](https://github.com/isaac-sim/IsaacLab) |
| 2021-11-04 | Dataset Schema, Episodic Data, RL | Google DeepMind | [RLDS: An Ecosystem to Generate, Share and Use Datasets in Reinforcement Learning](https://arxiv.org/abs/2111.02767) | arXiv | [github](https://github.com/google-research/rlds) |
| 2021-08-06 | Offline Demonstrations, Benchmarking, Tooling | Stanford University | [What Matters in Learning from Offline Human Demonstrations for Robot Manipulation](https://arxiv.org/abs/2108.03298) | CoRL 2021 | [project](https://robomimic.github.io/) / [github](https://github.com/ARISE-Initiative/robomimic) |
| 2020-09-25 | Modular Simulator, Standardized APIs, Manipulation | Stanford University | [robosuite: A Modular Simulation Framework and Benchmark for Robot Learning](https://arxiv.org/abs/2009.12293) | arXiv | [github](https://github.com/ARISE-Initiative/robosuite) |

### Mixing / Scaling

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-25 | Precision Scaling Law, Demonstration Count, System Ceiling | Tsinghua University | [The Curse of Precision: A Data Scaling Law for High-Precision Robotic Manipulation](https://arxiv.org/abs/2607.23108) | ICRA 2026 | — |
| 2024-10-24 | Scaling Laws, Imitation Learning, Data Composition | Tsinghua University | [Data Scaling Laws in Imitation Learning for Robotic Manipulation](https://arxiv.org/abs/2410.18647) | ICLR 2025 | [project](https://data-scaling-laws.github.io/) |
| 2024-08-26 | Dataset Mixture, Data Weighting, Imitation Learning | Stanford University | [Re-Mix: Optimizing Data Mixtures for Large Scale Imitation Learning](https://arxiv.org/abs/2408.14037) | arXiv | — |
| 2024-08-21 | CrossFormer, Cross-Embodiment, Data Scaling | UC Berkeley | [Scaling Cross-Embodied Learning: One Policy for Manipulation, Navigation, Locomotion and Aviation](https://arxiv.org/abs/2408.11812) | arXiv | [project](https://crossformer-model.github.io/) |
| 2024-05-20 | Open X-Embodiment, Dataset Mixture, Generalist Policy | UC Berkeley | [Octo: An Open-Source Generalist Robot Policy](https://arxiv.org/abs/2405.12213) | RSS 2024 | [project](https://octo-models.github.io/) / [github](https://github.com/octo-models/octo) |

### Evaluation / Benchmarks

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :---- |
| 2026-07-27 | Real-Robot Evaluation, Arm Farm, Quality-Labeled Rollouts | Armnet | [ArmnetBench v0.1: Parallel Real-World Evaluation of Manipulation Policies on a Low-Cost Arm Farm](https://arxiv.org/abs/2607.24481) | arXiv | [dataset](https://huggingface.co/collections/armnet/armnetbench-v01) |
| 2026-06-09 | UMI-Bench, Real-Robot Protocol, Reproducibility | Soochow University | [UMI-Bench 1.0: An Open and Reproducible Real-World Benchmark for Tabletop Robotic Manipulation with UMI Data](https://arxiv.org/abs/2606.10382) | arXiv | [project](https://umibenchmark.github.io/) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) / [models](https://huggingface.co/UMIbenchmark/UMI-Benchmark-v1-checkpoints) |
| 2026-05-28 | Real Robot, Distributional Evaluation, Confidence Intervals | PhAIL | [PhAIL: A Real-Robot VLA Benchmark and Distributional Methodology](https://arxiv.org/abs/2605.29710) | arXiv | [project](https://phail.ai/) |
| 2026-04-28 | Physical Reasoning, Manipulation, Planning | Tsinghua University | [KinDER: A Physical Reasoning Benchmark for Robot Learning and Planning](https://arxiv.org/abs/2604.25788) | arXiv | — |
| 2025-10-20 | Remote Evaluation, Real Robot, VLA | AgiBot | [RoboChallenge: Large-scale Real-robot Evaluation of Embodied Policies](https://arxiv.org/abs/2510.17950) | arXiv | — |
| 2024-12-24 | Long-Horizon Reasoning, Language-Conditioned Manipulation | Tsinghua University | [VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks](https://arxiv.org/abs/2412.18194) | AAAI 2025 | [github](https://github.com/OpenMOSS/VLABench) |
| 2024-09-14 | Experimental Design, Evaluation, Reproducibility | Cornell University | [Robot Learning as an Empirical Science: Best Practices for Policy Evaluation](https://arxiv.org/abs/2409.09491) | arXiv | — |
| 2024-05-09 | SimplerEnv, Sim-to-Real Evaluation, Policy Ranking | UC San Diego | [Evaluating Real-World Robot Manipulation Policies in Simulation](https://arxiv.org/abs/2405.05941) | arXiv | [project](https://simpler-env.github.io/) / [github](https://github.com/simpler-env/SimplerEnv) |
| 2024-03-14 | BEHAVIOR-1K, Household, 1,000 Activities | Stanford University | [BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation](https://arxiv.org/abs/2403.09227) | CoRL 2024 | [project](https://behavior.stanford.edu/) / [github](https://github.com/StanfordVL/BEHAVIOR-1K) |
| 2024-02-13 | Generalization, Perturbations, Manipulation | University of Washington | [THE COLOSSEUM: A Benchmark for Evaluating Generalization for Robotic Manipulation](https://arxiv.org/abs/2402.08191) | arXiv | [project](https://robot-colosseum.github.io/) |
| 2023-06-05 | Lifelong Learning, Teleoperation, Benchmark | UT Austin | [LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning](https://arxiv.org/abs/2306.03310) | NeurIPS 2023 | [project](https://libero-project.github.io/) / [github](https://github.com/Lifelong-Robot-Learning/LIBERO) |
| 2023-06-01 | Offline Training, Remote Real-Robot Testing, TOTO | Meta AI | [Train Offline, Test Online: A Real Robot Learning Benchmark](https://arxiv.org/abs/2306.00942) | CoRL 2023 | — |
| 2023-03-31 | CortexBench, Visual Representations, 17 Tasks | Meta AI | [Where are we in the search for an Artificial Visual Cortex for Embodied Intelligence?](https://arxiv.org/abs/2303.18240) | NeurIPS 2023 | [github](https://github.com/facebookresearch/eai-vc) |
| 2023-02-09 | Generalizable Manipulation, Demonstrations, Simulator | UC San Diego | [ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills](https://arxiv.org/abs/2302.04659) | ICLR 2023 | [github](https://github.com/haosulab/ManiSkill) |
| 2022-10-06 | Multimodal Prompts, Task Generalization, Simulation | NVIDIA | [VIMA: General Robot Manipulation with Multimodal Prompts](https://arxiv.org/abs/2210.03094) | ICML 2023 | [project](https://vimalabs.github.io/) |
| 2021-12-06 | Long-Horizon, Language Conditioning, CALVIN | University of Freiburg | [CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks](https://arxiv.org/abs/2112.03227) | RA-L 2022 | [github](https://github.com/mees/calvin) |
| 2021-07-30 | Manipulation Skills, Large-Scale Demonstrations | UC San Diego | [ManiSkill: Generalizable Manipulation Skill Benchmark with Large-Scale Demonstrations](https://arxiv.org/abs/2107.14483) | NeurIPS 2021 | [github](https://github.com/haosulab/ManiSkill) |
| 2021-06-28 | Rearrangement, Habitat, Home Assistance | Meta AI | [Habitat 2.0: Training Home Assistants to Rearrange their Habitat](https://arxiv.org/abs/2106.14405) | NeurIPS 2021 | [project](https://aihabitat.org/) |
| 2020-04-15 | Offline RL, Dataset Quality, Standardized Tasks | UC Berkeley | [D4RL: Datasets for Deep Data-Driven Reinforcement Learning](https://arxiv.org/abs/2004.07219) | arXiv | [github](https://github.com/Farama-Foundation/D4RL) |
| 2020-04-14 | Sim-to-Real, Paired Environments, Remote Evaluation | Allen Institute for AI | [RoboTHOR: An Open Simulation-to-Real Embodied AI Platform](https://arxiv.org/abs/2004.06799) | CVPR 2020 | [project](https://ai2thor.allenai.org/robothor/) |
| 2019-10-24 | Multi-Task RL, Meta-RL, 50 Tasks | UC Berkeley | [Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning](https://arxiv.org/abs/1910.10897) | CoRL 2019 | [github](https://github.com/Farama-Foundation/Metaworld) |
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
