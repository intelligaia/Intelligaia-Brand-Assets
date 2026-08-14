---
name: intelligaia-agentic-pages
description: Build AND repair pages on Intelligaia's dark agentic site (the `Agentic-Home/` folder) — the v11 system behind the L0 landing page and about, work, services, technology, careers, contact, blog, the `portfolio/<slug>/` case studies and the `post/<slug>/` articles. Black canvas, Oswald display over Geist body, one shared rail that scales to 3K, scroll-driven word reveals, one section per gesture, and a level system (L0 reel → L1/L2 document → L3 article) that fixes each page's budget before it is built. Use whenever the user (a) asks for a new page, section or sub-page on the agentic / dark / v11 site; (b) asks to fix, align, restructure or make consistent an existing one — a hero or heading that starts at a different point from the other pages, a page that "doesn't line up", inconsistent backgrounds or widths, a broken rail, type drifting off the system, mono or extra typefaces creeping back in, scrolling that jumps or skips a section, a reveal that never fires, a section that shows half-cropped; (c) asks to convert the landing page into another page; or (d) says "in the v11 style" / "like the About page" / "like the rest of the site" / "match the landing page". NOT for intelligaia.com's white Wix homepage concepts — that is intelligaia-landing-pages. NOT for standalone light-theme portfolio case-study HTML — that is ux-case-study; this skill owns the DARK site's own `portfolio/` pages.
---

# Intelligaia Agentic Page System (v11)

Build pages that sit on a near-black canvas and read as one continuous argument rather than a stack of components. The look: `#04050a` ink, one enormous Oswald headline per beat, Geist for everything you actually read, a single content rail every page shares, real photography rather than illustration, and motion that plays *as you scroll* — words assembling one at a time, images rising last. Never a card grid where a paragraph would do. Never a gradient where a hairline would do.

Every page in this system is **one self-contained HTML file** — inline `<style>`, inline `<script>`, GSAP + ScrollTrigger + Lenis from CDN, assets beside it in a folder. There is no build step and no framework.

## 🔴🔴 RULE 1 — USE THE GLOBAL HEADER AS IS

Before anything else on this page: **the header is a locked component, not a thing you build.**

`reference/header.html` + `reference/header.css` are extracted verbatim from the L0 landing page. Paste both into the page. Do not re-derive them, do not abstract them behind a variable, do not simplify them, and **do not copy only the part the page seems to need.**

**How it is defined — one component, four responsive states:**

| | brand logo | nav | CTA | header height | side padding |
|---|---|---|---|---|---|
| **≥1921** big-monitor band | `clamp(48px,2.8vw,70px)` | `1.02rem` | surface `1.04rem`, icon `clamp(28px,1.6vw,40px)` | 111 → 128 | `clamp(2.5rem,3.5vw,7rem)`, block `.95rem` |
| **1181–1920** default | `38px` | `clamp(.78rem,.87vw,.95rem)` uppercase, `ls .07em` | 43px tall | 69 | `3vw`, block `.82rem` |
| **≤1180** | `38px` | **hidden** — `#navBtn` appears, `#navsheet` takes over | 43px | 69 | `3vw` |
| **≤640 / ≤400** | `30px` | sheet | ≤400 drops the label, icon only | 63 | `4vw` |

Fixed order, never rearranged: **brand → `#gnav` → `.hdr-right` (hamburger, then CTA)**. The hamburger sits *before* the CTA inside `.hdr-right` so the row collapses in the right order at 1180.

Other locked facts: `position:fixed`, `rgba(11,13,20,.38)` + `blur(18px) saturate(150%)`, `box-shadow:0 10px 30px rgba(0,0,0,.22)`, no bottom border. Nav rest colour `rgba(244,246,255,.62)`; hover and active go `#fff` and wipe a 1.5px gradient underline via `::after{transform:scaleX(0)→(1)}`.

🔴 **Exactly one `<a>` in `#gnav` carries `aria-current="page"`.** It is what draws the underline. None looks orphaned; two looks broken. On a `portfolio/<slug>/` or `post/<slug>/` page the active link is its **section** — Work or Blog — and every `href` needs `../` prefixes.

🔴 **The CTA is a `<button>`, not a link.** It opens the in-place discovery agent where you click. Never point it at the home page with `?agent=1`.

### Why this is Rule 1

An earlier pass re-expressed the header padding as a `--hdrpad` variable and carried across only `padding-inline`. It silently dropped two rules from the ≥1921 block — `padding-block:.95rem` and `#gnav a{font-size:1.02rem}` — so above 1921 **every sub-page had a header 6–7px shorter than the landing page's, with nav links a step smaller:**

| | 2560 | 3440 |
|---|---|---|
| header height, home → sub | 111 → **105** | 128 → **121** |
| nav link size, home → sub | 21.78 → **20.28** | 27.54 → **25.65** |

Nobody copies a component wrong on purpose. They copy the part they were looking at. **So: the whole block, or none of it.**

## What is in this folder

```
intelligaia-agentic-pages/
  SKILL.md              ← the system: shell, colour, type, motion, cards, traps
  levels/               ← WHICH page you are building, and what it may spend
    L0-landing-page.md    the reel — 21 sections, 3 arcs, the apparatus
    L1-about.md           the worked descent — 21 sections became 9
    L2-pages.md           services · work · technology · careers · contact · blog
    L3-detail-pages.md    portfolio/<slug>/ · post/<slug>/
  reference/            ← the code. Copy VERBATIM; not starting points to adapt.
    header.html · header.css     🔴 RULE 1 — the locked global header
    shell.css · hdrh.js · motion.js · pager.js · archetypes.html
```

