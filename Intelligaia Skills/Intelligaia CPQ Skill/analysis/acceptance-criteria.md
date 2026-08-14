# CPQ Acceptance Criteria

## Purpose
Convert CPQ/Q2C requirements into observable, testable business outcomes while protecting configuration, commercial, approval, version, order, lifecycle, integration, security, and recovery integrity.

## Acceptance Model
**Business Context → Preconditions → Action/Event → Expected Outcome → State Change → Integrity Conditions → Exceptions → Evidence**

## Core Principles
1. Test business outcomes, not implementation preferences.
2. Make preconditions and starting state explicit.
3. Include material rules and decision branches.
4. Preserve exact quote/version and approval applicability.
5. Test negative, boundary, error, partial, timeout, and recovery paths.
6. Distinguish submitted from completed for asynchronous work.
7. Test lifecycle baseline, pending state, delta, result, and effective date.
8. Include authorization and confidentiality where relevant.
9. Trace criteria back to requirement, rule, gap, dependency, and risk.
10. Never invent thresholds, formulas, SLAs, permissions, or platform behavior.

## Detail Modules
| Topic | Module |
|---|---|
| Writing and structuring criteria | [`acceptance-writing.md`](acceptance-writing.md) |
| CPQ commercial and quote criteria | [`acceptance-commercial.md`](acceptance-commercial.md) |
| Order and lifecycle criteria | [`acceptance-lifecycle.md`](acceptance-lifecycle.md) |
| Integration, error and recovery criteria | [`acceptance-integration.md`](acceptance-integration.md) |
| Quality, coverage and traceability | [`acceptance-quality.md`](acceptance-quality.md) |
| Reusable criteria template | [`acceptance-template.md`](acceptance-template.md) |

## Related Modules
- [Story Analysis](story-analysis-framework.md)
- [Gap Analysis](gap-analysis.md)
- [Dependency Analysis](dependency-analysis.md)
- [Impact Analysis](impact-analysis.md)
- [User Story Template](../user-stories/story-template.md)

## Evidence Guardrail
When a business rule, threshold, calculation, permission, system response, or timing requirement is unknown, write **TBD / Validation Needed** rather than fabricating a test condition.
