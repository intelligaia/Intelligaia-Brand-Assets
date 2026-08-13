# Billing — Flows

## 1. Billing Context Creation
1. Receive eligible customer/order/subscription context.
2. Identify billing account/profile.
3. Establish currency and payment/billing terms where applicable.
4. Establish bill-cycle/invoice context.
5. Preserve source order/subscription identifiers.
6. Validate required billing data.

## 2. Charge Creation
Source commercial component → identify charge type → establish quantity/rate/amount → frequency → start/end/effective dates → billing treatment → source lineage → validate.

## 3. Recurring Charge
Active subscription charge → determine billable period → determine applicable quantity/rate → apply approved proration/adjustments → create invoice line candidate → validate.

## 4. One-Time Charge
Trigger eligible event/order component → determine charge date/amount → create billable item → include in applicable invoice according to policy.

## 5. Usage Charge
Receive usage event/aggregate → validate customer/subscription/product/time period → deduplicate/correlate → apply rating rule → aggregate where required → create billable charge → reconcile usage-to-invoice lineage.

## 6. Proration
Identify partial period → determine approved period/day-count convention → calculate applicable fraction → apply to eligible charge/quantity/rate → round according to policy → preserve calculation explanation.

Do not infer convention.

## 7. Invoice Generation
Identify billable charges → group according to invoice/account rules → calculate lines/subtotals → apply credits/adjustments → invoke tax where applicable → validate → generate draft invoice.

## 8. Invoice Validation / Finalization
Validate customer, currency, dates, charge amounts, source references, tax result and required invoice data → resolve blocking errors → finalize/post according to process → preserve immutable financial reference where required.

## 9. Amendment Billing
Receive effective-dated subscription amendment → add/update/remove charges → calculate incremental/decremental billable effect → create credit/adjustment where policy requires → synchronize future schedule → reconcile to amendment.

## 10. Cancellation Billing
Receive cancellation/termination → determine effective date → stop future charges → calculate remaining/credited amounts according to policy → generate credit/adjustment/refund workflow where applicable → reconcile.

## 11. Renewal Billing
Receive renewed term → establish renewed charges/rates/dates → ensure prior-term boundary and new-term continuity → prevent unintended gap/overlap → generate future billing schedule.

## 12. Credit / Adjustment
Identify financial correction → correlate source invoice/charge/transaction → determine adjustment type and amount according to policy → authorize if required → issue adjustment/credit → update balance/state → preserve reason/audit.

## 13. Rebill / Corrected Invoice
Identify invoice error → determine whether adjustment, credit/rebill, cancellation/reissue, or another governed process applies → preserve original document history → generate corrected financial state.

## 14. Tax Dependency
Provide taxable transaction context to approved tax capability/service → receive tax result → associate with invoice lines/document → handle tax failure according to policy.

Tax determination itself is outside this generic CPQ skill unless evidenced.

## 15. Payment-Term Handoff
Carry approved payment terms/payment-method context where architecture requires → validate billing representation → preserve source commercial reference.

Payment processing and collections are adjacent capabilities unless explicitly in scope.

## 16. Billing Exception
Detect missing/invalid charge, mapping, tax, account, date, usage or invoice data → hold affected financial process → expose error/owner → correct → rerun safely → reconcile.

## 17. CPQ-to-Billing Reconciliation
Compare accepted quote/order/subscription commercial state to billing:
products/charges, quantity, rate/price, currency, dates, frequency, term, adjustments and required identifiers.
Flag unexplained differences.

## 18. Invoice-to-Source Traceability
Invoice → invoice line → billing charge → subscription/product → order line → accepted quote/version.

## Flow Depth
L2/L3 vendor-neutral. Exact billing engine, invoice statuses, accounting posting, tax provider, payment processor and APIs belong in platform/integration modules.
