---
name: CX Roadmap
description: "Builds a client CX Roadmap document from user-provided information. Runs an intake conversation to collect client branding, section content, and output preferences, then renders a fully branded HTML (and optionally PPTX) roadmap. Sections with no information provided are left empty and flagged to the user. Use whenever the user asks to build, populate, or update a CX Roadmap."
---

# CX Roadmap

## When to use this
Trigger whenever the user wants to build, populate, or update any section of the CX Roadmap — including requests like "create roadmap", "add Section 1", "update Discovery Workshop", or "fill in the persona section."

---

## How this skill works

This skill builds a real, client-specific CX Roadmap — not a template — based on information the user provides.

**Phase 1 — Discovery**
Covers the research and alignment work done before any design decisions are made.

**Phase 2 — CX Strategy**
Covers the design and delivery work: competitive analysis, personas, journey maps, wireframes, design system, and hi-fi mockups.

**Render rules — follow these strictly:**
1. **User provides info** → populate the section with their real content (description, bullets, card text, image labels).
2. **User skips or has no info for a section** → render the section title and badge only, with a clearly styled empty state (see @Empty State spec below). Do NOT use dummy/lorem ipsum text.
3. **Thumbnails — MANDATORY for every section** → every section must include a @Thumbnails Block directly below its main content (or empty state). If the user provides links/URLs, render each as a thumbnail card. If no links are provided, render dashed placeholder slots.
4. **At the end of the intake** → summarise which sections were populated and which were left empty.
5. **Branding** → apply client color and logo if provided. Default: cyan/600 (`#06b7db`) and Intelligaia logo slot.
6. **Output format** → default to HTML. If the user requests PPT, also run the `pptx` skill after HTML is complete.
7. **NO phase labels** → do NOT render "Phase 1 — Discovery" or any phase label above sections. The phase divider pill ("CX Strategy") between section 3 and 4 is the only phase indicator allowed.
8. **Output location — MANDATORY** → all generated files (HTML, PPTX, PDF, or any other deliverable) MUST be saved into the `output/` subfolder inside the CX Roadmap folder — never at the root of the CX Roadmap folder. If the `output/` folder does not exist, create it first. This applies to every render, update, and regeneration.

---

## Note
- Whenever asked to refer to a file, also refer to `scripts/script.md` and pick elements — unless a specific folder is mentioned.
- Section headings in `script.md` start with `@`. "Add Section 1" → look up `@Section 1`.
- Lines starting with `//` are developer comments — do not render them.
- Resolve all color and typography tokens from `references/DS_variables.json`.

---

## Section Header Pattern — ALL sections

Every section uses this header pattern (outside the content card):

```
[Large circular badge icon] [Section Title — H2]
[Description text — content2, 13px, below the title]
```

Badge spec:
- 40px circle, background: client-color
- Contains a relevant SVG icon (white, 18px) — not a number
- Positioned to the LEFT of the title, vertically centered with it
- Sits OUTSIDE and ABOVE the dark content card

Use these icons per section:
- Section 1 (Discovery Workshop): people/group icon
- Section 2 (Business Objectives): target/crosshair icon
- Section 3 (Brainstorming Session): lightbulb icon
- Section 4 (Competitive Analysis): bar-chart icon
- Section 5 (Persona): user/person icon
- Section 6 (IA & Story Mapping): sitemap/network icon
- Section 7 (Customer Journey): route/path icon
- Section 8 (Service Blueprint): layers icon
- Section 9 (Wireframes): layout/frame icon
- Section 10 (Design System): grid/components icon
- Section 11 (Hi-Fi Mockups): monitor/screen icon

---

## Section Content Card Pattern

All section content lives inside a dark card:
- Background: rgba(255,255,255,0.04)
- Border: 1px solid rgba(255,255,255,0.08)
- Border-radius: 12px
- Padding: 32px
- Width: 100%
- Margin-top: 20px (below the section header row)

---

## Intake Prompts

// Run @Intake — Branding first, then @Intake — Project Setup, then go section by section.
// Only ask for sections the user wants to include.
// If the user provides info upfront, skip the relevant intake questions.

