---
name: cx-roadmap
description: Builds a client CX Roadmap from user-provided information only. Ships with the fixed template, the Kickstart Guide intake (Kickstartguide.docx), design tokens, section script, and Intelligaia brand assets bundled inside the skill — never rebuild or restyle the template. On first request the skill sends a short two-path opener and delivers the Kickstart Guide (Q1–Q9, per-sub-technique content + links fields ordered by the 5D template, R1–R5). Use whenever the user asks to build, populate, or update a CX Roadmap.
---

# CX-Roadmap Skill

## When to use this
Trigger whenever the user wants to build, populate, or update a CX Roadmap — including "create roadmap", "update section X", or when the user shares a document to scan.

---

## What ships with this skill

Everything Intelligaia-wide and reusable across clients lives inside the skill folder. When the skill is installed, this whole tree syncs down as `<skill-dir>/`:

```
<skill-dir>/
├── SKILL.md                          ← this file
├── cx-roadmap-template.html          ← the fixed HTML template
├── references/
│   ├── Kickstartguide.docx           ← canonical intake (Kickstart Guide — Q1–Q9, per-sub-technique content + links, R1–R5, two paths)
│   └── DS_variables.json             ← design tokens
├── scripts/
│   └── script.md                     ← section content specs (prefixed with @)
└── assets/
    ├── intelligaia-logo.png          ← Intelligaia wordmark (raster)
    └── intelligaia-logo.svg          ← Intelligaia wordmark (vector)
```

**Read from the skill folder first, always.** The base directory is exposed to the agent at invocation time (shown as "Base directory for this skill: …"). Use that path to open `references/Kickstartguide.docx`, `references/DS_variables.json`, `scripts/script.md`, `cx-roadmap-template.html`, and the Intelligaia assets. If the user has an older local copy under their project folder, the skill copy is authoritative.

---

## Client project folder — canonical layout

Client-specific work lives in a separate project folder, typically `~/Documents/Claude/CX Roadmap/`. This is where per-engagement inputs and outputs go. Keep it CLIENT-specific — do not duplicate skill-shipped files here.

```
CX Roadmap/                           ← project folder (per client, or per portfolio)
├── assets/
│   ├── <client-slug>-logo.<ext>      ← client logo (per client)
│   └── <client-slug>-hero.<ext>      ← optional hero visual (per client)
├── Output/
│   └── cx-roadmap-<client-slug>.html ← rendered roadmap(s)
└── (client discovery docs, briefs, screenshots, etc.)
```

**What NOT to put in the project folder:** the template, setup guide, DS_variables.json, script.md, or Intelligaia logo — those ship inside the skill. If you find stale copies of any of these in a project folder, ignore them and use the skill copies.

---

## CORE RULES — R1–R5 (from `references/Kickstartguide.docx`)

### R1 — Source of truth is the user
The skill never adds, assumes, or invents content. Everything comes from what the user provides — documents, answers, or confirmed inputs.

### R2 — Missing content = empty state, not placeholder copy
If a section has no content, it stays in the default `empty` layout and gets flagged. Never fill with generic or invented text.

### R3 — Confirm before update
After scanning any document, show the user what was found and ask for confirmation before writing anything to the roadmap.

### R4 — Branding is applied everywhere
Once brand colours (Primary, Secondary, Tertiary) and background are confirmed, apply them consistently across every output format.

### R5 — Start anywhere
The user can jump to any phase or section. They do not have to complete everything in order.

---

## Template rules (visuals are LOCKED)

The visual layout, color system, hero, section list, badges, timeline line, phase divider, refs row, layout-toggle, and footer are LOCKED to `<skill-dir>/cx-roadmap-template.html`. Do NOT:
- Rebuild the template from this document
- Restyle, re-theme, or "improve" it
- Change the Tabler icon library, the badge colors (green `#CDE545`, cyan `#06B7DB`), typography, spacing, or badge sizes
- Rearrange, add, or remove sections
- Replace the JS section-rendering with hand-authored markup

