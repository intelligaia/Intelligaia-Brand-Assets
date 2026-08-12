# New Business Journey

## Purpose
Define the end-to-end vendor-neutral CPQ/Q2C journey for selling a new product/service relationship to a customer, connecting opportunity context, product selection, configuration, pricing, discounting, quoting, approvals, ordering, subscription creation, and billing.

This is the journey entry module. Detailed orchestration, decisions/data, UX/diagnostics, and requirement patterns are delegated to linked modules.

## Journey Outcome
A valid customer need is converted into an accepted, approved, executable commercial transaction whose ordered, subscribed, and billed state remains traceable to the quote the customer accepted.

## Journey Boundary
**Start:** qualified commercial intent requiring a new quote/configuration.  
**End:** order/subscription/billing handoff is completed or the transaction is closed/lost/cancelled according to process.

## Core Journey
**Opportunity/Customer Context → Quote Initiation → Product Selection → Configuration → Pricing → Discounting → Validation → Approval → Proposal → Negotiation/Revision → Acceptance → Order → Fulfillment/Activation → Subscription → Billing → Reconciliation**

## Primary Actors
Seller/AE, Partner Seller where applicable, Solution Specialist, Deal Desk, Pricing/Finance, Approver, Customer/Buyer, Order Operations, Fulfillment/Provisioning, Billing Operations.

## Major Decision Gates
1. Is customer/opportunity context complete?
2. Is the requested solution sellable and configurable?
3. Is the configuration valid?
4. Is pricing complete and current?
5. Are discounts within policy?
6. Is approval required?
7. Is the quote/proposal ready for customer presentation?
8. Has the customer accepted the exact current version?
9. Is the accepted quote ready to order?
10. Did order/subscription/billing reflect accepted intent?

## Detail Modules
| Topic | Module |
|---|---|
| End-to-end steps, loops, exception paths and handoffs | [`new-business-flows.md`](new-business-flows.md) |
| Cross-capability data, decisions, ownership and control points | [`new-business-controls.md`](new-business-controls.md) |
| Seller/operations UX, diagnostics and KPIs | [`new-business-ux-diagnostics.md`](new-business-ux-diagnostics.md) |
| Reusable journey stories and acceptance patterns | [`new-business-requirements.md`](new-business-requirements.md) |

## Capability Routing
- Catalog: [`../capabilities/product-catalog.md`](../capabilities/product-catalog.md)
- Configuration: [`../capabilities/configuration.md`](../capabilities/configuration.md)
- Pricing: [`../capabilities/pricing.md`](../capabilities/pricing.md)
- Discounting: [`../capabilities/discounting.md`](../capabilities/discounting.md)
- Quoting: [`../capabilities/quoting.md`](../capabilities/quoting.md)
- Approvals: [`../capabilities/approvals.md`](../capabilities/approvals.md)
- Ordering: [`../capabilities/ordering.md`](../capabilities/ordering.md)
- Subscriptions: [`../capabilities/subscriptions.md`](../capabilities/subscriptions.md)
- Billing: [`../capabilities/billing.md`](../capabilities/billing.md)

## Evidence Rule
Do not invent customer-specific opportunity stages, required fields, approval thresholds, proposal templates, acceptance methods, order mappings, fulfillment triggers, activation events, or billing rules.
