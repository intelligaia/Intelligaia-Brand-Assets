# CPQ Data Model — Commercial Entities

## Purpose
Define vendor-neutral entities from customer/opportunity through accepted quote and order.

# 1. Customer / Account
## Purpose
Represent the organization/person with which the commercial relationship exists.

## Conceptual Attributes
Identifier, name, customer type/segment, geography, commercial status, parent/relationship context where applicable.

## Relationships
Can relate to contacts/parties, opportunities, quotes, agreements, orders, subscriptions/assets, and billing accounts.

## Modeling Questions
Which system is authoritative? How are duplicate customers prevented? Are sold-to, bill-to, ship-to, and entitle-to separate parties?

# 2. Contact / Party
## Purpose
Represent people or legal/business parties participating in the transaction.

## Conceptual Attributes
Identifier, name, organization, role, communication details, party role.

## Common Party Roles
Buyer/contact, sold-to, bill-to, ship-to, entitle-to, signatory, billing contact.

Do not assume these are separate records or fields in a specific implementation.

# 3. Opportunity
## Purpose
Represent a potential commercial selling motion.

## Conceptual Attributes
Identifier, customer, owner, deal type, stage/status, expected value, currency, expected close date, channel, renewal/amendment context.

## Relationships
Customer → Opportunity → one or more Quote scenarios.

## Important Distinction
Opportunity is selling/forecast context; Quote is detailed commercial proposal.

# 4. Product / Service
## Purpose
Represent what can participate in a commercial offer.

## Conceptual Attributes
Product identifier/SKU, name, type, family, lifecycle status, effective dates, commercial attributes.

# 5. Offer
## Purpose
Represent a packaged commercial proposition that may combine products/services, eligibility, pricing, and terms.

Product and Offer are not necessarily synonymous.

# 6. Bundle / Option / Attribute
## Purpose
Represent configuration structure and choices.

## Relationships
Bundle can contain options/components. Product/configuration can expose attributes. Rules can govern inclusion, exclusion, dependency, compatibility, and cardinality.

# 7. Configuration
## Purpose
Represent the selected and validated commercial solution.

## Conceptual State
Selected products/options, attributes, quantities, term/dates, relationships, validation result, references to existing lifecycle state where relevant.

A configuration may be embedded in quote lines or represented separately depending on implementation.

# 8. Price List / Price
## Purpose
Provide governed reference/calculated commercial values.

## Conceptual Attributes
Product/offer reference, amount/rate, currency, effective dates, market/channel/customer context, pricing unit/model.

# 9. Discount / Adjustment
## Purpose
Represent changes to a reference/calculated price.

## Conceptual Attributes
Type, value/percentage, reason, source, rule/manual indicator, approval requirement.

# 10. Quote
## Purpose
Represent the structured proposed commercial transaction.

## Conceptual Attributes
Quote identifier, customer/opportunity, owner, status, currency, dates, term, totals, version/revision, primary/authoritative indicator where applicable.

## Relationships
Opportunity 1 → many Quote scenarios is common conceptually, but actual cardinality varies.

Quote contains Quote Lines and may have approvals, documents, and agreement/order relationships.

# 11. Quote Line
## Purpose
Represent a quoted product/service/charge and its configuration/pricing context.

## Conceptual Attributes
Product/offer, quantity, configuration, list/base price, adjustments, net price, term, effective dates, parent/child relationship, lifecycle reference.

## Critical Requirement
Line identity should support traceability through revisions and downstream transactions where the architecture requires it.

# 12. Approval
## Purpose
Represent governance decisions on a transaction/exception.

## Conceptual Attributes
Trigger/reason, approver/group, status/decision, sequence, timestamps, comments, decision version/context.

## Relationships
Can relate to quote, line, pricing exception, terms, agreement, or other governed transaction.

# 13. Proposal / Document
## Purpose
Represent customer-facing output generated from commercial data.

## Conceptual Attributes
Document/version reference, source quote/version, template, generated date, status.

A proposal document is not necessarily the authoritative commercial data record.

# 14. Agreement / Contract
## Purpose
Represent accepted legal/commercial terms.

## Conceptual Attributes
Identifier, customer/parties, status, effective dates, term, document/version, related quote/order.

## Control
Commercial changes during negotiation should remain traceable to quote/pricing/approval state.

# 15. Order
## Purpose
Represent accepted commercial intent submitted for execution.

## Conceptual Attributes
Order identifier, customer, source quote/agreement, status, dates, currency, downstream references.

# 16. Order Line
## Purpose
Represent executable product/service/charge detail.

## Conceptual Attributes
Product, quantity, price, discount, configuration, dates, fulfillment/billing context, source quote-line reference where supported.

## Control
Preserve quote-to-order fidelity or explicitly record governed transformations.

## Cross-Links
See `cpq-data-model-governance.md` for identifiers, versioning, lineage, and system-of-record analysis.
