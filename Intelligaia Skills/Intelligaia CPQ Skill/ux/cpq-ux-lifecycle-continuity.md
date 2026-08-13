# CPQ UX — Lifecycle & Cross-System Continuity

## 1. Lifecycle Principle
CPQ UX should support the customer relationship after initial sale: amend, expand, reduce, migrate, renew, cancel and correct.

## 2. Authoritative Baseline
Lifecycle work should begin from the current authoritative subscription/installed-base state, not an old quote reconstructed manually.

## 3. Current State
Show the products, quantities, configuration, term/dates and commercial context required for the intended lifecycle action.

## 4. Pending Changes
Future-dated or in-flight changes should be visible before a user starts another amendment/renewal/cancellation.

## 5. Delta Construction
Make the requested change explicit:
add → remove → change quantity → replace/migrate → change term/date → cancel/non-renew.

## 6. Result Preview
Where reliable calculation is available, show resulting product/lifecycle state and commercial impact before commitment.

## 7. Effective Date
Make effective date prominent and distinguish it from processing date, quote date and billing date.

## 8. Amendment
Represent:
baseline → requested delta → resulting state → effective date → price/proration impact → approval/acceptance → downstream state.

## 9. Renewal
Represent:
current term → renewal boundary → proposed next term → pending changes → carry-forward/migration → new commercial state → acceptance → next-term activation.

## 10. Cancellation
Distinguish:
immediate cancellation → future/end-of-term cancellation → non-renewal → partial product cancellation.

Exact policy requires evidence.

## 11. Cross-System Handoff
When the user moves from CRM to CPQ, approval, order, subscription or billing:
preserve identity → preserve transaction → show pending state → return relevant outcome.

## 12. System Ownership
The user should not need to understand every integration, but should know where action is required.

## 13. Downstream Status
Expose business-relevant status:
submitted; processing; partially completed; completed; blocked; requires action.

Avoid raw technical status codes.

## 14. Billing Context
When lifecycle action affects billing, show decision-relevant expected consequence while treating authoritative billing calculation/state correctly.

## 15. Entitlement / Service Context
Where lifecycle actions affect service rights, make effective timing and pending completion visible to relevant users.

## 16. Partner Continuity
Preserve partner/end-customer/payer roles through amendment and renewal so the user does not reconstruct channel context.

## 17. Concurrency
If another lifecycle transaction is pending, explain the conflict and approved next action rather than allowing work on stale state.

## 18. History
Users may need a timeline of significant commercial/lifecycle events:
original sale → amendments → renewals → cancellations → corrections.

## 19. Reconciliation UX
Operations users should be able to compare expected vs actual downstream state and understand unresolved differences.

## Evaluation Questions
- Is the lifecycle baseline authoritative and current?
- Are pending changes visible?
- Can users understand the requested delta and resulting state?
- Is effective date clear?
- Does cross-system processing preserve context?
- Can the user tell whether billing/service consequences are pending or complete?

## Guardrail
Do not invent current lifecycle UI, proration, billing consequence, entitlement behavior, concurrency policy or platform status.
