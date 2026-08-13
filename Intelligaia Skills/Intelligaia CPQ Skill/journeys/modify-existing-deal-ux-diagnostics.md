# Modify Existing Deal — UX, Diagnostics & KPIs

## Seller Experience
The user should not need to know system architecture to choose the right transaction type. The experience should explain:
- current deal/lifecycle state;
- what can still be edited;
- what requires a new revision/change transaction;
- expected effective date;
- commercial impact;
- approval/reacceptance impact;
- downstream execution status.

## Before / After View
For material changes, show:
**Current State | Requested Change | Resulting State**
across product, quantity, configuration, dates, price/discount and relevant terms.

## Diagnostic Questions
- Do sellers edit the wrong transaction because state is unclear?
- Are accepted quotes overwritten?
- How often are orders cancelled/rebooked?
- Which changes cause unexpected reapproval?
- Are active subscriptions changed from stale quotes?
- Are effective dates and proration manually calculated?
- Are partially fulfilled orders difficult to modify?
- Can support explain why a change was routed to amendment vs renewal?
- Can users trace original and replacement transactions?

## State-Routing Diagnostic
**Requested Change → Current State → Expected Route → Actual Route → Manual Override → Reason → Impact → Evidence**

## Version Diagnostic
**Original Version → Approval → Proposal → Acceptance → Change → Revised Version → Reapproval/Reacceptance → Downstream Source → Evidence**

## Partial-Execution Diagnostic
**Order Components → Completed/Pending/Failed → Requested Change → Allowed Action → Compensation/Replacement → Result → Evidence**

## Common Failure Patterns
Treat as hypotheses:
- “edit” button available after point of no return;
- seller duplicates quote to make uncontrolled correction;
- original acceptance lost;
- approval remains green after price change;
- replacement order not linked to cancelled order;
- amendment and renewal overlap;
- future change invisible;
- billing continues from original state;
- operations manually compare before/after values.

## KPI Examples
Change cycle time; revisions per accepted deal; reapproval rate; reacceptance rate; cancellation/rebook rate; change-order failure; amendment routing errors; duplicate execution incidents; downstream reconciliation exceptions; manual touches.

Do not invent targets.

## Opportunity Patterns
State-aware action guidance, before/after comparison, impact preview, automated routing, version lineage, reapproval/reacceptance explanation, partial-execution visualization and downstream reconciliation.

Apply `../foundations/source-provenance.md`.
