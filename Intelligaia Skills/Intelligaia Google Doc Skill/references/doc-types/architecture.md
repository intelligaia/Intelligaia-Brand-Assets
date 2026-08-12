# Playbook — Architecture / diagram doc

An **architecture doc** communicates a technical design — the shape of a system, its components, how
data moves, and the decisions behind it — to engineers and technical leads. It is precise and
unambiguous. Profile key: `architecture`. It is technical by nature, so the **technical treatment** is
a natural fit (though not mandatory).

Read `../brand-system.md`, `../voice-and-tone.md`, `../guardrails.md` first.

## 1. Recognise it

Route here for: "architecture doc", "system design", "technical design doc / TDD", "how the system
works", "data flow", "components diagram", "solution architecture". If it's selling the work →
`proposal.md`. If it's a plain-language overview for non-engineers → `description.md`.

## 2. Read the reader

- **Audience is technical** — engineers, architects, technical leads. Precise terms are expected and
  should *not* be glossed the way a description would.
- **Treatment:** technical treatment is appropriate here for a deep-tech context (mono labels suit
  component names and specs). Standard is fine too — decide by whether the doc benefits from a spec-sheet
  feel. Either way the body stays Montserrat.
- **What decision does the doc support?** A build? A review? A migration? That frames the depth.

## 3. Perceive the input (never fabricate a system)

Bucket into: **context/boundaries**, **components**, **data flow**, **decisions/trade-offs**,
**non-functional** (scaling, security, observability). Then:
- **Never invent architecture.** If the user hasn't given a component, an endpoint, or a decision,
  do not make one up to fill the section — mark `[TK: …]` and ask.
- **Never fabricate a diagram image.** If no diagram is supplied, use a `figure` block with no image —
  it renders a captioned placeholder frame + `[TK: diagram]`. Selecting a real diagram from the
  manifest is fine; drawing a fake one is not.
- Literal code, endpoints, and config go in **monospace** (the sanctioned functional exception) — put
  them in `table` cells or inline; keep prose in Montserrat.

## 4. Structure (skeleton)

1. **Cover** — the mandatory gold-forward cover (page 1): `eyebrow` `Architecture`, `title` = system
   name, `client`, `project`, `purpose` = the system's job in one line. The system's shape opens on
   page 2.
2. **Table of contents** — a heading-based `contents` block listing the technical sections in order,
   then a `pagebreak`. In DOCX this renders as a Word TOC field. In Google Docs, insert the native
   Table of contents from Page elements after the `h1` sections exist.
3. **Context** — what it does and its boundaries, 1–2 paragraphs.
4. **System diagram** — a `figure` (supplied image or captioned placeholder). Never faked.
5. **Components** — a `table`: component · responsibility · tech (tech column reads as spec/mono).
6. **Data flow** — a `numbered` sequence.
7. **Key decisions / trade-offs** — `callout`s or a list, each with its reason; a `quote` block works
   for a decision record.
8. **Non-functional notes** — scaling, security, observability — only what's supplied.

## 5. Draft (voice + density)

- **Density: medium.** Prose for context and decisions; tables and sequences for structure.
- Precise and unambiguous — an engineer should be able to build from it. No marketing adjectives.
- State each decision *with its reason* ("chose X over Y because Z"). A decision without a rationale is
  incomplete.

## 6. Assets

The diagram is the main visual and comes from the user (a real diagram image via `localPath`/`rawUrl`)
or the manifest. Component/flow tables are text, not images. No decorative illustration.

## 7. Build

- `docType: "architecture"`; `meta.treatment` optional (technical suits many); start blocks with
  `contents` + `pagebreak`.
- Use `table` for components (Tech column) and `numbered` for flows.
- `node ../../scripts/build_docx.js <spec.json> <out.docx>` → QA render → deliver with summary + every
  `[TK: diagram / component / decision]`.

## 8. Type-specific guardrail deltas

- **No fabricated systems or diagrams.** Gaps are `[TK]`, always.
- Monospace is for *literal* code/endpoints/config only — not for whole paragraphs, not for emphasis.
- Length **2–6 pages**. Depth over breadth; a precise short spec beats a padded long one.
- Palette unchanged: gold + navy. Diagram pastels (`brand-system.md`) are only for diagram fills, never
  body or headings.
