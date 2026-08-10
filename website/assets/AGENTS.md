# AGENTS.md — Intelligaia Asset Library

Instructions for AI agents producing Intelligaia collateral. Read `manifest.json` first; it is the authoritative index.

---

## Base URLs

```
MANIFEST  https://raw.githubusercontent.com/intelligaia/Intelligaia-Illustration-Library-/assets/manifest.json
RAW       https://raw.githubusercontent.com/intelligaia/Intelligaia-Illustration-Library-/assets/<path>
PAGES     https://intelligaia.github.io/Intelligaia-Illustration-Library-/assets/<path>
TOKENS    <RAW>/tokens/colours.json  ·  <RAW>/tokens/typography.json
```

---

## Contract

1. **Never generate an illustration.** Select an existing asset from `manifest.json`. If nothing fits, report the gap — do not synthesise a substitute.
2. **Reference by URL.** Emit the `raw_url` from the manifest. Do not inline base64 or copy binaries.
3. **Use `stage: "final"`** unless the task is explicitly about documenting the construction method.
4. **Load tokens before styling.** Colour and type values come from `tokens/*.json`, never from memory.
5. **Report what you used.** List asset `id` and `path` for every asset placed, so humans can verify.

---

## Manifest shape

```jsonc
{
  "version": "1.0.0",
  "base_urls": { "raw": "...", "pages": "..." },
  "counts": { "total": 279, "by_category": { "character": 48, ... } },
  "categories": [ { "id": "marketing-banner", "description": "...", "count": 10 } ],
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

**Landing page hero** → `category: "marketing-banner"`. Prefer tags `isometric` or `3d-render`. One per page.

**In-page section graphic** → `category: "marketing-section"`. Match tags to the topic: `research`, `strategy`, `workshop`, `journey`, `audit`, `branding`.

**Person or team illustration** → `category: "marketing-people"`, or `category: "character"` with `stage: "final"` for a construction-system character.

**Device / prop in a composition** → `category: "device"` / `"object"` / `"nature"`, always `stage: "final"`.

**Icon** → `category: "icon"`. SVG, recolourable via `currentColor`.

**Logo** → `category: "brand"`. Invert for dark backgrounds; never recolour to a non-brand hue.

Filter example:

```js
const m = await (await fetch(MANIFEST)).json();
const heroes = m.assets.filter(a =>
  a.category === "marketing-banner" && a.tags.includes("isometric")
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
