# Current vs Target Gap Comparison

## Purpose
Create a structured comparison that exposes the meaningful difference between current and required/desired state.

## Comparison Dimensions
Use only dimensions relevant to the gap.

### User / Role
Current actor/access vs target actor/access.

### Entry / Trigger
How work begins now vs required trigger/context.

### Process Flow
Current steps/handoffs vs target business flow.

### Data
Current source, quality, semantics, entry and availability vs required state.

### Product / Configuration
Current eligibility/options/dependencies/validation vs required outcome.

### Pricing
Current pricing context/calculation/visibility vs required commercial behavior.

### Discount / Approval
Current request, threshold/policy, routing, status and version applicability vs required behavior.

### Quote / Version
Current quote lifecycle/currentness/acceptance semantics vs required integrity.

### Integration
Current source/target/correlation/status/recovery vs required cross-system behavior.

### Order
Current readiness/submission/status/error handling vs target.

### Subscription / Lifecycle
Current baseline/delta/effective date/pending state vs target.

### Billing
Current decision-relevant billing semantics/status vs required state.

### UX
Current comprehension/effort/recovery vs target outcome.

### Operations
Current exception ownership/monitoring/reconciliation vs target.

### Security
Current visibility/action boundaries vs required authorization.

### Audit / Reporting
Current traceability/measurement vs required evidence.

## Comparison Table
| Dimension | Current Evidence | Required / Target | Difference | Evidence Status |
|---|---|---|---|---|

## Target Types
Distinguish:
- **Required** — approved business/control requirement.
- **Validated User Need** — supported by research/evidence.
- **Proposed Future State** — design/architecture direction not yet approved.
- **Benchmark / Reference** — external comparison, not automatically a requirement.

## Unknown Current State
If target is known but current behavior is not:
record an **evidence gap**, then plan discovery.

## Unknown Target
If current pain exists but desired outcome is unclear:
do not prescribe a target prematurely.

## Target Granularity
Compare business semantics before UI details.

Example:
target = “seller can identify current approved quote version”
not necessarily = “green badge in header.”

## Temporal Comparison
For lifecycle gaps compare:
current effective state → pending state → proposed future state → target effective behavior.

## Cross-System Comparison
Compare end-to-end outcome, not only whether an API exists.

## Output
**Dimension-by-Dimension Difference → Confirmed Gap → Evidence Gap → Target Decision Needed → Discovery Needed**

## Guardrail
Do not use “best practice” as the target unless the project explicitly adopts it as a requirement or reference.
