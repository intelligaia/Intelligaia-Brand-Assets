# Renewal Journey — Requirement Patterns

## Renewal Identification
**Story:** As a renewal owner, I want eligible subscriptions surfaced according to approved timing so I can act before the renewal boundary.
**Acceptance:** Evidenced eligibility and renewal-trigger rules identify the correct source subscription/term without unintended duplicates.

## Renewal Readiness
**Story:** As a renewal owner, I want readiness issues visible before customer engagement.
**Acceptance:** Defined baseline, product, pricing, pending-change and required-data conditions are evaluated and blockers identified.

## Authoritative Baseline
**Story:** As a seller, I want renewal constructed from current subscription state.
**Acceptance:** The renewal references the authoritative subscription/term and applicable effective pending changes.

## Carry-Forward
**Story:** As a seller, I want renewal values carried forward only according to approved policy.
**Acceptance:** Defined dimensions are classified as carry-forward, recalculate, exclude, migrate or require decision.

## Product Migration
**Story:** As a seller, I want non-renewable products mapped to approved successors.
**Acceptance:** Renewability, source-target mapping, configuration/quantity transformation and commercial treatment follow approved rules.

## Renewal Pricing
**Story:** As a seller, I want proposed renewal pricing traceable to the approved basis.
**Acceptance:** Pricing basis, uplift/index/repricing and applicable rounding remain explainable for defined items.

## Discount Governance
**Story:** As a governance owner, I want prior discounts handled according to renewal policy.
**Acceptance:** Carry-forward, reset, recalculation or approval behavior follows the approved rule.

## Partial Renewal
**Story:** As a seller, I want renewed and non-renewed scope represented explicitly.
**Acceptance:** Continuing and ending products/quantities remain distinguishable and generate the appropriate next-term/end-of-term actions.

## Auto-Renew
**Story:** As operations, I want eligible auto-renew relationships continued only when contractual conditions are satisfied.
**Acceptance:** Eligibility, notice/cancellation state, pricing and term rules are validated before automated continuation.

## Acceptance Integrity
**Story:** As operations, I want the executed renewal tied to the exact customer-approved version.
**Acceptance:** The accepted renewal quote/version and required evidence are preserved as the governed execution source.

## Non-Renewal
**Story:** As a renewal owner, I want a non-renewal decision stop unintended continuation.
**Acceptance:** Defined order/subscription/billing/entitlement and pipeline actions occur at the approved boundary.

## Predecessor / Successor
**Story:** As support/operations, I want next-term state traceable to the prior term.
**Acceptance:** Prior subscription/term, renewal quote/order and resulting subscription/term correlations are preserved.

## Billing / Entitlement Continuity
**Story:** As operations, I want the next term start without unintended billing or service gaps/overlaps.
**Acceptance:** Defined prior-term end and next-term charge/entitlement start behavior matches the accepted renewal.

## Reconciliation
**Story:** As governance, I want the renewal outcome reconciled end to end.
**Acceptance:** Defined products, quantities, configuration, dates, commercial values, subscription, billing and entitlement dimensions are compared and unexplained differences flagged.

## Guardrail
Do not invent renewal timing, auto-renew/notice rules, pricing basis, uplift, migration, discount carry-forward, co-term behavior, forecast formulas, churn policy, acceptance methods or platform mechanics. Mark missing rules **Unknown / Validation Needed**.
