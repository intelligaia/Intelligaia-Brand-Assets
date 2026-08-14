# Zuora Amendment Story Patterns

## Amendment Model
Use:

**Current Baseline → Pending Changes → Requested Delta → Effective Date → Commercial Result → Approval/Acceptance → Processing → Resulting Subscription State → Billing/Service Consequence**

## Change Types
Source stories may concern:
add → remove → quantity change → product/charge change → term/date change → commercial change.

Treat actual supported amendment types as evidence-dependent.

## Story Pattern — Modify Existing Subscription
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

## Baseline
Verify the change is calculated against the intended authoritative subscription state.

## Pending Change Conflict
If another future/pending change exists, define expected behavior from evidence:
allow → sequence → merge → reject → require resolution.

Do not choose a policy without evidence.

## Effective Date
Capture business meaning and validation:
requested effective date → term boundary if relevant → resulting state timing → billing/service timing.

## Commercial Consequence
Identify intended:
quantity/product delta → recurring/one-time change → credit/charge/proration semantics if evidenced.

Do not invent proration formulas.

## Approval / Acceptance
If amendment economics require approval or customer acceptance, preserve exact transaction/version applicability.

## Completion
Distinguish request/quote approval from downstream lifecycle completion.

## Regression Questions
Consider:
multiple products → future-dated change → pending renewal → cancellation → failed processing → retry → billing mismatch.

## Cross-Layer Links
- `../../platforms/zuora/amendments.md`
- `../../capabilities/amendments.md`
- `../../journeys/amendment.md`
- `../../analysis/acceptance-lifecycle.md`

## Guardrail
Do not infer supported amendment operations, date rules, proration, or billing behavior.
