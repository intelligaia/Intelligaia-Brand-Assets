# Usability Root-Cause & Dependency Analysis

## Purpose
Prevent UX symptoms from being treated as purely visual-design problems.

## Root-Cause Domains
1. Interaction / information architecture
2. Business process
3. Business rule / policy
4. Product catalog / configuration
5. Pricing / discount logic
6. Data quality / ownership
7. Integration / synchronization
8. Platform limitation / implementation
9. Authorization / security
10. Performance / reliability
11. Training / terminology
12. Operating model / ownership

## Analysis Chain
**Observed Friction → Immediate Cause → Contributing Cause → Authoritative Domain → Dependency → Fix Options → Evidence Needed**

## Example Pattern: Duplicate Entry
Observed: seller re-enters customer information.

Possible causes:
source value unavailable → integration gap;
source value unreliable → data quality;
target requires different semantic meaning → data model;
user cannot find populated value → interaction design;
policy requires confirmation → process.

Do not jump directly to “auto-populate.”

## Example Pattern: Approval Delay
Observed: seller waits for approval.

Possible causes:
unclear approver/status → UX;
unnecessary approval rule → policy;
incorrect discount input → commercial design;
approval event failure → integration;
approver workload → operating model.

## Example Pattern: Pricing Confusion
Observed: seller cannot explain total.

Possible causes:
ambiguous labels → UX;
complex price waterfall → pricing;
stale calculation → integration/state;
incorrect mapping → data;
training gap → enablement.

## Example Pattern: Repeated Quote Creation
Possible causes:
resume path hidden → UX;
quote search poor → UX/platform;
ownership prevents access → authorization;
integration creates separate records → architecture;
process intentionally requires new version/quote → business rule.

## Example Pattern: Amendment Rework
Possible causes:
old baseline → integration/data;
pending changes invisible → lifecycle UX;
effective-date rule unclear → policy/UX;
unsupported concurrency → platform/process.

## Dependency Mapping
For each opportunity identify dependencies on:
capability → journey → platform → integration → data → policy → security → operations → research.

## Solution Level
Classify potential response:
content/label → interaction → workflow → business rule → data → integration → platform → operating model.

## Avoid Local Optimization
A faster seller UI that bypasses validation or creates downstream fallout is not an improvement.

## Validation
Before recommending major redesign:
confirm root cause with evidence → validate affected roles/scenarios → test whether proposed change addresses cause → identify downstream consequences.

## Guardrail
Root-cause statements without supporting evidence should be labeled **Hypothesis**.
