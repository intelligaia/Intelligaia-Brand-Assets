---
name: intelligaia-deck-design
description: Build PowerPoint presentations in Intelligaia's corporate design system (gold-yellow organic shapes, navy/black Montserrat titles, white backgrounds). Use whenever the user asks for an Intelligaia deck, presentation, readout, pitch, or slides — or asks to make slides "on brand" / "in our style".
---

# Intelligaia Presentation Design System

Build 16:9 decks that match Intelligaia's corporate identity ("humanizing AI for enterprises"). The look: clean white canvases, oversized bold titles, and playful organic **gold-yellow shapes** (pills, blobs, semicircles, sunbursts, halftone dot fields) softened by pale cream arc ribbons in the background. Never generic corporate blue, never boxy.

Follow the pptx skill's build/QA workflow (pptxgenjs → validate → visual QA). This file supplies the design rules and reusable assets.

## Color palette (exact values — pptxgenjs hex, no `#`)

| Token | Hex | Use |
|---|---|---|
| Brand Gold | `FFD700` | THE signature color. Large organic shapes, stat semicircles, full-bleed closing/contact slides, callout cards. 60–70% of the color weight on any slide that has color. |
| Navy | `002B5C` | Titles (alternate), body emphasis, giant stat numerals, text placed ON gold shapes, labels. |
| Ink Black | `231F20` | Primary title color, headings, footer text. |
| Cream | `FBEEDD` | Background arc ribbons, soft background washes, before/after "before" panel. |
| Peach | `F9D7AA` | Deeper arc-ribbon tone (arcs blend cream→peach). |
| Pale Yellow | `FBEAAD` | Soft gold tint for secondary shapes/halos behind gold circles. |
| Body Gray | `666666` | Secondary body text. |
| Muted Gray | `B7B7B7` | Captions, eyebrow labels on white. |
| Hairline | `D9D9D9` / `EFEFEF` | Divider lines inside cards, list separators. |
| Accent Green | `05A550` / `2AAB66` | Sparing: line icons, testimonial name underlines. |
| Accent Coral | `E46962` | Very sparing: small highlights only. |
| Diagram pastels | teal `AEEDE5`, lavender `CBB7E8`, pink `EFC9DE`, sky `C9DAF8` | Venn/diagram fills and photo-backing blobs only. |

Rules: white `FFFFFF` background by default; full gold `FFD700` background only for the closing/contact slide (white pill shapes carry the content there). Text on gold is always navy or black — never white, never gray. Never place gold text on white.

## Typography

| Element | Font | Size | Color |
|---|---|---|---|
| Slide title | Montserrat (bold; brand uses Montserrat ExtraBold/Black) | 36–44pt, left-aligned, sentence case | `231F20` or `002B5C` |
| Eyebrow label above title | Montserrat or Lato, ALL CAPS, `charSpacing: 2` | 12–14pt | `231F20` or `666666` |
| Section/card header | Montserrat bold (caps for column headers) | 18–24pt | `231F20` |
| Body | **Montserrat Medium** | **12pt** | `002B5C` on white/gold, `666666` secondary |
| Bold emphasis inside body | Montserrat SemiBold/Bold, 12pt | — | `002B5C` |
| Giant stat numeral | Montserrat Black | 150–280pt | `002B5C` |
| Stat sublabel | Montserrat, caps | 12–14pt | `002B5C` |

**Body text is always Montserrat Medium 12pt** — this is fixed across every archetype (list items, descriptors, captions, paragraph copy, card contents). Where an archetype below quotes a larger body size, 12pt Montserrat Medium wins. In pptxgenjs write `fontFace: "Montserrat Medium"` (or `"Montserrat"` with `bold: false`) and `fontSize: 12`.

Montserrat/Lato/Open Sans are Google fonts, not Office-safe: LibreOffice QA renders substitutes with different widths, so size text containers with ~10% slack and don't trust QA text-fit pixel-perfectly. If the user needs guaranteed portability, fall back to Arial (titles bold) — never Aptos.

## Fixed furniture on every content slide

