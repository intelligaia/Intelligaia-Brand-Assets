# CCW Exception & Recovery Story Patterns

## Purpose
Make failure and recovery first-class story behavior rather than an afterthought.

## Business Validation Failure
Capture:
invalid condition → prevented outcome → preserved quote/configuration state → actionable correction → successful revalidation.

## Technical Failure
Capture:
operation attempted → known/unknown result → source state preserved → safe recovery → final verification.

## Timeout / Unknown Outcome
If outcome cannot be determined:
do not prescribe blind resubmission; require status verification before a potentially duplicating action.

## Partial Success
Capture:
what completed → what did not → overall business status → permitted recovery → reconciliation.

## Duplicate / Retry
Define the required business outcome:
retry must not create unintended duplicate quote/order/lifecycle state.

Exact mechanism requires architecture evidence.

## Stale Version
If the source quote changes while downstream processing is pending, validate the expected handling of stale work.

## Authorization Failure
Protected commercial/customer information should not be exposed when an actor lacks required authorization.

## Support / Operations
Where relevant capture:
business transaction identifier → status visibility → correlation → error context → recovery ownership/domain → audit.

## Recovery Story Pattern
**As a** `[evidenced actor/role]`/operations role  
**I want** to understand and safely recover a failed or uncertain transaction  
**So that** I can complete the intended outcome without corrupting or duplicating commercial state.

## Cross-Layer Links
- `../../integrations/integration-errors.md`
- `../../analysis/acceptance-integration.md`
- `../../analysis/dependency-cross-system.md`

## Guardrail
Do not invent error codes, retry counts, timeouts, queues, support ownership, or CCW recovery implementation.