@Intake — Branding
Ask the user:
  1. Client brand color? (hex or description)
  2. Logo file? (path or upload — if none, use dashed placeholder)
  3. Typography preference? (font name or "use system default")
  4. Output format? (HTML only, or HTML + PowerPoint)

@Intake — Project Setup
Ask the user:
  1. Client or product name?
  2. Industry or domain?
  3. Headline challenge or opportunity?
  4. Primary audience for this roadmap?

@Intake — Section 1 — Discovery Workshop
Ask the user:
  1. How many days?
  2. Key stakeholder roles involved?
  3. 3–4 main activities or methods?
  4. Single most important learning?
  5. Reference links or assets? (URLs, Figma, docs)

@Intake — Section 2 — Business Objectives
Ask the user:
  1. Top 3–5 business objectives?
  2. Success metrics for each?
  3. Constraints or non-negotiables?
  4. Reference links or assets?

@Intake — Section 3 — Brainstorming Session
Ask the user:
  1. Ideation methods used?
  2. Top 3–4 themes or activities that emerged?
  3. Idea with most stakeholder alignment?
  4. Reference links or assets?

@Intake — Section 4 — Competitive Analysis
Ask the user:
  1. 3–5 competitors or benchmarks reviewed?
  2. Evaluation dimensions?
  3. Key CX gap or opportunity vs. competitors?
  4. Reference links or assets?

@Intake — Section 5 — Persona
Ask the user:
  1. Number of user archetypes?
  2. Role, goal, frustration per persona?
  3. Primary design target persona?
  4. Reference links or assets?

@Intake — Section 6 — IA and User Story Mapping
Ask the user:
  1. Main task categories or user goals?
  2. Navigation patterns audited?
  3. Anchor user stories or epics?
  4. Reference links or assets?

@Intake — Section 7 — Customer Journey Mapping
Ask the user:
  1. Which persona's journey?
  2. Key journey stages?
  3. Biggest pain points or drop-off moments?
  4. Customer emotions at each stage?
  5. Reference links or assets?

@Intake — Section 8 — Service Blueprint
Ask the user:
  1. Journey stage or flow covered?
  2. Frontstage customer actions?
  3. Backstage processes or systems?
  4. Front/backstage gaps?
  5. Reference links or assets?

@Intake — Section 9 — Low Fidelity Wireframes
Ask the user:
  1. Screens or flows wireframed?
  2. Validation outcomes (what changed)?
  3. 2–3 most debated design decisions?
  4. Reference links or assets? (Figma, prototype URLs)

@Intake — Section 10 — Design System
Ask the user:
  1. Design system name?
  2. Component categories built?
  3. Token types defined?
  4. New or extension of existing?
  5. Reference links or assets? (Storybook, Figma library)

@Intake — Section 11 — High Fidelity Mockups
Ask the user:
  1. Key screens or flows at hi-fi?
  2. Platform(s)?
  3. Significant UX decisions during hi-fi?
  4. Handoff format?
  5. Reference links or assets? (Figma prototype, Zeplin)

@Intake — Footer
Ask the user:
  1. Company or agency name for footer?
  2. Contact detail or URL?

---

## Empty State Spec

@Empty State
// Use whenever a section has no user content. No lorem ipsum.
Render inside the content card:
  Background: rgba(255,255,255,0.03)
  Border: 1px dashed rgba(255,255,255,0.1)
  Border-radius: 10px
  Padding: 48px 32px
  Icon: outline SVG (box or document), opacity 0.2, 40px
  Label: "This section is empty" — 12px, rgba(255,255,255,0.3), centered
  Sub-label: "Provide [what's needed] to populate it." — 11px, rgba(255,255,255,0.2), centered
Always follow with @Thumbnails Block (empty version).

---

## Thumbnails Block Spec

@Thumbnails Block
// MANDATORY at the bottom of EVERY section, after main content or empty state.