**Read `levels/` first.** It decides what the page IS and what it is allowed to spend. This file decides how it is built. Do not start writing markup until you know the level.

| File | What it is | Where it goes |
|---|---|---|
| `reference/header.html` | 🔴 **RULE 1** — the global header markup, verbatim | first thing inside `<body>` |
| `reference/header.css` | 🔴 **RULE 1** — the global header's four responsive states, verbatim | in `<head>`, before the shell |
| `reference/shell.css` | The page column, the hero line, the H1 scale, `#bg`, `.lede` — **not the header** | **LAST rule in `<head>`** |
| `reference/hdrh.js` | Measures the header into `--hdrh`; the hero line and any sticky rail read it | just before `</body>` |
| `reference/motion.js` | The `data-rv` reveal engine + the word-by-word body-copy upgrade | inside the page's main `<script>`, after Lenis is created |
| `reference/pager.js` | One section per wheel gesture, with free zones — **L0/L1/L2 only, never L3** | just before `</body>` |
| `reference/archetypes.html` | Markup for 8 section archetypes, lifted from shipped pages | copy the block, swap the words |

## The levels, in one table

> 🔴 **RULING — 13 Aug 2026. Two levels are in play, not four.**
> **L0 is the home page, and only the home page. Every other page is L1** — About Us, Work,
> Services, Technology, Careers, Contact, Blog, the 15 case studies and the 11 articles.
> **L2 and L3 are reserved: not defined, not in use.** The three-way split below is historical.
> Where a table or a sentence in this skill says L2 or L3, read it as L1 until L2 and L3 are
> defined. Do not label a new page L2 or L3.
>
> One property survives and is worth keeping when they are eventually defined: the case studies
> and articles run with the **scroll pager off**, because long-form reading needs free scrolling.
> That belongs to long-form reading, not to a level.

| | **L0** | **L1** | **L2** | **L3** |
|---|---|---|---|---|
| what | the landing page | About | services · work · technology · careers · contact · blog | portfolio/ · post/ |
| file | `intelligaia-agentic-home-waves-intro-v11.html` | `about.html` | six files | 26 files |
| it is | a **reel** | a **document** | a **document** | an **article** |
| detail | `levels/L0-landing-page.md` | `levels/L1-about.md` | `levels/L2-pages.md` | `levels/L3-detail-pages.md` |

🔴 **L0 is the reference for the shell** — its header padding, content proportion and hero rhythm are what every level below copies. Never change L0 to make a sub-page match.

🔴 **The four L0 rules are locked and live in `levels/L0-landing-page.md`:** L0-1 the Geist Pixel hero and its line-by-line reveal · L0-2 auto-scroll plus snap, with L0's own slower glide constants · L0-3 the next section in Oswald, word by word at stagger 0.247 · L0-4 the chapter break — one card, 22px radius, gradient hairline, and one family of background artwork across all three chapters. Read them before touching the landing page.

## 🔴🔴 THE SHELL — the home page is the reference, on every page

**Three things are one thing, and the home page defines all three.** Every page in the system — L1, L2, L3 — must land on the same numbers as `intelligaia-agentic-home-waves-intro-v11.html` at every width. If a new page moves the header, the shell is wrong, not the page.

```css
:root{
  --gut:  clamp(20px, 4.4vw, 128px);
  --page: 88vw;                /* home's proportion — exact at every width */
}

/* 🔴 the header is NOT here — it is reference/header.css, verbatim. See RULE 1. */
.wrap, .awrap, .bwrap, .csmeasure, .hvid, #sitefooter .ft-grid,
main > section:first-of-type .pmeasure{
  width: min(var(--page), calc(100% - var(--gut) * 2));
  margin-inline: auto; padding-inline: 0;
}
main > section:first-of-type{
  align-items: flex-start;
  padding-top: calc(var(--hdrh, 72px) + clamp(4.6rem, 21vh, 22rem));
  padding-bottom: clamp(3.2rem, 7vh, 5.6rem);
}
```

🔴🔴 **THE HEADER IS NOT ON THE CONTENT RAIL.** This is the single most expensive mistake in the system and it has been made once already. The header hugs the screen at `3vw` (see RULE 1) while the content sits inboard at `6vw` — they are *deliberately different*, and the header's value belongs to the header component, not to this shell. An earlier pass bound the header to `--railpad` (`max(gutter, (100vw − colmax)/2)`), which **centres a column**, so above 1920 the header padding exploded and the logo walked inboard of where the home page puts it:

| logo x | 1440 | 1920 | 2560 | 3440 |
|---|---|---|---|---|
| home | 43 | 58 | **90** | **120** |
| sub-pages on `--railpad` | 63 | 63 | **302** | **520** |

400px adrift at 3K. That is what "the header changes on every new page" means. **A column-centring value must never touch the header.**

**The numbers every page must hit** — verify these, they are the acceptance test:

