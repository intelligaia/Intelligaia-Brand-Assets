# Intelligaia Brand Assets

The single source of truth for how Intelligaia work looks and reads — written
for humans, structured for agents.

**[Open the portal →](https://intelligaia.github.io/Intelligaia-Brand-Assets/)**

> This wiki is **generated** from `docs/` in the repository and re-synced on
> demand. It is a reading surface, not a source of truth — if something here
> disagrees with the repository, the repository is right.
>
> Last synced: **17 August 2026**

---

## Where the portal is right now

The portal has been restructured from one flat navigation into **two sections
with their own left-hand navigation**, built in `website/v2/`. Dark theme only;
light follows.

| | |
|---|---|
| **Live** | The site root lands on `website/v2/00 Home.html` |
| **Design system** | `v2/ds/` — Foundations · Asset library · Construction · Tokens & handoff |
| **Collateral** | `v2/mk/` — Service catalog · Case studies · Whitepapers · Landing pages · Diagrams · Social · Skills |
| **Previous** | `dark/` and `light/` keep the flat navigation, untouched and still reachable |

**[Full status, goal framework and timeline →](Status)**

---

## Start here

| You are | Go to |
|---|---|
| Building a screen, an illustration or a component | [Design system](https://intelligaia.github.io/Intelligaia-Brand-Assets/v2/ds/00%20Start.html) |
| Producing something a client will see | [Collateral](https://intelligaia.github.io/Intelligaia-Brand-Assets/v2/mk/00%20Start.html) |
| An engineer who needs values, not pictures | [Tokens & handoff](https://intelligaia.github.io/Intelligaia-Brand-Assets/v2/ds/40%20Tokens.html) |
| An AI agent producing an Intelligaia artifact | [`AGENTS.md`](https://github.com/intelligaia/Intelligaia-Brand-Assets/blob/main/AGENTS.md) |
| New and unsure | Either overview page — both open with what is inside |

---

## The rules that do not bend

- **Colour** — `#FFC800` · `#04050A` · `#4A8BF5` · `#8A5AF0` and theme neutrals.
  Flat fills only. One accent per viewport.
- **Type** — Oswald 400/500 for headings, Geist for everything else.
  **No weight above 500 exists** on web. Presentations are a separate system.
- **Case** — running case in headings; uppercase only below 13px.
- **Numbering** — no `01 / 02 / 03` prefixes on headings or cards.
- **Illustrations** — from the asset library only. Never generated on the fly.
  If nothing fits, **report the gap**.
- **Naming** — the second section is **Collateral**, never "Marketing kit".
  Do not label sections by audience.

See the [navigation contract](Navigation-contract) for how the portal reports
position, and the [design log](Design-log) for why each of these exists.

---

## How this wiki is maintained

It is generated. To update it:

```bash
python3 docs/sync-wiki.py --push
```

Editing a page in the GitHub UI will be overwritten by the next sync. Change
the source document in `docs/` instead.
