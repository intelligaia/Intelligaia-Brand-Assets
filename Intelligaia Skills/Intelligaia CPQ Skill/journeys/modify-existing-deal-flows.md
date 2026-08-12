# Modify Existing Deal — Detailed Flows

## 1. Identify the Transaction
1. Locate customer/deal/quote/order/subscription.
2. Determine authoritative record/version.
3. Retrieve downstream execution state.
4. Identify pending changes.
5. Capture requested modification and reason.

## 2. Lifecycle-State Decision
Classify the transaction into an evidenced state such as:
- draft/in-flight quote;
- approved/presented quote;
- accepted quote;
- order created but not executed;
- partially executed order;
- active subscription/installed base;
- approaching renewal;
- ended/cancelled relationship.

Exact states are implementation-specific.

## 3. Route the Change
### Draft / In-Flight
Revise current quote/version according to quote policy.

### Approved / Presented
Create/revise quote → invalidate or reassess approvals as required → regenerate proposal → preserve prior version/document.

### Accepted, Pre-Order
Determine whether acceptance can be withdrawn/revised. If permitted: create governed revision → revalidate/reapprove/reaccept.

### Order Created / In Execution
Determine whether the order is still changeable. Route to controlled order change, cancellation/rebook, or downstream remediation according to policy.

### Active Subscription
Route to amendment, cancellation, or renewal based on requested change and timing.

## 4. Quote Revision
Retrieve current quote → create/update governed revision → apply requested product/configuration/commercial changes → reprice → rediscount → validate → evaluate reapproval → regenerate proposal → capture acceptance if required.

## 5. Product / Configuration Change
Identify affected line/component → apply add/remove/replace/attribute change → rerun dependency and compatibility rules → determine downstream commercial impact → reprice/reapprove.

## 6. Quantity Change
Determine current/requested/resulting quantity semantics → validate limits/dependencies → recalculate commercial values → evaluate approval.

If already active, route through amendment rules.

## 7. Price / Discount Change
Identify requested commercial change → determine permitted override/discount mechanism → recalculate → preserve reason → evaluate authority/approval → update proposal/version.

## 8. Term / Date Change
Identify affected term/effective/service/billing date → validate allowed relationship → reprice/prorate where applicable → reassess approval and downstream impact.

## 9. Party / Account Change
Determine whether sold-to/bill-to/ship-to/service-to/payer/customer/partner changes are allowed at current state → validate downstream implications → remap/revalidate tax, billing, fulfillment or contract context as applicable.

## 10. Accepted Quote Revision
Accepted version → capture reason for reopening → preserve original acceptance → create new revision → apply changes → revalidate → reapprove → regenerate → obtain new acceptance → supersede prior version according to policy.

Never silently overwrite accepted commercial state.

## 11. Pre-Fulfillment Order Change
Identify order/component state → determine edit/change eligibility → apply approved change pattern → update dependent fulfillment/billing context → preserve source quote/change lineage → reconcile.

## 12. Cancellation / Rebook
When direct change is not permitted:
validate cancellation eligibility → cancel/compensate original transaction according to policy → create replacement quote/order → preserve relationship between original and replacement → prevent duplicate fulfillment/billing.

## 13. Partial-Execution Change
Identify completed vs pending components → determine which can change → preserve completed execution → modify/cancel/compensate affected pending components → handle financial/lifecycle consequences → reconcile.

## 14. Active Subscription Change
Retrieve authoritative installed base → determine change type → establish effective date → configure delta → price/prorate → approve → quote/accept → change order → update subscription/billing/entitlements.

See `../capabilities/amendments.md`.

## 15. Renewal-Time Change
If change is intended for the next term rather than current term, route to renewal baseline and renewal-with-changes according to policy.

## 16. Correction vs Commercial Change
Determine whether request corrects erroneous data/execution or changes customer-agreed commercial intent. Apply the approved correction or commercial-change path; preserve audit.

## 17. Reapproval
After any material change, evaluate approval-driving measures and version integrity. Invalidate/supplement prior approval only according to policy.

## 18. Reacceptance
If customer-agreed commercial content changes, determine whether new acceptance is required. Preserve old and new acceptance/version lineage.

## 19. Downstream Reconciliation
Compare expected modified state with quote/order/subscription/billing/entitlement outcomes and flag unexplained differences.

## Flow Depth
L2/L3 vendor-neutral. Exact editability states, workflow engines, APIs and platform status transitions belong in platform/integration modules.
