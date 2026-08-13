# CPQ/Q2C Integration Errors

## Purpose
Define the vendor-neutral error-management model for CPQ/Q2C integrations. The goal is not merely to record technical failures, but to preserve commercial integrity and provide safe, actionable recovery.

## Error Outcome
For every failed or uncertain handoff, the organization should be able to determine:
**What business operation was attempted → what state existed before it → what completed → what failed → whether retry is safe → who owns recovery → how the final state is reconciled.**

## Core Principles
1. Classify errors by business consequence as well as technical cause.
2. Preserve source transaction, version, component and correlation identity.
3. Never equate timeout with target failure.
4. Never blindly retry a potentially completed business operation.
5. Distinguish transient, data, business-rule, authorization, conflict and reconciliation failures.
6. Make partial completion explicit.
7. Keep manual correction auditable.
8. Reconcile after recovery.
9. Protect against stale-version and duplicate outcomes.
10. Do not expose sensitive technical internals to end users.

## Detail Modules
| Topic | Module |
|---|---|
| Error taxonomy and classification | [`integration-error-taxonomy.md`](integration-error-taxonomy.md) |
| Detection, triage and ownership | [`integration-error-triage.md`](integration-error-triage.md) |
| Retry, recovery, compensation and replay | [`integration-error-recovery.md`](integration-error-recovery.md) |
| Reconciliation, audit and operational metrics | [`integration-error-reconciliation.md`](integration-error-reconciliation.md) |
| Error-management requirements | [`integration-error-requirements.md`](integration-error-requirements.md) |

## Related Modules
- [Integration Operations](end-to-end-operations.md)
- [State & Events](end-to-end-state-events.md)
- [API Patterns](api-patterns.md)
- [CCW ↔ Salesforce](ccw-salesforce.md)
- [CCW ↔ Zuora](ccw-zuora.md)
- [Salesforce ↔ Zuora](salesforce-zuora.md)

## Evidence Guardrail
Exact error codes, middleware queues, retry counts, backoff values, alert thresholds, SLAs, support groups, platform statuses and recovery tools are implementation-specific and must be sourced or marked **Unknown / Validation Needed**.
