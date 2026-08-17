# Brand portal — status

**17 August 2026** · review **Wednesday 19 August** · dark theme only

The portal was restructured from one flat navigation into two named sections with
their own left-hand navigation, built in an isolated `website/v2/` tree. **16
pages, all rendering, no broken links.** The site root now lands on it.

For the framework this was built against — the brief, the goal, and the jobs it
has to serve — see [`DESIGN-LOG.md`](DESIGN-LOG.md).

---

## What we covered today

Nine pieces of work, in the order they happened.

### Service catalog — sizing and the golden-ratio grid

Pages appeared to change size between slides. They do not: every catalog page is
the same A4 ratio (0.7067), exported at 1×, 2× and 3×. `object-fit: contain`
against a `min-height` container rendered a 595px export at natural size and an
1785px one scaled to the viewport.

- Fixed **A4 stage sized from viewport height**, so no page changes size
- **Golden-ratio grid toggle** cross-fades the overlay in the same fixed box, with the annotation panel staying visible
- Narrowed to the seven pages that have a matching grid, so the toggle is never dead
- Hero given real clearance; descriptions set to one line above 1500px

### Identity and header

- Wordmark beside the logo: **Brand Assets → Branding**
- Logo stepped down at every breakpoint so it sits with the nav rather than dominating it
- Nav label **Brand assets → Assets**
- Later in the day, the whole header came **down 15%** at every step

### Whitepapers separated from case studies

An earlier merge was wrong — they are different formats with different readers.

- **Case studies** now carries client work only
- **Whitepapers** is its own page again
- `agentvine-case-study.html` moved out of `assets/whitepapers/` into `assets/case-studies/`

### Asset detail repaired

Character names had been requested repeatedly and never appeared. The page
carried **two `window.IG_ASSETS` assignments** — the first with the names mapped,
the second a stale copy holding raw filenames. Being later, the stale one won
every time.

Removing it fixed three things at once: names resolve, **File size** stops being
blank, and **In category** counts within the category (1 of 16) rather than
across all 107 assets. The page also gained a real title; it had been opening on
a bare back-link under a tall header.

### The restructure — two sections, isolated

Built under `website/v2/` so `dark/` and `light/` keep working untouched. Both
trees share `assets/`; neither writes to the other.

- `v2/00 Home.html` — landing page, full weight, section choice inside it
- `v2/ds/` — Design system, 7 pages
- `v2/mk/` — Collateral, 8 pages
- Three pages that did not exist before: **Construction method**, **Tokens & handoff**, **Skills**

### Navigation system

The largest design change of the day, arrived at in three passes.

1. **Left rail** replacing top navigation inside a section, following Atlassian — the rail lists one section and only the active branch expands. Group labels give it rhythm: *Reference / Handoff*, *Documents / Digital / Automate*.
2. **The header stopped changing.** An earlier pass had the top nav vanishing into the rail and a section chip appearing beside the wordmark. Both removed — one header, one moving highlight.
3. **The rail follows the scroll.** A scroll spy moves the marker as you read, and the URL hash follows via `replaceState`.

To make the scroll spy a rule rather than a special case, **anchors are derived
from each page's own sections** — any section carrying an eyebrow becomes an
anchor. Construction, Tokens & handoff, Skills and both overviews gained
sub-navigation without a hand-kept list.

### Content and naming

- **Marketing kit → Collateral.** The old name did not cover landing pages, diagrams or skills
- **Audience labels removed.** Who a section is for now sits in the sentence, as the moment you would reach for it
- Copy cut roughly in half — 370 words per page down to **160–210**
- Internal framing language removed from anything user-facing
- **"For agents" dropped from the landing page**; the four machine-readable files live on Tokens & handoff, where someone would look for them

### Visual treatment

- The rail's active state was a solid yellow slab. It is now a soft raised background with a **3px yellow marker** at the left edge — a pointer, not a highlighter
- Both overview pages were pure type. They now **lead with real assets**, and every card carries a library thumbnail: Foundations shows the swatches, Asset library shows three categories, Construction shows its three stages side by side

### Documentation and the wiki

- `START HERE.html` rewritten — it advertised 19 light and 7 dark pages and pointed at folders that no longer exist
- `index.json` at **2.0.0-rc** with a `sections` block
- `README.md` and `AGENTS.md` brought current, including the navigation contract as four rules an agent must not break
- **The GitHub Wiki is a separate repository** and never updated on push, which is why it sat at 14 August. It is now generated from `docs/` by `sync-wiki.py` rather than hand-edited