| | 390 | 1440 | 2560 | 3440 |
|---|---|---|---|---|
| logo x / header pad | 16 | 43 | 90 | 120 |
| content left edge | 23 | 86 | 154 | 206 |
| content width | 343 | 1267 | 2253 | 3027 |
| H1 left edge | 23 | 86 | 154 | 206 |

Content width is **88vw at every width** — `1267/1440 = 2253/2560 = 3027/3440 = 0.88`. Not a `max-width` cap. A hard cap (`--colmax: 2400px`) is what made sub-pages stop growing while the home page kept going.

🔴 **The hero line is measured, not constant.** The home headline sits ~21vh below the header at every size (192/900 · 295/1400 · 290/1440). The header itself grows with `:root` — **69 → 111 → 128px** — so the hero's `padding-top` must read a measured `--hdrh`, never a literal. One tiny script on every page:

```js
(function(){ var h=document.querySelector('header'); if(!h) return;
  function s(){ document.documentElement.style.setProperty('--hdrh',
    Math.round(h.getBoundingClientRect().height)+'px'); }
  s(); addEventListener('resize',s);
  if(window.ResizeObserver) new ResizeObserver(s).observe(h);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(s);
})();
```
`--hdrh` serves the hero AND any sticky filter rail. Measure once, use twice.

## 🔴 ONE HEADING — every page below L0

The landing page keeps its own display treatment. **Everything below it uses this and only this:**

```css
main > section:first-of-type h1{
  font-family:'Oswald',sans-serif;
  font-weight:400;                             /* REGULAR. Not 200, not 300. */
  font-size:clamp(2.4rem, 5.3vw, 5.6rem);      /* 34 · 76 · 120 · 151 */
  line-height:1.05; letter-spacing:.004em;
  max-width:16ch; text-wrap:balance;
}
```

The sub-pages shipped at **weight 200 and 300, at seven different sizes** — 64px to 100.8px at 1440 — so no two pages opened the same way. One weight, one scale, one measure.

**Placement:** always top-aligned at the shell's hero line, always on the content rail, always the first thing in the section. 🔴 No eyebrow, no breadcrumb, no label above it.

**Animation, identical on every page:** `data-rv="words"` on the H1 (stagger 0.115) → `data-rv="copy"` on the lede (stagger 0.03, `data-delay="0.45"`) → everything else `rise`. One trigger at `top 68%`. A page whose headline animates differently from its neighbours reads as a different site.

The lede under it is fixed too: Geist 400, `clamp(1.04rem,1.24vw,1.3rem)/1.64`, `max-width:66ch`.

## Two things the shell does not cover

**Reading measures** (`.pmeasure` for an article, `.ameasure` for a narrow beat) stay narrow but must GROW, not freeze:
`min(calc(100% - 2*var(--gut)), 1060px, calc(770px + max(0px,(100vw - 1440px))*0.22))`. A 770px column with type that scales around it loses characters per line as the screen grows. 🔴 The hero's measure is exempt — the first section is always on the full page column.

🔴 **`:root{font-size:clamp(16px,0.834vw,27px)}` is already in the shell and does the TYPE half.** 16px at 1920 → 21.4 at 2560 → 27 (capped) at 3440, so every `rem` ceiling and every `ch` measure scales for free. What does NOT scale is anything capped in hard `px` — grep for bare `px` caps whenever you widen something.

🔴 **The shell block must be the LAST rule in `<head>`.** The page's own `@media (min-width:1921px)` sits near the top with the same specificity, so a copy appended anywhere earlier looks right in the source and changes nothing on screen.

## Color

| Token | Value | Use |
|---|---|---|
| Ink | `#04050a` | The canvas. Everything sits on this. |
| Gradient | `linear-gradient(90deg,#33dbe0,#8a6cf0 55%,#d84a98)` | `--grad`. Numerals, rule marks, the one primary button, hover underlines. **Never a background fill behind text.** |
| Paper | `#f4f6ff` | Headlines, `<b>`, the active filter chip's fill |
| Body | `rgba(244,246,255,.72)` | Descriptions and body copy |
| Muted | `rgba(244,246,255,.5)` | Labels, roles, captions |
| Hairline | `rgba(255,255,255,.09)` → `.13` | Every divider and card border in the system |
| Surface | `rgba(255,255,255,.03)` | Card and panel fills. That is the only fill value. |

**One background, every page** — a neutral wash over the ink, never a coloured one:
```css
#bg{ background:
  radial-gradient(46% 40% at 78% 8%,  rgba(255,255,255,.11), transparent 68%),
  radial-gradient(52% 44% at 8%  32%, rgba(255,255,255,.13), transparent 70%),
  radial-gradient(44% 40% at 88% 78%, rgba(255,255,255,.09), transparent 70%) }
```
🔴 Cyan/violet/magenta radials were tried on six pages and About kept a neutral set — the site read blue on some pages and black on others. **The home page reads black. Neutral wins everywhere.**

🔴 **A sticky bar must tint NOTHING.** Any opaque fill differs from what is behind it, so where it starts you get a hard horizontal step across the full width. Blur only: `background:rgba(4,5,10,.42); backdrop-filter:blur(16px) saturate(130%)` plus a hairline bottom border. A gradient does not fix this — it just moves the step.

## Typography — ONE system

