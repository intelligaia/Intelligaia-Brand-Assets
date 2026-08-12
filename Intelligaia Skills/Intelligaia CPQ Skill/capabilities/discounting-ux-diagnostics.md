# Discounting — UX, Diagnostics & KPIs

## Purpose
Define discount experience principles, diagnostic patterns, failure modes, and measures.

# 1. Seller UX
A healthy discount experience should:
- show calculated price before discount;
- distinguish standard vs discretionary discount;
- show user authority where appropriate;
- explain when approval will be required;
- capture reason efficiently;
- expose resulting net price;
- avoid hidden stacking;
- preserve requested discount through approval.

## Diagnostic Questions
- Do sellers know how much discount they can request?
- Can they see why approval is required?
- Are reason codes meaningful?
- Do they use target price, percentage, or spreadsheets to back-solve?
- Are discounts re-entered after quote changes?
- Does repricing unexpectedly change discount?
- Are non-discountable items obvious?
- Can sellers see approval status and approved value?

# 2. Deal Desk / Pricing UX
Needs may include:
- reference/calculated price;
- full discount waterfall;
- cumulative discount;
- customer/history context where authorized;
- floor/threshold visibility;
- requested vs approved value;
- reason/justification;
- revision comparison.

# 3. Approver UX
Approvers need concise context:
**Deal → Price Basis → Requested Discount → Resulting Price → Policy/Threshold → Reason → Prior Decisions/History → Action**

Avoid forcing approvers to reconstruct calculations manually.

# 4. Common Failure Patterns
Use as hypotheses:
- discount entered in spreadsheet then copied;
- unclear discount authority;
- inconsistent threshold behavior;
- excessive approval for standard deals;
- discount reason always generic;
- line and quote discounts double-count;
- stacking is invisible;
- approval based on stale values;
- approved discount lost after reprice;
- manual Deal Desk correction;
- non-discountable item overridden;
- quote/order/billing net price mismatch.

# 5. Root-Cause Categories
Policy complexity, rule design, pricing interaction, permissions, approval design, UX, data, integration, governance, training.

# 6. Impact Categories
Potential impacts:
seller effort, approval cycle, Deal Desk touch, commercial leakage where evidenced, quote revision, order/billing correction, customer negotiation delay, audit weakness.

# 7. KPI Framework
| Area | Example measure |
|---|---|
| Governance | discounts requiring approval |
| Speed | discount approval turnaround |
| Self-service | discounts completed within seller authority |
| Rework | discount changes/reapprovals |
| Quality | invalid/incorrect discount rate |
| Support | discount-related Deal Desk touches |
| Reason quality | requests missing/using fallback reason |
| Downstream | approved-vs-ordered net-price discrepancies |

Do not invent targets.

# 8. Discount Diagnostic
Capture:
**Persona → Quote/Line → Price Basis → Requested Discount → Authority → Threshold/Floor → Approval → Approved Discount → Net Price → Revision/Reprice Impact → Evidence**

# 9. Stacking Diagnostic
Capture:
**Discount A → Discount B → Compatibility → Calculation Order → Expected Effective Discount → Actual Effective Discount → Approval Effect → Evidence**

# 10. Reapproval Diagnostic
Capture:
**Approved Version → Changed Input → Price/Discount Change → Expected Reapproval Rule → Actual Behavior → Risk/Impact → Evidence**

# 11. Opportunity Patterns
Evidence may support:
- visible discount authority;
- proactive approval prediction;
- structured justification;
- waterfall transparency;
- threshold simulation;
- requested-vs-approved comparison;
- reapproval warning;
- discount history;
- policy-aware seller guidance.

These remain Proposed until validated.

# 12. Evidence Sources
Useful sources:
discount policies, approval matrices, quote samples, user research, Deal Desk notes, pricing data, approval history, analytics, order/billing discrepancies, historical case studies.

Apply `../foundations/source-provenance.md`.
