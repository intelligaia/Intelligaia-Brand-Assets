# Playbook — Proposal doc

A **proposal doc** exists to win or scope client work. It is tight, scannable, and modern — the
opposite of a text-heavy description. Its reader is a client decision-maker who is busy and skeptical.
Profile key: `proposal`. This is the type where the **technical treatment** most often applies.

Read `../brand-system.md`, `../voice-and-tone.md`, `../guardrails.md` first.

## 1. Recognise it

Route here for: "proposal", "pitch", "scope of work", "SOW", "engagement doc", "our approach to <their
problem>", "quote for…", anything aimed at getting a client to say yes. If it only *explains* → 
`description.md`. If it's a technical design for an already-won project → `architecture.md`.

## 2. Read the client FIRST — this decides the treatment

A proposal is written *to a specific client*, so the first move is to read them. Establish, from the
user:
- **Who is the client and what do they do?** Their industry and sophistication set the tone.
- **Is this a deep-tech / AI client?** This is the switch:
  - **Deep-tech / AI client** (an ML platform, a dev-tools company, an AI product team) → set
    `meta.treatment: "technical"`. Monospace eyebrows/labels/spec labels, tighter grid, and more
    technical vocabulary left unglossed. Still Montserrat, still gold + navy — see the *Technical
    treatment* table in `../brand-system.md`.
  - **Everyone else** (a bank, a hospital, a retailer, a government body — even if the *project* is AI)
    → **standard treatment.** A regulated or non-technical buyer reads "techy" styling as noise. The
    project being about AI does **not** make the client a tech client.
  - **Unsure?** Standard. Ask the user if in doubt; don't guess a client into the technical treatment.
- **What is their problem, in their words?** Capture it verbatim if given — the proposal must open by
  proving you understood it.
- **What outcome makes this a yes?** That outcome is the lede.

## 3. Perceive the input (and protect content integrity)

Bucket what's supplied into: **problem**, **approach**, **scope/deliverables**, **timeline**,
**proof points**, **pricing**, **next step**. Then the hard rules bite here more than anywhere:
- **Never invent pricing, timelines, team names, metrics, or client logos.** If not supplied →
  `[TK: pricing]`, `[TK: timeline]`, etc., and list every gap in the run summary. A proposal with made-up
  numbers is a liability, not a draft.
- Proof points must be real and supplied. No "trusted by industry leaders" unless the user named them.
- If the user marks this a draft, set `meta.draft: true` (adds the DRAFT cover mark).

## 4. Structure (skeleton)

1. **Cover** — the mandatory gold-forward cover (page 1): `eyebrow` `Proposal`, `title` = engagement
   name, `client`, `project`, `purpose` = the outcome in one line, plus `date` / `docId` /
   `confidential`. Client + project fill the gold card.
2. **Table of contents** — a heading-based `contents` block listing the proposal sections in order,
   then a `pagebreak`. In DOCX this renders as a Word TOC field. In Google Docs, insert the native
   Table of contents from Page elements after the `h1` sections exist.
3. **The problem** — their challenge in their words, 2–4 sentences, no filler.
4. **Our approach** — how Intelligaia solves it; short paragraphs or tight bullets.
5. **Scope** — `kv` or `table`: workstreams / deliverables.
6. **Timeline** — `table` or `numbered` phases.
7. **Why Intelligaia** — 3 crisp, real proof points.
8. **Investment** — pricing `table` **only if figures supplied**; else `[TK: pricing]`.
9. **Next steps** — one short, concrete CTA.

## 5. Draft (voice + density)

- **Density: low.** Whitespace-forward, scannable, "modern". Short declarative sentences.
- Benefit-led, not feature-led. Say what the client gets, then how.
- One **gold** hero moment allowed — a `callout` with the single most important promise, or one hero
  stat (a real number). One dominant gold element per page, never scattered.
- Emphasis by weight (`**…**` → navy bold), never colour.
- Technical treatment ≠ dense. Even techy, keep it scannable — mono is for *labels*, not for turning
  the whole doc into a terminal.

## 6. Assets

A `marketing-section` PNG hero is optional on page 1–2 if it matches the engagement. Pricing/scope are
tables, not images. Never a stock illustration for its own sake.

## 7. Build

- `docType: "proposal"`; set `meta.treatment` per the client read in step 2; start blocks with
  `contents` + `pagebreak`.
- `node ../../scripts/build_docx.js <spec.json> <out.docx>` → QA render (check gold is one dominant
  element per page, mono labels render in technical mode) → deliver with summary incl. treatment + gaps.

## 8. Type-specific guardrail deltas

- **No invented commercials.** This is the top failure mode for proposals — every number traces to the
  user or is `[TK]`.
- Don't reorder a client's required RFP sections without permission.
- Length **3–8 pages**; if it balloons, it's drifting toward a description — pull it back.
- Only ever one accent = gold. The technical treatment changes *fonts on labels + density*, never the
  palette.
