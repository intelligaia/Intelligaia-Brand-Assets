# API Async, Event & Batch Patterns

## 1. When Async Fits
Use asynchronous processing when business execution may be long-running, fan out to multiple systems, require downstream queues, or cannot safely complete within a synchronous interaction.

## 2. Long-Running Operation Pattern
**Submit Operation → Validate/Accept → Operation ID → Processing → Partial/Completed/Failed → Result References**

Transport acceptance must not be described as business completion.

## 3. Status Resource
Where appropriate expose:
operation ID → business entity → operation type → submitted time → current state → component progress → result references → error/action.

## 4. Callback / Webhook
Producer accepts request → later sends business outcome → consumer validates authenticity/correlation/version → updates local state.

Exact security and delivery behavior require implementation evidence.

## 5. Event Pattern
**Business State Change → Event → Broker/Transport → Consumer → Idempotency/Version Check → Business Action → Consumer State → Reconciliation**

## 6. Event Semantics
Prefer events named for meaningful business facts rather than vague technical updates.

Examples are conceptual only:
quote accepted; order submitted; subscription changed; renewal completed.

## 7. Event Envelope
Potential metadata:
event ID; type; source; entity ID/version; occurred-at; effective-at; correlation; causation; schema version.

## 8. Delivery
At-most-once, at-least-once, exactly-once-like processing, ordering and persistence guarantees are implementation-specific. Consumers should not assume stronger guarantees than documented.

## 9. Partial Completion
For composite transactions expose:
completed components; pending components; failed components; aggregate state; safe recovery path.

## 10. Timeout
A caller timeout does not prove target failure. Before retry, check operation/target state.

## 11. Polling
If callbacks/events are unavailable, polling should use stable operation/resource identity, bounded cadence, terminal-state rules and freshness semantics.

## 12. Batch
Batch integrations should define:
selection window → source snapshot/version → batch ID → per-record outcome → partial retry → duplicate protection → reconciliation.

## 13. Delta / Incremental Sync
Define watermark/change token/update timestamp semantics and late-arriving changes. Avoid losing records at boundary timestamps.

## 14. Backfill
Historical backfill should be isolated from normal real-time processing and protected against duplicate business execution.

## 15. Dead Letter / Quarantine
Unprocessable events/records should remain correlated to the business transaction and be reprocessable after correction.

## 16. Poison Message
Repeatedly failing data should be quarantined rather than blocking unrelated Q2C transactions indefinitely.

## 17. Eventual Consistency UX
Expose pending/processing state to users when downstream state is expected to lag.

## 18. Reconciliation
Async processing requires an independent mechanism to compare expected and actual business outcomes.

## Guardrail
Do not invent broker technology, queue/topic names, delivery guarantees, polling intervals, timeout values, batch schedules, or dead-letter implementation.