The ONLY edits allowed are the placeholders and populate-points listed under "How to populate" below.

### Icon CDN
The template loads Tabler icons from cdnjs:
```
https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/3.19.0/tabler-icons.min.css
```
Use cdnjs, not jsdelivr — Claude's artifact sandbox reliably allows cdnjs; jsdelivr's font file is blocked in-sandbox and renders every icon as an empty square.

### Output location
Save the output to `<project>/Output/cx-roadmap-<client-slug>.html`. Never write files at the project root. Create `Output/` if missing.

### Asset paths in output HTML
Client assets live in `<project>/assets/` and are referenced from `Output/*.html` as `../assets/<file>`. The Intelligaia logo bundled in the skill (`<skill-dir>/assets/intelligaia-logo.png`) must be **copied into `<project>/assets/intelligaia-logo.png`** before rendering, so relative paths resolve inside the client's folder. Do NOT hard-link to the skill folder from the HTML.

---

## Opening message — MANDATORY first response when the skill is triggered without a document

Whenever the user asks to build, create, populate, or update a CX Roadmap **and has not attached a document**, respond with the two-path message below and then **deliver the setup guide file to the user with the file-delivery tool** (`SendUserFile` in Cowork, `present_files` elsewhere). Do NOT list Q1–Q9 inline, do NOT present the old A/B/C options, and do NOT start any other work until the user replies.

**Message body — send verbatim:**

> Let's build your CX Roadmap. To get started, I need a few inputs from you.
>
> Two ways to proceed:
>
> → Already have a brief, deck, or discovery doc? Upload it — I'll scan and extract everything relevant.
>
> → Starting fresh? Download the setup guide, fill it in, and upload it back — I'll take it from there.

**Immediately after the message**, deliver `<skill-dir>/references/Kickstartguide.docx` via the file-delivery tool with the caption `Kickstart guide`. This gives the user a downloadable copy of the intake form right below the message — mirroring the screenshot the skill owner approved.

Then wait. Do not proceed until the user either uploads their own document or returns the filled-in setup guide. The Q1–Q9 questions and R1–R5 rules already live inside `Kickstartguide.docx`, so the file itself carries the full intake — no need to duplicate them in the chat.

### Why this shape
The old flow dumped Q1–Q9 and three lettered options into the chat, which overwhelmed users and buried the choice. The two-path message keeps the ask small and hands off structured intake to the docx, where the user can edit at their own pace. Keeping the response this tight is the whole point — do not expand it back into an inline questionnaire.

---

## Intake reference — Q1–Q9 (mirrored from `references/Kickstartguide.docx`)

This block is a **reference for parsing the user's returned setup guide or uploaded brief** — it is NOT the message you send to the user. The opening message above handles what the user sees; the actual intake happens inside `Kickstartguide.docx`, which the user downloads, fills in, and uploads back. Read the docx before parsing so any edits the user made to the guide are picked up. The list below is a fallback for when the docx is unreadable.

### Section 1 — Project Setup (required before anything else)

- **Q1** Client or product name? (e.g. Cisco · Atlas CAM Workbench · NGN Smart Driving)
- **Q2** Industry or domain? (e.g. Enterprise SaaS · Automotive · Healthcare · FinTech)
- **Q3** Hero heading — the big headline at the top of the roadmap? (one powerful line)
- **Q4** Short hero description (1–2 lines)? Explains what this roadmap covers and who it's for.
- **Q5** Output format? (HTML only · HTML + PowerPoint · HTML + Word doc)

### Section 2 — Branding Assets

- **Q6** Client logo file? Attach PNG/SVG/JPG → saved to `<project>/assets/<client-slug>-logo.<ext>`
- **Q7** Hero visual for the right side of the header? Optional — illustration, photo, diagram, or screenshot
- **Q8** Brand colours and background?
  - Primary hex — main brand colour (CTAs, highlights, key accents)
  - Secondary hex — hover states, secondary labels, tags
  - Tertiary hex — accent/decorative
  - Background — Black or White (canvas tone)
