# Renewals Capability

## Purpose
Define the vendor-neutral CPQ/Q2C capability for continuing, renegotiating, migrating, or ending an expiring subscription relationship while preserving authoritative source state, commercial policy, customer decisions, and downstream lifecycle continuity.

## Boundary
**Subscription = current relationship. Renewal = continuation/recontracting at a renewal boundary. Amendment = in-term change. Pricing = renewal commercial calculation. Ordering = execution. Billing = renewed financial schedule.**

## Scope
Renewal identification; readiness; opportunity/quote generation; baseline subscription state; auto-renew and assisted renewal; uplift/repricing; product migration; co-term/consolidation; quantity/configuration changes; approvals; negotiation; acceptance; non-renewal/churn; renewal order; subscription continuation; billing/entitlement alignment; forecasting and reconciliation.

## Core Flow
**Identify Renewal → Establish Baseline → Assess Readiness → Create Renewal Transaction → Apply Renewal Rules → Configure/Migrate → Price/Uplift → Discount/Approve → Negotiate → Accept/Non-Renew → Order → Continue Subscription/Billing/Entitlements → Reconcile**

## Key Questions
- What identifies a renewable subscription?
- When does renewal activity begin?
- What source state is used as the baseline?
- Is renewal automatic, assisted, or optional?
- Which products/quantities carry forward?
- How are uplift and repricing determined?
- How are obsolete products migrated?
- Can products be added/removed during renewal?
- How are multiple subscriptions co-termed or consolidated?
- What triggers approval?
- What happens on non-renewal?
- How is the renewed term linked to the prior term?

## Detail Modules
| Topic | Module |
|---|---|
| Readiness, auto/assisted renewal, migration, negotiation and execution flows | `renewals-flows.md` |
| Renewal policy, baseline, uplift, dates, migration and governance | `renewals-rules-data.md` |
| Seller/CS UX, diagnostics, forecasting and KPIs | `renewals-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `renewals-requirements.md` |

## Cross-Links
`subscriptions.md`, `amendments.md`, `pricing.md`, `discounting.md`, `approvals.md`, `quoting.md`, `ordering.md`, `billing.md`

## Evidence Rule
Do not invent renewal windows, auto-renew policy, uplift percentages, renewal pricing basis, migration mappings, churn rules, co-term behavior, approval triggers, or renewal ownership.
