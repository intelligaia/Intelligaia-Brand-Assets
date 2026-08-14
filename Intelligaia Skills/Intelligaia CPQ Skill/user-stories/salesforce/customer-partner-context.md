# Salesforce Customer & Partner Context Story Patterns

## Purpose
Preserve customer, account, partner and channel identity across CRM and commercial transactions.

## Customer Context
Capture account/customer and, if evidenced, sold-to, bill-to, payer or service-recipient distinctions across deal, quote and downstream correlation.

## Partner Context
Where channel selling applies, distinguish seller, partner, distributor, end customer, payer and service recipient without assuming the Salesforce data model.

## Correct Customer Context
**As a** supported seller/operations role  
**I want** the commercial transaction associated with the intended customer relationship  
**So that** commercial and lifecycle outcomes are not applied to the wrong party.

## Partner-Assisted Deal
Capture partner identity → customer identity → authorization → commercial visibility → deal/quote association → downstream identity.

## Access
Validate role-specific visibility/edit rights for customer data, commercial values, discount, quote, approval and downstream status.

## Related
- [`../../journeys/partner-sales.md`](../../journeys/partner-sales.md)
- [`../../ux/partner-experience.md`](../../ux/partner-experience.md)
- [`../story-scenarios.md`](../story-scenarios.md)

## Guardrail
Do not invent account hierarchy, partner objects, sharing rules, territories or channel-program behavior.
