# Configuration — Requirement & Acceptance Patterns

## Purpose
Provide reusable vendor-neutral configuration requirement patterns. These are starting points, not customer requirements until validated.

# 1. Required Options

## Story Pattern
As a seller, I want required components to be automatically identified so that I can create a complete configuration.

## Acceptance Pattern
Given a product/bundle with a validated required-component rule, when it is configured, then the required component is included or clearly required according to the approved rule.

# 2. Dependency

## Story Pattern
As a seller, I want dependent selections to be enforced so that I do not create an invalid solution.

## Acceptance Pattern
Given selection A requires B, when A is selected without B, then the system should automatically include B or provide blocking guidance according to the defined business rule.

# 3. Exclusion / Compatibility

## Story Pattern
As a seller, I want incompatible choices prevented or clearly flagged so that invalid combinations do not progress.

## Acceptance Pattern
Given an evidenced incompatibility, when conflicting selections are made, then the defined rule prevents progression or provides the approved corrective behavior.

# 4. Cardinality

## Story Pattern
As a seller, I want option selection limits enforced so that bundle composition remains valid.

## Acceptance Pattern
The configured minimum/maximum/exact selection rule is evaluated before configuration is considered valid.

# 5. Attribute Validation

## Story Pattern
As a seller, I want only valid attribute values accepted so that the resulting configuration can be priced and fulfilled correctly.

## Acceptance Pattern
Allowed values, required behavior, dependencies, and downstream-required conditions follow the validated attribute rules.

# 6. Guided Selling

## Story Pattern
As a seller, I want guidance based on customer needs so that I can identify suitable offerings without memorizing the catalog.

## Acceptance Pattern
Given defined guided-selling inputs, the system returns candidate offerings according to approved logic and still subjects the selected result to standard configuration validation.

# 7. Actionable Error

## Story Pattern
As a seller, I want configuration errors to explain what must be corrected so that I can resolve issues without unnecessary expert support.

## Acceptance Pattern
A blocking error identifies:
- affected selection;
- violated condition in understandable language;
- corrective action where determinable;
- whether progression is blocked.

# 8. Reconfiguration

## Story Pattern
As a seller, I want to modify an existing quote configuration while preserving unaffected selections so that customer changes do not require unnecessary rework.

## Acceptance Pattern
When a valid change occurs, dependent rules are re-evaluated and unaffected valid selections remain unless a defined rule requires change.

# 9. Clone Validation

## Story Pattern
As a seller, I want copied configurations revalidated against current rules so that obsolete selections are not silently reused.

## Acceptance Pattern
On clone/copy, current applicable catalog, eligibility, effective-date, and configuration rules are evaluated before the configuration progresses.

# 10. Installed-Base Change

## Story Pattern
As a renewal/customer-success seller, I want to configure changes from the customer's active products so that amendments and renewals preserve lifecycle context.

## Acceptance Pattern
The configuration references authoritative active state, identifies permitted changes, preserves source lifecycle identifiers, and validates the resulting state.

# 11. Downstream Fidelity

## Story Pattern
As an order/fulfillment user, I want accepted configuration details preserved downstream so that the purchased solution can be executed accurately.

## Acceptance Pattern
Required product/component relationships, quantities, attributes, dates, and identifiers are transferred or explicitly transformed according to the approved integration design.

# 12. Repricing Trigger

## Story Pattern
As a seller, I want pricing to recalculate when a price-driving configuration input changes so that commercial values remain consistent.

## Acceptance Pattern
When an input defined as price-driving changes, pricing is re-evaluated according to the pricing capability.

# 13. Reapproval Trigger
Configuration changes may require approval re-evaluation when they alter governed commercial conditions.

The exact trigger belongs to approval policy and must not be invented.

# Guardrail
Do not invent:
- rule syntax;
- field names;
- exact platform behavior;
- approval thresholds;
- option IDs;
- customer-specific compatibility;
- pricing formulas;
- lifecycle permissions.

Mark missing rules as **Unknown / Validation Needed**.
