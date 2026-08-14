# Story Dependency, Risk & Impact Analysis

## 1. Dependency Types
Classify dependencies:
business rule → capability → journey → data → catalog → pricing → approval → platform → integration/API → security → lifecycle → billing → operations → UX → research/decision.

## 2. Upstream Dependency
What must exist or be correct before the story can succeed?

## 3. Downstream Dependency
What consumes the story's resulting state?

## 4. Cross-Story Dependency
Identify:
blocks → blocked by → prerequisite → related → overlaps → conflicts → supersedes.

## 5. Data Dependency
Ask whether success depends on:
customer identity; product mapping; pricing context; partner role; quote/version; subscription baseline; billing account; effective date.

## 6. Integration Dependency
Check whether the story needs:
context transfer; lookup; calculation; submission; status callback; lifecycle synchronization; reconciliation.

## 7. Policy Dependency
Examples:
discount policy; approval policy; cancellation rule; renewal ownership; channel eligibility.

Do not infer policies.

## 8. Risk Domains
Assess potential risk to:
commercial integrity; customer commitment; configuration validity; duplicate transaction; approval bypass; order fallout; lifecycle state; billing; service/entitlement; security/confidentiality; audit.

## 9. Impact Domains
Potential:
user effort; cycle time; conversion; seller capacity; support load; operational rework; billing correction; renewal risk; partner effort.

Impact is not fact unless evidenced.

## 10. Change Impact
If implemented, which modules/processes may change?
capability → journey → platform → integration → UX → operations → training → reporting.

## 11. Failure Impact
What happens if the story fails midway?

## 12. Scale
Consider:
single line → quote → order → customer → portfolio → channel → broad platform.

Do not assign frequency without data.

## 13. Dependency Criticality
A dependency may be:
required for correctness → required for launch → optional enhancement → unknown.

Use project-defined scoring only if available.

## 14. Hidden Dependency Signals
Watch for words:
“automatically,” “real-time,” “current,” “approved,” “eligible,” “renewal,” “copy,” “sync,” “same price,” “existing customer,” “partner.”

Each may imply data/rule/integration dependencies.

## 15. Traceability
Maintain:
story → dependency → owner/domain → decision/evidence → related story → acceptance criterion.

## Output
**Dependencies → Risks → Impact → Affected Domains → Decisions Needed → Related Stories → Evidence Gaps**

## Guardrail
Do not convert possible impact into quantified benefit or assign dependency ownership without evidence.
