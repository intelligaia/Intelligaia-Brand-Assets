# Integrations

## Purpose
Route CPQ/Q2C integration analysis to the correct level of detail while keeping platform-specific claims evidence-safe.

## Start Here
| Need | Module |
|---|---|
| End-to-end orchestration and data flow | [`end-to-end-data-flow.md`](end-to-end-data-flow.md) |
| Cisco CCW ↔ Salesforce | [`ccw-salesforce.md`](ccw-salesforce.md) |
| Cisco CCW ↔ Zuora | [`ccw-zuora.md`](ccw-zuora.md) |
| Salesforce ↔ Zuora | [`salesforce-zuora.md`](salesforce-zuora.md) |
| Reusable API/interface design | [`api-patterns.md`](api-patterns.md) |
| Error handling and recovery | [`integration-errors.md`](integration-errors.md) |

## Ownership Boundaries
- **End-to-end modules** own vendor-neutral orchestration, data contracts, state/event, operational and reconciliation patterns.
- **Platform-pair modules** own pair-specific business handoffs and implementation questions.
- **API Patterns** owns reusable interface-design mechanics.
- **Integration Errors** owns reusable failure classification, triage, recovery and closure.
- **Platform modules** own platform-specific behavior supported by evidence.
- **Journey modules** own business orchestration across capabilities and systems.

Link to authoritative content rather than duplicating it.

## Evidence Rule
Exact APIs, objects, fields, middleware, statuses, mappings, ownership, timing, retry values, SLAs and platform mechanics require supplied evidence. Otherwise label them **Unknown / Validation Needed**.

## Flow Depth
Use L2/L3 here for business handoffs and integration controls. Put supported implementation mechanics at L4 in the appropriate platform-pair/platform module.

## Cross-Cutting Integrity
Across all integrations preserve where applicable:
business identity → source/version → approval/acceptance → effective dates → target identity → idempotency → current/pending state → error/recovery → reconciliation.


## Evidence-Dependent Runtime Rule
Integration dimensions are reusable. Actual source/target, APIs, middleware, sync direction, retries, authority and failure behavior require evidence.