- **Q9** Any other brand guidelines? (fonts, tone of voice, do-not-use colours, logo clearance rules, etc.)

### Section 3 — Section Content (share what you have; leave the rest empty)

The roadmap has 13 sections rendered in the exact 5D order the template uses: **D1 Discover (5) → D2 Define (3) → D3 Design (3) → D4 Develop (2) → D5 Deliver (8)**. Any section left blank stays in the empty state and is flagged in the render report.

Inside `Kickstartguide.docx`, Section 3 gives **each sub-technique its own two-column input block** — `Content` on the left (findings, notes, quotes, decisions) and `Links / references` on the right (Figma URLs, Google Doc links, image paths, filenames). Parse each sub-block into the matching `t` entry in the template's `techniques` array: content feeds the tech-card's outcome copy, links feed its "Refs" pills. One guide sub-block = one tech-card.

| # | Section | Phase | Sub-techniques (from template) |
|---|---|---|---|
| 01 | Discovery Workshop        | D1 Discover        | Platform walkthrough · Stakeholder interviews |
| 02 | Persona                    | D1 Discover        | Persona mapping · Empathy mapping |
| 03 | Customer Journey Mapping   | D1 Discover        | Journey mapping · Analytics review |
| 04 | Service Blueprint          | D1 Discover→Define | Service blueprint (as-is) · Service blueprint (to-be) |
| 05 | Competitive Analysis       | D1 Discover        | Competitive / pattern analysis · Heuristic evaluation |
| 06 | Business Objectives        | D2 Define          | Problem statement · Success metrics · MVP / scope definition |
| 07 | Brainstorming Session      | D2 Define          | Point of View (POV) · Opportunity solution tree |
| 08 | IA and User Story Mapping  | D2 Define          | Information architecture mapping · User story grooming |
| 09 | Low Fidelity Wireframes    | D3 Design          | Hero pages / happy flow · Wireframing at scale · Interactive prototyping |
| 10 | Design System              | D3 Design          | Design tokens & foundations · Component library · Docs & governance |
| 11 | High Fidelity Mockups      | D3 Design          | Hi-fi screen design · Motion & transition design · Data-viz & urgency hierarchy |

Tip: any brief, deck, or discovery doc can be attached — the skill will scan, extract, and confirm before using anything.

---

## How to proceed — two paths (from Kickstartguide.docx)

The opening message above already presents these two paths to the user. This block just names them so the rest of the skill can refer back:

- **Path 1 — Share a document.** User uploads their own brief, deck, or discovery doc. Scan and extract per the "Document parsing" section, then confirm before writing anything.
- **Path 2 — Filled-in setup guide.** User downloads `Kickstartguide.docx`, fills it in, and uploads it back. Parse it exactly like any other user document — the Q1–Q9 answers, R1–R5 rules acknowledgements, and Section 3 content sit inside it.

If the user attaches something ambiguous (e.g. a partially filled setup guide plus a separate brief), treat both as inputs, merge, and flag any conflicts before populating.

---

## Document parsing (Rule R3 applies)

When the user shares a document, scan and extract if present:
Branding · Company context · Business objectives · Discovery findings · Audience · Initiatives · Timeline · Ownership · anything else structured.

### If the document is the filled-in `Kickstartguide.docx` (the Kickstart Guide)
The guide is highly structured — walk it in section order:

