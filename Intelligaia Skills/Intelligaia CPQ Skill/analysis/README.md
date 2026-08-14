# Analysis

## Purpose
Route CPQ/Q2C requirements, assessment, dependency, impact and acceptance work to the correct framework.

## Start Here
| Need | Module |
|---|---|
| Analyze or refine a requirement/story | [`story-analysis-framework.md`](story-analysis-framework.md) |
| Identify current-vs-required gaps | [`gap-analysis.md`](gap-analysis.md) |
| Identify prerequisites and sequencing | [`dependency-analysis.md`](dependency-analysis.md) |
| Assess affected users/process/systems/risks | [`impact-analysis.md`](impact-analysis.md) |
| Define observable acceptance | [`acceptance-criteria.md`](acceptance-criteria.md) |
| Review Analysis architecture/completeness | [`ANALYSIS-AUDIT.md`](ANALYSIS-AUDIT.md) |

## Recommended Analysis Chain
**Evidence → Story / Requirement → Flow / Rule / Data → Gap → Dependency → Impact / Risk → Acceptance Criteria → Validation Evidence**

Use only the stages relevant to the task.

## Routing Examples
### Story Refinement
Start with Story Analysis, then invoke Dependency and Acceptance as needed.

### Current-State Assessment
Start with Gap Analysis. If current behavior is unknown, record an evidence gap before declaring a capability gap.

### Change Assessment
Use Impact Analysis and Dependency Analysis, then map material risks into Acceptance Criteria.

### Gap Closure
Use:
**Required Outcome → Gap → Cause → Dependency → Closure → Acceptance → Success Evidence**

## Ownership Boundaries
Analysis owns analytical method and traceability.

Authoritative reusable knowledge belongs in:
- `foundations/`
- `capabilities/`
- `journeys/`
- `platforms/`
- `integrations/`
- `ux/`

Reusable story assets belong in `user-stories/`.

## Evidence States
Use consistently:
**Validated · Historical · Hypothesis · Proposed · Unknown / Validation Needed**

## Traceability IDs
Recommended prefixes:
- `STORY-`
- `GAP-`
- `DEP-`
- `IMP-`
- `AC-`

## Quality Gate
Before finalizing analysis:
- evidence and unknowns separated;
- requirement and solution separated;
- rule/data authority identified or unresolved;
- version/lifecycle/integration state considered;
- dependencies directional;
- impacts not overstated;
- acceptance observable;
- risks and criteria traceable.
