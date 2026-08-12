# Modify Existing Deal Journey

## Purpose
Define how CPQ/Q2C handles a requested change to an existing commercial transaction and routes the user to the correct change mechanism based on transaction state.

## Critical Distinction
**In-flight commercial transaction:** revise the current quote/deal before execution.  
**Accepted but not fully executed transaction:** determine whether controlled revision, cancellation/rebook, or change-order handling applies.  
**Active contracted/subscribed relationship:** use the governed lifecycle mechanism, normally amendment, renewal, cancellation, or another evidenced process.

Never treat every “change” as a quote edit.

## Core Routing Flow
**Identify Transaction → Determine Lifecycle State → Determine Change Type → Select Governed Change Path → Retrieve Authoritative Baseline → Apply Change → Revalidate → Reprice → Reapprove → Reaccept if Required → Execute → Reconcile**

## Change Categories
Product add/remove; quantity change; configuration change; price/discount change; term/date change; party/account change; commercial-term change; cancellation; upgrade/downgrade; correction.

## Detail Modules
| Topic | Module |
|---|---|
| State-based routing and detailed change flows | [`modify-existing-deal-flows.md`](modify-existing-deal-flows.md) |
| Change classification, versioning, controls and lineage | [`modify-existing-deal-controls.md`](modify-existing-deal-controls.md) |
| Seller/operations UX, diagnostics and KPIs | [`modify-existing-deal-ux-diagnostics.md`](modify-existing-deal-ux-diagnostics.md) |
| Reusable journey stories and acceptance patterns | [`modify-existing-deal-requirements.md`](modify-existing-deal-requirements.md) |

## Capability Routing
[`../capabilities/quoting.md`](../capabilities/quoting.md), [`../capabilities/configuration.md`](../capabilities/configuration.md), [`../capabilities/pricing.md`](../capabilities/pricing.md), [`../capabilities/discounting.md`](../capabilities/discounting.md), [`../capabilities/approvals.md`](../capabilities/approvals.md), [`../capabilities/ordering.md`](../capabilities/ordering.md), [`../capabilities/subscriptions.md`](../capabilities/subscriptions.md), [`../capabilities/amendments.md`](../capabilities/amendments.md), [`../capabilities/renewals.md`](../capabilities/renewals.md), [`../capabilities/billing.md`](../capabilities/billing.md)

## Evidence Rule
Do not invent editability rules, point-of-no-return states, cancellation/rebook policy, reapproval triggers, repricing behavior, effective-date rules, or platform-specific change mechanisms.
