# Zuora CPQ / Quoting Story Patterns

## Scope
Normalize source stories concerning quote creation, subscription-aware quoting, commercial revision, version/state, approvals, and quote-to-lifecycle handoff.

## New Business Quote
Capture:
actor → account/customer context → transaction type → products/configuration → commercial terms → quote/version → approval/acceptance → downstream lifecycle intent.

## Subscription-Aware Quote
If the quote depends on an existing subscription, validate:
subscription identity → authoritative baseline → pending changes → transaction intent → effective date → resulting commercial delta.

## Revision
When a quote changes, examine:
version/currentness → recalculation → approval validity → customer artifact → downstream eligibility.

## Commercial Measures
Preserve distinctions supported by evidence:
one-time → recurring → usage/consumption → term-based → credits/adjustments → tax/billing estimates where applicable.

Do not invent calculation formulas.

## Quote-to-Subscription Boundary
A quote may represent intended commercial change; the authoritative subscription/lifecycle result may occur downstream.

Acceptance should not equate quote creation with completed lifecycle change.

## Approval
Validate:
approval driver → exact quote/version → decision → post-approval changes → downstream applicability.

## Cross-Layer Links
- `../../platforms/zuora/zuora-cpq.md`
- `../../capabilities/quoting.md`
- `../../analysis/acceptance-commercial.md`

## Guardrail
Do not infer Zuora CPQ configuration, objects, fields, flows, or edition-specific behavior without evidence.