---

## Design changes at a glance

| Change | Before | After |
|---|---|---|
| Section navigation | Top bar, all sections mixed | Left rail, one section, active branch expands |
| Header | Changed on entering a section | Identical everywhere; only the highlight moves |
| Header height | 88 / 92 / 98 / 106 / 120 / 132px | 75 / 78 / 83 / 90 / 102 / 112px |
| Rail active state | Solid yellow pill | Raised background + 3px yellow edge marker |
| Position feedback | Only on click | Scroll spy, URL hash follows |
| Overview pages | Type only | Real assets in hero and on every card |
| Second section | "Marketing kit" | **Collateral** |
| Audience | Labels on cards | Named as the moment you reach for it |
| Copy per page | ~370 words | 160–210 words |
| Catalog pages | Apparent size jumps | Fixed A4 stage, grid toggle |

---

## Commits

| Ref | What |
|---|---|
| `c418790` | Catalog A4 stage, golden-ratio grid toggle, hero spacing |
| `737904e` | Branding wordmark, Assets nav label, whitepapers split out |
| `47bfb23` | Asset detail — real character names, titled header, gap closed |
| `4d98d32` | v2 portal, isolated folder |
| `a72e167` | Copy simplified, framing language removed |
| `653911e` | Left rail, Atlassian pattern |
| `dd662ed` | One header everywhere, Collateral rename |
| `8022702` | Quieter rail, visuals on overviews, header −15% |
| `fed972c` | Scroll spy + derived anchors |
| `6781f28` | Site root switched to v2 |
| `c3fb28d` `a0183d4` `2002583` `e52ad30` | Status, design log, README, AGENTS, wiki generator |

---

## Pending — Tuesday 18 August

**Ours to finish**

1. **Light theme port** — mechanical; both themes share structure, so this is a rebuild through the same pipeline, not a redesign
2. **Rail on viewer pages** — Service catalog, Case studies, Diagrams and Social have no in-page sections so they opt out of the spy. Decide whether the rail should track *which asset* is on screen instead
3. **Wide-display pass** — card thumbnails are fixed-height, and the marketing section illustrations vary in aspect ratio more than the brand banner assets do
4. **Walk both routes** end to end before the review

**Waiting on Yogesh** — each is a single constant, a one-pass swap

- Figma file link, and the Git/skill links for the service catalog
- Landing page data
- Further whitepaper and case study examples

**One push needed with credentials** — `python3 docs/sync-wiki.py --push`. If the
wiki has never been initialised, open the Wiki tab and create any page first.

**Not in scope for Wednesday** — the two skills themselves. The shelf exists so
they land without re-architecting, but the buttons link to the repo folder. Worth
saying out loud so it reads as a placeholder rather than a promise.

---

## Timeline

| When | What |
|---|---|
| **Mon 17 Aug** | Structure, navigation, rail, scroll spy, both overviews — **done** |
| **Tue 18 Aug** | Light theme · wide-display pass · deploy · link swap if links arrive |
| **Wed 19 Aug** | Walk both routes with Rajiv and Arjun · fix · sign off |
| Thu 20 – Fri 21 | Fold agreed changes back; retire the flat version if the review lands well |
| Following week | Build the proposal builder first — clearest weekly pull |
| Later | Unify the two type systems (web Oswald/Geist `#FFC800` vs deck Montserrat `#FFD700`) |

---

## Open decisions

- **When does the flat version retire?** Keeping `dark/` and `light/` alive doubles the maintenance surface. Needs a date at the review.
- **Two themes × two sections = four navigations** to hold in parity. The long-term cost of the split, and the reason light was deferred.
- **Diagrams sit in Collateral**, as instructed. The artifacts are collateral; the method for building them is design-system material. Currently split with one link between them.

---

## Surfaces, and which is authoritative

| Surface | What it is | Updated by |
|---|---|---|
| The portal | `website/v2/` on GitHub Pages | Pushing to `main` |
| Repository docs | `docs/` — this file, the design log, the plan | Editing them |
| `README.md` / `AGENTS.md` | Repo front page and agent contract | Editing them |
| **The GitHub Wiki** | A **separate repository**; does not update on push | `python3 docs/sync-wiki.py --push` |

The wiki is generated from `docs/`, never authored. If it disagrees with the
repository, the repository is right and the wiki needs a sync.
