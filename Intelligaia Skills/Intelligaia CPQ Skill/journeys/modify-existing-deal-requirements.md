# Modify Existing Deal — Requirement Patterns

## State-Aware Routing
**Story:** As a seller, I want the system to guide me to the correct change process based on transaction state.
**Acceptance:** Current authoritative state and requested change type determine the approved modification path.

## Baseline Integrity
**Story:** As a seller, I want changes based on current commercial/lifecycle state.
**Acceptance:** The selected modification references the authoritative current version/state and applicable pending changes.

## Quote Revision
**Story:** As a seller, I want an in-flight quote revised without losing prior commercial history.
**Acceptance:** Revised values are stored in a governed version/state and prior material versions remain traceable.

## Accepted-Deal Change
**Story:** As operations, I want changes after acceptance governed so the executed transaction matches the customer's latest agreement.
**Acceptance:** Accepted history is preserved and required revalidation, reapproval and reacceptance occur before execution.

## Product / Configuration Change
**Story:** As a seller, I want product changes to re-evaluate dependencies.
**Acceptance:** Defined configuration, pricing, discount, approval and downstream rules rerun for affected components.

## Commercial Change
**Story:** As a seller, I want price/discount changes recalculated and governed.
**Acceptance:** Approved pricing/discount mechanisms, reason capture and approval evaluation apply to the revised version.

## Order-State Change
**Story:** As Order Operations, I want modifications limited by execution state.
**Acceptance:** Completed, pending and failed components are identified and the approved change/cancel/compensation path is applied.

## Cancellation / Rebook
**Story:** As operations, I want replacement transactions linked to the original so duplicate execution is avoided.
**Acceptance:** Original cancellation/compensation and replacement quote/order lineage are preserved with duplicate-prevention controls.

## Active Subscription Change
**Story:** As a lifecycle seller, I want active-state changes routed to the correct lifecycle process.
**Acceptance:** Amendment, renewal, cancellation or other approved route is selected using timing and change policy.

## Reapproval
**Story:** As a governance owner, I want material revisions re-evaluated for approval.
**Acceptance:** Defined changes trigger approval evaluation against the revised commercial version.

## Reacceptance
**Story:** As a seller, I want customer acceptance associated with the commercial version actually executed.
**Acceptance:** Where policy requires, changed customer-facing terms cannot progress until the revised version is accepted.

## Reconciliation
**Story:** As operations, I want the resulting downstream state compared with the approved requested change.
**Acceptance:** Defined quote/order/subscription/billing dimensions are reconciled and unexplained differences flagged.

## Guardrail
Do not invent editability rules, point-of-no-return states, cancellation/rebook behavior, reapproval/reacceptance triggers, amendment-vs-renewal routing, effective dates, proration or platform mechanics. Mark missing rules **Unknown / Validation Needed**.
