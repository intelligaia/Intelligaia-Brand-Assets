# Product Catalog — Requirement & Acceptance Patterns

## Purpose
Provide reusable vendor-neutral requirement patterns. They are starting points, not customer requirements until validated.

# 1. Product Discovery

## Story Pattern
As a seller, I want to find relevant sellable products using meaningful search/filter criteria so that I can build a quote without memorizing product codes.

## Acceptance Pattern
- Search returns products the user is permitted to discover.
- Results distinguish relevant product/offer identity.
- Ineligible/retired behavior follows validated business rules.
- No specific search algorithm should be assumed without requirements.

# 2. Eligibility

## Story Pattern
As a seller, I want the catalog to apply applicable eligibility rules so that I do not propose products that cannot be sold in the transaction context.

## Acceptance Pattern
Given a validated eligibility dimension, when transaction context is evaluated, then the system should allow, restrict, or explain the product according to the defined rule.

Unknown dimensions/rules must be validated.

# 3. Effective Dating

## Story Pattern
As Catalog Operations, I want product availability to honor effective dates so that products become sellable or unavailable at the intended time.

## Acceptance Pattern
- Product availability evaluates the defined business date.
- Boundary-date behavior is explicit.
- Existing transaction/lifecycle behavior is defined separately from new selling.

# 4. Bundle Integrity

## Story Pattern
As Catalog Operations, I want bundle structure to be validated before publication so that sellers cannot receive incomplete or contradictory options.

## Acceptance Pattern
Validate required components, option relationships, cardinality, effective dates, and other evidenced bundle rules before publication.

# 5. Commercial Readiness

## Story Pattern
As Product/Catalog Operations, I want a readiness check before product activation so that required configuration, pricing, and downstream information is complete.

## Acceptance Pattern
- Required readiness dimensions are configurable/defined by product type where needed.
- Failed checks identify missing information.
- Publication is governed according to validated policy.

# 6. Downstream Mapping

## Story Pattern
As Order/Integration Operations, I want sellable catalog items to have required downstream mappings so that accepted quotes can execute without avoidable mapping failures.

## Acceptance Pattern
For product types requiring a target mapping, publication or transaction progression should validate the mapping according to the agreed control point.

# 7. Product Retirement

## Story Pattern
As Catalog Operations, I want to retire products without losing historical and installed-base context so that existing customer lifecycle transactions remain understandable.

## Acceptance Pattern
- New-sale behavior follows end-of-sale policy.
- Historical transactions remain traceable.
- Amendment/renewal treatment is explicitly defined.
- Replacement behavior is applied only when configured/approved.

# 8. Catalog Change Impact

## Story Pattern
As a catalog administrator, I want to understand dependencies before publishing a change so that I can assess downstream risk.

## Acceptance Pattern
Where dependency metadata exists, the system/process identifies affected configuration, pricing, integration, or lifecycle relationships before release.

# 9. Auditability

## Story Pattern
As a governance owner, I want material catalog changes to be traceable so that I can understand who changed what and when.

## Acceptance Pattern
Audit requirements define the fields/events that must retain actor, timestamp, prior/new value, and release/effective context.

# 10. Error Pattern
Catalog validation errors should state:
**What failed → Why → Affected item/context → Required correction/owner → Whether progression is blocked**

# Guardrail
Do not invent:
- field names;
- thresholds;
- approval roles;
- exact statuses;
- API behavior;
- customer-specific eligibility;
- platform limitations.

Mark missing business rules as **Unknown / Validation Needed**.
