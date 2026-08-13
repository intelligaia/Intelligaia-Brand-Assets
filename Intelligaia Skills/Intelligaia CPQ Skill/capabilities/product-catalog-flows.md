# Product Catalog — Flows

## Purpose
Define detailed vendor-neutral catalog operating flows.

# 1. New Product / Offer Introduction

## Trigger
A new product, service, SKU, offer, bundle, or commercial variation must become sellable.

## Flow
1. Create catalog identity.
2. Define business classification/family.
3. Define product/service type.
4. Define lifecycle state and intended sellable dates.
5. Define market/geography/channel/customer eligibility.
6. Define attributes and allowed values.
7. Define bundle/options/component structure where applicable.
8. Define required compatibility/dependency metadata.
9. Establish pricing readiness/reference.
10. Establish downstream identifiers/mappings.
11. Validate required commercial data.
12. Review/approve according to governance.
13. Publish/activate.
14. Confirm availability in intended selling channels.
15. Monitor defects/usage.
16. Correct through governed change if required.

## Exit Criteria
The offering is commercially complete enough for intended configure/price/quote and downstream processes.

# 2. Catalog Publication

## Flow
Draft → enrich → validate → governance review → effective-date check → publish → propagate/synchronize → verify consumption.

## Publication Controls
Validate where relevant:
- required identifiers;
- name/description/classification;
- lifecycle/effective dates;
- bundle/option integrity;
- eligibility;
- configuration dependencies;
- pricing readiness;
- downstream mapping;
- duplicate/conflicting definitions.

# 3. Catalog Change

## Trigger
Product metadata, structure, attributes, rules, eligibility, identifiers, or lifecycle information changes.

## Flow
1. Identify requested change.
2. Determine impacted products/offers.
3. Identify dependent configuration/pricing/integration processes.
4. Determine whether existing quotes/orders/subscriptions are affected.
5. Make controlled change.
6. Validate.
7. Test impacted scenarios.
8. Approve/release.
9. Monitor.
10. Reconcile downstream state where required.

## Critical Decision
Does the change affect only future selling, or must it also affect in-flight/existing commercial relationships?

Do not assume retroactive behavior.

# 4. Product Retirement / End of Sale

## Flow
Identify product → define end-of-sale/effective date → identify replacement/migration if applicable → update eligibility/visibility → validate open quote behavior → preserve historical/lifecycle references → publish → monitor.

## Controls
A retired product may still need to remain recognizable for:
- historical quotes/orders;
- installed base;
- amendments;
- renewals;
- billing;
- reporting.

Retirement must not automatically destroy historical traceability.

# 5. Bundle Maintenance

## Flow
Define parent bundle → define options/components → define required/optional relationships → cardinality → compatibility/dependency → defaults → effective dates → validate representative configurations → publish.

Detailed runtime configuration belongs in `configuration.md`.

# 6. Attribute Maintenance

## Flow
Define attribute → business meaning → datatype/value domain → applicable products → required/optional behavior → defaults → effective dates → downstream use → validation → publish.

## Control
An attribute should not be introduced without understanding whether it affects configuration, pricing, ordering, fulfillment, entitlement, or reporting.

# 7. Eligibility Change

## Flow
Identify eligibility dimension → define condition → assess affected products/channels/customers → validate visibility/sellability → test boundary scenarios → publish → monitor.

Possible dimensions include geography, market, channel, customer type, partner authorization, effective date, lifecycle state, and contractual context.

# 8. Downstream Mapping Change

## Flow
Identify source product/offer → target-system identifier → validate mapping uniqueness/completeness → test transaction → release → monitor integration errors.

## Critical Risk
A product can appear sellable in CPQ while remaining non-executable downstream if required mapping is missing.

# 9. Emergency Catalog Correction

## Flow
Detect defect → assess transaction/customer impact → contain sellability if needed → correct → validate priority scenarios → release through controlled emergency process → identify affected transactions → reconcile → root-cause review.

Emergency governance is organization-specific.

# Flow Depth
These are L2/L3 vendor-neutral flows. Platform-specific clicks, screens, object statuses, APIs, and automation belong in platform modules.
