# Salesforce Exception & Recovery Story Patterns

## Validation Failure
Capture invalid/missing business context → prevented outcome → preserved work → actionable correction.

## Stale State
If opportunity, quote, approval or downstream state changes concurrently, identify authoritative state and whether recalculation/revalidation is required.

## Technical Failure
Capture attempted operation → known/unknown outcome → preserved source state → safe recovery → final verification.

## Timeout / Unknown Outcome
Do not recommend blind retry when downstream processing may already have succeeded.

## Duplicate / Partial
Repeated action must not create unintended duplicate commercial/lifecycle outcomes. Where multiple systems participate, capture component and overall business state.

## Authorization
Unauthorized actors/systems must not gain protected customer or commercial information.

## Reconciliation
Correlate source and target transactions and identify mismatched state where required.

## Related
- [`../../integrations/integration-errors.md`](../../integrations/integration-errors.md)
- [`../../analysis/acceptance-integration.md`](../../analysis/acceptance-integration.md)
- [`../../analysis/impact-system-data.md`](../../analysis/impact-system-data.md)

## Guardrail
Do not invent errors, retry mechanisms, support queues, automation, ownership or SLAs.