- **Footer** (every slide except the cover): two elements only — `assets/logo.png` bottom-LEFT (~1.3" wide, x:0.49", y:6.85") and `assets/deep-tech-lockup.png` ("Deep in Tech. Rooted in Design.") bottom-RIGHT (~1.5" wide, right edge at the grid margin x:12.85", same baseline). Nothing else in the footer — no CAGE, UEI, or NAICS codes. Keep content 0.4" clear above it.
- **Logo**: `assets/logo.png` (wordmark + tagline) top-left on the cover slide only (~2.2" wide at x:0.49", y:0.45"); on content slides it sits bottom-left in the footer.
- **Title zone**: title at the grid's left margin x:0.49", y:0.4–0.7". If there's an eyebrow (e.g. "CASE STUDY", "TESTIMONIALS"), it sits 0.35" above the title.

## Asset index (`assets/`)

| File | What it is |
|---|---|
| `logo.png` | Intelligaia wordmark + tagline — cover top-left, footer bottom-left |
| `deep-tech-lockup.png` | "Deep in Tech. Rooted in Design." lockup — footer bottom-right |
| `statement-double-capsule-sparkle-arc.png` | Composition: double capsule + sparkle burst on peach arc |
| `list-balloon-cards-pair.png` | Composition: two joined balloon/leaf list cards |
| `three-shapes-on-arc.png` | Composition: capsule + sun + sparkle riding one arc |
| `growth-burst-semicircle-dots.png` | Composition: gold semicircle bursting into dots (growth) |
| `starburst-yellow.png` | Standalone gold star/seal blob accent |
| `cover-arc-rings.png` | Double gold arc rings framing the cover slide hero visual |
| `team-blobs-arc.png` | Team slide backdrop: pale gold smile-arc with 5 colorful blobs (transparent bg) |
| `icon-workshops.png` | Typographic 3D "W" icon — Workshops service category |
| `icon-ux-design.png` | Typographic 3D "UX" icon — UX Design service category |
| `icon-sw-development.png` | Typographic 3D "S" icon — SW Development service category |
| `icon-ai-data-science.png` | Typographic 3D "AI" icon — AI & Data Science service category |
| `before-after-split.png` | Before/after slide background: white header band, pale-yellow left / gold right split |
| `portfolio-triptych-shapes.png` | Portfolio triptych backdrop: circle + scalloped sun + line burst on a cream sweep |
| `arc-cream.png` | Standalone background arc ribbon (arcs are cream or gold only) |

## Ready-made shape compositions (prefer these over drawing your own)

Four brand-exact PNG compositions extracted from the master deck. Each has a specific job and a home on the slide. Rules for all: keep the native aspect ratio (never stretch), place on white slides only (backgrounds are baked white/cream), send to back behind text, max ONE composition per slide, and don't add a separate arc asset on the same slide — the arc is already part of the composition.

1. **`assets/statement-double-capsule-sparkle-arc.png`** (2000×792) — a double-capsule (two joined pills) on the left and a sparkle-ray burst on the right, both anchored on a sweeping peach arc. The standard "statement + accent" backdrop. Place full-width (~13.33" × 5.28") in the upper two-thirds under the title. The double capsule exists to hold text: center 2–3 lines of navy bold (18–24pt) inside it; the sparkle burst can sit behind a short ALL-CAPS keyword.
2. **`assets/list-balloon-cards-pair.png`** (1354×738) — two joined text-balloon/leaf cards with divider hairlines already drawn. For paired lists (services, offerings, two categories). Place ~7.3" × 3.9", center or center-right. Each card holds a 3-item navy list (Montserrat Medium 12pt), one item per hairline band; a bold navy topic label can sit to the left of the pair.
3. **`assets/three-shapes-on-arc.png`** (2000×786) — capsule + scalloped sun (starburst) + sparkle rays (line burst) riding a single cream arc: the three-concept layout. The arc is what holds the shapes on screen — keep them on it. **Anchoring rule: the starburst and the line burst sit ON the EDGE of the arc** — the arc's stroke passes through/under them at its rim, they never float free of it or drift to the arc's center. The capsule likewise rests on the arc. Place full-width (~13.33" × 5.24") under the title; one short phrase per shape (inside the capsule, inside the sun at max 2 lines, centered over the sparkle's hub). **Typography for all three phrases: Montserrat, ExtraBold, 18pt, navy `002B5C`** — same treatment on every shape, no size or weight variation between them. When recreating or repositioning these shapes on any other slide with an arc, keep the same edge-anchoring.
4. **`assets/growth-burst-semicircle-dots.png`** (1056×1028) — a solid gold half-circle dissolving into a spray of bursting dots. This shape MEANS growth/expansion — use it only for growing numbers, scaling stories, momentum, expanding ideas ("50 and growing", market expansion, adoption curves). Anchor to the right or left slide edge, ~5.5–6" tall; overlay the giant navy stat numeral (150–280pt) straddling the solid half, and put the "and growing"-style tagline among the dots.

## Drawn shape motifs (when a composition doesn't fit the content or scale)

Recreate with pptxgenjs shapes unless an asset is listed. Pick 1–2 per slide, vary across the deck:

1. **Gold pill** — `ROUNDED_RECTANGLE`, `rectRadius` = half the height, fill `FFD700`, no border. Holds a short navy bold phrase (18–24pt). ~3.5×1.3" for CTA labels, up to 4×1.6" for statement callouts.
2. **Sunburst rays** — `assets/starburst-yellow.png` scaled 1.5–3", or draw 12–16 thin gold rectangles rotated around a center. Place BEHIND a navy text phrase.
3. **Star/seal blob** — `assets/starburst-yellow.png` small (1.5–2") as a text backdrop, or shape `STAR_16_POINT`-like with fill `FFD700`.
4. **Gold semicircle + halftone dots** — for hero stats: half-circle (`PIE` or `CHORD`, fill `FFD700`) flat edge vertical, giant navy numeral overlapping it, and a field of `FFD700` circles of decaying sizes (halftone) spilling off the right edge. Draw dots as ~40–80 ellipses with radius shrinking with distance.
5. **Leaf/teardrop card** — rounded rectangle with three corners fully rounded (approximate: `ROUNDED_RECTANGLE`, high `rectRadius`), fill `FFD700`, holding a navy list separated by `D9D9D9` hairlines. Used in pairs, 3.3–3.6" wide × 3.5" tall.
6. **Arc ribbon** — `assets/arc-cream.png` (2048×1331, transparent) placed large (7–10" wide) behind content, often bleeding off-canvas; rotate/flip for variety. Arcs are ONLY cream/peach or gold `FFD700` (draw a gold one as a thick arc stroke if needed) — never blue or any other color. 1–2 per slide max, always behind everything else.
7. **Circle photo + pastel blob** — headshots cropped circular (`addImage` with `rounding: true` on a square crop), a lavender/gold/blue pastel blob (ellipse or freeform) tucked behind, offset. Name below in teal/green underlined style, role in `666666`.
8. **White pills on gold** — closing slide: full `FFD700` background, white stadium pills (~4.5×0.9") each holding one contact line (email, URL, phone) in navy bold, staggered diagonally down the slide.

## Slide archetypes (the deck's layout vocabulary)

Archetypes 1 (→B1), 2 (→B6), 5 (→B4), 6 (→B5), 13 (→B3), 14 (→B7), and 15 (→B2) have locked blueprints in the Layout blueprints section — use those coordinates verbatim. The rest compose from the grid and motif rules.

1. **Cover**: built strictly on the thirds grid. Left third: logo top-left (~2.2" wide at x:0.45, y:0.45), black mega-title (36–40pt Montserrat Black, 4–6 short lines) starting at the upper-third line (y≈2.5"), and a small facts block (8–10pt, e.g. established/certifications/locations) at the bottom. Right two-thirds: `assets/cover-arc-rings.png` (3840×2496 — a bold gold outer arc ring with a paler inner ring) placed LARGE — it must cover more than 60% of the slide area (~10.5" wide, bleeding off the right edge) — so the rings' open side faces up-right and their center sits on the right-third intersection. The rings are the stage for a custom hero graphic placed on top of them (supplied per deck; fallback: product screenshot inside a large dark circle), nested in the rings' center with the rings visibly framing it. Rings behind the hero, hero behind nothing. Image-rich, no footer.
2. **Hero stat / growth**: 3 label/value pairs down the left (caps gray label 12pt + navy 20pt value); right half = `assets/growth-burst-semicircle-dots.png` with the 260pt navy numeral straddling the solid half and a short tagline among the dots. Reserve this archetype for numbers that are growing.
3. **Team**: title top-left as usual; `assets/team-blobs-arc.png` (3840×2496, transparent) as the backdrop — a pale gold smile-arc with colorful blobs (purple, gold, blue, orange, red) scattered along it. Place it large (~10–11" wide) centered under the title. Each blob anchors ONE circular headshot: crop headshots circular (Ø1.8–2.2") and place each overlapping its blob, staggered heights following the arc's curve. Teal/green underlined name (Montserrat SemiBold 14pt) + gray role (Montserrat Medium 12pt) below each headshot. **Rule — match shape count to team size:** the asset carries 5 blobs; for fewer members, crop or cover unused blobs (never leave an empty blob without a headshot); for 3 members use the left, center-top, and right blobs; for more than 5, draw extra freeform blobs in the same palette (diagram pastels + gold + coral) riding the same arc.
4. **Certifications**: gold pill statement top-left; grid of badge/seal logos right; sunburst accent; 2 short body paragraphs bottom-left with bold navy emphasis phrases.
5. **Services split**: statement title; bold navy topic label left; `assets/list-balloon-cards-pair.png` holding two 3-item lists divided by its built-in hairlines.
6. **Three concepts**: title + `assets/three-shapes-on-arc.png` full-width — one navy bold phrase per shape, all riding the arc.
7. **Venn/framework**: three overlapping pastel circles (teal/cream/pink, ~55% opacity feel — use pastel fills) with a shared center label; thin connector lines to gray annotations; gold rounded card on the right for "Impact" bullets (navy text).
8. **Portfolio triptych**: three portfolio images in a row with a caption under each, on `assets/portfolio-triptych-shapes.png` (1998×1002) — solid gold circle, scalloped sun, and line burst left→right on a faint cream sweep (shapes edge-anchored on the arc). Place the composition full-width (13.33" × 6.68" at x:0, y:0.75, under the title). Center one portfolio image on each shape (~3.3–3.6" wide; image overlaps its shape so the shape peeks around the edges — shape centers sit at ≈ x:2.7 / 6.35 / 9.85, y:3.7). Captions below at the same y (~5.6"), navy Montserrat Medium 12pt with **navy bold** emphasis phrases, each column-aligned under its image.
9. **Case study before/after**: use `assets/before-after-split.png` stretched to fill the full slide (0,0 → 13.33"×7.5"; flat color blocks, so stretching is fine — the one exception to the no-stretch rule). Its white header band (top ~38%, to y≈2.9") holds the eyebrow + navy question-title. Lower band: BEFORE always on the pale-yellow LEFT half, AFTER always on the gold RIGHT half (split at x≈6.56"). Small label chips ("Before" dark chip white text / "After" white chip navy text) top-left of each half, labeled screenshots below them (~4.5" wide each, respecting the grid margins). Footer elements sit on the colored bands.
10. **Case study timeline**: white; client logo left with stat pairs (regular + bold line); right = dotted ascending timeline with year markers, annotation callouts, tech logos.
11. **Testimonials**: eyebrow + title; large quote in bold black with oversized `231F20` quote marks, attribution + client logo; right = big gold circle (pale-yellow halo behind) with 90pt rating numeral; bottom strip of grayscale client logos above a green hairline.
12. **Four-column services**: title; 4 columns each = the service's typographic icon, caps bold header (16pt), 4–5 item list (Montserrat Medium 12pt, generous spacing). No boxes — whitespace separates columns. **Icons are fixed per category** — use the bundled purple/pink/blue gradient typographic icons, ~0.5" tall, left-aligned with the column header beside or above it: `icon-workshops.png` → WORKSHOPS, `icon-ux-design.png` → UX DESIGN, `icon-sw-development.png` → SW Development, `icon-ai-data-science.png` → AI & Data Sc. Don't substitute generic icon-library icons for these four categories; for a service outside these four, use a matching-style text treatment (bold caps header, no icon) rather than an off-brand icon.
13. **CTA pair ("What next")**: `assets/statement-double-capsule-sparkle-arc.png` full-width — caps navy word inside the double capsule, caps navy word on the sparkle burst — each with a 2-line navy description below its shape.
14. **Contact closing**: archetype 8 above (full gold, white pills), title "Got a Project? Let's Talk" style in navy 36pt.
15. **Agenda**: white background, NO top-left title — the title rides the accent instead. Items as generous rows down the left two-thirds starting at y≈1.15" (max 6; use two columns of 3–4 if more): each row = the item number in a small gold `FFD700` circle (0.45", navy bold 16pt numeral, no outline) + item title in ink 18–20pt bold, with an optional one-line descriptor in `666666` 12pt below it. Rows spaced ~1.05" apart, all left-aligned on the same x. Right third: one cream arc (`assets/arc-cream.png`, ~7"×4.55" at x:8.2, y:1.2) bleeding off the right edge, with `assets/starburst-yellow.png` (~2.3") anchored at the START (left tip) of the arc (~x:7.55, y:2.45) and the title "AGENDA" (or similar) centered ON the starburst in navy bold caps 20–22pt, `charSpacing: 2`. No connecting lines, no boxes around items, standard footer.

## Layout blueprints (exact specs — follow verbatim)

Seven locked layouts. All coordinates in inches on the 13.33"×7.5" canvas, derived from the 12-column grid (col 1 starts at x:0.49; each column is 0.903" + 0.139" gutter; right margin x:12.85). Full-bleed composition images are the ONE exception to the margin rule — they intentionally bleed off edges; text never does. "Std footer" = logo x:0.49 y:6.85 w:1.3 + lockup right-aligned to x:12.85 y:6.92 w:1.5.

**B1 — Cover** (no footer)
- Logo: x:0.49 y:0.45 w:2.2
- Mega-title: cols 1–4 → x:0.49 y:2.5 w:4.03 h:2.4 — Montserrat Black 38pt ink, 4–6 short lines
- Facts block: x:0.49 y:5.55 w:4.03 h:1.5 — Montserrat Medium 9–10pt, label lines bold
- Arc rings: `cover-arc-rings.png` x:4.6 y:0.35 w:10.5 h:6.83 (bleeds right; covers >60% of the slide area — keep it this large, it's the stage for a custom hero graphic)
- Hero: custom graphic (or product screenshot in a dark circle Ø5.2") placed ON TOP of the rings, centered in them at ≈ x:7.0 y:1.2; the rings must remain visible framing it

**B2 — Agenda** (std footer)
- No top-left title
- Item rows ×5 starting y:1.15, step 1.05: number circle x:0.49 w/h:0.45 (gold fill, navy bold 16pt) · item title x:1.19 w:6.11 — Montserrat bold 19pt ink · descriptor x:1.19 y:+0.36 w:6.11 — Montserrat Medium 12pt `666666`
- Arc: `arc-cream.png` x:8.2 y:1.2 w:7.0 h:4.55 (bleeds right)
- Starburst: x:7.55 y:2.45 w:2.3 with "AGENDA" centered on it — navy bold caps 21pt, charSpacing 2

**B3 — Statement / CTA pair** (std footer)
- Title: cols 1–8 → x:0.49 y:0.45 w:8.2 h:0.7 — 40pt
- Composition: `statement-double-capsule-sparkle-arc.png` x:0 y:1.6 w:13.33 h:5.28 (full-bleed)
- Capsule text: x:2.0 y:2.7 w:3.4 h:1.5 — navy bold 20pt, centered, 2–3 lines (sits inside the double capsule)
- Sparkle label: x:8.2 y:3.05 w:1.7 h:0.6 — navy bold caps 18pt, centered on the sparkle burst
- Optional descriptions: under capsule x:2.0 y:5.35 w:3.4 · under sparkle x:7.85 y:5.35 w:2.4 — navy Montserrat Medium 12pt

**B4 — Services split (paired lists)** (std footer)
- Title: cols 1–8 → x:0.49 y:0.45 w:8.2 h:0.7
- Topic label: cols 1–3 → x:0.49 y:3.0 w:2.9 h:1.0 — navy bold 20pt
- Cards: `list-balloon-cards-pair.png` cols 4–11 → x:3.62 y:1.9 w:8.2 h:4.47
- Left card items ×3: x:4.7 w:2.8 at y:2.55 / 3.95 / 5.1 — navy Montserrat Medium 12pt (its hairlines fall at y≈3.73 and 4.66)
- Right card items ×3: x:8.7 w:2.8 at same y's

**B5 — Three concepts** (std footer)
- Title: cols 1–10 → x:0.49 y:0.45 w:10 h:0.7
- Composition: `three-shapes-on-arc.png` x:0 y:1.7 w:13.33 h:5.24 (full-bleed; starburst and line burst are anchored on the arc's edge — preserve that if adjusting)
- All three phrases: Montserrat ExtraBold 18pt navy `002B5C` (fixed — no variation between shapes)
- Capsule phrase: x:1.3 y:2.55 w:3.2 h:1.0 — centered, 2 lines max
- Sun phrase: x:5.75 y:4.7 w:1.95 h:0.9 — centered, max 2 lines
- Sparkle phrase: x:7.85 y:3.0 w:2.0 h:0.8 — centered over the sparkle's hub, 2 lines max

**B6 — Growth stat** (std footer)
- Label/value pairs ×3: x:0.49 w:4.0, rows at y:1.6 / 3.1 / 4.6 — caps label 12pt `B7B7B7` h:0.3, value navy bold 20pt below
- Burst: `growth-burst-semicircle-dots.png` x:7.43 y:0.8 w:5.9 h:5.74 (near-square aspect 1056:1028; bleeds right)
- Giant numeral: x:7.9 y:2.2 w:3.2 h:2.9 — Montserrat Black 200–230pt navy, straddling the solid half
- Tagline: x:10.15 y:4.75 w:2.6 h:0.5 — navy bold 18pt, among the dots

**B7 — Contact closing** (std footer)
- Background: full `FFD700`
- Title: x:0.49 y:0.6 w:8.0 h:0.8 — navy bold 36pt ("Got a Project? Let's Talk" style)
- White pills ×3, staggered diagonally: email x:2.6 y:1.95 w:4.6 h:0.95 · website x:1.5 y:3.25 w:4.2 h:0.95 · phone x:3.3 y:4.55 w:4.2 h:0.95 — white fill, navy bold 18pt centered, rectRadius half-height
- Optional: circular headshot Ø1.1" overlapping the email pill's left end; white circle Ø1.0" with LinkedIn mark right of it

Any archetype without a blueprint: compose from the grid, thirds, and motif rules.

## Composition rules

- **12-column grid — every slide.** Slides are designed on a 12-column layout with a 20px gutter and 70px left/right margins (spec at 1920×1080; at 144px/inch on the 13.33"×7.5" canvas that's margins of 0.486", gutters of 0.139", and columns of 0.903" — content area 12.36" wide, x:0.49" to x:12.85"). Snap every text block, card, and composition to column edges: e.g. a body text block spans 5–6 columns, the leaf-cards pair spans 8, a footer element sits inside the margin columns. Never let content cross the left/right margins.
- **Rule of thirds — every slide.** Divide the 13.33"×7.5" canvas into a 3×3 grid (vertical lines at x≈4.44" and x≈8.89"; horizontal at y≈2.5" and y≈5.0") and place the key elements on the lines and intersections: titles and text blocks occupy the left column or left two columns, hero visuals (compositions, stats, screenshots) anchor on the right third or right two-thirds, and focal points (a stat numeral, a starburst title, a photo) land on grid intersections — never dead center. When a slide feels off, realign it to the thirds grid.
- Titles always left-aligned; body left-aligned; only pill/CTA labels are centered.
- Generous whitespace — these slides average 40–60% empty white space. Do not fill it.
- Shapes are organic and asymmetric: stagger heights, let shapes bleed off edges, place elements on diagonals. Nothing is grid-locked except the 4-column services slide.
- One dominant gold element per slide + at most one background arc. Don't scatter many small gold bits.
- Emphasis pattern in body text: navy regular with **navy bold** phrases (never color changes mid-sentence).
- No drop shadows, no gradients, no outlines on shapes — flat fills only.
- Never use accent bars, title underlines, or edge stripes.

## Build & QA

1. pptxgenjs, `LAYOUT_WIDE` (13.33×7.5"). Copy bundled assets and reference them with absolute paths.
2. Footer (logo bottom-left, lockup bottom-right) on every content slide; check nothing collides with it.
3. Run the pptx skill's validate script, then render slides to images and visually check: gold shapes behind text (not covering it), navy-on-gold contrast, footer clearance, title alignment at x:0.45".
4. Content should read like the brand voice: confident, short declarative titles, question-form titles for case studies ("How did Intelligaia…?").
