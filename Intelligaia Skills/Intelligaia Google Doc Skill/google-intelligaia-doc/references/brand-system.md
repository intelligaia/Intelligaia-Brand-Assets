# Brand system — DOCX layer (corporate identity)

The single visual source of truth for Intelligaia Word documents. Documents are **corporate
collateral**, so they share the identity of `intelligaia-deck-design` — **Montserrat type, gold
`#FFD700`, navy, cream** — *not* the website/product design-system tokens (Oswald/Geist/Raleway,
`#FFC800`), which belong to the site and app. Values below are translated from the deck system into
**print units**: points (pt) for type, DXA twips (1440 = 1″) for layout.

> If a client or project supplies its own tokens/template, those override this file — record the
> deviation. Otherwise this is authoritative.

## Colour (only these)

| Token | Hex | Where it is allowed in a document |
|---|---|---|
| **Brand Gold** | `FFD700` | THE signature colour. One dominant element per page: a callout pill, a stat, list markers, the cover mark, a full-gold closing page. Flat only. |
| **Navy** | `002B5C` | Body copy, emphasis (bold), lede, text placed ON gold, giant stat numerals, labels. |
| **Ink Black** | `231F20` | Primary titles, section headings, footer text. |
| **Cream** | `FBEEDD` | Background arc ribbons, soft page washes, sidebar fills. |
| **Peach** | `F9D7AA` | Deeper arc-ribbon tone (arcs blend cream → peach). |
| **Pale Yellow** | `FBEAAD` | Soft gold tint behind a gold shape, secondary fills. |
| **Body Gray** | `666666` | Secondary body text, captions. |
| **Muted Gray** | `B7B7B7` | Eyebrow labels on white, fine print. |
| **Hairline** | `D9D9D9` / `EFEFEF` | Dividers, table borders, list separators. |
| **Accent Green** | `05A550` / `2AAB66` | Sparing: status "done/ok", check marks, positive deltas. |
| **Accent Coral** | `E46962` | Very sparing: a single small highlight, negative status. |
| **Diagram pastels** | teal `AEEDE5` · lavender `CBB7E8` · pink `EFC9DE` · sky `C9DAF8` | Diagram/venn fills only. |

**Colour rules (hard):**
- **Gold is the identity.** On any page that carries colour, gold is 60–70% of the colour weight —
  one dominant gold element, not scattered gold bits.
- **White background by default.** A full-gold `FFD700` background is only for a closing/contact page,
  where white pills carry the content.
- **Text on gold is always navy or black** — never white, never gray. **Never gold text on white.**
- One background arc per page at most (cream/peach, or a gold arc stroke) — always behind everything.
- Flat fills only: no gradients, no drop shadows, no outlines on shapes. No colour outside this table.
- Contrast ≥ 4.5:1 body, 3:1 large display. Navy/ink on white pass; navy on gold passes.

## Type — families

Everything is **Montserrat**. There is no second display family in this system.

| Role | Font | Weight | Notes |
|---|---|---|---|
| Titles / headings | Montserrat | ExtraBold / Black (cover), Bold (sections) | sentence case, left-aligned |
| Body | Montserrat | Medium | navy `002B5C`; never a lighter weight for body |
| Emphasis in body | Montserrat | SemiBold / Bold | navy — emphasis by **weight**, never by colour change mid-sentence |
| Eyebrow / label | Montserrat (or Lato) | Medium/Bold | ALL CAPS, +2 tracking, under ~10pt |
| Secondary / caption | Montserrat | Medium | gray `666666` |
| Code / literal spec (arch docs only) | monospace (Consolas/Courier) | regular | **functional exception**, code only — see guardrails |

Montserrat is a Google font, not Office-installed. LibreOffice/Word substitute it, so **size every text
container with ~10% slack** and don't trust pixel-fit. For guaranteed portability fall back to **Arial**
(titles bold) — **never Aptos**.

## Type — the document scale (fixed pt)

| Style | Weight | Size | Line | Colour | Case |
|---|---|---|---|---|---|
| `cover-title` | ExtraBold/Black | 30pt | 1.06 | Ink `231F20` | sentence |
| `h1` (section) | Bold | 18pt | 1.14 | Ink `231F20` | sentence |
| `h2` (sub) | SemiBold | 13pt | 1.2 | Ink `231F20` | sentence |
| `lede` | Medium | 13pt | 1.4 | Navy `002B5C` | sentence |
| `body` | Medium | 10.5pt | 1.5 | Navy `002B5C` | sentence |
| `emphasis` | Bold | 10.5pt | — | Navy `002B5C` | sentence |
| `qa-question` | SemiBold | 13pt | 1.25 | Ink `231F20` | sentence |
| `callout` (on gold) | SemiBold | 11.5pt | 1.4 | Navy `002B5C` | sentence |
| `eyebrow` | Bold | 10pt | 1.2 | Ink `231F20` or gray `666666` | UPPERCASE +2 |
| `caption` | Medium | 9pt | 1.3 | Gray `666666` | sentence |
| `footer` | Medium | 8.5pt | 1.2 | Gray `666666` | sentence |
| `stat-numeral` | Black | 48–72pt | 1.0 | Navy `002B5C` | — |

Reading measure: cap body lines around **62–72 characters** — body lives in the margin column, not edge
to edge.

## Page & spacing

- **Page:** US Letter, 8.5 × 11″ (`width: 12240, height: 15840` DXA).
- **Margins:** 1″ (1440) top/bottom, 1″ (1440) left/right on text pages. The cover header band and any
  arc motif may bleed to the trim.
