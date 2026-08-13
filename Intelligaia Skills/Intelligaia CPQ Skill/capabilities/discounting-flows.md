# Discounting — Flows

## Purpose
Define vendor-neutral discount application, validation, exception, and reapproval flows.

# 1. Standard Discount

## Trigger
A transaction is eligible for a policy-defined discount.

## Flow
1. Establish product/line and pricing context.
2. Determine whether discounting is permitted.
3. Identify applicable standard discount.
4. Determine discount basis.
5. Apply discount.
6. Recalculate resulting price.
7. Evaluate stacking/precedence.
8. Validate floor/minimum/commercial controls where applicable.
9. Determine whether approval is required.
10. Store discount source/reason.
11. Continue quote progression.

# 2. Seller-Requested Discretionary Discount

## Flow
1. Seller reviews calculated price.
2. Seller requests discount by percentage/amount/target price according to permitted interaction.
3. Validate seller authority.
4. Validate product/charge discountability.
5. Capture reason/justification where required.
6. Calculate requested discount and resulting price.
7. Evaluate cumulative discount.
8. Evaluate floor/minimum controls.
9. Evaluate approval rules.
10. If within authority, apply/finalize.
11. If outside authority, route for approval.
12. Preserve requested vs approved values.

# 3. Line-Level Discount

## Flow
Select line → enter/request discount → validate line eligibility → calculate line net price → evaluate thresholds → trigger approval if needed → update quote totals.

## Control
Line discount must not unintentionally change unrelated lines unless a defined allocation/quote-level rule requires it.

# 4. Quote-Level Discount

## Flow
Request overall discount → determine eligible lines → determine allocation/calculation method → calculate resulting line/quote values → validate exclusions/floors → evaluate approval → preserve allocation logic.

## Control
Exact allocation behavior must be defined; do not assume proportional allocation.

# 5. Discount Stacking

## Flow
Identify all applicable discounts/adjustments → determine compatibility → apply approved precedence/order → calculate cumulative effect → validate maximum/floor → expose resulting waterfall → evaluate approval.

## Questions
- Can discounts stack?
- Are they additive, sequential, exclusive, or prioritized?
- Does automatic discount reduce discretionary authority?
- Which discount is evaluated for approval: incremental or cumulative?

All are policy-specific.

# 6. Non-Discountable Item

## Flow
User attempts discount → identify restriction → block or limit according to policy → explain restriction → allow escalation only if an approved exception path exists.

# 7. Floor / Minimum Price Exception

## Flow
Calculate requested net price → compare to governed floor/minimum → if compliant continue → if violated, block or route exception according to policy → preserve decision/audit.

Do not assume floor price is cost or margin.

# 8. Discount Approval

## Flow
Requested discount → calculate exception context → determine approval trigger → assemble decision context → route approver(s) → approve/reject/request information → apply approved outcome → preserve decision.

Detailed approval orchestration belongs in `approvals.md`.

# 9. Partial Approval / Approved Discount Change

## Flow
Approver authorizes a different discount than requested → record requested value → record approved value → recalculate quote → notify relevant user → determine whether additional approval is required.

# 10. Discount Change After Approval

## Flow
Approved quote changes → determine whether price/discount/commercial basis changed → re-evaluate thresholds → invalidate/reopen approval if policy requires → reroute → preserve prior approval history.

# 11. Configuration Change Impact

## Flow
Configuration/quantity/term changes → pricing recalculates → evaluate whether prior discount remains valid → recalculate percentage/amount effects → re-evaluate approval.

# 12. Clone / Revision

## Flow
Copy/revise quote → preserve historical discount for traceability → determine whether discount is carried forward → validate current authority/policy/effective dates → reapprove where required.

# 13. Partner Discount

## Flow
Establish partner/channel context → determine partner discount authority/eligibility → apply permitted discount → evaluate internal approval where required → preserve partner/end-customer context.

# 14. Discount-to-Order Handoff

## Flow
Accepted discount state → order transformation → preserve approved net values and required discount references → validate quote-to-order fidelity → pass billing-relevant values downstream.

# Flow Depth
These are L2/L3 patterns. Exact threshold calculations, approval routes, UI controls, and platform behavior belong in customer/platform modules.
