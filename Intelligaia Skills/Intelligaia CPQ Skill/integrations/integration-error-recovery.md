# Integration Error Recovery

## Purpose
Define safe recovery patterns that prevent duplicate, stale or commercially inconsistent outcomes.

## 1. Recovery Decision
**Outcome Known? → Source Still Current? → Target State? → Operation Idempotent? → Error Corrected? → Retry / Resume / Rebuild / Compensate / Manual Review**

## 2. Retry
Use retry for failures known to be transient and safe.

Before retry:
- confirm current source state/version;
- determine whether target action already completed;
- preserve operation/correlation identity;
- respect approved backoff/limits;
- prevent duplicate side effects.

## 3. Resume
If a multi-step operation partially completed, resume from the safe continuation point rather than replaying all prior business actions.

## 4. Rebuild
If the source transaction changed after failure, a new operation may need to be built from current authoritative state rather than replaying the old payload.

Preserve lineage to the failed attempt.

## 5. Correct and Reprocess
For data/mapping problems:
correct authoritative source/reference → validate → reprocess the intended business operation → reconcile.

## 6. Compensation
When completed downstream actions must be reversed or corrected, use an approved business operation such as cancel, credit, deprovision, reverse, or corrective transaction.

Do not assume distributed technical rollback.

## 7. Partial Success
For componentized orders/subscriptions:
preserve successful components → isolate failed components → assess dependencies → retry subset or compensate according to policy.

## 8. Timeout Recovery
Timeout → query operation/target using stable correlation → if completed, record result → if processing, wait/poll → if confirmed absent/failed, evaluate safe retry.

## 9. Duplicate Recovery
If duplicate target objects exist:
identify authoritative intended transaction → stop further propagation → assess downstream effects → merge/cancel/correct according to business policy → restore correlation → reconcile.

Never delete financial/lifecycle history casually.

## 10. Stale-Version Recovery
If source version is superseded:
do not replay old commercial intent → retrieve current state → determine whether failed operation remains valid → rebuild/rebase or cancel.

## 11. Amendment Conflict
Retrieve authoritative subscription including pending changes → determine sequencing → rebase requested delta if approved → execute new governed operation.

## 12. Renewal Conflict
Check whether amendment/cancellation/renewal already changed the baseline → regenerate/reprice/reapprove if required by policy.

## 13. Billing Recovery
Where subscription state is correct but billing differs:
identify charge/invoice impact → use approved billing correction process → preserve audit → reconcile commercial and lifecycle state.

## 14. Replay
Replay should be scoped and controlled:
selection → currentness check → duplicate protection → execution → per-record result → reconciliation.

## 15. Bulk Recovery
For systemic incidents, do not mass replay until root cause is fixed and sample validation confirms safe behavior.

## 16. Manual Intervention
Manual correction should record:
actor → reason → original state → change → resulting state → references → follow-up reconciliation.

## 17. Recovery Evidence
Retain original request/reference, error, correction, retry/recovery action, final target state and reconciliation result.

## 18. Customer Communication
If recovery affects committed dates, service, billing or accepted commercial terms, route communication according to approved business process.

## Guardrail
Do not invent retry counts, backoff, compensation APIs, deletion rules, billing corrections, replay tooling or customer-communication policy.
