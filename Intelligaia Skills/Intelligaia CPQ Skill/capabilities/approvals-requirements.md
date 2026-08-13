# Approvals — Requirement & Acceptance Patterns

## Trigger Evaluation
**Story:** As a seller, I want approval requirements evaluated automatically so I know whether the quote can progress.
**Acceptance:** Defined approval-driving conditions are evaluated against the current commercial version.

## Correct Routing
**Story:** As a governance owner, I want requests routed to the required authority.
**Acceptance:** The approved matrix/conditions determine the route and the selected route is traceable.

## Decision Context
**Story:** As an approver, I want the relevant commercial context in one decision view.
**Acceptance:** Required deal, exception, requested value, baseline, reason and version context are available according to permissions.

## Sequential Approval
**Story:** As a governance owner, I want dependent approval levels executed in the required order.
**Acceptance:** A later sequential stage does not complete before prerequisite stages according to policy.

## Parallel Approval
**Story:** As a governance owner, I want independent approvals requested concurrently where policy allows.
**Acceptance:** Completion follows the defined parallel-decision rule.

## Rejection
**Story:** As an approver, I want to reject with a reason so the seller knows what must change.
**Acceptance:** Rejection records the decision/reason and moves the transaction to the defined governed state.

## Delegation
**Story:** As an approval owner, I want authorized delegation during absence so decisions do not stall.
**Acceptance:** Delegation applies only within approved scope/effective dates and remains auditable.

## Escalation
**Story:** As a process owner, I want overdue requests escalated according to policy.
**Acceptance:** The defined elapsed-time/condition triggers the approved reminder/escalation action.

## Reapproval
**Story:** As an approver, I want material commercial changes reapproved so my decision remains tied to what I reviewed.
**Acceptance:** Defined changes invalidate/supplement prior approval and route the updated version as required.

## Requested vs Approved Value
**Story:** As a seller, I want an approver-modified commercial value reflected accurately.
**Acceptance:** Requested and approved values remain distinguishable and dependent quote calculations are updated.

## Version Integrity
**Story:** As an auditor, I want each approval tied to the quote version reviewed.
**Acceptance:** Approval records retain transaction/version correlation through revision and downstream progression.

## Audit
**Story:** As a governance owner, I want approval decisions reconstructable.
**Acceptance:** Request, trigger, route, actor, decision, timestamps, reason/comment and relevant version are retained according to policy.

## Guardrail
Do not invent thresholds, approver names/roles, hierarchy, SLA, escalation timing, delegation scope, approval sequence, expiry, or reapproval triggers. Mark missing rules **Unknown / Validation Needed**.
