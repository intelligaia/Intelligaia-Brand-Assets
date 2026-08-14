# Gap Identification & Classification

## 1. Define the Reference Point
A gap requires a comparison against something:
business requirement; user story; target journey; policy/control; design principle; architecture principle; contractual need; validated user outcome.

## 2. Establish Current Evidence
Capture what is actually known from:
source artifacts → interviews/research → platform evidence → process documentation → analytics/logs → implementation discovery.

## 3. Missing Evidence vs Gap
**Evidence gap:** current behavior is unknown.
**Capability gap:** required outcome is confirmed unsupported.
**Quality gap:** capability exists but does not meet required quality/outcome.
**Consistency gap:** behavior differs across roles/products/regions/systems without intended reason.

Do not collapse these.

## 4. Gap Types
### Business Capability
Required business action/outcome is unsupported.

### Process
Process is missing, ambiguous, duplicated, or creates unsupported handoffs.

### Business Rule / Policy
Required rule is missing, conflicting, unclear, or applied at the wrong point.

### Product / Configuration
Catalog, bundle, eligibility, dependency, or validation behavior does not support the target.

### Pricing / Discount
Commercial calculation, adjustment, discount or approval behavior does not meet the target.

### Data
Required data is unavailable, poor quality, semantically inconsistent, stale, or lacks ownership.

### Integration
Required cross-system context, event, status, correlation, recovery or reconciliation is absent/inadequate.

### Platform
Confirmed implementation/platform capability does not support the requirement.

### UX
Users cannot effectively understand or complete an otherwise supported business task.

### Security / Authorization
Required access is unavailable or inappropriate access is possible.

### Lifecycle
Amendment, renewal, cancellation, pending state, effective-date or current-baseline behavior is inadequate.

### Operations
Support, monitoring, exception ownership or reconciliation is missing/inadequate.

### Reporting / Analytics
Required decision/reporting information cannot be reliably produced.

## 5. Scope
Identify affected:
role → transaction type → journey step → product → region/channel → system → lifecycle stage.

## 6. Gap Statement
Use:
**[Role/process] cannot reliably achieve [required outcome] in [context] because [evidenced difference], resulting in [supported consequence].**

If cause is not validated, keep it out of the definitive statement.

## 7. Avoid Feature Comparison Bias
“System A has feature X and System B does not” is not automatically a gap.

Ask:
what required outcome does feature X enable?

## 8. Duplicate Gaps
Consolidate multiple symptoms that share one underlying deficiency while retaining affected scenarios.

## 9. Cross-Layer Gap
A single business gap may span:
UX + data + integration + policy + platform.

Do not force one-category ownership too early.

## 10. Evidence Status
Use:
Validated → Historical → Hypothesis → Unknown / Validation Needed.

## Output
**Reference Outcome → Current Evidence → Gap / Evidence Gap → Type → Scope → Supported Consequence → Unknowns**

## Guardrail
Do not declare a vendor/platform limitation without direct support.
