# AGENTS.md

## Mission

This repository is a curated **Awesome-Robot-Data-Engine** list for the data
systems that make modern robot learning possible.

The repository follows robot data from acquisition to downstream evidence
across four primary sources:

1. **Robot-Centric** — teleoperation, interactive/autonomous collection,
   robot-log processing, and robot datasets.
2. **UMI** — portable manipulation interfaces, state/action recovery,
   retargeting, source-specific data recipes, and UMI-native datasets.
3. **Human / Egocentric** — interaction perception, tracking and
   reconstruction, action extraction, retargeting, and learning from human
   video.
4. **Simulation** — demonstrations, generated environments and observations,
   synthetic datasets, and sim–real assets.

Cross-source representations, curation, infrastructure, scaling, and
evaluation belong in **Data Engine Taxonomy**.

The goal is not to collect every robot-learning paper. Include a work only when
data collection, processing, transformation, mixing, infrastructure, quality,
or data-value evaluation is a central contribution.

## Curated-list and archive policy

All manually curated **canonical list content** lives in `README.md`.

Do **not** create `contents/` pages or split the list into per-topic Markdown
files unless the user explicitly requests it.

The explicitly requested `arXiv_daily/` subtree is an exception. It is
the candidate-source layer rather than curated content. Its four generated
arXiv topic views live under `arXiv_daily/sections/`, while
`arXiv_daily/data/papers.json` remains the deduplicated paper source of truth.
Non-arXiv release candidates are maintained manually under
`arXiv_daily/data_assets/`. Neither source may automatically promote entries
into the root `README.md`.

The `website/` subtree is a presentation layer. Keep its source, dependencies,
and static assets inside that directory. Curated website content and the root
`README.md` are updated manually in the same maintenance pass; do not treat the
website as a second canonical database or publish unreviewed archive candidates
as curated entries.

Allowed root-level files:

- `README.md` — canonical awesome list
- `AGENTS.md` — governance and maintenance rules
- `LICENSE`
- `.gitignore`
- optional static assets under `assets/` or `imgs/`
- `arXiv_daily/` — automated candidate archive, configuration, and scripts
- `website/` — self-contained website source and assets
- `.github/workflows/` — repository automation

## Canonical section layout

Keep these top-level sections and this order:

1. `About`
2. `Must Read`
3. `News`
4. `Robot-Centric`
5. `UMI`
6. `Human / Egocentric`
7. `Simulation`
8. `Data Engine Taxonomy`
9. `Citation`
10. `Acknowledgement`

Keep the Table of Contents near the top and keep heading anchors stable.

## Canonical placement rule

Every paper or resource has exactly **one canonical full entry**.

Classify a work by its **main new asset**, not by every technique it uses:

1. collection method or hardware;
2. processing / reconstruction / retargeting method;
3. released dataset;
4. data-centric training method;
5. benchmark, format, infrastructure, or evaluation method.

Source-specific work belongs under exactly one of `Robot-Centric`, `UMI`,
`Human / Egocentric`, or `Simulation`. A genuinely general or cross-source
work belongs under `Data Engine Taxonomy`. Standardized evaluation protocols
and benchmarks are the exception: when evaluation is the main asset, place the
work under `Data Engine Taxonomy → Evaluation / Benchmarks` even if its tasks,
data, or hardware come from only one source.

If a work is relevant elsewhere, add a compact `see also` link or mention; do
not duplicate the full table row. Dataset release papers normally belong under
the corresponding dataset section even when they also introduce a collection
method.

## Section boundaries

### Robot-Centric

Include:

- direct, interactive, and autonomous robot data collection;
- offline processing specific to robot trajectories or logs;
- single- and multi-embodiment robot datasets.

Exclude ordinary control or policy papers without a material data-engine
contribution.

### UMI

Include:

- end-effector, dexterous-hand, mobile, and whole-body UMI systems;
- pose/trajectory tracking and interaction sensing designed for UMI;
- UMI-to-robot retargeting;
- source-specific UMI scaling, co-training, and deployability recipes;
- UMI-native datasets.

Do not turn this section into a generic teleoperation or manipulation survey.
Do not add a policy merely because it consumes UMI data: its main contribution
must change how UMI data is scaled, mixed, validated, or transferred.
UMI-specific standardized benchmarks still belong in
`Data Engine Taxonomy → Evaluation / Benchmarks`.

### Human / Egocentric

Include methods that convert human or egocentric observations into useful robot
learning supervision:

- hand–object interaction, contact, affordance, and intent;
- 2D/3D/4D tracking and hand/body/object/scene reconstruction;
- latent, image-space, metric, object-centric, and contact-aware actions;
- visual, kinematic, and physics-aware human-to-robot retargeting;
- human-data pretraining, co-training, reward/goal extraction, and robot-free
  policy learning;
- human-only and human–robot paired datasets.

Generic computer-vision methods belong here only when they are directly useful
for robot-data construction. Otherwise exclude them or place broadly reusable
tracking/reconstruction systems in `Data Engine Taxonomy`.

