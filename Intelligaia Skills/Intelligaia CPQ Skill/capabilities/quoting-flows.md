# Quoting — Flows

## 1. New Quote
1. Establish customer/account and opportunity context.
2. Identify transaction type, owner/channel, currency and relevant dates.
3. Create quote identity/version.
4. Add products/offers.
5. Configure products.
6. Calculate pricing.
7. Apply governed discounts.
8. Capture applicable terms.
9. Calculate totals/metrics.
10. Validate completeness.
11. Evaluate approvals.
12. Save authoritative commercial state.
13. Progress to approval/proposal.

## 2. Quote Validation
Validate applicable customer/party, configuration, pricing, discounts, currency, dates/term, terms, approval state, lifecycle references, and downstream-required data.
Result: valid, warning, or blocking error according to evidenced policy.

## 3. Alternative Scenario
Create alternative → vary configuration/quantity/term/commercial inputs → calculate → compare → select preferred scenario → identify authoritative quote according to policy.

## 4. Quote Revision
Identify source version → revise → reconfigure/reprice/rediscount → revalidate → re-evaluate approval → regenerate proposal where required → preserve prior state.

## 5. Approval Preparation
Validate → calculate approval-driving values → assemble decision context → associate/freeze relevant quote version according to policy → submit.
See `approvals.md`.

## 6. Proposal Generation
Select current eligible quote version → validate document readiness → apply template/content rules → merge commercial data → generate → review where required → issue → preserve document/version lineage.

## 7. Negotiation Loop
Present → receive changes → classify change → revise quote → recalculate → reapprove where required → regenerate proposal → repeat until accepted/closed.

## 8. Expiration
Evaluate validity → if expired, restrict according to policy → revalidate catalog/configuration/pricing/discount/terms → reapprove where required → issue revised/current proposal.

## 9. Customer Acceptance
Capture approved acceptance mechanism → identify exact accepted quote/version → validate outstanding governance → preserve acceptance date/party/reference → establish agreement/order readiness.

## 10. Quote-to-Agreement
Accepted quote → transfer agreed parties/products/prices/terms → create/update agreement according to process → reconcile values → preserve lineage.

## 11. Quote-to-Order
1. Identify accepted authoritative version.
2. Confirm configuration.
3. Confirm price/discount.
4. Confirm approvals.
5. Confirm customer/party data.
6. Confirm order/fulfillment/billing-required data.
7. Transform quote/lines.
8. Preserve identifiers and lineage.
9. Validate transformation.
10. Submit.
11. Reconcile errors.

## 12. Cancellation
Close/abandon according to policy without deleting required history.

## 13. Clone
Copy → establish new context → revalidate current catalog/configuration/pricing/discount/dates → resolve stale state → reapprove where required.

## Flow Depth
L2/L3 vendor-neutral. Exact UI, statuses, document engines and conversion automation belong in platform modules.
