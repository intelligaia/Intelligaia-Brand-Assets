# Dynamic User Story Generation

## Purpose
Generate evidence-driven CPQ/Q2C stories at runtime. Reference stories and patterns are not a fixed answer catalog.

## Runtime Chain
**Evidence → Actor → Trigger/Context → Need/Task → Decision/Action → Specific Business Outcome → State/Data → Acceptance → Exceptions → Traceability**

## Runtime Template
> **As a** `[evidenced actor/role]`  
> **When** `[evidenced business trigger/context, when useful]`  
> **I want** `[specific need/action/capability]`  
> **So that** `[specific business outcome for this actor in this situation]`

`When` is optional. Do not fill the other elements with generic prose.

## Generate the Business Outcome
Derive `So that` from:
**Actor + Trigger + Decision/Action + Desired Consequence**

Examples of outcome dimensions include explaining commercial impact before commitment, making an approval decision using the relevant consequence, preventing an incorrect order/invoice, completing a lifecycle change without manual reconciliation, understanding charge/credit timing before acceptance, or recovering safely from an uncertain downstream result.

These are outcome dimensions, not reusable sentences.

## Unknown Rationale
If the source supports the need but not the business rationale:
- use **Business Outcome: Validation Needed**;
- optionally create a discovery question;
- if a draft rationale is useful, label it **Hypothesis**.

## Operating Modes
### Evidence-Backed
Source evidence supports the actor, need and outcome. Generate a customer-specific story with provenance.

### Reference-Assisted
Partial evidence exists. Use patterns/reference stories to structure missing questions, not to manufacture facts.

### Discovery
Little/no customer evidence exists. Generate only hypothesis/discovery stories labelled **Hypothesis / Validation Needed**.

## Reference Story Rule
Do not copy a source-backed story into another customer context merely because keywords or platforms match.

## Acceptance Criteria
Source AC comes first. Derived AC may use reusable quality dimensions such as state, validation, authorization, error/recovery, auditability and downstream result, but every criterion must be specialized and derived criteria must be labelled as such.

## Anti-Patterns
- `As a supported role`
- generic `I want visibility...` reused across scenarios
- generic `So that I can make an informed decision`
- generic `So that I can make or communicate the business decision with appropriate context`
- keyword-match copying of reference stories
- treating backlog status as implementation evidence
- inventing actor, source-of-truth, threshold, billing rule or business value

## Traceability
`SRC → normalized finding → STORY → GAP/DEP/IMP where applicable → AC → validation evidence`


## Reusable Story Pattern Files
A heading such as `Story Pattern — Correct Invalid Configuration` names a **scenario archetype**, not a prewritten story.

Under every reusable `Story Pattern` heading, the story body must remain parameterized. Do not hardcode seller/partner, a fixed need, or a fixed business rationale even when that wording seems broadly applicable.

The pattern heading may be static for routing/retrieval. The generated story body must be composed at runtime from evidence.

Example:

### Pattern name
`Correct Invalid Configuration`

### Runtime resolution
- Actor: derived from evidence
- Trigger: derived from the attempted configuration/state
- Need: derived from the actor's task/problem
- Outcome: derived from what the actor must achieve/avoid
- AC/exceptions: derived from source evidence plus explicitly labelled derived quality criteria

A pattern can therefore produce different stories for a seller, partner, deal desk analyst, administrator or API-driven flow without changing the reusable pattern name.