### Simulation

Include:

- teleoperated, scripted, planned, optimized, expanded, and generated
  demonstrations;
- task, scene, and asset generation plus real-to-sim / digital twins;
- synthetic sensor observations and domain randomization;
- simulation-only and sim–real paired datasets.

Benchmarks whose primary contribution is standardized evaluation belong in
`Data Engine Taxonomy`, even when implemented in simulation.

### Data Engine Taxonomy

Reserve this section for cross-source or source-agnostic work:

- surveys and unified data-engine systems;
- observation/state/action representations and cross-embodiment alignment;
- calibration, synchronization, general tracking/reconstruction, annotation,
  synthesis, filtering, and deduplication;
- formats, conversion, storage, streaming, versioning, and visualization;
- mixture design, sampling, and scaling laws;
- trajectory accuracy, no-GT proxies, quality/coverage, policy utility,
  efficiency, and standardized benchmarks.

Standardized benchmarks are classified here by their evaluation contribution,
including source-specific robot, UMI, human, or simulation benchmarks.

## Inclusion policy

Use a **core + strong adjacent** scope.

### Include first

- foundational and field-defining papers;
- systems with official code, project, dataset, or hardware resources;
- influential datasets and infrastructure used by multiple downstream works;
- recent work that creates a distinct data-engine capability;
- surveys or benchmarks that materially clarify the field.

### Include selectively

- perception and tracking work with a direct robot-data use case;
- policy papers where data construction, mixing, scaling, or data-source value
  is a core experimental contribution;
- closed systems when a reliable paper or official technical report documents
  the data-engine contribution.

### Usually exclude

- generic manipulation, planning, control, or VLA papers;
- minor variations without a distinct data contribution;
- unverified announcements, rumors, copied metadata, or inaccessible claims;
- projects with only a weak relationship to robot data.

## Source priority

Verify entries using this order:

1. official paper record: arXiv v1, proceedings, journal, or technical report;
2. official project, dataset, documentation, or author/lab GitHub repository;
3. official organization or lab publication page;
4. trusted curated repositories only for candidate discovery.

If sources disagree, prefer the most official primary source. Never infer
missing metadata.

### Reference repositories

Use these repositories to discover candidates and detect omissions. Return to
primary sources before adding an entry.

- `https://github.com/chang-xinhai/Awesome-UMI` — UMI systems, datasets, and
  tracking ecosystem.
- `https://github.com/AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation`
  — VLA-oriented collection, synthesis, and curation.
- `https://github.com/ziyaow1010/vla-datasets-benchmarks` — robot datasets and
  VLA benchmarks.
- `https://github.com/OpenMOSS/Awesome-WAM` — world action models and
  action-conditioned video/world models.
- `https://github.com/IRMVLab/awesome-robot-learning-from-human-videos` —
  learning robot skills from human video.
- `https://github.com/player0718/awesome-ego-video-datasets` — egocentric video
  datasets.
- `https://github.com/freekatz/Awesome-Embodied-AI-Datasets` — embodied-AI
  datasets.
- `https://github.com/mint-lab/awesome-robotics-datasets` — robotics datasets.
- `https://github.com/YanjieZe/awesome-humanoid-robot-learning` — humanoid
  learning, whole-body data, and simulation.
- `https://github.com/robotics-survey/Awesome-Robotics-Foundation-Models` —
  foundation-model surveys, datasets, and benchmarks.
- `https://github.com/worldbench/awesome-embodied-data-pyramid` — embodied
  data-source taxonomy, dataset-scale hints, and omission discovery.

### Candidate discovery feeds

- `https://arxiv.org/list/cs.RO/recent`
- `https://arxiv.org/list/cs.CV/recent`
- `https://arxiv.org/list/cs.AI/recent`
- `https://arxiv.org/list/cs.LG/recent`
- `https://github.com/jiangranlv/robotics_arXiv_daily`
- `https://github.com/Vincentqyw/cv-arxiv-daily`
- `https://huggingface.co/papers`
- `https://huggingface.co/datasets?sort=trending`
- `https://modelscope.cn/datasets`
- `https://openreview.net/group?id=robot-learning.org/CoRL`
- `https://roboticsconference.org/program/papers/`
- `https://proceedings.mlr.press/`
- `https://openaccess.thecvf.com/`

Feeds are candidate indexes only. Do not copy dates, venues, affiliations, or
links from them without checking a primary source.

### Recommended search alerts

Monitor combinations of:

- `"robot data"`, `"robot dataset"`, `"data engine"`, `"data curation"`
- `teleoperation`, `UMI`, `egocentric`, `"human video"`
- `"action extraction"`, retargeting, `"hand-object"`, affordance
- `"synthetic demonstrations"`, `"task generation"`, `"digital twin"`
- `"cross-embodiment"`, `"data mixture"`, `"scaling law"`
- `"trajectory evaluation"`, `"no ground truth"`, `"data quality"`

