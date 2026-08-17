# Brand portal — structural plan

> **This is the plan, written 17 August. For what actually shipped and what is
> still pending, read [`STATUS.md`](STATUS.md).** Terminology has moved on since
> this was written — "Marketing kit" is now **Collateral**, and the internal
> "two doors" framing is not used in any user-facing copy.

Working plan against Rajiv's note. Target: both sections live **Wednesday 19 August**.

---

## What Rajiv actually asked for

Not two sites. Two **entry paths** into one deploy — repo, tokens and manifest stay
single-source, only the wayfinding forks. Three load-bearing points:

1. **The nav is the complaint.** One 8-item row currently mixes both audiences, so
   nobody's first click is obvious.
2. **"How to start using this" is the deliverable** — onboarding per audience, not a
   menu. That is the difference between a portal people browse and one they use on a
   Tuesday.
3. **"Grow with them" is structural.** The proposal builder and personalized
   presentation builder are coming. `Intelligaia Skills/` today sits outside `website/`
   and is surfaced nowhere on the site. The marketing door needs a skills slot now.

---

## Our goal with the website

Close the gap between *"I need an on-brand thing"* and *"I have it"* — without a
designer in the loop for the first draft.

Second-order, and the reason the machine-readable layer matters: the brand has to be
**self-enforcing**. Headcount is growing and a rising share of our output is generated
by AI. A style guide that only humans can read will drift within two quarters. One that
agents can parse holds.

---

## Who uses this, and what they open

### Marketing door

| Segment | Who | Job to be done | Opens daily |
|---|---|---|---|
| Founder-seller | Rajiv | "A prospect asked what we do. I need a credible leave-behind in minutes, not a design request." | Service catalog, case studies, whitepapers |
| Bid & proposals | Arjun, Sandeep | "An RFP landed. I need to assemble a proposal that looks like us without inventing layout." | Proposal kit, case studies, catalog pages → **proposal builder skill** |
| Marketing & content | Cheena | "I'm publishing today. I need a social asset and a landing section that matches the brand." | Social templates, landing patterns, diagrams → **presentation builder skill** |

### Design system door

| Segment | Who | Job to be done | Opens daily |
|---|---|---|---|
| Designers | Design team | "I'm starting a screen or an illustration. Give me the token, the primitive and the construction rule so I'm not re-deciding." | Foundations, asset library, construction method |
| Engineers | Dev team | "I'm implementing. I need the token *value* and the asset *URL* in a form I can consume — not a picture of it." | `design-tokens.json`, `manifest.json`, assets branch |
| AI agents | Claude skills, Cursor, Hermes | "I've been asked to produce an Intelligaia artifact. I need machine-readable rules and a guardrail list so I don't invent the brand." | `index.json`, `page-spec` blocks, `AGENTS.md` |

**Cross-cutting: new joiners and contractors.** Their job is "where do I start" — which is
exactly what the two start pages answer. Not a separate door, a separate first page.

---

## The two doors

**Home stays a full landing page.** The door choice is a section inside it, not a splash
screen. Once you enter a door you see only that door's content.

| | Design system door | Marketing door |
|---|---|---|
| Audience | Designers, engineers, agents | Rajiv, Arjun, Sandeep, Cheena |
| Sections | Foundations · Asset library · Construction method · Tokens & handoff | Service catalog · Case studies · Whitepapers · Landing pages · Diagrams · Social · **Skills** |
| Start page | "Using the design system" | "Using the marketing kit" |
| Grows with | New tokens, new asset categories | New skills — proposal builder, presentation builder |

---

## Six calls I'm making

1. **Door is derived from the page, not from session state.** Every page knows which
   door it belongs to and renders that nav. Deep links, bookmarks and links pasted into
   Slack all survive. No cookie, no `?door=` to lose.
2. **Nothing is duplicated.** Both doors read the same manifest and the same tokens. A
   door is wayfinding, not a copy of the library.
3. **The marketing door reserves its skills shelf on day one**, with both builders
   visible as *coming*. Growth then costs a row, not a re-architecture.
4. **The design system door gets split into four sections**, not two. Foundations and
   Assets alone read thin against marketing's seven. Construction method and Tokens &
   handoff already exist as content — they're buried inside asset detail and in the repo.
   Promoting them is wayfinding, not new writing.
5. **Dark only on Wednesday.** Light is a mechanical follow-on because both themes share
   structure. Attempting four navigations in two days is how the date slips.
6. **Diagrams go to marketing, as instructed — with one split.** The diagram *artifacts*
   are marketing collateral. The *method* for building them is design-system material.
   Artifact in marketing, method in DS, one link between them.

---

## Timeline

| When | What | Done means |
|---|---|---|
| **Mon 17** | Door architecture | Home rebuilt with door choice; door-scoped nav on all dark pages |
| **Tue 18** | Both doors furnished | Two start pages; marketing skills shelf with builders stubbed; DS tokens & handoff page; START HERE and `index.json` rewritten |
| **Wed 19 AM** | Review + deploy | Walk both doors with Rajiv and Arjun, fix, ship |
| Thu 21 → | Light theme parity | Mechanical port, structure already fixed |
| Following week | Build the two skills for real | Proposal builder first — it has the clearest daily pull |

---

## Flags

- **`START HERE.html` is badly stale.** It advertises 19 light pages and 7 dark, and
  points at `Assets/` and `99 Archive/` folders that no longer exist. It gets rewritten
  regardless of the door work.
- **Light/dark is a theme axis, not an audience axis.** Two doors × two themes = four
  navigations to hold in parity. This is the main long-term maintenance cost of the
  split, and the reason for the dark-only call above.
- **The skills live outside the website today.** `Intelligaia Skills/` is a sibling of
  `website/`, so the site cannot link to it as a page. Wednesday surfaces the shelf and
  links to the repo folder; making skills first-class pages is a follow-on.
- **Landing pages placed in marketing.** They're a go-to-market artifact, but they're
  built from tokens and components. If the design team objects, this is the one section
  worth revisiting.