Sub-label: "References & Assets" — 10px, uppercase, letter-spacing 0.1em, color: content3
Horizontal scrollable row of thumbnail cards (inside the section content card, below a subtle divider line):
  border-top: 1px solid rgba(255,255,255,0.06)
  margin-top: 20px, padding-top: 16px
  display: flex, flex-direction: row, gap: 12px
  overflow-x: auto, scrollbar-width: thin

Each thumbnail card (when link provided):
  Width: 160px, height: 120px, flex-shrink: 0
  Background: rgba(255,255,255,0.03)
  Border: 1px solid rgba(255,255,255,0.08)
  Border-radius: 8px
  Top area (100px): favicon/file-type icon (24px, opacity 0.5) centered
  Bottom strip (20px): link label, 11px, color: content2, truncated
  Full card is <a href="[url]" target="_blank">
  Hover: border-color: client-color, background: rgba(client-color, 0.05)

When no links provided — 2 dashed placeholder slots:
  Same size, border: 1px dashed rgba(255,255,255,0.08)
  Background: rgba(255,255,255,0.02)
  Centered: link/paperclip SVG icon, 20px, opacity 0.15
  Below icon: "Add link" — 10px, rgba(255,255,255,0.15)

---

## Sections

// ── Sections 1–3 use the Detailed Card Layout (two-column inside a dark card)
// ── Sections 4–11 use the Standard Layout (header + image grid or full-width image)
// ── NO phase label before any section

@Section 1 — Discovery Workshop
Header: [people-icon badge] "Discovery Workshop (XX Days)" + description
Content card — two-column layout:
  Left col (50%):
    Bold label: "It Includes:" — 13px, content1, font-weight: 600
    Bullet list (4 items):
      Each item: small icon (16px, client-color tint) + text (13px, content2)
      Use contextual icons: user/decider, speech-bubble/voice, gear/mechanics, history/previous-efforts
      Gap between items: 16px
  Right col (50%):
    Image placeholder — height: 240px, full col width
    Border-radius: 8px, background: rgba(255,255,255,0.05)
    Border: 1px solid rgba(255,255,255,0.1)
    Label inside: "Workshop Schedule / Assets" — 11px, content3, centered
Bottom: @Thumbnails Block

@Section 2 — Business Objectives
Header: [target-icon badge] "Business Objectives" + description
Content card — icon-card grid layout:
  Display: CSS grid, grid-template-columns: repeat(3, 1fr), gap: 16px
  If more than 3 objectives, wrap to next row (repeat(3, 1fr) auto-wraps)
  Each objective card:
    Background: rgba(255,255,255,0.05)
    Border: 1px solid rgba(255,255,255,0.08)
    Border-radius: 10px
    Padding: 20px 16px
    Top: icon (24px, white, opacity 0.7) — use a relevant icon per objective
    Text: 13px, content2, line-height 1.5
    No card label text (content only, no "Objective 01" prefix)
Bottom: @Thumbnails Block

@Section 3 — Brainstorming Session
Header: [lightbulb-icon badge] "Brainstorming Session" + description
Content card — two-column layout:
  Left col (50%):
    List of 3–4 items, each with:
      Icon (20px, white opacity 0.6) — contextual icons per item
      Item text (14px, content1, font-weight: 500), no bullet dot
      Gap between items: 20px, padding: 8px 0
  Right col (50%):
    Image placeholder — height: 240px, full col width
    Border-radius: 8px, background: rgba(255,255,255,0.05)
    Border: 1px solid rgba(255,255,255,0.1)
    Label inside: "Brainstorming Assets" — 11px, content3, centered
Bottom: @Thumbnails Block

// ─── PHASE DIVIDER ─────────────────────────────────────

@Phase Divider — CX Strategy
Full-width rule with centered pill label: "CX Strategy"
  Pill border + text: client-color
  Pill background: client-color at 10% opacity
  Lines either side: client-color at 25% opacity

// ─── PHASE 2 sections use standard layout ──────────────

@Section 4 — Competitive Analysis
Header: [bar-chart badge] "Competitive Analysis" + description
Content card:
  Description text (if provided)
  Image placeholder — Height: 240px, full width, border-radius: 8px
