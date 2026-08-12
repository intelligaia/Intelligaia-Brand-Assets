# Renewals — Requirement & Acceptance Patterns

## Renewal Identification
**Story:** As a renewal owner, I want eligible subscriptions identified according to policy so renewal work begins at the correct time.
**Acceptance:** Approved eligibility and renewal-window rules determine which subscriptions enter the renewal process.

## Authoritative Baseline
**Story:** As a seller, I want the renewal based on current subscription state so the proposal reflects what the customer actually has.
**Acceptance:** The baseline references the authoritative subscription/term and applicable effective pending changes.

## Carry-Forward
**Story:** As a seller, I want eligible products and quantities carried into renewal according to policy.
**Acceptance:** Defined carry-forward rules determine retained, recalculated, excluded or migrated values.

## Renewal Pricing / Uplift
**Story:** As a seller, I want renewal pricing calculated consistently and explainably.
**Acceptance:** The evidenced pricing basis and uplift/index rule are applied to eligible items and remain traceable.

## Product Migration
**Story:** As a seller, I want obsolete/non-renewable products mapped to approved successors.
**Acceptance:** Source-target eligibility, configuration/quantity mapping and commercial treatment follow approved migration rules.

## Pending Amendment Awareness
**Story:** As a renewal owner, I want pending lifecycle changes reflected so renewal does not use stale state.
**Acceptance:** Defined pending changes effective for the renewal baseline are included or explicitly handled according to policy.

## Partial Renewal
**Story:** As a seller, I want to represent only the products/quantities the customer chooses to continue.
**Acceptance:** Renewed and non-renewed components remain distinguishable and downstream end/continuation actions are generated correctly.

## Auto-Renew
**Story:** As operations, I want eligible auto-renew subscriptions continued according to contractual policy.
**Acceptance:** Eligibility, notice/cancellation state, term and pricing rules are validated before automated continuation.

## Renewal Approval
**Story:** As a governance owner, I want renewal exceptions routed for required approval.
**Acceptance:** Defined pricing, discount, term, migration or contraction conditions trigger the approved route.

## Renewal Acceptance
**Story:** As a seller, I want customer acceptance tied to the exact renewal version.
**Acceptance:** The accepted renewal quote/version, date and required acceptance evidence are preserved.

## Non-Renewal
**Story:** As a renewal owner, I want a non-renewal decision propagated so unintended continuation does not occur.
**Acceptance:** Defined end-of-term, billing, entitlement and pipeline actions occur according to policy.

## Renewal Lineage
**Story:** As operations, I want the renewed term traceable to the prior subscription and accepted renewal.
**Acceptance:** Source subscription/term, renewal quote/order and resulting subscription/term correlations are preserved.

## Reconciliation
**Story:** As operations, I want the renewed state reconciled to the accepted commercial decision.
**Acceptance:** Defined products, quantities, dates, prices, billing and entitlement dimensions are compared and unexplained differences flagged.

## Guardrail
Do not invent renewal windows, auto-renew rules, uplift, pricing basis, migration mappings, discount carry-forward, co-term/consolidation, churn handling, forecast formulas, approval triggers or platform automation. Mark missing rules **Unknown / Validation Needed**.
