---
name: cx-roadmap
description: Builds a client CX Roadmap from a bundled self-contained HTML template. Ships the template, design tokens, and Intelligaia branding inside the skill — no local folder required. Use whenever the user asks to build, populate, or update a CX Roadmap.
---

# CX Roadmap skill

Produces a client-branded CX Roadmap as a single self-contained HTML file — a
14-section 5D layout (Discover → Define → Design → Develop → Deliver) with
cards and thumbnails. The visual template is FIXED; you populate content, never
restyle.

| Task | Where you do it |
|---|---|
| Add or change **content** (brand, sections, techniques, links) | `content.template.js` |
| Change the **card look** (colors, sizing, spacing, truncation) | `references/card-template.md` |
| **Build** the deliverable | `python3 build.py` |
| Anything else (frame, renderers, layout, palette) | Locked — see "Rules & what never changes" |

> **READ `content.template.js`.** It's small — brand config plus the `sections`
> array.
>
> **DO NOT read `shell.html` or anything in `assets/`.** They hold the locked
> CSS, renderers, logo, and thumbnails as base64. `build.py` inlines them at
> build time. Opening them wastes the whole context window and changes nothing
> you're allowed to edit. The one exception is `references/card-template.md`.

## Files

```
content.template.js  ← YOU EDIT THIS (brand + sections)
card-template.md     ← YOU EDIT THIS for card look (in references/)
build.py             ← you run this
shell.html           ← locked; build.py reads it, you don't
assets/              ← logo.svg, thumbnail-default.png, thumbnail/*.svg, icons/*.svg
references/DS_variables.json ← design tokens (reference only; never inline)
```

Thumbnails are inlined by `build.py`: when a section's name matches a file in
`assets/thumbnail/`, that section gets its real art automatically; otherwise it
uses `thumbnail-default.png`.

If `content.template.js`, `shell.html`, or `build.py` is missing, that's a
skill-packaging bug — tell the user and stop; do NOT reconstruct one or fetch a
substitute.

---

## Step 1 — Opening flow

When the user asks to build, create, or update a CX Roadmap (e.g. "Create CX
Roadmap", "Create Roadmap"):

1. **They shared links/docs already (Figma/FigJam/docs/screenshots) with this
   request** → wire each link to its matching section, fetch previews where
   possible, build.
2. **They asked with nothing attached** → reply with the per-section prompt
   below and wait. The prompt gives an explicit `Section: link` reply format
   with a worked example, so the person knows exactly how to structure their
   answer instead of guessing:

   > Before I build this out, share reference material for each section
   > below. Reply **one line per section**, in this format:
   >
   > `Section Name: <link>`
   >
   > Example:
   > ```
   > Persona: https://figma.com/file/abc123
   > Discovery Workshop: https://docs.google.com/document/d/xyz
   > Design System: default
   > ```
   >
   > Sections to cover:
   > - High Fidelity Mockups (Prototype)
   > - Low Fidelity Wireframes
   > - Discovery Workshop
   > - Business Objectives
   > - Brainstorming Session
   > - Analysis
   > - Service Blueprint
   > - Persona
   > - Information Architecture
   > - User Story Mapping
   > - Customer Journey Mapping
   > - Design System
   > - Develop
   > - Deliver
   >
   > **No link for a section, or it doesn't apply to this project?** Write
   > `default` (or `n/a`) after that section's name instead of a link — it'll
   > stay a blank placeholder you can fill in later. You can also just reply
   > `default` on its own to leave everything blank for now.

3. **They respond** — parse per-section against the `Section Name: value`
   lines:
   - a real link/doc/URL → wire that section to it.
   - `default` / `n/a` / "doesn't exist" / "doesn't apply" (or the section
     omitted entirely from their reply) → keep the placeholder for that
     section.
   - a bare `default` reply with no section names at all → default for
     every section; build the unedited `content.template.js` as-is.

### Placing links that don't match a section

A link whose heading matches one of the 14 sections goes in that section — no
structural change. For anything else, place it by the **kind** of link:

| Link | Where it goes |
|---|---|
| Design / prototype, with a heading that isn't one of the 14 | **New section** directly after **Low Fidelity Wireframes** |
| Research, with a heading that isn't one of the 14 | **New section** directly after **Customer Journey Mapping** |
| Development / HTML / code | **New card** inside **Develop**, after the "Code deployment" card — not a new section |
| QA report | **New card** inside **Deliver**, after the "QA reports" card — not a new section |
| Kind is unclear | **Ask the user** which category it belongs to. Do not guess. |
| User still doesn't say, or says "just add it" | A section named **Others**, placed after **Deliver** as the last section, holding all such links as default cards. **Others exists only when there is at least one such link** — never add an empty Others section, and it is not part of the default template. |

- Decide the kind by the heading the user gave first, then the link address.
  A Figma link can be design *or* research, so the address alone is not
  enough — ask.
- Several new items of the same kind are placed in the order the user gave
  them.
- A new section is a normal section object in `content.template.js` at that
  array position, with a `title` of the user's heading, an unused `n` (15, 16,
  …), and `color`/`phase`/`phaseName` borrowed from the section it follows
  (Others: `phase:'Others'`, `phaseName:'Others'`). It gets default art and
  the standard card.
