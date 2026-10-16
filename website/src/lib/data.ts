import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

export type SourceKey =
  "robot-centric" | "umi" | "human-egocentric" | "simulation" | "taxonomy";

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

const DAILY_PATH = resolve(process.cwd(), "../arXiv_daily/data/papers.json");
const ASSETS_PATH = resolve(process.cwd(), "../arXiv_daily/data_assets");

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
