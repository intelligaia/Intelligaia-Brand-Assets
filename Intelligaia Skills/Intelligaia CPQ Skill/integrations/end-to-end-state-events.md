# End-to-End State, Events & Idempotency

## Purpose
Define integration patterns for state transitions, event ordering, retries, concurrency and duplicate prevention.

## 1. Business State vs Transport State
Distinguish:
- request sent;
- transport accepted;
- target queued;
- target business object created;
- downstream execution started;
- business completion;
- failure;
- reconciliation exception.

An HTTP/message success is not necessarily business success.

## 2. State Transition Contract
For each integration action define:
**Eligible Source State → Trigger → Target Action → Expected Target State → Source Acknowledgement State → Failure State → Retry/Recovery**

## 3. Event Envelope Pattern
Where events are used, consider:
event ID; event type; source; business entity ID; version; occurred-at time; effective-at time; correlation ID; causation ID; payload/schema version.

Exact envelope is architecture-specific.

## 4. Idempotency
A retry should not create a second business outcome.

Define the business uniqueness boundary, for example:
**Operation Type + Source Entity/Version + Target Scope**

Exact key design requires implementation evidence.

## 5. Duplicate Detection
Detect duplicates at the business layer, not only message ID, because the same business operation may be replayed in a new message.

## 6. Ordering
Identify events that require ordering, such as:
create before update; activation before entitlement; amendment A before amendment B; cancellation before renewal where policy requires.

## 7. Out-of-Order Events
When target receives stale state:
compare entity/version/effective time → ignore, quarantine, rebase, or reconcile according to approved policy.

Never silently overwrite newer state.

## 8. Concurrency
Potential conflicts:
two quote revisions; overlapping amendments; renewal plus amendment; cancellation plus renewal; order update while fulfillment is running.

Define lock, optimistic version, queue, rebase, merge, reject, or another approved pattern.

## 9. Effective Time vs Processing Time
A change processed today may be effective in the past or future. Preserve both processing timestamp and business effective date where needed.

## 10. Eventual Consistency
If systems converge asynchronously, define:
expected lag → user-visible pending state → blocking/non-blocking behavior → timeout/escalation → reconciliation.

Do not present stale replicated data as authoritative without context.

## 11. Retry
Classify failures:
transient technical; throttling; dependency unavailable; invalid data; business-rule rejection; authorization; duplicate/conflict; unknown.

Only retry categories known to be safe.

## 12. Backoff / Limits
Retry cadence, maximum attempts and dead-letter/quarantine handling are implementation-specific. Document them in L4 modules.

## 13. Compensation
For partial execution, compensation may reverse, cancel, credit, deprovision, or create a corrective transaction. Compensation is business logic, not simply technical rollback.

## 14. Replay
When replaying historical events, protect against:
duplicate business execution; stale overwrites; repeated customer communication; duplicate billing/credits; repeated entitlement actions.

## 15. Schema Evolution
Version integration contracts so producers and consumers can evolve without silently changing business meaning.

## 16. State Reconciliation
Scheduled or event-driven reconciliation should compare authoritative expected state with target actual state and create actionable exceptions.

## Evidence Guardrail
Do not invent event topics, delivery guarantees, retry counts, locking mechanisms, middleware products, schemas, or idempotency keys.
