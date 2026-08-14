# CPQ Gap Analysis

## Purpose
Identify and characterize gaps between a required or desired CPQ/Q2C outcome and the evidenced current state without turning missing evidence into a confirmed deficiency.

## Gap Model
**Required / Desired Outcome → Current Evidence → Difference → Gap Type → Consequence → Root-Cause Hypothesis → Dependency → Recommendation / Validation**

## Core Principles
1. Define the target outcome before declaring a gap.
2. Separate missing evidence from missing capability.
3. Distinguish business, process, data, integration, platform and UX gaps.
4. Trace gaps to affected journeys and commercial/lifecycle integrity.
5. Separate current-state fact from root-cause hypothesis.
6. Do not equate a feature difference with a business gap.
7. Preserve severity, frequency and impact as unknown unless evidenced.
8. Link recommendations to dependencies and validation.

## Detail Modules
| Topic | Module |
|---|---|
| Gap identification and classification | [`gap-identification.md`](gap-identification.md) |
| Current vs target comparison | [`gap-comparison.md`](gap-comparison.md) |
| Root cause, consequence and dependency | [`gap-root-cause-impact.md`](gap-root-cause-impact.md) |
| Prioritization and closure | [`gap-prioritization.md`](gap-prioritization.md) |
| Gap record template | [`gap-template.md`](gap-template.md) |

## Related Modules
- [Story Analysis](story-analysis-framework.md)
- [Dependency Analysis](dependency-analysis.md)
- [Impact Analysis](impact-analysis.md)
- [Acceptance Criteria](acceptance-criteria.md)
- [Usability Issues](../ux/usability-issues.md)

## Evidence Guardrail
If current behavior is not evidenced, record **Unknown / Validation Needed** rather than asserting a gap.
