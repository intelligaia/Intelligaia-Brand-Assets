# CCW Ordering Story Patterns

## Scope
Normalize source stories covering quote-to-order handoff, order readiness, submission, status, completion, and downstream correlation.

## Story Pattern — Submit Eligible Quote
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

Validate actual readiness prerequisites from evidence.

## Source Integrity
Capture:
source quote/version → acceptance/approval if required → customer/partner identity → commercial state → order correlation.

## Submitted vs Completed
If downstream processing is asynchronous, distinguish:
submission accepted → processing/pending → completed → failed/partial/unknown.

Do not call submission “complete” without evidence.

## Duplicate Prevention
If retry is possible, analyze whether repeated submission could create duplicate business outcomes.

Do not invent idempotency mechanics.

## Partial Processing
Where applicable capture:
completed component → failed/pending component → overall status → safe next action → reconciliation.

## Result
Identify the business evidence expected after completion:
order reference/state → correlation → downstream state/status.

## Cross-System Boundary
If another platform owns order, subscription, billing or fulfillment completion, link/create a cross-platform story.

## Cross-Layer Links
- `../../capabilities/ordering.md`
- `../../journeys/new-business.md`
- `../../integrations/end-to-end-data-flow.md`
- `../../analysis/acceptance-lifecycle.md`

## Guardrail
Do not invent CCW order APIs, downstream systems, status names, retry behavior, or completion semantics.
