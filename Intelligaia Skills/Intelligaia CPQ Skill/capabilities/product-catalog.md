# Product Catalog Capability

## Purpose
Define the vendor-neutral CPQ capability for governing the products, services, offers, bundles, options, attributes, commercial metadata, and rules required to sell accurately.

This is the capability entry module. Detailed flows, rules/data, UX/diagnostics, and requirement patterns are delegated to linked modules.

## Capability Outcome
A seller, partner, or downstream process should be able to identify the right sellable offering for the applicable customer, market, channel, date, and lifecycle context without relying on avoidable manual interpretation.

## Scope
Product catalog capability includes:
- product/service/SKU/offer definition;
- hierarchy and classification;
- bundles, options, and attributes;
- lifecycle and effective dating;
- sellability, visibility, and eligibility;
- commercial readiness;
- catalog publication/change;
- downstream identifiers and dependencies;
- governance and ownership.

Detailed configuration logic belongs in `configuration.md`. Pricing calculations belong in `pricing.md`.

## Core Flow
**Define → Enrich → Structure → Apply Commercial Rules → Validate → Approve/Govern → Publish → Consume → Monitor → Change/Retire**

Detailed flow: `product-catalog-flows.md`.

## Core Entities
Product, Service, SKU, Offer, Bundle, Option, Attribute, Attribute Value, Product Family, Product Hierarchy, Lifecycle State, Eligibility Context, Effective Date, Downstream Identifier.

See `../foundations/cpq-data-model.md`.

## Key Actors
Product/Catalog Operations, Product Management, Pricing, Sales/RevOps, CPQ Admin, Integration/Data, Seller/Partner, Solution Specialist.

See `../foundations/personas.md`.

## Capability Questions
1. What is the canonical sellable entity?
2. How are product, SKU, offer, bundle, and option distinguished?
3. Who owns catalog creation and commercial readiness?
4. What makes an item sellable?
5. How are lifecycle/effective dates controlled?
6. How are market, customer, geography, and channel eligibility handled?
7. Which configuration/pricing dependencies must exist before publication?
8. Which downstream identifiers are mandatory?
9. How are catalog changes validated and released?
10. How are retired/replaced products handled for existing customers?

## Detail Modules

| Topic | Module |
|---|---|
| Catalog creation, publication, change and retirement flows | `product-catalog-flows.md` |
| Business rules, entities and dependencies | `product-catalog-rules-data.md` |
| Seller/admin UX, failure patterns, diagnostics and KPIs | `product-catalog-ux-diagnostics.md` |
| Reusable requirements, stories and acceptance patterns | `product-catalog-requirements.md` |

## Cross-Links
- `configuration.md`
- `pricing.md`
- `../foundations/terminology-catalog-configuration.md`
- `../foundations/cpq-data-model-commercial.md`
- `../journeys/new-business.md`
- `../integrations/end-to-end-data-flow.md`

## Evidence Rule
This module is vendor-neutral. Customer/project artifacts may validate specific catalog pain points or requirements, but they must retain provenance. Do not infer platform-specific product objects, fields, APIs, or catalog limitations here.
