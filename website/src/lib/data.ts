import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

export type SourceKey =
  | "robot-centric"
  | "umi"
  | "human-egocentric"
  | "simulation"
  | "taxonomy";

export interface CuratedWork {
  id: string;
  date: string;
  year: string;
  keywords: string;
  institute: string;
  title: string;
  paperUrl: string;
  publication: string;
  others: Array<{ label: string; url: string }>;
  source: SourceKey;
  sourceLabel: string;
  section: string;
  subsection: string;
}

export interface DailyPaper {
  arxiv_id: string;
  title: string;
  published: string;
  updated?: string;
  url: string;
  topics: string[];
  primary_category?: string;
}

export interface DailyArchive {
  total: number;
  latestPublished: string;
  counts: Record<Exclude<SourceKey, "taxonomy">, number>;
  recent: DailyPaper[];
  recentBySource: Record<Exclude<SourceKey, "taxonomy">, DailyPaper[]>;
}

export interface DataAssetFile {
  name: string;
  relativePath: string;
  updatedHint: string;
}

const README_PATH = fileURLToPath(new URL("../../../README.md", import.meta.url));
const DAILY_PATH = fileURLToPath(
  new URL("../../../arXiv_daily/data/papers.json", import.meta.url),
);
const ASSETS_PATH = fileURLToPath(
  new URL("../../../arXiv_daily/data_assets", import.meta.url),
);

const SOURCE_HEADINGS: Record<string, { key: SourceKey; label: string }> = {
  "Robot-Centric": { key: "robot-centric", label: "Robot-Centric" },
  UMI: { key: "umi", label: "UMI" },
  "Human / Egocentric": {
    key: "human-egocentric",
    label: "Human / Egocentric",
  },
  Simulation: { key: "simulation", label: "Simulation" },
  "Data Engine Taxonomy": {
    key: "taxonomy",
    label: "Data Engine Taxonomy",
  },
};

const DAILY_SOURCE_KEYS: Record<string, Exclude<SourceKey, "taxonomy">> = {
  robot_centric: "robot-centric",
  umi: "umi",
  human_egocentric: "human-egocentric",
  simulation: "simulation",
};

function cleanVisibleText(value: string): string {
  return value
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/[—–]/g, "-")
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function splitMarkdownRow(line: string): string[] {
  const cells: string[] = [];
  let cell = "";
  let escaped = false;

  for (const char of line.trim().replace(/^\|/, "").replace(/\|$/, "")) {
    if (char === "|" && !escaped) {
      cells.push(cell.trim());
      cell = "";
      continue;
    }

    cell += char;
    escaped = char === "\\" && !escaped;
    if (char !== "\\") escaped = false;
  }

  cells.push(cell.trim());
  return cells;
}

function markdownLinks(value: string): Array<{ label: string; url: string }> {
  const links: Array<{ label: string; url: string }> = [];
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(value)) !== null) {
    links.push({ label: cleanVisibleText(match[1]), url: match[2] });
  }

  return links;
}

function slug(value: string): string {
  return cleanVisibleText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

export function getCuratedWorks(): CuratedWork[] {
  const lines = readFileSync(README_PATH, "utf8").split(/\r?\n/);
  const works: CuratedWork[] = [];
  let source: { key: SourceKey; label: string } | undefined;
  let section = "";
  let subsection = "";

  for (const line of lines) {
    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      source = SOURCE_HEADINGS[h2[1]];
      section = "";
      subsection = "";
      continue;
    }

    const h3 = line.match(/^### (.+)$/);
    if (h3) {
      section = cleanVisibleText(h3[1]);
      subsection = "";
      continue;
    }

    const h4 = line.match(/^#### (.+)$/);
    if (h4) {
      subsection = cleanVisibleText(h4[1]);
      continue;
    }

    if (!source || !line.startsWith("|")) continue;

    const cells = splitMarkdownRow(line);
    if (cells.length !== 6 || cells[0] === "Date" || /^:?-{2,}/.test(cells[0])) {
      continue;
    }

    const paper = markdownLinks(cells[3])[0];
    if (!paper || !/^\d{4}(?:-\d{2})?(?:-\d{2})?$/.test(cells[0])) continue;

    const date = cells[0];
    const arxivId = paper.url.match(/arxiv\.org\/(?:abs|pdf)\/(\d{4}\.\d{4,5})/)?.[1];
    const title = cleanVisibleText(paper.label);

    works.push({
      id: arxivId ?? `${date}-${slug(title)}`,
      date,
      year: date.slice(0, 4),
      keywords: cleanVisibleText(cells[1]),
      institute: cleanVisibleText(cells[2]),
      title,
      paperUrl: paper.url,
      publication: cleanVisibleText(cells[4]),
      others: markdownLinks(cells[5]),
      source: source.key,
      sourceLabel: source.label,
      section,
      subsection,
    });
  }

  return works.sort((a, b) => b.date.localeCompare(a.date));
}

export function getSourceCounts(
  works: CuratedWork[],
): Record<SourceKey, number> {
  const counts: Record<SourceKey, number> = {
    "robot-centric": 0,
    umi: 0,
    "human-egocentric": 0,
    simulation: 0,
    taxonomy: 0,
  };

  for (const work of works) counts[work.source] += 1;
  return counts;
}

export function getDailyArchive(): DailyArchive {
  const emptyCounts: DailyArchive["counts"] = {
    "robot-centric": 0,
    umi: 0,
    "human-egocentric": 0,
    simulation: 0,
  };
  const emptyBySource: DailyArchive["recentBySource"] = {
    "robot-centric": [],
    umi: [],
    "human-egocentric": [],
    simulation: [],
  };

  if (!existsSync(DAILY_PATH)) {
    return {
      total: 0,
      latestPublished: "Unavailable",
      counts: emptyCounts,
      recent: [],
      recentBySource: emptyBySource,
    };
  }

  const parsed = JSON.parse(readFileSync(DAILY_PATH, "utf8")) as {
    papers?: Record<string, DailyPaper>;
  };
  const papers = Object.values(parsed.papers ?? {}).map((paper) => ({
    ...paper,
    title: cleanVisibleText(paper.title),
  }));
  papers.sort((a, b) => b.published.localeCompare(a.published));

  const counts = { ...emptyCounts };
  const recentBySource = { ...emptyBySource };

  for (const paper of papers) {
    for (const topic of paper.topics ?? []) {
      const key = DAILY_SOURCE_KEYS[topic];
      if (!key) continue;
      counts[key] += 1;
      if (recentBySource[key].length < 8) recentBySource[key].push(paper);
    }
  }

  return {
    total: papers.length,
    latestPublished: papers[0]?.published ?? "Unavailable",
    counts,
    recent: papers.slice(0, 24),
    recentBySource,
  };
}

export function getDataAssetFiles(): DataAssetFile[] {
  if (!existsSync(ASSETS_PATH)) return [];

  return readdirSync(ASSETS_PATH, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => ({
      name: cleanVisibleText(
        entry.name.replace(/\.md$/, "").replace(/[-_]+/g, " "),
      ),
      relativePath: `arXiv_daily/data_assets/${entry.name}`,
      updatedHint: "Manually reviewed source",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