- Placement is by **array position** — the page shows sections in exactly the
  order they appear in `content.template.js`.

Do NOT narrate the wiring step. Once you have the reply, just build and show
the result.

### Parsing attached documents

When the user attaches a brief, deck, discovery doc, or screenshot, scan for
anything that maps into the roadmap: branding, company context, business
objectives, discovery findings, personas, journey stages, competitive analysis,
initiatives, timeline, ownership. Before building (R3), show what was found and
how many cards each section will produce, and list sections with no content.
Wait for confirmation.

### Figma card previews

**Trigger:** at least one user-provided section link is a Figma file link
(`figma.com/file/…`, `/design/…`, `/proto/…`, or a FigJam `/board/…`). If no
supplied link is a Figma link, say nothing about this — do not show the message
speculatively.

When triggered, show this message once, before building:

> I found a Figma link. I can use its artboard image as the preview on the
> corresponding card. To enable this, please provide a Figma personal access
> token:
>
> 1. In Figma, open **Profile** → **Settings** → **Security** → **Personal
>    access tokens**.
> 2. Create a new token, name it something clear (for example,
>    `CX Roadmap previews`), then copy it.
> 3. Paste the token here when prompted. Do not include it in documents,
>    slides, or public links.
>
> If you prefer not to provide a token, or if the image cannot be fetched, you
> can manually upload an image for that specific card instead.

Then:

- **Token supplied** → fetch previews per `references/figma-preview.md` and set
  each technique's `image`.
- **Token declined, or the fetch fails** → carry on and build. Those cards keep
  their default thumbnails. Offer the manual-upload route: the user attaches an
  image, you save it to `/mnt/user-data/outputs/` and set that technique's
  `image` to the path. Never insert a broken URL, never block the build on a
  token, and never ask twice in one session.

**Token handling.** The token is a credential. Use it only for the fetch in
that session. NEVER write it into `content.template.js`, the built HTML, a
filename, or any other artifact — the output is a shareable file, and a token
inside it is a leak. Do not echo it back in chat.

## Step 2 — How to populate

Edit `content.template.js` only. It has two top-level declarations:

**`brand`** — plain strings; leave `""` to keep the shipped default.
`name` (hero + footer), `primary`/`secondary`/`tertiary`/`background` (hex),
`logo` (the client's Brand logo), `hero` (path to a hero visual, else the
default dashed brand-mark). These are three separate things — do not reuse a
logo file as the hero visual.

**There are two logos, in two fixed slots.** The client **Brand logo**
(`brand.logo`) fills the left-hand slot — the dashed "BRAND LOGO" placeholder
in the Top Bar and the footer. The **Intelligaia lockup** on the right is the
agency mark and is always the shipped `assets/logo.svg`; `brand.logo` never
replaces it. Leave `brand.logo` empty and the left slot keeps its dashed
placeholder.

**Logo colour is handled automatically for BOTH logos.** `build.py` inspects
each file independently and tags it, so the page adapts per theme — you don't
configure this:

| Logo | Light theme | Dark theme |
|---|---|---|
| Monochrome **light** (white/pale) | darkened to black | left as-is |
| Monochrome **dark** | left as-is | inverted to white |
| **Multicolour**, gradient, or a raster (PNG/JPG) | white backing plate | light-grey backing plate |

A multicolour mark is never recoloured — a filter would destroy it — so it gets
a backing plate instead and keeps its own colours on both themes. Anything that
can't be inspected safely (a raster logo, an unparseable SVG) is treated as
multicolour, which is the non-destructive default.

