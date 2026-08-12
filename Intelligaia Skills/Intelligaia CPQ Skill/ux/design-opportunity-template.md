# Design Opportunity Template

## Opportunity
**ID:**  
**Title:**  
**Status:** Proposed / Validating / Validated / Deferred  
**Role(s):**  
**Journey / Step:**  

## Source Finding(s)
Reference evidence-backed usability/business findings.

## Desired Outcome
What should become easier, clearer, safer, or more efficient?

## Opportunity Statement
How might we help [role] achieve [goal] in [context] while preserving [business/integrity requirement]?

## Root Cause
**Status:** Validated / Hypothesis / Unknown

Describe the underlying cause this opportunity intends to address.

## Proposed Direction
Describe the future-state behavior without overcommitting to a specific component or technology.

## Candidate Patterns
Reference relevant patterns from `design-patterns.md`.

## Business Rules to Preserve
List authoritative capability/journey rules that cannot be bypassed.

## Dependencies
- Capability
- Journey
- Platform
- Integration/API
- Data
- Security/authorization
- Policy
- Operations
- Research

## Risks / Tradeoffs
Consider:
commercial integrity; lifecycle integrity; security; confidentiality; performance; downstream state; accessibility; change management.

## Validation Plan
What assumption must be tested?
With which role/scenario?
What evidence would support/reject the direction?

## Success Evidence
Define observable metric/evidence type. Do not invent baseline/target.

## Requirement Conversion
After validation:

**Story:** As a [role], I want [validated capability/outcome], so that [supported value].

### Acceptance Criteria
- Given [business context/state]
- When [action]
- Then [observable outcome]
- And [validation/integrity]
- And [error/recovery]
- And [authorization/accessibility where relevant]

## Traceability
**Finding → Opportunity → Design Pattern → Requirement → Acceptance Criteria → Metric**

## Guardrail
Keep proposed design separate from validated current-state evidence.
