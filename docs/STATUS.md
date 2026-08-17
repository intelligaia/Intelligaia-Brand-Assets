# Brand portal — status

**Monday 17 August 2026** · target review **Wednesday 19 August** · dark theme only

---

## Where we are in one line

The portal has been restructured from a single flat navigation into two named
sections with their own left-hand navigation, built in an isolated `website/v2/`
tree so the current site keeps working while this is reviewed. **16 pages, all
rendering, no broken links.**

---

## The framework after Rajiv's feedback

Rajiv asked for one repository with two ways in — a marketing route for himself,
Arjun and Sandeep, a design-system route for design and engineering — each with
its own home, its own navigation and a page telling you how to start. Plus room
for the proposal builder and presentation builder that are coming.

What we built against that, and the four decisions that shaped it:

**One landing page, not a splash screen.** The home page keeps its full weight —
hero, two section cards, real assets. Choosing a section is a section *of* the
landing page, not a gate in front of it.

**The section is derived from the page, not from a session.** Every page knows
which section it belongs to and renders that navigation. A link pasted into Slack
opens in the right place with the right rail. Nothing to lose, nothing to reset.

**The header never changes.** Logo, Branding, Design system, Collateral, Contact
us — identical on every page. Entering a section moves the highlight and nothing
else. Section navigation lives in a left rail below it, following the Atlassian
pattern: only the branch you are in expands.

**Nothing is duplicated.** Both sections read the same manifest and the same
tokens. A section is wayfinding, not a copy of the library.

Two things were renamed along the way. **Marketing kit became Collateral** — the
old name did not cover landing pages, diagrams or skills, and would have needed
renaming again at the next artifact type. **Audience labels were removed**; who a
section is for now sits in the sentence, as the moment you would reach for it.

---

## The goal-based framework

The portal has one goal. Everything below it is a job someone is trying to
finish, the page that finishes it, and the signal that tells us it worked.

### Portal goal

> Close the gap between *"I need an on-brand thing"* and *"I have it"* — without
> a designer in the loop for the first draft.

Second-order, and the reason the machine-readable layer earns its keep: the brand
has to be **self-enforcing**. Headcount is growing and a rising share of our
output is generated rather than drawn. A style guide only humans can read drifts
within two quarters.

### Section goals

| Section | Goal | Fails when |
|---|---|---|
| Design system | Nobody re-decides a decision that has already been made | Someone types a hex by hand, or draws an illustration that already exists |
| Collateral | A credible first draft leaves without a design request | A one-off deck gets improvised because nobody could find the format |

### Jobs, and where they are served

| Job to be done | Who | Served by | Signal it worked |
|---|---|---|---|
| "A prospect asked what we do — I need a leave-behind now" | Rajiv | Service catalog, Case studies | Sent same day, no design ticket raised |
| "An RFP landed — assemble a proposal that looks like us" | Arjun, Sandeep | Case studies, Whitepapers → **proposal builder** | Structure reused, not reinvented |
| "Publishing today, it has to look like us" | Cheena | Social, Landing pages, Diagrams | Post ships without a designer touching it |
| "Starting a screen — give me the rule, not a reference" | Design team | Foundations, Asset library, Construction | Token taken from file, not eyedropped |
| "Implementing — give me the value and the URL" | Engineering | Tokens & handoff | Imports `design-tokens.json` rather than copying hexes |
| "Producing an Intelligaia artifact" | Claude, Cursor, Hermes | `index.json`, `manifest.json`, `AGENTS.md` | Reports which assets it used; reports gaps instead of inventing |
| "Where do I even start" | New joiners | The two overview pages | Finds their first artifact unaided |

### How we will know, in practice

Three things worth counting from week one:

1. **Gaps reported vs one-offs improvised.** The library only stays a library if
   a missing asset becomes a request. This is the health metric.
2. **Collateral produced without a design request.** The direct read on the
   portal goal.
3. **Skill usage once the two builders land.** If a builder is not used weekly by
   the people it was built for, the shelf is wrong, not the skill.

---

## What is already done

All committed, dark theme, isolated in `website/v2/`.

