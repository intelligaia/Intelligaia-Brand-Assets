# Salesforce CPQ & Quoting Story Patterns

## Scope
Normalize quote initiation, configuration/commercial execution, revision, version selection, proposal generation and downstream handoff in a Salesforce context.

## Create Quote
Capture:
customer/deal context → actor → transaction type → quote identity → configuration/commercial inputs → resulting state.

## Revise Quote
Capture:
source quote/version → changed need → recalculation → approval impact → current/superseded state → customer artifact.

## Select Governed Quote
Where multiple quotes/versions exist, define which transaction governs proposal, approval, acceptance or downstream handoff. Do not invent “primary quote” behavior.

## Configuration / Pricing
Link reusable capability knowledge rather than duplicating generic rules. Salesforce-specific implementation requires evidence.

## Proposal & Acceptance
Verify intended quote/version, customer/partner context, commercial values, artifact/acceptance evidence and downstream readiness.

## Related
- [`../../platforms/salesforce/cpq.md`](../../platforms/salesforce/cpq.md)
- [`../../platforms/salesforce/quote.md`](../../platforms/salesforce/quote.md)
- [`../../capabilities/quoting.md`](../../capabilities/quoting.md)
- [`../../analysis/acceptance-commercial.md`](../../analysis/acceptance-commercial.md)

## Guardrail
Do not assume Salesforce CPQ, Revenue Cloud or custom CPQ; use source-supported terminology.
