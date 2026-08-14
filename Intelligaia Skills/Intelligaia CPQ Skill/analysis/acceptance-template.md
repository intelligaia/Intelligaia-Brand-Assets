# CPQ Acceptance Criteria Template

## Requirement
**Story / Requirement ID:**  
**Title:**  
**Actor:**  
**Journey / Capability:**  
**Evidence Status:**  
**Related Gap(s):**  
**Dependency ID(s):**  
**Impact / Risk ID(s):**  

## Business Outcome
What observable business result must be achieved?

## Preconditions
What must be true before the scenario begins?

## Business Rules
List only evidenced rules. Mark unknowns **TBD / Validation Needed**.

## Scenario 1 — Primary Path
**Given** [business context/state]  
**And** [required precondition]  
**When** [user/system action]  
**Then** [observable business outcome]  
**And** [resulting state/version/correlation]  
**And** [integrity condition]

## Scenario 2 — Validation / Negative
**Given** [invalid/ineligible condition]  
**When** [action]  
**Then** [invalid outcome is prevented]  
**And** [actionable/correct state is preserved]

## Scenario 3 — Boundary / Decision
Use only when the actual rule boundary/branch is known.

## Scenario 4 — Authorization
**Given** [role/access context]  
**When** [attempted action/view]  
**Then** [permitted or denied outcome according to evidenced authorization]

## Scenario 5 — Integration Failure
**Given** [valid source transaction]  
**When** [downstream operation fails]  
**Then** [source integrity is preserved]  
**And** [safe recovery/status is available]

## Scenario 6 — Timeout / Unknown Outcome
Verify status before any action that could duplicate a business outcome.

## Scenario 7 — Partial Success
Where applicable, verify component and overall transaction states.

## Scenario 8 — Lifecycle
Where applicable:
**Given** [authoritative current + pending state]  
**When** [amend/renew/cancel action]  
**Then** [delta/effective date/result are correct]

## Non-Functional Criteria
Security → accessibility → performance/SLA → audit → observability → compatibility, only where required.

## Regression
List materially affected adjacent journeys/states.

## Test Data / Evidence Needed
What real rules, thresholds, states, roles or source evidence are still required?

## Traceability
**Requirement → Rule → Gap → Dependency → Impact/Risk → Criterion → Test Evidence**

## Guardrail
Do not use this template to manufacture missing business rules.
