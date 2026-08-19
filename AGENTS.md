# AGENTS.md — Intelligaia Brand Assets

Entry point for AI agents, coding assistants and automated workflows. Read this first, then `website/index.json`.

Compatible with the `AGENTS.md` convention used by Claude Code, Cursor, Codex, Aider, Continue and similar tools. If your tool looks for `CLAUDE.md` or `.cursorrules`, they symlink here.

---

## What this repository is

The single source of truth for how Intelligaia work looks and reads. Two audiences, one source:

- **Humans** browse the HTML portal — `website/brand-portal/` (current), with `website/_archive-v1/dark/` and `website/_archive-v1/light/` kept as the previous version
- **Agents** parse `website/index.json`, `website/assets/manifest.json`, and the `page-spec` JSON block embedded at the bottom of every playbook page

Nothing is documented in one place and defined in another.

The repository is organised as **modules** — self-contained brand deliverables that share this root. `website/` is the brand portal. The Intelligaia Claude skills live together under `Intelligaia Skills/` (Slide Deck, Landing Page, CPQ, Nucleux Base Components, Google Doc). `Readout Tracker Project Status/` is a template deck of readout & status slides built on the deck system. More modules will be added over time. Each module carries its own `README.md`; this file (`AGENTS.md`) governs the repository as a whole.

---

## Repository layout

```
├── AGENTS.md                      this file (also CLAUDE.md) — governs the whole repo
├── README.md                      human-readable overview
├── .github/workflows/             CI — GitHub Actions (Pages build, etc.)
├── docs/                          status, design log, plan, setup notes
│
├── website/                       ── MODULE · the brand portal — served by GitHub Pages
│   ├── index.html                 redirect → v2/00 Home.html
│   ├── START HERE.html            human entry point
│   ├── index.json                 machine-readable repository map
│   ├── assets/                    shared by every tree — 279 files
│   ├── v2/                        CURRENT · two sections, dark only — 16 pages
│   │   ├── 00 Home.html           landing page, top nav, no rail
│   │   ├── ds/                    Design system — 7 pages
│   │   └── mk/                    Collateral — 8 pages
│   ├── light/                     PREVIOUS · flat navigation — 11 pages
│   └── dark/                      PREVIOUS · flat navigation — 11 pages
│
├── Intelligaia Skills/            ── Intelligaia Claude skills (grouped)
│   ├── Intelligaia Slide Deck Skill/     on-brand decks — SKILL.md, .skill, examples/, assets
│   ├── Intelligaia Landing Page skill/   agentic landing pages — SKILL.md, .skill, levels, reference
│   ├── Intelligaia CPQ Skill/            CPQ / Quote-to-Cash knowledge skill (SKILL.md + modules)
│   ├── Intelligaia Google Doc Skill/     planned — see issue #1 (placeholder)
│   └── Nucleux Base Components …/        Nucleux React component library, via Figma
│
└── Readout Tracker Project Status/ ── MODULE · project readout & status templates
    ├── Intelligaia Readout & Status Templates.pptx   10-slide template deck
    └── build-readout-templates.js                    pptxgenjs generator
```

Modules are independent: each owns its own assets, palette and rules. The brand
portal's hard constraints below apply to portal artifacts; a module such as the
deck skill documents its own system in its `SKILL.md` / `README.md`.

