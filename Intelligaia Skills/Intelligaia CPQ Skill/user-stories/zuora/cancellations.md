# Zuora Cancellation & Non-Renewal Story Patterns

## Purpose
Normalize cancellation/non-renewal requests while preserving timing, scope, lifecycle and billing/service consequences.

## Cancellation Model
**Current State → Pending State → Cancellation Intent → Scope → Effective Timing → Approval/Authorization → Resulting Lifecycle State → Billing/Service Consequence**

## Scope
Validate whether the request applies to:
entire subscription → product/charge → quantity → future term/non-renewal.

Do not assume partial cancellation support.

## Timing
Potential business meanings:
immediate → future date → end of current term.

Actual allowed timing requires evidence.

## Story Pattern — Cancel Subscription
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

## Pending Transactions
Check interaction with:
pending amendment → renewal → order → future change.

## Commercial / Billing
Capture whether the source requires:
credit → final charge → no future charge → refund → proration → other consequence.

Do not invent calculation behavior.

## Non-Renewal
Distinguish stopping future renewal from immediate cancellation when the source makes that distinction.

## Authorization
Validate who may request/approve cancellation and what evidence/audit is required.

## Completion
Separate cancellation request from authoritative lifecycle/billing/service completion.

## Cross-Layer Links
- `../../journeys/cancellation.md`
- `../../capabilities/subscriptions.md`
- `../../analysis/acceptance-lifecycle.md`

## Guardrail
Do not invent cancellation policy, refunds, credits, notice periods, or effective-date restrictions.
