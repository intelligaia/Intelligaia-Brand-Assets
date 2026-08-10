# AGENTS.md — Intelligaia Brand Assets

Entry point for AI agents, coding assistants and automated workflows. Read this first, then `index.json`.

Compatible with the `AGENTS.md` convention used by Claude Code, Cursor, Codex, Aider, Continue and similar tools. If your tool looks for `CLAUDE.md` or `.cursorrules`, they symlink here.

---

## What this repository is

The single source of truth for how Intelligaia work looks and reads. Two audiences, one source:

- **Humans** browse the HTML portal (`light/` and `dark/`)
- **Agents** parse `index.json`, `assets/manifest.json`, and the `page-spec` JSON block embedded at the bottom of every playbook page

Nothing is documented in one place and defined in another.

---

## Machine entry points

| File | Purpose |
|---|---|
| `index.json` | Repository map — every page, its type, and its spec URL |
| `assets/manifest.json` | 279 assets with dimensions, tags, construction stage, URLs |
| `assets/tokens/design-tokens.json` | W3C design tokens — colour, type, dimension |
| `assets/tokens/figma.json` | Where the Figma source lives and how sync works |
| `assets/AGENTS.md` | Asset-selection contract and failure modes |

Each playbook page also carries an inline block:

```html
<script type="application/json" id="page-spec"> … </script>
```

Fetch the page, extract that block, and you have the complete machine-readable rules for that artifact type.

---

## Branches

| Branch | Contains | Use |
|---|---|---|
| `main` | Full portal — pages, assets, docs | Cloning, contributing |
| `assets` | Assets at root, nothing else | Direct URL consumption |

Raw asset URL pattern:

```
https://raw.githubusercontent.com/intelligaia/Intelligaia-Illustration-Library-/assets/<path>
```

---

## Workflows this repo serves

**Producing an artifact** (landing page, case study, whitepaper, social post, service catalog)
1. Read the relevant playbook page in `dark/` or `light/`
2. Extract its `page-spec` JSON
3. Pull required assets from `assets/manifest.json`
4. Pull tokens from `assets/tokens/design-tokens.json`
5. Build; validate against the playbook's guardrails
6. Report which assets you used, by `id` and `path`

**Reviewing an artifact**
Load the relevant `page-spec`, check the artifact against every entry in `guardrails.do` and `guardrails.dont`, and report violations with the specific rule that was broken.

**Answering a brand question**
Foundations pages (`10`–`13`) define principles, colour and type. Quote them; do not paraphrase from memory.

---

## Hard constraints

These are non-negotiable and apply to every artifact:

- **Colour** — only `#FFC800`, `#04050A`, `#4A8BF5`, `#8A5AF0` plus theme neutrals. Flat fills. No gradients on the yellow. One accent (blue *or* purple) per viewport.
- **Type** — Oswald 400/500 for headings only. Geist for body, labels, links and descriptions. **No weight above 500 exists.** No third display family. No pixel fonts.
- **Case** — running case in headings. Uppercase only below 13px.
- **Numbering** — no `01 / 02 / 03` prefixes on headings or cards.
- **Illustrations** — from `assets/` only. Never generate one. If nothing fits, report the gap.
- **Layout** — 1440px max width, 48px gutter.

---

## Failure modes

| Situation | Correct behaviour |
|---|---|
| No asset matches the brief | Report the gap. Do not synthesise. |
| `manifest.json` unreachable | Stop. Do not fall back to remembered paths. |
| Brief requests an off-brand colour | Flag it, propose the nearest brand colour. |
| Brief requests a bolder font | Refuse. 500 is the ceiling. |
| Figma and repo disagree | Figma wins. Flag the drift for regeneration. |

---

## Contributing as an agent

Changes to tokens must start in Figma, then regenerate `design-tokens.json` and its derived formats. Never hand-edit `tokens.css` or `_tokens.scss` — they are generated.

New assets follow the four-stage construction process documented in `light/21 Construction.html`, then get added to `manifest.json`.
