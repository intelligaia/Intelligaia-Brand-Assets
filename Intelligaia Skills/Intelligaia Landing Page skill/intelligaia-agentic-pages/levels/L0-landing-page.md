# L0 — the landing page

**One file: `Agentic-Home/intelligaia-agentic-home-waves-intro-v11.html`**

L0 is a **reel**. It auto-advances, it pins, it animates on a canvas, it drives its own toggles, and it asks you to watch. Nothing else on the site is allowed to do any of that.

🔴 **L0 is the reference for the shell.** Its header padding, its content proportion and its hero rhythm are what every other level copies. Never change L0 to make a sub-page match — change the sub-page.

---

## The declared spine

L0 does not discover its structure. It **declares** it, in one array near the bottom of the file. Three fields carry the entire scroll contract.

```js
var SPEC=[
  {id:'hero',align:'top'},        {id:'about',align:'center',pin:'play'}, {id:'case',align:'center'},
  {id:'compress',align:'top',free:true},
  {id:'clutter',align:'top',pin:'play'}, {id:'workbench',align:'center'},{id:'case2',align:'center'},
  {id:'mcur',align:'center'},     {id:'chute',align:'center'},   {id:'split',align:'center'},
  {id:'payroll',align:'top',pin:'play'}, {id:'cmgr',align:'center'},    {id:'cs3',align:'center'},
  {id:'cs3ai',align:'center'},    {id:'cs3adopt',align:'center'},{id:'cs3decide',align:'center'},
  {id:'cs3moving',align:'center'},{id:'cs3touch',align:'center'},{id:'cs3payoff',align:'center'},
  {id:'platforms',align:'top'},   {id:'contact',align:'center'}
];
```

| field | values | meaning |
|---|---|---|
| `align` | `top` \| `center` | where the section rests. `center` applies only when the section is shorter than the viewport. |
| `pin` | `'play'` | rest **just inside** the pin (`start + PIN_MARGIN`) so the reveal fires and then holds |
| `free` | `true` | hand scrolling back to Lenis so the section's own choreography scrubs as authored |

Three sections declare `pin:'play'` — `about`, `clutter`, `payroll`. One declares `free:true` — `compress`. There are five ScrollTrigger pins and one `position:sticky` stage (`#cmgr`) in the file; only three need a declared rest point, because the rest sit inside sections the pager already stops at.

---

## The narrative shape — three arcs, bracketed

```
OPEN    hero · about
ARC 1   case  → compress → clutter → workbench                       Sales Workbench
ARC 2   case2 → mcur → chute → split → payroll → cmgr                Payroll engine
ARC 3   cs3 → cs3ai → cs3adopt → cs3decide → cs3moving
              → cs3touch → cs3payoff                                 Commerce operations
CLOSE   platforms · contact
```

**The arc formula — the most reusable thing on the site:**

> **title card → the problem → the mechanism → interactive proof → the payoff**

Every arc on L0 runs these five beats. It is also what an L3 case study is, what a Services rung is, and what a Technology section is.

---

## The twenty-one sections

| # | id | rest | job |
|---|---|---|---|
| 1 | `hero` | top | the claim — two `.hl` lines over the scroll-scrubbed wave canvas |
| 2 | `about` | center · **pin** | the positioning — one paragraph, line by line, `AI`/`UX`/`TECH` as inline gradient SVG |
| 3 | `case` | center | chapter marker 1 |
| 4 | `compress` | top · **free** · manual | one word carries the idea — COMPRESSED compresses and decompresses |
| 5 | `clutter` | top · **pin** | before → after — the clutter is removed, the workbench assembles |
| 6 | `workbench` | center | "it adapts to you" — AE / Director toggle, cross-fading dashboards |
| 7 | `case2` | center | chapter marker 2 |
| 8 | `mcur` | center | the transformation — `multi-currency` in a split-flap letter flip |
| 9 | `chute` | center | a beat of silence |
| 10 | `split` | center | two audiences, both hurt — 6.7 s reveal chain, 11.5 s dwell |
| 11 | `payroll` | top · **pin** | the build — one sentence + the product shot |
| 12 | `cmgr` | center · **sticky** | "it adapts to you", again — Contractor / Manager toggle, 7 shots |
| 13 | `cs3` | center | chapter marker 3 |
| 14 | `cs3ai` | center | show the system thinking — the Atlas reasoning chat |
| 15 | `cs3adopt` | center | proportions — 36 / 30 / 16 % effort bubbles on canvas |
| 16 | `cs3decide` | center | a beat of silence |
| 17 | `cs3moving` | center | the turn — globe → map, gated by the `#cs3start` CTA |
| 18 | `cs3touch` | center | interactive proof — Zero / Low touch toggle + the embedded agent chat |
| 19 | `cs3payoff` | center | the evidence — seven product shots |
| 20 | `platforms` | top | the three products — stacked cards, one rest point per card |
| 21 | `contact` | center | the close — the discovery form |

