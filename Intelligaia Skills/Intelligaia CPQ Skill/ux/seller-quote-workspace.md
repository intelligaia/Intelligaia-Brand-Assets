# Seller Experience — Quote Workspace

## Purpose
Describe the information architecture and interaction model a seller needs while building and revising a commercial proposal.

## 1. Workspace Orientation
Keep visible or readily accessible:
customer/deal → quote → version → transaction type → status → owner → currency → effective/validity context.

## 2. Product Structure
Represent bundles, parent/child products, options and dependencies in a way that preserves solution meaning.

## 3. Line Editing
Common seller tasks may include:
add/remove → quantity → configuration → dates/term → permitted price/discount inputs → notes/rationale.

Actual editable fields are implementation-specific.

## 4. Progressive Detail
Default view should support selling decisions. Reveal advanced attributes, technical configuration, pricing detail or audit history when needed.

## 5. Bulk Work
Where seller volume warrants it, consider:
multi-select → bulk quantity/date/discount action → validation → preview → apply.

Future-state capability must be evidence-driven.

## 6. Search & Filter
For large quotes, support locating lines by relevant product/category/status/error/change dimension.

## 7. Validation
Show:
line issue → affected component → reason → correction.

Provide quote-level summary linking to each issue.

## 8. Pricing State
Distinguish:
not priced → pricing → current → stale/recalculation required → error.

## 9. Commercial Summary
Use explicit labels for:
gross/list/reference → discount/adjustment → net → recurring → one-time → term value → other approved measures.

Do not invent which measures exist.

## 10. Change Explanation
When totals change, help the seller identify whether the cause was:
product/configuration → quantity → date/term → pricing rule → discount → currency → customer/partner context.

## 11. Version Comparison
Show material differences between versions:
products → quantities → configuration → price/discount → dates/term → totals → approval status.

## 12. Save
Differentiate save from validate, price, submit approval, generate proposal and commit/order.

## 13. Autosave
If used, autosave should not silently trigger irreversible commercial actions.

## 14. Undo / Recovery
For reversible editing, help sellers recover from accidental changes where architecture supports it.

## 15. Approval Impact
Before a change invalidates approval, warn the seller where feasible.

## 16. Customer Artifact
The proposal/document should identify the source commercial version and reflect the intended approved values.

## 17. Read-Only State
Accepted/ordered/superseded versions should have clear edit restrictions and a governed path for revision/change.

## 18. Collaboration
If multiple roles edit the quote, expose ownership/currentness sufficiently to reduce overwrite/conflict.

## 19. Accessibility
Use labels, structure, focus/order and error presentation that do not depend solely on color or hover.

## Evaluation Questions
- Can a seller locate an invalid line quickly?
- Can they understand the total?
- Can they identify stale pricing?
- Can they compare revisions?
- Can they tell whether a change will affect approval?
- Can they distinguish editable draft from accepted/ordered state?

## Guardrail
Do not invent current workspace layouts, editable fields, totals, bulk actions, autosave or collaboration behavior.
