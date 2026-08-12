# Pricing Capability

## Purpose
Define the vendor-neutral CPQ capability used to determine the commercial price of a valid configuration.

This is the capability entry module. Detailed flows, rules/data, UX/diagnostics, and requirement patterns are delegated to linked modules.

## Capability Outcome
A seller or automated process can obtain a consistent, explainable, effective-date-aware price for the configured solution using the applicable customer, market, channel, quantity, term, and commercial context.

## Capability Boundary
**Catalog = what can be sold.**  
**Configuration = what can be selected/combined.**  
**Pricing = how the applicable commercial value is calculated.**  
**Discounting = how governed reductions/exceptions are applied.**

Pricing may provide the basis on which discounting operates, but discretionary discount governance belongs in `discounting.md`.

## Scope
- price lists/reference prices;
- price selection;
- base/list/unit/extended/net price concepts;
- quantity/volume/tier pricing;
- attribute-based pricing;
- term-based pricing;
- customer/contract-specific pricing;
- channel pricing;
- promotional adjustments where applicable;
- recurring, one-time, and usage pricing;
- proration;
- ramp/time-phased pricing;
- renewal/uplift pricing inputs;
- recalculation/repricing;
- price explanation and traceability;
- effective dating and currency context.

## Core Flow
**Establish Pricing Context → Select Applicable Price → Apply Pricing Rules → Calculate Line Values → Aggregate → Validate → Explain → Reprice on Relevant Change → Pass to Discount/Quote**

Detailed flow: `pricing-flows.md`.

## Key Actors
Seller/AE, Partner Seller, Deal Desk, Pricing/Finance, RevOps, CPQ Administrator, Product/Catalog Operations.

## Key Questions
1. What establishes the starting/reference price?
2. Which price list or pricing context applies?
3. Which configuration inputs drive price?
4. How do quantity, term, customer, channel, and date affect price?
5. Which adjustments are automatic vs discretionary?
6. How are recurring/one-time/usage charges represented?
7. What triggers repricing?
8. How is price explained to users/approvers?
9. How is historical price preserved?
10. How is accepted price preserved downstream?

## Detail Modules
| Topic | Module |
|---|---|
| Pricing and repricing flows | `pricing-flows.md` |
| Pricing rules, calculations, data and dependencies | `pricing-rules-data.md` |
| UX, diagnostics, failure patterns and KPIs | `pricing-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `pricing-requirements.md` |

## Cross-Links
- `product-catalog.md`
- `configuration.md`
- `discounting.md`
- `quoting.md`
- `../foundations/terminology-pricing.md`
- `../foundations/cpq-data-model-commercial.md`

## Evidence Rule
This module is vendor-neutral. Customer-specific formulas, price books/lists, thresholds, margin logic, currencies, rounding, platform rule syntax, and calculation sequence require evidence.
