# Story Quality & Readiness

## Purpose
Determine whether a CPQ/Q2C story is sufficiently understood for refinement, design, implementation, or testing.

## Readiness Dimensions

### 1. Actor
Is the business actor/role clear?

### 2. Outcome
Is the desired business result clear and separate from a proposed solution?

### 3. Context
Are customer/deal/transaction/lifecycle context and scope clear?

### 4. Preconditions
Are required starting states known?

### 5. Flow
Is the main business flow understandable?

### 6. Decisions
Are material branches and rules identified?

### 7. Data
Are required business values and meanings known?

### 8. Authority
Are decision-driving sources of truth known or explicitly unresolved?

### 9. Version / State
Are quote/version/current/pending/effective-state semantics clear where relevant?

### 10. Integration
Are required system boundaries and expected handoff outcomes understood?

### 11. Exceptions
Are material error, partial, timeout, correction and recovery scenarios identified?

### 12. Security
Are relevant role/visibility/action boundaries understood?

### 13. Dependencies
Are prerequisites and downstream impacts identified?

### 14. Acceptance
Can the requirement be expressed as observable, testable outcomes?

### 15. Evidence
Are assumptions and unknowns clearly labeled?

## Readiness Status
Use qualitative states unless a project-specific scoring model exists:
- **Ready for refinement**
- **Needs business clarification**
- **Needs technical discovery**
- **Needs UX/research validation**
- **Blocked by dependency**
- **Insufficient evidence**

A story can require multiple statuses/notes.

## Definition of Ready — Suggested Pattern
A story is ready for implementation planning when:
actor/outcome are clear → scope and main flow are understood → material rules/data/dependencies are known or deliberately deferred → acceptance criteria are testable → unresolved assumptions are explicit → no hidden critical dependency is being treated as fact.

## Anti-Patterns
- UI component presented as the business need.
- “System shall sync” with no source/target/semantics.
- “Real-time” with no business timing need.
- “Same price” with undefined commercial meaning.
- “Renew subscription” without baseline/effective-date/pending-change semantics.
- “Retry” without unknown-outcome/idempotency analysis.
- “Approval” without exact quote/version applicability.
- Acceptance criteria that only say “works as expected.”

## Review Output
**Ready? → Missing Information → Decisions Needed → Discovery Needed → Dependencies → Acceptance Gaps → Evidence Gaps**

## Guardrail
Readiness is about understanding, not forcing every story to contain implementation detail.
