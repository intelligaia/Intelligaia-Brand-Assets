# Pricing — UX, Diagnostics & KPIs

## Purpose
Define pricing experience principles, failure patterns, diagnostic questions, and measures.

# 1. Seller UX
A healthy pricing experience should:
- calculate without unnecessary manual steps;
- make the current commercial value clear;
- explain meaningful changes;
- distinguish price from discount;
- identify when repricing occurred;
- show relevant term/quantity effects;
- avoid unexplained resets;
- preserve confidence in totals.

## Diagnostic Questions
- Do sellers understand how the price was derived?
- Which prices require manual lookup?
- Are spreadsheets used for calculations?
- When do users manually override price?
- Does changing configuration reliably reprice?
- Are customer-specific prices easy to identify?
- Are recurring/one-time charges understandable?
- Are price changes between revisions explainable?

# 2. Pricing / Deal Desk UX
Needs may include:
- price waterfall;
- source/reference price;
- automatic adjustments;
- customer/contract price context;
- quantity/term effect;
- override history;
- comparison across revisions;
- exception visibility.

# 3. Common Failure Patterns
Use as hypotheses until evidenced:
- manual spreadsheet pricing;
- inconsistent price across channels;
- stale price on cloned quote;
- missing customer-specific price;
- unexplained repricing;
- price does not recalculate after configuration change;
- overlapping effective-dated prices;
- wrong currency;
- tier boundary error;
- recurring totals misunderstood;
- manual proration;
- override used to bypass pricing defect;
- quote/order/billing price mismatch.

# 4. Root-Cause Categories
Potential causes:
pricing policy, rule design, catalog data, configuration input, effective dating, currency, integration, UX/explanation, governance, platform configuration.

# 5. Impact Categories
Potential impacts:
quote cycle, seller trust, discount error, margin/commercial leakage where evidenced, approval churn, order/billing correction, customer dispute, reporting inconsistency.

# 6. KPI Framework
| Area | Example measure |
|---|---|
| Automation | percentage priced without manual calculation |
| Quality | pricing defect/error rate |
| Rework | repricing/manual correction |
| Overrides | override frequency/reason |
| Support | pricing-related Deal Desk/support touches |
| Speed | pricing calculation/decision time |
| Downstream | quote-order-billing price discrepancies |
| Governance | expired/overlapping price exceptions |

Do not invent targets.

# 7. Price Diagnostic
Capture:
**Transaction → Product/Configuration → Pricing Context → Reference Price → Rules Applied → Result → Expected Result → Difference → Workaround → Downstream Impact → Evidence**

# 8. Repricing Diagnostic
Capture:
**Changed Input → Expected Trigger → Actual Trigger → Price Before → Price After → Discount/Approval Impact → Version/History → Evidence**

# 9. Pricing Rule Diagnostic
Capture:
**Rule Purpose → Eligibility → Inputs → Calculation → Priority → Effective Dates → Rounding → Expected Outcome → Actual Outcome → Evidence**

# 10. UX Opportunities
Evidence may support:
- price explanation;
- visible waterfall;
- scenario comparison;
- clear recurring/one-time separation;
- proactive repricing notice;
- customer-price visibility;
- pricing error guidance;
- revision comparison.

These remain Proposed until validated.

# 11. Evidence Sources
Useful evidence:
pricing rules/tables, quote samples, user research, Deal Desk notes, spreadsheets, analytics, order/billing discrepancies, customer-specific agreements, historical case studies.

Apply `../foundations/source-provenance.md`.
