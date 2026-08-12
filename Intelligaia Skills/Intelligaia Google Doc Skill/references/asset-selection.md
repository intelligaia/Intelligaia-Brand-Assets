# Asset selection

Illustrations, logos, and motifs are **selected, never generated.** The bundled
`assets/manifest.json` (279 assets, v1.0.0) is the authoritative index; each entry carries a stable
`raw_url` on GitHub. This mirrors the library's own `AGENTS.md` contract.

## The contract

1. **Never generate an illustration.** Query the manifest. If nothing fits, report the gap and leave
   the figure as a captioned placeholder — do not synthesise a substitute.
2. **Select `stage: "final"`** unless documenting construction method (you won't, in a doc).
3. **Prefer raster (`format: "png"`)** for figures — the generator embeds PNGs by fetching `raw_url`.
   SVGs (waves, icons, logo SVG) do not embed reliably via docx-js; the bundled PNG logo is the
   exception used for the cover/footer.
4. **Never recolour, stretch, or crop.** Caption every placed asset.
5. **Report what you used** — list `id` + `path` for each asset in the run summary.

## Querying (Node, offline against the bundle)

```js
const m = require('../assets/manifest.json');
const finals = m.assets.filter(a => a.stage === 'final');
// a hero/section illustration for a topic:
const hero = m.assets.find(a =>
  a.category === 'marketing-section' && a.format === 'png' &&
  a.tags.some(t => /research|strategy|journey|audit|branding/.test(t)));
```

Useful categories for documents (counts in v1.0.0): `marketing-section` (13, in-page topic
illustrations — the usual figure choice), `marketing-banner` (10, full-width heroes — a cover band at
most), `icon` (41, but many are large SVGs), `wave` (9, abstract motifs — SVG, so decorative only and
usually skipped in DOCX), `diagram` (1), `brand` (3, the logo).

## What actually goes into a document

- **Cover:** bundled `assets/brand/intelligaia-logo.png`. Optionally one `marketing-banner` PNG as a
  cover band — only if it matches the topic and only at `final`.
- **Body figures:** a `marketing-section` PNG when the user wants a topic illustration, or a
  user-supplied diagram/screenshot for architecture docs. One per two pages at most; captioned.
- **Never** decorate a document with characters, devices, or waves "to fill space." Enterprise docs
  stay clarity-first; a figure earns its place by carrying meaning.

## Fetch-at-build

`scripts/build_docx.js` fetches a figure's `raw_url` at build time and embeds the bytes. This needs
network. If the fetch fails or the doc is built offline, the block degrades to a captioned placeholder
frame and the run summary flags it — the document still renders. This is intentional: a broken image
never blocks a deliverable.
