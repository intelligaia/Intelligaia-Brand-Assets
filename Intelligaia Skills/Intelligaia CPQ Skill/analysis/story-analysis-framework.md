# CPQ User Story Analysis Framework

## Purpose
Provide a repeatable method for analyzing CPQ/Q2C user stories without treating every story as an isolated feature request.

The framework connects user intent to business process, capability, data, platform, integration, UX, controls, dependencies, acceptance criteria, and evidence.

## Analysis Outcome
For each story determine:

**Who → Goal → Business Context → Trigger → Preconditions → Main Flow → Decisions → Exceptions → Data → Rules → Systems → Dependencies → Downstream Impact → Acceptance → Evidence**

## Core Principles
1. Preserve the user's business outcome.
2. Separate requirement from proposed implementation.
3. Identify the journey and lifecycle state.
4. Expose hidden business rules and decisions.
5. Trace authoritative data and system boundaries.
6. Identify upstream and downstream dependencies.
7. Include exception and recovery behavior.
8. Preserve commercial, version, approval, and effective-date integrity.
9. Distinguish current evidence from assumptions.
10. Convert analysis into testable acceptance criteria.

## Detail Modules
| Topic | Module |
|---|---|
| Story intake and normalization | [`story-intake.md`](story-intake.md) |
| Flow, rules and decision analysis | [`story-flow-analysis.md`](story-flow-analysis.md) |
| Data, platform and integration analysis | [`story-system-analysis.md`](story-system-analysis.md) |
| Dependencies, risks and impact | [`story-dependency-impact.md`](story-dependency-impact.md) |
| Story quality and readiness | [`story-readiness.md`](story-readiness.md) |

## Related Modules
- [Acceptance Criteria](acceptance-criteria.md)
- [Dependency Analysis](dependency-analysis.md)
- [Impact Analysis](impact-analysis.md)
- [Gap Analysis](gap-analysis.md)
- [User Story Template](../user-stories/story-template.md)
- [CPQ Lifecycle](../foundations/cpq-lifecycle.md)

## Evidence Rule
Do not infer current system behavior, exact objects/fields/APIs, business rules, thresholds, ownership, pain-point frequency, or implementation constraints unless supported by supplied evidence. Mark unsupported details **Unknown / Validation Needed**.
