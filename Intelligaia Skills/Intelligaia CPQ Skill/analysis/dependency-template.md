# CPQ Dependency Record Template

## Identification
**Dependency ID:**  
**Title:**  
**Status:**  
**Type:**  
**Criticality:** Required for correctness / Release / Experience / Optional / Unknown  
**Evidence Status:** Validated / Historical / Hypothesis / Unknown  

## Dependent Outcome
What story, requirement, capability, journey, integration, or release depends on this?

## Dependency
What must be true, available, decided, or completed?

## Why It Is Needed
What business, commercial, lifecycle, security, or operational integrity does it protect?

## Direction
**[Dependent item] depends on [provider/dependency].**

## Provider / Authority
Known domain/system/team/decision authority, or **Unknown / Validation Needed**.

## Consumer
Who/what relies on the dependency?

## Timing
Before / During / After / Continuous.

## Required Contract
Business inputs → outputs → semantics → state → errors/recovery → authorization.

## Failure Effect
What happens if late, unavailable, stale, incorrect, or partial?

## Related Dependencies
Prerequisite → downstream → shared → conflicting → circular.

## Resolution
Decision / Data / Capability / Integration / Process / Control / Research / De-scope / Risk Acceptance.

## Interim Approach
If applicable, include expiry/removal condition.

## Validation / Closure Evidence
What proves the consumer can rely on the dependency?

## Residual Risk
What remains unresolved after closure?

## Traceability
**Requirement → Dependency → Provider → Contract → Consumer → Acceptance Criterion → Closure Evidence**

## Guardrail
Do not assign an owner, date, interface, or criticality without evidence.
