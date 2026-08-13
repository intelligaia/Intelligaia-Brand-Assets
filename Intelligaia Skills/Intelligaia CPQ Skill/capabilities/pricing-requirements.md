# Pricing — Requirement & Acceptance Patterns

## Purpose
Provide reusable vendor-neutral pricing requirement patterns. Validate all business rules before treating them as customer requirements.

# 1. Applicable Price

## Story Pattern
As a seller, I want the applicable price selected automatically so that I do not need to determine the correct reference price manually.

## Acceptance Pattern
Given defined pricing context, the system selects the applicable price according to approved product, currency, date, customer/channel, and other relevant rules.

# 2. Repricing

## Story Pattern
As a seller, I want price recalculated when a price-driving input changes so that the quote does not contain stale commercial values.

## Acceptance Pattern
When a configured price-driving input changes, affected prices are recalculated and the resulting value is reflected before progression.

# 3. Quantity Pricing

## Story Pattern
As a seller, I want quantity-based pricing applied consistently so that the price reflects approved volume rules.

## Acceptance Pattern
Given an approved quantity-pricing model, threshold boundaries and calculation method produce the expected unit/extended result.

# 4. Attribute Pricing

## Story Pattern
As a seller, I want price to reflect price-driving configuration attributes so that configured value and commercial value remain aligned.

## Acceptance Pattern
When an approved price-driving attribute changes, the corresponding price rule is re-evaluated.

# 5. Customer-Specific Price

## Story Pattern
As a seller, I want valid customer-specific pricing applied when eligible so that contractual pricing is honored.

## Acceptance Pattern
The price is applied only when customer/product/effective-date conditions are satisfied and its source is traceable.

# 6. Term Pricing

## Story Pattern
As a seller, I want pricing to reflect the selected term so that the quote is commercially consistent with duration.

## Acceptance Pattern
Approved term rules are evaluated using the defined term basis and effective dates.

# 7. Recurring / One-Time Separation

## Story Pattern
As a seller, I want recurring and one-time charges clearly distinguished so that I can understand and communicate the commercial structure.

## Acceptance Pattern
Charge type and applicable frequency/period context are represented according to approved definitions.

# 8. Proration

## Story Pattern
As a lifecycle seller, I want partial-period pricing calculated consistently so that amendments and co-term transactions follow approved policy.

## Acceptance Pattern
Given a proration-triggering scenario, the approved period convention and rounding rules are used.

# 9. Price Explanation

## Story Pattern
As a seller or Deal Desk user, I want to understand the major factors that produced a price so that I can validate and explain it.

## Acceptance Pattern
The solution exposes relevant price source and applied pricing adjustments/rules to the extent required by business policy and user permissions.

# 10. Override Audit

## Story Pattern
As a pricing governance owner, I want price overrides traceable so that exceptions can be reviewed.

## Acceptance Pattern
An override records calculated value, override value, actor, reason, timestamp, and required governance state.

# 11. Effective Dating

## Story Pattern
As Pricing Operations, I want prices to activate/expire according to effective dates so that transactions use the intended commercial price.

## Acceptance Pattern
Boundary behavior and the pricing date used for evaluation are explicitly defined and tested.

# 12. Downstream Fidelity

## Story Pattern
As an order/billing user, I want accepted pricing preserved or explicitly transformed downstream so that execution matches approved commercial intent.

## Acceptance Pattern
Relevant unit/extended/charge/period values and source references are transferred according to approved architecture and reconciliation controls.

# Guardrail
Do not invent:
- price formulas;
- price-list names;
- discount thresholds;
- margin formulas;
- proration convention;
- FX rates;
- rounding;
- ARR/ACV/TCV formulas;
- platform calculation sequence.

Mark missing rules as **Unknown / Validation Needed**.
