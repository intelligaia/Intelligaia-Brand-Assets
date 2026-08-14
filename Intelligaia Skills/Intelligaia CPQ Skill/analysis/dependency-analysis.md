# CPQ Dependency Analysis

## Purpose
Identify, classify, sequence, and validate dependencies that determine whether a CPQ/Q2C requirement, story, capability, journey, integration, or release can succeed.

## Dependency Model
**Outcome → Dependency → Why Needed → Provider / Authority → Consumer → Timing → Failure Effect → Evidence → Resolution**

## Core Principles
1. Analyze dependencies from the business outcome backward.
2. Separate hard prerequisites from useful enhancements.
3. Distinguish dependency from simple relationship.
4. Trace data, rule, state, platform, integration, security and operating dependencies.
5. Capture lifecycle and version dependencies explicitly.
6. Identify circular and hidden dependencies.
7. Do not assign ownership without evidence.
8. Sequence enabling work before dependent work.
9. Preserve unresolved dependencies as explicit decisions/unknowns.
10. Validate dependency closure through observable outcomes.

## Detail Modules
| Topic | Module |
|---|---|
| Dependency identification and taxonomy | [`dependency-identification.md`](dependency-identification.md) |
| Mapping and sequencing | [`dependency-mapping.md`](dependency-mapping.md) |
| Cross-system and lifecycle dependencies | [`dependency-cross-system.md`](dependency-cross-system.md) |
| Risk, resolution and readiness | [`dependency-resolution.md`](dependency-resolution.md) |
| Dependency record template | [`dependency-template.md`](dependency-template.md) |

## Related Modules
- [Story Analysis](story-analysis-framework.md)
- [Gap Analysis](gap-analysis.md)
- [Impact Analysis](impact-analysis.md)
- [Acceptance Criteria](acceptance-criteria.md)
- [Integration Router](../integrations/README.md)

## Evidence Guardrail
Do not invent dependency owners, APIs, timing, platform limitations, release commitments, or implementation sequence. Unsupported details remain **Unknown / Validation Needed**.
