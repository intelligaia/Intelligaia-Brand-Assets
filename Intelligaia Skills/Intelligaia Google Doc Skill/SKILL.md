---
name: intelligaia-google-doc-skill
description: "Generate on-brand Intelligaia Word (.docx) documents — description docs, client proposals, architecture/diagram docs, and Q&A docs — by drafting the copy in Intelligaia's voice AND applying the corporate design system (Montserrat type, gold #FFD700 + navy + cream, spacing, logo, and approved illustration assets). Use when someone asks for an Intelligaia doc, a description document, a proposal, an architecture/technical write-up, or an FAQ/Q&A as a Word file, or asks to 'make this doc on brand'. NOT for slides (use intelligaia-deck-design), NOT for web/HTML pages, and NOT when the job is only to style already-approved content (use intelligaia-artifact-design)."
---

# Intelligaia Doc Generator

Draft **and** brand Word documents in Intelligaia's corporate identity (the same visual system as
`intelligaia-deck-design`: Montserrat, gold `#FFD700`, navy, cream). This file is the **router**: it
holds the universal rules and workflow, detects which of the four document types is being asked for,
and **redirects you to that type's playbook**, which owns how to perceive the input, read the client,
structure the data, and draft.

## How this skill is organised

```
SKILL.md                      ← you are here: universal guardrails + intent detection + router
references/
  brand-system.md             ← shared visual system (palette, Montserrat scale, spacing, treatment)
  voice-and-tone.md           ← shared house voice + per-type tone dial
  guardrails.md               ← shared hard rules, failure modes, honest limitations
  asset-selection.md          ← shared manifest / imagery rules
  doc-types/
    description.md            ← playbook: intent → client read → data intake → steps → deltas
    proposal.md              ← playbook (home of the technical treatment)
    architecture.md          ← playbook
    qna.md                   ← playbook
scripts/
  build_docx.js               ← renders a doc_spec into the branded .docx
  doc_spec.schema.json        ← the content contract the model fills
  validate.py                 ← automated brand checks on the output
assets/                        ← logo + lockup + arc (brand furniture), manifest.json (illustrations)
```

## Step 1 — Detect the document type (routing)

Read the request and classify it. Then **open the matching playbook and follow it** — do not draft from
this file.

| The user wants to… | Type | Go to |
|---|---|---|
| Explain / introduce what a thing *is* (overview, one-pager, "describe our X") | **description** | `references/doc-types/description.md` |
| Win or scope client work (proposal, pitch, SOW, "our approach to their problem") | **proposal** | `references/doc-types/proposal.md` |
| Communicate a technical design (system/architecture/TDD, data flow, components) | **architecture** | `references/doc-types/architecture.md` |
| Answer a defined set of questions (FAQ, RFP questions, questionnaire) | **qna** | `references/doc-types/qna.md` |

If the ask spans two types, pick the dominant intent and say which you chose; offer to produce the
second as its own document. If genuinely ambiguous, ask one clarifying question before drafting.

## Step 2 — Load the shared rules

Every run, before styling: read `references/brand-system.md` (visual source of truth — **load before
styling**), and keep `references/voice-and-tone.md` and `references/guardrails.md` in mind. Use
`references/asset-selection.md` if a figure is involved.

## Step 3 — Follow the playbook

Each playbook walks the same spine, specialised for its type: **recognise → read the reader/client →
perceive the input → structure → draft → assets → build → type deltas.** The playbook tells you when to
mark `[TK: …]`, which section skeleton to use, and — for proposals/architecture — whether to set the
**technical treatment** (`meta.treatment: "technical"`) based on the client read.

## Step 4 — Build, QA, deliver (universal)

0. **Capture the cover fields.** Every document opens with the mandatory gold-forward **cover page**,
   which needs `client`, `project`, and `purpose` (plus `title` and `eyebrow`/doc type). **Ask for any
   that are missing** during scoping; if still unknown at build time they render as `[TK: …]` — never
   invent a client or a purpose. `company` defaults to Intelligaia.
1. **Draft into the spec.** Write the content as a `doc_spec` JSON (schema:
   `scripts/doc_spec.schema.json`). Never invent a fact — `[TK: …]` for gaps.
2. **Build.** `node scripts/build_docx.js <spec.json> <out.docx>`. Profile + treatment come from the spec.
   The cover and an automatic **Table of Contents** (page 2, from the doc's headings, with computed page
   numbers) are added for you — never hand-build a contents list. Requires the `docx` npm package
   (present wherever the bundled `docx` skill is installed; if `require('docx')` fails, run
   `npm install docx` once); TOC page numbers also use LibreOffice + `pdftotext` at build time.
3. **QA (required).** Render and look at every page:
   ```bash
   python /root/.claude/skills/synced/docx/scripts/office/soffice.py --headless --convert-to pdf out.docx
   pdftoppm -jpeg -r 110 out.pdf page && ls page-*.jpg   # then Read the images
   python scripts/validate.py out.docx                    # automated brand checks
   ```
   Fix and re-render until clean.
4. **Deliver + report.** Return the .docx (and the spec if asked) plus a run summary: type, treatment,
   page count, assets used (`id` + `path`), font mode, and every `[TK: …]` gap left open.

## Universal guardrails (full detail in references/guardrails.md)

These hold for **every** type; playbooks add small deltas, never overrides.

- **Palette:** gold `#FFD700` + navy `#002B5C` + ink + cream + grays only. **No blue/purple** (that's
  the website system). Gold text never on white; text on gold always navy/black; gold never behind body
  text; one dominant gold element per page. No gradients, shadows, or outlines.
- **Type:** Montserrat only. The **technical treatment** may set eyebrows/labels/spec labels in a
  monospace and tighten the grid — it never changes the typeface or palette. A monospace is otherwise
  allowed only for literal code in architecture docs.
- **Content integrity:** never invent a metric, name, quote, date, fee, or outcome — `[TK: …]` instead.
  Never generate an illustration or diagram — select from the manifest or leave a captioned placeholder.
- **Definition of done:** a rendered visual QA pass. A file that opens is not proof its pages are right.

## Boundary vs. sibling skills

Slides → `intelligaia-deck-design`. Style-only on already-approved content → `intelligaia-artifact-design`.
Web/HTML pages → out of scope. This skill is **draft-and-brand for Word documents**, across the four types.
