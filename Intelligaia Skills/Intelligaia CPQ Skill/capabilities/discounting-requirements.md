# Discounting — Requirement & Acceptance Patterns

## Purpose
Provide reusable vendor-neutral discounting requirement patterns. These are starting points until customer policy is validated.

# 1. Discount Eligibility
## Story Pattern
As a seller, I want discount controls to reflect product and transaction eligibility so that I do not apply an invalid discount.

## Acceptance Pattern
When a discount is requested, applicable product, transaction, role, date, and other approved eligibility conditions are evaluated before the discount is accepted.

# 2. Seller Authority
## Story Pattern
As a seller, I want to know whether a requested discount is within my authority so that I understand whether approval is required.

## Acceptance Pattern
The request is evaluated against the approved authority policy and clearly indicates whether additional approval is required.

# 3. Discount Reason
## Story Pattern
As a commercial governance owner, I want discount reasons captured so that exceptions can be analyzed and audited.

## Acceptance Pattern
Where policy requires a reason, the transaction cannot progress without an allowed reason and any required justification.

# 4. Threshold Approval
## Story Pattern
As a pricing governance owner, I want discounts beyond defined authority routed for approval so that commercial exceptions receive the correct decision.

## Acceptance Pattern
Given an approved threshold, crossing it creates the required approval state using the calculated discount context.

# 5. Floor Protection
## Story Pattern
As a pricing owner, I want governed minimum-price rules enforced so that transactions below the approved floor follow the defined exception process.

## Acceptance Pattern
The resulting price is compared to the applicable floor using the approved basis; violation blocks or routes according to policy.

# 6. Stacking
## Story Pattern
As a seller, I want compatible discounts calculated in the approved order so that the resulting net price is predictable.

## Acceptance Pattern
Only permitted combinations are applied and calculation order follows the approved stacking policy.

# 7. Non-Discountable Item
## Story Pattern
As a seller, I want non-discountable products clearly identified so that I do not submit invalid requests.

## Acceptance Pattern
The system prevents or limits discounting according to product/charge policy and explains the restriction.

# 8. Requested vs Approved
## Story Pattern
As a seller, I want to see the discount approved by the approver so that I can present the correct commercial value.

## Acceptance Pattern
Requested and approved values remain distinguishable and the quote is recalculated using the approved outcome.

# 9. Reapproval
## Story Pattern
As an approver, I want materially changed approved deals re-evaluated so that my approval remains tied to the commercial state I reviewed.

## Acceptance Pattern
When a validated reapproval-triggering change occurs, prior approval is invalidated or supplemented according to policy and the changed commercial context is routed appropriately.

# 10. Discount Audit
## Story Pattern
As a governance owner, I want discount changes traceable so that I can reconstruct the approved commercial decision.

## Acceptance Pattern
Audit captures relevant price basis, request, approved value, reason, actor, timestamp, approval reference, and quote/version.

# 11. Repricing Interaction
## Story Pattern
As a seller, I want discount behavior re-evaluated after repricing so that discounts and approvals remain valid.

## Acceptance Pattern
When price changes, applicable percentage/amount/net-price discounts are recalculated or validated according to policy and approval triggers are re-evaluated.

# 12. Downstream Fidelity
## Story Pattern
As an order/billing user, I want approved net price and required discount context preserved downstream so that execution matches accepted commercial intent.

## Acceptance Pattern
Approved commercial values are transferred or explicitly transformed according to the approved architecture and reconciliation controls.

# 13. Actionable Validation
## Story Pattern
As a seller, I want invalid discount requests to explain the issue so that I can correct them without unnecessary escalation.

## Acceptance Pattern
The message identifies the affected line/quote, violated policy category, whether progression is blocked, and corrective/escalation path where defined.

# Guardrail
Do not invent:
- discount thresholds;
- authority levels;
- maximum discounts;
- floor formulas;
- stacking order;
- margin thresholds;
- approval roles;
- partner discount policy;
- exact platform permissions.

Mark missing rules as **Unknown / Validation Needed**.
