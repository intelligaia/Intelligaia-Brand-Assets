> **Generated page — do not edit here.**
> Source: [`docs/DESIGN-LOG.md`](https://github.com/intelligaia/Intelligaia-Brand-Assets/blob/main/docs/DESIGN-LOG.md). Edit there and run `python3 docs/sync-wiki.py`.

# Design log

Every change request against the brand portal, grouped by what it was actually
about rather than the order it arrived in. Each entry is the ask, the call that
was made, and what shipped.

Last entry: **17 August 2026**.

---

## Phase one · Scale and legibility

The portal was designed at 1440 and fell apart on the monitors people actually
use.

**Content sat in a narrow column on 2K–3K displays.** Introduced a responsive
scale driven by custom properties — `--pad-x`, `--shell`, `--nav-fs`, `--logo-h`,
`--hdr-h`, `--h1`, `--h2`, `--lede`, `--body`, `--meta` — stepping at 1600, 1920,
2400 and 2800. Header stretches end to end; content starts from one consistent
left edge.

**Navigation and body text were too small at 2.5K–3K.** Every nav and type value
moved onto the scale rather than being fixed. Later trimmed again: the header was
still too tall, so every step came down 15%.

**Headings were rendering in Oswald Bold.** Corrected repeatedly — the library
pages carried a second `.hero h1` rule that the earlier fixes had missed. Web
surfaces have no weight above 500; that is now locked with an override.

**Hero heading had double word spacing.** Each word span carried a right margin
*and* the newline between spans rendered as a space. Fixed by writing headings as
plain text and splitting them at runtime.

**Word-by-word reveal existed only on the hero.** Rebuilt as a generic runtime
splitter covering every heading class in the system, not one.

---

## Phase two · Information architecture

**Detail pages were empty section shells.** `.section { min-height: 100vh }` was
turning every short section into a full blank viewport. Removed globally; the
home hero keeps full height through a `body.home` hook.

**Foundations was split across too many pages.** Merged Principles, Colour and
Typography into one complete Foundations page with no onward pages. Breadcrumb
and chapter labels removed.

**Whitepapers were merged into Case studies, then separated again.** The merge
was wrong: they are different formats with different readers. Case studies now
carries client work only; Whitepapers is its own page. `agentvine-case-study.html`
moved from `assets/whitepapers/` to `assets/case-studies/`, where it belonged.

**Whitepapers, case studies and landing pages became asset categories** rather
than examples parked in a folder.

---

## Phase three · Content discipline

**Detail pages carried too much theory.** The order was inverted: lead with the
finished output, then deconstruct it, then give guidelines for producing one with
AI. Theory kept, but minimal.

**Numbering was everywhere.** All `01 / 02 / 03` prefixes removed from headings
and cards, and the rule now holds across the system — step rows use words
(*Read, Take, Check*), never numbers.

**Uppercase attributions and eyebrow labels were doing decorative work.** Removed.
Uppercase survives only below 13px.

**Philosophy copy was set in Oswald.** Display type is for headings; description
text is Geist. Three supporting points moved under the description rather than
beside it, and the three principles became parallel cards with legible do/don't
rather than one stacked column with fine print.

**v2 pages were explaining the structure instead of being it.** Copy cut roughly
in half — 370 words to 160–210 per page. Internal framing language ("two doors",
"one brand, two ways in") removed from anything user-facing.

---

## Phase four · Asset library

**"Brand Assets" was a menu that required a click before any asset was visible.**
Rebuilt so the page *is* the library.

**Construction stages were being shown as if they were versions.** Outline and
geometry are working stages, not alternatives to the final. The library now shows
finals only; the making moved to the asset detail page, shown against the
finished illustration, with a carousel across the category.

**Category cards needed real previews.** Three thumbnails per category, no
zig-zag layout, actual icon/letter/wave previews rather than empty frames.
Characters and devices show one per row.

**Character names were requested repeatedly and never appeared.** Root cause
below in the defects register. Priya, Maya, Aisha, Sofia, Nia, Arjun, David and
Kenji now resolve on every page.

**Figma and Git links** given a consistent, visible position on every asset type,
currently stubbed as *Link pending*.

---

## Phase five · Navigation and identity

**Wordmark.** Stylised text beside the logo with a separator, in a different
family (Syne) with a spectrum gradient. Later renamed from *Brand Assets* to
**Branding**, and the logo stepped down at every breakpoint so it sits with the
nav instead of dominating it.

**Nav label** shortened from *Brand assets* to **Assets**.

**Contact us button** was collapsing — it inherited a height calculation from
`--hdr-h` that zeroed it. Rebuilt with explicit padding and line height.

**Service catalog** gained DNA annotations transcribed from the project files,
a golden-ratio grid toggle, and an icon toggle replacing the carousel/list text
control.

---

## Phase six · Two-section portal

Triggered by Rajiv's note: one repository, two ways in, each with its own home,
navigation and starting page, and room for the skills that are coming.

**Built in an isolated `website/v2/` tree** so the existing site keeps working.
`dark/` and `light/` are untouched; both trees share `assets/` and neither writes
to the other.

**Landing page keeps its full weight.** Choosing a section is a section of the
page, not a gate in front of it.

**Section is derived from the page, never from session state.** A shared link
opens with the right navigation already applied — no cookie, no query parameter
to strip.

**Navigation moved from the top bar into a left rail**, following Atlassian: the
rail lists one section, and only the active branch expands. Group labels —
*Reference / Handoff*, *Documents / Digital / Automate* — give it rhythm.

**The header does not change between landing and section.** An earlier pass had
the top nav disappearing into the rail and a section chip appearing beside the
wordmark; both were removed. One header, one moving highlight.

**Active state stopped being a yellow slab.** It reads as a soft raised
background with a 3px yellow marker at the left edge. Sub-items go yellow in text
only.

**The rail follows the scroll.** Clicking a sub-item jumped correctly but the
rail then stopped reporting position. A scroll spy now moves the marker as you
read, and the URL hash follows via `replaceState`.

**Anchors are derived from each page's own sections** — any section carrying an
eyebrow becomes an anchor and appears under its parent. This is what let the
scroll spy become a rule instead of a special case: Construction, Tokens &
handoff, Skills and both overviews gained sub-navigation without a hand-kept
list, and new sections will too.

**Both overviews were pure type** on a portal introducing an illustration
library. They now lead with real assets, and every card carries a library
thumbnail — Foundations shows the swatches, Asset library shows three categories,
Construction shows its three stages side by side.

**"For agents" was removed from the landing page.** It did not explain itself.
The four machine-readable files are listed on Tokens & handoff, where an engineer
or an agent would look.

**Marketing kit became Collateral**, and audience labels were dropped in favour
of naming the moment you would reach for a section.

---

## Standing rules that came out of this

1. Web surfaces have **no type weight above 500**. Presentations are a separate
   system and stay Montserrat.
2. **No numeric prefixes** on headings or cards, anywhere.
3. Detail pages **lead with the artifact**, then deconstruct, then guide.
4. Only the **final stage ships**. Geometry and outline are documentation.
5. If no asset fits, **report the gap** — never generate one.
6. **The navigation always reports where you are**, both between pages and within
   one.
7. A section is **wayfinding, not a copy**. Nothing is duplicated between them.
8. Build steps must be **idempotent** — see the stacked-rail defect below.

---

## Defects register

Recorded because the causes were non-obvious and two of them had been wrong for
some time.

| Defect | Cause | Fix |
|---|---|---|
| Character names never appeared | Two `window.IG_ASSETS` assignments; the stale one was later in the file and won every time | Removed the stale block. It also lacked `cat`, `bytes` and `path`, which is why File size was blank and "In category" counted 107 instead of 16 |
| Home page blank | A nested Lenis IIFE broke the whole inline script, so no reveal classes were applied and everything stayed at `opacity: 0` | Rebuilt every inline script; added a 1.2s safety net that force-reveals anything still hidden |
| Detail pages blank | JS injected into a `<script src>` tag — the replace matched the first closing tag, which was the CDN tag in `<head>`. Browsers ignore inline content in a script tag with `src` | Rescued the orphaned code into its own block, hoisted data into `<head>`, wrapped in `DOMContentLoaded`. Verification switched from `node --check` to jsdom rendering, because syntax checking cannot catch unreachable code |
| Catalog pages appeared to change size | All the same A4 ratio but exported at 1×, 2× and 3×; `object-fit: contain` in a `min-height` container rendered them differently | Fixed-ratio A4 stage sized from viewport height |
| Hero tight under the header | The spacing rule missed `.fx-hero` and `.ad-top`, so Foundations and Asset detail never received it | Rule extended; clearance raised to 72–132px top |
| Scroll spy silently dead on Foundations | Running the rail step without regenerating stacked a second rail, duplicating the sub-items | `apply_rail` refuses to decorate a page twice |
| Broken preview image | `grid-50x50.svg` was 87KB of 2,500 circles; the browser fell back to alt text | Rebuilt at 400 dots, 24KB |
| Every published asset URL 404'd | 664 stale occurrences of the pre-rename repository name across 9 files | Rewritten to `Intelligaia-Brand-Assets` |
| `var(--ink-faint)` | Used but never defined in `:root` | Replaced with `--ink-muted` |

---

*Current state and timeline: [`STATUS.md`](Status).*
