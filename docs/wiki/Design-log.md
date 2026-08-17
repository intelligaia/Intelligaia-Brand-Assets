> **Generated page — do not edit here.**
> Source: [`docs/DESIGN-LOG.md`](https://github.com/intelligaia/Intelligaia-Brand-Assets/blob/main/docs/DESIGN-LOG.md). Edit there and run `python3 docs/sync-wiki.py`.

# Design log — where we are

The standing reference for the brand portal: the brief it answers, the goal it
serves, the structure underneath, and the jobs it has to finish for real people.

Daily updates live in [`STATUS.md`](Status). This document changes only when
the thinking changes.

Last revised **17 August 2026**.

---

## 1. The brief

Rajiv's note, in his framing:

> One repo is the right architecture, and the audiences are different. Keep the
> single repo and deploy, but split the site into two routes — a **marketing**
> route (collateral, proposal kits — Rajiv, Arjun, Sandeep) and a **design
> system** route (tokens, components, guidelines — design team and engineers).
> Each gets its own home, its own navigation, and a "how to start using this"
> page. The marketing route will be adding more skills — a **proposal builder**
> and a **personalised presentation builder** — so structure it to grow with
> them. Done means both live by **Wednesday 19 August**.

Three things in that note are load-bearing, and they are not the obvious ones.

**The navigation was the actual complaint.** One row mixed both audiences, so
nobody's first click was obvious. The split is a fix for wayfinding, not for
content ownership.

**"How to start using this" is the deliverable.** Onboarding per audience, not a
menu. That is the difference between a portal people browse and one they use on a
Tuesday.

**"Grow with them" is a structural instruction.** The two builders do not exist
yet. The marketing route needed a place for them on day one, or adding them later
would mean re-architecting.

---

## 2. The goal

> **Close the gap between "I need an on-brand thing" and "I have it" — without a
> designer in the loop for the first draft.**

That is the whole portal in one line. Everything below is in service of it.

There is a second-order goal, and it is the reason the machine-readable layer
earns its keep:

> **The brand has to be self-enforcing.**

Headcount is growing and a rising share of our output is generated rather than
drawn. A style guide only humans can read drifts within two quarters. One that
agents can parse holds, because the rules are enforced at the point of
production rather than at review.

---

## 3. What sits under the goal

### Two sections, one source

| Section | Path | Holds | Goal | Fails when |
|---|---|---|---|---|
| **Design system** | `v2/ds/` | Foundations · Asset library · Construction · Tokens & handoff | Nobody re-decides a decision already made | Someone types a hex by hand, or draws an illustration that already exists |
| **Collateral** | `v2/mk/` | Service catalog · Case studies · Whitepapers · Landing pages · Diagrams · Social · Skills | A credible first draft leaves without a design request | A one-off deck gets improvised because nobody could find the format |

A section is **wayfinding, not a copy**. Both read the same `manifest.json` and
the same tokens. Nothing is duplicated between them.

### The four decisions that shaped the build

**One landing page, not a splash screen.** The home page keeps its full weight —
hero, two section cards, real assets. Choosing a section is a section *of* the
landing page, not a gate in front of it.

**The section is derived from the page, never from session state.** Every page
declares which section it belongs to and renders that navigation. A link pasted
into Slack opens in the right place with the right rail. No cookie to lose, no
query parameter to strip.

**The header never changes.** Logo, Branding, Design system, Collateral, Contact
us — identical everywhere. Entering a section moves the highlight and nothing
else. Section navigation lives in a left rail beneath it.

**Nothing is duplicated.** One asset library, one token set, one set of rules.

### The navigation contract

Four rules. Break any and the portal stops telling people where they are.

1. **The header is identical on every page.** Never add or remove items per page.
2. **The section is derived from the page**, so a shared link opens correctly.
3. **Section navigation lives in the left rail**, and only the active branch expands. The landing page has no rail.
4. **The navigation always reports position** — between pages via the rail, within a page via a scroll spy.

In-page anchors are derived from the page itself: give a section an `.eyebrow`
and it self-registers in the rail and the spy. There is no list to maintain.

### Naming

**Collateral**, never "Marketing kit" — the old name did not cover landing pages,
diagrams or skills, and would have needed renaming at the next artifact type.

**No audience labels.** Who a section is for is expressed as the moment you would
reach for it, not as a badge. A BD person building a one-pager should not feel
locked out of the design system.

### Content discipline

- Lead with the **artifact**, then deconstruct, then guide. Theory stays minimal.
- **No numeric prefixes** on headings or cards, anywhere. Step rows use words.
- Only the **final stage ships**. Geometry and outline are documentation of method.
- If no asset fits, **report the gap** — never generate one.

---

## 4. The jobs-to-be-done framework

Seven users. Each has a job, a page that finishes it, and a signal that tells us
it worked. The signal column is the part usually missing — without it, "the
portal is live" becomes the only measure available.

### Collateral

| Job to be done | Who | Served by | Signal it worked |
|---|---|---|---|
| "A prospect asked what we do — I need a credible leave-behind now, not a design request" | Rajiv | Service catalog · Case studies | Sent same day, no design ticket raised |
| "An RFP landed — assemble a proposal that looks like us without inventing layout" | Arjun, Sandeep | Case studies · Whitepapers → **proposal builder** | Structure reused, not reinvented |
| "Publishing today — it has to look like us without a designer in the loop" | Cheena | Social · Landing pages · Diagrams | Post ships without a designer touching it |

### Design system

| Job to be done | Who | Served by | Signal it worked |
|---|---|---|---|
| "Starting a screen or an illustration — give me the rule, not a reference" | Design team | Foundations · Asset library · Construction | Token taken from the file, not eyedropped from screen |
| "Implementing — I need the value and the URL, not a picture of them" | Engineering | Tokens & handoff | Imports `design-tokens.json` rather than copying hexes |
| "Producing an Intelligaia artifact on request" | Claude, Cursor, Hermes | `index.json` · `manifest.json` · `AGENTS.md` | Reports which assets it used; reports gaps instead of inventing |

### Cross-cutting

| Job to be done | Who | Served by | Signal it worked |
|---|---|---|---|
| "Where do I even start" | New joiners, contractors | The two overview pages | Finds their first artifact unaided |

### The three measures worth counting

1. **Gaps reported vs one-offs improvised.** The library only stays a library if
   a missing asset becomes a request. This is the health metric — everything else
   is downstream of it.
2. **Collateral produced without a design request.** The direct read on the goal.
3. **Skill usage, once the builders land.** If a builder is not used weekly by the
   people it was built for, the shelf is wrong, not the skill.

### How the framework fails

Worth naming so it can be watched for:

- **The library becomes a graveyard** — people take assets but never report gaps, so it slowly stops matching what anyone needs.
- **The sections drift apart** — someone duplicates rather than links, and there are two versions of the truth.
- **The wiki or docs go stale** while the code moves, so people stop trusting any of it. Already happened once; the wiki is generated now for exactly this reason.
- **The skills ship but nobody knows** — a builder exists and the people it was built for never learn it is there.

---

## 5. Standing rules

1. Web surfaces have **no type weight above 500**. Presentations are a separate system and stay Montserrat.
2. **No numeric prefixes** on headings or cards.
3. Detail pages **lead with the artifact**, then deconstruct, then guide.
4. Only the **final stage ships**.
5. If no asset fits, **report the gap**.
6. **The navigation always reports where you are**, between pages and within one.
7. A section is **wayfinding, not a copy**.
8. Build steps must be **idempotent**.
9. Anything published in two places must be **generated**, not copied by hand.

---

## 6. How it got here

Grouped by what each round was actually about.

**Scale and legibility.** The portal was designed at 1440 and fell apart on the
monitors people use. A responsive scale on custom properties now steps at 1600,
1920, 2400 and 2800. Headings corrected to Oswald 400/500 — the library pages
carried a second rule earlier fixes had missed. Word-by-word reveal rebuilt as a
generic splitter covering every heading class, not just the hero.

**Information architecture.** Empty section shells traced to
`.section { min-height: 100vh }`. Foundations merged into one complete page.
Whitepapers merged into case studies, then correctly separated again.

**Content discipline.** Detail pages inverted to lead with output. All numbering
removed. Philosophy copy moved from Oswald to Geist. Principles became parallel
cards. v2 copy cut roughly in half.

**Asset library.** "Brand Assets" stopped being a menu and became the library.
Construction stages stopped masquerading as versions. Category cards got real
previews. Character names finally resolved — see the defects register.

**Navigation and identity.** Wordmark became Branding, in Syne with a spectrum
gradient. Contact button rebuilt. Service catalog gained DNA annotations and the
golden-ratio grid.

**The two-section portal.** Built in an isolated `v2/` tree. Navigation moved to
a left rail. Header made constant. Scroll spy added and generalised through
derived anchors.

---

## 7. Defects register

Recorded because the causes were non-obvious and several had been wrong for some
time.

| Defect | Cause | Fix |
|---|---|---|
| Character names never appeared | Two `window.IG_ASSETS` assignments; the stale one was later in the file and won every time | Removed it. It also lacked `cat`, `bytes` and `path`, which is why File size was blank and "In category" counted 107 instead of 16 |
| Home page blank | A nested Lenis IIFE broke the whole inline script, so no reveal classes applied and everything stayed at `opacity: 0` | Rebuilt every inline script; added a 1.2s net that force-reveals anything still hidden |
| Detail pages blank | JS injected into a `<script src>` tag — the replace matched the CDN tag in `<head>`, and browsers ignore inline content there | Rescued the code, hoisted data into `<head>`, wrapped in `DOMContentLoaded`. Verification moved from `node --check` to jsdom, because syntax checking cannot catch unreachable code |
| Catalog pages appeared to change size | Same A4 ratio exported at 1×, 2× and 3×; `object-fit: contain` in a `min-height` container | Fixed-ratio A4 stage sized from viewport height |
| Hero tight under the header | The spacing rule missed `.fx-hero` and `.ad-top` | Rule extended, clearance raised |
| Scroll spy silently dead | Running the rail step without regenerating stacked a second rail, duplicating sub-items | Build step made idempotent |
| Broken preview image | `grid-50x50.svg` was 87KB of 2,500 circles | Rebuilt at 400 dots, 24KB |
| Every published asset URL 404'd | 664 stale occurrences of the pre-rename repo name across 9 files | Rewritten |
| GitHub Wiki stuck at 14 August | The wiki is a separate repository; pushing this one never touched it | Generated from `docs/` by `sync-wiki.py` |
| `var(--ink-faint)` | Used but never defined in `:root` | Replaced with `--ink-muted` |

---

*Daily updates: [`STATUS.md`](Status). Structural rationale as first written:
[`PORTAL-PLAN.md`](https://github.com/intelligaia/Intelligaia-Brand-Assets/blob/main/docs/PORTAL-PLAN.md).*
