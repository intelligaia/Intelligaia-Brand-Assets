# Source Provenance

## Purpose
Define how CPQ Insight records, evaluates, and communicates evidence so customer/project findings are not confused with vendor-neutral knowledge, inference, historical material, or recommendations.

This is the canonical evidence-governance entry module.

## Core Rule
Every material claim should be distinguishable as one of:

**Confirmed → Inferred → Unknown → Historical → Proposed**

Do not silently promote an inference, historical finding, or recommendation into a current fact.

## Evidence Classes

### Confirmed
Explicitly supported by a relevant source.

Examples:
- a user story states a required behavior;
- a meeting note explicitly describes a pain point;
- a platform document explicitly names an integration;
- a validated stakeholder statement confirms ownership.

### Inferred
Reasonably derived from available evidence but not explicitly stated.

An inference must identify the supporting evidence and should not be written as a confirmed fact.

### Unknown
The available evidence does not establish the answer.

Use Unknown instead of filling gaps with assumed CPQ/platform behavior.

### Historical
Supported by evidence tied to an earlier project, product, organization, or process state.

Historical evidence can inform hypotheses and patterns, but it is not automatically current.

### Proposed
A recommendation, future-state design, candidate capability, user story, architecture, or operating-model suggestion.

Proposed content is not evidence of current behavior.

## Source Hierarchy
Authority depends on the question. Prefer the source closest to the fact being asserted.

Typical evidence types:
1. Current validated customer/process documentation.
2. Current system/configuration/interface evidence.
3. Current stakeholder/user research evidence.
4. Current requirements/user stories/acceptance criteria.
5. Current operational data/analytics.
6. Historical project artifacts.
7. Vendor/public documentation.
8. General CPQ/Q2C domain knowledge.

This ordering is guidance, not an absolute ranking. A system mapping may be more authoritative than a meeting note for a field-level question, while user research may be more authoritative for an experience pain point.

## Provenance Record
For material findings capture when available:

**Claim → Evidence Status → Source → Source Date/Version → Context → Relevant Excerpt/Reference → Confidence → Scope → Conflicts → Open Question**

## Scope Rule
Always distinguish:
- vendor-neutral CPQ/Q2C pattern;
- platform-specific behavior;
- customer-specific current state;
- historical project finding;
- proposed future state.

## Conflict Rule
When sources disagree:
1. Do not silently reconcile them.
2. Record both positions.
3. Check date/version/context.
4. Identify which source is more authoritative for the specific question.
5. Label unresolved conflict as Unknown/Needs Validation.

## Freshness Rule
A newer file is not automatically more authoritative. Determine whether its content represents the current process/product state.

## Reuse Rule
A finding from one customer/project may be reused as:
- a diagnostic pattern;
- a question to validate;
- an example;
- a possible capability need.

It must not be presented as another customer's fact without evidence.

## Platform Rule
Do not infer platform objects, fields, APIs, workflow, limitations, or ownership from general CPQ knowledge.

Use `platforms/` for evidenced platform-specific behavior.

## Output Rule
When evidence matters, make the distinction visible:
- **Confirmed:** source-backed current finding.
- **Inferred:** evidence-backed interpretation.
- **Unknown:** insufficient evidence.
- **Historical:** source-backed but tied to an earlier state.
- **Proposed:** recommendation/future-state content.

## Detail Modules

| Topic | Module |
|---|---|
| Evidence capture and confidence | `source-provenance-evidence.md` |
| Conflict, freshness and historical handling | `source-provenance-validation.md` |
| Turning evidence into findings, gaps and recommendations | `source-provenance-analysis.md` |

## Cross-Links
- `../analysis/story-analysis-framework.md`
- `../analysis/gap-analysis.md`
- `../analysis/dependency-analysis.md`
- `../analysis/impact-analysis.md`
- `../analysis/acceptance-criteria.md`
