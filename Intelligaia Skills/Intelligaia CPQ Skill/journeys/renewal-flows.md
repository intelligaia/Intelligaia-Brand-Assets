# Renewal Journey — Detailed Flows

## 1. Renewal Identification
1. Evaluate subscriptions/terms against approved renewal trigger/horizon.
2. Confirm renewal eligibility.
3. Identify renewal owner/channel.
4. Determine relevant renewal date and contractual context.
5. Create or schedule renewal work according to process.
6. prevent duplicate renewal transactions.

## 2. Renewal Readiness
Evaluate:
- authoritative subscription availability;
- term/end date;
- products and quantities;
- configuration fidelity;
- pending amendments/future changes;
- product lifecycle/renewability;
- pricing/contract references;
- customer/account readiness;
- billing/entitlement exceptions where relevant;
- required notice/decision context.

## 3. Retrieve Authoritative Baseline
Retrieve current effective subscription → products/components → quantities → configuration → term/dates → lifecycle IDs → commercial references → pending changes → billing/entitlement references.

## 4. Pending-Change Resolution
Determine which pending amendments/future changes will be effective at the renewal boundary → incorporate, sequence, exclude, or otherwise handle according to policy → preserve rationale.

## 5. Determine Renewal Motion
Classify as:
assisted renewal, auto-renew, partial renewal, renewal with changes, migration renewal, consolidated/co-term renewal, non-renewal, or another evidenced motion.

## 6. Construct Renewal Baseline
Apply approved carry-forward rules to source state → identify retained, recalculated, excluded and migrated values → establish proposed next-term state.

## 7. Product Renewability
For each source product:
validate renewable status → identify successor/migration if required → identify discontinued/non-renewed components → preserve source-to-target lineage.

## 8. Product Migration
Source product → approved target → map configuration/quantity → resolve incompatibilities → determine commercial treatment → include target in renewal proposal.

## 9. Renewal with Expansion / Contraction
Start from baseline → add/remove/change products or quantities according to renewal policy → validate resulting configuration → determine expansion/contraction impact.

## 10. Partial Renewal
Identify continuing products/quantities → identify non-renewed scope → calculate resulting next-term state → define end-of-term actions for non-renewed components.

## 11. Co-Term / Consolidated Renewal
Identify eligible subscriptions/terms → determine target renewal structure/date → apply approved alignment rules → build consolidated baseline → preserve each predecessor relationship.

## 12. Renewal Pricing
Determine approved renewal pricing basis → calculate next-term values → apply contractual uplift/index/repricing where applicable → preserve prior vs proposed value explanation.

## 13. Discounting
Determine treatment of prior discounts → apply eligible standard discounts → capture discretionary renewal discount request → evaluate authority and stacking.

## 14. Renewal Validation
Validate:
baseline → product renewability/migration → resulting configuration → quantities → term/dates → pricing/uplift → discount → customer/party → downstream-required data.

## 15. Approval
Evaluate renewal-specific and standard approval triggers → provide prior/current/proposed context → route → capture decision → revise/resubmit as required.

## 16. Renewal Quote / Proposal
Generate from current governed renewal version → show products/quantities, next term, commercial values and relevant changes → preserve source subscription and version/document lineage.

## 17. Negotiation / Revision
Customer requests change → revise products/quantity/term/commercial values → recalculate → revalidate → reapprove where required → regenerate proposal.

## 18. Assisted Renewal Acceptance
Capture exact accepted renewal version and required evidence → validate approval and validity → establish renewal-order readiness.

## 19. Auto-Renew Path
Validate auto-renew eligibility → validate notice/cancellation state → calculate approved next-term state → create required commercial/lifecycle transaction → execute continuation according to architecture → reconcile.

Do not assume auto-renew bypasses quote, order, approval, notification, or billing transactions.

## 20. Non-Renewal / Churn
Capture customer decision/reason according to policy → prevent unintended continuation → establish end-of-term product/billing/entitlement behavior → update renewal pipeline/forecast context → preserve history.

## 21. Renewal Order
Accepted/authorized renewal → create executable order → preserve source subscription/term and renewal quote lineage → transform next-term products/charges → validate → submit.

## 22. Next-Term Subscription
Create/continue/supersede subscription state according to data model → establish new term start/end → preserve predecessor/successor lineage → activate next-term products/charges according to trigger.

## 23. Billing Continuity
Establish renewed charges/rates/quantities/dates → prevent unintended overlap/gap → apply accepted renewal commercial basis → preserve prior/new term correlation.

## 24. Entitlement Continuity
Continue, migrate, change or revoke entitlements based on renewed/non-renewed products and effective boundary.

## 25. Renewal Failure / Recovery
Detect baseline, migration, pricing, approval, order, subscription or billing failure → assign owner → remediate safely → prevent unintended lapse or duplicate renewal → reconcile.

## 26. End-to-End Reconciliation
Compare:
**Source Subscription/Term + Accepted Renewal Changes → Renewal Quote → Order → Next-Term Subscription → Billing → Entitlements**

Flag unexplained differences.

## Flow Depth
L2/L3 vendor-neutral. Exact renewal automation, opportunity generation, notice mechanisms, APIs, statuses and platform objects belong in platform/integration modules.
