# Ordering

## Objective
Preserve accepted quote intent while creating complete, executable downstream order data.

## Key capabilities
Quote-to-order; mandatory-field capture before submission; order pre-validation; orchestration; booking; order-status visibility; error/reconciliation handling.

## Diagnostic pattern
Capturing billing account/contact, payment terms, and other mandatory downstream attributes earlier can reduce manual order validation. Validate exact required fields per implementation.

## KPIs
Order touch rate, auto-book rate, order cycle time, rejection/error rate, reconciliation effort.

## L2 order flow
1. Select final/approved quote.
2. Create order.
3. Copy commercial/configuration details.
4. Review products and discounts for fidelity.
5. Capture PO details at header and/or lines.
6. Capture miscellaneous/downstream-required fields.
7. Perform rules-based credit/order validation where applicable.
8. Capture Ship-to and Entitle-to.
9. Submit order.
10. Integrate to ERP/OM/billing/provisioning.
11. Return status/errors for reconciliation.

## Reconciliation controls
Quote-to-order line matching; product/SKU validity; quantities; currency; price/discount; dates; account/contact; payment terms; PO; ship/entitle data; downstream IDs.
