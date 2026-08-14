# Writing CPQ Acceptance Criteria

## 1. Start from the Outcome
Criteria should prove that the actor/system achieved the intended business result.

Avoid:
“Button is blue.”
Prefer:
“Authorized seller can submit an eligible quote for approval.”

UI details belong only when they are actual requirements.

## 2. Given / When / Then
Recommended form:

**Given** [business context and starting state]  
**When** [user action or business/system event]  
**Then** [observable result]  
**And** [integrity, state, validation, or audit condition]

## 3. Preconditions
Examples of relevant state:
customer/deal exists → transaction type known → quote version current → configuration valid → pricing valid → user authorized → subscription baseline available.

Use only supported conditions.

## 4. Observable Outcome
The result should be verifiable through:
business state → user-visible status → persisted/correlated record → downstream response → audit evidence.

## 5. One Behavior per Criterion
A scenario can have several assertions, but avoid combining unrelated outcomes.

## 6. Business Language
Prefer:
approved quote version; effective date; subscription baseline; partner role.

Avoid unexplained technical implementation terminology.

## 7. Positive Path
Cover the expected valid scenario.

## 8. Negative Path
Cover invalid/ineligible actions:
invalid configuration; missing required data; unauthorized action; expired/invalid commercial state.

## 9. Boundary
Where a rule has boundaries, test below/at/above the boundary only if the actual threshold is known.

If not known: **TBD / Validation Needed**.

## 10. Decision Branches
Each material business decision should have criteria for relevant outcomes.

## 11. State Transition
Verify:
starting state → action → resulting state → prohibited/unchanged state where relevant.

## 12. Data Integrity
Confirm decision-driving data is:
present → valid → semantically correct → associated with the correct business object/version.

## 13. Idempotent User Outcome
Repeated action/retry should not create unintended duplicate business outcomes where duplicate prevention is required.

## 14. Audit
Material commercial/control actions may need traceability:
who/what → action → version → decision → time/status.

Exact audit requirements need evidence.

## 15. Accessibility
When user interaction is in scope, include accessibility criteria based on the project's adopted standard—not an invented standard.

## 16. Performance
Only write numeric performance criteria when an approved SLA/requirement exists.

## 17. Non-Functional
Consider security, reliability, performance, accessibility, auditability, observability, compatibility, and data retention only where relevant.

## 18. Acceptance vs Test Case
Acceptance criteria define required observable behavior.
Detailed test cases can enumerate data sets, execution steps and environment.

## Output
**Context → Action → Outcome → State → Integrity → Negative/Boundary → Evidence**

## Guardrail
Acceptance criteria must not silently introduce new business requirements.
