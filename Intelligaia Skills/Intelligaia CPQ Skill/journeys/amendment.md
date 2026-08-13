# Amendment Journey

## Purpose
Define the end-to-end customer lifecycle journey for changing an active subscription or installed-base relationship while preserving the authoritative baseline, effective-dated commercial delta, customer agreement, execution, billing/entitlement effects, and resulting state.

## Journey Outcome
A requested in-term change is converted into an approved and accepted amendment whose resulting subscription, billing, entitlement, and operational state matches the intended change.

## Boundary
**Start:** a customer or internal actor requests a change to an active commercial relationship.  
**End:** the change is executed and reconciled, or is rejected/cancelled without unintended downstream effect.

## Core Journey
**Customer Request → Retrieve Installed Base → Determine Eligibility → Select Effective Date → Model Before/After State → Configure Delta → Price/Prorate → Discount → Validate → Approve → Amendment Quote → Negotiate/Accept → Change Order → Fulfill/Provision → Update Subscription → Adjust Billing/Entitlements → Reconcile**

## Primary Change Motions
Add product; remove product; increase/decrease quantity; upgrade/downgrade; configuration change; future-dated change; co-term addition; partial/mid-term cancellation.

## Detail Modules
| Topic | Module |
|---|---|
| Detailed amendment journey, loops, exceptions and handoffs | [`amendment-flows.md`](amendment-flows.md) |
| Baseline, effective-date, delta, commercial and execution controls | [`amendment-controls.md`](amendment-controls.md) |
| Seller/CS/operations UX, diagnostics and KPIs | [`amendment-ux-diagnostics.md`](amendment-ux-diagnostics.md) |
| Journey-level stories and acceptance patterns | [`amendment-requirements.md`](amendment-requirements.md) |

## Capability Routing
[`../capabilities/subscriptions.md`](../capabilities/subscriptions.md), [`../capabilities/amendments.md`](../capabilities/amendments.md), [`../capabilities/configuration.md`](../capabilities/configuration.md), [`../capabilities/pricing.md`](../capabilities/pricing.md), [`../capabilities/discounting.md`](../capabilities/discounting.md), [`../capabilities/approvals.md`](../capabilities/approvals.md), [`../capabilities/quoting.md`](../capabilities/quoting.md), [`../capabilities/ordering.md`](../capabilities/ordering.md), [`../capabilities/billing.md`](../capabilities/billing.md)

## Evidence Rule
Do not invent amendment eligibility, allowed effective dates, proration, credit/refund policy, co-term behavior, approval thresholds, customer acceptance requirements, concurrency behavior, or downstream lifecycle mechanics.
