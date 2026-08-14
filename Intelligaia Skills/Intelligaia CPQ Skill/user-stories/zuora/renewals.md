# Zuora Renewal Story Patterns

## Renewal Model
Use:

**Current Subscription → Current Term → Renewal Boundary → Pending Lifecycle Changes → Renewal Intent → Carry-Forward / Change → Pricing → Approval/Acceptance → Next-Term State → Billing/Service Consequence**

## Story Pattern — Prepare Renewal
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

## Current State
Validate:
subscription → term → products/charges → quantities → pending changes → customer/partner context.

## Renewal Boundary
Determine the actual renewal/term boundary from evidence.

Do not invent notice periods or timing rules.

## Carry-Forward
Validate what is expected to:
continue → change → migrate → terminate → require explicit selection.

## Renewal Pricing
Capture the business requirement for:
current pricing → uplift → negotiated pricing → special pricing → other renewal commercial logic.

Exact formulas/rates require evidence.

## Pending Amendment
A renewal story should explicitly address relevant future/pending amendments when the source context permits overlap.

## Approval / Acceptance
Check:
commercial threshold/rule → exact renewal version → customer acceptance → post-approval changes.

## Partner / Channel
Where applicable preserve:
partner eligibility/ownership → end customer → distributor → commercial visibility → next-term relationship.

## Completion
Separate renewal quote/decision from authoritative next-term subscription/billing completion.

## Cross-Layer Links
- `../../platforms/zuora/renewals.md`
- `../../capabilities/renewals.md`
- `../../journeys/renewal.md`
- `../../analysis/acceptance-lifecycle.md`

## Guardrail
Do not invent auto-renew behavior, uplift, notice periods, renewal opportunity rules, or partner ownership behavior.
