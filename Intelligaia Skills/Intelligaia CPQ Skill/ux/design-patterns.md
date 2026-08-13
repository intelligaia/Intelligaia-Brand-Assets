# CPQ Future-State Design Patterns

All patterns below are **Proposed patterns**, not claims about an existing implementation.

## 1. Context Header
Persistent business context:
customer → deal → transaction → quote/version → state → owner.

Use when orientation loss is evidenced.

## 2. Resume Current Work
Detect eligible active transaction and offer resume before creating new work.

Requires reliable identity/currentness rules.

## 3. Guided Step / Task Model
Organize complex work around meaningful business stages while allowing expert navigation where safe.

## 4. Progressive Configuration
Reveal only relevant product options/dependencies based on current selections and authoritative rules.

## 5. Inline Validation
Show correctable issues near affected inputs/components before downstream submission.

## 6. Validation Summary
Aggregate unresolved issues and link users to the affected line/section.

## 7. Commercial Change Explanation
After recalculation, identify material changed dimensions and supported cause.

## 8. Explicit Commercial Summary
Use unambiguous labels for commercial measures rather than generic “Total.”

## 9. Version Delta
Compare two quote versions by changed product, quantity, configuration, price/discount, dates/term and approval state.

## 10. Approval Readiness Panel
Summarize approval drivers, version, rationale requirements and blockers before submission.

## 11. Approval Decision Summary
Give approvers decision-relevant commercial context and exact version identity.

## 12. State Timeline
Show meaningful business events:
created → priced → submitted → approved → accepted → ordered → downstream/lifecycle events.

## 13. Processing State
For asynchronous work show business progress rather than indefinite spinner.

## 14. Partial-Completion View
Group completed, pending and failed components with safe next action.

## 15. Error Recovery Panel
Explain:
what happened → affected scope → preserved state → safe action → owner/support reference.

## 16. Current / Delta / Result
For amendments:
current subscription → requested change → resulting state.

## 17. Renewal Comparison
Current term vs proposed next term with product, quantity, commercial, date and status deltas.

## 18. Pending-Change Banner
Expose relevant future/pending lifecycle changes before another transaction starts.

## 19. Partner Role Context
Clearly distinguish partner/distributor/customer/payer roles and commercial visibility.

## 20. Large-Quote Tools
Potential patterns:
search → filter → hierarchy → multi-select → bulk edit → validation → change summary.

Use only where user/volume evidence supports need.

## 21. Role-Based Workspace
Adapt information/action priority for seller, approver, partner, operations and other roles while preserving shared business truth.

## 22. Cross-System Deep Link
Open the correct authorized target transaction while retaining return/context.

## 23. Status Notification
Notify on meaningful state changes requiring awareness/action; avoid technical-event noise.

## 24. Explainable Recommendation
If recommendation logic is introduced, show relevant reason/context and require user confirmation for material commercial decisions.

## Pattern Selection Rule
Choose patterns only after validating:
finding → root cause → user/business outcome → architecture dependency → security/policy → measurable success.

## Guardrail
Patterns are design options. They do not imply technical feasibility or current platform support.