---

## 🔴 The reel apparatus — L0 ONLY

Five mechanisms exist here and **nowhere else on the site**. Everything below L0 is built by removing them.

| apparatus | what it is |
|---|---|
| `DWELL` | ms each section holds before auto-advancing — `hero:4600 · about:6800 · case:5200 · clutter:8800 · workbench:7600 · case2:5400 · mcur:6800 · chute:7800 · split:11500 · payroll:7600 · cmgr:7600 · cs3:6200 · cs3ai:6200 · cs3adopt:8200 · cs3decide:5200 · cs3moving:6600 · cs3touch:9200 · cs3payoff:6200 · platforms:6400` |
| `ACT` | per-section auto-driver scripts that click the page's own toggles so the reel demonstrates the interaction — `workbench · cmgr · cs3moving · cs3touch` |
| the cue | one indicator, three states, two colours. Blue + countdown ring = the page is driving; gold = your turn. `CUE_ASIDE={workbench:1,cmgr:1,cs3touch:1}` shifts it where it would collide |
| per-card stops | `#platforms` registers an extra anchor per stacked card via `window.__platStack()` — one gesture, one card |
| manual gates | `#compress` never auto-advances; `#cs3moving` will not page forward until its CTA has been used |

**Glide constants — L0 is deliberately slower than the sub-pages:**
`PXPS=780, DMIN=1.25, DMAX=2.9, COOLDOWN=200`. Sub-pages run `900 / 0.85–2.4 / 190`. **A reader moves faster than a viewer.**

---

## What does not descend

| L0 pattern | why it stays here |
|---|---|
| `cs3ai` — the reasoning chat | only pays off after ~12 s of watching |
| `cs3moving` — the gated globe → map | needs the viewer to press a button |
| the wave canvas | atmosphere the rail cannot carry — sub-pages use `#bg` neutral radials |
| `workbench` / `cmgr` / `cs3touch` toggles | interaction does not descend; below L0 they become a **diptych** |

🔴 **Below L0, nothing waits.** L0 affords a twelve-second payoff because it plays itself. A reader on a sub-page is hunting.

---

## L0's own budget

| | value |
|---|---|
| sections | 18–22 |
| narrative | 3 arcs, bracketed |
| pinned / sticky | ≤6 |
| free zones | ≤2 |
| interactive sections | ≤4 |
| canvas / WebGL | 1 |
| auto-advance | yes |
| words per section | ≤25 |
| layout | full-bleed staged — **not** the rail |
| media | canvas + SVG + product shots |

---
---

# 🔴 THE L0 RULES — locked

Everything below is measured off `intelligaia-agentic-home-waves-intro-v11.html`. These are the combinations that make the landing page the landing page. **Do not skip any of them.**

## Rule L0-1 · The hero is Geist Pixel

```css
.hero-copy h1{
  font-family:'Geist Pixel','Geist','Inter',sans-serif;   /* 🔴 the ONLY page that opens in Pixel */
  font-weight:400;                                        /* Geist Pixel ships ONE weight */
  font-size:clamp(2.76rem, 6vw, 6.45rem);
  line-height:1.14; letter-spacing:.01em; color:#eef1fb;
}
.hero-copy .hl{                     /* one span per LINE */
  display:block; white-space:nowrap;
  text-shadow:0 0 34px rgba(154,163,255,.26), 0 2px 18px rgba(0,0,0,.6);
  will-change:transform,opacity,filter;
}
.hero-copy{ position:absolute; top:29vh }   /* 20vh ≤900 · 19vh ≤760 · 18vh ≤600 · 15vh landscape */
@media (max-width:760px){ .hero-copy{ left:6vw; right:6vw } .hero-copy .hl{ white-space:normal } }
```

| | 390 | 768 | 1440 | 1920 | 2560 | 3440 |
|---|---|---|---|---|---|---|
| hero size | 40 | 46.1 | **86.4** | 103.2 | **137.7** | **174.2** |
| hero top (y) | — | 297 | **261** | 313 | **406** | **418** |

