# System, Data & Integration Impact Analysis

## 1. System Boundary
Identify systems/domains that:
produce input → execute rule → persist state → consume result → report/reconcile.

## 2. Data Semantics
For changed values capture:
meaning → type/format if known → source → owner → consumer → history → validation.

## 3. Data Model
Potential impacts:
new attribute → changed meaning → required/optional → relationship → version/history → migration/backfill.

Do not invent physical schema.

## 4. Source of Truth
Does the change alter which domain is authoritative?

Treat this as a major architecture/business decision.

## 5. Identity
Assess correlation for:
customer → deal → quote/version → order → subscription → billing transaction → partner.

## 6. Integration Contract
Check:
operation/event → input semantics → output semantics → state/status → errors → authorization.

## 7. Compatibility
Will existing consumers continue to interpret the contract correctly?

## 8. Versioning
If contract/data semantics change, assess:
backward compatibility → coordinated rollout → migration → consumer readiness.

## 9. Synchronization
Could change affect:
freshness → ordering → duplicate handling → eventual state → reconciliation?

## 10. Asynchronous State
Dependent UI/processes must distinguish submitted from completed.

## 11. Error Handling
Assess new/changed:
validation error → business rejection → technical failure → timeout → partial success → unknown outcome.

## 12. Retry / Idempotency
Could retry create duplicate commercial/order/lifecycle outcomes?

## 13. Reconciliation
Does expected-vs-actual comparison need to change?

## 14. Security
Assess:
authentication → authorization → data minimization → sensitive commercial data → partner/customer separation → audit.

## 15. Platform Configuration
Potential:
object/configuration → rule → workflow → permission → UI → automation.

Exact platform implementation requires evidence.

## 16. Reporting
Changing a data definition may break:
reports → analytics → metrics → extracts → downstream finance/operations interpretation.

## 17. Historical Data
Determine whether existing records require:
no change → interpretation rule → migration → backfill → dual-version handling.

## 18. Deployment Sequence
Potential sequence:
contract/data decision → provider change → compatibility → consumer change → migration → validation.

Actual release plan requires project evidence.

## Output
**Systems → Data Semantics → Authority → Contract → Compatibility → Async/Error → Security → Reporting → Migration → Validation**

## Guardrail
Do not invent APIs, objects, middleware, event names, schema, deployment dates or migration volumes.
