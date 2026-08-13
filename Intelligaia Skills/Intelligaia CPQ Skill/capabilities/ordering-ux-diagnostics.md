# Ordering — UX, Diagnostics & KPIs

## Purpose
Define operational experience, failure diagnostics, reconciliation patterns, and measures for ordering.

## Seller Experience
Sellers should understand:
- whether the accepted quote converted successfully;
- whether action is required;
- major order status where appropriate;
- blocking commercial/data issues without needing deep fulfillment-system expertise.

## Order Operations Experience
A healthy operational view should expose:
- source quote/version;
- order/components;
- validation results;
- holds;
- downstream references;
- orchestration/dependencies;
- errors/retries;
- reconciliation status;
- owner/action.

## Diagnostic Questions
- How often does quote-to-order conversion fail?
- Which fields require manual correction?
- Are bundle/component structures preserved?
- How many systems must operations inspect?
- Can errors be correlated to the source quote line?
- Are retries safe and visible?
- Are partial failures clear?
- Are order and billing states synchronized?
- How are stuck orders identified?
- Can accepted commercial values be reconciled?

## Common Failure Patterns
Treat as hypotheses:
- manual order re-entry;
- quote/order mismatch;
- missing fulfillment attributes;
- bundle hierarchy flattened incorrectly;
- duplicate orders;
- incorrect dates;
- wrong party/address;
- stuck orchestration;
- opaque integration error;
- repeated manual retry;
- partial success hidden by overall failure;
- billing starts with wrong values/date;
- order completion not reflected in lifecycle systems.

## Order Diagnostic
**Accepted Quote/Version → Conversion → Order/Lines → Validation → Decomposition → Orchestration → Downstream Handoff → Error/Hold → Remediation → Completion → Evidence**

## Mapping Diagnostic
**Source Entity/Field → Value → Transformation → Target Entity/Field → Actual Value → Difference → Impact → Owner → Evidence**

## Failure Diagnostic
**Order/Component → Step/System → Error → Retryability → Attempts → Manual Action → Result → Duplicate Risk → Downstream Impact → Evidence**

## Reconciliation Diagnostic
**Quote Value → Order Value → Fulfillment/Billing Value → Expected Transformation → Difference → Cause → Resolution → Evidence**

## KPI Examples
Quote-to-order success; order fallout/error rate; manual touches; time to submit/complete; hold duration; retry rate; duplicate rate; partial failure rate; reconciliation exceptions; billing errors attributable to order data.

Do not invent targets.

## Opportunity Patterns
Readiness validation, mapping transparency, orchestration timeline, actionable errors, safe retry, exception work queue, cross-system correlation, automated reconciliation and proactive stuck-order detection. Proposed until validated.

Apply `../foundations/source-provenance.md`.
