# Cross-Platform Quote-to-Order Stories

## Outcome
Convert the exact governed customer commitment into the intended order without commercial/version drift or duplicate submission.

## Story Pattern
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

## Flow
1. Intended quote/version is identified.
2. Configuration/commercial validity is confirmed as required.
3. Required approvals/acceptance are confirmed.
4. Order-ready business data is assembled.
5. Handoff is submitted with correlation.
6. Submission acknowledgement is distinguished from completion.
7. Downstream status/result is correlated back.
8. Final state is reconciled with the originating transaction.

## Integrity
quote/version → customer/partner → products/configuration → quantities → currency → term/effective dates → approved values → acceptance → order reference.

## Decisions
- What makes a transaction order-ready?
- Which version governs?
- What invalidates readiness?
- Is downstream completion synchronous or asynchronous?
- How is retry made safe?

## Exceptions
expired/stale quote → approval invalidated → acceptance mismatch → timeout → duplicate → partial order → downstream rejection → unknown outcome.

## Acceptance Focus
Exact-version fidelity, eligibility, correlation, duplicate prevention, submitted-vs-completed state, recovery/reconciliation.

## Guardrail
Do not equate “submitted” with “ordered/completed” without evidence.
