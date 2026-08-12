# Zuora O2O — Project Workflows

> These are source-derived project flows. The proposed TO-BE flow was identified in the assessment as not yet business-reviewed; treat it as a proposed design, not an approved operating model.

## AS-IS high-level flow
Opportunity → 1 Create/Re-open Quote (header) → 2 Add Products/Services → 3 Price & Manual Discounts → 4 Submit Quote for Approval → 5 Review/Approve → 6 Draft Order Form/Special T&Cs → 7 eSignature → 8 Submit to Zuora Billing & Provisioning.

## Proposed TO-BE L2
1. Create/Re-open Quote.
2. Add Products/Services.
3. Configure Products.
4. Price & Applicable Standard Discounts.
5. Additional Non-standard Discounts.
6. Qualify T&Cs.
7. Submit Quote for Approval.
8. Approve Quote.
9. Handle Special T&Cs.
10. Proposal / Contract.
11. eSignature.
12. Create Agreement when agreement/CLM path is required.
13. Author agreement.
14. Gather Legal Approvals.
15. Negotiate.
16. Contract.
17. eSignature.
18. Place Order / submit to Zuora Billing.

## Detailed approval flow
Submit quote → approver reviews → Approve / Reject / Need More Information.
- Reject: capture reason/comments → return to Sales → revise/resubmit.
- More information: return to Sales/previous approver → provide context → review again.
- Approve: add comments if needed → route to next approver.
- Completely approved: finalize approval; project flow proposes marking quote Primary and syncing Quote to Opportunity.

## Proposal / customer flow
Approved quote → evaluate Special T&Cs.
- Standard: generate proposal/additional documents → send for eSignature → customer reviews.
- Customer changes: reopen quote → revise → determine reapproval.
- Special language/discount: update language/discount and enter agreement path when required.

## Agreement / contract flow
Request agreement → request/update non-standard clauses → generate document → submit internal review → check out agreement → add clauses → submit for approval → approve → negotiate/redline → approved contract → evaluate discount/commercial changes → reopen quote if needed → eSignature → ready for order.

## Order flow
Select approved quote → create order → copy quote details to configuration order → review products/discounts → enter PO details at header/line → enter miscellaneous details → rules-based credit check → enter Ship-to/Entitle-to → submit order → order submitted → integrate to ERP/OM/downstream.

## Renewal pattern
Assets/subscriptions expiring in X days → renewal opportunity → create quote → add existing products/subscriptions → add renewal services or upsell/cross-sell → price from existing/historical context → co-term if required → approvals → special terms/contract if required → order → downstream lifecycle update.
