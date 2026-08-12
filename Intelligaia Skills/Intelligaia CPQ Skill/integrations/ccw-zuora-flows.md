# CCW ↔ Zuora — Flows

## Purpose
Describe vendor-aware but implementation-neutral commercial-to-subscription/billing handoffs.

## 1. New Business Eligibility
1. CCW commercial transaction reaches the approved downstream-ready state.
2. Required approval/acceptance/order conditions are validated.
3. Current commercial version is identified.
4. Required customer/product/commercial/date context is assembled.
5. Integration operation is created with correlation and duplicate protection.

Exact eligibility state is **Unknown / Validation Needed**.

## 2. Customer / Account Handoff
Resolve the intended customer and payer/billing relationship → match/create/update the appropriate Zuora-side customer/account context according to approved ownership → preserve source identifiers.

### Control
Avoid creating a new billing account merely because matching failed.

## 3. Product Transformation
CCW product/configuration structure → transformation → Zuora-recognized subscription/charge structure.

Document:
source product/component → target product/charge concept → quantity → attributes → hierarchy → lifecycle behavior.

Exact Zuora product/rate-plan mapping requires evidence.

## 4. Commercial Transformation
For each monetary value determine whether Zuora receives or derives:
price/rate → quantity → discount → recurring/non-recurring/usage treatment → currency → term → charge dates.

Do not assume a quote total can be decomposed into billable charges without explicit mapping.

## 5. Date Transformation
Distinguish:
commercial/pricing date → requested service/start date → order date → subscription start → charge start → term end → billing/service periods.

Define transformation rather than copying similarly named dates.

## 6. Subscription Creation
Eligible commercial state → create/establish subscription lifecycle state → correlate CCW quote/order/version → establish products/charges/quantities/dates → validate resulting subscription.

Exact Zuora creation method is implementation-specific.

## 7. Activation / Billing Trigger
Determine which business event allows the subscription and/or charges to become billable.

Potential dependencies may include acceptance, order completion, provisioning, activation, service start, or another approved trigger.

Do not infer.

## 8. Billing Outcome
Zuora calculates/establishes billable state according to approved configuration → billing result/status/reference may be returned or reconciled for upstream visibility.

## 9. Amendment
Authoritative current subscription → CCW/integration receives required baseline or reference → commercial delta is constructed → effective date and pricing/proration are determined → approved change is sent to Zuora → resulting subscription/charges are validated.

### Critical Control
Do not rebuild an amendment from an old CCW quote when current subscription state is authoritative.

## 10. Add Product
Current subscription → approved added product/configuration → map target product/charge → effective date → price/proration → execute → reconcile.

## 11. Remove Product
Current subscription → identify removable product/charge → dependency/eligibility → effective date → financial treatment → execute → reconcile.

## 12. Quantity Change
Current quantity → delta/resulting quantity → effective date → commercial treatment → target lifecycle update → reconcile.

Do not confuse delta quantity with resulting quantity.

## 13. Product Migration
Source subscription product → approved successor → map configuration/quantity → determine charge treatment → execute effective-dated lifecycle change → preserve predecessor/successor lineage.

## 14. Renewal
Renewal baseline from authoritative subscription → carry-forward/migration → pricing/uplift/discount → acceptance → renewal transaction → next-term subscription/charges → billing continuity → reconcile.

Determine whether CCW constructs the renewal commercial transaction, Zuora initiates it, or orchestration spans both.

## 15. Cancellation
Approved cancellation scope/effective date → target subscription/charge end-state → future charge stop/adjustment according to policy → preserve history → reconcile.

Do not assume cancellation deletes the subscription.

## 16. Future-Dated Change
Preserve current state plus pending future state → ensure subsequent amendments/renewals are aware of the pending change → execute at governed effective point.

## 17. Partner / Payer Scenario
Preserve end customer, partner, bill-to/payer and subscription ownership according to the approved business model.

Do not infer who Zuora bills.

## 18. Partial Failure
If account succeeds but subscription fails, or subscription succeeds but a downstream step fails:
identify completed target state → avoid duplicate recreation → correct/retry only safe operation → reconcile.

## 19. Retry
Before retry:
verify source quote/version still current → verify target object was not already created → use business idempotency/correlation → execute or resume safely.

## 20. Feedback / Status
Where upstream visibility is required, expose business-relevant subscription/billing status and references rather than raw technical processing codes.

## 21. Reconciliation
Compare:
**CCW Accepted Commercial State → Integration/Order Transformation → Zuora Subscription/Charges → Billing Outcome**

Match applicable product, quantity, currency, rate/price, discount, dates, customer/payer and lineage dimensions.

## Flow Depth
L2/L3. Exact Zuora API operations, objects, fields, rate plans, middleware routes, CCW statuses and retry mechanisms are L4 and require evidence.
