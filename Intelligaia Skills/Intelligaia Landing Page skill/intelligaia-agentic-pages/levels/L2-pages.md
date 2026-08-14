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

> **HISTORICAL. These pages are L1. L2 is reserved and undefined.**

# L2 — the section pages

**Six files: `services.html · work.html · technology.html · careers.html · contact.html · blog.html`**

L2 is a **document** like L1, with less of everything. One arc, five to eight sections, no pinned stage worth more than one free zone, and no interaction at all. A reader arrives at an L2 page with a question; the page answers it and gets out of the way.

---

## L2's budget

| | value |
|---|---|
| sections | 5–8 |
| narrative | 1 arc, bracketed |
| pinned / sticky | ≤1 |
| free zones | ≤1 |
| interactive sections | 0 |
| canvas | 0 |
| pager | on, plain — `PXPS 900 / 0.85–2.4 s / 190` |
| words per section | ≤90 |
| bespoke JS sections | **0** |
| layout | the shell |

---

## Built — the current shape

### Work — 5 sections
`hero` → `#wquest` → `#scale` → `#agentic` → `#systems` → close

The hero holds a **full viewport on its own** so the headline gets the first screen; `#wquest` is genuinely the next thing you see. Three question cards rise in sequence, type-led, on the card system's motion, each jumping to its section.

🔴 **No logo wall.** A page that opens on a row of client names is asking to be believed before it has said anything.
🔴 **The grid is the page.** Less clutter, less description, less text.

### Services — the delivery ladder
Three rungs — **Workshops → Labs → Studio** — each a `.85fr 1.15fr` grid: name + verb + one paragraph + a "what you leave with" box on the left, capabilities as a **two-column definition list** on the right. Then the ROI band (authored values, caveat verbatim), engagement models and public sector as **bands, not rungs**.

🔴 A definition list, not a card grid. Boxing twenty capabilities rebuilds the wall you are removing.

### Blog — hero → rail → feature → grid → close
Six filter chips maximum, one line. The sticky rail is **invisible until it pins**. Cards on the shared treatment. See `../SKILL.md` § *The card* and § *The sticky filter rail*.

---

## Ready to build — spined, start at ③ CAST

### Technology — 7 sections · 1 free · 0 interactive · 0 canvas
```js
var SPEC=[
  {id:'thero',    align:'top'},              // Hero — one claim about the stack
  {id:'tstd',     align:'top'},              // Argument beat — why a stack, not a model
  {id:'tstack',   align:'top'},              // Ladder ×3 — Yantra / Nirmana / Medha   ← from #platforms
  {id:'tproof',   align:'top', free:true},   // Sticky stat stage — one, the throughput figure
  {id:'tsurface', align:'top'},              // Diptych — orchestration view / interface view  ← from #workbench
  {id:'tguard',   align:'top'},              // Argument beat — guardrails, short form
  {id:'tcta',     align:'top'}               // Close
];
```

### Careers — 6 sections
```js
var SPEC=[
  {id:'chero', align:'top'},   // Hero
  {id:'cwhy',  align:'top'},   // Argument beat over a campus plate
  {id:'clife', align:'top'},   // Diptych / triptych — the studio, uncropped
  {id:'chow',  align:'top'},   // Ladder ×3 — how hiring actually runs
  {id:'croles',align:'top'},   // Image-led cards, OR a definition list under 6 roles
  {id:'ccta',  align:'top'}    // Close
];
```
🔴 **Handle the count.** Under six open roles a card grid looks empty — use the two-column definition list.

### Contact — 4 sections
```js
var SPEC=[
  {id:'nhero', align:'top'},   // Hero
  {id:'nform', align:'top'},   // the discovery agent, in place        ← from #contact
  {id:'nwhere',align:'top'},   // Diptych — Mohali / Apex + Wilmington, on the rail
  {id:'ncta',  align:'top'}    // Close
];
```

---

## The archetypes L2 draws from

Pick 5–8 and vary the rhythm. 🔴 **Reuse the data, never the structure** — two pages using the same six archetypes in the same order are the same page.

| # | archetype | descends from |
|---|---|---|
| 1 | Hero — H1 + one lede line, no eyebrow | L0 `hero` |
| 2 | Argument beat over a dulled photographic plate | L0 `about` |
| 3 | The ladder — 3 rungs + definition list | L0 `platforms` |
| 6 | Image-led card grid — the card IS the picture | L0 `cs3payoff` |
| 8 | Diptych — two states side by side, no interaction | L0 `workbench` / `cmgr` |
| 9 | Full-bleed — pre-cropped to the frame's aspect | L0 `payroll` |
| 10 | Stat band — authored values, caveat verbatim | L0 `mcur` / `cs3adopt` |
| 11 | Close — headline + two CTA panels | L0 `contact` |

Markup for each is in `../reference/archetypes.html`. Class names are the ones the shared CSS already styles — do not rename them.

---

## 🔴 What an L2 page may never do

- open on anything but the H1 — no eyebrow, no breadcrumb, no label, no logo wall
- carry a second sticky stage, any auto-advance, or any toggle the reader must operate
- set its own header padding or page width — the shell owns both
- give its H1 a weight other than Oswald 400, or a size other than `clamp(2.4rem, 5.3vw, 5.6rem)`
- animate its headline differently from its neighbours
