# CCW Configuration & Pricing Story Patterns

## Configuration
Potential story outcomes include:
select eligible products → configure valid solution → identify required/incompatible selections → correct invalid configuration → preserve configuration through revision.

For each concrete story validate:
product context → eligibility authority → dependency/compatibility rule → quantity/cardinality → validation point → resulting state.

## Pricing
Potential outcomes include:
obtain governed price → understand commercial measures → recalculate after price-driving change → handle stale/invalid price → preserve currency/term semantics.

Validate:
pricing context → authoritative inputs → currency → quantity → term/date → recalculation trigger → commercial meaning.

## Configuration-to-Price Integrity
A valid configuration may be a prerequisite for pricing, but treat this as an evidenced rule for the specific context rather than a universal CCW fact.

## Story Pattern — Correct Invalid Configuration
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

Acceptance should focus on prevention and correction, not assumed UI design.

## Story Pattern — Reprice Changed Quote
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

Validate which changes actually drive recalculation.

## Data Considerations
product identifier → configuration selections → quantity → customer/deal context → currency → term → dates → price components.

Do not invent CCW field names or pricing formulas.

## Cross-Layer Links
- `../../capabilities/configuration.md`
- `../../capabilities/pricing.md`
- `../../analysis/acceptance-commercial.md`

## Guardrail
Generic CPQ configuration/pricing patterns are analytical prompts, not proof of Cisco-specific implementation.
