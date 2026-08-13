# CCW Discount & Approval Story Patterns

## Scope
Normalize source stories about commercial adjustment, special pricing, approval, rejection, resubmission, and approval/version integrity.

## Discount / Adjustment Story
Capture:
actor → requested commercial change → authorization → governing rule → resulting commercial state → approval consequence.

Do not invent discount thresholds or Cisco program rules.

## Approval Story
Capture:
approval-driving condition → exact quote/version → decision context → routing/authority if evidenced → approval result → next state.

## Rejection
A mature story should explain:
decision state → rationale requirement if evidenced → correction path → version relationship → resubmission.

## Post-Approval Change
Validate whether changing an approval-relevant value:
preserves approval → invalidates approval → creates a new version → requires resubmission.

Never assume the policy.

## Partner Context
Where special/deal pricing or channel approval appears in source evidence, preserve:
partner → customer → distributor if relevant → commercial visibility → authorization → confidentiality.

## Integrity Questions
- What commercial value is being requested vs approved?
- Which version was approved?
- Can approved values change afterward?
- Who may submit/approve/view?
- What happens after rejection?
- Does customer-facing output reflect the approved state?

## Cross-Layer Links
- `../../capabilities/discounting.md`
- `../../capabilities/approvals.md`
- `../../analysis/acceptance-commercial.md`

## Guardrail
Cisco-specific approval routing, thresholds, deal types and authorization require source evidence.
