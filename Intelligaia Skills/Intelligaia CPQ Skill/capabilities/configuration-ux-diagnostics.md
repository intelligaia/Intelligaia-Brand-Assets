# Configuration — UX, Diagnostics & KPIs

## Purpose
Define configuration experience principles, failure patterns, assessment questions, and measures.

# 1. Seller / Partner UX

A healthy configuration experience should:
- reveal relevant choices progressively;
- minimize product-code memorization;
- explain required selections;
- prevent or quickly identify incompatible choices;
- preserve user selections when possible;
- avoid unnecessary page/context switching;
- show configuration completeness;
- provide actionable validation;
- make complex bundles understandable.

## Diagnostic Questions
- Can sellers configure common deals without specialist help?
- Which choices are hardest to understand?
- Which errors occur most often?
- When are invalid combinations discovered?
- Are required options obvious?
- Do defaults help or create corrections?
- Do users understand why options disappear/become unavailable?
- How many screens/systems are required?
- Is configuration repeated downstream?

# 2. Solution Specialist UX
Specialists may need:
- deeper technical/product detail;
- dependency visibility;
- comparison;
- complex attribute editing;
- explanation of rule outcomes;
- ability to validate edge cases.

A specialist experience should not force every seller to consume unnecessary complexity.

# 3. Deal Desk UX
Deal Desk needs visibility into:
- configuration state;
- errors/warnings;
- exceptions;
- changes between revisions;
- rule outcomes relevant to commercial review.

# 4. Common Failure Patterns
Use as hypotheses until evidenced:
- seller cannot find valid combination;
- too many options shown;
- required components discovered late;
- invalid combinations allowed until quote/order;
- generic validation messages;
- configuration rules known only by experts;
- excessive Deal Desk/Specialist dependency;
- defaults repeatedly removed;
- changes unexpectedly reset selections;
- cloned configurations contain obsolete items;
- installed-base changes behave like new sale;
- configuration lost or flattened at order handoff;
- downstream fulfillment needs attributes CPQ did not capture.

# 5. Diagnostic Dimensions
Assess:
- discoverability;
- cognitive load;
- guidance;
- error prevention;
- error recovery;
- transparency;
- performance;
- consistency;
- accessibility where relevant;
- handoff fidelity;
- maintainability.

# 6. Root-Cause Categories
Potential causes:
- catalog structure;
- rule design;
- data quality;
- UX;
- platform limitation/configuration;
- integration;
- governance;
- lifecycle design;
- training.

Validate before asserting.

# 7. Impact Categories
Potential impacts:
- quote cycle;
- seller effort;
- specialist/Deal Desk touch;
- rework;
- invalid quote;
- pricing error;
- approval churn;
- order rejection;
- fulfillment error;
- customer delay.

Do not invent quantified impact.

# 8. KPI Framework

| Area | Example measure |
|---|---|
| Efficiency | configuration time |
| Quality | configuration validation failure rate |
| Self-service | configurations completed without specialist/Deal Desk help |
| Rework | configuration revisions caused by rule/data issues |
| UX | abandonment/backtracking where measurable |
| Downstream | order/fulfillment errors caused by configuration |
| Support | configuration-related support cases |
| Maintenance | rule defect/change lead time |

Do not invent targets.

# 9. Configuration Diagnostic
For a problematic scenario capture:

**Persona → Transaction Type → Starting Context → Selected Product → Rule/Decision → Error/Workaround → Handoff → Downstream Impact → Evidence → Root-Cause Hypothesis → Capability Need**

# 10. Rule Diagnostic
For a problematic rule capture:

**Rule Purpose → Trigger → Inputs → Expected Outcome → Actual Outcome → Conflicting Rules → Owner → Effective Date → Test Coverage → Evidence**

# 11. UX Opportunity Patterns
Evidence may support:
- guided selling;
- progressive disclosure;
- contextual help;
- real-time compatibility feedback;
- configuration completeness indicators;
- explainable rule messages;
- scenario comparison;
- preserved state;
- specialist escalation with context;
- installed-base-aware editing.

These remain Proposed until validated.

# 12. Evidence Sources
Useful evidence includes:
- user research;
- configuration rules;
- support cases;
- Deal Desk notes;
- failed quotes/orders;
- product/catalog data;
- analytics;
- observed workflows;
- historical case studies.

Apply `../foundations/source-provenance.md`.