**The reveal — rise + de-blur, one line at a time:**
```js
gsap.set('.hl', {yPercent:46, autoAlpha:0, filter:'blur(12px)'});
htl.to('.hl:not(.p2)', {yPercent:0, autoAlpha:1, filter:'blur(0px)',
                        stagger:0.22, ease:'power3.out', duration:1.6});
htl.to('.hl.p2',       { …same… });          // the second line rides its own sub-timeline
```
🔴 On the hero the unit is the **LINE** (`.hl` is `white-space:nowrap`). On the next section down it is the **WORD**. Both read as "word reveal"; the stagger and the blur radius differ and are not interchangeable — see L0-3.

🔴 **Geist Pixel appears nowhere else on the site as display type.** Below L0 it is numerals only. See the thumb rule in `SKILL.md`.

## Rule L0-2 · Auto-scroll, then snap to the next section

One capture-phase `wheel` listener runs **before** Lenis, `preventDefault()` + `stopImmediatePropagation()`, and glides to the next rest point with `lenis.scrollTo(y,{lock:true, easing:easeInOutCubic})`.

| constant | L0 | below L0 |
|---|---|---|
| `PXPS` glide speed px/s | **780** | 900 |
| `DMIN` / `DMAX` | **1.25 / 2.9 s** | 0.85 / 2.4 s |
| `COOLDOWN` | **200 ms** | 190 ms |
| `GESTURE_GAP` | 120 ms — a quiet gap starts a fresh gesture | same |
| `EDGEF` | 0.14 of a screen — how close to a free zone's edge the pager re-arms | same |

**L0 is deliberately slower. A reader moves faster than a viewer.**

On top of the snap, L0 **auto-advances**: `DWELL[id]` ms per section (4600–11500), the cue ring fills over exactly the time left, and `ACT[id]` scripts drive the interactive sections' own toggles before advancing. `#compress` never auto-advances; `#cs3moving` will not page forward until its CTA is used.

🔴 A section whose content is scroll-choreographed must be a **free zone** — the pager parks at the entrance, hands scrolling back to Lenis so the stage scrubs as authored, and re-arms within `EDGEF` of the exit.

## Rule L0-3 · The next section — Oswald, word by word

```css
.about-copy p{
  font-family:'Oswald',system-ui,sans-serif;
  font-size:clamp(1.9rem, 4vw, 3.9rem);
  line-height:1.5; letter-spacing:.006em; color:#f2f5ff;
  max-width:min(50ch,72vw); text-wrap:balance;
  text-shadow:0 2px 22px rgba(0,0,0,.62);
}
.about-copy{ position:absolute; top:40%; left:6vw; transform:translateY(-50%) }
.about-copy .glyph svg{ height:.92em }      /* inline gradient SVG for AI / UX / TECH */
```

| | 390 | 768 | 1440 | 1920 | 2560 | 3440 |
|---|---|---|---|---|---|---|
| size | 29.6 | 43.8 | **57.6** | 62.4 | **83.3** | **105.3** |

**The reveal — word by word:**
```js
gsap.set('.about-copy p', {autoAlpha:1});         // 🔴 the PARAGRAPH stays visible…
gsap.set('.about-copy .w', {autoAlpha:0, filter:'blur(7px)'});   // …only the WORDS hide
atl.to('.about-copy .w', {autoAlpha:1, filter:'blur(0px)',
                          ease:'power1.out', stagger:0.247, duration:0.7});
```
🔴 Set the parent to `autoAlpha:1` explicitly. Word-splitting animates the **cells**, not the element — an element left at `opacity:0` ships an invisible paragraph with 47 perfectly visible words inside it, and users report it as *deleted content*.

**Weight:** the section headline is **Oswald Regular (400) or Medium (500)**. ⚠️ The live page currently ships `#about` at **200** and the chapter `h2` at **300** — the two places L0 diverges from this rule. Bring them to 400 in one pass; do not fix one and leave the other.

Every section after this one follows the same shape: **Oswald display, word-by-word reveal at 0.247, one idea, ≤25 words.**

## Rule L0-4 · The chapter break — one card, three chapters

`#case`, `#case2` and `#cs3` are the same object. They must stay identical apart from the artwork behind them.

