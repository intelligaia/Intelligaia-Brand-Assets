# Amendments Capability

## Purpose
Define the vendor-neutral CPQ/Q2C capability for making controlled, effective-dated changes to an existing subscription or installed-base relationship while preserving source state, commercial delta, approvals, downstream execution, and resulting subscription state.

## Boundary
**Subscription = current commercial state. Amendment = governed change to that state. Pricing = commercial impact. Order = execution of the change. Billing = financial effect.**

## Scope
Add/remove products; quantity increase/decrease; upgrade/downgrade; attribute/configuration change; effective dates; co-term changes; future-dated changes; proration dependencies; amendment quote/order; approvals; cancellation/termination; overlapping changes; resulting-state reconciliation.

## Core Flow
**Retrieve Authoritative Subscription → Establish Amendment Context → Select Effective Date → Apply Delta → Validate Resulting Configuration → Price Delta → Discount/Approve → Quote/Accept → Change Order → Update Subscription/Billing/Entitlements → Reconcile**

## Key Questions
- Which subscription state is authoritative?
- What can be changed?
- Is the amendment modeled as a delta, resulting state, or both?
- Which effective dates are allowed?
- How are additions, removals and quantity changes priced?
- How is proration determined?
- Can changes be future-dated?
- How are concurrent/pending amendments handled?
- Which changes trigger approval?
- How are billing and entitlements adjusted?
- How is the resulting subscription state reconciled?

## Detail Modules
| Topic | Module |
|---|---|
| Add/remove/change, future-date, cancellation and execution flows | `amendments-flows.md` |
| Delta/state model, dates, proration dependencies and governance | `amendments-rules-data.md` |
| Seller/operations UX, diagnostics and KPIs | `amendments-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `amendments-requirements.md` |

## Cross-Links
`subscriptions.md`, `configuration.md`, `pricing.md`, `discounting.md`, `approvals.md`, `quoting.md`, `ordering.md`, `billing.md`

## Evidence Rule
Do not invent amendment types, effective-date rules, proration formulas, cancellation policy, co-term behavior, credit/refund treatment, pending-change behavior, approval triggers, or platform lifecycle mechanics.
