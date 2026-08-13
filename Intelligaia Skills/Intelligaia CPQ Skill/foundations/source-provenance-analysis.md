# Source Provenance — Evidence-to-Analysis

## Purpose
Define how evidence is converted into findings, gaps, capabilities, stories, and recommendations without losing provenance.

# Evidence Chain
Use the following reasoning chain when supported:

**Evidence → Finding → Pain Point / Need → Root Cause Hypothesis → Impact → Required Capability → Recommendation → User Story / Acceptance Criteria → KPI**

Not every analysis requires every step.

# 1. Finding
A concise evidence-grounded statement describing what is observed.

A finding should identify:
- affected persona/process;
- scenario;
- observed behavior;
- evidence status.

# 2. Pain Point
The negative user/business/operational consequence experienced.

Do not confuse a symptom with its root cause.

# 3. Root Cause
Use **Root Cause Hypothesis** until evidence establishes the underlying cause.

Examples of root-cause categories:
- process;
- policy;
- data;
- catalog;
- pricing;
- integration;
- system capability;
- UX;
- governance;
- training/adoption.

# 4. Impact
Describe supported consequences such as:
- cycle time;
- manual touch;
- error/rework;
- seller/partner effort;
- approval delay;
- order/billing correction;
- customer experience;
- reporting/data quality.

Do not invent quantified impact.

# 5. Gap
Difference between current capability/process and required/desired capability/process.

Format:
**Current Evidence → Required State → Gap → Impact → Dependency → Validation Needed**

# 6. Required Capability
Express what the business/process needs without prematurely prescribing a vendor implementation.

Example:
“Provide real-time validation of downstream-required order data before submission.”

Avoid:
“Add field X to object Y” unless implementation evidence/design specifically supports it.

# 7. Recommendation
A proposed response to an evidenced need.

Recommendations should identify:
- problem addressed;
- expected outcome;
- dependencies;
- risks/assumptions;
- evidence status.

# 8. User Story
Translate a validated need into a persona-oriented requirement.

Preserve traceability back to the finding/source.

# 9. Acceptance Criteria
Define testable behavior without inventing unstated business rules.

If a threshold, field, status, approver, calculation, or exception rule is unknown, mark it for validation.

# 10. KPI
Choose a measure logically connected to the evidenced problem/outcome.

Examples:
- configuration error rate;
- quote cycle;
- approval turnaround;
- manual order touch;
- billing reconciliation;
- renewal preparation time.

Do not invent baseline or target.

# Analysis Labels
Use explicit labels when useful:
- Confirmed Finding
- Inferred Finding
- Historical Pattern
- Unknown / Validation Needed
- Proposed Capability
- Proposed Recommendation

# Traceability Matrix
For larger assessments use:

| ID | Evidence | Finding | Status | Persona/Journey | Impact | Capability | Recommendation | Story | KPI |
|---|---|---|---|---|---|---|---|---|---|

# Guardrail
A polished narrative must never hide evidence weakness. When source support ends, say so.