| Area | State |
|---|---|
| Structure | Landing page + `ds/` (7 pages) + `mk/` (8 pages) = **16 pages** |
| Header | Constant across every page, active section highlighted, height reduced 15% |
| Left rail | Per section, grouped, only the active branch expands, off-canvas below 1100px |
| Rail feedback | **Scroll spy** — the marker follows the reader; URL hash follows via `replaceState` |
| Anchors | Derived from each page's own sections, so a new section appears in the rail unedited |
| New pages | Two overviews, Construction method, Tokens & handoff, Skills |
| Skills shelf | Proposal builder and presentation builder present as *In build*; three shipped skills linked |
| Visuals | Both overviews lead with real assets; every card carries a library thumbnail |
| Naming | Collateral replaces Marketing kit; audience labels removed |
| Entry point | `START HERE.html` rewritten — it had gone stale, advertising pages and folders that no longer exist |
| Machine layer | `index.json` at 2.0.0-rc with a `sections` block |
| Previous version | `dark/` and `light/` untouched and still reachable |

Deployment needs no change: the Pages workflow publishes `website/`, and `v2/`
sits inside it, so it ships on push.

### Bugs found and fixed along the way

Worth recording because two of them had been silently wrong for a while:

- **Character names never rendered.** The asset detail page carried two
  `window.IG_ASSETS` assignments. The first had Priya/Maya/Aisha/Sofia/Nia/Arjun/
  David/Kenji mapped; the second was a stale copy holding raw filenames, and
  being later it won every time. That block also lacked `cat`, `bytes` and
  `path`, so File size was blank and "In category" counted across all 107 assets
  instead of the 16 in Characters.
- **Catalog pages appeared to change size.** They are all the same A4 ratio,
  exported at 1×, 2× and 3×. `object-fit: contain` against a `min-height`
  container rendered them at different sizes. Fixed with a fixed-ratio stage.
- **A second rail could stack onto an already-built page**, duplicating the
  Foundations sub-items and silently disabling the scroll spy. The build step is
  now idempotent.
- `var(--ink-faint)` was used but never defined in `:root`.

---

## Pending — Tuesday 18 August

**Ours to finish:**

1. **Light theme port.** Mechanical — both themes share structure, so this is a
   rebuild through the same pipeline, not a redesign. Half a day.
2. **Rail behaviour on viewer pages.** Service catalog, Case studies, Diagrams
   and Social have no in-page sections, so they correctly opt out of the scroll
   spy. Decide whether the rail should instead track *which asset* is on screen.
3. **Wide-display pass.** Card thumbnails are fixed-height; the marketing section
   illustrations vary in aspect ratio more than the brand banner assets do, so
   some may sit smaller than their neighbours at 3K.
4. **Deploy and walk both routes** end to end before the review.

**Waiting on Yogesh — these are single constants, a one-pass swap:**

- Figma file link, and the Git/skill links for the service catalog
- Landing page data — noted as "a longer list, a long scrollable page"
- Further whitepaper and case study examples

**Deliberately not in scope for Wednesday:** the two skills themselves. The shelf
exists so they land without re-architecting, but the buttons currently link to
the repo folder. Worth saying out loud before Arjun sees it, so it reads as a
placeholder rather than a promise.

---

## Timeline

| When | What |
|---|---|
| **Mon 17 Aug** | Structure, navigation, rail, scroll spy, both overviews — **done** |
| **Tue 18 Aug** | Light theme port · wide-display pass · deploy · link swap if links arrive |
| **Wed 19 Aug** | Walk both routes with Rajiv and Arjun · fix · sign off |
| Thu 20 – Fri 21 | Fold agreed changes back; retire the flat version if the review lands well |
| Following week | Build the proposal builder first — it has the clearest weekly pull |
| Later | Unify the two type systems (web Oswald/Geist `#FFC800` vs deck Montserrat `#FFD700`) — currently an intentional divergence |

---

## Open decisions

- **When does the previous version retire?** Keeping `dark/` and `light/` alive
  indefinitely doubles the maintenance surface. Suggest a date at the review.
- **Two themes × two sections = four navigations to hold in parity.** This is the
  long-term cost of the split and the reason light was deferred.
- **Diagrams sit in Collateral, as instructed.** The artifacts are collateral;
  the method for building them is design-system material. Currently split, with
  one link between them — worth confirming that reads correctly.

---

*Full change history: [`DESIGN-LOG.md`](DESIGN-LOG.md). Structural rationale:
[`PORTAL-PLAN.md`](PORTAL-PLAN.md).*
