# User Story Template Guidance

## Purpose
Explain how to complete the reusable CPQ/Q2C story template consistently.

## Identification
### Story ID
Use the library convention:
`<DOMAIN>-<JOURNEY/CAPABILITY>-<NNN>`.

Examples are identifiers only; they do not indicate implementation status.

### Evidence State
Choose the state that describes the story's evidentiary basis:
- **Validated** — supported and applicable to the stated context.
- **Historical** — supported but may describe an earlier state.
- **Hypothesis** — interpretation requiring validation.
- **Proposed** — future-state requirement/design.
- **Unknown / Validation Needed** — applicability or meaning unresolved.

### Platform Scope
Use Cross-Platform when the business outcome genuinely spans systems. Do not assign a platform merely because the source file mentions it.

## Source & Provenance
Always preserve enough source context to answer:
1. Where did this story come from?
2. What exactly did the source say?
3. What did we normalize or interpret?
4. Is the source current/applicable?
5. Is there contradictory evidence?

Use [`../assets/source-index.md`](../assets/source-index.md) as the canonical source registry.

## Normalized Story
Write the business outcome, not the requested implementation.

Source:
“Add copy quote button.”

Possible normalized need:
“Reuse an existing quote configuration under governed business rules.”

Whether a copy button is the solution remains Proposed unless mandated.

## Business Context
Capture why the story exists and the business end state.

Avoid unsupported claims such as:
“will reduce quote time by 50%.”

Instead:
“Intended to reduce repeated configuration effort — impact requires validation.”

## Trigger
Identify what starts the behavior:
user action → lifecycle event/date → approval decision → customer request → system event → exception/recovery.

## Preconditions
Include only conditions required for the scenario.

Do not fill the section with generic CPQ assumptions.

## Main Flow
Use business-level numbered steps.

Prefer:
“System validates configuration eligibility.”

Avoid unsupported implementation:
“Salesforce Apex calls ProductRuleService.”

## Decisions & Rules
Every material branch should identify:
decision → input → expected outcome → authority/source → evidence.

If authority is unclear, mark it unresolved.

## Data & State
Focus on business semantics before physical implementation.

Examples:
customer identity → quote version → product/configuration → currency → term → effective date → subscription baseline.

Do not invent object/field names.

## Platform & Integration
Capture the business handoff:
**Source → Operation/Event → Business Data → Target → Expected Result → Correlation → Status/Recovery**

Technical contracts belong in integration detail only when evidenced.

## Exceptions
Prioritize material cases:
business validation → technical failure → timeout/unknown → partial → duplicate/retry.

Do not add theoretical failures with no relevance.

## Security
Ask whether role affects:
visibility → edit → discount → approval → ordering → lifecycle action → commercial/billing data.

Exact permissions require evidence.

## Dependencies
Create a `DEP-*` record when a prerequisite is material enough to manage independently.

A relationship alone is not a dependency.

## Impact
Create `IMP-*` when change consequences/risk require dedicated assessment.

Possible impact is not measured impact.

## Acceptance Summary
Keep the story concise. Capture the few outcomes that define success, then link to detailed `AC-*` criteria.

## Readiness
Use the story-analysis readiness framework. A story may need refinement even when the one-line statement is clear.

## Progressive Disclosure
The story file should remain a navigation and requirement artifact. Put detailed reusable analysis in the Analysis layer rather than duplicating it inside every story.
