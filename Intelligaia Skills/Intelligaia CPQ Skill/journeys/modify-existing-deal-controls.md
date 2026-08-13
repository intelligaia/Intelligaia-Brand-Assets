# Modify Existing Deal — Controls, Data & Governance

## 1. State Before Action
No modification should be selected until the authoritative lifecycle/execution state is known.

## 2. Change Classification
Capture:
**Requested Change → Affected Entity/Line → Current State → Desired State → Effective Timing → Reason → Commercial Impact → Downstream Impact**

## 3. Governed Route
Map transaction state + change type to an approved mechanism:
quote revision, order change, cancellation/rebook, amendment, renewal, cancellation, or correction.

## 4. Baseline Integrity
Use the authoritative current state, not a stale prior quote/document, as the baseline for governed change.

## 5. Version Integrity
Preserve original and revised quote/order/subscription versions/states. Never silently overwrite accepted or executed history.

## 6. Approval Integrity
Re-evaluate approval requirements after changes to price, discount, configuration, quantity, term, customer/party or other evidenced trigger.

## 7. Acceptance Integrity
If customer-agreed content changes, correlate any required reacceptance to the new version.

## 8. Effective-Date Integrity
For executed/active transactions, distinguish request date, change effective date, service date, billing date and lifecycle date.

## 9. Commercial Recalculation
Identify whether change requires repricing, rediscounting, proration, credit/adjustment or other financial recalculation.

## 10. Dependency Control
A changed/removed product may affect dependent configuration, discounts, approvals, fulfillment, entitlements or billing.

## 11. Partial Execution
Never assume an order can be rolled back atomically. Identify completed, pending and failed components.

## 12. Duplicate Prevention
Cancellation/rebook, retry or replacement must prevent unintended duplicate order, fulfillment, subscription and billing execution.

## 13. Correction Governance
Separate data/execution correction from a new customer commercial decision where policy requires.

## 14. Source Lineage
Preserve:
**Original Quote/Version → Revised Quote/Version → Acceptance → Original/Changed Order → Subscription State → Amendment/Renewal/Replacement → Billing**

## 15. Audit
Capture change request, reason, actor/system, prior/new values, effective date, approvals, acceptance and downstream references.

## 16. Reconciliation
Define expected before/after state and compare it to actual downstream state.

## Risks
Potential hypotheses:
editing accepted quote in place; stale baseline; approval reused after material change; customer not reaccepting changed terms; cancellation/rebook duplicates; partial fulfillment ignored; amendment created from old installed base; billing not updated; prior history lost.

Validate before asserting.