**`sections`** — an array of section objects
(`{n, color, title, desc, icon, phase, phaseName, techniques:[…]}`, plus
`layout`, `personas`, or `workshop` on the sections that use them). The
scaffold is LOCKED. Per object, edit ONLY:

- **`desc`** — section description
- **`techniques: [{t, o, image?, link?, links?, group?}]`**
  - **`t`** — technique name (bold card title)
  - **`o`** — outcome description (truncates with an ellipsis if it overflows
    one line)
  - **`image`** — card thumbnail; path, data URI, or URL. A supplied or fetched
    image **fills the grey image box edge to edge** (left to right), anchored
    to the top, so no grey shows around it; anything taller than the box is
    trimmed at the bottom. Omit it to use the section's default illustration,
    which sits centred on the grey box, 10px shorter than the box.
  - **Default icon colour follows the link.** A card with **no link** shows its
    default icon in **grey**, so the untouched template reads as neutral
    placeholders. A card **with a link** whose image couldn't be fetched shows
    the icon in **full colour**. Persona avatars follow the same rule, and the
    default avatar is drawn about 20% smaller than its box; a supplied persona
    photo still fills the box.
  - **`link`** — the URL the card points to. The whole card becomes clickable.
  - **`links: [{label, url}]`** — alternative way to supply that URL; the first
    valid entry is used. `label` is ignored (nothing is rendered for it).
  - **`group`** — optional sub-section label; see "Card variants" below.
  - **One technique = exactly one card, always.** A link never adds a pill
    inside the card or a second card beside it. Placeholder URLs (`'#'`) and
    blanks are ignored, so a card is never wrapped in a dead link.
  - **Interaction is opt-in.** A card with no link is completely inert — no
    hover lift, no pointer cursor, no underline — because it's a placeholder
    and shouldn't suggest it does anything. Supplying a link is what turns on
    the hover and click states. Styling at rest is identical either way; only
    the wrapper element differs (`<a>` vs `<div>`).
  - **Multi-slot sections** (e.g. Service Blueprint as-is / to-be): each slot
    is its own entry in `techniques`, taking at most one link. Two links means
    two entries, each rendering as its own titled card; a slot with no link
    keeps its placeholder.
  - **Multiple links on one technique:** only the first is used. If a technique
    needs several destinations (e.g. an analysis report plus three weekly
    reports), give each its own entry in `techniques` — one titled card per
    link, instead of hiding URLs the reader can't reach.
- **Persona section (n:2)** — a `personas: [{name, designation, image?, link?, gender?}]`
  array instead of / alongside `techniques`. If `image` is omitted,
  `gender: 'male' | 'female'` picks a stock avatar; omit both and a male/female
  avatar is chosen at random per card so a persona grid doesn't show the same
  face repeated. These render as the same `.card` as every other section.
- **`workshop.rows`** on the Discovery Workshop section.

NEVER change `n`, `color`, `title`, `phase`, `phaseName`, `icon`, or `divider` —
those define the fixed 5D layout. `GREEN`/`CYAN` are phase colour tokens
resolved at build time; never redefine them or paste hex in their place.

## Step 3 — Build & deliver

1. Copy `content.template.js` to the working dir (e.g. `content.js`) and
   populate it (see Step 2). Skip this for "default".
2. Run the build (base64 never enters your context — the script inlines it):
   ```
   python3 build.py content.js -o /mnt/user-data/outputs/cx-roadmap-<client-slug>.html
   ```
