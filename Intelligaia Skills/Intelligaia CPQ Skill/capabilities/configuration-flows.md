# Configuration — Flows

## Purpose
Define detailed vendor-neutral configuration flows.

# 1. New Configuration

## Trigger
A user or process needs to construct a sellable solution.

## Flow
1. Establish transaction context.
2. Identify customer/account context where relevant.
3. Identify channel/market/geography context where relevant.
4. Select product, offer, or bundle.
5. Load applicable options/components.
6. Load applicable attributes.
7. Apply defaults.
8. Evaluate required selections.
9. Evaluate eligibility and availability.
10. Make user selections.
11. Apply inclusion/exclusion/dependency rules.
12. Apply compatibility rules.
13. Apply cardinality/quantity rules.
14. Recalculate dependent choices where required.
15. Validate configuration.
16. Present actionable errors/warnings.
17. Correct invalid selections.
18. Revalidate.
19. Mark configuration ready for pricing/quote progression.
20. Preserve structure and context.

## Exit Criteria
All blocking configuration rules pass and required downstream configuration data is complete.

# 2. Guided Selling

## Purpose
Help a user identify suitable products/configurations from customer needs rather than requiring prior product-code knowledge.

## Flow
1. Capture relevant customer/use-case inputs.
2. Evaluate guided-selling logic.
3. Present candidate products/offers.
4. Explain relevant differences where possible.
5. User selects candidate.
6. Enter standard configuration flow.
7. Preserve captured context when needed downstream.

## Control
Guided selling recommends or narrows choices; final configuration must still satisfy configuration validation.

# 3. Bundle Configuration

## Flow
1. Select bundle.
2. Load bundle components/options.
3. Apply required components.
4. Apply default options.
5. Present optional choices.
6. Enforce min/max/cardinality.
7. Apply dependencies/inclusions.
8. Apply exclusions.
9. Evaluate compatibility.
10. Capture attributes/quantities.
11. Validate parent-child structure.
12. Finalize.

# 4. Attribute-Driven Configuration

## Flow
Select product → load attributes → apply defaults → capture values → validate allowed values → recalculate dependent options/rules → validate configuration.

## Risk
Attribute changes can affect configuration, pricing, fulfillment, or downstream mappings. Dependency must be explicit.

# 5. Reconfiguration of an In-Flight Quote

## Trigger
Customer/seller changes an existing proposed solution.

## Flow
1. Open existing configuration/version.
2. Identify current selected structure.
3. Apply requested change.
4. Re-evaluate dependent rules.
5. Identify invalidated selections.
6. Revalidate.
7. Trigger repricing if price-driving inputs changed.
8. Determine whether approval must be re-evaluated.
9. preserve revision/history according to governance.

# 6. Existing Installed-Base Configuration

## Trigger
Amendment, expansion, upgrade, downgrade, renewal, or other change to an existing relationship.

## Flow
1. Retrieve authoritative active subscription/asset/entitlement context.
2. Identify changeable products/components.
3. Apply lifecycle-specific eligibility.
4. Preserve non-changeable context.
5. Apply requested delta.
6. Evaluate compatibility with existing state.
7. Apply date/term/co-term rules where relevant.
8. Validate resulting configuration.
9. Send resulting commercial delta/state to pricing.
10. Preserve source lifecycle references.

## Control
Do not treat installed-base configuration as a completely new sale unless the business process explicitly does so.

# 7. Configuration Validation

## Flow
Evaluate:
- required choices;
- allowed values;
- dependencies;
- exclusions;
- compatibility;
- cardinality;
- quantity;
- lifecycle/effective date;
- eligibility context;
- downstream-required configuration data where appropriate.

Classify result as blocking error, warning, or valid according to evidenced policy.

# 8. Error Resolution

## Flow
Detect failure → identify affected selection → explain violated rule → identify corrective action → user/system corrects → rerun dependent rules → revalidate.

Avoid generic “invalid configuration” messages when a specific cause can be provided.

# 9. Configuration Copy / Clone

## Flow
Copy source configuration → establish new transaction context → re-evaluate current catalog/effective-date/eligibility rules → identify invalid/outdated selections → correct → validate → price.

## Control
Cloning should not imply historical configuration remains currently sellable.

# 10. Configuration-to-Order Handoff

## Flow
Final configuration → quote acceptance → order transformation → preserve product/component relationships and required attributes → downstream validation → fulfillment/provisioning consumption.

## Critical Control
A configuration valid for selling must also contain the data required for execution, or the process must explicitly enrich it before order submission.

# Flow Depth
These are L2/L3 vendor-neutral flows. Platform-specific screens, clicks, rule-engine execution, APIs, and status names belong in platform modules.
