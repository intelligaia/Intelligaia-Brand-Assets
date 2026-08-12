# Seller Experience — Amendments & Renewals

## 1. Lifecycle Entry
Start from customer → authoritative subscription/installed base → eligible action.

Avoid asking sellers to find the original quote and manually reconstruct current state.

## 2. Baseline
Show the current effective:
products → quantities → relevant configuration → term/dates → commercial context.

Also show material pending changes.

## 3. Change Intent
Guide seller to choose:
add product → remove product → quantity change → upgrade/migrate → term/date change → cancel/non-renew → other supported change.

## 4. Amendment Workspace
Represent:
**Current → Requested Delta → Resulting State**

## 5. Effective Date
Make effective date a first-class decision and explain restrictions when supported.

## 6. Commercial Impact
Show authoritative/approved calculation of:
incremental/decremental value → recurring/one-time impact → proration/credit implications where applicable.

Do not estimate unsupported billing outcomes.

## 7. Approval
If lifecycle change requires approval, identify the delta/version/effective state being approved.

## 8. Pending Amendment
Prevent a second change from silently using stale baseline. Show conflict and approved sequencing/rebase path.

## 9. Renewal Identification
Seller should know:
which customer/subscription/term is renewing → renewal date/boundary → ownership → status → next action.

## 10. Renewal Baseline
Include current subscription plus pending effective changes that affect the next term.

## 11. Carry Forward
Make clear which products/quantities/configuration carry forward, migrate, expire or require seller decision.

## 12. Renewal Pricing
Show current vs proposed next-term commercial state with explicit semantics.

## 13. Renewal Change
Support renewal plus expansion/reduction/migration without losing the relationship to the source term.

## 14. Renewal Comparison
Compare:
current term → next term → product/quantity → price/discount → dates → term → material commercial delta.

## 15. Non-Renewal
Distinguish non-renewal from immediate cancellation and capture effective end-of-term intent.

## 16. Acceptance & Completion
Accepted renewal/change → downstream lifecycle processing → resulting subscription/term → seller-visible completion.

## 17. Customer Conversation
Provide seller with decision-relevant history and upcoming changes without requiring billing-system expertise.

## 18. Lifecycle History
Expose meaningful sequence:
original sale → amendments → current term → pending change → renewal → cancellation/non-renewal.

## Evaluation Questions
- Does the seller start from authoritative current state?
- Are pending changes visible?
- Is delta vs resulting state clear?
- Can seller understand effective-date consequence?
- Is current-vs-renewal commercial state comparable?
- Can renewal and amendment concurrency create stale work?

## Guardrail
Do not invent proration, renewal uplift, eligibility, amendment sequencing, cancellation policy or current platform UX.
