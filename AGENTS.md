# AGENTS.md — Intelligaia Brand Assets

Entry point for AI agents, coding assistants and automated workflows. Read this first, then `website/index.json`.

Compatible with the `AGENTS.md` convention used by Claude Code, Cursor, Codex, Aider, Continue and similar tools. If your tool looks for `CLAUDE.md` or `.cursorrules`, they symlink here.

---

## What this repository is

The single source of truth for how Intelligaia work looks and reads. Two audiences, one source:

- **Humans** browse the HTML portal (`website/light/` and `website/dark/`)
- **Agents** parse `website/index.json`, `website/assets/manifest.json`, and the `page-spec` JSON block embedded at the bottom of every playbook page

Nothing is documented in one place and defined in another.

The repository is organised as **modules** — self-contained brand deliverables that share this root. `website/` is the brand portal; `Intelligaia Slide Deck Skill/` is a Claude skill for producing on-brand decks. More modules will be added as siblings over time. Each module carries its own `README.md`; this file (`AGENTS.md`) governs the repository as a whole.

---

## Repository layout

```
├── AGENTS.md                      this file (also CLAUDE.md) — governs the whole repo
├── README.md                      human-readable overview
├── .github/workflows/             CI — GitHub Actions (Pages build, etc.)
├── docs/                          setup notes
│
├── website/                       ── MODULE · the brand portal — served by GitHub Pages
│   ├── index.html                 redirect → START HERE.html
│   ├── START HERE.html            human entry point
│   ├── index.json                 machine-readable repository map
│   ├── assets/                    shared by both themes — 279 files
│   ├── light/                     21 pages
│   └── dark/                      12 pages
│
└── Intelligaia Slide Deck Skill/  ── MODULE · Claude skill for on-brand decks
    ├── README.md                  install + usage
    ├── Intelligaia Deck Design.skill    one-click installable skill
    ├── Sample - Agenda Slide.pptx       example output
    └── intelligaia-deck-design/   SKILL.md (design system) + assets/ (16 PNGs)
```

Modules are independent: each owns its own assets, palette and rules. The brand
portal's hard constraints below apply to portal artifacts; a module such as the
deck skill documents its own system in its `SKILL.md` / `README.md`.

---

## Machine entry points

| File | Purpose |
|---|---|
| `website/index.json` | Repository map — every page, its type, and its spec URL |
| `website/assets/manifest.json` | 279 assets with dimensions, tags, construction stage, URLs |
| `website/assets/tokens/design-tokens.json` | W3C design tokens — colour, type, dimension |
| `website/assets/tokens/figma.json` | Where the Figma source lives and how sync works |
| `website/assets/AGENTS.md` | Asset-selection contract and failure modes |

Each playbook page also carries an inline block:

```html
<script type="application/json" id="page-spec"> … </script>
```

Fetch the page, extract that block, and you have the complete machine-readable rules for that artifact type.

---

## Branches

| Branch | Contains | Use |
|---|---|---|
| `main` | Full repo — `website/` portal, assets, docs | Cloning, contributing |
| `assets` | Assets at root, nothing else | Direct URL consumption |

Raw asset URL pattern:

```
https://raw.githubusercontent.com/intelligaia/Intelligaia-Brand-Assets/assets/<path>
```

---

## Workflows this repo serves

**Producing an artifact** (landing page, case study, whitepaper, social post, service catalog)
1. Read the relevant playbook page in `website/dark/` or `website/light/`
2. Extract its `page-spec` JSON
3. Pull required assets from `website/assets/manifest.json`
4. Pull tokens from `website/assets/tokens/design-tokens.json`
5. Build; validate against the playbook's guardrails
6. Report which assets you used, by `id` and `path`

**Reviewing an artifact**
Load the relevant `page-spec`, check the artifact against every entry in `guardrails.do` and `guardrails.dont`, and report violations with the specific rule that was broken.

**Answering a brand question**
Foundations pages (`10`–`13`) define principles, colour and type. Quote them; do not paraphrase from memory.

---

## Hard constraints

These are non-negotiable and apply to every artifact:

- **Colour** — only `#FFC800`, `#04050A`, `#4A8BF5`, `#8A5AF0` plus theme neutrals. Flat fills. No gradients on the yellow. One accent (blue *or* purple) per viewport.
- **Type** — Oswald 400/500 for headings only. Geist for body, labels, links and descriptions. **No weight above 500 exists.** No third display family. No pixel fonts.
- **Case** — running case in headings. Uppercase only below 13px.
- **Numbering** — no `01 / 02 / 03` prefixes on headings or cards.
- **Illustrations** — from `website/assets/` only. Never generate one. If nothing fits, report the gap.
- **Layout** — 1440px max width, 48px gutter.

---

## Failure modes

| Situation | Correct behaviour |
|---|---|
| No asset matches the brief | Report the gap. Do not synthesise. |
| `manifest.json` unreachable | Stop. Do not fall back to remembered paths. |
| Brief requests an off-brand colour | Flag it, propose the nearest brand colour. |
| Brief requests a bolder font | Refuse. 500 is the ceiling. |
| Figma and repo disagree | Figma wins. Flag the drift for regeneration. |

---

## Contributing as an agent

Changes to tokens must start in Figma, then regenerate `design-tokens.json` and its derived formats. Never hand-edit `tokens.css` or `_tokens.scss` — they are generated.

New assets follow the four-stage construction process documented in `website/light/21 Construction.html`, then get added to `manifest.json`.