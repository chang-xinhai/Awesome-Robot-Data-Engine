# Website

This directory contains the Astro website for **Awesome Robot Data Engine**.
It is intentionally isolated from the repository root. The canonical curated
list remains `../README.md`, while `../arXiv_daily/` remains a candidate data
source.

## Local development

```bash
cd website
npm install
npm run dev
```

Run the production checks before publishing:

```bash
npm run check
npm run build
```

The static output is written to `website/dist/`.

## Content model

- **Curated research:** parsed at build time from `../README.md`.
- **Daily candidates:** parsed at build time from
  `../arXiv_daily/data/papers.json`.
- **External data assets:** links to manually maintained Markdown sources under
  `../arXiv_daily/data_assets/` when that directory is available.
- **Website copy and presentation:** maintained manually in `website/src/`.

Candidate records are never promoted automatically. Update the canonical root
README after primary-source review, then adjust any website narrative that
needs a manual editorial change.

## GitHub Pages

`astro.config.mjs` defines the repository Pages defaults:

```text
site: https://chang-xinhai.github.io
base: /Awesome-Robot-Data-Engine
```

Internal links and images use Astro's `BASE_URL`, so deployment workflows may
override `--site` and `--base` safely. All website code, assets, and local
configuration stay inside this directory. The Pages workflow is the only
required repository-level integration.

## Visual system

- Manrope for display and reading text
- IBM Plex Mono for dates, counts, and research metadata
- cool laboratory neutrals with one mineral-green accent
- system light and dark modes
- reduced-motion and keyboard-focus support

Original visual assets live in `public/images/`. Keep the PNG sources and use
the optimized WebP versions in production pages.
