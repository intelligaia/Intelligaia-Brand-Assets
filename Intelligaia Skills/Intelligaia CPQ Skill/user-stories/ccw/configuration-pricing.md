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
**As a** seller/partner  
**I want** actionable configuration validation  
**So that** I can correct the transaction before progressing.

Acceptance should focus on prevention and correction, not assumed UI design.

## Story Pattern — Reprice Changed Quote
**As a** supported role  
**I want** commercial values to reflect relevant quote changes  
**So that** the proposal does not rely on stale pricing.

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
