# CCW ↔ Zuora — Data & Controls

## 1. Source-of-Truth Matrix
Establish ownership for:
customer/end customer; payer/billing account; product/configuration; accepted commercial version; price/discount; term/effective dates; subscription; charges; invoice; entitlement where applicable.

## 2. Correlation Chain
Preserve where applicable:
**CCW Quote/Version → Order/Integration Operation → Zuora Customer/Account → Subscription → Subscription Product/Charge → Billing Reference**

Exact identifiers require evidence.

## 3. Customer Matching
Define deterministic matching and exception behavior.

Potential dimensions:
source customer ID; external account reference; billing account reference; legal entity; payer relationship.

Never silently create duplicates after an ambiguous match.

## 4. Account Ownership
Separate end-customer identity from billing-account/payer identity. One customer relationship may have multiple billing arrangements depending on business model.

## 5. Product Mapping
Document:
**CCW Product/Component → Business Meaning → Zuora Product/Subscription/Charge Representation → Effective-Dated Lifecycle Rule**

Exact target constructs require evidence.

## 6. Configuration Mapping
Preserve configuration attributes needed for billing, subscription lifecycle, entitlement, reporting, or downstream reconciliation.

Do not replicate attributes with no target business purpose.

## 7. Charge Classification
Explicitly distinguish relevant charge semantics such as recurring, one-time, usage, tiered, quantity-based, or other approved structures.

Do not infer charge model from product name.

## 8. Price Semantics
For each value document:
source amount → unit/extended basis → gross/net → discount relationship → currency → rounding → target meaning → authoritative owner.

## 9. Discount Semantics
Determine whether discounts are:
embedded in net rate; represented separately; recurring; one-time; term-specific; inherited; reset on renewal; or otherwise modeled.

Exact behavior requires evidence.

## 10. Quantity Semantics
Distinguish:
quoted quantity; ordered quantity; subscription quantity; delta quantity; resulting quantity; billing quantity; usage quantity.

## 11. Date Semantics
Document:
quote validity; requested start; subscription start; charge start; service activation; amendment effective; renewal boundary; cancellation date; charge end.

## 12. Term Semantics
Define term length, term start/end, renewal term, evergreen/auto-renew behavior where applicable.

Do not infer contractual behavior from system defaults.

## 13. Version Integrity
Only the governed accepted commercial version should drive downstream subscription/billing state.

## 14. Amendment Baseline
Use current authoritative subscription state and applicable pending changes before calculating a delta.

## 15. Proration
Define:
eligible change → effective date → proration basis → rounding → credit/debit treatment → source/target calculation ownership.

Do not invent Zuora/customer proration settings.

## 16. Renewal Pricing
Define whether prior rate, contracted rate, current catalog rate, uplifted rate, or another basis is used.

## 17. Cancellation Financial Treatment
Keep future-charge stop, credit, invoice adjustment, refund, usage settlement, and termination fee separate.

## 18. Duplicate Prevention
A repeated CCW downstream operation must not create duplicate accounts, subscriptions, charges, amendments, renewals, cancellations, invoices, or credits.

## 19. State Mapping
Document:
**CCW/Order State → Business Meaning → Zuora State/Action → Return State → Exception**

Exact states/actions require evidence.

## 20. Audit / Lineage
Preserve source transaction/version, target identifiers, transformation version, material commercial mapping, effective date, retries/corrections, and lifecycle predecessor/successor references.

## 21. Reconciliation
Compare accepted source semantics to resulting subscription/billing semantics, not merely field equality.

## Validation Matrix
Obtain evidence for:
topology → objects → identifiers → account matching → product mapping → charge model → price/discount mapping → dates/terms → lifecycle operations → billing trigger → status feedback → retries → reconciliation → ownership.

## Guardrail
Specific Zuora object/field/API names, CCW fields/statuses, mappings, billing rules and middleware behavior are **Unknown / Validation Needed** unless directly supported by sources.
