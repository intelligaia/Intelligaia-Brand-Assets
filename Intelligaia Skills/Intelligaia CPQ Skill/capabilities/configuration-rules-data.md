# Configuration — Rules, Data & Dependencies

## Purpose
Define the core rule types, conceptual state, and downstream dependencies of configuration.

# 1. Configuration Context
Configuration rules may depend on:
- selected product/offer;
- customer/account;
- channel/partner;
- geography/market;
- transaction type;
- effective date;
- quantity;
- attributes;
- existing subscription/asset;
- other selected components.

Only use dimensions supported by business requirements.

# 2. Required / Optional
A required option/attribute must be present for a valid configuration.
An optional choice can be selected but is not mandatory.

Required behavior may be conditional.

# 3. Default
A default pre-populates or automatically selects a value/component.

A default is not necessarily mandatory; distinguish default from required.

# 4. Inclusion Rule
Selecting one condition causes another component/value to be included.

Questions:
- automatic or suggested?
- removable or locked?
- quantity relationship?
- effective-date scope?

# 5. Dependency Rule
A selection is valid only when another product, option, attribute, or condition exists.

# 6. Exclusion Rule
Prevents incompatible or prohibited combinations.

# 7. Compatibility Rule
Determines whether products/options/attributes can coexist.

Compatibility may be symmetric or directional depending on business meaning.

# 8. Cardinality
Defines permitted number of selections.

Examples conceptually:
- exactly one;
- zero or one;
- one or more;
- minimum/maximum N.

# 9. Quantity Rule
Controls valid quantity, increments, ratios, or relationships.

Do not assume quantity logic is the same as option cardinality.

# 10. Attribute Rule
Controls allowed/default/required attribute values and relationships to other selections.

# 11. Conditional Rule
Applies behavior only when defined context is true.

A rule should be traceable to a business policy/requirement where possible.

# 12. Validation Rule
Checks whether resulting configuration satisfies a condition.

Validation should identify:
- condition;
- affected entity;
- severity;
- corrective guidance;
- blocking behavior.

# 13. Warning vs Error
**Warning:** user may continue according to policy.  
**Blocking Error:** progression is prevented until corrected.

Exact severity must be defined by requirements.

# 14. Configuration State
Conceptually capture:
- selected product/bundle;
- options/components;
- parent-child relationships;
- attributes;
- quantities;
- term/date context;
- existing lifecycle references;
- validation status;
- rule outcomes needed for audit/explanation.

# 15. Derived Values
Some configuration values may be calculated from other inputs.

Record source/logic sufficiently to explain the result where business critical.

# 16. Rule Ordering / Interaction
Complex rule sets can interact.

Validate:
- whether rule order matters;
- whether a change triggers dependent recalculation;
- whether circular dependencies exist;
- whether defaults conflict with exclusions;
- whether old selections become invalid after context changes.

# 17. Effective Dating
Configuration rules/components can vary over time.

Questions:
- which business date evaluates the rule?
- what happens to in-flight quotes?
- what happens to existing subscriptions/assets?
- are historical configurations reproducible?

# 18. Configuration Versioning
When a quote changes, determine whether configuration state is:
- mutated;
- copied;
- versioned;
- recalculated.

Preserve enough history for quote/approval/order traceability.

# 19. Installed-Base Reference
Lifecycle configuration may require:
- source subscription/asset ID;
- current product/component;
- quantity;
- dates;
- current attributes;
- change eligibility;
- prior commercial context.

See `subscriptions.md` and `amendments.md`.

# 20. Pricing Dependency
Configuration can drive price through:
- product selection;
- option selection;
- quantity;
- attributes;
- term;
- other commercial context.

Pricing logic belongs in `pricing.md`.

# 21. Downstream Fidelity
Determine which configuration elements must survive into:
**Quote → Agreement → Order → Fulfillment → Entitlement → Billing → Lifecycle**

Examples may include product/component IDs, quantities, hierarchy, attributes, dates, and lifecycle references.

# 22. Rule Governance
For important rules identify:
**Business Owner → Rule Purpose → Trigger → Inputs → Outcome → Severity → Effective Date → Change Process → Test Coverage**

Do not infer ownership.

# 23. Complexity Risks
Potential risks:
- duplicate/conflicting rules;
- hidden dependencies;
- rules implemented in multiple systems;
- excessive rule chaining;
- untestable combinations;
- stale rules after catalog change;
- manual exceptions outside CPQ.

Treat these as diagnostic hypotheses until evidenced.
