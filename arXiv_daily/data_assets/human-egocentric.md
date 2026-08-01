# Human / Egocentric Data Assets

Manually maintained candidate sources that may not have an arXiv paper. This
file is a discovery queue, not part of the curated root list. **Never promote an
entry automatically:** re-check the primary source and apply the root README's
inclusion and canonical-placement rules first. `unknown` means the primary
source does not state the field clearly.

| Data asset | Primary source | Scale | Modality | Format | License | Access | Status |
| :--------- | :------------- | :---- | :------- | :----- | :------ | :----- | :----- |
| Egocentric-100K | [official dataset](https://huggingface.co/datasets/builddotai/Egocentric-100K) | 100,405 h; 2,010,759 clips; 10.8B frames; 24.79 TB stated in card | Monocular head-mounted fisheye RGB video with per-device intrinsics; no audio | WebDataset TAR shards containing H.265/MP4 + JSON | Apache-2.0 | Public listing; gated download requires account and contact-information agreement | Candidate — manual review pending |
| Xperience-10M | [official dataset](https://huggingface.co/datasets/ropedia-ai/xperience-10m) | 10M interactions; 10,000 h; ~1 PB claimed full corpus; current Hugging Face repository is a limited release | Six synchronized video streams, audio, stereo depth, camera pose, hand and full-body MoCap, IMU and hierarchical language | MP4 streams + per-episode HDF5 annotations | Custom / `other`; non-commercial terms | Controlled access with manual approval and possible external agreement | Candidate — manual review pending; distinguish released files from full-corpus claims |
