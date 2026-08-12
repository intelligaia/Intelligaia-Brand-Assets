# Amendment Journey — Detailed Flows

## 1. Request Intake
1. Identify customer/account.
2. Capture requested change and reason.
3. Identify desired timing/effective date.
4. Determine affected subscription/product where known.
5. Determine whether the request is in-term, renewal-time, cancellation, or correction.
6. Route non-amendment requests to the appropriate journey.

## 2. Retrieve Authoritative Installed Base
1. Retrieve authoritative subscription/installed-base state.
2. Identify active products/components.
3. Retrieve quantities and lifecycle-relevant configuration.
4. Retrieve term/start/end dates.
5. Retrieve commercial references required for amendment pricing.
6. Retrieve pending/future changes.
7. Retrieve billing/entitlement references where required.
8. establish source version/state.

## 3. Amendment Eligibility
Evaluate:
- subscription state;
- product lifecycle eligibility;
- allowed change type;
- contractual/term conditions;
- dependency constraints;
- pending-change conflicts;
- effective-date policy.

If not eligible, explain the governed alternative rather than forcing an amendment.

## 4. Establish Effective Date
Capture requested date → validate against current date, term, billing period, product/service constraints and policy → determine allowed effective date → expose impact.

## 5. Build Before / After State
Create explicit views of:
**Current State → Requested Delta → Expected Resulting State**

Include applicable product, quantity, configuration, term/date and commercial dimensions.

## 6. Add Product
Select eligible product → configure → determine co-term/term treatment → establish effective date → calculate incremental commercial effect → validate → approve where required.

## 7. Increase Quantity
Select active product → capture increase/resulting quantity → validate capacity/dependencies → calculate effective-dated delta → update resulting state.

## 8. Decrease Quantity
Capture reduction → validate minimum/commitment/product rules → calculate decremental effect according to policy → identify entitlement/billing implications → approve where required.

## 9. Remove Product
Select product/component → evaluate dependent products/services → determine effective removal date → calculate commercial/credit effect according to policy → identify downstream revoke/stop actions.

## 10. Upgrade / Downgrade
Identify source product → select approved target/migration path → map configuration and quantity → determine effective date → calculate source-to-target commercial delta → validate resulting solution.

## 11. Configuration Change
Modify permitted attributes/options → re-run compatibility/dependency rules → identify price-driving changes → calculate delta → update resulting configuration.

## 12. Future-Dated Amendment
Preserve current active state → create pending future delta/resulting state → expose pending change to subsequent lifecycle transactions → schedule execution according to architecture.

## 13. Co-Term Addition
Identify target term/end date → validate co-term eligibility → calculate approved partial-term commercial treatment → align resulting product dates.

## 14. Pricing / Proration
Use authoritative source commercial context + requested delta + effective date → determine approved pricing basis → calculate incremental/decremental amount → apply evidenced proration/credit treatment → preserve explanation.

## 15. Discounting
Determine whether discount applies to incremental/new commercial value → evaluate carry-forward/new discount rules → capture discretionary request → evaluate authority.

## 16. Validation
Validate:
source state → change eligibility → resulting configuration → quantities → dates → pricing/proration → discount → downstream-required data.

## 17. Approval
Evaluate approval triggers → create decision context showing before/after and commercial impact → route → capture decision → revise/resubmit if required.

## 18. Amendment Quote
Create customer-facing amendment quote/proposal from the current governed version → clearly represent change and resulting commercial impact → preserve source subscription and version lineage.

## 19. Negotiation / Revision
Customer requests change → modify delta/effective date/configuration/commercial terms → recalculate → revalidate → reapprove where required → regenerate proposal.

## 20. Acceptance
Capture exact accepted amendment quote/version and required evidence → confirm approvals remain valid → establish change-order readiness.

## 21. Change Order
Transform accepted amendment into executable order/change order → preserve source subscription/product and amendment quote lineage → create affected components → validate → submit.

## 22. Fulfillment / Provisioning Change
Execute add/change/remove/migration tasks → respect dependencies → handle partial failure/holds/retries → preserve downstream references.

## 23. Subscription Update
Apply effective-dated resulting state → preserve prior state → update products, quantities, configuration, dates and lifecycle references → retain pending future state where applicable.

## 24. Billing Adjustment
Create/update/stop charges → apply approved proration/credit/adjustment behavior → update future billing schedule → preserve amendment linkage.

## 25. Entitlement Adjustment
Create/update/revoke entitlements according to resulting product state and effective date.

## 26. Concurrent Amendment
If another pending/in-flight change exists, apply approved block/sequence/rebase/merge policy. Never silently calculate from stale state.

## 27. Failure / Recovery
Detect failure → identify authoritative current state and completed components → determine retry/correction/compensation path → prevent duplicate execution → reconcile.

## 28. End-to-End Reconciliation
Compare:
**Source Subscription + Accepted Delta → Change Order → Fulfillment → Resulting Subscription → Billing → Entitlements**

Flag unexplained differences.

## Flow Depth
L2/L3 vendor-neutral. Exact platform amendment objects, API calls, proration engines, statuses, and execution workflows belong in platform/integration modules.
