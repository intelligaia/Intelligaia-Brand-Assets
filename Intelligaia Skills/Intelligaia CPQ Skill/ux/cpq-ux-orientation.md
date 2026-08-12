# CPQ UX — Orientation, State & Navigation

## 1. Transaction Orientation
Always help the user identify:
customer → deal/opportunity → transaction type → quote → version → current stage/status → owner → next action.

Not every role needs every field, but the current commercial context should not be ambiguous.

## 2. Current Version
When multiple revisions exist:
show which version is current → which version is approved/accepted → whether a newer draft exists → what downstream action used which version.

## 3. State Language
Prefer business states users can act on:
draft; needs configuration; pricing pending; approval required; awaiting customer; accepted; order processing; downstream exception.

Exact status labels are platform-specific.

## 4. Next-Best Action
The interface should answer:
**What can I do now? What must happen first? Who owns the blocker?**

## 5. Navigation
Support task continuity:
return to customer/deal → resume current quote → reach required configuration/commercial detail → reach approval/exception → return without losing context.

## 6. Cross-System Navigation
If work spans systems, preserve:
business context → intended target transaction → authorization → return path → status continuity.

Avoid forcing users to search again for the same transaction.

## 7. Context Reuse
Reuse authoritative customer, opportunity, partner, product, commercial and lifecycle context where valid.

Do not make the user re-enter data simply because system boundaries exist.

## 8. Data Provenance
When a value is read-only or surprising, users may need to know its business source:
CRM; catalog; pricing; approval; subscription; billing; partner data.

Expose source meaning only where it aids action/trust.

## 9. Freshness
For replicated/asynchronous data, indicate stale/pending state where a decision depends on freshness.

## 10. Current vs Pending
For lifecycle work distinguish:
current effective state → proposed change → approved future change → pending downstream execution → future resulting state.

## 11. Progress
For multi-step processes, show meaningful business stages rather than a generic spinner.

## 12. Resume
Returning users should resume the intended transaction/version and see what changed since their last action.

## 13. Deep Links
If deep links are used, they should resolve to the correct authorized business context, not merely a generic platform home page.

## 14. Multi-Quote Context
If several quotes can exist for a deal, make primary/current/superseded semantics explicit.

## 15. Comparison
When users choose between versions/options, show decision-relevant differences rather than requiring manual visual scanning.

## 16. Role Relevance
Seller, approver, operations, partner and billing users may require different orientation. Preserve one business truth while adapting presentation/action.

## Evaluation Questions
- Can a user identify the current transaction/version in seconds?
- Can they tell why they cannot proceed?
- Can they resume without creating a duplicate?
- Can they distinguish current and future lifecycle state?
- Can they tell which system/role owns the next action?
- Can they navigate away and return without reconstructing context?

## Guardrail
Do not claim current customer/platform navigation, statuses, deep-link behavior or measured usability performance without evidence.
