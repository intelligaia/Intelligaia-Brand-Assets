# Approvals — Flows

## 1. Approval Evaluation
1. Validate current commercial state.
2. Calculate approval-driving measures.
3. Evaluate applicable approval rules.
4. Determine whether approval is required.
5. Determine required authority/routing.
6. Associate request with the exact transaction/version.
7. Build decision context.
8. Submit.

## 2. Standard Approval
Submit → notify approver → review context → approve/reject/request change → record decision → apply outcome → notify requester → continue or revise.

## 3. Sequential Approval
Determine ordered approvers → route level 1 → on approval route next level → repeat until all required decisions complete → finalize approval state.

A rejection/requested change follows defined policy rather than silently continuing.

## 4. Parallel Approval
Determine independent required approvers → route concurrently → collect decisions → evaluate completion policy → finalize when required conditions are met.

Do not assume unanimous approval unless policy states it.

## 5. Conditional Routing
Evaluate deal/exception context → select applicable route → record why route was chosen → submit.

Potential inputs can include discount, price exception, deal value, product, term, geography, channel, customer type, or non-standard terms. Actual inputs require evidence.

## 6. Escalation
Pending approval → evaluate SLA/escalation condition → notify/remind/escalate according to policy → preserve original request and escalation history.

## 7. Delegation / Substitute Approver
Identify unavailable approver → validate active delegation/substitution → route to authorized substitute → record delegation context → preserve decision audit.

## 8. Rejection
Approver rejects → capture reason → return transaction to governed state → notify requester → seller revises/abandons → resubmit if permitted.

## 9. Request Changes / More Information
Approver requests changes/information → request returns to seller/owner → update context → determine whether original request remains valid → resubmit/version according to policy.

## 10. Approved with Modified Commercial Value
Approver authorizes a different value than requested → record requested and approved values → recalculate quote → revalidate dependent approvals → communicate outcome.

## 11. Reapproval
Approved transaction changes → evaluate reapproval triggers → identify invalidated approvals → retain prior history → calculate new required route → resubmit.

## 12. Approval Expiration
Evaluate approved decision age/validity → if expired according to policy, invalidate/reopen required approvals → route again before progression.

## 13. Approval Cancellation
If quote/deal is abandoned or superseded, cancel pending requests according to policy while retaining history.

## 14. Approval-to-Quote Progression
All required approvals complete → verify approval applies to current quote/version → verify no material trigger changed → unlock governed progression → proposal/acceptance/order readiness.

## Flow Depth
L2/L3 vendor-neutral. Exact workflow engines, notifications, user hierarchy, APIs and status names belong in platform modules.
