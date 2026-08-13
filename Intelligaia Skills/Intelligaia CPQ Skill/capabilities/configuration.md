# Configuration Capability

## Purpose
Define the vendor-neutral CPQ capability used to construct and validate a sellable solution from catalog products, bundles, options, attributes, quantities, and commercial context.

This is the capability entry module. Detailed flows, rules/data, UX/diagnostics, and requirement patterns are delegated to linked modules.

## Capability Outcome
A seller, partner, specialist, or automated process can create a complete and valid configuration with clear guidance and early validation, while preserving the structure required by pricing and downstream execution.

## Capability Boundary
**Product Catalog = what can be sold.**  
**Configuration = what can be selected and combined.**  
**Pricing = what the resulting configuration costs.**

Configuration may consume catalog, customer, channel, installed-base, date, and other context, but should not silently redefine those source domains.

## Scope
- product/bundle selection;
- options/components;
- attributes and values;
- required/optional choices;
- defaults;
- inclusion/exclusion;
- dependencies;
- compatibility;
- cardinality and quantity rules;
- guided selling;
- validation;
- reconfiguration;
- installed-base-aware configuration;
- configuration errors;
- downstream configuration fidelity.

## Core Runtime Flow
**Establish Context → Select Product/Bundle → Load Applicable Structure → Guide Choices → Apply Rules → Validate → Resolve Errors → Finalize Configuration → Price → Preserve for Downstream Use**

Detailed flow: `configuration-flows.md`.

## Key Actors
Seller/AE, Partner Seller, Solution/Product Specialist, Deal Desk, Catalog Operations, CPQ Administrator, Order/Fulfillment teams.

## Core Entities
Configuration, Product, Bundle, Option, Attribute, Attribute Value, Quantity, Rule, Validation Result, Existing Asset/Subscription reference.

## Key Questions
1. What initiates configuration?
2. Which catalog structure is loaded?
3. Which choices are required, optional, defaulted, or derived?
4. Which rules execute dynamically?
5. Which customer/channel/date context changes configuration?
6. When is a configuration considered valid?
7. Which errors block progression?
8. Can users understand why a choice is invalid?
9. How are existing assets/subscriptions reconfigured?
10. How is configuration structure preserved into order/fulfillment?

## Detail Modules

| Topic | Module |
|---|---|
| New, guided, reconfiguration and validation flows | `configuration-flows.md` |
| Rules, entities, state, dependencies and fidelity | `configuration-rules-data.md` |
| Seller/specialist UX, failure patterns, diagnostics and KPIs | `configuration-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `configuration-requirements.md` |

## Cross-Links
- `product-catalog.md`
- `pricing.md`
- `../foundations/terminology-catalog-configuration.md`
- `../foundations/cpq-data-model-commercial.md`
- `../journeys/new-business.md`
- `../journeys/modify-existing-deal.md`

## Evidence Rule
This module describes vendor-neutral configuration patterns. Platform rule engines, constraint syntax, UI components, object names, APIs, and implementation limitations require platform/customer evidence.
