# New Business — Detailed Flows

## 1. Opportunity / Customer Context
1. Identify customer/account or prospect.
2. Establish selling opportunity/context where applicable.
3. Identify seller/owner/channel.
4. Identify transaction/deal type.
5. Capture required customer/commercial context.
6. Determine whether a quote can be initiated.

### Exit
Sufficient context exists to create the governed quote transaction.

## 2. Quote Initiation
1. Create quote identity/version.
2. Associate customer/opportunity.
3. Establish currency.
4. Establish quote/pricing/effective-date context.
5. Establish transaction/channel context.
6. Load applicable defaults.
7. Validate quote-start prerequisites.

## 3. Product Discovery / Selection
1. Determine customer need/use case.
2. Search/browse eligible offers.
3. Filter by availability, geography, channel, customer, lifecycle or other evidenced rules.
4. Select product/bundle/service.
5. Load required options and configuration rules.

### Decision
If product is not eligible/sellable, select an alternative or follow an approved exception process.

## 4. Configuration
1. Establish base product/bundle.
2. Select required options.
3. Capture attributes.
4. Apply compatibility/dependency rules.
5. Apply quantity/cardinality rules.
6. Resolve configuration errors.
7. validate complete solution.

### Loop
Configuration changes can trigger repricing and may alter discount/approval context.

## 5. Pricing
1. Identify applicable price source.
2. Determine currency/date/context.
3. Calculate base/list/reference values.
4. Apply quantity/tier/attribute/term/customer/channel rules as applicable.
5. Calculate recurring, one-time or usage-related commercial values where relevant.
6. Apply rounding/effective-date rules.
7. expose price explanation where available.

## 6. Discounting
1. Determine discount eligibility.
2. Apply standard/automatic discount policy where applicable.
3. Capture discretionary request if needed.
4. Evaluate seller authority.
5. Evaluate stacking.
6. Evaluate floor/minimum controls.
7. Capture reason/justification.
8. calculate resulting net commercial values.

### Decision
If exception exceeds authority or another governed condition is met, approval is required.

## 7. Quote Validation
Validate applicable:
customer/party → products → configuration → price → discount → currency → dates/term → commercial terms → downstream-required data.

Blocking issues return the user to the responsible step.

## 8. Approval
1. Calculate approval-driving measures.
2. Determine required authority.
3. Assemble decision context.
4. Associate approval with exact quote/version.
5. Route sequentially/parallel/conditionally according to policy.
6. Capture decision.
7. If rejected/change requested, return to seller.
8. If commercial state changes, evaluate reapproval.
9. On completion, establish approved quote state.

## 9. Proposal Generation
1. Select eligible current quote/version.
2. Validate proposal readiness.
3. Apply approved template/content rules.
4. Merge customer/product/commercial/term data.
5. Generate proposal.
6. Review where required.
7. issue/present to customer.
8. Preserve quote-version-to-document lineage.

## 10. Negotiation / Revision Loop
Customer requests change → classify request → revise configuration/quantity/term/commercial values → reprice → rediscount → revalidate → reapprove where required → regenerate proposal.

Repeat until accepted, rejected/lost, expired, or abandoned.

## 11. Customer Acceptance
1. Identify exact accepted proposal/quote version.
2. Capture approved acceptance mechanism.
3. Capture required date/party/reference.
4. Confirm approvals remain valid.
5. Confirm quote has not expired or materially changed.
6. establish order readiness.

## 12. Quote-to-Order Readiness
Confirm:
- accepted authoritative version;
- valid configuration;
- approved price/discount;
- approvals;
- customer/party data;
- dates/terms;
- fulfillment-required attributes;
- billing-required attributes.

## 13. Order Creation
1. Create order identity.
2. Preserve quote/version lineage.
3. Transform quote lines to order lines/components.
4. Preserve product/configuration hierarchy.
5. preserve required commercial values.
6. validate mapping.
7. submit.

## 14. Order Orchestration / Fulfillment
Decompose where required → sequence dependencies → send fulfillment/provisioning tasks → capture downstream references → handle holds/errors/retries → aggregate completion state.

## 15. Activation / Subscription Creation
Eligible fulfilled/accepted order context → create subscription/product/charge representation where applicable → establish term/dates → preserve configuration and commercial lineage → activate according to approved trigger → synchronize entitlements.

For non-subscription products, use the applicable installed-base/asset/fulfillment model instead.

## 16. Billing Handoff
Create/update billing context → create charges → establish billing dates/frequency → apply billing/proration rules → invoice according to policy → preserve source lineage.

## 17. End-to-End Reconciliation
Compare:
**Accepted Quote → Order → Fulfilled/Activated State → Subscription/Installed Base → Billing**

Validate products, quantities, configuration, price/rate, currency, dates, customer/party and required identifiers.

## 18. Closed-Lost / Abandoned Path
Capture outcome/reason according to process → stop unintended quote/approval/order progression → preserve commercial history.

## 19. Exception Path
At any stage:
detect exception → identify responsible capability/owner → prevent unsafe progression where required → correct/retry/reapprove → preserve audit → resume from validated state.

## Journey Flow Depth
This file is L2/L3. Exact screens, Salesforce opportunity stages, CCW flows, Zuora objects, APIs, mappings and customer-specific policies belong in platform/integration modules.