| Role | Face | Size |
|---|---|---|
| Page headline `.huge` | Oswald 200 | `clamp(2.7rem,7vw,7rem)` · `max-width:16ch` |
| Section headline `.big` | Oswald 300 | `clamp(2.2rem,5vw,4.8rem)` · `max-width:19ch` |
| Sub-headline `.mid` | Oswald 300 | `clamp(1.7rem,3.4vw,3.2rem)` · `max-width:22ch` |
| Lede / description `.lede` | **Geist 400** | `clamp(1.04rem,1.24vw,1.3rem)/1.64` · `max-width:66ch` |
| Body `.say`, `p` | **Geist 400** | `clamp(1rem,1.2vw,1.2rem)/1.68` · `max-width:62ch` |
| Label / eyebrow / role | **Geist 500** | `10–11px`, `letter-spacing:.2em`, uppercase |
| Numerals, stats, list markers | Geist Pixel → Geist | clipped to `--grad` |
| Footer accent only | Fraunces | — |

🔴🔴 **THERE IS NO MONOSPACE FACE IN THIS SYSTEM.** IBM Plex Mono and Geist Mono were both removed from all 34 live pages on 11 Aug 2026 — 879 declarations. Do not reintroduce either, and do not reach for `ui-monospace`, `SFMono-Regular` or a bare `monospace` when you need a label. **Four families, and that is the whole set: Oswald, Geist, Geist Pixel, Fraunces.**

The label look — 10 px, `.2em` tracking, uppercase — is carried by **tracking and size, not by the face**. Geist 500 at that size is within a hair of IBM Plex Mono 500 and about 10 % narrower, which is a gain: a mono face wastes horizontal space on a caps label.

🔴 **A label rule must state `font-weight:500` explicitly.** IBM Plex Mono was only ever *loaded* at 500/600, so a rule that named it with no weight still rendered at 500. Geist loads `100..900`, so the same rule silently falls to 400 and every label on the page goes light. This is why the removal inserted 522 explicit `font-weight:500` declarations.

🔴 **Geist Pixel ships ONE weight (400).** Never set a weight on a numeral rule that leads with it — the browser fake-bolds the pixel face.

### 🔴🔴 THE THUMB RULE — what a page opens in

| | opens in | description in |
|---|---|---|
| **L0** the landing page | **Geist Pixel 400** — `clamp(2.76rem,6vw,6.45rem)`, the only Pixel headline on the site | Oswald, word by word (`#about`) |
| **L1 · L2 · L3** everything else | **Oswald 400** — `clamp(2.4rem,5.3vw,5.6rem)` | **Geist 400**, smaller — `clamp(1.04rem,1.24vw,1.3rem)/1.64`, `max-width:66ch` |

**Below L0, Geist Pixel is numerals only.** Never open a sub-page in Pixel; never open the landing page in Oswald. The Pixel headline is what tells you you are on the front door, and it stops meaning that the moment a second page uses it.

Sub-page headline weights are **Oswald Regular (400)**, or Medium (500) where a page needs more presence. Never 200 or 300 — those shipped once, across seven different sizes, and no two pages opened the same way.

🔴🔴 **OSWALD IS DISPLAY ONLY.** Geist carries every description and everything smaller. This rule has been broken three times — most recently `.lede` shipped as Oswald 300 on all seven sub-pages, a display face doing body work, and the user caught it. If a block of text is meant to be *read* rather than *seen*, it is Geist.

Fraunces is a footer accent and nothing else. Geist 500 uppercase is for labels, never sentences.

The font `<link>` is exactly this — four families, nothing else:
```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Oswald:wght@200;300;400;500;600&display=swap" rel="stylesheet">
```
Geist Pixel is self-hosted from jsdelivr as an `@font-face`, not from Google. Inter is the metric fallback behind Geist, never named on its own.

## Motion

Declarative. Put the attribute on the markup; `reference/motion.js` does the rest.

| attribute | effect |
|---|---|
| `data-rv="words"` | headline assembles word by word — stagger **0.115** |
| `data-rv="copy"` | body copy assembles word by word — stagger **0.03** |
| `data-rv="rise"` | fade + rise + de-blur as one block; `data-delay="0.4"` offsets it |
| `data-rv="seq"` | children arrive one after another, stagger 0.16 |
| `data-count="27"` `data-suf="+"` | numeral — **renders at its authored value, does not count up** |

**The beat, in order, per section:** headline → description → supporting elements → imagery last, fading up from below. Fire them off ONE trigger at `top 68%`; on separate triggers they arrive as three unrelated events instead of a beat.

🔴 **The two staggers are not interchangeable.** A 45-word paragraph at the heading's 0.115 takes seven seconds to finish arriving.

🔴 **`[data-rv="rise"]{opacity:0}` is a CSS RULE, and word-splitting animates the CELLS, not the element.** Any element you split must also get `gsap.set(el,{autoAlpha:1})` or you ship an invisible paragraph with 47 perfectly visible words inside it. This has blanked a hero lede and a whole section's body copy in delivered builds, and **the user reports it as deleted content**, not as a motion bug.

🔴 **No count-up numerals.** Stats render at their authored value from first paint. The page used to sit reading "0+ years of product craft" until you scrolled to it, and stayed at 0 for anyone who never got that far. One sanctioned exception exists (a stat inside a sticky stage that counts at the moment it becomes visible, so a zero is never on screen) — do not add a second.

## The scroll — one section per gesture

