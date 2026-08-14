---
name: google-intelligaia-doc
description: "Generate on-brand Intelligaia documents — description docs, client proposals, architecture/diagram docs, and Q&A docs — by drafting the copy in Intelligaia's voice AND applying the corporate design system (Montserrat type, gold #FFD700 + navy + cream, spacing, logo, approved illustration assets), then DELIVERING THE RESULT AS A NATIVE GOOGLE DOC in the user's Drive, named 'Intelligaia — ' followed by the document title. Use when someone asks for an Intelligaia doc, a description document, a proposal, an architecture/technical write-up, or an FAQ/Q&A. NOT for slides (use intelligaia-deck-design), NOT for web/HTML pages, and NOT when the job is only to style already-approved content (use intelligaia-artifact-design)."
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
4. **Publish as a Google Doc (the output).** The `.docx` from step 2 is an **intermediate**, not the
   deliverable. Upload it to Google Drive and let Drive convert it to a native Google Doc:
   - `mcp__Google_Drive__create_file` with `base64Content` = the base64 of the built `.docx`,
     `contentMimeType` = `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
     and **`title` = `Intelligaia — <meta.title>`** (do NOT set `disableConversionToGoogleType`, so it
     converts to `application/vnd.google-apps.document`). Optionally set `parentId` to a target folder.
   - Confirm with `mcp__Google_Drive__get_file_metadata` and return **only the Google Doc link** — do not
     hand back the `.docx`.
   - **QA the converted Doc, not just the .docx**: Drive's conversion reflows things — Montserrat
     substitutes to a Google font, the cover motif can shift, and the TOC field becomes Google's TOC.
     Open the Doc, check the cover, TOC, and tables, and note any drift in the run summary.
   - Requires the **Google Drive connector**. **Reliability caveat:** `create_file` needs the whole
     `.docx` inline as `base64Content`; passing a multi-KB binary that way can fail (invalid base64) or
     corrupt. If the create call errors, **do not retry blindly** — fall back: deliver the branded
     `.docx` and tell the user to open it as a Google Doc via Drive → **Open with Google Docs** (drag the
     file into Drive), which preserves the design. Only the `textContent` path (plain text → Google Doc)
     is fully reliable programmatically, and it loses all brand/formatting, so it's a last resort.
   - If the Drive connector isn't connected, say so and deliver the `.docx`.
5. **Report.** Run summary: type, treatment, page count, assets used, font mode, `[TK: …]` gaps, and the
   Google Doc link.

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
