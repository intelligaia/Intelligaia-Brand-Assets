# Amendment Journey — UX, Diagnostics & KPIs

## Seller / Customer Success Experience
A strong amendment experience should answer:
- What does the customer have now?
- What can be changed?
- What is already scheduled to change?
- When can this change take effect?
- What exactly is being added/removed/changed?
- What will the customer have afterward?
- What is the commercial impact?
- Why is there a prorated charge/credit?
- Is approval required?
- What happens downstream after acceptance?

## Before / After Pattern
Prefer an explicit comparison:
**Current → Change → Resulting**
rather than presenting only amendment line items.

## Timeline Pattern
For effective-dated/future changes show:
**Today → Current State → Requested Effective Date → Pending State → Term/Renewal Boundary**

## Diagnostic Questions
- Do users trust the installed base?
- Are pending changes visible?
- Is delta vs resulting quantity clear?
- Can users explain proration?
- Are upgrade paths discoverable?
- Do removals reveal dependencies?
- How often are amendments recalculated manually?
- Which amendment types create billing disputes?
- Are changes effective on the intended date?
- Can operations reconcile subscription and billing?

## Amendment Journey Diagnostic
**Request → Source State → Eligibility → Effective Date → Delta → Resulting State → Pricing/Proration → Approval → Acceptance → Order → Subscription → Billing/Entitlement → Evidence**

## Before/After Diagnostic
**Dimension → Current → Requested Change → Expected Result → Actual Result → Difference → Cause → Evidence**

## Proration Diagnostic
**Effective Date → Period → Pricing Basis → Convention → Expected Charge/Credit → Actual Billing → Difference → Evidence**

## Concurrency Diagnostic
**Current State → Pending Change A → New Change B → Baseline Used → Policy → Result → Conflict/Error → Evidence**

## Common Failure Patterns
Treat as hypotheses:
- seller works from an old quote;
- pending future change is invisible;
- delta mistaken for final quantity;
- effective date defaults incorrectly;
- spreadsheet proration;
- product removed while dependency remains;
- upgrade leaves old and new products active;
- approval sees only discount, not lifecycle impact;
- accepted amendment differs from change order;
- subscription updates but billing does not;
- entitlement changes on wrong date.

## KPI Examples
Amendment cycle time; manual touches; amendment quote revisions; approval turnaround; proration exceptions; billing adjustments; amendment order fallout; concurrent-change conflicts; effective-date errors; subscription/billing/entitlement reconciliation exceptions.

Do not invent targets.

## Opportunity Patterns
Installed-base workbench, before/after visualization, pending-change timeline, effective-date guidance, migration recommendations, proration explanation, impact preview, concurrency warnings and end-to-end amendment status.

Apply `../foundations/source-provenance.md`.
