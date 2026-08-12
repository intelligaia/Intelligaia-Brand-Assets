# Playbook — Description doc

A **description doc** explains what a product, service, capability, or solution *is*, in narrative
form, to a mixed (often non-technical) reader. It is the most text-forward of the four types. Profile
key in `build_docx.js`: `description`.

Read `../brand-system.md`, `../voice-and-tone.md`, `../guardrails.md` first (universal). This file
governs how to think about, gather, and shape a description doc specifically.

## 1. Recognise it (does this playbook apply?)

Route here when the ask is to *explain or introduce* something: "write up what X is", "a description
of our Y service", "an overview doc for Z", "explain our capability", "one-pager describing…".
If the ask is to *win work* → `proposal.md`. To *specify a system* → `architecture.md`. To *answer a
list of questions* → `qna.md`.

## 2. Read the reader (strategy-first)

Before drafting, establish — from the user, not assumption:
- **Who reads this?** Buyer, existing client, internal, general public? Sets vocabulary and how much
  is explained.
- **What outcome does it drive?** Understanding, a next conversation, internal alignment? A description
  doesn't hard-sell — its job is a clear mental model.
- **How technical are they?** Non-technical → gloss terms. Technical → you may keep precise terms but
  still avoid jargon-for-its-own-sake.
- **Client type note:** description docs are almost always **standard treatment**. Only switch to the
  technical treatment (`meta.treatment: "technical"`) if it's explicitly for a deep-tech audience and
  the user asks for a techier feel. When unsure, standard.

## 3. Perceive the input (what you have vs. need)

Sort what the user gave you into: **definition** (what the thing is), **mechanism** (how it works),
**capabilities**, **audience/fit**, **context** (where it sits). Then:
- Missing the one-sentence definition? Ask — it's the spine of the whole doc.
- Missing a capability's substance? Leave it out rather than padding. A short true doc beats a long
  vague one.
- A number, client name, or claim you'd like but weren't given? **`[TK: …]`**, never invented.

## 4. Structure (skeleton — drop empty sections, don't pad)

1. **Cover** — the mandatory gold-forward cover (page 1): `eyebrow` `Description`, `title` = the thing's
   name, plus `client` / `project` / `purpose`. The one-sentence definition becomes the opening `lede`
   on page 2.
2. **Table of contents** — a heading-based `contents` block listing the top-level sections in order,
   then a `pagebreak`. In DOCX this renders as a Word TOC field. In Google Docs, insert the native
   Table of contents from Page elements after the `h1` sections exist.
3. **Overview** — what it is, 1–2 paragraphs.
4. **How it works** — the mechanism in prose; a `numbered` list only if it's genuinely a sequence.
5. **Key capabilities** — `h2` + a paragraph each; bullets only for a true list.
6. **Who it's for** — audience and fit; a `kv` grid works well for fit criteria.
7. *(optional)* **Where it fits** — context, adjacencies, integrations.
8. **Close** — one paragraph, no hard CTA.

## 5. Draft (voice + density)

- **Density: high.** Full paragraphs, narrative flow — this type is allowed to breathe.
- Lead each section with its takeaway sentence, then support it.
- One **bold** emphasis (`**…**`) per section at most, on the sentence that matters — renders as navy
  bold, never a colour change.
- Prefer prose over bullets; a wall of bullets means it should have been a proposal or a spec.
- Concrete over abstract; kill "leverage / seamless / cutting-edge". See `../voice-and-tone.md`.

## 6. Assets

Usually none. At most **one** `figure` — a `marketing-section` PNG from the manifest that matches the
topic (see `../asset-selection.md`), and only if the user wants an illustration. Never decorate.

## 7. Build

- `docType: "description"`, `meta.treatment` omitted (standard) unless told otherwise.
- Blocks start with `contents` + `pagebreak`, then lean on `body`, `h1/h2`, occasional `callout` and `kv`.
- `node ../../scripts/build_docx.js <spec.json> <out.docx>` → QA render → deliver with summary.

## 8. Type-specific guardrail deltas

- Do not let a description turn into a pitch. No pricing, no "why choose us", no CTA button language.
- Length target **2–5 pages**. If it's running longer, it's probably two documents.
- If the user supplies marketing claims, keep them as *their* claims — don't escalate them into
  superlatives.
