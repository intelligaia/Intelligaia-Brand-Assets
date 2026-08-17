# Navigation contract

Four rules. Break any of them and the portal stops telling people where they are.

1. **The header is identical on every page** — logo, Branding, Design system,
   Collateral, Contact us. Entering a section moves the highlight and nothing
   else. Never add or remove header items per page.
2. **The section is derived from the page, never from session state.** Each page
   declares its own section and renders that rail, so a link pasted into Slack
   opens with the right navigation already applied.
3. **Section navigation lives in the left rail**, and only the active branch
   expands. The landing page has no rail.
4. **The navigation always reports position** — between pages via the rail, and
   within a page via a scroll spy that moves the marker as the reader scrolls.

## Adding a section to a page

In-page anchors are **derived from the page itself**. Any
`<section class="section v2-sec">` whose first child is a `<span class="eyebrow">`
becomes an anchor: it receives an `id` slugified from the eyebrow text, appears
in the rail beneath its parent, and the scroll spy picks it up.

Give a new section an eyebrow and it self-registers. There is no list to
maintain, and no rail entry should ever be hand-written for an in-page anchor.

## What to refuse

| Request | Correct response |
|---|---|
| Add a header item to one page | Refuse. The header is identical everywhere; only the highlight moves. Put it in the rail. |
| Hand-write a rail sub-item for an in-page anchor | Refuse. Give the section an eyebrow and it self-registers. |
| Duplicate an asset or page into the other section | Refuse. A section is wayfinding; link across instead. |

Full agent contract: [`AGENTS.md`](https://github.com/intelligaia/Intelligaia-Brand-Assets/blob/main/AGENTS.md)
