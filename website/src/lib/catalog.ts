import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import media from "../data/media.json";
import { SITE } from "./site";
import { compareDates } from "./order";
export interface Work {
  id: string;
  name: string;
  title: string;
  date: string;
  year: string;
  institute: string;
  publication: string;
  keywords: string;
  paperUrl: string;
  links: { label: string; url: string }[];
  sections: string[];
  source: string;
  kind: string;
  stage: string;
  form: string;
  tracking: string;
  signals: string[];
  format: string;
  dataAccess: string;
  codeAccess: string;
  hasDataLink?: boolean;
  hasCodeLink?: boolean;
  imagePage?: string;
  image?: string;
  imageAlt?: string;
  imageSource?: string;
  credit?: string;
  reviewed?: string;
  summary?: string;
  sourceKey: string;
  resourceType: string;
  scale?: string;
  representation?: string;
  access?: string;
  license?: string;
  notes?: string;
  evidence?: { label: string; url: string }[];
  modalities?: string[];
}
export const SOURCES = [
  { key: "robot", heading: "Robot-Centric", label: "Robot-centric Data", description: "Collection systems, robot trajectories, and multi-embodiment datasets." },
  { key: "umi", heading: "UMI", label: "UMI Data", description: "Portable interfaces, recovered actions, and demonstrations in the wild." },
  { key: "ego", heading: "Human / Egocentric", label: "Egocentric Data", description: "Human experience, hand–object interaction, and robot-ready supervision." },
  { key: "sim", heading: "Simulation", label: "Simulation Data", description: "Generated demonstrations, environments, assets, and synthetic observations." },
  { key: "general", heading: "Data Engine Taxonomy", label: "General Data", description: "Curation, representations, formats, scaling, and evaluation across sources." },
] as const;
const clean = (s: string) =>
  s
    .replace(/\*\*|`/g, "")
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/\\\|/g, "/")
    .trim();
const links = (s: string) =>
  Array.from(s.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g), (m) => ({
    label: clean(m[1]),
    url: m[2],
  }));
export function getCatalog(): Work[] {
  const text = readFileSync(resolve(process.cwd(), "../README.md"), "utf8");
  const map = new Map<string, Work>();
  let top = "",
    section = "",
    sub = "";
  for (const line of text.split(/\r?\n/)) {
    if (line.startsWith("## ")) {
      top = clean(line.slice(3));
      section = "";
      sub = "";
      continue;
    }
    if (line.startsWith("### ")) {
      section = clean(line.slice(4));
      sub = "";
      continue;
    }
    if (line.startsWith("#### ")) {
      sub = clean(line.slice(5));
      continue;
    }
    if (
      !(SITE.headings as readonly string[]).includes(top) ||
      !/^\| \d{4}/.test(line)
    )
      continue;
    const c = line
      .replace(/^\||\|$/g, "")
      .split(/(?<!\\)\|/)
      .map(clean);
    if (c.length !== 6) continue;
    const paper = links(c[3])[0];
    if (!paper) continue;
    const other = links(c[5]);
    const arxiv = [paper, ...other]
      .map((l) => l.url.match(/arxiv\.org\/(?:abs|pdf)\/(\d{4}\.\d{4,5})/))
      .find(Boolean)?.[1];
    const id =
      arxiv ??
      "resource-" +
        createHash("sha1")
          .update(paper.url.replace(/\/$/, ""))
          .digest("hex")
          .slice(0, 10);
    const source = SITE.kind === "umi" ? top.replace("UMI ", "") : top;
    const location = [top, section, sub].join(" / ");
    const kw = c[1];
    const combined = kw + " " + location;
    const kind = /UMI Policy/.test(top)
      ? "Policy"
      : /benchmarks|evaluation/i.test(section + " " + sub)
        ? "Benchmark"
        : /datasets/i.test(top + " " + section + " " + sub)
          ? "Dataset"
          : SITE.kind === "umi" && top === "UMI Method"
            ? "System"
            : "Method";
    const stage = /evaluation|benchmark/i.test(section + " " + sub)
      ? "Evaluate"
      : /retarget|alignment|action extraction/i.test(location)
        ? "Align"
        : /mixing|scaling|pretraining|co-training/i.test(location)
          ? "Mix"
          : /processing|curation|quality|annotation/i.test(location)
            ? "Curate"
            : /generation|generated|simulation demonstrations|synthetic/i.test(
                  location,
                )
              ? "Generate"
              : /collection|interface|teleoperat/i.test(location)
                ? "Collect"
                : kind === "Dataset"
                  ? "Dataset"
                  : "Recover";
    const form = /whole.body|humanoid/i.test(combined)
      ? "Whole-body"
      : /mobile|loco.manipulation/i.test(combined)
        ? "Mobile"
        : /wearable|exoskeleton|dexhand|dexterous hand/i.test(combined)
          ? "Wearable"
          : /gripper|handheld|human demonstration/i.test(combined)
            ? "Handheld"
            : "Not reported";
    const tracking = /visual.inertial|stereo.inertial|VIO/i.test(kw)
      ? "Visual-inertial"
      : /SLAM/i.test(kw)
        ? "Visual SLAM"
        : /VR|Quest|VIVE/i.test(kw)
          ? "VR tracking"
          : /fiducial|AprilTag|marker/i.test(kw)
            ? "Fiducial-aided"
            : /visual odometry|RGB.*VO/i.test(kw)
              ? "Visual odometry"
              : "Not reported";
    const signals = [
      [/RGB|image|vision|visual|camera/i, "Vision"],
      [/tactile|touch/i, "Tactile"],
      [/force|torque|wrench/i, "Force"],
      [/audio|acoustic|microphone/i, "Audio"],
      [/RGB-D|LiDAR/i, "Depth"],
      [/proprio|encoder|joint/i, "Proprioception"],
    ]
      .filter(([r]) => (r as RegExp).test(kw))
      .map(([, v]) => v as string);
    const dataLinks = other.filter((l) =>
      /dataset|(?:^|[\s/])data(?:[\s/,(]|$)/i.test(l.label),
    );
    const dataAccess = /release pending|forthcoming/i.test(kw + " " + c[4])
      ? "Release pending"
      : /public subset|partial release/i.test(kw + " " + c[5])
        ? "Public subset"
        : /gated|restricted/i.test(kw + " " + c[5])
          ? "Access conditions"
          : dataLinks.length
            ? "Dataset linked"
            : "Not reported";
    const codeLinks = [paper, ...other].filter((l) =>
      (l !== paper && /github|code|software/i.test(l.label)) || /https?:\/\/(?:github\.com|gitlab\.com|bitbucket\.org)\/[^/]+\/[^/]+/i.test(l.url),
    );
    const codeAccess = codeLinks.some((l) => !/forthcoming|soon/i.test(l.label))
      ? "Repository linked"
      : codeLinks.length
        ? "Announced"
        : "Not reported";
    const work: Work = {
      id,
      name:
        paper.label.split(":")[0].length < 40
          ? paper.label.split(":")[0]
          : paper.label,
      title: paper.label,
      date: c[0],
      year: c[0].slice(0, 4),
      institute: c[2],
      publication: c[4],
      keywords: kw,
      paperUrl: paper.url,
      links: other,
      sections: [location],
      source,
      sourceKey: SOURCES.find((s) => s.heading === top)!.key,
      resourceType: kind === "Dataset" ? "Dataset"
        : kind === "Benchmark" ? "Benchmark"
        : /Formats \/ Infrastructure/.test(section) ? "Infrastructure"
        : /Surveys/.test(section) ? (/survey|review|taxonomy/i.test(kw + " " + paper.label) ? "Survey" : "Data engine")
        : /Collection/.test(section) ? "Collection system"
        : /Simulation Demonstrations|Simulation Environments|Synthetic Observations/.test(section) ? "Data engine"
        : "Processing method",
      kind,
      stage,
      form,
      tracking,
      signals: signals.length ? signals : ["Not reported"],
      format:
        kw.match(/LeRobot|RLDS|HDF5|Zarr|MCAP|ROS bag|MP4/gi)?.join(" / ") ??
        "Not reported",
      dataAccess,
      codeAccess,
    };
    const old = map.get(id);
    if (old) {
      old.sections.push(location);
      for (const l of [paper, ...other])
        if (l.url !== old.paperUrl && !old.links.some((x) => x.url === l.url))
          old.links.push(l);
      if (paper.label.length > old.title.length) {
        old.title = paper.label;
        old.paperUrl = paper.url;
      }
      if (kind === "System") {
        old.kind = "System";
        old.source = source;
        old.form = form;
      }
      if (old.dataAccess === "Not reported") old.dataAccess = dataAccess;
      if (old.codeAccess === "Not reported") old.codeAccess = codeAccess;
      old.signals = Array.from(
        new Set([...old.signals, ...work.signals]),
      ).filter((x) => x !== "Not reported");
      if (!old.signals.length) old.signals = ["Not reported"];
    } else map.set(id, work);
  }
  const mediaIds = new Set<string>();
  for (const item of media as Array<Partial<Work> & { id: string }>) {
    const work = map.get(item.id);
    if (!work || mediaIds.has(item.id))
      throw new Error(
        `Media must reference an existing unique README work: ${item.id}`,
      );
    if (
      !item.image ||
      !existsSync(resolve(process.cwd(), "public", item.image))
    )
      throw new Error(`Missing visual preview for ${item.id}`);
    mediaIds.add(item.id);
    // Media may enrich display attributes, never canonical identity or placement.
    for (const key of ["name", "image", "imageAlt", "imageSource", "imagePage", "credit", "reviewed", "summary", "form", "tracking", "signals"] as const) {
      const value = item[key];
      if (value !== undefined) Object.assign(work, { [key]: value });
    }
  }
  // Presentation evidence enriches canonical README IDs, never creates papers.
  const evidenceIds = new Set<string>();
  const dataDir = resolve(process.cwd(), "src/data");
  for (const file of readdirSync(dataDir).filter((f) => /^research-.*\.json$/.test(f)).sort()) {
    const items = JSON.parse(readFileSync(resolve(dataDir, file), "utf8")) as (Partial<Work> & { id: string; modalities?: string[] })[];
    for (const item of items) {
      const work = map.get(item.id);
      if (!work || evidenceIds.has(item.id)) throw new Error(`Evidence must reference one existing README ID: ${item.id} (${file})`);
      evidenceIds.add(item.id);
      if (!item.evidence?.length || !item.summary) throw new Error(`Evidence and summary required: ${item.id}`);
      if (item.image && !existsSync(resolve(process.cwd(), "public", item.image))) throw new Error(`Missing evidence image: ${item.id}`);
      // Never let a presentation manifest alter canonical identity or placement.
      const { name, summary, resourceType, scale, representation, format, access, license, notes, evidence,
        image, imageAlt, imageSource, imagePage, credit, reviewed, modalities } = item;
      Object.assign(work, Object.fromEntries(Object.entries({ name, summary, resourceType, scale, representation, format, access, license, notes,
        evidence, image, imageAlt, imageSource, imagePage, credit, reviewed }).filter(([,v]) => v !== undefined)));
      if (modalities?.length) {
        work.modalities = modalities;
        const channelRules: [RegExp, string][] = [
          [/RGB|image|vision|video|camera|stereo/i, "Vision"],
          [/depth|RGB-D|point cloud|LiDAR/i, "Depth"], [/tactile|touch|pressure/i, "Tactile"],
          [/force|torque|wrench/i, "Force"], [/IMU|inertial/i, "IMU"], [/audio|acoustic/i, "Audio"],
          [/EMG/i, "EMG"], [/gaze|eye/i, "Gaze"], [/language|text|instruction/i, "Language"],
          [/pose|joint|state|proprio|action|trajectory|motion|kinematic/i, "State"], [/contact/i, "Contact"],
        ];
        work.signals = [...new Set(modalities.flatMap(v => channelRules.filter(([r]) => r.test(v)).map(([, label]) => label)))];
      }
    }
  }
  if (!map.size)
    throw new Error(
      "The canonical README produced no curated works. Check the build working directory and taxonomy.",
    );
  for (const work of map.values()) {
    const resourceLinks = [{ label: "Primary resource", url: work.paperUrl }, ...work.links];
    work.hasCodeLink = work.codeAccess === "Repository linked";
    const explicitDataLink = resourceLinks.some(l =>
      /dataset|(?:^|[\s/])data(?:[\s/,(]|$)/i.test(l.label) || /(?:huggingface\.co|modelscope\.cn)\/datasets\//i.test(l.url));
    const state = work.access ?? work.dataAccess;
    const pending = /coming soon|pending|announced|planned|download not verified/i.test(state);
    const reviewedData = !!work.evidence?.length && /public.*(?:download|data|subset|release)|example data|dataset.*(?:download|browser)|download.*dataset|data(?:sets)?.*released|full dataset linked|data and hardware|data,.*hardware|source datasets|official.*dataset links|code, data|license agreement required|dataset agreement|registration.*license|competition data gated|gated download|annotation exports/i.test(state);
    work.hasDataLink = (explicitDataLink && !pending) || (reviewedData && !/download not verified|coming soon/i.test(state));
    if (work.hasDataLink && work.dataAccess === "Not reported") work.dataAccess = "Dataset linked";
    work.signals = [...new Set(work.signals.map(s => s === "Proprioception" ? "State" : s))];
    // This facet includes verified labels, not just sensor streams. Geometric
    // priors from generic README keywords never establish a measured channel.
    if (work.evidence?.length && /joint|pose|MANO|SMPL|MHR|skeleton|kinematic|6.DoF|end.effector|trajectory/i.test(work.representation ?? "")) work.signals = [...new Set([...work.signals.filter(s => s !== "Not reported"), "State"])];
    if (!work.signals.length) work.signals = ["Not reported"];
    if (work.resourceType === "Dataset" || work.resourceType === "Infrastructure") work.stage = "Share";
    else if (work.resourceType === "Survey") work.stage = "Map";
    else if (work.resourceType === "Benchmark") work.stage = "Evaluate";
    else if (work.sections.some(s => /Data-to-Policy|Pretraining|Co-training/i.test(s))) work.stage = "Mix";
    else if (work.sections.some(s => /Modalities \/ Representations/i.test(s))) work.stage = "Align";
    else if (work.resourceType === "Data engine" && work.sections.some(s => /Surveys \/ Systems/.test(s))) work.stage = "End-to-end";
  }
  return [...map.values()].sort((a, b) => compareDates(a, b));
}
