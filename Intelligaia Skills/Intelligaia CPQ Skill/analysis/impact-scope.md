# Impact Scope & Taxonomy

## 1. Define the Change
Describe what is changing:
business rule → process → data → catalog/configuration → pricing → approval → quote → integration → platform → UX → lifecycle → operations.

## 2. Establish Baseline
What current behavior/state is actually evidenced?

If baseline is unknown, predicted improvement cannot be stated as fact.

## 3. Direct Impact
Immediate consequence in the changed domain.

Example pattern:
approval rule changes → different transactions may require approval.

Exact population requires evidence.

## 4. Downstream Impact
What consumes the changed result?

Trace:
quote → customer proposal → approval → order → subscription → billing → entitlement/service → reporting/operations.

## 5. Upstream Impact
Does the change require new/changed input, data quality, configuration, policy, or user behavior?

## 6. Impact Types

### User
task, comprehension, effort, access, error recovery.

### Business Process
steps, handoffs, ownership, timing, control.

### Commercial
price, discount, margin-sensitive logic, quote validity, approval.

### Customer
proposal, commitment, timing, order, billing/service experience.

### Product / Configuration
eligibility, bundle, compatibility, validation.

### Data
schema/meaning, source, mapping, quality, history, reporting.

### Platform
configuration/customization, behavior, permissions, deployment.

### Integration
contract, payload semantics, sequencing, status, errors, reconciliation.

### Lifecycle
amendment, renewal, cancellation, current/pending state, effective date.

### Security / Compliance
authorization, segregation, confidentiality, audit.

### Operations
monitoring, exception handling, support, reconciliation.

### Analytics / Reporting
metric definition, lineage, historical comparability.

### Training / Change
new behavior, terminology, process, support materials.

## 7. Scope Dimensions
Role → transaction type → product → geography → channel → system → lifecycle stage → data domain.

## 8. Positive Impact
Potential benefit must be:
validated → modeled/estimated → hypothesis.

## 9. Negative Impact
Identify additional work, complexity, latency, control burden, migration risk or exception risk.

## 10. Unintended Impact
Ask:
what could become easier to do incorrectly?

## 11. No-Impact Claim
“Not impacted” should be supported by boundary/contract evidence, not assumption.

## Output
**Change → Baseline → Direct → Upstream → Downstream → Scope → Positive/Negative/Unintended → Unknowns**

## Guardrail
Do not turn broad possibility lists into claims that every impact applies.
