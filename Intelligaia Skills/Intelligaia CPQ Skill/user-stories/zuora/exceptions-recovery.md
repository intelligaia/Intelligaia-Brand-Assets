# Zuora Lifecycle Exception & Recovery Story Patterns

## Purpose
Cover lifecycle failure, uncertainty, overlap and reconciliation without corrupting subscription or billing state.

## Validation Failure
Capture:
invalid lifecycle request → prevented outcome → preserved baseline → actionable correction.

## Pending Conflict
When another lifecycle transaction is pending:
identify conflict → preserve authoritative state → determine permitted sequencing/resolution from evidence.

## Technical Failure
Capture:
requested change → known/unknown processing state → source/lifecycle state preserved → recovery → final verification.

## Timeout / Unknown Outcome
Do not prescribe blind retry when the lifecycle result may already exist. Verify authoritative status first.

## Partial Success
If lifecycle and billing/service components can complete independently, capture component states separately.

## Duplicate / Retry
The required business outcome is no unintended duplicate amendment/order/lifecycle effect.

Exact idempotency mechanism requires evidence.

## Reconciliation
Compare:
requested/approved change → resulting subscription state → billing/service consequence.

Mismatch should be visible and recoverable according to operational design.

## Story Pattern — Recover Lifecycle Transaction
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

## Cross-Layer Links
- `../../integrations/integration-errors.md`
- `../../analysis/acceptance-integration.md`
- `../../analysis/dependency-cross-system.md`
- `../../analysis/impact-commercial-lifecycle.md`

## Guardrail
Do not invent Zuora retry mechanisms, status names, workflow ownership, queues, SLAs, or reconciliation implementation.
