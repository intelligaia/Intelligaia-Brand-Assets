# API Integrity Patterns

## 1. Idempotency
A repeated request for the same governed business operation should not create another business outcome.

### Design
Define:
**Business Operation → Uniqueness Scope → Idempotency Key/Reference → Retention Window → Existing-Result Behavior → Conflict Behavior**

Exact implementation requires evidence.

## 2. Create Idempotency
Before creating quote/order/subscription/lifecycle transaction:
check business uniqueness/correlation → return/resume existing result where appropriate → reject conflicting reuse.

## 3. Update Idempotency
Repeating an identical governed update should converge to the same intended state without duplicate financial/fulfillment effects.

## 4. Version Integrity
Mutating requests should identify the business version/state they were based on where stale updates are possible.

Potential pattern:
**Entity ID + Expected Version → Validate → Apply → Return New Version**

## 5. Optimistic Concurrency
If the target changed since the caller read it:
reject/rebase/retrieve latest according to policy rather than silently overwrite.

## 6. Quote Version
Approval, acceptance, order conversion and downstream execution should correlate to the exact quote/commercial version.

## 7. Lifecycle Concurrency
Before amendment/renewal/cancellation:
retrieve/validate authoritative subscription state → detect pending/conflicting operations → apply approved sequencing/rebase policy.

## 8. Effective Dates
Separate request processing time from business effective time.

Future-dated operations may be accepted now but should not be represented as current effective state.

## 9. Current vs Pending
Read contracts should allow consumers to distinguish current state from scheduled/pending future changes where relevant.

## 10. Conditional Execution
Where supported, use preconditions to prevent:
stale price acceptance; expired approval; outdated configuration; duplicate order conversion; amendment against superseded subscription.

## 11. Duplicate Events
Event consumers should detect business duplicates even if transport event IDs differ.

## 12. Ordering
Where business operations require ordering, preserve entity/version/sequence semantics or provide a safe conflict/reconciliation strategy.

## 13. Replay Protection
Historical replay must not recreate:
orders; subscriptions; invoices/credits; fulfillment; entitlements; customer communications.

## 14. Monetary Integrity
Avoid recomputing accepted commercial values in downstream consumers unless that recalculation is explicitly part of the architecture.

## 15. Referential Integrity
Validate referenced customer, product, quote, order, subscription, partner and billing entities before irreversible actions.

## 16. Transaction Boundaries
A distributed Q2C process rarely has one database transaction. Define business completion and compensation boundaries explicitly.

## 17. Compensation
If a downstream action must be undone, use the approved business reversal/cancellation/correction operation rather than assuming technical rollback.

## 18. Audit
Record material operation identity, source version, caller/system, result, target reference, effective date, retries and corrections.

## Guardrail
Do not invent idempotency-key formats, version fields, locking mechanisms, transaction guarantees, retention windows, or compensation operations.