`reference/pager.js`. A capture-phase `wheel` listener on `window` runs BEFORE Lenis, calls `preventDefault() + stopImmediatePropagation()`, and glides to the next rest point with `lenis.scrollTo(y,{lock:true, easing:easeInOutCubic})`. One step per gesture: a `performance.now()` gap over 120ms starts a fresh gesture; momentum inside it is swallowed. Disabled at ≤900px and under `prefers-reduced-motion`.

Because every effect reads scroll POSITION, gliding through a section auto-plays its word reveal for free. No reveal code changes.

**Rest points:**

| section height | rest points |
|---|---|
| `≤ vh - 30` | one, centred |
| `≤ vh + 140` | one, top-aligned — a section 43px over the viewport does not deserve two stops |
| taller | top-aligned, then bottom-aligned |

Dedupe anchors at **90px**. At 24px a section's top and bottom both survived and one gesture went nowhere.

🔴 **Any section whose content is scroll-choreographed must be a FREE ZONE** — the pager parks at the entrance, hands scrolling back to Lenis so the stage scrubs as authored, and grabs the wheel again within `0.14` of a screen from the exit. Sticky stages and sequential letter reveals ARE the choreography; snapping past one collapses it into a single frame.

🔴 **A section exactly one viewport tall computes a ZERO-WIDTH free zone** (`top + h - vh === top`) and the pager sails straight through. If its sequence plays on the *approach* — triggers between 92% and 20% of the viewport fire before the section lands — the free stretch is the screen-height BEFORE it: `if(to - from < vh*0.6){ from = top - vh; to = top; }`

🔴 **The zone test must be direction-aware.** A symmetric `y > from && y < to` means you are not yet inside at the entrance, so the very first wheel steps clean over the whole stage. Down: free from the entrance. Up: free from the exit.

**"No half sections" cannot mean "one screen"** for a section 1.8 screens tall. It means never resting at an arbitrary point inside one.

## Levels — what a page is allowed to spend

**The per-level budgets live in `levels/`.** Read the file for the level you are building before anything else; it is the shortest path to not building the wrong page. The summary:

> 🔴 **RULING — 13 Aug 2026. Two levels are in play, not four.**
> **L0 is the home page, and only the home page. Every other page is L1** — About Us, Work,
> Services, Technology, Careers, Contact, Blog, the 15 case studies and the 11 articles.
> **L2 and L3 are reserved: not defined, not in use.** The three-way split below is historical.
> Where a table or a sentence in this skill says L2 or L3, read it as L1 until L2 and L3 are
> defined. Do not label a new page L2 or L3.
>
> One property survives and is worth keeping when they are eventually defined: the case studies
> and articles run with the **scroll pager off**, because long-form reading needs free scrolling.
> That belongs to long-form reading, not to a level.

| | **L0** | **L1** | **L2** | **L3** |
|---|---|---|---|---|
| sections | 18–22 | 8–10 | 5–8 | 6–10 |
| narrative | 3 arcs | 1 arc | 1 arc | 1 arc |
| pinned / sticky | ≤6 | ≤2 | ≤1 | 0 |
| free zones | ≤2 | ≤2 | ≤1 | 0 |
| interactive | ≤4 | 0 | 0 | 0 |
| canvas | 1 | 0 | 0 | 0 |
| auto-advance | yes | no | no | no |
| pager | on + auto-driver | on, plain | on, plain | **off** |
| glide | `780 / 1.25–2.9s` | `900 / 0.85–2.4s` | `900 / 0.85–2.4s` | — |
| words / section | ≤25 | ≤70 | ≤90 | free |
| bespoke JS sections | expected | ≤2 | 0 | 0 |
| layout | full-bleed staged | the shell | the shell | shell + `.pmeasure` |

### 🔴🔴 The three laws of descent

1. **Below L0, nothing waits.** L0 affords a section that only pays off after twelve seconds because it plays itself. A reader on a sub-page is hunting. This is why the role toggles, the reasoning chat and the gated globe→map have no descendants.
2. **Each descent demotes one rank, it does not delete.** A chapter that was its own section becomes a `.kick` eyebrow; an eyebrow becomes a chip; a chip is dropped. On About, all three of L0's case-study title cards became eyebrows. Never cut a beat in one step.
3. **Bespoke becomes declarative.** If a section cannot be expressed as `data-rv` plus CSS, it does not exist below L0. About's two exceptions (`#anum`, `#agood`) are the entire L1 allowance, and both are free zones.

### Write the SPEC before the markup

L0 does not discover its structure, it **declares** it — and so should every page. Write this array first, with a one-sentence claim beside each id, and no HTML at all:

```js
var SPEC=[
  {id:'hero',  align:'top'},                 // align: 'top' | 'center' (center only if shorter than the viewport)
  {id:'astd',  align:'top'},
  {id:'anum',  align:'top', free:true},      // free: the pager hands scrolling back so the stage scrubs as authored
  {id:'acta',  align:'top'}
];
```

This is where a nineteen-section page becomes a seven-section page, at a cost of ten minutes. If the claims do not read as one coherent argument top to bottom, no amount of markup will fix it.

### The descent table — an L0 pattern → what it becomes below L0