- **Baseline unit: 8pt.** Block spacing is a multiple:
  - `h1`: 24pt before, 8pt after. `h2`: 16pt before, 4pt after.
  - `body`: 8pt after. `lede`: 8pt before, 16pt after.
  - callout / table / figure / qa: 16pt before and after.
- Emphasis pattern in body: navy Medium with **navy Bold** phrases — never a mid-sentence colour change.
- The only divider is a single hairline paragraph border (`D9D9D9`). No decorative full-width rules,
  no title underlines, no edge stripes.

## Fixed furniture

- **Cover page — MANDATORY, always page 1 (the gold-forward standard).** Every document opens with a
  dedicated cover page, then a page break. It is built by `coverElements()` and uses the brand assets:
  1. `assets/brand/logo.png` top-left (~1.75″), with `assets/brand/arc-cream.png` bleeding off the
     top-right and `assets/brand/starburst-yellow.png` behind the title's left edge — both flat, behind
     all text (`behindDocument`). These motifs are the identity; keep them.
  2. Eyebrow / doc type (Montserrat caps, ink).
  3. Title (Montserrat ExtraBold 32pt ink).
  4. A **gold `#FFD700` card** holding **Client** and **Project** (navy labels + values — text on gold
     is navy, per the rules).
  5. **Purpose** — a `Purpose` label + one navy line on why the document exists.
  6. Meta line at the foot: `Prepared by <company> · <date> · <docId> · Confidential?` (grey).
  - **Required fields:** `client`, `project`, `purpose` (plus `title`, `eyebrow`). Ask if missing;
    render `[TK: …]` if still unknown — never fabricate a client or a purpose. `company` defaults to
    Intelligaia. In the **technical treatment**, the eyebrow, card labels, and meta line switch to
    monospace (the card and palette do not change).
- **Table of Contents — automatic, page 2.** Any document with **≥2 headings** gets an auto-generated
  `Contents` page immediately after the cover: "Contents" (Montserrat Bold 18pt ink) then one entry per
  `h1`/`h2` (h2 indented, grey) in the Google-Docs **dotted style** — heading, dotted leader, page
  number. It links off the **sections' Heading outline levels — no author bookmarks**, exactly like
  Google Docs' Insert → Table of contents (the app generates its own hidden anchors when the field
  updates). It is emitted as a **genuine, refreshable Word/Google-Docs Table of Contents field**
  (`TOC \o "1-2" \h \z \u`) built from those heading styles, but with
  the **computed page numbers cached inside the field** — so it displays correctly on first open in
  every viewer (Word, Google Docs, LibreOffice, PDF/Drive previews) *and* stays updatable (Word: F9 /
  right-click → Update Field; Google Docs: the refresh icon / "Update table of contents"). The numbers
  are computed by a two-pass render at build; if the render tool is missing it degrades to the same
  list without page numbers. Authors never add it — it's automatic (don't hand-build a contents list).
- **Running footer** (every page after the cover): `assets/brand/logo.png` small at bottom-left
  (~1.1″) OR a Montserrat 8.5pt gray line `Intelligaia · <doc title> · <page>` at left; optionally
  `assets/brand/deep-tech-lockup.png` bottom-right (~1.2″). Keep content 0.35″ clear of the footer.
- **Closing/contact page (optional):** full gold `FFD700` background, white stadium pills holding
  contact lines in navy bold — the one page that inverts to gold.
- Headings never carry `01 / 02` prefixes baked into the text; use Word numbering for numbered sections.

## Technical treatment (client-adaptive) — sanctioned variant

For **AI / deep-tech clients**, a document may switch from the *standard* treatment to the
**technical treatment**. This is the only sanctioned way to make a doc read "techier" — it never
changes the typeface (Montserrat stays) or the palette (gold + navy stays). It is a bounded set of
swaps, set once per document via `meta.treatment: "technical"`:

| Element | Standard | Technical treatment |
|---|---|---|
| Eyebrow / labels | Montserrat Bold caps | **Monospace** (Consolas/Courier) caps, +2 tracking |
| Cover meta line & footer | Montserrat Medium | **Monospace** |
| Section kicker / numbers | Montserrat | **Monospace** (e.g. `01_`, `02_` as a *kicker*, not baked into the heading text) |
| kv keys / spec labels | Montserrat SemiBold | **Monospace** |
| Grid density | standard spacing | **tighter** — body line −0.05, block spacing one step down |
| Tone | house voice | house voice, **more technical vocabulary**, terms left unglossed |

What does **not** change: titles, headings, and body stay Montserrat; palette stays gold + navy on
white; all hard rules in `guardrails.md` still apply (no gradients, gold never behind body text, etc.).
Use it only when the client genuinely reads as technical — a hospital or a bank is *not* a "tech client."
When unsure, use standard. The playbooks decide; `proposal.md` and `architecture.md` are the usual homes.

## Imagery

- Illustrations are **selected, never generated** — from `assets/manifest.json` (`stage: "final"`,
  prefer `png`) by `raw_url`, or the deck-identity furniture bundled in `assets/brand/`. See
  `asset-selection.md`.
- Gold shapes (pill, semicircle+dots for a growth stat, starburst behind a label) are drawn or use the
  bundled `starburst-yellow.png` — keep native aspect, one dominant per page.
- Never recolour, stretch, or crop an illustration. Caption every figure (Montserrat 9pt gray).
- SVGs don't embed reliably via the generator; PNGs do. Enterprise docs stay clean — a figure earns its
  place by carrying meaning, not by filling space.
