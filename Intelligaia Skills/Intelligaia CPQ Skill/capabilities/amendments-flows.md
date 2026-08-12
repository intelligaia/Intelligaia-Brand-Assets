# Amendments — Flows

## 1. Amendment Initiation
1. Identify customer and authoritative subscription.
2. Retrieve current effective subscription state.
3. Retrieve relevant configuration, quantities, dates, terms and commercial references.
4. Identify pending/future changes where applicable.
5. Select amendment/change type.
6. Establish requested effective date.
7. Determine eligible products/components and allowed actions.
8. Create amendment transaction/context.

## 2. Add Product
Retrieve subscription → select eligible new product → configure → determine effective/term/co-term context → price incremental value → discount/approve where applicable → quote/accept → order → update subscription/billing/entitlements → reconcile.

## 3. Increase Quantity
Select existing product → capture requested quantity increase or resulting quantity → validate limits/dependencies → calculate effective-dated commercial delta → approve if required → execute → update resulting quantity → reconcile.

## 4. Decrease Quantity
Select product → validate whether reduction is permitted and minimum/commitment conditions → establish effective date → calculate financial effect according to policy → approve where required → execute → update billing/entitlements → reconcile.

## 5. Remove Product
Select active product/component → evaluate dependencies and removal eligibility → determine effective date → calculate commercial/billing effect → approve if required → execute cancellation/removal → update dependent state → reconcile.

## 6. Upgrade / Downgrade
Identify source product → identify eligible target/migration path → preserve relevant configuration → configure target → determine effective date → calculate delta/credit/new charge according to policy → approve → execute → replace/supersede source state → reconcile.

## 7. Configuration / Attribute Change
Retrieve current configuration → modify allowed attributes/options → re-evaluate compatibility/dependencies → identify price-driving changes → calculate delta → approve/execute → preserve resulting configuration.

## 8. Effective-Dated Amendment
Requested change → validate effective date against term/current date/policy → calculate current vs future state → price/bill according to approved convention → schedule/execute → update lifecycle state at the correct effective point.

## 9. Future-Dated Change
Create pending change → preserve current active state → preserve future resulting state and effective date → expose pending change to subsequent transactions → execute when trigger/date occurs → reconcile.

## 10. Co-Term Addition
Add product → identify target term/end date → validate co-term eligibility → apply approved proration/term treatment → quote/order → align resulting product dates.

Do not infer proration convention.

## 11. Mid-Term Cancellation / Termination
Identify cancellation scope → validate eligibility → establish effective date → determine remaining commitment/credit/refund/billing effects according to policy → obtain approval if required → execute → revoke/update entitlements → reconcile.

## 12. Amendment Pricing
Current state + requested delta + effective date → determine incremental/decremental charges/credits according to pricing policy → apply discounts where eligible → calculate resulting commercial state.

Detailed pricing rules remain in `pricing.md`.

## 13. Amendment Quote
Represent current/source context and proposed change → validate → price/discount → approve → generate customer-facing proposal where required → capture acceptance.

## 14. Amendment Order
Accepted amendment → transform change into executable order/change order → preserve source subscription and affected-product references → orchestrate downstream changes → handle failures → update subscription.

## 15. Concurrent / Pending Amendment
Retrieve active and pending changes → determine whether new change is allowed → calculate against correct baseline → resolve conflicts/order of effect → preserve lineage.

Exact concurrency behavior is platform/business specific.

## 16. Amendment Reversal / Correction
Identify erroneous or reversible change → determine whether reversal, corrective amendment, cancellation/rebook, or operational correction is permitted → calculate downstream effects → authorize → execute → preserve original history.

## 17. Resulting-State Reconciliation
Compare:
source state + approved amendment delta → expected resulting subscription → actual subscription → billing → entitlement.
Flag unexplained differences.

## Flow Depth
L2/L3 vendor-neutral. Exact lifecycle APIs, credit calculations, amendment objects, status transitions and platform mechanics belong in platform/integration modules.