| L0 pattern | its job | descendant archetype | levels |
|---|---|---|---|
| two lines over the wave canvas | the claim | **1 · Hero** | L1 L2 L3 |
| pinned paragraph with inline glyphs | the positioning | **2 · Argument beat** over a dulled plate | L1 L2 |
| case-study title card | chapter marker | **`.kick` eyebrow** on the next section | L1 L2 L3 |
| stacked cards, one stop per card | three parallel things | **3 · The ladder** | L2 |
| pinned before → after reveal | the mechanism | **4 · Sticky stat stage** | L1 (max 1) |
| a word compressing | one word carries the idea | **5 · Letter manifesto** | L1 (max 1) |
| the proof shots | the evidence | **6 · Image-led card grid** | L2 |
| role toggle (two states) | "it adapts to you" | **8 · Diptych**, no interaction | L1 L2 |
| the product shot | the build | **9 · Full-bleed**, pre-cropped | L1 L2 |
| split-flap letters, canvas bubbles | proportions, figures | **10 · Stat band**, authored values | L1 L2 |
| a one-line beat of silence | pacing | **2 · Argument beat**, short form | L1 L2 |
| the contact form | the close | **11 · Close** | L1 L2 L3 |
| the reasoning chat · the gated globe→map · the wave canvas | — | **do not descend** | L0 only |

### The five moves

**① STRIP** — delete the reel apparatus (dwell, auto-driver, pin, canvas, toggle) and state what is left in one sentence. *Test: the sentence names the argument, not the animation.*

**② SPINE** — write the SPEC. *Test: section count is inside the level's budget and the claims read as one argument.*

**③ CAST** — assign each claim an archetype. *Test: no archetype twice in a row, at least four distinct, exactly one hero and one close.* 🔴 Two pages using the same six archetypes in the same order **are the same page**.

**④ BIND** — shell last in `<head>` → archetype markup unchanged → motion attributes on one trigger at `top 68%` → the `FREE` map → first section top-aligned. *Test: header padding = content left = H1 left, to the pixel.*

**⑤ PROVE** — headless, per Build & QA below. *Test: all five assertions at 1440 · 2560 · 390.*

## Page anatomy

Every L2 page is the same skeleton:

```
header (fixed, on the rail)
main
  section  ← hero: H1 + one lede line. NOTHING ELSE.
  section  ← the argument
  section  ← the evidence
  …
  section.close  ← CTA
footer #sitefooter
#toTop, #agent (the discovery wizard, on every page)
```

🔴 **No eyebrow, no breadcrumb, no label above the H1.** The page opens on its headline and one line of description. Section eyebrows deeper down are fine and carry the rhythm — killing those guts the page. This applies to every L2 page and to case studies; where a case study's client and industry are real information, they move DOWN into the chip row rather than being deleted.

🔴 **The first section must be top-aligned.** `.st{min-height:100vh;display:flex;align-items:center}` vertically centres the hero, so the headline's y becomes a function of how tall that page's hero content happens to be — 144 on one page, 178 on another, 250 on a third. Padding cannot fix a centred box:
```css
main > section:first-of-type{
  align-items:flex-start;                      /* NOT min-height:auto — the hero still holds a screen */
  padding-top:    clamp(8.4rem, 17vh, 14rem);
  padding-bottom: clamp(3.2rem, 7vh, 5.6rem);
}
main > section:first-of-type h1{ margin-top:0 }
```
Result: every page's H1 lands at the same y — 153 at 1440, 238 at 2560, 143 at 390.

## Section archetypes

Pick 5–8 per page and vary the rhythm. **Reuse the data, never the structure** — two pages that use the same six archetypes in the same order are the same page.

1. **Hero** — H1 `.huge` + `.lede`. Optionally one credibility strip (a mono row of client names) or a showreel figure. No eyebrow.
2. **Argument beat** — eyebrow + `.big` headline + two `.lede` paragraphs, over a dulled full-section photographic plate (`opacity:.32`, `saturate(.7)`, a left-weighted ramp because the copy runs down the left rail). 🔴 The plate's parallax **travel must be less than its headroom** (`inset:-16%` top and bottom, translate 8% of travel) or scrolling back up exposes the section behind it.
3. **The ladder** — three numbered rungs, each a `.85fr 1.15fr` grid: name + verb + one paragraph + a "what you leave with" box on the left, and the capabilities as a **two-column definition list** on the right. 🔴 A list, not a card grid — boxing twenty items rebuilds the wall you are trying to remove.
4. **Sticky stat stage** — a section of `240svh` with a `position:sticky; top:0; height:100svh` stage inside it. One progress value read off the section's own rect (`p = -r.top / (r.height - vh)`) drives everything. Stats land, then a full-bleed photograph rises from below the fold and **STAYS** — the sticky release carries it out. 🔴 See the black-gap rule below.
5. **Letter manifesto** — a centred full-viewport beat where a word assembles one letter at a time from individual SVGs, each on its own SECTION-relative trigger so it plays out as you scroll rather than firing at once. Play-once, never scrubbed.
6. **Image-led card grid** — the card IS the picture. Cover + client label + a four-word title. The sentence appears **only on hover**. Frame masks, IMAGE scales (never the `<a>`, that scales the type too), veil fades in, sentence translates up 14px, a gradient underline wipes across the title via `background-size:0% 1px → 100% 1px`.
7. **People grid** — one flat 4-up grid, every cell identical. Square frame, `object-fit:contain`, no mask, no rounding, no hover scale, no size tiers. 🔴 Tiered sizes read as a ranking, not a team.
8. **Diptych / triptych** — two or three photographs on the rail, equal, zoomed in at export rather than by CSS transform.
9. **Full-bleed** — `width:100vw; margin-left:calc(50% - 50vw)`, with an edge ramp on all four sides so the picture dissolves into the page instead of ending on a rectangle.
10. **Stat band** — 3–4 figures on hairline-topped columns, numerals clipped to `--grad`, a caveat line beneath in muted grey.
11. **Close** — headline + two CTA panels, one opening the discovery agent, one a link.