## Verification rule

Do not add an entry without a reliable canonical public source.

Minimum bar:

- a canonical paper URL such as arXiv, conference, or journal page; and/or
- an official project, dataset, documentation, or author-maintained repository.

Before adding an entry, verify:

- title spelling;
- initial arXiv v1 date or official publication date;
- first institution;
- venue/status;
- official project/code/dataset links;
- canonical section and absence of a duplicate row.

When uncertain, exclude first.

## Entry format

Use the same compact schema in every paper/resource subsection:

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |

### Column rules

- `Date`: use the initial arXiv `v1` submission date, never a revision,
  acceptance, code-release, or project-page date. If no arXiv record exists,
  use the official publication date. Prefer `YYYY-MM-DD`; preserve `YYYY-MM` or
  `YYYY` when the primary source offers no finer precision.
- `Keywords`: short, discriminative tags; include the local subcategory when
  useful.
- `Institute (first)`: first listed institution or lab, concise and normalized.
- `Paper`: canonical title linked to the paper or primary resource.
- `Publication`: venue and year, `arXiv`, `Dataset`, `GitHub`, or `Website`.
- `Others`: compact official links such as `project`, `github`, `dataset`,
  `docs`, `hardware`, or `benchmark`.

Keep table alignment consistent. Center concise metadata columns; left-align a
column when long prose makes centering hard to read.

## Sorting and naming

- Sort every subsection by `Date` descending.
- Use official capitalization for project and dataset names.
- Use concise, stable heading names.
- Do not invent venue, institution, scale, modality, or license metadata.
- Keep keywords scannable and avoid long prose in table cells.

## Dataset metadata guidance

When available, capture compactly in `Keywords` or official links:

- observation modalities: RGB, RGB-D, stereo/fisheye, IMU, audio, tactile,
  force/torque, proprioception;
- action/state: joints, end-effector pose, hand/body/object trajectory,
  contact, language, reward;
- embodiment: single/bimanual, mobile, humanoid, dexterous hand;
- format/access: RLDS, LeRobot, HDF5, Zarr, ROS bag, MP4, Hugging Face;
- scale: demonstrations, hours, tasks, scenes, environments, embodiments;
- license/access restrictions when material.

Do not guess unavailable fields.

### Data-asset audit

Before promoting a dataset or collection system from `arXiv_daily/data_assets/`,
record primary-source evidence and audit six dimensions:

1. **Scalability** — released volume, collection rate, cost, and operational
   bottlenecks;
2. **Robot alignment** — whether observations, states, actions, contacts, and
   embodiment mappings can supervise a robot directly or after stated recovery;
3. **Quality** — calibration, synchronization, trajectory/annotation evidence,
   failure data, and documented limitations;
4. **Diversity** — tasks, objects, scenes, operators, geographies, and
   embodiments represented in the released portion;
5. **Reusability** — format, tooling, documentation, access, license, and
   conversion burden;
6. **Physical fidelity** — sensor realism, geometry, dynamics, contact, and
   sim–real evidence where applicable.

This is a review checklist, not a license to invent a score. Mark a field
`unknown` when the primary source does not provide evidence, and distinguish a
claimed full corpus from the files currently released.

## Maintenance workflow

When adding or updating entries:

1. identify the paper's main new asset;
2. choose one canonical section;
3. verify primary sources and metadata;
4. search the README for duplicate title, arXiv ID, and project name;
5. normalize the six columns;
6. insert in descending date order;
7. update Contents only when headings change;
8. run link and Markdown-table checks;
9. update `News` only for meaningful releases or structural changes.

## Commit conventions

Use Conventional Commits.

Recommended types:

- `docs:` content additions or edits;
- `feat:` meaningful new section or structural capability;
- `refactor:` taxonomy reorganization without factual additions;
- `fix:` broken links or corrected metadata;
- `chore:` maintenance-only cleanup.

Examples:

- `feat(readme): launch robot data engine taxonomy`
- `docs(readme): add egocentric action extraction papers`
- `docs(agents): define cross-source curation rules`
- `refactor(readme): separate simulation assets from benchmarks`
- `fix(readme): correct arxiv v1 dates and canonical links`

## What to avoid

- Do not create duplicate full rows.
- Do not turn the repository into a generic robotics bibliography.
- Do not add ordinary policy papers solely because they use robot data.
- Do not mix source-specific methods into cross-source taxonomy without reason.
- Do not copy metadata from secondary lists without verification.
- Do not create inconsistent table schemas or excessively long prose rows.
- Do not retain obsolete source-specific assets or text after a scope change.

## Quick checklist

- Is data a central contribution?
- Is the resource in its one canonical section?
- Is there a reliable primary source?
- Are title, date, institution, venue, and links verified?
- Does the row use the required six columns?
- Is the subsection sorted newest first?
- Are related mentions links rather than duplicated full rows?
- Do Contents, headings, and anchors match?
- Are Markdown tables readable and valid?
