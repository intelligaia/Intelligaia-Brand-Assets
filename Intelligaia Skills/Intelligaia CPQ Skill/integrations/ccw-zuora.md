# Cisco CCW ↔ Zuora Integration

## Purpose
Define an evidence-safe integration model between Cisco Commerce Workspace (CCW) commercial transactions and Zuora subscription/billing lifecycle capabilities.

This entry module routes deeper concerns while avoiding unsupported assumptions about the actual Cisco–Zuora implementation.

## Business Outcome
Accepted commercial intent originating in or passing through CCW can be transformed into the correct subscription and billing state in Zuora, while preserving customer, product, configuration, quantity, commercial, term/effective-date, transaction, and lineage semantics.

## Core Interaction Pattern
**CCW Quote / Commercial Transaction → Accepted Commercial State → Order / Integration Transformation → Zuora Account / Subscription / Charges → Billing → Lifecycle Feedback / Reconciliation**

The actual topology, trigger, middleware, Zuora objects/actions, and ownership are **Unknown / Validation Needed** until supported by evidence.

## Critical Integration Questions
- What CCW event/state makes a transaction eligible for Zuora processing?
- Does an order layer exist between CCW and Zuora?
- Which system owns customer/account identity?
- How are configured products transformed into subscription products/charges?
- Which price values are authoritative?
- How are start dates, terms and billing dates derived?
- How are amendments, renewals and cancellations represented?
- How is downstream Zuora state returned or reconciled?
- How are partial failures and retries handled?

## Detail Modules
| Topic | Module |
|---|---|
| New business and lifecycle handoffs | [`ccw-zuora-flows.md`](ccw-zuora-flows.md) |
| Product, charge, date, account and lineage controls | [`ccw-zuora-data-controls.md`](ccw-zuora-data-controls.md) |
| Operational diagnostics and reconciliation | [`ccw-zuora-ux-diagnostics.md`](ccw-zuora-ux-diagnostics.md) |
| Requirements and acceptance patterns | [`ccw-zuora-requirements.md`](ccw-zuora-requirements.md) |

## Related Modules
- [End-to-End Data Flow](end-to-end-data-flow.md)
- [Cisco CCW Overview](../platforms/cisco-ccw/overview.md)
- [Cisco CCW Workflows](../platforms/cisco-ccw/workflows.md)
- [Zuora Overview](../platforms/zuora/overview.md)
- [Zuora CPQ](../platforms/zuora/zuora-cpq.md)
- [Zuora Subscriptions](../platforms/zuora/subscriptions.md)
- [Zuora Amendments](../platforms/zuora/amendments.md)
- [Zuora Renewals](../platforms/zuora/renewals.md)
- [Zuora Billing](../platforms/zuora/billing.md)

## Guardrail
Do not assume direct CCW-to-Zuora connectivity, specific Zuora API/actions, account/subscription object mappings, rate-plan structures, billing triggers, amendment mechanics, or middleware behavior without evidence.