1. **Sections 1 & 2** — pull Q1–Q9 answers from the shaded answer boxes directly below each question label. Q8 is a 5-row table (Primary hex, Secondary hex, Tertiary hex, Background, Notes).
2. **Section 3** — for each of the 13 sections (template order: Discovery Workshop → … → Post-launch & Learning), the guide has **one Content + Links table per sub-technique**, not per section. Each sub-technique is introduced by a small ◆ heading with the technique name and an "Expected outcome: …" subline, then its own 2-column table follows immediately below (left = `Content`, right = `Links / references`). Note: the Kickstart Guide currently only covers Q3 sections for D1–D3 (11 sections). D4 Develop and D5 Deliver sub-techniques should be extracted from a brief, deck, or discovery doc the user provides — or left as default templates until the guide is expanded.
3. **How to map the answers into the template**: the sub-technique headings in the guide match the `t` field in each section's `techniques: [{t, o}, …]` array exactly. Feed the `Content` cell into the tech-card's outcome copy (either replacing or enriching the shipped `o`), and feed the `Links / references` cell into the "Refs" pills on that same tech-card. Do not merge sub-techniques together — one guide sub-block = one tech-card.
4. **Section counts to expect** (26 sub-technique blocks total): Discovery Workshop 2 · Persona 2 · Customer Journey Mapping 2 · Service Blueprint 2 · Competitive Analysis 2 · Business Objectives 3 · Brainstorming Session 2 · IA and User Story Mapping 2 · Low Fidelity Wireframes 3 · Design System 3 · High Fidelity Mockups 3.
5. Placeholder / hint text (grey italic — the pre-filled prompts like "Paste findings…" or "Paste Figma links…") means the user left the field empty — treat as no content, not as content.
6. Sections 4 & 5 are rules and instructions — do not parse them as content.

### Confirming findings
Present findings back exactly as:

> "Here is what I found in your document:"
>
> **[Category name]**
> → [Extracted content verbatim]
>
> "The following sections had no information — please provide if needed:"
> → [List empty categories]

Never populate before the user confirms.

---

## The template — what it is

`<skill-dir>/cx-roadmap-template.html` is a single self-contained HTML file. It loads Tabler icons from cdnjs. All CSS is inline. All 13 sections are rendered by a small inline `<script>` that reads a `sections` array and injects the DOM.