> ## ⛔ FROZEN — skills migrated to `intelligaia/Intelligaia-Skills`
>
> These skill folders under `Intelligaia Skills/` have **moved** to the
> **[Intelligaia-Skills](https://github.com/intelligaia/Intelligaia-Skills)**
> repo and are **frozen here**. Do **not** edit them in this repo — make all
> changes in Intelligaia-Skills. The copies here remain only until we verify the
> migration and delete them.
>
> - `Intelligaia CPQ Skill/` → `industry-expertise/intelligaia-cpq/`
> - `Intelligaia Slide Deck Skill/` → `functional-skills/content-creation/intelligaia-slide-decks/`
> - `Intelligaia Whitepaper Skill/` → `functional-skills/content-creation/intelligaia-whitepapers/`
> - `Intelligaia Google Doc Skill/` → `functional-skills/content-creation/intelligaia-google-documents/`
> - `Intelligaia Landing Page skill/` → `functional-skills/content-creation/intelligaia-agentic-pages/`
> - `Intelligaia CX Roadmap Skill/` → `functional-skills/content-creation/intelligaia-cx-roadmap/`
> - `Nucleux Base Components skill-via figma/` → `functional-skills/design-system/nucleux/nucleux-base-component-via-figma/`
> - `nucleux-base-components skill-via-npm/` → `functional-skills/design-system/nucleux/nucleux-base-components-via-npm/`
>
> **All migrated skills are now frozen here.** `.github/CODEOWNERS` locks these paths
> to review; enable branch protection to enforce.

---

## The portal has two sections

`website/brand-portal/` is the current portal. One landing page, two named sections, one
shared asset library. A section is **wayfinding, not a copy** — both read the
same `manifest.json` and the same tokens, and nothing is duplicated between them.

| Section | Path | Holds | Written for |
|---|---|---|---|
| **Design system** | `v2/ds/` | Foundations · Asset library · Construction · Tokens & handoff | Someone building something who needs the rule rather than a reference |
| **Collateral** | `v2/mk/` | Service catalog · Case studies · Whitepapers · Landing pages · Diagrams · Social · Skills | Something going in front of a client that has to look like us |

### Navigation contract

Four rules. Break any of them and the portal stops telling people where they are.

1. **The header is identical on every page** — logo, Branding, Design system,
   Collateral, Contact us. Entering a section moves the highlight and nothing
   else. Never add or remove header items per page.
2. **The section is derived from the page, never from session state.** Each page
   declares its own section and renders that rail, so a shared link opens with
   the right navigation already applied.
3. **Section navigation lives in the left rail**, and only the active branch
   expands. The landing page has no rail.
4. **The navigation always reports position** — between pages via the rail, and
   within a page via a scroll spy that moves the marker as the reader scrolls.

### Adding a section to a page

In-page anchors are **derived from the page itself**. Any `<section class="section
v2-sec">` whose first child is a `<span class="eyebrow">` becomes an anchor: it
receives an `id` slugified from the eyebrow text and appears in the rail beneath
its parent, and the scroll spy picks it up.

So: give a new section an eyebrow and it self-registers. There is no list to
maintain. Do not hand-write rail entries for in-page anchors.

### Naming

Use **Collateral**, never "Marketing kit" or "marketing collateral". Do not label
sections by audience ("for designers and engineers") — express who it is for as
the moment they would reach for it.

### Previous version

`dark/` and `light/` hold the earlier flat navigation and are kept working while
v2 is reviewed. They are read-only for the purposes of v2 work: nothing in `v2/`
writes back to them, and a change to one is not automatically a change to the
other. Retirement date to be agreed — see `docs/STATUS.md`.

---

## Machine entry points

| File | Purpose |
|---|---|
| `website/index.json` | Repository map — every page, its type, and its spec URL |
| `website/assets/manifest.json` | 279 assets with dimensions, tags, construction stage, URLs |
| `website/assets/tokens/design-tokens.json` | W3C design tokens — colour, type, dimension |
| `website/assets/tokens/figma.json` | Where the Figma source lives and how sync works |
| `website/assets/AGENTS.md` | Asset-selection contract and failure modes |
| `docs/STATUS.md` | Current state, goal framework, what is pending and when |
| `docs/DESIGN-LOG.md` | Every change request, the call made, and what shipped |

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
1. Read the relevant page in `website/brand-portal/mk/` (collateral) or `website/brand-portal/ds/`
   (design system). Fall back to `dark/` or `light/` only for pages v2 does not
   yet carry
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

## Two typography systems

This repository deliberately carries **two** type systems. They are not a mistake and must not be merged ad hoc.

| Surface | Display / headings | Body | Signature colour |
|---|---|---|---|
| **Web & digital** (`website/`) | Oswald 400/500 | Geist 400 | `#FFC800` |
| **Presentations** (`Intelligaia Slide Deck Skill/`) | Montserrat Bold / ExtraBold / Black | Montserrat Medium 12pt | `#FFD700` |

Rules of engagement:

- Building a deck, readout or pitch → follow `Intelligaia Slide Deck Skill/intelligaia-deck-design/SKILL.md`. Montserrat, `#FFD700`, weights above 500 permitted.
- Building anything for web, product or digital → follow `website/assets/tokens/`. Oswald/Geist, `#FFC800`, 500 is the ceiling.
- Never mix the two within one artifact. Do not substitute Oswald into a deck or Montserrat into the site.

**Status: intentional divergence, pending unification.** The deck system was derived from the existing corporate deck; the web system was authored separately. Unifying them — one signature yellow, one display family across both — is planned but not yet done. Until that work lands, treat the table above as authoritative and flag any brief that assumes a single system.

---

## Hard constraints

These are non-negotiable for **web and digital** artifacts. Presentations follow the deck system above:

- **Colour** — only `#FFC800`, `#04050A`, `#4A8BF5`, `#8A5AF0` plus theme neutrals. Flat fills. No gradients on the yellow. One accent (blue *or* purple) per viewport.
- **Type** — Oswald 400/500 for headings only. Geist for body, labels, links and descriptions. **No weight above 500 exists** on web surfaces. No third display family. No pixel fonts. (Presentations use Montserrat — see Two typography systems.)
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
| Brief requests a bolder font | Refuse on web — 500 is the ceiling. In a deck, Montserrat Bold/ExtraBold/Black are correct. |
| Figma and repo disagree | Figma wins. Flag the drift for regeneration. |
| Brief spans web *and* deck | Use each system on its own surface. Do not average them. Flag for the unification work. |
| Asked to add a header item to one page | Refuse. The header is identical everywhere; only the highlight moves. Put it in the rail. |
| Asked to hand-write a rail sub-item for an in-page anchor | Refuse. Give the section an eyebrow and it self-registers. |
| Asked to duplicate an asset or page into the other section | Refuse. A section is wayfinding; link across instead. |

---

## Contributing as an agent

Changes to tokens must start in Figma, then regenerate `design-tokens.json` and its derived formats. Never hand-edit `tokens.css` or `_tokens.scss` — they are generated.

New assets follow the four-stage construction process documented in `website/_archive-v1/light/21 Construction.html`, then get added to `manifest.json`.