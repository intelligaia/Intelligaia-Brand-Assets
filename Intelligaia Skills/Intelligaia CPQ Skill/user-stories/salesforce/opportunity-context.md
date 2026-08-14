# Salesforce Opportunity & Deal Context Story Patterns

## Purpose
Capture CRM/deal context required to initiate, govern or understand a CPQ/Q2C transaction.

## Start Commercial Transaction
**As a** supported seller role  
**I want** to initiate the appropriate commercial transaction from the relevant customer/deal context  
**So that** the quote is associated with the intended business opportunity.

Validate:
actor → account/customer → opportunity/deal → transaction type → required context → resulting commercial reference.

## Deal Context
Potential context includes customer identity, selling entity/channel, currency, transaction type, term/date, partner context and commercial owner. Use only evidenced attributes.

## Opportunity vs Quote
Keep distinct:
opportunity/deal state → quote state → approval state → customer acceptance → order/lifecycle state.

## Multiple Quotes
If evidenced, validate current/selected quote semantics, version, customer artifact and downstream eligibility. Do not assume a primary-quote model.

## Deal Change
Determine whether changed deal data should propagate, recalculate, invalidate approval, have no effect, or require reconciliation. Actual behavior requires evidence.

## Outcome
If opportunity status depends on downstream events, identify the authoritative trigger.

## Related
- [`../../platforms/salesforce/opportunity.md`](../../platforms/salesforce/opportunity.md)
- [`../../journeys/new-business.md`](../../journeys/new-business.md)
- [`../../analysis/story-analysis-framework.md`](../../analysis/story-analysis-framework.md)

## Guardrail
Do not invent stage names, required fields, synchronization rules or automation.
