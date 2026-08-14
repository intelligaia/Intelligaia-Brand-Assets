# Source-Evidence Enrichment Protocol

## Purpose
Provide a repeatable method for converting project artifacts into evidence-backed CPQ/Q2C knowledge.

## Intake
For every source capture:
source ID → title → type → date if known → author/organization if known → platform/domain → authority/scope → source location.

## Classification
Separate source content into:
- observed/current-state fact;
- user/stakeholder statement;
- requirement/user story;
- proposed future state;
- design/solution;
- research finding;
- case-study outcome;
- assumption/hypothesis;
- unresolved question.

Do not merge these categories silently.

## Evidence State
Assign:
Validated · Historical · Hypothesis · Proposed · Unknown / Validation Needed.

A source can contain records with different evidence states.

## Extraction
Extract only what the source supports:
process → actor → rule → data/state → platform fact → pain/friction → exception → requirement → outcome → metric.

Preserve source terminology and location.

## Normalization
Normalize into reusable knowledge only after provenance is retained.

Examples:
source story → normalized `STORY-*`;
observed current-vs-required difference → `GAP-*`;
material prerequisite → `DEP-*`;
supported consequence/risk → `IMP-*`;
testable outcome → `AC-*`.

## Conflict Handling
When sources disagree:
retain both → identify scope/date/authority → mark conflict → avoid silent reconciliation → create validation question if needed.

## Metrics
For any number capture:
metric definition → value → unit → population → period → baseline/target/result → source location.

Do not generalize case-study metrics to another customer.

## Platform Claims
Vendor/platform claims must identify whether they describe:
product capability → configured customer behavior → proposed design → historical implementation.

## Opportunity Mapping
Only after a supported finding exists:
Evidence → Finding → Consequence → Gap/Risk → Service Motion → Outcome → Validation.

## Completion Check
A source is enriched when:
- registered;
- material claims are extracted;
- provenance is retained;
- evidence state is assigned;
- conflicts/unknowns are recorded;
- relevant knowledge/story/analysis links are created;
- unsupported extrapolation is absent.
