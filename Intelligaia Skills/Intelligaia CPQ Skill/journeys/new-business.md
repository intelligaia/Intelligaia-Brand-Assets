# New Business Journey

## Purpose
Take a qualified opportunity through a valid commercial proposal to an executable order.

## Personas
Seller/AE, Solution/Product specialist, Deal Desk, Finance/Pricing, Legal, Approver, Customer, Order/Billing Ops.

## L1
Opportunity → Quote → Configure → Price → Approve → Contract/Accept → Order → Billing/Provisioning.

## L2
1. Confirm account/contact/opportunity and quote type.
2. Create/reopen quote.
3. Add products/services.
4. Configure options/attributes/bundles.
5. Apply standard pricing and discounts.
6. Add non-standard discount if required.
7. Qualify T&Cs.
8. Validate and submit quote.
9. Complete approvals.
10. Generate proposal/order form.
11. If special terms exist, execute agreement/CLM path.
12. Customer reviews and signs.
13. Reopen/reapprove if commercial changes occur.
14. Create order.
15. Capture PO and downstream-required information.
16. Pre-validate order.
17. Submit/integrate to order management/billing/provisioning.
18. Confirm downstream acceptance/status.

## Key decisions
Configuration valid? Discount/terms require approval? Special language? Agreement required? Customer change? Reapproval? Credit/order validation passed?

## Failure/rework
Invalid product/configuration; missing price; approval rejection; missing information; customer redline; missing PO/billing data; quote/order mismatch; integration failure.

## Data lineage
Account/Opportunity → Quote/Lines → Approval → Proposal/Agreement → Order/Lines → Subscription/Asset/Billing context.

## UX requirements
Clear progress, guided configuration, explainable pricing, approval preview/status, error prevention, proposal self-service where governed, downstream status visibility.
