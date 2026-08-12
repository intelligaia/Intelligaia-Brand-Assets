# Subscriptions Capability

## Purpose
Define the vendor-neutral CPQ/Q2C capability for representing an active recurring commercial relationship after an accepted order and providing the authoritative lifecycle context required for amendments, renewals, cancellations, billing, and future selling motions.

## Boundary
**Order = executable commercial instruction. Subscription = active/time-bound commercial relationship. Entitlement = right to use/receive. Billing = financial charging/invoicing. Amendment = change to an existing subscription. Renewal = continuation/recontracting of an expiring subscription.**

## Scope
Subscription creation; activation; terms; start/end dates; products and charges; quantities; attributes; status; installed-base representation; entitlements; ramps/phases; co-term relationships; billing linkage; source order lineage; lifecycle events; cancellation/end state; source-of-truth.

## Core Flow
**Accepted Order → Create Subscription Context → Establish Term/Dates → Create Products/Charges → Activate → Synchronize Billing/Entitlements → Maintain Current State → Expose Installed Base → Support Amendment/Renewal/Cancellation**

## Key Questions
- What event creates the subscription?
- Which system owns the authoritative subscription state?
- How are order lines mapped to subscription products/charges?
- Which dates define term and service?
- How are quantities, attributes, prices and charge structures represented?
- How are ramps/phases represented?
- What constitutes the installed base?
- How are entitlements related?
- How are co-term relationships handled?
- Which lifecycle changes create a new version/state?
- How does billing remain aligned?
- What context must be available to CPQ for amendment and renewal?

## Detail Modules
| Topic | Module |
|---|---|
| Creation, activation, maintenance and lifecycle flows | `subscriptions-flows.md` |
| Subscription data, state, dates, products, charges and lineage | `subscriptions-rules-data.md` |
| Seller/operations UX, installed-base diagnostics and KPIs | `subscriptions-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `subscriptions-requirements.md` |

## Cross-Links
`ordering.md`, `amendments.md`, `renewals.md`, `billing.md`, `configuration.md`, `../foundations/cpq-data-model-commercial.md`

## Evidence Rule
Do not invent subscription statuses, activation events, term rules, billing ownership, entitlement models, co-term rules, ramp semantics, renewal behavior, cancellation policy, or platform object structures.
