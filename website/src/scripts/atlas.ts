import type { Work } from "../lib/catalog";
import { compareDates } from "../lib/order";
const $ = <T extends HTMLElement = HTMLElement>(id: string) =>
  document.getElementById(id)! as T;
const settings = JSON.parse($("catalog-settings").textContent!) as {
  initial: string[];
  sources: {key:string; label:string; description:string}[];
  base: string;
  endpoint: string;
  github: string;
};
const e = (v: unknown) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const path = (p: string) =>
  settings.base.replace(/\/$/, "") + "/" + p.replace(/^\//, "");
function media(w: Work) {
  return w.image ? { url: path(w.image), alt: w.imageAlt ?? w.name,
    kind: w.resourceType === "Dataset" ? "Dataset overview" : "Official project figure",
    source: w.imagePage ?? w.imageSource ?? w.paperUrl } : undefined;
}
const previews = new Map<string, ReturnType<typeof media> | null>();
const preview = (w: Work) => previews.has(w.id) ? previews.get(w.id) : media(w);
const imageFallback = (w: Work) =>
  `<div class="card-cover image-fallback"><span>Preview unavailable</span><button type="button" data-retry-image="${e(w.id)}">Retry image</button></div>`;
function coverHtml(w: Work) {
  const p = preview(w);
  return p ? `<button type="button" class="card-cover" data-detail="${e(w.id)}" aria-label="View ${e(w.name)} details"><img src="${e(p.url)}" alt="${e(p.alt)}" width="640" height="360" decoding="async"/></button>` : imageFallback(w);
}
const search = $<HTMLInputElement>("catalog-search"),
  sort = $<HTMLSelectElement>("sort-order"),
  results = $("catalog-results");
const filterIds = ["type", "stage", "access", "year"] as const;
const controls = Object.fromEntries(
  filterIds.map((k) => [k, $<HTMLSelectElement>(k + "-filter")]),
) as Record<(typeof filterIds)[number], HTMLSelectElement>;
const sourceSelect = $<HTMLSelectElement>("source-select");
const detail = $<HTMLDialogElement>("detail-dialog"),
  compare = $<HTMLDialogElement>("compare-dialog"),
  about = $<HTMLDialogElement>("about-dialog");
let works: Work[] = [],
  byId = new Map<string, Work>(),
  collection = "visual",
  source = "all",
  cursor = 0,
  generation = 0,
  busy = false,
  observer: IntersectionObserver | undefined,
  activeBatch: HTMLElement | undefined;
const params = new URLSearchParams(location.search);
collection = params.get("collection") === "research" || params.get("view") === "index" ? "research" : "visual";
source = settings.sources.some((s) => s.key === params.get("source")) ? params.get("source")! : "all";
// Preserve links to the previous website's source names.
source = ({"Robot-Centric":"robot", "UMI":"umi", "Human / Egocentric":"ego", "Simulation":"sim", "Data Engine Taxonomy":"general"} as Record<string,string>)[params.get("source") ?? ""] ?? source;
search.value = params.get("q") ?? "";
const sortParam = params.get("sort");
sort.value = Array.from(sort.options).some((o) => o.value === sortParam)
  ? sortParam!
  : "newest";
for (const k of filterIds)
  if (
    params.has(k) &&
    Array.from(controls[k].options).some((o) => o.value === params.get(k))
  )
    controls[k].value = params.get(k)!;
for (const el of document.querySelectorAll<HTMLInputElement>(
  "input[name=signal]",
))
  el.checked = (params.get("signals") ?? "").split(",").includes(el.value);
const selected = new Set<string>(
  [...new Set((params.get("compare") ?? "").split(",").filter(Boolean))].slice(
    0,
    4,
  ),
);
const PAGE_SIZE = 12;
const signals = () =>
  Array.from(
    document.querySelectorAll<HTMLInputElement>("input[name=signal]:checked"),
  ).map((el) => el.value);
function syncUrl() {
  const p = new URLSearchParams();
  if (collection !== "visual") p.set("collection", collection);
  if (source !== "all") p.set("source", source);
  if (search.value.trim()) p.set("q", search.value.trim());
  if (sort.value !== "newest") p.set("sort", sort.value);
  for (const k of filterIds)
    if (controls[k].value !== "all") p.set(k, controls[k].value);
  if (signals().length) p.set("signals", signals().join(","));
  if (selected.size) p.set("compare", [...selected].join(","));
  if (detail.open && detail.dataset.work) p.set("item", detail.dataset.work);
  history.replaceState(
    null,
    "",
    location.pathname + (p.size ? "?" + p.toString() : "") + location.hash,
  );
}
function filtered() {
  const q = search.value.trim().toLowerCase(), sig = signals();
  const list = works.filter(w =>
    (collection === "research" || !!w.image) &&
    (source === "all" || w.sourceKey === source) &&
    (!q || [w.name,w.title,w.keywords,w.institute,w.publication,w.summary,w.scale,w.representation,w.format,w.access,...w.sections,...w.signals].join(" ").toLowerCase().includes(q)) &&
    (controls.type.value === "all" || w.resourceType === controls.type.value) &&
    (controls.stage.value === "all" || w.stage === controls.stage.value) &&
    (controls.year.value === "all" || w.year === controls.year.value) &&
    (controls.access.value === "all" ||
      (controls.access.value === "data" && w.hasDataLink === true) ||
      (controls.access.value === "code" && w.hasCodeLink === true) ||
      (controls.access.value === "both" && w.hasDataLink === true && w.hasCodeLink === true)) &&
    sig.every(s => w.signals.includes(s))
  );
  const rank = (w: Work) => { const n=settings.initial.indexOf(w.id); return n < 0 ? 1000 : n; };
  return list.sort((a,b) => sort.value === "name" ? a.name.localeCompare(b.name) : sort.value === "oldest" ? compareDates(a,b,"oldest") : sort.value === "recommended" ? rank(a)-rank(b) || compareDates(a,b) : compareDates(a,b));
}
function accessBadge(w: Work) {
  const a=w.access ?? "";
  return /coming|pending|announced|planned|not yet/i.test(a) ? "Release pending" : /gated|agreement|approved/i.test(a) ? "Gated access" : /example|preview|subset/i.test(a) ? "Partial release" : /request|application/i.test(a) ? "By request" : "";
}
function card(w: Work) {
  const research = collection === "research";
  const tags = [w.resourceType, ...w.signals.filter(s => s !== "Not reported").slice(0,2), accessBadge(w)].filter(Boolean);
  const sourceLabel = settings.sources.find(s => s.key === w.sourceKey)?.label ?? w.source;
  return `<article class="library-card feed-enter${selected.has(w.id) ? " is-selected" : ""}" data-id="${e(w.id)}">${!research ? coverHtml(w) : ""}<div class="card-copy"><p class="card-meta">${e(sourceLabel)} <span>·</span> ${e(w.year)}</p><h2><button type="button" data-detail="${e(w.id)}" title="${e(w.title)}">${e(research ? w.title : w.name)}</button></h2><p class="card-description">${e(w.summary ?? w.keywords)}</p><div class="card-tags">${tags.map(v => `<span>${e(v)}</span>`).join("")}</div>${!research && w.scale ? `<p class="card-scale" title="${e(w.scale)}">${e(w.scale)}</p>` : ""}<div class="card-actions"><button type="button" data-detail="${e(w.id)}">Details <span aria-hidden="true">↗</span></button><button type="button" class="compare-toggle" data-compare="${e(w.id)}" aria-pressed="${selected.has(w.id)}" aria-label="Compare ${e(w.name)}"><span aria-hidden="true">${selected.has(w.id) ? "✓" : "+"}</span> Compare</button></div></div></article>`;
}
function skeleton() {
  return `<article class="library-card skeleton-card" aria-hidden="true"><div class="card-cover skeleton-stage"><div class="skeleton-block skeleton-cover"></div></div><div class="card-copy"><div class="skeleton-block skeleton-meta"></div><div class="skeleton-block skeleton-title"></div><div class="skeleton-block skeleton-line"></div><div class="skeleton-block skeleton-line short"></div><div class="skeleton-tags"><i class="skeleton-block"></i><i class="skeleton-block"></i></div><div class="skeleton-footer"><i class="skeleton-block"></i><i class="skeleton-block"></i></div></div></article>`;
}
function shimmerMask(batch: HTMLElement) {
  const overlay = batch.querySelector<HTMLElement>(".shared-shimmer");
  if (!overlay) return;
  const origin = batch.getBoundingClientRect();
  if (!origin.width || !origin.height) return;
  const rects = Array.from(
    batch.querySelectorAll<HTMLElement>(".skeleton-block"),
  )
    .map((el) => {
      const r = el.getBoundingClientRect();
      return `<rect x="${(r.left - origin.left).toFixed(1)}" y="${(r.top - origin.top).toFixed(1)}" width="${r.width.toFixed(1)}" height="${r.height.toFixed(1)}" rx="${Math.min(14, r.height / 3)}" fill="white"/>`;
    })
    .join("");
  const mask = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${origin.width}' height='${origin.height}' viewBox='0 0 ${origin.width} ${origin.height}'>${rects}</svg>`)}")`;
  overlay.style.maskImage = mask;
  overlay.style.setProperty("-webkit-mask-image", mask);
}
function makeBatch(n: number) {
  const batch = document.createElement("div");
  batch.className = "feed-batch";
  batch.innerHTML =
    Array.from({ length: n }, skeleton).join("") +
    '<div class="shared-shimmer" aria-hidden="true"><div class="shimmer-light"></div></div>';
  results.append(batch);
  activeBatch = batch;
  shimmerMask(batch);
  return batch;
}
async function loadImage(url: string) {
  return await new Promise<boolean>((resolve) => {
    const im = new Image();
    let finished = false;
    const finish = (ok: boolean) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      im.onload = im.onerror = null;
      resolve(ok);
    };
    const timeout = setTimeout(() => finish(false), 10000);
    im.onload = () => {
      im.decode()
        .catch(() => {})
        .then(() => finish(true));
    };
    im.onerror = () => finish(false);
    im.src = url;
  });
}
async function preload(w: Work, force = false) {
  if (collection === "research") return;
  if (previews.has(w.id) && !force) return;
  const candidate = media(w);
  previews.set(w.id, candidate && await loadImage(candidate.url) ? candidate : null);
}
let maskFrame = 0;
function queueMask(batch: HTMLElement) {
  cancelAnimationFrame(maskFrame);
  maskFrame = requestAnimationFrame(() => {
    if (batch.isConnected) shimmerMask(batch);
  });
}
function setBoundary(loading: boolean, finished: boolean) {
  $("loading-dots").hidden = !loading;
  $("feed-end").hidden = !finished;
  $("feed-error").hidden = true;
  results.setAttribute("aria-busy", String(loading));
}
async function loadNext() {
  if (busy || !works.length) return;
  const list = filtered();
  if (cursor >= list.length) {
    setBoundary(false, !!list.length);
    return;
  }
  const token = generation;
  busy = true;
  setBoundary(true, false);
  const chunk = list.slice(cursor, cursor + PAGE_SIZE);
  cursor += chunk.length;
  const batch = makeBatch(chunk.length);
  const nodes = Array.from(
    batch.querySelectorAll<HTMLElement>(".skeleton-card"),
  );
  await Promise.allSettled(
    chunk.map(async (w, i) => {
      await preload(w);
      if (token !== generation || !batch.isConnected) return;
      const template = document.createElement("template");
      template.innerHTML = card(w);
      nodes[i].replaceWith(template.content);
      queueMask(batch);
    }),
  );
  if (token !== generation) return;
  batch.querySelector(".shared-shimmer")?.remove();
  activeBatch = undefined;
  busy = false;
  setBoundary(false, cursor >= list.length);
  updateTray();
  observe();
  if (
    cursor < list.length &&
    $("feed-boundary").getBoundingClientRect().top <= innerHeight * 2
  )
    void loadNext();
}
function observe() {
  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) void loadNext();
    },
    { rootMargin: `0px 0px ${Math.ceil(innerHeight)}px 0px`, threshold: 0 },
  );
  observer.observe($("feed-boundary"));
}
function filterChips() {
  const chips: { key: string; value: string; label: string }[] = [];
  if (search.value.trim())
    chips.push({ key: "q", value: "", label: search.value.trim() });
  for (const k of filterIds)
    if (controls[k].value !== "all")
      chips.push({
        key: k,
        value: "",
        label: `${({type: "Type", stage: "Stage", access: "Resources", year: "Year"})[k]}: ${controls[k].selectedOptions[0].textContent}`,
      });
  signals().forEach((s) => chips.push({ key: "signal", value: s, label: s }));
  $("active-filters").innerHTML = chips
    .map(
      (c) =>
        `<button type="button" data-remove="${e(c.key)}" data-value="${e(c.value)}" aria-label="Remove ${e(c.label)} filter">${e(c.label)}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button>`,
    )
    .join("");
  $("filter-count").textContent = String(chips.length);
  $("filter-count").hidden = !chips.length;
}
function render() {
  if (!works.length) {
    filterChips();
    syncUrl();
    return;
  }
  generation++;
  busy = false;
  activeBatch = undefined;
  cursor = 0;
  observer?.disconnect();
  results.replaceChildren();
  results.classList.toggle("research-view", collection === "research");

  const list = filtered();
  $("catalog-empty").hidden = !!list.length;
  const scope = works.filter(w => source === "all" || w.sourceKey === source);
  $("result-count").textContent = `${list.length} ${collection === "visual" ? "visual entries" : "research works"} · ${scope.length} in collection`;
  document.querySelectorAll<HTMLButtonElement>("[data-collection]").forEach(b => b.setAttribute("aria-pressed",String(b.dataset.collection === collection)));
  document.querySelectorAll<HTMLButtonElement>("[data-source]").forEach(b => b.setAttribute("aria-pressed",String(b.dataset.source === source)));
  $("source-description").textContent = settings.sources.find(s => s.key === source)?.description ?? "Five perspectives. From experience to useful training data.";
  sourceSelect.value = source;
  filterChips();
  syncUrl();
  setBoundary(false, false);
  if (list.length) void loadNext();
}
function reset() {
  search.value = "";
  for (const k of filterIds) controls[k].value = "all";
  document
    .querySelectorAll<HTMLInputElement>("input[name=signal]")
    .forEach((el) => (el.checked = false));
  sort.value = "newest";
  render();
}
function fitPanel() {
  const el = $("filter-panel");
  if (el.hidden) return;
  const viewport = window.visualViewport;
  const viewportTop = viewport?.offsetTop ?? 0;
  const bottom = viewport ? viewportTop + viewport.height : innerHeight;
  el.style.top = "";
  // Short windows need a taller sheet, rather than a popover squeezed under chrome.
  if (bottom - el.getBoundingClientRect().top < Math.min(480, (bottom - viewportTop) * 0.7)) {
    const toolbarTop = $("library-toolbar").getBoundingClientRect().top;
    el.style.top = `${viewportTop + 12 - toolbarTop}px`;
  }
  el.style.maxHeight = `${Math.max(48, Math.floor(bottom - el.getBoundingClientRect().top - 12))}px`;
}
function panel(open: boolean) {
  $("filter-panel").hidden = !open;
  $("filters-toggle").setAttribute("aria-expanded", String(open));
  if (open) fitPanel();
}
window.visualViewport?.addEventListener("resize", fitPanel, { passive: true });
addEventListener("scroll", fitPanel, { passive: true });
function updateTray() {
  for (const id of selected) if (!byId.has(id)) selected.delete(id);
  $("compare-tray").hidden = !selected.size;
  $("compare-count").textContent = `${selected.size} of 4 selected`;
  $("compare-names").textContent = [...selected]
    .map((id) => byId.get(id)!.name)
    .join(" · ");
  $<HTMLButtonElement>("open-compare").disabled = selected.size < 2;
  for (const b of document.querySelectorAll<HTMLButtonElement>(
    "[data-compare]",
  )) {
    const chosen = selected.has(b.dataset.compare!);
    b.setAttribute("aria-pressed", String(chosen));
    b.innerHTML = `<span aria-hidden="true">${chosen ? "✓" : "+"}</span> Compare`;
    b.closest("article")?.classList.toggle("is-selected", chosen);
  }
  syncUrl();
}
let toastTimer: ReturnType<typeof setTimeout> | undefined;
function announce(message: string) {
  const el = $("announcement");
  el.textContent = message;
  el.classList.add("is-visible");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2500);
}
function toggle(id: string) {
  if (!byId.has(id)) return;
  if (selected.has(id)) selected.delete(id);
  else if (selected.size >= 4) {
    announce("Compare up to four entries. Remove one to add another.");
    return;
  } else selected.add(id);
  updateTray();
  const b = detail.querySelector<HTMLElement>("[data-detail-compare]");
  if (b)
    b.textContent = selected.has(id)
      ? "Remove from comparison"
      : "Add to comparison";
}
function facts(w: Work): [string,string][] {
  return [
    ["Data source", settings.sources.find(s => s.key === w.sourceKey)?.label ?? w.source],
    ["Resource type", w.resourceType], ["Pipeline stage", w.stage],
    ["Scale & scope", w.scale ?? "Not reported"],
    ["Signals / labels", (w.modalities ?? w.signals).join(" · ")],
    ["Representation", w.representation ?? "Not reported"],
    ["Data format", w.format], ["Resource access", w.access ?? w.dataAccess],
    ["Code", w.codeAccess], ["License", w.license ?? "Not reported"],
    ["Institution", w.institute], ["First published", w.date],
  ];
}
const factsHtml = (rows: [string,string][]) => `<dl class="facts">${rows.map(([k,v]) => `<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join("")}</dl>`;
function showDetail(id: string) {
  const w=byId.get(id); if(!w)return;
  detail.dataset.work=id;
  const p=preview(w);
  const links=[{label:"Paper / resource",url:w.paperUrl},...w.links];
  const unique=links.filter((l,i) => links.findIndex(x => x.url === l.url) === i);
  const refs=w.evidence ?? [{label:"Canonical paper / resource",url:w.paperUrl}];
  const detailRows = facts(w).filter(([k,v]) => !["Institution","First published","Code"].includes(k) && (v !== "Not reported" || ["Scale & scope","Resource access","Data format"].includes(k)));
  $("detail-content").innerHTML = `<div class="detail-layout${p ? "" : " no-media"}">${p ? `<div class="detail-media"><img class="detail-cover" src="${e(p.url)}" alt="${e(p.alt)}"/><p class="image-note">${e(w.credit ?? w.institute)} · <a href="${e(p.source)}" target="_blank" rel="noopener noreferrer">Original figure ↗</a></p></div>` : ""}<div class="detail-copy"><p class="detail-kicker">${e(w.institute)} · ${e(w.date)} · ${e(w.publication)}</p><h2>${e(w.name)}</h2><p class="detail-paper-title">${e(w.summary ?? w.title)}</p><div class="detail-links">${unique.map(l=>`<a href="${e(l.url)}" target="_blank" rel="noopener noreferrer">${e(l.label)} ↗</a>`).join("")}</div><section class="detail-section"><h3>At a glance</h3>${factsHtml(detailRows)}</section><details class="detail-sources"><summary>Sources & context · ${refs.length} references</summary><p class="data-note">${e(w.title)}</p><p class="data-note">${e(w.sections.join(" · "))}</p>${w.notes ? `<p class="data-note">${e(w.notes)}</p>` : ""}<ol>${refs.map(r=>`<li><a href="${e(r.url)}" target="_blank" rel="noopener noreferrer">${e(r.label)} ↗</a></li>`).join("")}</ol>${w.reviewed ? `<p class="data-note">Visual facts reviewed ${e(w.reviewed)}.</p>` : ""}</details><button type="button" class="button-dark detail-compare" data-detail-compare="${e(id)}">${selected.has(id) ? "Remove from comparison" : "Add to comparison"}</button></div></div>`;
  detail.showModal(); document.body.classList.add("dialog-open"); syncUrl();
}
function showCompare() {
  if(selected.size<2)return;
  const items=[...selected].map(id=>byId.get(id)!);
  const keys=facts(items[0]).map(([k])=>k);
  $("compare-content").innerHTML=`<div class="compare-heading"><h2>Side by side.</h2><p>Data, formats, and access conditions with their original sources.</p><span class="compare-swipe">Swipe to compare →</span></div><div class="compare-table-wrap" role="region" tabindex="0" aria-label="Comparison table, scroll horizontally"><table class="comparison-table" style="--compare-columns:${items.length}"><thead><tr><th scope="col">Compare</th>${items.map(w=>`<th scope="col">${preview(w) ? `<img src="${e(preview(w)?.url)}" alt="${e(preview(w)?.alt)}"/>` : ""}<strong>${e(w.name)}</strong><a href="${e(w.paperUrl)}" target="_blank" rel="noopener noreferrer">Primary source ↗</a></th>`).join("")}</tr></thead><tbody>${keys.map(key=>`<tr><th scope="row">${e(key)}</th>${items.map(w=>`<td>${e(facts(w).find(([k])=>k===key)?.[1])}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="compare-footnote">Reported corpora, downloadable releases, and cumulative multi-view hours have different scopes. Unknown values are not inferred.</p>`;
  compare.showModal();document.body.classList.add("dialog-open");
}
function closeDialog(d: HTMLDialogElement) {
  d.close();
  if (![detail, compare, about].some((x) => x.open))
    document.body.classList.remove("dialog-open");
  syncUrl();
}
for (const d of [detail, compare, about]) {
  d.querySelector("[data-close]")?.addEventListener("click", () =>
    closeDialog(d),
  );
  d.addEventListener("click", (event) => {
    if (event.target === d) closeDialog(d);
  });
  d.addEventListener("close", () => {
    if (![detail, compare, about].some((x) => x.open))
      document.body.classList.remove("dialog-open");
    syncUrl();
  });
}
results.addEventListener("click", (event) => {
  const t = event.target as HTMLElement;
  const retry = t.closest<HTMLButtonElement>("[data-retry-image]");
  if (retry) {
    const w = byId.get(retry.dataset.retryImage!);
    const article = retry.closest("article");
    if (w && article) {
      retry.disabled = true;
      retry.textContent = "Loading…";
      void preload(w, true).then(() => {
        const template = document.createElement("template");
        template.innerHTML = coverHtml(w);
        article.querySelector(".card-cover")?.replaceWith(template.content);
      });
    }
    return;
  }
  const compareButton = t.closest<HTMLElement>("[data-compare]");
  if (compareButton) toggle(compareButton.dataset.compare!);
  const b = t.closest<HTMLElement>("[data-detail]");
  if (b) showDetail(b.dataset.detail!);
});
results.addEventListener(
  "error",
  (event) => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;
    const article = img.closest<HTMLElement>("article[data-id]");
    const w = article ? byId.get(article.dataset.id!) : undefined;
    if (!w || !article) return;
    previews.set(w.id, null);
    const template = document.createElement("template");
    template.innerHTML = imageFallback(w);
    article.querySelector(".card-cover")?.replaceWith(template.content);
  },
  true,
);
detail.addEventListener("click", (event) => {
  const b = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-detail-compare]",
  );
  if (b) toggle(b.dataset.detailCompare!);
});
document.querySelectorAll<HTMLButtonElement>("[data-collection]").forEach((b) =>
  b.addEventListener("click", () => {
    collection = b.dataset.collection!;
    panel(false);
    render();
  }),
);
document.querySelectorAll<HTMLButtonElement>("[data-source]").forEach(b => b.addEventListener("click",()=>{
  source=b.dataset.source!; panel(false); render();
}));
sourceSelect.addEventListener("change", () => { source = sourceSelect.value; render(); });
for (const k of filterIds) controls[k].addEventListener("change", render);
for (const el of document.querySelectorAll("input[name=signal]"))
  el.addEventListener("change", render);
search.addEventListener("input", render);
sort.addEventListener("change", render);
$("reset-filters").addEventListener("click", reset);
$("empty-reset").addEventListener("click", reset);
$("filters-toggle").addEventListener("click", () =>
  panel($("filter-panel").hidden),
);
$("apply-filters").addEventListener("click", () => panel(false));
document.addEventListener("pointerdown", (event) => {
  if (!$("library-toolbar").contains(event.target as Node)) panel(false);
});
$("active-filters").addEventListener("click", (event) => {
  const b = (event.target as HTMLElement).closest<HTMLElement>("[data-remove]");
  if (!b) return;
  const key = b.dataset.remove!;
  if (key === "q") search.value = "";
  else if (key === "signal")
    document
      .querySelectorAll<HTMLInputElement>("input[name=signal]")
      .forEach((el) => {
        if (el.value === b.dataset.value) el.checked = false;
      });
  else if (filterIds.includes(key as (typeof filterIds)[number]))
    controls[key as (typeof filterIds)[number]].value = "all";
  render();
});
$("open-compare").addEventListener("click", showCompare);
$("clear-compare").addEventListener("click", () => {
  selected.clear();
  updateTray();
});
$("share-view").addEventListener("click", async () => {
  syncUrl();
  try {
    await navigator.clipboard.writeText(location.href);
    announce("Link copied. Filters and comparison are included.");
  } catch {
    const field = document.createElement("input");
    field.value = location.href;
    field.setAttribute("aria-label", "Copy view URL");
    $("active-filters").append(field);
    field.select();
    announce("Copy the selected link to share this view.");
  }
});
document.querySelectorAll("[data-about]").forEach((b) =>
  b.addEventListener("click", () => {
    about.showModal();
    document.body.classList.add("dialog-open");
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") panel(false);
  if (
    event.key === "/" &&
    ![detail, compare, about].some((d) => d.open) &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(
      (event.target as HTMLElement).tagName,
    )
  ) {
    event.preventDefault();
    search.focus();
  }
});
let resizeFrame = 0;
addEventListener(
  "resize",
  () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (activeBatch) shimmerMask(activeBatch);
      if (works.length) observe();
      fitPanel();
    });
  },
  { passive: true },
);
async function boot() {
  generation++;
  const token = generation;
  busy = true;
  results.replaceChildren();
  makeBatch(PAGE_SIZE);
  setBoundary(true, false);
  try {
    const response = await fetch(settings.endpoint);
    if (!response.ok) throw Error(`Catalog HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data) || !data.length) throw Error("Empty catalog");
    if (token !== generation) return;
    works = data as Work[];
    byId = new Map(works.map((w) => [w.id, w]));
    render();
    updateTray();
    const item = params.get("item");
    if (item && byId.has(item)) showDetail(item);
    if (params.get("about") === "1") { about.showModal(); document.body.classList.add("dialog-open"); }
  } catch (error) {
    if (token !== generation) return;
    busy = false;
    activeBatch = undefined;
    results.replaceChildren();
    setBoundary(false, false);
    $("feed-error").hidden = false;
    console.error(error);
  }
}
$("retry-load").addEventListener("click", () => void boot());
void boot();
