# Usability Finding Template

## Finding
**ID:**  
**Title:**  
**Evidence Status:** Validated / Historical / Hypothesis / Unknown  
**Role(s):**  
**Journey / Step:**  
**System / Channel:**  
**Transaction Type:**  

## User Goal
What is the user trying to accomplish?

## Evidence
What was directly observed, measured, reported, or documented?

Include source/date/context where available.

## Observed Behavior
Describe behavior without interpreting motive.

## Friction
What makes the task difficult, unclear, slow, risky, or impossible?

## Consequence
What happens to the user, customer, transaction, downstream process, or business?

Separate observed consequence from hypothesized impact.

## Frequency / Reach
Measured value if available; otherwise **Unknown / Validation Needed**.

## Severity
Use the project's defined scale only if one exists. Otherwise describe consequence qualitatively.

## Root-Cause Hypothesis
Potential underlying cause(s), clearly labeled as hypothesis unless validated.

## Dependencies
Relevant:
capability → journey → platform → integration → data → policy → security → operations.

## Current Workaround
Document only if evidenced.

## Opportunity
Describe the outcome to improve, not merely a UI component.

## Proposed Direction
Label **Proposed**. Include alternatives where useful.

## Risks / Tradeoffs
Could the change affect:
commercial integrity; approvals; security; downstream processing; billing; lifecycle state; partner confidentiality?

## Validation Needed
What research, data, technical discovery, or policy decision is still required?

## Success Evidence
What would demonstrate that the issue improved?

Do not invent baseline or target.

---

# Compact Finding Format

**Finding:** [evidence-backed statement]  
**Evidence:** [source/context]  
**Impact:** [supported consequence]  
**Root Cause:** [Validated/Hypothesis]  
**Dependency:** [domain/module]  
**Opportunity:** [desired outcome]  
**Metric Needed:** [evidence required]

---

# Requirement Conversion

Only after the finding/root cause is sufficiently understood:

**Story:** As a [role], I want [capability/outcome], so that [supported value].

**Acceptance Criteria**
- Given [business state]
- When [user/system action]
- Then [observable outcome]
- And [integrity/error/accessibility condition]

## Guardrail
Do not turn an unvalidated assumption into a definitive requirement.
