# CPQ / Quote-to-Cash Terminology

## Purpose
Canonical vendor-neutral vocabulary for the CPQ Insight skill.

Use this file for core terms and commonly confused concepts. Detailed domain vocabulary is delegated to linked glossaries so terminology remains easy to load and maintain.

## Interpretation Rules
- Prefer the customer's terminology when analyzing customer/project material.
- Use these definitions to clarify meaning, not to overwrite source language.
- Platform-specific object/status names belong in `platforms/`.
- If a term has multiple industry meanings, state the meaning being used.
- Do not assume two similarly named records in different platforms are equivalent.

## Core Lifecycle Terms

### CPQ
**Configure, Price, Quote.** The capabilities and processes used to create a valid product/service configuration, calculate applicable commercial values, and produce a governed quote.

### Quote-to-Order (Q2O)
The commercial process from quote through approval/acceptance to an executable order.

### Quote-to-Cash (Q2C)
The broader lifecycle connecting commercial proposal to order, fulfillment/provisioning, billing, payment/financial execution, and recurring lifecycle changes.

### Opportunity
A CRM/sales representation of a potential commercial transaction. It is not the same as a quote.

### Configure
Determine what can and should be sold by applying catalog, option, attribute, eligibility, compatibility, dependency, quantity, term, and related rules.

### Price
Calculate applicable commercial values for a configured solution.

### Quote
A structured commercial record containing proposed products/services, quantities, prices, discounts, terms, dates, and related context.

### Approval
A governance decision allowing, rejecting, or requesting more information for a transaction or exception.

### Contract / Agreement
The legally/commercially accepted terms governing the transaction or relationship.

### Order
An executable transaction representing what has been accepted for downstream processing.

### Fulfillment
Delivery of the purchased product or service.

### Provisioning
Activation or creation of service/access/entitlement.

### Billing
Calculation and execution of charges/invoices according to agreed commercial terms.

### Amendment
An in-term change to an active commercial/subscription relationship.

### Renewal
Continuation or restructuring of a relationship at or around the end of its current term.

### Cancellation
Termination or reduction of an active commercial relationship according to applicable policy/terms.

## Commonly Confused Terms

### Quote vs Proposal
A **quote** is normally the structured commercial record. A **proposal** is commonly the customer-facing document generated from commercial data. Exact platform usage varies.

### Quote vs Order
A quote represents proposed commercial intent. An order represents accepted intent submitted for execution.

### Validation vs Approval
**Validation** checks whether data/configuration/process conditions are valid.  
**Approval** is an authorized business decision, commonly for an exception or governed transaction.

### Amendment vs Renewal
An **amendment** changes an active relationship during its term.  
A **renewal** continues/restructures the relationship for a subsequent term.

### Subscription vs Asset
A **subscription** represents an ongoing time-based commercial/service relationship.  
An **asset** represents something the customer owns, has purchased, or is entitled to use, depending on the implementation. They are related but not interchangeable.

### Product vs SKU vs Offer
A **product** is a sellable business concept.  
A **SKU** is an identifiable stock/sellable unit or code.  
An **offer** is a packaged commercial proposition that may combine products, services, pricing, eligibility, and terms.

Exact meanings vary by company/catalog architecture.

### Bundle vs Option
A **bundle** groups related sellable components.  
An **option** is a selectable component/choice within a configuration context.

### List Price vs Net Price
**List price** is a reference/base commercial price before applicable adjustments.  
**Net price** is the resulting price after applicable adjustments/discounts according to the pricing model.

### Discount vs Price Adjustment
A **discount** reduces price according to a rule or discretionary decision.  
A **price adjustment** is broader and can represent positive or negative changes. Implementations may use different terminology.

### Account vs Billing Account
An **account** represents the customer/business relationship in a sales/customer context.  
A **billing account** represents the entity/context used to manage billing. They may map one-to-one, one-to-many, or differently depending on architecture.

### Customer vs Sold-to / Bill-to / Ship-to / Entitle-to
**Customer** is the general commercial party. Specialized party roles describe where a transaction is sold, billed, shipped, or entitled. Exact semantics are implementation-specific.

## Domain Glossaries

| Domain | File |
|---|---|
| Product catalog & configuration | `terminology-catalog-configuration.md` |
| Pricing & discounting | `terminology-pricing.md` |
| Quote, approval, contract & order | `terminology-commercial.md` |
| Subscription, amendment, renewal & billing | `terminology-subscription-billing.md` |
| Data, integrations, process & analysis | `terminology-data-analysis.md` |

## Related Foundations
- `cpq-lifecycle.md`
- `quote-to-cash.md`
- `personas.md`
- `cpq-data-model.md`
- `source-provenance.md`
