# Intelligaia Brand Assets

The single source of truth for how Intelligaia work looks and reads — written for humans, structured for agents.

**[Open the portal →](website/START%20HERE.html)**

**Live site:** https://intelligaia.github.io/Intelligaia-Brand-Assets/

---

## Modules

The repo is organised as self-contained **modules** — each a brand deliverable with its own assets, rules and README. More will be added as siblings over time.

| Module | What it is | Start at |
|---|---|---|
| **Website** — brand portal | The living brand guide and asset library, served on GitHub Pages | [`website/`](website/) → [`START HERE.html`](website/START%20HERE.html) |
| **Intelligaia Skills** — Claude skills | Grouped Intelligaia skills: Slide Deck Skill (live — on-brand decks); Google Doc & CPQ skills planned (placeholders) | [`Intelligaia Skills/`](Intelligaia%20Skills/) |
| **Nucleux Base Components** — UI component skill | Nucleux React component-library skill (`SKILL.md` + `.skill`) | [`Nucleux Base Components/`](Nucleux%20Base%20Components/) |
| **Readout Tracker** — status templates | A 10-slide project readout & status deck plus a `pptxgenjs` generator, built on the deck design system | [`Readout Tracker Project Status/`](Readout%20Tracker%20Project%20Status/) → `build-readout-templates.js` |

Setup notes that support the assets but aren't shipped live are in [`docs/`](docs/). Repo-wide rules for AI agents live in [`AGENTS.md`](AGENTS.md).

---

## The Website module: two audiences, one source

| | Humans | Agents |
|---|---|---|
| **Read** | The HTML portal in `website/light/` and `website/dark/` | `website/index.json` and `website/assets/manifest.json` |
| **Get** | Prose, examples, annotated anatomy | Typed JSON specs, token files, asset URLs |
| **Start at** | `website/START HERE.html` | `AGENTS.md` |

Every playbook page carries an inline `<script type="application/json" id="page-spec">` block. The prose a designer reads and the spec an agent parses come from the same page, so they cannot drift.

---

## Structure

This repo is organised as **modules** — self-contained brand deliverables that share one root. More will be added as siblings over time; each carries its own `README.md`.

```
├── AGENTS.md              instructions for AI agents (also CLAUDE.md)
├── README.md              this file
├── .github/workflows/     CI — GitHub Actions (Pages build)
├── docs/                  setup notes
│
├── website/               MODULE · the portal — served by GitHub Pages
│   ├── index.html         redirect → START HERE.html
│   ├── START HERE.html    human entry point
│   ├── index.json         machine-readable repository map
│   │
│   ├── assets/            shared by both themes — 279 files
│   │   ├── manifest.json      every asset, indexed
│   │   ├── AGENTS.md          asset-selection contract
│   │   ├── tokens/            design tokens in six formats
│   │   ├── illustrations/     characters · devices · nature · objects
│   │   ├── marketing/         banners · sections · people · lettering
│   │   ├── icons/ waves/ letters/ brand/ diagrams/ service-catalog/
│   │
│   ├── light/             21 pages
│   └── dark/              12 pages
│
├── Intelligaia Skills/             Intelligaia Claude skills (grouped)
│   ├── Intelligaia Slide Deck Skill/    on-brand decks — README, .skill, examples/, assets
│   ├── Intelligaia Google Doc Skill/    planned — see issue #1 (placeholder)
│   └── Intelligaia CPQ Skill/           planned (placeholder)
│
├── Nucleux Base Components/        MODULE · Nucleux UI component skill (SKILL.md + .skill)
│
└── Readout Tracker Project Status/ MODULE · project readout & status templates
    ├── Intelligaia Readout & Status Templates.pptx   10-slide template deck
    └── build-readout-templates.js                    pptxgenjs generator
```

Within the portal, both themes read from the same `website/assets/` folder. Nothing is duplicated.

---

## The sections

**Reference — what the brand is made of**

| | |
|---|---|
| `10` Foundations | Three principles, four colours, two type families |
| `20` Brand assets | Illustrations, icons, waves, letterforms |
| `30` Diagrams | Process graphics, flow charts, matrices, journey maps |
| `40` Service catalog | Six reusable document page types |

**Produce — what you ship with it**

| | |
|---|---|
| `50` Landing pages | Yellow banner hero, five-section rhythm |
| `60` Case studies | The five-beat arc |
| `70` Whitepapers | Dual-track design + engineering |
| `80` Social media | Square, portrait, story |

Each Produce page ends with an agent-runnable prompt and a JSON spec.

---

## Design tokens

Figma is the design source of truth. This repo is the published mirror.

```
website/assets/tokens/design-tokens.json   W3C format — Style Dictionary, Tokens Studio
website/assets/tokens/tokens.css           CSS custom properties, theme-scoped
website/assets/tokens/_tokens.scss         SCSS variables
website/assets/tokens/colours.json          colour layer + usage rules
website/assets/tokens/typography.json       type scale + usage rules
website/assets/tokens/figma.json            Figma file links and sync policy
```

All six regenerate from `design-tokens.json`. Never hand-edit the derived files.

---

## Consuming assets

Assets are published to the `assets` branch with contents at root, so URLs resolve directly:

```
https://raw.githubusercontent.com/intelligaia/Intelligaia-Brand-Assets/assets/manifest.json
https://raw.githubusercontent.com/intelligaia/Intelligaia-Brand-Assets/assets/marketing/banners/….png
```

```js
const m = await (await fetch(MANIFEST)).json();
const heroes = m.assets.filter(a => a.category === "marketing-banner");
```

---

## Non-negotiables

- **Colour** — `#FFC800` · `#04050A` · `#4A8BF5` · `#8A5AF0` and theme neutrals. Flat fills only. One accent per viewport.
- **Type** — Oswald 400/500 for headings, Geist for everything else. **No weight above 500 exists.**
- **Case** — running case in headings; uppercase only below 13px.
- **Illustrations** — from `website/assets/` only. Never generated on the fly.
- **Layout** — 1440px max width, 48px gutter.

---

## Licence

Proprietary. Intelligaia internal and client work only.