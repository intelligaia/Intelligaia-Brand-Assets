# Cancellation Journey — UX, Diagnostics & KPIs

## Seller / Customer Success Experience
A strong cancellation experience should make clear:
- what the customer currently has;
- what is being cancelled;
- what will remain;
- whether the request is mid-term or end-of-term;
- earliest/approved effective date;
- dependency impact;
- financial impact;
- approval requirements;
- pending amendments/renewals;
- what happens to service and billing.

## Before / After Pattern
Show:
**Current Relationship | Cancellation Scope | Remaining Relationship**

For partial cancellation, this is essential.

## Timeline Pattern
Show:
**Request → Notice → Approval → Effective Date → Service End → Billing End/Adjustment → Entitlement End**

Only include milestones supported by policy.

## Financial Explanation
Separate:
future charges stopped | final charges | credit | adjustment | refund | termination charge.

Do not collapse them into one “refund” value.

## Diagnostic Questions
- Are users choosing cancellation when they mean non-renewal?
- Is cancellation scope explicit?
- Are effective dates manually overridden?
- Are dependencies visible?
- Are credits/refunds calculated manually?
- Are pending amendments/renewals cancelled appropriately?
- Does billing stop on the intended date?
- Are entitlements revoked too early or too late?
- How often are cancellations reversed/corrected?
- Can support trace the cancellation decision to invoice adjustments?

## Cancellation Diagnostic
**Request → Classification → Baseline → Eligibility → Scope → Effective Date → Commitment → Financial Effect → Approval → Decision → Execution → Subscription → Billing → Entitlement → Evidence**

## Scope Diagnostic
**Current Product/Quantity → Requested Cancellation → Dependency → Expected Remaining State → Actual Remaining State → Difference → Evidence**

## Financial Diagnostic
**Future Obligation → Final Charge → Credit/Adjustment → Refund (if applicable) → Termination Charge (if applicable) → Actual Invoice/Balance → Evidence**

## Timing Diagnostic
**Request Date → Notice Date → Approved Effective Date → Subscription End → Charge Stop → Entitlement End → Actual Timing → Difference → Evidence**

## Common Failure Patterns
Treat as hypotheses:
- full cancellation used for product removal;
- mid-term cancellation used instead of non-renewal;
- seller cannot explain credit vs refund;
- cancellation date differs across systems;
- pending renewal still executes;
- cancelled product remains entitled;
- subscription ends but billing continues;
- credit duplicated after retry;
- deprovisioning happens before approved date;
- reinstatement loses prior configuration/history.

## KPI Examples
Cancellation cycle time; manual touches; cancellation corrections; approval turnaround; effective-date errors; duplicate credits; billing-after-cancellation incidents; entitlement termination exceptions; deprovisioning failures; cancellation reconciliation exceptions; withdrawal/reinstatement rate.

Do not invent targets.

## Opportunity Patterns
Cancellation decision guidance, scope visualization, before/after installed base, effective-date guidance, dependency impact preview, financial explanation, pending-transaction warnings, cancellation timeline and automated reconciliation.

Apply `../foundations/source-provenance.md`.