Bottom: @Thumbnails Block

@Section 5 — Persona
Header: [user badge] "Persona" + description
Content card:
  Description text (if provided)
  Image grid: 2 columns — Height: 200px each, border-radius: 8px
Bottom: @Thumbnails Block

@Section 6 — IA and User Story Mapping
Header: [sitemap badge] "IA & User Story Mapping" + description
Content card:
  Description text (if provided)
  Image grid: 3 columns — Height: 160px each, border-radius: 8px
Bottom: @Thumbnails Block

@Section 7 — Customer Journey Mapping
Header: [route badge] "Customer Journey Mapping" + description
Content card:
  Description text (if provided)
  Image placeholder — Height: 240px, full width, border-radius: 8px
Bottom: @Thumbnails Block

@Section 8 — Service Blueprint
Header: [layers badge] "Service Blueprint" + description
Content card:
  Description text (if provided)
  Image placeholder — Height: 240px, full width, border-radius: 8px
Bottom: @Thumbnails Block

@Section 9 — Low Fidelity Wireframes
Header: [layout badge] "Low Fidelity Wireframes" + description
Content card:
  Description text (if provided)
  Image grid: 3 columns — Height: 200px each, labels from intake, border-radius: 8px
Bottom: @Thumbnails Block

@Section 10 — Design System
Header: [grid badge] "Design System" + description
Content card:
  Description text (if provided)
  Image grid: 2 columns — Height: 240px each, border-radius: 8px
Bottom: @Thumbnails Block

@Section 11 — High Fidelity Mockups
Header: [monitor badge] "High Fidelity Mockups" + description
Content card:
  Description text (if provided)
  Image grid: 3 columns × 2 rows (6 images) — Height: 200px each, labels from intake, border-radius: 8px
Bottom: @Thumbnails Block

@Footer
Left: "© [year] [client name] · Confidential · Not for distribution"
Right: "Prepared by [Intelligaia icon] Intelligaia"
Height: auto | Border top: 1px divider

---

## Global Layout

Background: #18181b (zinc-900)
Padding Left & Right: 80px
Font: per user preference, fallback: system sans-serif

Section spacing: 56px between sections (padding-top + padding-bottom: 28px each)
Section header row: display flex, align-items center, gap 14px, margin-bottom 20px
Content card: margin-top 0 (directly below header row)

//Header — dual brand
Left: client logo (file or dashed placeholder) + client name (H4, content1) + tagline (body-small, content2)
Right: "Prepared by" (8px, content3) + Intelligaia icon (20px) + "Intelligaia" (11px, content2)

//Color bar: 3px full-width, client-color, very top

//Page title (centered):
  H1: "CX Roadmap" only — font-size: 44px, font-weight: 700, color: content1
  NO eyebrow text above ("Customer Experience" must NOT be rendered)
  NO subtitle below ("Discovery through High Fidelity" must NOT be rendered)
  The H1 is the only element in the page title block.

---

## Output

All generated deliverables MUST be saved into the `output/` subfolder inside the CX Roadmap folder — never at the root. Create the folder if it does not already exist.

After rendering HTML:
1. Save to: `<CX Roadmap folder>/output/cx-roadmap-[client-name].html`
2. Show artifact / present file to user (present from the `output/` path)
3. Print populated / empty section summary
4. If PPT requested: invoke `pptx` skill, one slide per section, and save the `.pptx` to `<CX Roadmap folder>/output/cx-roadmap-[client-name].pptx`
5. Any additional exports (PDF, updated revisions, screenshots) also go into `output/`

Naming: `cx-roadmap-[client-name].[ext]` — lowercase, kebab-case client name. For revisions, append `-v2`, `-v3`, etc.

---

## Reference files
- Section content: `scripts/script.md` (sections prefixed with `@`)
- Design tokens: `references/DS_variables.json`

## Templates
- Base HTML template: `cx-roadmap-template.html`

## Assets
- Intelligaia logo: `assets/icon-circle.png`
- Background: `assets/BG.png`
- Design file: `assets/AW DS.fig`

