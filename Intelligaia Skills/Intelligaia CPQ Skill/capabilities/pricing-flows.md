# Pricing — Flows

## Purpose
Define vendor-neutral pricing and repricing flows.

# 1. Initial Pricing

## Trigger
A valid or sufficiently complete configuration requires commercial pricing.

## Flow
1. Establish transaction/customer context.
2. Establish currency.
3. Establish business/effective date.
4. Identify applicable price list/reference source.
5. Identify product/offer/charge.
6. Retrieve applicable reference/base/list price.
7. Evaluate configuration-driven pricing inputs.
8. Evaluate quantity/tier/volume rules.
9. Evaluate term/duration rules.
10. Evaluate customer/contract-specific rules where applicable.
11. Evaluate channel/market rules where applicable.
12. Evaluate automatic adjustments/promotions where applicable.
13. Calculate unit price.
14. Calculate extended/period values.
15. Calculate recurring/one-time/usage components where applicable.
16. Apply proration/time-phasing where applicable.
17. Aggregate line/quote pricing.
18. Validate result.
19. expose price explanation.
20. Pass result to discounting/quote progression.

# 2. Repricing

## Trigger
A price-driving input changes.

Potential triggers:
- product/option;
- quantity;
- attribute;
- term/date;
- customer;
- channel;
- currency;
- pricing context;
- amendment/renewal state.

## Flow
Detect change → identify affected price components → rerun applicable rules → recalculate → identify material differences → preserve history where required → re-evaluate downstream discount/approval state.

## Control
Do not silently preserve stale price when an input defined as price-driving changes.

# 3. Quantity / Volume Pricing

## Flow
Determine eligible quantity basis → identify applicable tier/volume rule → calculate applicable unit/range price → calculate extended price → validate boundaries.

## Validation
Explicitly define whether tiers are:
- all-units;
- graduated;
- block/package;
- another approved model.

Do not infer the model.

# 4. Attribute-Based Pricing
Configuration attribute changes → identify price-driving attribute → select/calculate applicable price → recalculate dependent line values → validate.

# 5. Term-Based Pricing
Establish term/duration → evaluate applicable term rule → calculate rate/amount → account for partial periods where defined → validate dates.

# 6. Customer / Contract-Specific Pricing
Identify customer/contract → validate applicability/effective dates → select agreed price/rule → calculate → expose source/context → fall back according to approved policy if not applicable.

# 7. Channel Pricing
Establish channel/partner context → validate authorization/applicability → select channel-specific price/rule → calculate → preserve end-customer context where required.

# 8. Recurring Pricing
Identify recurring charge → frequency → start/end/term → calculate period rate and applicable total/contract value measures according to defined business semantics.

Do not assume ARR/ACV/TCV formulas without evidence.

# 9. One-Time Pricing
Identify one-time charge → quantity/basis → calculate amount → determine applicable billing/effective context.

# 10. Usage-Based Pricing
Identify usage metric → rate/tier model → commitment/minimum where applicable → calculate modeled/quoted commercial value according to policy.

Actual billed usage may occur downstream and differ from quoted estimates.

# 11. Proration
Identify partial period → determine approved proration convention → calculate applicable fraction/value → round according to policy → validate.

Never invent day-count convention.

# 12. Ramp / Time-Phased Pricing
Define periods → effective dates → quantity/product/price by period → calculate each period → aggregate appropriate commercial metrics → preserve period structure downstream.

# 13. Renewal Pricing
Retrieve eligible existing commercial context → apply contractual/policy renewal rule → uplift/index/reprice as applicable → calculate → validate against renewal term and effective date.

Detailed renewal process belongs in `renewals.md`.

# 14. Price Override
Calculated price → authorized override request → validate permissions/reason → apply governed override → trigger discount/approval handling where applicable → preserve audit.

# 15. Price-to-Order Handoff
Accepted quote pricing → order transformation → preserve/transform price components according to approved architecture → validate quote-to-order fidelity → pass billing-relevant charge context downstream.

# Flow Depth
These are L2/L3 vendor-neutral flows. Exact calculation engine sequencing and platform behavior belong in platform modules.
