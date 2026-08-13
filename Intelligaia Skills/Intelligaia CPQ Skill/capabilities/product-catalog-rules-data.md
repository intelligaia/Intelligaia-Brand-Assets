# Product Catalog — Rules, Data & Dependencies

## Purpose
Define the core business-rule and data concerns required for a reliable sellable catalog.

# 1. Catalog Identity
Each sellable concept needs an identity appropriate to its architecture.

Potential concepts:
- product ID;
- SKU/code;
- offer ID;
- bundle/component ID;
- downstream/external ID.

Do not assume one identifier serves every system.

# 2. Product Classification
Classification can support discovery, rules, reporting, pricing, and downstream behavior.

Examples of conceptual dimensions:
family, category, type, service/product, recurring/one-time, market, channel, lifecycle state.

Actual taxonomy is customer-specific.

# 3. Product vs SKU vs Offer
Keep these concepts distinct unless evidence says they are intentionally unified.

- Product: business sellable concept.
- SKU: identifiable sellable/stock unit or code.
- Offer: commercial packaging of products/services, eligibility, price, and terms.

# 4. Bundle Structure
A bundle can define:
- parent;
- components/options;
- required/optional behavior;
- min/max/cardinality;
- defaults;
- dependencies/exclusions;
- effective dates.

Runtime selection/validation belongs in configuration.

# 5. Attributes
For each attribute determine:
- business meaning;
- datatype/domain;
- applicable product;
- required/optional;
- default;
- allowed values;
- effective dates;
- downstream consumers;
- whether it affects price/configuration/fulfillment.

# 6. Lifecycle State
Conceptual lifecycle states may include planned, active/sellable, restricted, end-of-sale, retired.

Exact states must be evidenced.

Lifecycle state should answer:
- can it be sold now?
- can it be quoted on an existing transaction?
- can existing customers amend it?
- can it renew?
- can downstream systems still recognize it?

# 7. Effective Dating
Catalog data may require:
- sell-from date;
- sell-through/end-of-sale date;
- rule effective dates;
- price effective dates;
- offer availability dates.

Effective-date conflicts should be validated before publication.

# 8. Visibility vs Eligibility
Visibility answers whether a user can discover/see an item.
Eligibility answers whether the item can be sold in the transaction context.

They can be implemented together or separately.

# 9. Eligibility Dimensions
Potential dimensions:
customer/account, segment, geography, country, currency, channel, partner authorization, market, product lifecycle, effective date, contract/subscription context.

Only use dimensions supported by requirements/evidence.

# 10. Commercial Readiness
Before publication, determine whether the offering has sufficient:
- catalog identity;
- classification;
- configuration metadata;
- pricing;
- approval/commercial policy;
- downstream mapping;
- fulfillment/billing context;
- effective dates.

Not every item needs every dimension.

# 11. Downstream Dependencies
A catalog item may need identifiers/metadata for:
- CRM/CPQ;
- order management/ERP;
- fulfillment/provisioning;
- entitlement;
- billing;
- reporting/data warehouse.

The actual systems and mappings belong in integration/platform modules.

# 12. Historical Integrity
Catalog changes must preserve enough historical context to interpret prior quote, order, subscription, billing, and renewal transactions.

# 13. Duplicate / Overlap Control
Validate:
- duplicate SKUs/identifiers;
- overlapping offers;
- conflicting effective dates;
- duplicated product definitions;
- ambiguous replacement products.

# 14. Replacement / Migration
When one product replaces another, capture when applicable:
- predecessor;
- successor;
- effective date;
- eligible transaction types;
- installed-base treatment;
- renewal/amendment behavior.

# 15. Governance
Clarify:
- who creates;
- who enriches;
- who validates;
- who approves;
- who publishes;
- who owns data quality;
- who owns downstream mapping;
- who resolves defects.

Do not infer organization-specific ownership.

# 16. Dependency Analysis
Before catalog change assess impact on:
**Configuration → Pricing → Quote → Approval → Order → Fulfillment → Billing → Subscription/Asset → Amendment/Renewal → Reporting**

See `../analysis/dependency-analysis.md`.
