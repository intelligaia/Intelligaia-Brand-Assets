# Amendments — Requirement & Acceptance Patterns

## Authoritative Source State
**Story:** As a lifecycle seller, I want amendments initiated from the authoritative subscription so I do not change stale customer state.
**Acceptance:** The transaction references the approved subscription/source version and current effective products, quantities, configuration and dates.

## Add Product
**Story:** As a seller, I want to add an eligible product to an existing subscription.
**Acceptance:** Product eligibility, configuration, effective date, term treatment, pricing and downstream lifecycle references follow approved rules.

## Quantity Change
**Story:** As a seller, I want to increase or decrease quantity while clearly seeing the resulting quantity.
**Acceptance:** Current, requested delta/result and final quantity semantics are explicit and validated.

## Remove Product
**Story:** As a seller, I want product removal to account for dependencies.
**Acceptance:** Approved dependency and eligibility rules are evaluated before removal progresses.

## Upgrade / Downgrade
**Story:** As a seller, I want eligible product migrations guided so the source product transitions to the correct target state.
**Acceptance:** Approved source-target mapping, configuration migration, dates and commercial treatment are applied.

## Effective Date
**Story:** As a seller, I want amendment effective dates validated so changes take effect according to policy.
**Acceptance:** The requested date is checked against defined term, billing and lifecycle rules before progression.

## Proration
**Story:** As a seller, I want mid-period commercial effects calculated consistently.
**Acceptance:** Approved proration inputs and convention are used; the result remains traceable to the effective date and pricing basis.

## Future-Dated Change
**Story:** As a seller, I want future changes visible before they become active.
**Acceptance:** Current state remains distinguishable from pending/future state and subsequent transactions account for the pending change according to policy.

## Concurrent Amendment
**Story:** As a lifecycle owner, I want overlapping changes controlled so multiple amendments do not create inconsistent state.
**Acceptance:** New changes are blocked, sequenced, rebased, merged or otherwise handled according to approved concurrency policy.

## Cancellation
**Story:** As a seller/operations user, I want mid-term cancellation to apply the correct financial and entitlement effects.
**Acceptance:** Eligibility, effective date, approval and billing/entitlement actions follow approved policy.

## Change-Order Lineage
**Story:** As operations, I want amendment execution traceable to the source subscription and accepted amendment.
**Acceptance:** Source subscription/product, quote/line, order/line and resulting subscription/product correlations are preserved.

## Resulting-State Reconciliation
**Story:** As operations, I want the executed amendment reconciled to expected resulting state.
**Acceptance:** Defined product, quantity, configuration, dates, commercial, billing and entitlement dimensions are compared and unexplained differences flagged.

## Guardrail
Do not invent amendment taxonomy, allowed dates, proration, credits/refunds, co-term rules, discount carry-forward, concurrency, cancellation, approval triggers or platform mechanics. Mark missing rules **Unknown / Validation Needed**.