### Structure
1. **Color bar** — 3px accent stripe at the very top (defaults to `--brand-primary`; ships as cyan and re-tints once the client's primary hex is applied)
2. **Hero** (black background by default, 700px, `24px 80px 96px` padding, 2-col grid)
   - **Before / After version toggle** (top-left, absolutely positioned) — a pill toggle with two buttons: `Before` (inactive) and `After` (active). Purely a visual state on load — reserved for the future "compare to old roadmap" view. Adapts to both dark and light hero canvases automatically.
   - Intelligaia logo (top-right) — template ships with `<img>` pointing to an inlined base64 data URL of `intelligaia-logo.svg` and a CSS filter (`brightness(0) invert(1)`) that renders the near-black SVG as white on the dark hero. No file dependency at runtime.
   - Brand logo placeholder (top-left of hero-left) — `.brand-logo` div, default text `BRAND LOGO`
   - Hero heading (44px, weight 500) — placeholder `[Brand Name]`
   - Hero description (13px, `--content2`) — placeholder `[Brand tagline or any description will go here.]`
   - Brand mark / hero visual (280×280 dashed box, right column)
   - Scroll cue: "CX Roadmap" label + `ti-chevrons-down`
   - **Light-canvas option** — add `data-bg="light"` to the `.hero` element to flip the hero canvas to white and re-tint the text, brand-logo, brand-mark, scroll-cue, version toggle, and Intelligaia mark for a light background. The section wrap below stays dark regardless. Use this when Q8 background = White.
3. **5D Bridge banner** — sits between the hero and the sections. Shows the full Intelligaia 5D UX Methodology (D1 Discover · D2 Define · D3 Design · D4 Develop · D5 Deliver) with technique counts (15 · 21 · 31 · 28 · 47 · 142 total). Each tile carries its phase's own top-border colour — lime, teal, cyan, indigo, violet. Anchors the roadmap in the methodology so readers see how each section maps to a phase.
4. **Sections wrap** (dark bg `#18181B`, `0 80px 32px` padding) — 13 sections rendered from the `sections` array, ordered by 5D workflow. Every phase has its own colour on the badges, phase divider pill, and timeline line:
   - **D1 Discover (5)** — LIME `#CDE545`: Discovery Workshop · Persona · Customer Journey Mapping · Service Blueprint · Competitive Analysis
   - **Phase divider** — "D2 · Define" pill (teal)
   - **D2 Define (3)** — TEAL `#4FD1C5`: Business Objectives · Brainstorming Session · IA and User Story Mapping
   - **Phase divider** — "D3 · Design" pill (cyan)
   - **D3 Design (3)** — CYAN `#06B7DB`: Low Fidelity Wireframes · Design System · High Fidelity Mockups
   - **Phase divider** — "D4 · Develop" pill (indigo)
   - **D4 Develop (2)** — INDIGO `#6366F1`: Design-to-Code Handoff · Build Verification & Release Prep
   - **Phase divider** — "D5 · Deliver" pill (violet)
   - **D5 Deliver (8)** — VIOLET `#A78BFA`: Test Planning · Test Execution · Specialised Testing · AI & Automation Testing · QA Operations · Release & Acceptance · Deployment & Launch · Post-launch & Learning
   - Vertical timeline line drawn behind the badges — 5-stop gradient (lime → teal → cyan → indigo → violet) transitioning at each phase boundary
   - Per-section head: 28px circular badge, title (20px, weight 500) with a small monospace D-phase pill next to it (e.g. `D1 · DISCOVER`), description (13px `--content2`), layout-toggle (top-right)
5. **Per-section content card** — the green/cyan-striped "5D Techniques Applied · N of 142" wrapper. Inside it, techniques are rendered as a compact **grid of 180×180 tech-cards** (image slot on top: fixed 180w × 100h, dashed placeholder ready for image drop; info below: technique name 12.5px bold + outcome 11px + Refs row with dashed "Add link" pills). Grid uses `repeat(auto-fill, 180px)` so cards pack cleanly and wrap naturally.
6. **Footer**
   - Left: `© YYYY [Brand name] · Confidential · Not for distribution`
   - Right: `Prepared by [Intelligaia wordmark]` — the wordmark is an `<img class="footer-logo">` whose `src` is cloned at load-time from the hero's Intelligaia SVG (avoids duplicating the 49KB base64 payload). The wordmark itself spells "intelligaia", so no accompanying text is needed.

### Empty-state fallback
Every section renders through `renderTechBridge(s)` when `s.techniques` has at least one entry, and falls through to `renderEmpty(s)` (a grey dashed box: icon + "This section is empty" + "Provide content in the intake to populate this section.") when the array is empty. To leave a section as a placeholder while keeping its heading, description, and badge, set `techniques: []`. To populate it later, add tech-cards back into that array.

### The layout toggle
Each section carries a 4-way toggle at the top-right of its header (empty / cards / list / phase). In the current template the toggle only swaps its own visual active state; it does not replace the section's content. The tech-card grid is the sole content view. Keep the toggle rendered — future variants may re-wire it to switch between grid density, list, or phase-card renderings.

---

## How to populate — the ONLY edits allowed

1. **Copy the template**
   Copy `<skill-dir>/cx-roadmap-template.html` to `<project>/Output/cx-roadmap-<client-slug>.html`. Create `Output/` if missing.

2. **Copy the Intelligaia logo into the project's assets**
   Copy `<skill-dir>/assets/intelligaia-logo.png` (or `.svg`) to `<project>/assets/intelligaia-logo.png` if not already there. This keeps the HTML's `../assets/intelligaia-logo.png` path resolving.

3. **Hero placeholders**
   - `BRAND LOGO` in `.brand-logo` → replace the whole `<div class="brand-logo">…</div>` with `<img src="../assets/<brand-slug>-logo.<ext>" alt="<Brand name>" style="max-height:56px;">` IF the asset exists in `<project>/assets/`. If missing, leave the dashed placeholder and flag.
   - `[Brand Name]` → the user's Q3 answer verbatim (the brand/product name)
   - `[Brand tagline or any description will go here.]` → the user's Q4 answer verbatim (tagline or description)
   - Brand mark 280×280 box → replace with `<img src="../assets/<hero-visual-file>">` if provided (Q7); else leave the dashed box
   - Top-right Intelligaia mark → already an inline base64 SVG `<img>` in the template with a white-on-dark CSS filter. No file dependency; leave as-is.

4. **Section content — 5D techniques**
   Each section carries a `techniques: [{t, o}, ...]` array in the `sections` data (the inline `<script>` in the template). `t` is the 5D technique name and `o` is its outcome/deliverable, sourced from the 5D reference doc. The `renderTechBridge` function renders each entry as a **180×180 tech-card** — 180×100 image slot on top, technique name + outcome + Refs row below.

   **Uniqueness rule:** every technique must appear in exactly ONE section. Do not duplicate `t` values across sections. Total across the 11 shipped sections is 40 unique techniques (of 142 in the full 5D method).

   To populate a section with client-specific content:
   - Leave the shipped 5D `t`/`o` values and only fill in the image slot + Refs later, OR
   - Replace `t`/`o` with client-specific labels while preserving the `techniques` array shape (2–4 items).
   - Do NOT hand-write section markup outside the JS renderers.
   - Refer to `<skill-dir>/scripts/script.md` for per-section content patterns if you need extra guidance.

5. **Footer**
   - Replace `[Brand name]` with the confirmed brand/client name (Q1)
   - Update the year if the current year differs

6. **Design tokens**
   Reference `<skill-dir>/references/DS_variables.json` for any color, spacing, or typography values you need to reason about. Do NOT copy the file into the output HTML.

7. **What NEVER changes**
   - `:root` CSS variables
   - Hero grid, height, padding, or dashed-box dimensions
   - Badge size (28px), border-radius, color assignments per section
   - Phase divider placement (always between phases — sec 5/6, 8/9, 11/12, 13/14)
   - Timeline line gradient logic (5-stop lime→teal→cyan→indigo→violet, driven by section data-color attributes)
   - Tabler icon library or its cdnjs URL
   - Font stack

---

## Section → template mapping

The order and badge colour below match the template's `sections` array exactly. Do not resort or recolour — the vertical timeline gradient (green → cyan) depends on this order and the D2→D3 boundary sitting between section 8 and section 9.

| # | Section | Phase | Badge | Icon | Typical layout for confirmed content |
|---|---|---|---|---|---|
| 1  | Discovery Workshop                | D1 Discover        | LIME `#CDE545`   | `ti-users`             | `list` or `cards` |
| 2  | Persona                           | D1 Discover        | LIME             | `ti-user`              | `cards` |
| 3  | Customer Journey Mapping          | D1 Discover        | LIME             | `ti-route`             | `phase` |
| 4  | Service Blueprint                 | D1 Discover→Define | LIME             | `ti-stack-2`           | `list` |
| 5  | Competitive Analysis              | D1 Discover        | LIME             | `ti-chart-bar`         | `list` |
| 6  | Business Objectives               | D2 Define          | TEAL `#4FD1C5`   | `ti-target`            | `cards` |
| 7  | Brainstorming Session             | D2 Define          | TEAL             | `ti-bulb`              | `cards` |
| 8  | IA and User Story Mapping         | D2 Define          | TEAL             | `ti-sitemap`           | `phase` |
| 9  | Low Fidelity Wireframes           | D3 Design          | CYAN `#06B7DB`   | `ti-layout`            | `cards` |
| 10 | Design System                     | D3 Design          | CYAN             | `ti-components`        | `cards` |
| 11 | High Fidelity Mockups             | D3 Design          | CYAN             | `ti-device-desktop`    | `cards` |
| 12 | Design-to-Code Handoff            | D4 Develop         | INDIGO `#6366F1` | `ti-transfer`          | `cards` |
| 13 | Build Verification & Release Prep | D4 Develop         | INDIGO           | `ti-shield-check`      | `cards` |
| 14 | Test Planning                     | D5 Deliver         | VIOLET `#A78BFA` | `ti-clipboard-check`   | `cards` |
| 15 | Test Execution                    | D5 Deliver         | VIOLET           | `ti-checklist`         | `cards` |
| 16 | Specialised Testing               | D5 Deliver         | VIOLET           | `ti-microscope`        | `cards` |
| 17 | AI & Automation Testing           | D5 Deliver         | VIOLET           | `ti-robot`             | `cards` |
| 18 | QA Operations                     | D5 Deliver         | VIOLET           | `ti-report-analytics`  | `cards` |
| 19 | Release & Acceptance              | D5 Deliver         | VIOLET           | `ti-clipboard-list`    | `cards` |
| 20 | Deployment & Launch               | D5 Deliver         | VIOLET           | `ti-rocket`            | `cards` |
| 21 | Post-launch & Learning            | D5 Deliver         | VIOLET           | `ti-radar`             | `cards` |

The "typical layout" column is guidance — always follow what the user's content actually needs, or leave `empty` if no content is confirmed.

---

## Output rules

1. Save HTML to: `<project>/Output/cx-roadmap-<client-slug>.html`
2. Never write files at the project root — always inside `Output/`
3. Client assets live in `<project>/assets/`, referenced from the HTML as `../assets/<file>`
4. Intelligaia logo lives in the skill (`<skill-dir>/assets/`) — copy into `<project>/assets/` on first render so the relative path resolves
5. After writing, print:
   - `Sections populated: [list]`
   - `Sections left empty: [list]`
   - `Missing assets: [list of expected filenames not found under <project>/assets/]`
6. If PPT was requested (Q5): invoke the `pptx` skill next, one slide per section
7. If Word doc was requested (Q5): invoke the `docx` skill next

---

## Layout rules

### R6 — Section backgrounds are edge-to-edge

Any section that has a background colour or tint (5D Bridge banner, Problem bridge, Sections wrap, Impact band) MUST render its background edge-to-edge — spanning the full viewport width. The inner content within those sections is constrained to the breakpoint body width and centered using an inner container (`max-width` matching the responsive grid body width for the active breakpoint). The background never clips to the content width.

Implementation pattern:
- Section element: `padding: <vertical> 0` (no horizontal padding on the section itself — background spans full width)
- Inner container (`<div class="cx-container">`): `max-width: <body-width>; margin-left: auto; margin-right: auto; padding: 0 var(--page-margin);`

### R7 — Font structure (typography scale)

The template uses a single font stack with a fixed typographic scale. Do not change font families, sizes, weights, or line-heights.

| Token | Element | Font-size | Weight | Line-height | Letter-spacing | Color |
|-------|--------|-----------|--------|------------|----------------|-------|
| H1 (hero heading) | `.hero-heading` | 44px | 500 | 1.15 | −0.02em | `--content1` |
| H2 (section title) | `.sec-title` | 20px | 500 | 1.3 | — | `--content1` |
| H3 (5D bridge title) | `.fivedd-title` | 24px | 600 | 1.25 | −0.01em | `--content1` |
| H4 (problem title) | `.problem-title` | 24px | 600 | 1.15 | −0.01em | `--content1` |
| Body (hero desc) | `.hero-desc` | 13px | 400 | 1.5 | — | `--content2` |
| Body (section desc) | `.sec-desc` | 13px | 400 | 1.5 | — | `--content2` |
| Body (5D bridge sub) | `.fivedd-sub` | 13px | 400 | 1.6 | — | `--content2` |
| Body (problem core) | `.problem-core p` | 12px | 400 | 1.55 | — | `--content2` |
| Tech name | `.t-name` | 12.5px | 600 | 1.3 | — | `--content1` |
| Tech outcome | `.t-out` | 11px | 400 | 1.45 | — | `--content2` |
| Scroll-cue label | `.scroll-cue .label` | 22px | 500 | — | — | `--content1` |
| Scroll-cue desc | `.scroll-cue-desc` | 12px | 400 | 1.5 | — | `--content2` |
| Phase tag | `.phase-tag` | 10px | 500 | — | 0.06em | uppercase |
| 5D eyebrow | `.fivedd-eyebrow` | 10px | 500 | — | 0.15em | `--cyan` |
| Problem eyebrow | `.problem-eyebrow` | 10px | 600 | — | 0.15em | `--red` |
| Refs label | `.refs-label` | 9px | — | — | 0.1em | `--content3` |
| Footer | `.site-footer` | 11px | 400 | — | — | `--content3` |

**Font stack (fixed, never change):**
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
```
**Monospace stack (phase tags, metrics):**
```
"SF Mono", Menlo, monospace
```

### R8 — Responsive grid (breakpoint system)

The template uses a 5-breakpoint responsive grid system. Body width and horizontal margins change per breakpoint. All content is centered.

| Breakpoint | Screen size | Body max-width | Margin (`--page-margin`) | Layout columns |
|------------|-------------|----------------|--------------------------|----------------|
| Default | 1440+ (desktop) | 1040px | scaling (40px) | 12 |
| `max-width: 1439px` | 1240–1439 (laptop) | scaling | 200px | 12 |
| `max-width: 1239px` | 905–1239 (small laptop) | 840px | scaling (40px) | 12 |
| `max-width: 904px` | 600–904 (tablet) | scaling | 32px | 8 |
| `max-width: 599px` | 0–599 (phone) | scaling | 16px | 4 |

Implementation:
- `--page-margin` CSS variable on `:root` controls horizontal padding for all content containers. Changes per breakpoint.
- `.cx-container` class wraps inner content of edge-to-edge background sections — it applies `max-width` + `margin: auto` + `padding: 0 var(--page-margin)`.
- `.hero` and `.site-header` carry their own `max-width` matching the breakpoint body width.
- On phone (0–599px): hero stacks to 1 column, 5D phases stack to 1 column, tech-cards stack to 1 column.
- On tablet (600–904px): 5D phases go 2 columns, tech-cards go 2 columns.
- On small laptop and above: 5D phases 5 columns, tech-cards 3 columns.

### R9 — Tech-card styling (clean cards, grey image fill)

Technique cards have no borders or boxes on the card itself or the outer wrapper. The image placeholder has a subtle light grey fill. This applies to both light and dark themes, and in both As-is and To-be states.

- `.tech-bridge` (outer wrapper): `background: transparent; border: none; padding: 0;` — no shared container background
- `.tech-card` (individual card): `background: transparent; border: none;` — no card background
- `.tech-card .img-slot` (image placeholder): `background: #f5f5f5; border: none; border-radius: 8px;` — subtle light grey fill with rounded corners, no border. In dark mode: `background: rgba(255,255,255,0.06);`
- Dark mode overrides: wrapper and card stay transparent; img-slot uses `rgba(255,255,255,0.06)`
- Before-state (As-is) overrides: same grey fill, no red background or border on the img-slot

### R10 — Tech-card aspect ratio

Tech-cards use a fixed 16:9 aspect ratio. Height stays at 130px; width is fixed at 231px (130 × 16/9). The grid uses `repeat(auto-fill, 231px)` so cards pack at their natural width and wrap naturally — they never stretch to fill the row.

---

- `<skill-dir>/references/Kickstartguide.docx` — **the Kickstart Guide** (canonical intake). Contains Q1–Q9, per-sub-technique Content + Links fields ordered by the 5D template, R1–R5, and the two-path handoff. This is the file the skill delivers to the user on first request. Read it at intake time so any user edits are picked up.
- `<skill-dir>/references/DS_variables.json` — design tokens.
- `<skill-dir>/scripts/script.md` — section content specs (sections prefixed with `@`).
- `<skill-dir>/cx-roadmap-template.html` — the fixed template. Only source of truth for visuals. Do not rebuild.
- `<skill-dir>/assets/intelligaia-logo.png` and `intelligaia-logo.svg` — Intelligaia branding.
