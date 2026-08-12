# Quote-to-Cash Stages

## Purpose
Define the major vendor-neutral stages of Quote-to-Cash and the business boundary between them.

# 1. Opportunity / Commercial Context
## Objective
Establish the customer, commercial motion, ownership, timing, expected value, channel, and existing relationship context.

## Entry
Qualified selling context.

## Exit
Sufficient context to create and govern a commercial proposal.

## Key Handoff
CRM/opportunity context → CPQ/quoting.

# 2. Configure
## Objective
Determine a valid product/service solution.

## Entry
Opportunity/customer context + catalog/rules.

## Exit
Valid configuration.

## Key Handoff
Configuration → pricing.

Detailed model: `cpq-lifecycle-stages.md`.

# 3. Price
## Objective
Calculate applicable commercial values.

## Entry
Valid configuration + pricing context.

## Exit
Calculated line/quote values and exception indicators.

## Key Handoff
Pricing → quote/approval.

# 4. Quote
## Objective
Create and manage the customer-facing commercial proposal.

## Entry
Configured and priced solution.

## Exit
Validated quote ready for approval/presentation.

## Key Handoff
Quote → approval / proposal / contract.

Detailed model: `../capabilities/quoting.md`.

# 5. Approval
## Objective
Govern exceptions and commercial policy.

## Entry
Quote/terms requiring approval.

## Exit
Approved commercial state or controlled rework.

## Key Handoff
Approval → proposal/contract or back to seller.

Detailed model: `../capabilities/approvals.md`.

# 6. Contract / Acceptance
## Objective
Establish customer-accepted commercial and legal terms.

## Entry
Approved commercial proposal.

## Exit
Accepted/signed agreement or order form.

## Key Handoff
Agreement → order.

## Important Boundary
Contract negotiation may change price, discount, term, quantity, product, or language. Material commercial changes can require quote revision and reapproval.

# 7. Order Capture
## Objective
Translate accepted commercial intent into an executable transaction.

## Entry
Final/accepted quote and agreement context.

## Exit
Validated order.

## Key Handoff
Order → order management / fulfillment / billing / provisioning.

Detailed model: `../capabilities/ordering.md`.

# 8. Fulfillment / Provisioning
## Objective
Deliver the purchased product, service, access, or entitlement.

## Entry
Executable order.

## Exit
Fulfilled product/service, entitlement, asset/subscription state, fulfillment status.

## Key Handoff
Fulfillment state → customer operations and lifecycle records.

# 9. Billing / Invoicing
## Objective
Convert agreed commercial terms into billable charges and invoices.

## Entry
Validated customer, order, charge, date, term, payment, and subscription context.

## Exit
Billing events, invoices, balances, and financial transaction state.

## Key Handoff
Commercial/order data → billing/finance.

Detailed model: `../capabilities/billing.md`.

# 10. Collection / Payment
## Objective
Receive and apply customer payment according to invoiced obligations.

## Entry
Invoice/receivable.

## Exit
Payment/settlement state.

## Boundary
Payment processing and accounts-receivable behavior may sit outside the CPQ solution. Do not infer accounting/payment architecture from CPQ evidence alone.

# 11. Revenue / Financial Reporting
## Objective
Support downstream financial reporting and, where applicable, revenue processes from accurate commercial and billing data.

## Entry
Contract/order/billing financial context.

## Exit
Financial/revenue reporting state.

## Boundary
Revenue-recognition policy and accounting treatment require validated finance/system evidence. CPQ Insight must not invent accounting rules.

# 12. Subscription / Asset State
## Objective
Maintain the active commercial state needed for ongoing service, change, and renewal.

## Entry
Ordered/fulfilled/billed commercial relationship.

## Exit
Current subscription/asset/entitlement context.

# 13. Amendment / Expansion
## Objective
Modify an active relationship during term.

## Entry
Active subscription/asset.

## Exit
Updated commercial, order, billing, provisioning, and lifecycle state.

Detailed flow: `../journeys/amendment.md`.

# 14. Renewal
## Objective
Continue, restructure, expand, or end an expiring relationship.

## Entry
Renewal-eligible subscription/asset population.

## Exit
Renewed/changed/ended commercial relationship and updated downstream state.

Detailed flow: `../journeys/renewal.md`.

# 15. Cancellation / Churn
## Objective
End or reduce an active relationship according to commercial and operational rules.

Detailed flow: `../journeys/cancellation.md`.

# Stage Ownership
Ownership is organization-specific. Typical patterns:

| Stage | Typical participants |
|---|---|
| Opportunity | Sales, RevOps |
| Configure | Sales, Product Specialist, Deal Desk, Product Ops |
| Price | Sales, Pricing, Finance, Deal Desk |
| Quote | Sales, Deal Desk |
| Approve | Management, Finance, Deal Desk, Legal |
| Contract | Sales, Legal, Deal Desk |
| Order | Sales Ops, Order Ops |
| Fulfillment | Operations, Provisioning |
| Billing | Billing Ops, Finance |
| Collection | Finance / AR |
| Revenue | Finance / Revenue teams |
| Amendment | Sales/CS, Deal Desk, Billing/Ops |
| Renewal | Renewal Sales/CS, Sales, Deal Desk |

Do not treat this table as customer-specific ownership without validation.
