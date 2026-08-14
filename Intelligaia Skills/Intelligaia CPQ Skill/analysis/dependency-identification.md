# Dependency Identification & Taxonomy

## 1. Start from Outcome
Ask:
What must be true before this business outcome can occur correctly?

## 2. Dependency vs Relationship
A dependency blocks, conditions, constrains, or materially affects success.

Two related stories are not automatically dependent.

## 3. Dependency Types

### Business Decision
Required unresolved decision about scope, policy, process, ownership, commercial semantics, or target behavior.

### Business Rule / Policy
Eligibility, pricing, discount, approval, cancellation, renewal, channel or other governing rule.

### Capability
Another business capability must exist first.

### Journey / Process
A preceding or coordinating process must complete.

### Product Catalog / Configuration
Product definition, hierarchy, compatibility, eligibility or configuration rule is required.

### Pricing / Commercial
Price context, calculation, currency, discount or commercial semantics are required.

### Data
Required identity, attribute, quality, mapping, source-of-truth, freshness or history.

### Platform
A confirmed platform implementation/capability is required.

### Integration / API
A cross-system lookup, handoff, event, status, callback, recovery or reconciliation is required.

### Security / Authorization
Required identity, role, access, segregation or data visibility.

### Approval / Control
Required commercial/control decision must occur.

### Lifecycle
Current subscription, pending change, effective date, renewal boundary or lifecycle state is required.

### Billing / Entitlement
Required downstream commercial/service state or authoritative result.

### UX
A user interaction or role experience is required to complete the business process.

### Operations
Support, monitoring, reconciliation, exception ownership or operational procedure is required.

### Research / Evidence
A decision cannot safely be made until user, business, technical or platform evidence is gathered.

## 4. Hard vs Soft
**Hard:** outcome cannot be correct/completed without it.
**Soft:** improves quality, efficiency, or experience but is not required for correctness.
**Unknown:** criticality not yet validated.

## 5. Internal vs External
Internal dependency: within the initiative/team/domain.
External dependency: controlled outside the immediate scope.

Do not infer control/ownership.

## 6. Temporal
Dependencies may be:
before → during → after → recurring/continuous.

## 7. State Dependency
Examples:
quote must be current; pricing must be valid; approval must apply to exact version; subscription baseline must be current.

## 8. Hidden Dependency Signals
Words such as:
current; automatically; approved; existing; eligible; same; sync; real-time; renew; copy; partner; effective; cancel.

Investigate the implied rule/data/state dependency.

## 9. Dependency Statement
Use:
**[Outcome] depends on [dependency] because [business/integrity reason].**

## Output
**Dependency → Type → Hard/Soft/Unknown → Timing → Evidence → Unknowns**

## Guardrail
Do not turn an implementation preference into a hard dependency without justification.
