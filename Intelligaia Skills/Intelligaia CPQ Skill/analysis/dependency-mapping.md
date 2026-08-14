# Dependency Mapping & Sequencing

## 1. Map Direction
Use explicit direction:
**A depends on B**

Avoid ambiguous “A ↔ B” unless both directions are independently explained.

## 2. Dependency Graph
Represent:
outcome/story/capability → prerequisite → prerequisite of prerequisite.

Stop at a useful planning boundary.

## 3. Upstream
What provides required:
decision → rule → data → state → service → approval → platform behavior?

## 4. Downstream
What consumes the resulting:
quote → order → subscription → billing state → status → reporting/audit?

## 5. Cross-Story Mapping
Use relationship types:
depends on → blocks → prerequisite for → enables → conflicts with → overlaps → supersedes → related only.

## 6. Sequencing
Sequence by correctness:
business decision/rule → authoritative data/model → enabling platform/integration → capability → UX/process → downstream operations/measurement.

Actual delivery sequence requires project evidence.

## 7. Parallel Work
Independent workstreams can proceed in parallel when they do not rely on unresolved shared semantics/state.

## 8. Circular Dependency
Detect:
A requires B → B requires C → C requires A.

Resolve through:
shared contract/decision → decomposition → temporary interface → sequencing → scope change.

Do not hide circularity.

## 9. Shared Dependency
One dependency may enable many stories.

Promote shared dependencies to explicit backlog/program items rather than repeating them inside every story.

## 10. Dependency Cluster
Common CPQ clusters:
catalog/configuration → pricing;
discount → approval;
quote/version → customer artifact/acceptance;
acceptance → order;
subscription baseline → amendment/renewal;
partner/customer identity → channel pricing/order/lifecycle.

These are analytical patterns, not universal implementation facts.

## 11. Milestone Dependency
A release/milestone dependency should specify the observable prerequisite, not merely a team name.

## 12. Decision Dependency
Record:
decision needed → options → decision authority if known → needed-by point → affected work.

## 13. Evidence Dependency
If current platform behavior is unknown, technical discovery may be the actual prerequisite.

## 14. Traceability
Maintain:
requirement/story → dependency ID → providing domain/item → status → evidence/decision → affected acceptance criteria.

## 15. Visualization
For complex programs, create a graph or matrix:
rows = dependent items;
columns = prerequisites;
cell = dependency type/status.

## Output
**Directed Map → Shared Dependencies → Circularities → Sequence → Parallelizable Work → Decisions Needed**

## Guardrail
Do not fabricate delivery dates or owner commitments from the dependency graph.
