# Dependency Risk, Resolution & Readiness

## 1. Dependency Status
Use:
identified → validating → confirmed → planned → in progress → satisfied → waived/accepted → blocked → obsolete.

Use project terminology if defined.

## 2. Risk
Assess what happens if dependency is:
late → incorrect → partially available → changed → unavailable.

## 3. Criticality
Qualitative categories:
required for correctness → required for release → required for efficiency/experience → optional → unknown.

## 4. Resolution Strategy
Possible:
make decision → define contract → fix data → implement capability → integrate → change process → add control → research/discovery → de-scope → accept risk.

## 5. Interface Contract
For team/system dependencies, define the business contract before implementation details:
inputs → outputs → semantics → states → errors → ownership/authority.

## 6. Interim Solution
If temporary workaround is proposed, record:
scope → integrity risk → manual effort → expiry condition → migration/removal plan.

## 7. Readiness
A dependent story is ready when critical prerequisites are:
satisfied; explicitly planned with stable contract; or deliberately deferred without invalidating acceptance.

## 8. Blocked
Use blocked when work cannot responsibly proceed—not merely when another item exists.

## 9. Change Management
When a dependency changes:
identify consumers → reassess acceptance → data/integration compatibility → regression scope → rollout sequence.

## 10. Dependency Closure
A dependency is satisfied when the consuming outcome can rely on the agreed behavior/state, not merely when the provider says development is complete.

## 11. Validation
Closure evidence may include:
approved decision → tested rule → valid data → contract test → end-to-end scenario → authorization validation → reconciliation result.

## 12. Residual Risk
Record limitations that remain after resolution.

## 13. Escalation
Escalate when unresolved dependency threatens:
commercial integrity → customer commitment → lifecycle correctness → security → release-critical outcome.

## 14. Reporting
Summarize:
critical open dependencies → blockers → decisions needed → shared dependencies → changes → satisfied dependencies → residual risks.

## 15. Metrics
Do not invent dependency aging, delay, completion percentage or forecast dates without project data.

## Output
**Status → Risk → Resolution → Readiness → Closure Evidence → Residual Risk**

## Guardrail
Dependency management should expose uncertainty rather than manufacture certainty.
