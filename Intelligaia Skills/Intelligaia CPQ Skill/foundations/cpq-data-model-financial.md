# CPQ Data Model — Billing & Financial Linkage

## Purpose
Define the conceptual entities connecting accepted commercial intent to billing and financial execution.

This is not an accounting schema and does not define revenue-recognition policy.

# 1. Billing Account
## Purpose
Represent the customer context used to manage billing.

## Conceptual Attributes
Identifier, customer/party reference, billing contact/address, currency where applicable, payment terms/method context, status.

## Relationship
A sales Account and Billing Account may map one-to-one, one-to-many, or through another customer hierarchy. Validate the implementation.

# 2. Charge
## Purpose
Represent a billable monetary component.

## Common Types
One-time, recurring, usage-based, or other implementation-specific charge models.

## Conceptual Attributes
Product/service, amount/rate, quantity/usage basis, currency, start/end dates, billing frequency, source order/subscription.

# 3. Billing Schedule / Billing Event
## Purpose
Represent when charges become billable where the billing architecture uses such a concept.

## Conceptual Attributes
Charge reference, billing date/period, amount, status.

# 4. Invoice
## Purpose
Represent billed amounts presented to the customer for payment.

## Conceptual Attributes
Invoice identifier, billing account, invoice date, due date, currency, line/charge references, totals, status.

# 5. Invoice Line
## Purpose
Represent billed detail attributable to a product/service/charge.

Where possible, financial traceability should allow an invoice line to be correlated to the commercial/lifecycle source that produced it.

# 6. Credit / Adjustment
## Purpose
Represent a reduction, reversal, or correction of billed financial value according to policy.

Do not infer credit/accounting rules without evidence.

# 7. Payment / Receivable
## Purpose
Represent customer payment/amount owed in downstream finance processes.

These entities may be outside the CPQ/billing platform boundary.

# 8. Revenue Context
Revenue processes may consume contract, order, billing, and other financial data.

CPQ Insight must distinguish:
- commercial price/value;
- billed value;
- collected value;
- recognized/reported revenue.

These are not automatically the same.

# 9. Commercial-to-Financial Traceability
Desired conceptual lineage:

**Quote Line → Accepted Agreement / Order Line → Subscription / Charge → Invoice Line → Payment / Financial Reporting**

Actual system mappings vary.

# 10. Financial Data Quality Questions
- Is billing customer identity aligned with commercial customer identity?
- Are product/charge identifiers mapped correctly?
- Are price, quantity, currency, dates, and term preserved?
- Is billing frequency explicit?
- Can an invoice discrepancy be traced upstream?
- How are amendment/renewal deltas reflected?
- Who owns reconciliation?

# Boundary
Accounting, tax, payment processing, revenue recognition, general ledger, and financial policy require specialized validated evidence and should not be inferred from this conceptual model.
