# CPQ Impact Analysis

## Purpose
Assess how a proposed requirement, story, gap closure, process change, platform change, or integration change may affect CPQ/Q2C users, commercial integrity, lifecycle state, systems, operations, and business outcomes.

## Impact Model
**Change → Affected Scope → Direct Impact → Downstream Impact → Risk → Dependency → Evidence → Mitigation / Validation**

## Core Principles
1. Analyze impact end-to-end, not only in the edited screen/system.
2. Separate observed current impact from predicted change impact.
3. Trace commercial and lifecycle integrity explicitly.
4. Include users, process, data, platform, integration, security and operations.
5. Identify positive, negative and unintended consequences.
6. Distinguish direct from downstream/cascading impact.
7. Do not quantify impact without evidence or an explicit model.
8. Preserve uncertainty and assumptions.
9. Link material impacts to acceptance, testing, rollout and monitoring.
10. Reassess impact when dependencies or scope change.

## Detail Modules
| Topic | Module |
|---|---|
| Impact scope and taxonomy | [`impact-scope.md`](impact-scope.md) |
| Commercial and lifecycle impact | [`impact-commercial-lifecycle.md`](impact-commercial-lifecycle.md) |
| System, data and integration impact | [`impact-system-data.md`](impact-system-data.md) |
| User, operational and rollout impact | [`impact-user-operations.md`](impact-user-operations.md) |
| Impact record template | [`impact-template.md`](impact-template.md) |

## Related Modules
- [Story Analysis](story-analysis-framework.md)
- [Gap Analysis](gap-analysis.md)
- [Dependency Analysis](dependency-analysis.md)
- [Acceptance Criteria](acceptance-criteria.md)
- [Integration Router](../integrations/README.md)
- [UX Router](../ux/README.md)

## Evidence Guardrail
Do not invent volumes, revenue, effort, cycle-time savings, adoption, defect rates, platform limitations, or affected populations. Mark unsupported impact **Hypothesis / Validation Needed**.
