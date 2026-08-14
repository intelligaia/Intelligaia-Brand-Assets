# Zuora Subscription Story Patterns

## Purpose
Represent subscription state as a governed lifecycle baseline rather than merely a quote attribute.

## Authoritative Baseline
A lifecycle story should identify, when evidenced:
subscription/customer identity → current products/charges → quantities → term → dates → status → commercial state.

If authority is unclear, mark **Unknown / Validation Needed**.

## Pending / Future State
Check for:
pending amendment → future-dated change → cancellation → renewal → order/process still in flight.

A new transaction should not silently ignore relevant pending state.

## Story Pattern — View Current Subscription
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

Validate what “current” means in the source context.

## Story Pattern — Select Subscription for Change
Capture:
customer → eligible subscription → lifecycle state → transaction eligibility → intended change.

## Effective State
Distinguish:
current now → scheduled/pending → future resulting state.

## Identity
Preserve stable correlation across:
customer/account → quote → subscription → amendment/order → billing transaction.

Exact identifiers require evidence.

## Integrity Questions
- Which state is authoritative?
- Are pending changes visible?
- Can multiple changes overlap?
- Which term/date boundary applies?
- What is current vs future?
- Which downstream system confirms completion?

## Cross-Layer Links
- `../../platforms/zuora/subscriptions.md`
- `../../capabilities/subscriptions.md`
- `../../analysis/acceptance-lifecycle.md`

## Guardrail
Do not invent subscription status names, object structures, or lifecycle capabilities.
