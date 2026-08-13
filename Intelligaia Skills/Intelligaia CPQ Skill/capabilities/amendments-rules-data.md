# Amendments — Rules, Data & Governance

## Amendment Identity
Conceptually capture:
amendment/change ID, source subscription, affected products, requested/effective date, change type, source version/state, quote/order references, status and downstream references.

## Source State
Before change, preserve enough authoritative state to identify:
products/components, quantities, configuration, term/dates, prices/charges, lifecycle identifiers and pending changes.

## Delta vs Resulting State
An amendment may represent:
- the requested delta;
- the full resulting state;
- both.

The model must make the relationship explicit.

## Change Types
Conceptual categories:
add, remove, increase, decrease, upgrade, downgrade, attribute/configuration change, date/term change, cancellation/termination.

Exact taxonomy requires evidence.

## Effective Date
Define which date the commercial/lifecycle change takes effect and validate it against allowed policy.

## Current vs Future State
For future changes, distinguish:
current active state, pending delta, future effective state.

## Quantity Delta
Clarify whether user/system stores:
current quantity, delta quantity, resulting quantity, or multiple values.

## Product Replacement
Upgrade/downgrade may require source product, target product, mapping/migration rule, effective date and treatment of dependent components.

## Dependency Validation
Removing/changing one product may invalidate dependent products, entitlements, discounts or configuration.

## Term Impact
Determine whether amendment preserves end date, resets term, co-terms, extends term, or follows another policy.

Never infer.

## Proration Dependency
Proration inputs may include:
effective date, billing period, term, charge frequency, quantity, price and approved day-count/period convention.

The formula belongs to evidenced pricing/billing rules.

## Credit / Refund
A negative commercial delta does not automatically imply cash refund. Define credit memo, future invoice credit, refund, no-credit or other treatment in billing policy.

## Pricing Basis
Determine whether amendment pricing uses:
current contracted price, current list price, original price, customer-specific price, renewal price, or another approved basis.

## Discount Treatment
Clarify whether prior discounts carry, recalculate, expire, or require new approval.

## Approval
Potential triggers include commercial delta, reduction/cancellation, exception, term change, price override or non-standard migration. Actual triggers require evidence.

## Pending Change
Capture effective date, affected state, status, ordering/priority and source transaction.

## Concurrency
Define behavior when multiple amendments overlap:
block, sequence, merge, rebase, cancel/recreate, or another approved pattern.

## Versioning
Preserve source subscription version/state and resulting version/state.

## Billing Impact
Define charge additions/removals/updates, dates, credits, billing account and synchronization identifiers.

## Entitlement Impact
Define entitlement add/change/revoke behavior and effective date.

## Order Lineage
Preserve:
**Subscription/Product → Amendment Quote/Line → Change Order/Line → Resulting Subscription/Product → Billing/Entitlement**

## Cancellation
Define scope, effective date, authorization, commitment/financial treatment and downstream termination.

## Audit
Preserve request, source state/version, delta, resulting state, effective date, actor/system, approval, quote/order and downstream references.

## Governance
For amendment policy identify:
**Eligibility → Effective Date → Configuration → Pricing → Discount → Approval → Acceptance → Execution → Billing/Entitlement → Resulting State → Reconciliation**

## Risks
Potential hypotheses:
amendment based on stale state; incorrect proration; double credit; lost discount; overlapping pending changes; wrong co-term date; dependency break; billing/subscription mismatch; entitlement not revoked; amendment executed against wrong subscription version.

Validate before asserting.
