# CPQ Insight Skill v0.4

v0.4 deepens the package from a capability index into an operational CPQ playbook.

## Major additions
- Detailed Quote flow with L1/L2/L3 steps.
- Source-derived Zuora AS-IS and proposed TO-BE Opportunity-to-Order flows.
- Detailed approval decision/rework flow.
- Proposal/customer-change and contract/CLM paths.
- Detailed order capture and downstream handoff flow.
- Detailed renewal and amendment journeys.
- Illustrative Salesforce CPQ lifecycle from supplied source material.
- End-to-end CPQ data lineage and handoff contract.
- New `analysis/flow-analysis-framework.md` defining L0-L4 process depth.

## Evidence warning
The proposed Zuora TO-BE process was not business-reviewed according to the supplied assessment. Historical platform gap statements and illustrative flows must be validated before being treated as current product behavior.

## v0.4
Finalized `SKILL.md` operating contract: routing, evidence precedence, L0-L4 flow depth, assessment contracts, contradiction handling, output modes, provenance, and quality gate.

## v0.5
Refactored `SKILL.md` from ~670 lines to a compact router. Detailed operating frameworks remain delegated to `analysis/`, `foundations/`, and domain modules.

## v0.6
Completed `foundations/cpq-lifecycle.md` as the authoritative vendor-neutral lifecycle reference, with stages, actors, inputs/outputs, decisions, rework loops, data lineage, UX considerations, KPIs, diagnostics, and module boundaries.

## v0.7
Refactored the oversized CPQ lifecycle foundation into linked modules:
- `cpq-lifecycle.md` — compact lifecycle router/reference
- `cpq-lifecycle-stages.md` — stage definitions and flows
- `cpq-lifecycle-controls.md` — decisions, rework, UX controls, actors, KPIs
- `cpq-lifecycle-diagnostics.md` — assessment questions

This keeps each file focused and makes progressive loading possible.

## v0.8
Completed the Quote-to-Cash foundation using progressive disclosure:
- `quote-to-cash.md` — compact Q2C entry/reference
- `quote-to-cash-stages.md` — end-to-end stage definitions and boundaries
- `quote-to-cash-controls.md` — traceability, fidelity, controls, reconciliation, KPIs
- `quote-to-cash-diagnostics.md` — assessment questions and evidence-safe failure patterns

## v0.9
Completed the terminology foundation using a compact canonical index plus focused domain glossaries:
- `terminology.md`
- `terminology-catalog-configuration.md`
- `terminology-pricing.md`
- `terminology-commercial.md`
- `terminology-subscription-billing.md`
- `terminology-data-analysis.md`

## v1.0
Completed the persona foundation using a compact actor index plus focused role modules:
- `personas.md`
- `personas-selling.md`
- `personas-governance.md`
- `personas-operations.md`
- `personas-technology.md`
- `personas-customer.md`
- `personas-handoffs.md`
