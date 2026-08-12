# End-to-End Integration Requirement Patterns

## Source of Truth
**Story:** As a process owner, I want each business concept to have an authoritative source so conflicting updates are prevented.
**Acceptance:** Defined concepts identify authoritative create/update ownership and consumer behavior.

## Correlation
**Story:** As operations, I want a transaction traceable across systems.
**Acceptance:** Required source, target and correlation identifiers are preserved across defined handoffs.

## Quote-Version Integrity
**Story:** As Order Operations, I want the order created from the commercial version actually accepted.
**Acceptance:** Accepted quote/version is identified and correlated to the generated order.

## Data Contract
**Story:** As an integration owner, I want every handoff to have explicit required data and semantics.
**Acceptance:** Source, transformation/default, target, validation, ownership and error behavior are documented for required fields/concepts.

## Configuration Fidelity
**Story:** As fulfillment, I want configured product intent preserved downstream.
**Acceptance:** Defined hierarchy, components, attributes and quantities are mapped and validated.

## Commercial Fidelity
**Story:** As finance/operations, I want downstream commercial state match the accepted transaction.
**Acceptance:** Defined currency, price/rate, discount, quantity, term/date and charge dimensions are preserved or explicitly transformed.

## Idempotency
**Story:** As operations, I want safe retries without duplicate business outcomes.
**Acceptance:** Reprocessing the same governed operation does not create unintended duplicate target transactions.

## Version / Stale-Update Protection
**Story:** As a process owner, I want stale asynchronous responses prevented from overwriting newer commercial state.
**Acceptance:** Defined version/state checks detect and handle superseded updates.

## Partial Success
**Story:** As operations, I want multi-component transactions recoverable when only some components fail.
**Acceptance:** Completed, pending and failed components remain distinguishable and retry/compensation avoids replaying successful business actions.

## Actionable Errors
**Story:** As support, I want integration failures include enough context for resolution.
**Acceptance:** Defined exceptions expose transaction/component, handoff, category, owner, safe action and retry eligibility where applicable.

## Pending State
**Story:** As a seller/operations user, I want asynchronous downstream processing visible.
**Acceptance:** The user can distinguish submitted/queued/pending/completed/failed business states according to the approved process.

## Reconciliation
**Story:** As governance, I want expected source state compared with actual downstream state.
**Acceptance:** Defined match dimensions identify unexplained differences and route them to an owner.

## Lifecycle Concurrency
**Story:** As lifecycle operations, I want overlapping amendment, renewal and cancellation transactions handled safely.
**Acceptance:** Approved sequencing/concurrency policy prevents calculation or execution from stale/conflicting state.

## Effective-Date Integrity
**Story:** As billing/service operations, I want effective-dated changes execute at the intended business time.
**Acceptance:** Processing timestamps and business effective dates remain distinguishable and downstream state is reconciled to the approved effective date.

## Guardrail
Do not invent system ownership, field mappings, APIs, event topics, delivery guarantees, retry counts, idempotency keys, SLAs, support ownership or platform mechanics. Mark missing implementation details **Unknown / Validation Needed**.
