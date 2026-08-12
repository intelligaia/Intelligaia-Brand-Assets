# Cancellation Journey

## Purpose
Define the end-to-end CPQ/Q2C journey for cancelling or terminating all or part of an active commercial relationship while preserving contractual eligibility, effective-date integrity, customer intent, approvals, financial treatment, service/entitlement termination, historical state, and downstream reconciliation.

## Journey Outcome
An approved cancellation request results in the correct products/services ending at the governed time, future obligations and charges being handled according to policy, entitlements being updated, and the resulting commercial and financial state remaining traceable to the original relationship and cancellation decision.

## Boundary
**Start:** a customer or authorized internal actor requests cancellation, termination, non-renewal, or removal that requires a governed cancellation process.  
**End:** cancellation is rejected/withdrawn or executed and reconciled across subscription, order, billing, entitlement, and customer-facing state.

## Critical Distinction
- **Pre-execution cancellation:** cancel an in-flight quote/order according to transaction-state policy.
- **Mid-term cancellation/termination:** end all or part of an active relationship before its natural term boundary.
- **End-of-term non-renewal:** route through the renewal journey where applicable.
- **Product removal within an active subscription:** may be an amendment rather than full cancellation.
- **Correction/reversal:** may require an operational correction rather than a new customer cancellation.

## Core Journey
**Cancellation Request → Identify Scope → Retrieve Authoritative State → Determine Cancellation Type → Validate Eligibility → Determine Effective Date → Assess Dependency/Commitment Impact → Calculate Financial Effect → Approve → Confirm Customer Decision → Execute Cancellation → Stop/Adjust Fulfillment & Entitlements → Update Subscription → Adjust Billing → Reconcile**

## Detail Modules
| Topic | Module |
|---|---|
| Detailed cancellation, partial cancellation, reversal and exception flows | [`cancellation-flows.md`](cancellation-flows.md) |
| Eligibility, effective-date, financial, lineage and governance controls | [`cancellation-controls.md`](cancellation-controls.md) |
| Seller/CS/operations UX, diagnostics and KPIs | [`cancellation-ux-diagnostics.md`](cancellation-ux-diagnostics.md) |
| Journey-level stories and acceptance patterns | [`cancellation-requirements.md`](cancellation-requirements.md) |

## Capability Routing
[`../capabilities/subscriptions.md`](../capabilities/subscriptions.md), [`../capabilities/amendments.md`](../capabilities/amendments.md), [`../capabilities/renewals.md`](../capabilities/renewals.md), [`../capabilities/ordering.md`](../capabilities/ordering.md), [`../capabilities/billing.md`](../capabilities/billing.md), [`../capabilities/approvals.md`](../capabilities/approvals.md)

## Evidence Rule
Do not invent cancellation rights, notice periods, commitment treatment, early-termination fees, credit/refund rules, effective-date restrictions, approval thresholds, entitlement timing, order cancellation mechanics, or accounting treatment.
