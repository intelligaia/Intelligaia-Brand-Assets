# Salesforce Cross-System Story Patterns

## Contract Model
**Business Trigger → Source → Required Data → Target → Expected Result → Correlation → Status → Failure / Recovery**

## CRM to CPQ
Validate customer/deal data authority, semantics and freshness.

## CPQ to CRM
If commercial status/values return to CRM, do not assume which measures or statuses synchronize.

## Downstream Handoff
Distinguish requested/submitted → accepted for processing → completed → failed/partial/unknown.

## Identity
Preserve correlation across account/customer → opportunity/deal → quote/version → order → subscription/lifecycle transaction.

## Semantics
Validate currency, quantity, term, effective date, product identity, commercial amount and customer/partner role where relevant.

## Stale Data & Reconciliation
Define handling of changed source values and expected-vs-actual state from evidence.

## Related
- [`../../platforms/salesforce/integrations.md`](../../platforms/salesforce/integrations.md)
- [`../../integrations/end-to-end-data-flow.md`](../../integrations/end-to-end-data-flow.md)
- [`../../analysis/dependency-cross-system.md`](../../analysis/dependency-cross-system.md)
- [`../../analysis/acceptance-integration.md`](../../analysis/acceptance-integration.md)

## Guardrail
Do not invent APIs, middleware, events, sync direction/timing, retry counts, mappings or source-of-truth decisions.