## 🔴 The card — one treatment, three sizes

Every card on the site is the same object at a different scale. The reference implementation is `work.html`'s `.pfc`. Do not invent a second card.

**Anatomy, at every size:** `FRAME` masks → `IMAGE` scales → `VEIL` fades → `BODY` sits below.

🔴 **The BODY sits OUTSIDE the frame and carries no surface and no border.** The picture is the card. Boxing the whole thing — background fill, border, `overflow:hidden` around body and image together — rebuilds the wall the layout is trying to remove. The blog grid shipped boxed and had to be unboxed.

🔴 **The VEIL exists to carry a sentence the card has no room for.** If the sentence is already visible in the body, the card has **no veil**. Work cards have one (their description lives only on hover); blog cards do not (their excerpt is on the card).

**The five moves, all on hover, all at once:**

| # | what | value |
|---|---|---|
| 1 | card lifts | `translateY(-6px)` L/M, `-4px` S · `.55s cubic-bezier(.19,.66,.24,1)` |
| 2 | frame brightens + glows | border `rgba(255,255,255,.09) → .24` · `box-shadow:0 28px 64px -30px rgba(138,108,240,.6)` |
| 3 | image scales | `scale(1.055)` over `1.1s` · `filter:saturate(.86) brightness(.9) → saturate(1) brightness(1)` |
| 4 | veil fades in | `opacity 0→1` `.5s`; its `<p>` `translateY(14px)→0` `.55s` delayed `.06s` |
| 5 | **the line animates** | the title's gradient underline wipes: `background-size:0% 1px → 100% 1px` over `.55s` |

Move 5 is the signature. `background-image:var(--grad); background-repeat:no-repeat; background-position:0 100%; padding-bottom:.14em`. It is the **only** sanctioned use of the gradient on a card.

**The three sizes:**

| | **L — feature** | **M — standard** | **S — compact** |
|---|---|---|---|
| where | the one hero card on a page (`.feat`) | grids (`.pfc`, `.bpost`) | dense/related lists |
| layout | 2 columns, `1.12fr .88fr`, picture left | stacked, picture on top | stacked |
| frame radius | `18px` | `14px` | `12px` |
| frame aspect | `16/10` | `1.734` work · `16/10` blog | `16/10` |
| title | Oswald 300 `clamp(1.8rem,3vw,2.85rem)` | Oswald 300 `clamp(1.14rem,1.5vw,1.5rem)` | Oswald 300 `clamp(1rem,1.2vw,1.15rem)` |
| lift | `-6px` | `-5px` | `-4px` |
| collapses to 1 column | ≤900px | ≤1080px → 2-up, ≤700px → 1-up | ≤700px |

**Grid rhythm — one value, every page.** `gap: clamp(2rem,3.4vw,3.2rem) clamp(1.3rem,1.9vw,2rem)`. The row gap is deliberately larger than the column gap: cards need more air between rows than between neighbours, because a row boundary is where the eye resets. Work shipped at roughly half this and read as a contact sheet.

**Labels on a card.** A category chip over the image is `rgba(4,5,10,.62)` + `blur(8px)` + a hairline, text at `.72` — never a colour fill. A flag above a title (`Latest · AI User Experience`) is **muted grey with a 20px gradient rule before it**. 🔴 Coloured label text (the flag shipped in cyan) is off-system: the gradient is the rule mark, not the type.

**Bylines.** A 40px round portrait (46px on L), `object-fit:cover; object-position:50% 34%`, on a `rgba(255,255,255,.06)` disc with a `.14` hairline. Where there is no photograph, the **same disc with initials in Geist 500** — 🔴 never the gradient behind the letters, which violates the colour rule and makes the people without a portrait the loudest thing on the page.

## The sticky filter rail

🔴 **A sticky rail must be completely invisible until it has actually pinned.** Carrying its blur and tint from first paint puts a translucent band across the hero that no other page has — and it reads, correctly, as *"this page has a different background"*. Transparent in flow; a `.pinned` class adds `rgba(4,5,10,.62)` + `blur(16px) saturate(130%)` + a hairline. Transition all three over `.32s`.

🔴 **Its `top` must be the header's MEASURED height, not a number.** The header grows with `:root` above 1921px (69px → 105 → 121), so any fixed `top` leaves a gap on a bigger screen and page content scrolls through it — the "small cut above the tabs". Set `--hdrh` from JS on load, on resize, via `ResizeObserver`, and after `document.fonts.ready`; then `top:var(--hdrh)`. Add `#rail::before{top:-2px;height:2px;background:inherit}` for the sub-pixel seam.

Detect the pin with a zero-height sentinel immediately before the rail, not with the rail's own rect — the rail's rect stops moving once it sticks.

