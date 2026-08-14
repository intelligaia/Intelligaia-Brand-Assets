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

> **About Us is an L1 page. So is every other sub-page.**

# L1 — About

**One file: `Agentic-Home/about.html`**

L1 is a **document**. It waits for the reader, it sits on the shell, and it is carried by photographs. There is exactly one L1 page: About. It is the worked example for every level below it, and the proof that a 21-section reel becomes a 9-section document without changing how the site looks.

---

## 🔴🔴 THE THUMB RULE — L1 opens in Oswald, not Geist Pixel

| | headline | description |
|---|---|---|
| **L0** | Geist Pixel 400 | Oswald |
| **L1 (and L2, L3)** | **Oswald 400** — `clamp(2.4rem,5.3vw,5.6rem)` → 34 · 76 · 120 · 151 | **Geist 400, smaller** — `clamp(1.04rem,1.24vw,1.3rem)/1.64`, `max-width:66ch` |

**Geist Pixel below L0 is numerals only** — the `#anum` stat trio, a stat band figure, a list marker. Never a headline.

The Pixel headline is what tells a visitor they are on the front door. It stops meaning that the moment a second page uses it. Equally, the landing page never opens in Oswald.

Animation is the same on every page below L0: H1 `data-rv="words"` (stagger 0.115) → lede `data-rv="copy"` (stagger 0.03, `data-delay="0.45"`) → everything else `rise`. One trigger at `top 68%`.

## The nine sections

| # | id / class | job | archetype | motion | rest |
|---|---|---|---|---|---|
| 1 | `#ahero` | the claim | 1 · Hero | `words` ×1, `rise` ×2 | top |
| 2 | `#astd` `.abeat` | the standard | 2 · Argument beat over a dulled photographic plate | `words` ×1, `rise` ×4 | top |
| 3 | `#anum` | the scale | 4 · Sticky stat stage, 240 svh | `rise` ×4 | **free** |
| 4 | `#agood` | what we believe | 5 · Letter manifesto — `LEAD WITH GOODNESS` | per-letter SVG flip | **free** |
| 5 | `.abeat.sep` | the difference | 2 · Argument beat, short form | `words` ×1, `rise` ×2 | top |
| 6 | `#aagentic` | where it goes next | 2 · Argument beat + one figure | `rise` ×1 | top |
| 7 | `#alead` | who we are | 7 · People grid, 4-up flat | `words` ×1, `rise` ×1 | top |
| 8 | `.abeat` | campus & studios | 2 + 9 · beat + stacked full-bleed figure | `words` ×1, `rise` ×8 | top |
| 9 | `#acta` | the close | 11 · Close + footer + agent | `words` ×2, `rise` ×4, `seq` ×1 | top |

**One arc, not three.** Bracketed exactly the way L0 is: hero → argument → proof → close.

---

## What survived the descent from L0, and as what

| L0 | L1 | what happened |
|---|---|---|
| `hero` — two lines over the wave canvas | `#ahero` — H1 + lede + showreel | the canvas went; the two-line structure and the word reveal stayed |
| `about` — pinned paragraph with inline glyphs | `#astd` — argument beat over a dulled photographic plate | pinning → a background plate; glyphs → photography |
| `case` / `case2` / `cs3` — three chapter marker **sections** | `.kick` eyebrows on `#astd`, `.abeat.sep`, `#aagentic` | 🔴 **demoted one rank: a section became a label** |
| `compress` — one word carries the idea, free zone | `#agood` — one word assembles letter by letter, free zone | the most direct inheritance on the site |
| `clutter` / `payroll` — pinned play-once reveals | `#anum` — one sticky stage, 240 svh | five pinned stages became one |
| `workbench` / `cmgr` — role toggles | *(nothing)* | interaction does not descend |
| `mcur` split-flap · `cs3adopt` canvas bubbles | the `#anum` stat trio, **authored values** | animated numerals → static numerals |
| `split` / `chute` / `cs3decide` — beats of silence | `.abeat.sep` | three became one |
| `cs3payoff` — seven product shots | `#alead` 8 portraits · campus 4 photographs | product evidence → human and place evidence |
| `platforms` — stacked cards | *(moved to Services as the ladder)* | belongs to a different page |
| `contact` | `#acta` | unchanged |

---

## ✅ The descent receipt

| | L0 | L1 About |
|---|---|---|
| sections | 21 | **9** |
| pinned / sticky stages | 5 | **1** |
| free zones | 1 | **2** |
| interactive sections | 4 | **0** |
| canvas | 1 | **0** |
| auto-advance | yes | **no** |
| bespoke per-section JS | ~15 sections | **2** (`#anum`, `#agood`) |
| layout | full-bleed staged | the shell |
| media | canvas, SVG glyphs, product shots | photographs |

**Nothing about the look changed. That is the point.**

---

## L1's budget

| | value |
|---|---|
| sections | 8–10 |
| narrative | 1 arc, bracketed |
| pinned / sticky | ≤2 |
| free zones | ≤2 |
| interactive sections | 0 |
| canvas | 0 |
| pager | on, plain — `PXPS 900 / 0.85–2.4 s / 190` |
| words per section | ≤70 |
| bespoke JS sections | ≤2 — and About has spent both |

---

## 🔴 The two L1-only rules

**`#anum` and `#agood` MUST be free zones.** Both are scroll-choreographed; snapping past either collapses its sequence into a single frame. `FREE = {anum:1, agood:1}` in the pager.

**`#anum` is the one sanctioned count-up on the site** — it counts at the moment it becomes visible inside a sticky stage, so a zero is never on screen. Do not add a second anywhere.

## Traps this page has already sprung

- **The black gap.** A `position:sticky` stage of `100svh` inside a taller section always has one full viewport of travel left after its progress reaches 1. The photograph in `#anum` **lands and stays**; making it exit is what created the gap.
- **Leadership portraits.** The original photograph, whole — no cut-out, no mask, no rounding, no size tiers. One flat 4-up grid; tiered sizes read as a ranking, not a team.
- **A zero-width free zone.** `#agood` is exactly one viewport tall, so `top + h − vh === top` and the pager sails through. Its free stretch is the screen-height *before* it.
