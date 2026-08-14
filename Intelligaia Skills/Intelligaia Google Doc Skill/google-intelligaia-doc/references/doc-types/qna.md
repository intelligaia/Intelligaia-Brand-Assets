# Playbook — Q&A doc

The `qna` type covers **two modes**. Decide which one you're in before anything else — they look and
behave differently:

- **Mode A — FAQ / answered Q&A.** *You* supply the answers. An RFP response, a security
  questionnaire you're filling, a client FAQ. Each item is a `qa` block (question + answer).
- **Mode B — Questionnaire / discovery.** *The recipient* supplies the answers. A discovery or
  clarification questionnaire you send a client, with numbered questions grouped by section and a
  **blank response box** under each. Each item is a `qform` block; the doc usually opens with a
  prepared-for header + intro + a `contents` list.

If the ask is "answer these questions" → Mode A. If it's "a questionnaire to send them / for them to
fill in / discovery questions" → Mode B. When unsure, ask.

Profile key: `qna` (same for both modes). Read `../brand-system.md`, `../voice-and-tone.md`,
`../guardrails.md` first.

## 1. Recognise it

Route here for: "Q&A", "FAQ", "answer these questions", "respond to the questionnaire", "RFP
questions", "address the client's queries", or any input that is fundamentally a **list of questions**
needing answers. If the questions are really a system spec → `architecture.md`.

## 2. Read the reader & the source

- **Where did the questions come from?** An RFP, a security review, a client email, a workshop. That
  source sets the register — match it (a security questionnaire answers formally; an FAQ can be plainer).
- **Who reads the answers?** Procurement, security, end users? Sets how much you explain.
- **Treatment:** usually **standard**. Use technical treatment only for a genuinely technical
  questionnaire to a deep-tech audience.

## 3. Perceive the input (answer only what you know)

- **The questions are the user's — preserve them.** Don't reword a question to make it easier; answer
  the one asked. Keep the original order unless the user asks to group.
- **Never invent an answer.** If the user hasn't supplied the fact a question needs, the answer is
  `[TK: …]` (e.g. `[TK: SOC 2 status]`) — never a plausible-sounding guess. This is the whole risk of a
  Q&A doc: a confident wrong answer in a security or RFP response is worse than a marked gap.
- If a question can't be answered truthfully as asked, say so plainly in the answer rather than dodging.

**In Mode B (questionnaire):** the questions are the deliverable. Preserve them **verbatim** (light
typo fixes only), keep the response boxes **empty** (they're for the recipient), strip any stray/test
answers left in a draft, and never invent extra questions. Grey hint text in a template is a hint, not
an answer — mark it clearly (the `muted` kv style does this).

## 4. Structure (skeleton)

**Mode A — FAQ / answered Q&A**
1. **Cover** — eyebrow `Q&A`; title = the topic; lede = a one-line scope ("Answers to the questions
   raised in <context>").
2. *(optional)* Group with `h1` when there are themes ("Commercials", "Delivery", "Security").
3. A run of **`qa`** blocks — each is `question` (Montserrat SemiBold) + `answer` (body). A hairline
   `divider` renders automatically between items.
4. No marketing close. It ends when the questions end.

**Mode B — Questionnaire / discovery**
1. **Cover** — the mandatory gold-forward cover (page 1, automatic): set `meta.eyebrow`
   (`Discovery Questionnaire`), `title`, `client`, `project`, `purpose`, `date`, `docId`. Client +
   project fill the gold card; purpose is the one-line why. (No `subtitle`/`preparedLine`/`coverBreak` —
   those are retired; the cover is always its own page.)
2. **Table of Contents** — automatic (page 2, from your `h1`/`h2` sections). Don't add a manual
   contents block; the generator inserts the TOC for you.
3. **Intro** — one `body` paragraph framing why you're asking.
4. **Sections** — each an `h1`, followed by its numbered **`qform`** items (number + question + a blank
   response box). Keep the client's numbering (1.1, 1.2, …).
5. **Workflow/table asks** — where you want the client to fill a structured template, use `kv` with
   `muted: true` (grey hint text); a filled example + a blank template is a good pattern.
6. No close, no answers — a questionnaire ends when the questions do.

## 5. Draft (voice + density)

- **Density: low per item, many items.** Each answer 1–4 sentences. Lead with the direct answer, then
  the caveat if any.
- Plain, factual, confident where you have the fact; explicitly uncertain where you don't.
- Multi-paragraph answer? Put `\n` between paragraphs in the `answer` field.
- No gold hero moments here — this type is the most restrained. Gold appears only as the cover mark
  and maybe group markers.

## 6. Assets

Essentially none. A Q&A is text. Occasionally a `table` inside an answer (e.g. a pricing breakdown the
question asked for) — only with supplied numbers.

## 7. Build

- `docType: "qna"`.
  - **Mode A:** blocks are mostly `qa`, optionally grouped by `h1`.
  - **Mode B:** `meta.subtitle` / `meta.preparedLine` / `meta.coverBreak:false`; `body` intro;
    `contents`; `pagebreak`; then `h1` + `qform` per section; `kv` with `muted:true` for template asks.
- `node ../../scripts/build_docx.js <spec.json> <out.docx>` → QA render → deliver with a summary that
  **lists every `[TK]` answer** (Mode A) or confirms all boxes are blank and questions preserved (Mode B).

## 8. Type-specific guardrail deltas

- **A marked gap beats a guessed answer** — the single most important rule for this type.
- Don't merge or drop questions; one `qa` block per question asked.
- Keep the questioner's wording for the question; your voice applies to the answer only.
- Length scales with question count (1–4 pages typical); don't inflate answers to fill space.
