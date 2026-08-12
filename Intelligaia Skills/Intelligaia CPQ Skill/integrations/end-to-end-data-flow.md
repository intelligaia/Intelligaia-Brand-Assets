# End-to-End Data Flow

## Purpose
Define the vendor-neutral CPQ/Q2C integration model that preserves commercial intent as data moves across customer/opportunity, CPQ, order, fulfillment, subscription/installed-base, billing, entitlement, and financial domains.

This is the integration entry module. It defines orchestration and routes deeper integration concerns to focused modules.

## Integration Outcome
The accepted commercial transaction can be traced end to end, each handoff has an explicit contract and owner, downstream systems receive sufficient valid data, failures are observable/recoverable, and retries do not create duplicate business outcomes.

## Core Flow
**Customer / Opportunity → Quote / Version → Configuration → Price / Discount → Approval → Proposal / Acceptance → Order → Fulfillment / Provisioning → Subscription / Installed Base → Charges / Billing → Entitlements → Financial / Operational Reconciliation**

## Core Integration Principles
1. Define an authoritative source for each business concept.
2. Preserve business identity and correlation across system boundaries.
3. Treat integration as a business-state transition, not only field movement.
4. Separate source facts, transformations, defaults, derived values, and target-owned values.
5. Validate before irreversible downstream execution.
6. Design retries for idempotent business outcomes.
7. Preserve version, approval, acceptance, and effective-date integrity.
8. Make partial success and asynchronous state visible.
9. Reconcile expected and actual downstream outcomes.
10. Do not infer platform-specific ownership or APIs without evidence.

## Detail Modules
| Topic | Module |
|---|---|
| Cross-domain orchestration and transaction handoffs | [`end-to-end-orchestration.md`](end-to-end-orchestration.md) |
| Canonical entities, identifiers, mappings and source-of-truth patterns | [`end-to-end-data-contracts.md`](end-to-end-data-contracts.md) |
| State, events, idempotency, sequencing and concurrency | [`end-to-end-state-events.md`](end-to-end-state-events.md) |
| Observability, exception ownership, retry and reconciliation | [`end-to-end-operations.md`](end-to-end-operations.md) |
| Integration requirements and acceptance patterns | [`end-to-end-requirements.md`](end-to-end-requirements.md) |

## Journey Routing
- [New Business](../journeys/new-business.md)
- [Modify Existing Deal](../journeys/modify-existing-deal.md)
- [Amendment](../journeys/amendment.md)
- [Renewal](../journeys/renewal.md)
- [Cancellation](../journeys/cancellation.md)
- [Partner Sales](../journeys/partner-sales.md)

## Platform Pair Routing
- [CCW ↔ Salesforce](ccw-salesforce.md)
- [CCW ↔ Zuora](ccw-zuora.md)
- [Salesforce ↔ Zuora](salesforce-zuora.md)

## Evidence Guardrail
This module is vendor-neutral. Exact Cisco CCW, Salesforce, Zuora, middleware, API, object, field, event, ownership, timing, and retry behavior must be sourced in platform/pair modules or marked **Unknown / Validation Needed**.
