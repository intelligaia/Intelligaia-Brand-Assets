# Pricing — Rules, Data & Dependencies

## Purpose
Define pricing concepts, rule dimensions, calculation concerns, and governance.

# 1. Pricing Context
Potential inputs:
product/offer, configuration, quantity, customer, contract, channel, geography, currency, term, effective date, transaction type, subscription/asset context.

Only use dimensions supported by requirements.

# 2. Reference / Base / List Price
Organizations may use these terms differently.

The pricing model must identify:
- starting price;
- source;
- currency;
- unit;
- effective dates;
- context.

# 3. Unit Price
Price per defined unit.

The unit may be item, user, device, capacity, month, year, usage unit, or another business-defined basis.

# 4. Extended Price
Calculated value across quantity or another pricing basis.

Do not assume a universal formula when tier/block models apply.

# 5. Net Price
Resulting commercial price after applicable pricing adjustments and discounts according to the defined waterfall.

# 6. Price Waterfall
Conceptually records progression from starting/reference price through automatic/manual adjustments to resulting price.

The exact waterfall sequence must be evidenced.

# 7. Price List
A governed set of applicable prices.

Key dimensions may include currency, market, channel, date, customer class, or product.

# 8. Effective Dating
Validate:
- price start/end date;
- transaction pricing date;
- in-flight quote behavior;
- amendment/renewal behavior;
- overlapping price records.

# 9. Currency
Determine:
- transaction currency;
- price-list currency;
- conversion behavior if any;
- exchange-rate source/date if applicable;
- rounding.

Do not invent FX rules.

# 10. Quantity / Tier Rule
Define:
- quantity basis;
- thresholds;
- tier method;
- boundary behavior;
- unit/extended calculation;
- rounding.

# 11. Attribute-Based Rule
Define which attribute/value drives which price effect and whether the effect is additive, substitutive, multiplicative, or another approved model.

# 12. Term Rule
Define term basis, eligible durations, rate/amount impact, and partial-term treatment.

# 13. Customer-Specific Pricing
Define:
- eligible customer/account/contract;
- product scope;
- price/rule;
- effective dates;
- priority relative to standard price.

# 14. Channel Rule
Define channel/partner eligibility and price effect.

# 15. Promotion
Define eligibility, effective period, product/customer/channel scope, calculation, stacking behavior, and governance.

# 16. Charge Type
Conceptually distinguish:
- one-time;
- recurring;
- usage;
- other approved types.

# 17. Pricing Frequency
For recurring charges define pricing/billing frequency semantics separately when necessary.

# 18. Proration Rule
Define:
- triggering condition;
- period basis;
- convention;
- rounding;
- exclusions.

# 19. Ramp Period
Represent start/end, quantity, price/rate, and other period-specific commercial values.

# 20. Uplift / Index
Define base value, rate/index, effective date, compounding/rounding behavior, and applicable lifecycle event.

# 21. Price Override
Capture original calculated price, override value, reason, actor, timestamp, approval/governance state.

# 22. Repricing Trigger
Maintain explicit mapping of price-driving inputs to recalculation behavior.

# 23. Calculation Precision / Rounding
Define precision at relevant stages:
unit, line, period, quote total, tax/billing handoff where applicable.

Do not invent rounding rules.

# 24. Price History
Preserve enough context to explain:
- what price was quoted;
- which rule/source produced it;
- which version was accepted;
- what changed on reprice;
- what moved downstream.

# 25. Pricing Governance
For material rules identify:
**Business Owner → Rule Purpose → Inputs → Formula/Outcome → Priority → Effective Date → Exceptions → Test Coverage → Change Process**

# 26. Dependencies
Pricing depends on catalog/configuration and can affect:
**Discounting → Approval → Quote → Agreement → Order → Billing → Subscription → Amendment/Renewal → Reporting**

# 27. Data Quality Risks
Potential hypotheses:
- missing/overlapping prices;
- wrong currency;
- stale customer price;
- conflicting rules;
- incorrect tier boundaries;
- ungoverned overrides;
- inconsistent rounding;
- price lost/changed downstream.

Validate before asserting.
