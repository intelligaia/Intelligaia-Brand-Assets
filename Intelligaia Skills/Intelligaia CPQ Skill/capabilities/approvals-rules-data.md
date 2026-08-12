# Approvals — Rules, Data & Governance

## Approval Trigger
A condition requiring authorization before a governed transaction can progress.

Potential categories:
discount exception, price override, commercial value, non-standard term, product/configuration exception, payment/billing term, lifecycle exception, or another approved policy condition.

## Authority
Authority defines who may approve a given condition/range. Entry permission, request permission, and approval authority are distinct.

## Approval Matrix
Conceptually map:
**Trigger/Measure → Range/Condition → Required Authority → Route → Sequence → Escalation → Effective Dates**

Actual matrix values require evidence.

## Approval Request
Conceptual data:
request ID, transaction/quote ID, version, trigger, requested value, calculated/current value, reason, requester, approver(s), timestamps, status, decision.

## Decision Context
Approvers may need:
customer/deal context; quote value; configuration; price basis; discount; exception; reason; terms; prior decisions; revision comparison; supporting evidence.

## Decision Types
Potential conceptual outcomes:
Approved, Rejected, Changes Requested, Cancelled, Expired.

Exact statuses are implementation-specific.

## Sequential vs Parallel
Sequential requires ordered decisions. Parallel allows concurrent decisions. Completion logic must be explicit.

## Conditional Routing
Route may vary by policy inputs. Preserve sufficient context to explain why a route was selected.

## Delegation
Define authorized delegate, scope, effective dates, exclusions and audit behavior.

## Escalation
Define SLA/condition, reminder behavior, escalation target and whether authority changes.

## Reapproval Trigger
Potential changes:
discount, price, quantity, configuration, term, customer, currency, quote total, terms, version, time/expiration.

Only evidenced policy determines actual triggers.

## Version Integrity
Approval must identify the commercial version/context reviewed. A later version must not silently inherit invalid approval.

## Requested vs Approved Value
When approver changes an exception, preserve both and recalculate dependent commercial state.

## Approval Expiration
If approvals expire, define validity basis, expiry action and reapproval requirement.

## SLA
Define start, pause/stop conditions, business-calendar semantics, target, escalation and reporting. Do not invent SLA.

## Notifications
Define recipient, event, channel and required decision context without assuming platform mechanics.

## Audit
Preserve:
**Request → Trigger → Commercial Version → Requested Value → Route → Approver → Decision → Reason/Comment → Timestamp → Escalation/Delegation → Resulting State**

## Security
Only authorized actors should make approval decisions. Access to sensitive commercial context must follow approved permissions.

## Historical Integrity
Never overwrite prior approval decisions simply because a transaction is resubmitted.

## Dependencies
Consumes pricing/discount/quote context and can gate proposal, acceptance, agreement, ordering and lifecycle progression.
