# Billing — UX, Diagnostics & KPIs

## Seller / Customer Success Experience
Users may need understandable visibility into:
- expected charge structure;
- billing frequency;
- start/end dates;
- amendment/renewal billing impact;
- invoice status at an appropriate summary level;
- billing exceptions affecting the customer.

Avoid exposing accounting complexity unnecessarily.

## Billing Operations Experience
A healthy operations view should expose:
- billing account;
- source subscription/order;
- charges and schedules;
- invoice/lines;
- proration/rating explanation;
- credits/adjustments;
- usage correlation;
- tax status;
- errors/holds;
- source lineage and reconciliation.

## Diagnostic Questions
- Do invoice values match accepted commercial terms?
- Which fields are manually corrected after order?
- Are billing start dates consistent with activation?
- Can operations explain proration?
- Are amendments producing correct credits/charges?
- Does cancellation stop future billing?
- Are usage records complete and deduplicated?
- Can invoice lines be traced to subscription/order/quote?
- Are renewal boundaries creating overlap/gaps?
- How often are invoices manually adjusted?

## Common Failure Patterns
Treat as hypotheses:
- CPQ price differs from billing rate;
- wrong billing account;
- billing begins before activation;
- duplicate recurring charge;
- amendment creates wrong credit;
- cancellation fails to stop billing;
- usage cannot be correlated;
- late usage omitted/double billed;
- tax failure blocks invoice;
- manual invoice edits hide source problem;
- renewal creates overlapping charges;
- finalized invoice overwritten instead of adjusted;
- support cannot trace invoice line to commercial source.

## Billing Diagnostic
**Quote/Order → Subscription → Billing Account → Charge → Schedule → Rating/Proration → Invoice → Tax → Adjustment → Payment/Accounting Handoff → Evidence**

## Commercial-Fidelity Diagnostic
**Accepted Commercial Value → Order Value → Subscription Charge → Billing Charge → Invoice Line → Expected Transformation → Difference → Cause → Evidence**

## Proration Diagnostic
**Effective Date → Billing Period → Convention → Eligible Charge → Expected Fraction/Amount → Actual Amount → Difference → Evidence**

## Usage Diagnostic
**Usage Source → Event/Aggregate → Correlation → Deduplication → Rating → Invoice Line → Missing/Duplicate/Late Usage → Evidence**

## Cancellation Diagnostic
**Cancellation Request → Effective Date → Subscription State → Charge Stop → Credit/Adjustment → Invoice → Entitlement → Difference → Evidence**

## KPI Examples
Commercial-to-billing reconciliation exceptions; billing setup errors; invoice correction rate; manual adjustments; duplicate/missed charge rate; proration disputes/errors; usage exceptions; cancellation billing errors; renewal overlap/gap errors; billing exception resolution time.

Do not invent targets.

## Opportunity Patterns
Commercial-to-billing preview, charge timeline, proration explanation, source-lineage drilldown, amendment impact preview, usage traceability, billing exception work queue and automated reconciliation. Proposed until validated.

Apply `../foundations/source-provenance.md`.
