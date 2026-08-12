# Billing Capability

## Purpose
Define the vendor-neutral Q2C capability that converts accepted subscription/order commercial terms into billable charges, invoices, credits, adjustments, and financially traceable customer balances while preserving fidelity to the originating commercial transaction.

## Boundary
**Pricing = determines commercial price. Order = execution instruction. Subscription = lifecycle state. Billing = financial schedule and invoice execution. Payment/collections and accounting may be adjacent but separate capabilities.**

## Scope
Billing account/context; charge creation; recurring, one-time and usage charges; billing schedules; bill cycles; proration; invoice generation; credits/adjustments; cancellations; usage; taxation dependencies; payment-term dependencies; billing exceptions; reconciliation; CPQ-to-billing fidelity.

## Core Flow
**Accepted Commercial State → Establish Billing Context → Create/Update Charges → Determine Billable Period/Event → Rate/Prorate/Adjust → Generate Invoice → Validate/Tax → Finalize → Deliver/Post → Reconcile**

## Key Questions
- What event creates or updates billing charges?
- Which system owns billable charge state?
- How do quote/order/subscription values map to billing?
- Which dates control billing?
- How are recurring, one-time and usage charges handled?
- Which proration convention applies?
- How are amendments/cancellations credited or adjusted?
- How are usage records rated and correlated?
- Where does tax calculation occur?
- Which payment terms originate in CPQ/contract?
- How are billing failures corrected without losing commercial lineage?

## Detail Modules
| Topic | Module |
|---|---|
| Charge, invoice, usage, amendment, cancellation and correction flows | `billing-flows.md` |
| Billing data, dates, charge models, proration, credits and governance | `billing-rules-data.md` |
| Billing/RevOps UX, diagnostics, reconciliation and KPIs | `billing-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `billing-requirements.md` |

## Cross-Links
`pricing.md`, `ordering.md`, `subscriptions.md`, `amendments.md`, `renewals.md`, `../integrations/end-to-end-data-flow.md`

## Evidence Rule
Do not invent billing cycles, proration formulas, invoice timing, tax rules, credit/refund treatment, usage-rating logic, payment terms, accounting treatment, or platform object behavior.