**Filters: six chips maximum, one line.** Drop any facet carrying a single item; it is not a filter, it is a tag. Chips are `.42rem .78rem`, radius `8px`, `.78rem` Geist 500 — the active one is paper fill on ink text, never the gradient.

## Photography

Real photographs, always. No stock, no illustration, no 3D render.

- **Export**: 2200px wide (2600 for anything full-bleed), quality 80–88, progressive, `optimize=True`. **PIL, not ffmpeg** — 🔴 `ImageOps.exif_transpose` is mandatory; ffmpeg's `scale` filter ignores EXIF orientation and will export a portrait lying on its side.
- 🔴 **Pre-crop to the target aspect rather than fighting `object-position`.** If the frame is 21:9, cut the export to exactly `W × W*9/21`, anchored to keep the subject.
- **Grade**: partial grey-world white balance at **0.6 strength** for hazy daylight exteriors (a full correction neutralises the architecture too), 0.45 for interiors, **white balance only and never exposure for portraits**, and **almost nothing for night shots** — deep blacks are what let them merge into the page.
- 🔴 **When you swap a photograph under the same filename, bump the `?v=` on the `<img>` src** or a plain refresh serves the cached file and it looks like nothing happened.
- **Portraits**: the original photograph, never a cut-out composited onto a backdrop. Square frame, `object-fit:contain`, the frame's background set to that photograph's own median border colour. Match every portrait's framing to a measured constant (face-box height ÷ frame height, and where the face centre sits) — and 🔴 **score face-detection candidates on texture + eyes-inside-the-box + cross-cascade consensus.** A raw Haar hit will happily return a patch of flat studio backdrop, and a numerically perfect ratio measured against the wrong box is still wrong. Render the boxes and look before cutting any crop.

## 🔴 The traps

These are the bugs that have actually shipped. Read them before debugging.

1. **The invisible paragraph.** `[data-rv="rise"]{opacity:0}` + word-splitting → see Motion. Reported by users as deleted content.
2. **The black gap under a sticky stage.** A `position:sticky` stage of `100svh` inside a taller section **always has one full viewport of travel left after its progress reaches 1**. If the content finishes animating before then, that leftover is dead black. The fix is never to animate *harder* — leave the last layer on screen and let the sticky release carry it out.
3. **Ghost content behind black.** Anything faded to `0.08` rather than `0` reappears the moment whatever covered it clears. Fade to zero.
4. **`.st` is `display:flex`.** A section with two children — a text wrap and a `100vw` figure — lays them out SIDE BY SIDE. A "full-bleed" hero renders as a half-width picture. Give the section `display:block`.
5. **The source-order trap.** Same-specificity rules in a later `<style>` win. Layout overrides go LAST in `<head>`.
6. **Measure rects AFTER the reveal has run.** A section reads 858px pre-reveal and 1460px settled. Scrolling to a stale offset lands you a whole section early and it looks like the new block never rendered. Walk the page first, settle, then measure.
7. **Bare descendant selectors on a span-heavy block.** `.pauth span{display:block;text-transform:uppercase}` also matched the avatar, the byline and the share buttons. Scope to `.pauth .bwho>span`.
8. **SVG gradients on a horizontal line render nothing.** `M96 74 H176` has a zero-height bounding box and an `objectBoundingBox` gradient on a degenerate bbox draws nothing. Use `gradientUnits="userSpaceOnUse"`.
9. **GSAP's draw animation kills authored dashes.** Setting `strokeDasharray` for the draw overwrites `stroke-dasharray="4 5"`. Dashed paths must be class `.fd` (fade), not `.ln` (draw).

## Voice

Short declarative headlines that make a claim: *"A demo is not a product."* · *"Nobody wants a vendor. They want the thing to work."* · *"Proof for buyers who ask hard questions."* Never a headline that is a category label.

One idea per beat. Descriptions are one or two sentences, not a paragraph — if a card needs three sentences the card is doing too much. Expand abbreviations in prose (user experience, proof of concept, not UX and PoC) — mono LABELS may stay short. Never leave a single word alone on a line: `text-wrap:balance` plus a deliberate `<br>` where it matters. Numbers carry their caveat verbatim rather than being cleaned up.

## Build & QA

**Edit with deterministic patch scripts, not by hand.** One Python script, one `sub(old, new, label)` helper that asserts an exact occurrence count, and an md5 assert on the base file before it starts. A mismatch then fails loudly instead of half-applying. Refuse to run twice (`assert 'id="x-css"' not in s`). For a site-wide change, push the script and run it against the real files rather than shipping megabytes of HTML.

**Verify headless before delivering.** Playwright ≥1.55, Chromium at `/opt/pw-browsers/chromium`, GSAP + Lenis mirrored locally (`npm pack gsap@3.12.5 lenis@1.1.18`) and the three CDN `<script src>` sed'd to local paths. Symlink `lib` AND `node_modules` into the test dir or GSAP silently never loads and every reveal check passes trivially.

Walk the whole page, settle, then assert:
- zero page errors
- zero `[data-rv]` elements still at `opacity < 0.05` — a stuck reveal is invisible content
- zero broken images, zero dead local links
- `scrollWidth === viewport width`
- the rail: header padding === content left === H1 left

Check **1440×900, 2560×1400 and 390×844** minimum; add 1921 when touching the breakpoint, purely to prove there is no jump.
