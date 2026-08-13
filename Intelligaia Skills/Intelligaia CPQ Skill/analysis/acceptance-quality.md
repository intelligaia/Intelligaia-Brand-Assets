# Acceptance Quality, Coverage & Traceability

## 1. Requirement Coverage
Every material requirement should have at least one criterion proving the intended outcome.

## 2. Rule Coverage
Map each evidenced rule/decision to:
positive → negative → boundary where applicable.

## 3. Journey Coverage
Check relevant stages:
entry → configure → price → quote → approval → acceptance → order → lifecycle → billing/status.

## 4. State Coverage
Test material transitions and prohibited transitions.

## 5. Version Coverage
For commercial actions, confirm the criterion identifies which quote/version/state is affected.

## 6. Role Coverage
Test each materially different authorized role:
seller → partner → approver → operations → other required role.

## 7. Data Coverage
Include required, missing, invalid, stale, conflicting and unauthorized data scenarios where relevant.

## 8. Integration Coverage
Include:
success → validation rejection → technical failure → timeout/unknown → duplicate → partial → recovery/reconciliation as applicable.

## 9. Lifecycle Coverage
Include:
current baseline → pending change → delta → effective date → resulting state.

## 10. Risk Coverage
Material risks from Impact Analysis should map to acceptance/regression criteria.

## 11. Dependency Coverage
A story that relies on a dependency should either:
test the dependency contract or explicitly assume its validated outcome.

## 12. Gap Closure
For a gap, acceptance should prove the required outcome is now met—not merely that a feature exists.

## 13. Traceability Matrix
Recommended columns:
Requirement/Story → Rule → Gap → Dependency → Risk/Impact → Acceptance Criterion → Test Evidence → Status.

## 14. Ambiguity Check
Flag words such as:
fast; seamless; intuitive; real-time; correct; appropriate; easy; same; current.

Replace with measurable/observable meaning or mark TBD.

## 15. Testability Check
Can an independent tester determine pass/fail without asking what “expected” means?

## 16. Implementation Leakage
Remove unnecessary UI/API/database specifics unless they are actual requirements.

## 17. Completeness vs Bloat
Do not enumerate every theoretical edge case. Prioritize material business rules, risks, states and failures.

## 18. Contradiction
Check criteria against:
business rules → journey → platform evidence → integration contract → other stories.

## 19. Unknowns
TBD criteria are acceptable during discovery if explicitly tracked; invented certainty is not.

## 20. Definition of Done Relationship
Acceptance criteria prove requirement behavior. Definition of Done may additionally cover engineering/process quality and should not replace acceptance.

## Quality Checklist
- Actor/context clear?
- Starting state clear?
- Action/event clear?
- Observable outcome clear?
- Rule/state/version integrity covered?
- Negative/error/recovery covered?
- Security relevant?
- Dependencies represented?
- Risks covered?
- Evidence/TBD explicit?
- No invented detail?

## Guardrail
More criteria do not automatically mean better coverage; trace criteria to actual requirements and risks.
