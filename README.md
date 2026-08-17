# Intelligaia Brand Assets

The single source of truth for how Intelligaia work looks and reads — written for humans, structured for agents.

**[Open the portal →](https://intelligaia.github.io/Intelligaia-Brand-Assets/)** · [START HERE.html](website/START%20HERE.html) · [Status](docs/STATUS.md) · [Design log](docs/DESIGN-LOG.md) · [Agent contract](AGENTS.md)

---

## Where the portal is right now

**17 August 2026** — the portal has been restructured from one flat navigation
into **two sections with their own left-hand navigation**, built in `website/v2/`.
Dark theme only; light follows. Under review **Wednesday 19 August**.

| | |
|---|---|
| **Live** | The site root now lands on `website/v2/00 Home.html` |
| **Design system** | `v2/ds/` — Foundations · Asset library · Construction · Tokens & handoff |
| **Collateral** | `v2/mk/` — Service catalog · Case studies · Whitepapers · Landing pages · Diagrams · Social · Skills |
| **Previous** | `dark/` and `light/` keep the flat navigation, untouched and still reachable |

Read **[`docs/STATUS.md`](docs/STATUS.md)** for the goal framework behind the split,
what is done, what is pending and when it lands. Every change request and its
outcome — including the defects register — is in
**[`docs/DESIGN-LOG.md`](docs/DESIGN-LOG.md)**.

---

## Modules

The repo is organised as self-contained **modules** — each a brand deliverable with its own assets, rules and README. More will be added as siblings over time.

| Module | What it is | Start at |
|---|---|---|
| **Website** — brand portal | The living brand guide and asset library, served on GitHub Pages | [`website/`](website/) → [`START HERE.html`](website/START%20HERE.html) |
| **Intelligaia Skills** — Claude skills | Grouped Intelligaia skills: Slide Deck (on-brand decks), Landing Page (agentic pages), CPQ (Quote-to-Cash knowledge), Nucleux Base Components (React component library via Figma); Google Doc planned | [`Intelligaia Skills/`](Intelligaia%20Skills/) |

| **Readout Tracker** — status templates | A 10-slide project readout & status deck plus a `pptxgenjs` generator, built on the deck design system | [`Readout Tracker Project Status/`](Readout%20Tracker%20Project%20Status/) → `build-readout-templates.js` |

Setup notes that support the assets but aren't shipped live are in [`docs/`](docs/). Repo-wide rules for AI agents live in [`AGENTS.md`](AGENTS.md).

---

## The Website module: two audiences, one source

| | Humans | Agents |
|---|---|---|
| **Read** | The HTML portal in `website/v2/` | `website/index.json` and `website/assets/manifest.json` |
| **Get** | Prose, examples, annotated anatomy | Typed JSON specs, token files, asset URLs |
| **Start at** | `website/START HERE.html` | `AGENTS.md`, then `docs/STATUS.md` |

Every playbook page carries an inline `<script type="application/json" id="page-spec">` block. The prose a designer reads and the spec an agent parses come from the same page, so they cannot drift.

---

## Structure

This repo is organised as **modules** — self-contained brand deliverables that share one root. More will be added as siblings over time; each carries its own `README.md`.

```
├── AGENTS.md              instructions for AI agents (also CLAUDE.md)
├── README.md              this file
├── .github/workflows/     CI — GitHub Actions (Pages build)
├── docs/                  status, design log, plan, setup notes
│
├── website/               MODULE · the portal — served by GitHub Pages
│   ├── index.html         redirect → v2/00 Home.html
│   ├── START HERE.html    human entry point
│   ├── index.json         machine-readable repository map
│   │
│   ├── assets/            shared by every tree — 279 files
│   │   ├── manifest.json      every asset, indexed
│   │   ├── AGENTS.md          asset-selection contract
│   │   ├── tokens/            design tokens in six formats
│   │   ├── illustrations/     characters · devices · nature · objects
│   │   ├── marketing/         banners · sections · people · lettering
│   │   ├── icons/ waves/ letters/ brand/ diagrams/ service-catalog/
│   │
│   ├── v2/                CURRENT · two sections, dark only — 16 pages
│   │   ├── 00 Home.html       landing page, top nav, no rail
│   │   ├── ds/                Design system — 7 pages
│   │   └── mk/                Collateral — 8 pages
│   ├── light/             PREVIOUS · flat navigation — 11 pages
│   └── dark/              PREVIOUS · flat navigation — 11 pages
│
├── Intelligaia Skills/             Intelligaia Claude skills (grouped)
│   ├── Intelligaia Slide Deck Skill/    on-brand decks — README, .skill, examples/, assets
│   ├── Intelligaia Landing Page skill/  agentic landing pages — SKILL.md, .skill, levels, reference
│   ├── Intelligaia CPQ Skill/           CPQ / Quote-to-Cash knowledge skill (SKILL.md + modules)
│   ├── Intelligaia Google Doc Skill/    planned — see issue #1 (placeholder)
│   └── Nucleux Base Components …/       Nucleux React component library, via Figma

│
└── Readout Tracker Project Status/ MODULE · project readout & status templates
    ├── Intelligaia Readout & Status Templates.pptx   10-slide template deck
    └── build-readout-templates.js                    pptxgenjs generator
```

Within the portal, both themes read from the same `website/assets/` folder. Nothing is duplicated.

---

## The two sections

One landing page, two named sections, one shared asset library. A section is
**wayfinding, not a copy** — both read the same manifest and the same tokens.

**Design system** — `v2/ds/` · for someone building something who needs the rule rather than a reference

| | |
|---|---|
| Foundations | Three principles, four colours, two type families |
| Asset library | Illustrations, devices, objects, nature, icons, letterforms, waves |
| Construction | Grid first, four primitives, three stages — only the final ships |
| Tokens & handoff | The files to import and the raw asset URL pattern |

**Collateral** — `v2/mk/` · for something going in front of a client that has to look like us

| | |
|---|---|
| Service catalog | The capability document, page by page, with the job each page does |
| Case studies | Published client work and the arc each one follows |
| Whitepapers | Long-form papers and the template they are built on |
| Landing pages | Page patterns and the sections to mix from |
| Diagrams | Process graphics, flow charts, journey maps |
| Social | Post formats and the assets that fill them |
| Skills | Agents that assemble the above — two in build |

### Navigation contract

Four rules. Break any and the portal stops telling people where they are.

1. **The header is identical on every page.** Entering a section moves the highlight and nothing else.
2. **The section is derived from the page, never from session state** — a shared link opens with the right navigation applied.
3. **Section navigation lives in the left rail**, and only the active branch expands.
4. **The navigation always reports position** — between pages via the rail, within a page via a scroll spy.

In-page anchors are derived from the page itself: give a section an `.eyebrow`
and it self-registers in the rail. There is no list to maintain.

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
- **Numbering** — no `01 / 02 / 03` prefixes on headings or cards.
- **Naming** — the second section is **Collateral**, never "Marketing kit". Do not label sections by audience.

---

## Licence

Proprietary. Intelligaia internal and client work only.