# website/ — the brand portal

The Intelligaia brand portal, served live by GitHub Pages:
**https://intelligaia.github.io/Intelligaia-Brand-Assets/**

This folder is a single source of truth — to avoid drift, it is **not** re-documented here. Start at the real entry points instead:

| You are | Start at |
|---|---|
| A human | [`START HERE.html`](START%20HERE.html) — the portal entry point |
| An agent | [`index.json`](index.json) — the machine-readable map; then each page's inline `page-spec` block |
| Looking for assets | [`assets/manifest.json`](assets/manifest.json) and [`assets/AGENTS.md`](assets/AGENTS.md) |

For the brand rules, constraints and failure modes that govern everything in here, see [`../AGENTS.md`](../AGENTS.md).

## Layout

```
website/
├── index.html        redirect → START HERE.html
├── START HERE.html   human entry point
├── index.json        machine-readable repository map
├── assets/           shared by both themes — 279 files (illustrations, icons, tokens, marketing…)
├── light/            21 pages
└── dark/             12 pages
```

Both themes read from the same `assets/` folder — nothing is duplicated.

> Note for maintainers: GitHub Pages deploys the contents of this folder (see `.github/workflows/pages.yml`). This `README.md` is ignored by the browser and rendered only in the GitHub repo view, so it is safe to keep here.
