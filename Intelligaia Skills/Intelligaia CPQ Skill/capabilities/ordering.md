# Ordering Capability

## Purpose
Define the vendor-neutral CPQ/Q2C capability that converts accepted commercial intent into an executable order and preserves fidelity across fulfillment, provisioning, billing, and lifecycle systems.

## Boundary
**Quote = accepted commercial intent. Order = executable commercial instruction. Fulfillment = delivery/provisioning. Billing = financial charging/invoicing.**

## Scope
Quote-to-order conversion; order header/lines; line transformation; order validation; decomposition; orchestration; dependencies; holds; submission; downstream handoff; errors/retry; cancellation; change; reconciliation; lineage.

## Core Flow
**Accepted Quote → Readiness Validation → Create Order → Transform Lines → Validate → Decompose/Orchestrate → Submit → Fulfill/Provision → Billing Handoff → Reconcile**

## Key Questions
- Which accepted quote/version can create an order?
- What data is copied versus transformed?
- How are bundles/components represented?
- What must be validated before submission?
- Is one quote converted to one or multiple orders?
- How are fulfillment dependencies sequenced?
- How are errors, retries, and partial failures handled?
- What creates an order hold?
- How are cancellations/changes governed?
- How is quote-to-order-to-billing lineage preserved?

## Detail Modules
| Topic | Module |
|---|---|
| Conversion, validation, orchestration, failure and cancellation flows | `ordering-flows.md` |
| Order data, states, mappings, dependencies and governance | `ordering-rules-data.md` |
| Operations UX, diagnostics, reconciliation and KPIs | `ordering-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `ordering-requirements.md` |

## Cross-Links
`quoting.md`, `configuration.md`, `pricing.md`, `approvals.md`, `subscriptions.md`, `billing.md`, `../integrations/end-to-end-data-flow.md`

## Evidence Rule
Do not invent order statuses, decomposition rules, fulfillment systems, field mappings, retry behavior, hold logic, cancellation policy, billing triggers, or system ownership.