```css
.cs-card{
  position:absolute; left:6vw; top:16vh; z-index:2;
  width:min(50vw, 820px);
  padding:clamp(3.2rem,7vh,5rem) clamp(1.8rem,3vw,3.4rem);
  border-radius:22px;                                   /* 🔴 22px at EVERY resolution */
  background:rgba(4,6,12,.12);
  border:1px solid transparent;
  background-image:
    linear-gradient(rgba(4,6,12,.12), rgba(4,6,12,.12)),
    linear-gradient(135deg, rgba(255,255,255,.28), rgba(255,255,255,.06) 45%, rgba(150,200,255,.22));
  background-origin:border-box;
  background-clip:padding-box, border-box;              /* the gradient hairline border */
}
.cs-card .cs-eyebrow{ font-family:'Oswald'; font-weight:500;
  font-size:clamp(1rem,1.5vw,1.25rem); letter-spacing:.02em; color:#e6ebf7;
  margin-bottom:clamp(3.2rem,7vh,5.4rem) }
.cs-card h2{ font-family:'Oswald'; font-weight:300;
  font-size:clamp(2.3rem,4.8vw,4.6rem); line-height:1.14; letter-spacing:.004em; color:#fff }

@media (min-width:1921px){                              /* the big-monitor chapter card */
  #case .cs-card, #case2 .cs-card, #cs3 .cs-cardwrap{ width:min(52vw,1160px) }
  .cs-card{ padding:clamp(3rem,4.4vh,4rem) clamp(2.8rem,3vw,4rem) clamp(3.8rem,5.8vh,5.2rem) }
  .cs-card .cs-eyebrow{ margin-bottom:clamp(1.8rem,3.4vh,3rem) }
  .cs-card h2{ font-size:clamp(3rem,4.4vw,6rem); line-height:1.1 }
}
@media (max-width:760px){ .cs-card{ width:92vw; max-width:92vw; left:4vw } }
```

| | 390 | 768 | 1440 | 1920 | 2560 | 3440 |
|---|---|---|---|---|---|---|
| card width | 359 | 599 | **720** | 820 | **1160** | **1160** |
| h2 size | 32 | 43.2 | **69.1** | 73.6 | **112.6** | **151.4** |
| eyebrow | 16.3 | 16 | **20** | 20 | **26.7** | **33.8** |
| radius | 22 | 22 | **22** | 22 | **22** | **22** |

**The entry, identical on all three:**
```js
gsap.set(cardSel+' .cs-eyebrow', {autoAlpha:0, y:16});
tl.to(cardSel+' .cs-eyebrow', {autoAlpha:1, y:0, ease:'power2.out', duration:0.55});
```
then the card drifts against the scroll — `#case` `yPercent:12`, `#case2` `yPercent:-10`, `#cs3` `y:-140 × CS3_DRIFT`. **Direction alternates so three chapters do not feel like three copies.**

**The artwork behind each chapter — one family, three instances:**

| chapter | shape | stroke | placement |
|---|---|---|---|
| `#case` | `#sharpLines` | `10` | `left:-14vw; width:min(150vw,2400px)`; ≥1921 `min(178vw,3500px)`. Mask sweeps `--mp` **135% → 0% → −145%** across the scroll |
| `#case2` | `#mWaves` | `80.14` | `width:min(104vw,920px)` centred; ≥1921 `min(130vw,1980px)`. Radial + linear mask, `mask-composite:intersect` |
| `#cs3` | `#atlasWaves` + `#atlasWavesBlur` | `35.45` | `width:min(66vw,94vh,1200px)`; ≥1921 `min(64vw,94vh,1400px)`, `blur(5px)`, `opacity:.55` |

All three carry the same glow: `drop-shadow(0 0 10px rgba(64,174,255,.35)) drop-shadow(0 0 12px rgba(29,196,187,.3))`.

**And the same section ramps**, so a chapter dissolves into the page rather than starting on an edge:
```css
#case{ background:linear-gradient(180deg, transparent 0%, rgba(2,3,7,.6) 30%, var(--ink) 55%) }
#case::after{ content:""; position:absolute; inset:0; z-index:1; pointer-events:none;
  background:linear-gradient(180deg, var(--ink) 0%, transparent 17%, transparent 83%, var(--ink) 100%) }
```

🔴 **If you add a fourth chapter it gets the same card, the same 22px radius, the same gradient hairline, the same eyebrow entry, and a shape from the same family at the same glow.** A chapter that introduces a new card shape reads as a different website.
