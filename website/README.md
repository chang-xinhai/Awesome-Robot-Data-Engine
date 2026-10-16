# Visual field guide

The Astro website renders the canonical root README. Update paper titles, dates,
institutions, publications, taxonomy, and resource links in `../README.md`.
Do not create a second paper database in this directory.

`src/data/media.json` adds reviewed presentation metadata: a short display name,
summary, official image URL, source page, image credit, and reported device
attributes for visual browsing. Its IDs must already exist in the README.
Unknown values remain `Not reported`. These records do not add canonical works.
Locally optimized previews live in `public/images/catalog/`; original project
sources and credits remain attached to each image. Third-party images remain
under their original owners' terms; the repository code license does not
relicense them.

The site has five source views: **Robot-centric Data**, **UMI Data**,
**Egocentric Data**, **Simulation Data**, and **General Data**. These map to the
existing README sections; General Data presents Data Engine Taxonomy.

The visual atlas prioritizes dataset overviews and data-engine figures. The
complete research view includes every deduplicated canonical README work. Both
views default to Newest and support search, resource/stage/year/channel filters,
deep-linked details, comparison of up to four works, and shareable URLs.

`src/data/research-*.json` adds primary-source evidence for scale, representation,
format, access, license scope, and imagery. These manifests cannot introduce new
canonical works or change their date, title, institution, or placement. Missing
values remain `Not reported`. Reported corpora, released subsets, generated
labels, configurable sensor outputs, and deployment policy inputs are different
scopes. Keep those distinctions in concise values or contextual notes.

The browser fetches the static `catalog.json`, adds results in batches of twelve,
and prefetches one viewport before the feed boundary. Skeletons share a single
diagonal light sweep. Loading uses three dots and the final boundary reads `end`.
The visual language and locally hosted Source Serif 4 fonts match Awesome UMI.

## Development

Requires Node.js 22.22 or newer.

```sh
npm ci
npm run dev
npm run check
npm run build
```

GitHub Pages builds and publishes from `main`. The configured repository base
path is used for every local link, font, script, and image. `explore/` remains a
working alternate entry point. No backend or user account is required.

## Media maintenance

Choose a clear official dataset overview, collection setup, or engine workflow;
avoid author portraits, logos, social banners, and isolated result tables. Use an appropriately sized WebP
preview and preserve the full source figure for context through its official
project link. Verify the image visually before adding it. Record the image
review date and the source of any manually reviewed device attributes.

Run the check and build commands after changes, then test desktop and mobile
search, combined filters, details, comparison, and a reloaded shared URL.

The `sources/` page retains the separate high-recall candidate archive. Candidate
papers are never promoted automatically into the curated catalog.
