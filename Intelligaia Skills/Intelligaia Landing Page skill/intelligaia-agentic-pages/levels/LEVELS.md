# The levels — read this first

🔴 **RULING — 13 Aug 2026. Two levels are in play, not four.**

| Level | What it is | Which pages |
|---|---|---|
| **L0** | the home page — a *reel*. Auto-advances, pins, runs a canvas, asks to be watched. | **1.** `intelligaia-agentic-home-waves-intro-v11.html`, and nothing else. |
| **L1** | **every other page** — a *document*. It waits for the reader, sits on the shell, is carried by photographs. | **33.** About Us · Work · Services · Technology · Careers · Contact · Blog · the 15 case studies · the 11 articles. |
| **L2 · L3** | **reserved. Not defined, not in use.** | — |

## What changed

Earlier drafts of this skill split the sub-pages three ways — L1 for About, L2 for the six
section pages, L3 for case studies and articles. **That split is withdrawn.** Everything below
the home page is L1 until there is a reason to draw a finer line, and that reason has not
arrived.

So:

- **Do not label a new page L2 or L3.** If it is not the home page, it is L1.
- `L2-pages.md` and `L3-detail-pages.md` are kept as historical notes. Their *craft* guidance is
  still good — their *level labels* are not.
- Where `SKILL.md` says L2 or L3, read L1.

## The one property worth carrying forward

The old L3 rule turned the **scroll pager off** for case studies and articles. Keep doing that.
It is not a property of a level — it is a property of long-form reading: someone working through
2,000 words needs to scroll freely, and one-section-per-gesture fights them. Apply it by page
length, not by label.

When L2 and L3 are eventually defined, this is the first distinction to formalise.

## What a level still decides

The level fixes the budget **before** anything is written — how many sections, how much motion,
how much interaction. That mechanism is unchanged; only the number of levels is.

| | **L0** | **L1** |
|---|---|---|
| sections | 18–22 | 5–10 |
| narrative arcs | 3 | 1 |
| pinned / sticky | ≤6 | ≤2 |
| free zones | ≤2 | ≤2 |
| interactive | ≤4 | 0 |
| canvas | 1 | 0 |
| auto-advance | yes | no |
| pager | on, with the auto-driver | on, plain — **off for long-form** |
| glide | 780 / 1.25–2.9 s | 900 / 0.85–2.4 s |
| hero typeface | Geist Pixel 400 | Oswald 400 |
| bespoke JS | expected | ≤2 |

🔴 **L0 is the reference for the shell.** Its header padding, 88 vw content proportion and hero
rhythm are what L1 copies. Never change L0 to make an L1 page match.

## Where to read next

- **`L0-landing-page.md`** — the home page and its four locked rules. Current.
- **`L1-about.md`** — the worked descent, 21 sections into 9. Current; the method applies to
  every L1 page, not only About Us.
- **`L2-pages.md`** · **`L3-detail-pages.md`** — historical. Good craft notes, wrong labels.
