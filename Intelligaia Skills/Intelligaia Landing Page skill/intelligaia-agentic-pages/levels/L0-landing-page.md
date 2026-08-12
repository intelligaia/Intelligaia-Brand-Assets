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
