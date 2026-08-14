# Salesforce Approval & Commercial Governance Story Patterns

## Submit for Approval
Capture:
actor → approval-driving commercial condition → exact quote/version → required context → request → resulting status.

## Routing
If evidenced, capture decision authority, condition, approver role/group, escalation or delegation. Do not invent Salesforce approval mechanisms.

## Version Integrity
Approval must be traceable to the exact commercial state evaluated.

## Post-Approval Change
Validate whether approval remains valid, is invalidated, requires a new version, or requires resubmission.

## Rejection
Capture rejection state, rationale if required, correction path, resubmission and preserved history.

## Authorization
Distinguish who may request, submit, approve or override where evidenced.

## Related
- [`../../platforms/salesforce/approvals.md`](../../platforms/salesforce/approvals.md)
- [`../../capabilities/approvals.md`](../../capabilities/approvals.md)
- [`../../capabilities/discounting.md`](../../capabilities/discounting.md)
- [`../../analysis/acceptance-commercial.md`](../../analysis/acceptance-commercial.md)

## Guardrail
Do not invent thresholds, queues, roles, flows, delegation or override authority.
