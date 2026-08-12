# Partner Sales Journey

## Purpose
Define the end-to-end CPQ/Q2C journey when a reseller, distributor, channel partner, agent, or other authorized indirect seller participates in creating, pricing, quoting, ordering, renewing, or changing a customer transaction.

## Journey Outcome
The correct partner sells the correct eligible offer to the correct end customer using governed pricing, discounts, approvals, commercial terms, ordering, attribution, and downstream customer/partner relationships.

## Boundary
**Start:** a partner/channel-led commercial opportunity or quote is initiated.  
**End:** the transaction is accepted and executed with correct end-customer, partner, commercial, order, subscription, billing, and attribution state—or is rejected/closed without unintended downstream effect.

## Core Journey
**Partner Identity → Authorization → End-Customer Context → Opportunity/Deal Context → Product Eligibility → Configure → Channel Pricing → Partner/Customer Discounting → Approval → Partner Quote/Proposal → Customer Acceptance → Partner/Direct Order Route → Fulfillment → Subscription/Billing → Attribution/Reconciliation**

## Key Distinctions
- Partner is not necessarily the end customer.
- Reseller, distributor, payer, bill-to, sold-to, service-to and end-user roles may differ.
- Partner buy price and end-customer sell price may be distinct.
- Partner discounts/incentives and customer discounts are not automatically the same concept.
- Some partner motions may be transacted through distribution or another intermediary.
- Partner renewals/amendments must preserve the relevant installed-base and channel relationships.

## Detail Modules
| Topic | Module |
|---|---|
| Detailed partner quote, order, renewal and change flows | [`partner-sales-flows.md`](partner-sales-flows.md) |
| Party roles, authorization, pricing, attribution and governance controls | [`partner-sales-controls.md`](partner-sales-controls.md) |
| Partner/seller/operations UX, diagnostics and KPIs | [`partner-sales-ux-diagnostics.md`](partner-sales-ux-diagnostics.md) |
| Journey-level stories and acceptance patterns | [`partner-sales-requirements.md`](partner-sales-requirements.md) |

## Capability Routing
[`../capabilities/product-catalog.md`](../capabilities/product-catalog.md), [`../capabilities/configuration.md`](../capabilities/configuration.md), [`../capabilities/pricing.md`](../capabilities/pricing.md), [`../capabilities/discounting.md`](../capabilities/discounting.md), [`../capabilities/quoting.md`](../capabilities/quoting.md), [`../capabilities/approvals.md`](../capabilities/approvals.md), [`../capabilities/ordering.md`](../capabilities/ordering.md), [`../capabilities/subscriptions.md`](../capabilities/subscriptions.md), [`../capabilities/amendments.md`](../capabilities/amendments.md), [`../capabilities/renewals.md`](../capabilities/renewals.md), [`../capabilities/billing.md`](../capabilities/billing.md)

## Evidence Rule
Do not invent partner tiers, authorization models, deal-registration policy, partner discounts, margins, rebates, price visibility, distributor flows, tax responsibility, billing relationships, renewal ownership, or channel conflict rules.
