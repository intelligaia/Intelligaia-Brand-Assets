# AGENTS.md — Intelligaia Asset Library

Instructions for AI agents producing Intelligaia collateral. Read `manifest.json` first; it is the authoritative index.\n\n**Scope (v2.0):** this folder is assets only — case studies, diagrams, icons, illustrations, letters, logo. Templates, waves, website banner assets, older graphics and HTML documents were moved to siblings under `website/`. Never select from those folders; if the brief needs one, report the gap.

---

## Base URLs

```
MANIFEST  https://raw.githubusercontent.com/intelligaia/Intelligaia-Brand-Assets/assets/manifest.json
RAW       https://raw.githubusercontent.com/intelligaia/Intelligaia-Brand-Assets/assets/<path>
PAGES     https://intelligaia.github.io/Intelligaia-Brand-Assets/assets/<path>
TOKENS    ../tokens/colours.json  ·  ../tokens/typography.json   (repo: website/tokens/)
```

---

## Contract

1. **Never generate an illustration.** Select an existing asset from `manifest.json`. If nothing fits, report the gap — do not synthesise a substitute.
2. **Reference by URL.** Emit the `raw_url` from the manifest. Do not inline base64 or copy binaries.
3. **Use `stage: "final"`** unless the task is explicitly about documenting the construction method.
4. **Load tokens before styling.** Colour and type values come from `../tokens/*.json` (repo: `website/tokens/`), never from memory.
5. **Report what you used.** List asset `id` and `path` for every asset placed, so humans can verify.

---

## Manifest shape

```jsonc
{
  "version": "2.0",
  "base_urls": { "raw": "...", "pages": "..." },
  "counts": { "total": 174, "by_category": { "icon": 41, ... } },
  "categories": [ { "id": "icon", "description": "...", "count": 41 } ],
  "construction_stages": [ { "id": "final", "order": 4, "meaning": "..." } ],
  "assets": [
    {
      "id": "a1b2c3d4e5f6",
      "name": "MacBook — Front face — Final",
      "file": "MacBook — Front face — Final.png",
      "path": "illustrations/devices/MacBook — Front face — Final.png",
      "category": "device",
      "folder": "illustrations/devices",
      "format": "png",
      "bytes": 184320,
      "width": 1200, "height": 900,
      "stage": "final",
      "tags": ["device","front-face","final"],
      "raw_url": "https://raw.githubusercontent.com/.../illustrations/devices/...",
      "pages_url": "https://intelligaia.github.io/.../assets/illustrations/devices/..."
    }
  ]
}
```

---

## Selection recipes

**Landing page hero** → there is no banner category in the asset library any more. Superseded banner artwork sits in `website/_older-graphics/banners/` and is **not** a valid selection. Report the gap.

**In-page section graphic** → likewise moved to `website/_older-graphics/sections/`. Report the gap rather than reaching for it.

**Person or team illustration** → `category: "character-male"` or `"character-female"` with `stage: "final"`.

**Device / prop in a composition** → `category: "device"` / `"object"` / `"nature"`, always `stage: "final"`.

**Icon** → `category: "icon"`. SVG, recolourable via `currentColor`.

**Letterform** → `category: "letter"`. One isometric initial per heading, A–Z.

**Diagram** → `category: "diagram"`. PNG for web, PDF for print.

**Case study graphic** → `category: "case-study"`, filtered by the project folder.

**Logo** → `category: "brand"`. Invert for dark backgrounds; never recolour to a non-brand hue.

Filter example:

```js
const m = await (await fetch(MANIFEST)).json();
const devices = m.assets.filter(a =>
  a.category === "device" && a.stage === "final"
);
```

---

## Style constraints

Pulled from `tokens/`, restated here as hard rules:

- **Colours** — only `#FFC800`, `#04050A`, `#4A8BF5`, `#8A5AF0` plus theme neutrals. Flat fills. No gradients on the yellow. One accent (blue *or* purple) per viewport.
- **Type** — Oswald 500 headings, Oswald 400 descriptions, Geist 400 body, Raleway 400/500 labels. No weight above 500. No third display family. No pixel fonts.
- **Case** — running case in headings. Uppercase only for labels under 13px.
- **Numbering** — do not add `01 / 02 / 03` prefixes to headings or cards.
- **Layout** — 1440px max width, 48px gutter.

---

## Output requirements

Every artifact an agent produces must:

- Reference assets by `raw_url` only
- Carry a `<script type="application/json" id="page-spec">` block describing what was built
- End with a manifest of assets used: `[{ id, path }]`
- Pass the do/don't guardrails in the relevant playbook

---

## Failure modes

| Situation | Correct behaviour |
|---|---|
| No asset matches the brief | Report the gap. Do not generate one. |
| Manifest unreachable | Stop. Do not fall back to remembered paths. |
| Asset exists but wrong stage | Use `final`; only use other stages for method documentation. |
| Brief asks for an off-brand colour | Flag the conflict, propose the nearest brand colour. |
| Brief asks for a heavier font weight | Refuse; 500 is the ceiling. |
