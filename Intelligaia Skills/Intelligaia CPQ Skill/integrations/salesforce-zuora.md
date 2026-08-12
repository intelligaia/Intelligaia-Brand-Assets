# Salesforce ↔ Zuora Integration

## Purpose
Define an evidence-safe integration model between Salesforce CRM/selling context and Zuora subscription/billing lifecycle context.

## Business Outcome
Customer, opportunity, commercial, order/lifecycle, subscription, billing, and renewal information can cross the Salesforce–Zuora boundary without losing business identity, version/effective-date meaning, ownership, or traceability.

## Core Interaction Pattern
**Salesforce Customer / Opportunity / Commercial Context ↔ Integration / Transaction Context ↔ Zuora Account / Subscription / Charges / Billing / Lifecycle State**

The actual topology and synchronization directions are **Unknown / Validation Needed** until supported by implementation evidence.

## Critical Questions
- Which system is authoritative for customer/account attributes?
- How are Salesforce Account and Zuora billing/customer identities correlated?
- What Salesforce event creates or changes Zuora lifecycle state?
- Which subscription/billing summaries return to Salesforce?
- How are amendments, renewals, cancellations and pending changes exposed?
- Which system owns renewal opportunity generation and forecasting?
- How are payer, partner and end-customer roles represented?
- How are stale updates, retries and duplicate lifecycle transactions prevented?

## Detail Modules
| Topic | Module |
|---|---|
| Customer, lifecycle and feedback flows | [`salesforce-zuora-flows.md`](salesforce-zuora-flows.md) |
| Identity, ownership, mapping and lifecycle controls | [`salesforce-zuora-data-controls.md`](salesforce-zuora-data-controls.md) |
| Seller/operations UX and diagnostics | [`salesforce-zuora-ux-diagnostics.md`](salesforce-zuora-ux-diagnostics.md) |
| Requirements and acceptance patterns | [`salesforce-zuora-requirements.md`](salesforce-zuora-requirements.md) |

## Related Modules
- [End-to-End Data Flow](end-to-end-data-flow.md)
- [Salesforce Opportunity](../platforms/salesforce/opportunity.md)
- [Salesforce CPQ](../platforms/salesforce/cpq.md)
- [Salesforce Quote](../platforms/salesforce/quote.md)
- [Zuora Overview](../platforms/zuora/overview.md)
- [Zuora Subscriptions](../platforms/zuora/subscriptions.md)
- [Zuora Amendments](../platforms/zuora/amendments.md)
- [Zuora Renewals](../platforms/zuora/renewals.md)
- [Zuora Billing](../platforms/zuora/billing.md)

## Guardrail
Do not assume Salesforce Billing, Salesforce CPQ, Zuora CPQ, specific Salesforce/Zuora objects, managed packages, APIs, middleware, synchronization directions, renewal-opportunity automation, or billing ownership without evidence.
