# Commercial & Lifecycle Impact Analysis

## 1. Commercial Integrity
Check whether the change can alter:
product/configuration → quantity → price → discount → currency → term → dates → recurring/one-time value → approval → quote validity.

## 2. Pricing
Ask:
Does calculation input change?
Does recalculation trigger change?
Does price validity/currentness change?
Does downstream interpretation change?

Do not invent formulas.

## 3. Discount
Check:
requested vs approved value → approval trigger → role permissions → quote/version applicability.

## 4. Approval
Assess:
new/removed approval condition → routing dependency → version integrity → invalidation after change → audit.

## 5. Quote Version
Determine whether the change affects:
draft → current → approved → accepted → ordered → superseded semantics.

## 6. Customer Artifact
Could customer-facing proposal/document differ from the governed commercial version?

## 7. Order Integrity
Assess:
readiness → accepted source version → duplicate prevention → partial processing → resulting reference/status.

## 8. Lifecycle Baseline
For amendment/renewal changes:
is authoritative current state still the baseline?

## 9. Pending State
Could the change ignore or conflict with:
pending amendment → future cancellation → renewal → pending order → future effective change?

## 10. Effective Date
Check whether semantics or validation change for:
requested date → processing date → service date → billing date → contract/term boundary.

## 11. Amendment
Assess impact on:
allowed delta → resulting state → pricing/proration semantics → approval → downstream subscription/billing.

## 12. Renewal
Assess:
renewal boundary → carry-forward → migration → quantity/product changes → pricing/uplift → approval → partner ownership → next-term state.

Exact rules require evidence.

## 13. Cancellation
Check:
immediate vs future/end-of-term → partial vs full → billing/service consequence → renewal interaction.

## 14. Partner / Channel
Assess:
partner eligibility → distributor chain → customer role → commercial visibility → special pricing → renewal ownership.

## 15. Billing
Distinguish CPQ commercial estimate/intent from authoritative billing calculation/state.

## 16. Entitlement / Service
Where applicable, assess whether effective product/service rights can become inconsistent.

## 17. Historical Integrity
Changes to semantics may affect historical quote/order/subscription/report interpretation.

## 18. Regression Scenarios
Include:
new business → revision → approval → order → amendment → renewal → cancellation → partner sale → failure/recovery.

## Output
**Commercial Dimensions → Version/Approval → Order → Lifecycle → Billing/Service → Channel → Historical/Regression Impact**

## Guardrail
Do not assert financial impact or billing behavior without source evidence.
