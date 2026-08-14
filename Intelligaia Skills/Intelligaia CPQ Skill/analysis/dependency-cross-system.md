# Cross-System & Lifecycle Dependency Analysis

## 1. Cross-System Contract
For each dependency across systems identify:

**Business Operation → Source → Required Input → Target → Expected Result → Correlation → State/Status → Failure/Recovery**

## 2. Identity Dependency
Check stable correlation for:
customer → opportunity/deal → quote/version → order → subscription → billing/lifecycle transaction → partner.

## 3. Data Semantic Dependency
A field existing in both systems is insufficient.

Confirm shared meaning:
currency; term; quantity; effective date; product identifier; recurring amount; partner/customer role.

## 4. Source-of-Truth Dependency
A consumer may depend on authoritative state from another domain.

Record authority only when supported.

## 5. Freshness Dependency
Ask:
how current must the data/state be for the business decision?

“Real-time” is not automatically required.

## 6. Version Dependency
Operations may depend on:
catalog version → pricing validity → quote version → approval version → accepted version → subscription state.

## 7. Order Dependency
Order submission may depend on:
valid configuration → current pricing → required approval → accepted/eligible quote version → required customer/partner data.

Exact requirements are implementation-specific.

## 8. Amendment Dependency
Depends on:
authoritative current baseline → pending changes → allowed change type → effective date → commercial calculation → downstream lifecycle support.

## 9. Renewal Dependency
Depends on:
current term → renewal boundary → pending amendments/cancellations → carry-forward/migration rules → pricing/approval → partner ownership where applicable.

## 10. Billing Dependency
If a user outcome requires billing consequence, distinguish estimated CPQ commercial result from authoritative billing result.

## 11. Asynchronous Dependency
A downstream operation may not complete during the initiating user action.

Dependent work must distinguish submitted from completed.

## 12. Partial Success
If downstream components can complete independently, later dependencies must not assume all-or-nothing completion.

## 13. Unknown Outcome
A timeout may create a dependency on status verification before retry or subsequent action.

## 14. Idempotency
Safe resubmission/recovery may depend on a stable business key or idempotent operation.

Exact mechanics require architecture evidence.

## 15. Reconciliation
End-to-end correctness may depend on comparing expected vs actual state after asynchronous processing.

## 16. Security
Cross-system dependency includes identity propagation, authorization and data-minimization requirements.

## 17. Operational Dependency
Support may require correlation IDs, status visibility, retry/recovery procedures and ownership.

## Output
**Contract → Identity → Semantics → Authority → Freshness → Version → Lifecycle State → Async/Recovery → Security → Reconciliation**

## Guardrail
Do not invent APIs, middleware, event names, payloads, SLAs, retry counts or synchronization modes.
