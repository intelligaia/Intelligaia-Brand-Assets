# Guardrails & limitations

Two parts: **hard rules** the skill must never break, and **honest limitations** — the borders of what
this skill can and cannot do, disclosed so no one is surprised.

## Hard rules (never break)

**Brand**
- Colours: only the palette in `brand-system.md` (gold `FFD700`, navy `002B5C`, ink `231F20`, cream,
  grays, sparing green/coral, diagram pastels). No other hex, no gradients, no shadows, no outlines.
- Gold is the identity and the only accent — **no blue/purple** (that's the website system). Gold text
  is never on white; text on gold is always navy or black; gold never sits behind body-length text.
- Type: **Montserrat only** — ExtraBold/Black/Bold for titles, SemiBold/Bold for emphasis, Medium for
  body/labels. No second display family. A monospace is allowed for literal code/specs in architecture
  docs only (functional, not decorative).
- No `01 / 02` number prefixes baked into heading text.
- Logo never recoloured to a non-brand hue; illustrations never recoloured, stretched, or cropped.
- **Every document opens with the mandatory gold-forward cover page** (`coverElements()`): logo +
  cream-arc + starburst motifs, title, the gold Client/Project card, and Purpose. Its required fields
  are `client`, `project`, `purpose` (+ `title`, `eyebrow`) — **ask if missing**, and if still unknown
  render `[TK: …]` rather than inventing a client, project, or reason for the document.

**Content integrity** (inherited from the org's skill-builder rule "never invent content")
- Never invent a metric, client name, testimonial, quote, date, fee, headcount, or outcome. If it's
  needed and not supplied, write `[TK: …]` and list it in the run summary.
- Never generate an illustration or a diagram image. Select from the manifest or leave a captioned
  placeholder.
- Never upgrade an unapproved draft to a "final" look without preserving that it is a draft (add a
  `DRAFT` eyebrow/watermark line when the user says it's a draft).
- Draft copy is the user's to approve — the skill writes a *first draft in the house voice*, it does
  not assert claims as verified fact.

**Output**
- Every run ends with a summary: doc type, accent, page count, assets used (`id` + `path`), and every
  `[TK: …]` gap left open.
- The document is "done" only after a rendered visual QA pass (render to images, look at every page).
  A file that opens is not proof the pages are correct.

## Failure modes

| Situation | Correct behaviour |
|---|---|
| No manifest asset matches the brief | Captioned placeholder + gap in summary. Never generate one. |
| User asks for an off-brand colour | Flag it, offer the nearest brand hue, do not comply silently. |
| User asks for an off-brand font | Refuse; Montserrat is the system (Arial only as a portability fallback). |
| User asks for a diagram image and supplies none | Placeholder frame + `[TK: diagram]`. Never fabricate. |
| Required proof/number missing | `[TK: …]`, keep drafting, list it. Do not invent. |
| Cover field (client/project/purpose) not supplied | Ask during scoping; if still unknown, render `[TK: …]` on the cover. Never invent a client or purpose. |
| User expects the Google Docs menu-inserted Table of contents | Do not fake it with bookmarks, named ranges, or local DOCX output. Create real headings first, then insert the TOC in Google Docs' Page elements UI if an interactive editor session is available; otherwise disclose the manual step. |
| User asks for slides | Out of scope → `intelligaia-deck-design`. |
| User asks for a web/HTML page | Out of scope → the library's web playbooks / `intelligaia-artifact-design` covers styled artifacts. |
| User pastes approved copy and wants *only* styling | Fine — run in style-only mode (skip drafting), still apply the brand + QA. |
| Content for one type reads like another | Pull back to the tone row in `voice-and-tone.md`. |

## Limitations (be honest about these)

1. **Font rendering on the recipient's machine.** Montserrat is a Google font, not installed with
   Office. The generator sets Montserrat by *name* with an Arial fallback. A recipient without
   Montserrat sees Arial, so exact metrics shift (size containers with ~10% slack). True fidelity needs
   either (a) Montserrat installed on the opening machine, or (b) the font **embedded** into the .docx
   — embedding is a manual post-step (`word/fontTable.xml` + embedded font parts) that `docx-js` does
   not do natively, and it inflates file size. The skill discloses which mode was used; it never
   silently promises pixel-fidelity. Never fall back to Aptos.
2. **SVG assets don't embed.** Icon/wave/logo SVGs won't embed reliably through the generator. Only
   PNGs embed; the bundled PNG logo + lockup + arc are used for brand furniture. SVG motifs are
   generally skipped in DOCX by design (enterprise docs stay clean).
3. **QA renders via LibreOffice**, which substitutes Montserrat with a metric-similar face — so QA
   screenshots show approximate type. Judge layout/hierarchy/colour from QA, not exact letterforms.
4. **It drafts; it does not research.** No web lookups, no fact-finding, no case-study authoring. It
   turns a brief + supplied facts into an on-brand draft. Verification of claims is the human's.
5. **Four doc types only.** Description, proposal, architecture, Q&A. A genuinely different artifact
   (a contract, a spreadsheet, a slide deck) is out of scope.
6. **Not a template-filler for arbitrary client templates.** It produces Intelligaia-branded docs. If a
   client mandates their own template, that's a different job.
7. **Google Docs native TOC is editor-native.** The DOCX generator can create a Word TOC field with
   visible dot leaders and page numbers, but that is not the same as Google Docs' **Insert → Table of
   contents** element. The public Google Docs API request surface does not expose a request for creating
   that editor-native TOC. For Google Docs deliverables, create the heading structure and insert the TOC
   in the editor UI, then verify it visually.
