# Daily Updates

## 17 August 2026

---

### What was covered today

**The new structure of the website is implemented.** The site is no longer one
flat list of pages behind a single navigation. It is now a landing page and two
separate routes, each with its own left navigation and its own set of pages.

**Landing page**

- Opens on a hero, then a clear choice of the two routes as full-width cards
- Each card carries real illustrations, what is inside, and a direct way in
- Not a splash screen — it is a full page you can scroll

**Design system route**

- Overview — what is inside and what to do before you start
- Foundations — philosophy, three principles, four colours, two type families, tokens
- Asset library — all illustrations by category, at full size, with dimensions and download
- Category and asset detail pages beneath it
- Construction method — the grid, the four primitives, the three stages
- Tokens & handoff — the files to import and the asset URL pattern

**Collateral route**

- Overview — what is inside and how to use it
- Service catalog, Case studies, Whitepapers
- Landing pages, Diagrams, Social
- Skills — where the proposal builder and presentation builder will sit

**Left navigation**

- Replaces the top navigation once you are inside a route
- Shows only that route, so you are never reading the other half of the site
- Grouped with labels — Reference and Handoff on one side, Documents, Digital and Automate on the other
- Only the section you are in expands; everything else stays collapsed, so the list stays short
- Foundations opens to its five sub-sections; Asset library opens to its seven categories
- **The selection follows the scroll** — as you read down a page the marker moves with you, so you always know where you are
- Clicking a sub-section jumps to it, and the address bar updates so the exact spot can be shared
- Collapses behind a menu button on smaller screens

**How the pages are structured**

- The header is identical everywhere — entering a route only moves the highlight
- Every page opens with a title and one line of context, then goes straight into content
- Overview pages lead with an illustration and use cards with real thumbnails rather than plain text
- Reference pages are broken into labelled sections, and each section automatically appears in the left navigation
- Asset pages lead with the finished asset at full size, with details and download beside it
- Document pages lead with the artifact itself, then a short explanation of the format

**Written from scratch today**

- Two overview pages, one per route
- Construction method
- Tokens & handoff
- Skills

---

### Structure changed after Rajiv's feedback

**What Rajiv suggested**

- Keep one repository and one deploy — do not split the source
- Split the site into two routes: one for marketing collateral, one for the design system
- Give each route its own home, its own navigation, and a page explaining how to start using it
- Structure the marketing route so it can grow — a proposal builder and a personalised presentation builder are coming
- Have both live by Wednesday 19 August

**What I changed in response**

- Made the landing page a real page with a choice inside it, rather than a gate in front of the site
- Moved section navigation out of the top bar and into a left rail, so each route only shows its own pages
- Kept the header identical across the whole site so nothing appears or disappears when you move between routes
- Renamed the second route from Marketing kit to **Collateral** — the old name did not cover landing pages, diagrams or skills
- Removed audience labels from the cards; who a route is for is written into the sentence instead
- Added the Skills page now, with both builders listed, so they can be added later without rebuilding the route
- Built the new structure in a separate folder, leaving the earlier version working and untouched

---

### Next plan

- Port the light theme
- Wide-display check on the card thumbnails
- Decide how the left navigation should behave on the viewer pages — service catalog, case studies, diagrams and social have no in-page sections to follow
- Walk both routes end to end before the Wednesday review
- Build the proposal builder first — it has the clearest weekly pull

---

### What is missing

- Light theme — dark only at the moment
- The two skills are listed but not built; the buttons point to the repository folder
- Figma and Git links on the asset pages are placeholders
- Landing page content not yet added
- No date agreed for retiring the earlier version

---

### Needed from me

- Figma file link, and the Git and skill links for the service catalog
- Landing page data
- Further whitepaper and case study examples
- A decision on when the earlier version is retired
