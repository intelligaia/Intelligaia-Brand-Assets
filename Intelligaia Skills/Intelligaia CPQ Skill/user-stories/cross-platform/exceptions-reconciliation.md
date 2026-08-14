# Cross-Platform Exceptions & Reconciliation Stories

## Purpose
Make uncertain outcomes, partial success, stale state, duplicates and cross-system mismatch explicit end-to-end behaviors.

## Failure Model
**Attempt → Acknowledgement → Processing State → Known/Unknown Outcome → Recovery Decision → Reconciliation → Final Verified State**

## Story Pattern — Recover Uncertain Transaction
**As a** supported user/operations role  
**I want** to determine the true end-to-end state of a failed or uncertain transaction  
**So that** recovery does not duplicate or corrupt commercial/lifecycle state.

## Scenarios
### Validation Failure
Prevent invalid handoff; preserve source work; explain correction.

### Timeout / Unknown Outcome
Verify downstream state before potentially duplicating retry.

### Partial Success
Track completed, failed and pending components separately.

### Duplicate
Detect/prevent unintended duplicate business outcomes.

### Stale State
Identify which version/state is authoritative before continuation.

### Semantic Mismatch
Surface differences in customer, product, quantity, currency, term, date or commercial meaning.

### Reconciliation
Compare expected source outcome with authoritative downstream result and provide governed correction/ownership.

## Correlation
Use evidenced business/technical identifiers sufficient to trace the transaction across boundaries.

## Acceptance Focus
observable state, safe retry, no duplicate business outcome, preserved source state, correlation and final verification.

## Guardrail
Do not invent retry counts, queues, monitoring tools, support ownership, SLAs or technical mechanisms.
