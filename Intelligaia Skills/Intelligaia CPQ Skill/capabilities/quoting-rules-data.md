# Quoting — Rules, Data & Governance

## Quote Identity
Conceptually: quote identifier, customer, opportunity/context, owner, transaction type, currency, state, dates, version/revision.

## Quote Header
Potential data: parties, currency, quote/pricing date, validity, term, channel, terms, totals and lifecycle context. Required fields are implementation-specific.

## Quote Line
Product/offer, configuration, quantity, pricing, discount, net value, dates/term, hierarchy and lifecycle/source references.

## Lifecycle
Conceptual progression may include Draft → Validation → Approval → Presented → Accepted → Ordered, plus Rejected/Expired/Cancelled. These are not platform status values.

## Authoritative Quote
Where alternatives exist, define how the scenario/version allowed to progress is selected.

## Versioning
Define what creates a version, editability, numbering, approval association, generated document, accepted version and ordered version.

## Validity
Define quote date, expiration, blocked actions, extension/revalidation, and impact on price/discount/approval.

## Commercial Terms
Payment, delivery, billing, renewal, cancellation and legal/commercial terms may span CPQ, CLM, ERP or other systems. Ownership must be evidenced.

## Totals
Define subtotal, discounts, net, recurring/one-time and other commercial metrics. Never infer ARR/ACV/TCV formulas.

## Validation
Potential dimensions: customer, configuration, pricing, discount, dates, terms, approvals, downstream data and lifecycle context.

## Approval Integrity
Approval must remain tied to the commercial version/context reviewed.

## Document Lineage
Preserve quote/version → document/version → generation context where required.

## Acceptance
Capture accepted version, mechanism, date/time, party/actor and evidence/reference required by policy.

## Opportunity Relationship
Validate quote/opportunity cardinality and synchronization; do not assume opportunity values are always quote-derived.

## Quote-to-Order Lineage
Preserve quote → quote line → order → order line correlation and document governed transformations.

## Effective Dates
Distinguish quote, pricing, service/effective, expiration, agreement and order dates.

## Audit
Preserve actor, timestamp, version, material prior/new state, approval impact and document impact as required.

## Historical Integrity
Do not overwrite accepted/ordered commercial history to represent the latest state.

## Source of Truth
Explicitly identify the authoritative record/version for proposal, approved price, customer acceptance, order creation and reporting.

## Dependencies
Consumes Catalog → Configuration → Pricing → Discounting; interacts with Approvals → Agreement → Ordering → Billing/Lifecycle → Reporting.
