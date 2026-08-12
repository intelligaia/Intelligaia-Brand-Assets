# intelligaia-agentic-pages

The design system behind Intelligaia's dark agentic site, packaged as a Claude skill.

**Install:** zip this folder and open the `.skill` file, or point Claude at it directly.
**Scope:** everything in `Agentic-Home/` — the landing page and all 33 sub-pages.
**Not for:** intelligaia.com's white Wix concepts (`intelligaia-landing-pages`), or
standalone light-theme portfolio HTML (`ux-case-study`).

## Where to start

1. **`levels/`** — decide WHICH page you are building. Each level fixes a budget
   (how many sections, how much motion, how much interaction) before anything is written.
2. **`SKILL.md`** — the system itself: the shell, colour, typography, motion, the scroll
   pager, the card treatment, photography, and the traps that have actually shipped.
3. **`reference/`** — the code. Copy it verbatim. It is not a starting point.

## The one idea

The landing page and every other page are the same design language at different **energy
levels**. L0 is a reel: it auto-advances, pins, animates on a canvas, asks you to watch.
Everything below it is a document: it waits for the reader, sits on the shell, and is
carried by photographs. Converting one into the other is not a redesign — it is a
controlled discharge of energy, and the budget is fixed before anyone opens a file.

## The five moves

| | move | the hard test |
|---|---|---|
| ① | **STRIP** the reel apparatus; state what is left in one sentence | the sentence names the argument, not the animation |
| ② | **SPINE** — write the SPEC array, no HTML | section count inside the level budget; the claims read as one argument |
| ③ | **CAST** each claim to an archetype | no archetype twice in a row; ≥4 distinct; exactly one hero and one close |
| ④ | **BIND** — shell last in `<head>`, markup unchanged, one trigger at `top 68%` | header padding, content left and H1 left agree to the pixel |
| ⑤ | **PROVE** — headless at 1440 · 2560 · 390 | zero errors, zero unrevealed `[data-rv]`, zero dead links, no overflow |

A failed test at ⑤ is almost always a spine problem from ②, not a CSS problem.
