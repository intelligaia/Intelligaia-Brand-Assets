# Renewal Journey — Controls, Data & Governance

## 1. Renewal Trigger
Document the evidenced trigger/horizon that causes a subscription to enter renewal processing.

## 2. Duplicate Prevention
A source subscription/term should not create unintended duplicate renewal transactions.

## 3. Authoritative Baseline
Renewal must use authoritative subscription state rather than a stale historical quote.

## 4. Pending-Change Awareness
Determine which future/in-flight changes affect the state at the renewal boundary.

## 5. Carry-Forward Matrix
For each relevant dimension classify:
**Carry Forward | Recalculate | Exclude | Migrate | Requires Decision**

Potential dimensions include product, quantity, configuration, price, discount, term, attributes and commercial terms.

## 6. Product Renewability
Separate product sellability from renewability. Define renewal eligibility and migration path independently.

## 7. Pricing Basis
Record the approved basis used for renewal pricing. Do not assume prior price, list price, contracted price or current price.

## 8. Uplift / Index Control
Where applicable preserve source, formula/percentage/index, eligible charges, effective date, caps/floors/exceptions and rounding.

## 9. Discount Carry-Forward
Explicitly define whether prior discounts carry, reset, recalculate, expire or require approval.

## 10. Term Boundary
Distinguish prior-term end, renewal effective date, next-term start, billing start and entitlement continuation.

## 11. Migration Integrity
Preserve source product → target product mapping, configuration/quantity transformation and commercial treatment.

## 12. Partial Renewal
Clearly identify renewed vs non-renewed products/quantities and the end-state actions for non-renewed scope.

## 13. Co-Term / Consolidation
Preserve each source subscription/term relationship to the resulting renewal transaction and next-term state.

## 14. Approval Context
Approvers should be able to compare:
prior term → renewal baseline → proposed changes → uplift/repricing → discount → resulting value.

## 15. Version / Acceptance Integrity
Approval and customer acceptance must correlate to the exact renewal version executed.

## 16. Auto-Renew Governance
Define eligibility, notice/cancellation state, pricing, term, execution, exception and customer communication rules.

## 17. Non-Renewal Governance
Prevent unintended order/subscription/billing continuation after an approved non-renewal decision.

## 18. Predecessor / Successor Lineage
Preserve:
**Prior Subscription/Term → Renewal Transaction → Renewal Quote/Order → Next Subscription/Term**

## 19. Billing Continuity
Validate prior-term charge end and next-term charge start according to accepted renewal state.

## 20. Entitlement Continuity
Ensure renewed/migrated products continue correctly and non-renewed products end according to policy.

## 21. Forecast / Pipeline Control
Define the relationship between renewal candidate, opportunity, forecast amount/status and accepted commercial outcome. Do not invent formulas.

## 22. Reconciliation
Compare baseline, accepted renewal, order, next-term subscription, billing and entitlement state.

## Risks
Potential hypotheses:
duplicate renewal; stale baseline; pending amendment omitted; wrong uplift; obsolete product renewed; discount copied incorrectly; migration loses configuration; non-renewal not propagated; term gap/overlap; billing mismatch; accepted version differs from executed renewal.

Validate before asserting.
