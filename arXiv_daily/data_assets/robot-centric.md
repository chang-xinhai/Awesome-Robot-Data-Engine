# Robot-Centric Data Assets

Manually maintained candidate sources that may not have an arXiv paper. This
file is a discovery queue, not part of the curated root list. **Never promote an
entry automatically:** re-check the primary source and apply the root README's
inclusion and canonical-placement rules first. `unknown` means the primary
source does not state the field clearly.

| Data asset | Primary source | Scale | Modality | Format | License | Access | Status |
| :--------- | :------------- | :---- | :------- | :----- | :------ | :----- | :----- |
| AgiBot World 2026 | [official dataset](https://huggingface.co/datasets/agibot-world/AgiBotWorld2026) | 12.8 TB repository; episode/task count unknown | Multi-camera RGB including head, wrist, fisheye and stereo channels; optional head depth; robot state and actions | LeRobot v2.1; Parquet + video | CC BY-NC-SA 4.0 | Public Hugging Face repository | Candidate — manual review pending |
| Unitree UniFoLM-WBT Dataset | [official collection](https://huggingface.co/collections/unitreerobotics/unifolm-wbt-dataset) | 14 task repositories visible as of 2026-08-01; total episodes unknown | Video plus time-series robot state and actions; exact cameras and hand configuration vary by repository | LeRobot; Parquet + video | Collection-wide license unknown; Apache-2.0 verified on a listed task repository | Public Hugging Face collection | Candidate — manual review pending |
| AIST Bimanual Manipulation Dataset | [official dataset](https://aistairc.github.io/aist_bimanip_site/) | 10,705 episodes; 100+ tasks | Synchronized multi-view video, dual-arm joint tracking and text annotations | unknown | CC BY 4.0 | Direct task-level downloads | Candidate — manual review pending |
