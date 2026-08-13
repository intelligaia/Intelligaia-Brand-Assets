# CPQ UX — Approvals, Exceptions & Recovery

## 1. Approval Readiness
Before submission show:
what is being approved → commercial version → approval-driving conditions → missing prerequisites → expected next owner/stage where known.

## 2. Approval Context
Approvers need decision-relevant information, not the full seller workspace:
customer/deal → request → variance/discount → commercial impact → rationale → history → relevant policy context.

## 3. Version Integrity
Make it clear which quote/version an approval applies to. If commercial changes invalidate approval, expose that state.

## 4. Approval Status
Differentiate:
not required; required/not submitted; submitted; pending; approved; rejected; recalled; invalidated/superseded where applicable.

Exact states require platform evidence.

## 5. Rejection
A rejection should provide an actionable reason and return path rather than forcing the seller to restart the transaction.

## 6. Exception Principle
Errors should answer:
**What happened? What is affected? Is my work preserved? Can I fix it? Can I retry? Who owns it?**

## 7. Inline vs Blocking
Use inline validation for local correctable issues; reserve blocking interruption for conditions that prevent safe continuation.

## 8. Technical Errors
Translate technical failures into business impact while retaining a support/correlation reference.

Do not show stack traces or sensitive internals.

## 9. Unknown Outcome
If downstream result is uncertain:
show processing/verification state rather than “failed” → prevent blind duplicate submission → offer safe status check/recovery.

## 10. Partial Success
For multi-component operations show:
completed → pending → failed components → overall business state → safe next action.

## 11. Retry
Only offer user retry when the operation is known to be safe/idempotent according to the integration design.

## 12. Correction
For data errors, guide the user toward the authoritative source when correction cannot safely occur in the current UI.

## 13. Recovery Continuity
After correction/retry:
return the user to the same transaction context → preserve prior valid work → show resulting state.

## 14. Ownership
When user action is not possible, identify the responsible role/team/process at the level supported by evidence.

## 15. Aging
For long-running approval/downstream work, show elapsed/pending context where it helps the user decide whether to wait, escalate or continue other work.

## 16. Audit Visibility
Expose relevant decision/recovery history to roles that need it without overwhelming normal seller workflows.

## Evaluation Questions
- Can the user tell whether their work is safe?
- Does the error suggest a valid next action?
- Is retry offered only when safe?
- Can an approver identify the exact commercial version?
- Can partial completion be understood without support?
- Can the user recover without recreating the transaction?

## Guardrail
Do not invent approval chains, support teams, error codes, retry rules, SLAs, escalation thresholds or platform behavior.