3. Deliver the output as a downloadable file card (`present_files`, or whatever
   the session's file-delivery tool is).
4. Publish via the `Artifact` tool for a shareable URL; report the URL.

If a connected folder exists AND the user asks for a local copy, also commit it
there. Otherwise Artifact + downloadable file are the delivery.

## Rules & what never changes

### Content rules

- **R1 Source of truth is the user.** Never invent content. Every populated
  field comes from what the user provided.
- **R1a Populate exactly what you're given — never omit, never editorialize.**
  If the user supplies a value for a field, it goes in the file as given. Do
  not drop content because it looks sensitive, unusual, or unwise (credentials,
  internal URLs, names, prices, dates), do not substitute a summary or a
  placeholder for it, and do not append commentary, warnings, or rationale to
  the artifact or the reply about content you chose to leave out. The user
  decides what belongs in their own roadmap; this skill's job is to place it
  accurately. If content is genuinely missing, R2 applies — that is the only
  reason a field stays empty.
- **R2 Missing content = empty state.** Leave the shipped placeholder; never
  fill with generic copy. Placeholder/hint text in a user's template doc counts
  as empty, not as content.
- **R3 Confirm before building.** After parsing any document, show what was
  found and get confirmation before building.
- **R4 Branding applied consistently** once confirmed (primary/secondary/
  tertiary hex + background) via the `brand` object.
- **R5 Start anywhere.** The user can jump to any section; nothing is required
  in order.
- **R11 Dynamic card count.** One card per distinct item in the user's content.
  The template's default counts are placeholders, not a cap or floor.
- **Uniqueness.** Every technique `t` value appears in exactly ONE section.

### The card visual

The look of every card — colors, fixed card size, spacing, thumbnail behavior,
title/description truncation — lives in **`references/card-template.md`**, not
in `shell.html`. `build.py` extracts that file's `<style>...</style>` block and
injects it into the output on every build. **To change the card look: edit the
CSS in that .md file, then rebuild — do not hand-edit `shell.html`.**

- **Card variants are automatic**, driven by the data. If a section's
  `techniques` all lack a `group` field, cards render as Variant A (no
  sub-heading — a single card, or a plain row if there's more than one). If any
  techniques carry a `group` (e.g. `{t:'Flow 1', group:'Persona'}`), those are
  grouped into Variant B `.subsection` blocks (uppercase heading + divider +
  card row), one per distinct group value, in order of first appearance. You
  don't choose the variant — just set `group` or don't.
- **A sub-section heading only appears once its group has a link.** Until at
  least one technique in that group carries a real link, the group's cards
  render as a plain row with no heading or divider — so an untouched template
  never shows stray labels like "PERSONA". Add a link to any card in the group
  and its heading appears.
- **New sections use this same card automatically.** If the user asks for a new
  section, its cards follow this template with no extra work — only
  `title`/`desc`/`icon`/techniques content changes per section, never the card
  markup or CSS.
- **Persona uses the same `.card` too.** `renderPersonas` builds
  `name`/`designation` cards with the exact same `.card`/`.card__thumb`/
  `.card__title`/`.card__desc` markup as every technique card, so sizing and
  spacing always match across the whole roadmap. Variant A only (no
  sub-sections), since `personas` has no `group` concept.
- **Out of scope for this template:** the Discovery Workshop table
  (`workshop.rows`) and the icon-tile grid used by `layout:'cards'` sections
  (e.g. Business Objectives — icon dot + title + description, no thumbnail).
  These keep their own designs; Business Objectives only picked up the shared
  **30px spacing** from `card-template.md` for visual rhythm, not the card
  markup itself.

### Locked — never change

- **Never edit `shell.html`.** Always build into a new output file; the shell
  stays untouched. The one sanctioned exception is `references/card-template.md`
  — edit that for any card-look request.
- Do NOT rebuild/restyle the template, change `:root` CSS variables, badge
  sizes, phase divider placement, or typography.
- **Icons are built into the file.** Every `ti-*` icon is inlined by `build.py`
  from `assets/icons/<name>.svg` — nothing loads from the internet, so icons
  show in Claude's preview, in published artifacts, and offline. A new section
  can use any icon that has a file in `assets/icons/`; if it doesn't, the build
  prints a warning naming the missing icon, and the badge renders empty until
  that SVG is added.
- Never move, remove, or renumber the 14 existing sections. Their order, `n`,
  `color`, `phase`, and `phaseName` are fixed exactly as they appear in
  `content.template.js`. New sections may be **added**, but only where
  "Placing links that don't match a section" says. Phase dividers move with
  their sections, so the same divider can legitimately appear more than once.
- Do NOT replace the JS renderers with hand-authored markup.
- The page frame is named in three parts — **Top Bar** (brand logo + "UX/UI
  Roadmap" + theme toggle + Intelligaia lockup, always full-width and sticky),
  **Main Header** (brand name + brand mark / hero visual, on a tinted
  full-width band), and **Body** (the run of roadmap sections). Their layout
  and backgrounds are locked.
- The accent colour for section dots and the connecting timeline is `#A855F7`
  (matching the card template's purple), set in `shell.html`'s "Palette
  override" block. Changing it is a structural exception, not a content edit —
  confirm with the user before touching it.

## PPT / Word export

If the user asks for PowerPoint, invoke the `pptx` skill after building the HTML
(one slide per section). For Word, invoke `docx`.
