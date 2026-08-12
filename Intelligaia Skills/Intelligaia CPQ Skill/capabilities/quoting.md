# Quoting

## Purpose
Create, revise, govern, approve, present, accept, and convert a commercial proposal while preserving commercial intent downstream.

## Personas
Seller/AE, Partner Seller, Deal Desk, Sales Ops, Finance/Pricing, Legal, Approver, Customer, Order/Billing Ops.

## Preconditions
Valid account/opportunity; sellable catalog; applicable price list/currency; required seller/customer context; permissions.

## L1
Opportunity → Quote → Configure → Price → Approve → Proposal/Contract → Accept/eSign → Order.

## L2 — Detailed quote flow
1. Create or reopen quote and capture header details.
2. Add products/services.
3. Configure products, options, attributes, bundles and quantities.
4. Calculate price and applicable standard discounts.
5. Add non-standard/discretionary discounts when needed.
6. Qualify commercial terms/T&Cs.
7. Validate quote completeness.
8. Submit for approval when triggers apply.
9. Review/approve/reject/request-more-information.
10. Generate proposal/order form and supporting documents.
11. Handle special T&Cs / agreement flow when required.
12. Send for customer review/eSignature.
13. If customer requests commercial changes, reopen/revise quote and re-evaluate approval.
14. Mark/select authoritative/primary quote where the implementation supports it.
15. Convert accepted quote to order.
16. Synchronize required commercial data downstream.

## L3 step model
| Step | Actor | Action | Input | Rule / Decision | Output | Next |
|---|---|---|---|---|---|---|
| 1 | Seller | Create/reopen quote | Opportunity/customer | Quote type and required header data | Draft quote | Add products |
| 2 | Seller | Add products/services | Catalog | Eligibility/visibility | Quote lines | Configure |
| 3 | Seller/System | Configure | Attributes/options | Compatibility/dependency rules | Valid configuration | Price |
| 4 | System | Calculate price | Price list/context | Pricing rules | Base/standard net | Discount |
| 5 | Seller | Request exception discount | Deal context | Threshold/policy | Revised commercial | Approval |
| 6 | Seller/System | Qualify T&Cs | Quote terms | Standard vs non-standard | Qualified quote | Validate |
| 7 | System | Validate | Quote | Completeness/rules | Valid or errors | Submit |
| 8 | Seller | Submit | Valid quote | Approval triggers | Approval request | Review |
| 9 | Approver(s) | Review | Quote + justification | Approve/reject/more info | Decision | Proposal/rework |
| 10 | Seller/System | Generate document | Approved quote | Template/terms | Proposal/order form | Customer |
| 11 | Legal/Deal Desk | Handle special terms | Exceptions | Agreement required? | Contract path | Negotiate/eSign |
| 12 | Customer | Review/sign | Proposal/contract | Accept/change | Signed or change request | Order/reopen |
| 13 | Seller | Reopen if changed | Customer request | Reapproval required? | Revised quote | Approval |
| 14 | System/Seller | Finalize authoritative quote | Accepted quote | Implementation rule | Primary/final quote | Order |
| 15 | Seller/System | Create order | Accepted quote | Pre-validation | Order | Downstream |
| 16 | Integration | Sync | Order/commercial data | Mapping/validation | Billing/ERP input | Fulfillment |

## Quote types / scenarios
New business; renewal; amendment; upsell/cross-sell; budgetary; partner quote; standard and non-standard quote. Exact supported types are platform/implementation specific.

## Decision branches
Approval required? Special T&Cs? Agreement/CLM required? Customer requests change? Reapproval required? Order pre-validation passes?

## Rework loops
Configuration error → configure; pricing exception → revise/approve; rejection → seller revision; more information → seller/previous approver; customer change → reopen quote; downstream validation error → reconcile.

## Data created/updated
Quote header, lines, configuration attributes, price components, discounts, terms, approval state/comments, proposal metadata, accepted/final quote reference, order reference.

## KPIs
Quote cycle time, seller touches, Deal Desk touch rate, approval turnaround, quote error/rework rate, self-service rate, quote-to-order conversion, quote/order discrepancy.
