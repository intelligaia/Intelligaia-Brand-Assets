# Partner Sales — Detailed Flows

## 1. Partner Identification
1. Identify partner organization.
2. Identify partner user/contact.
3. Retrieve partner status/type.
4. Identify selling relationship/channel.
5. Validate that the partner may transact in the requested context.
6. establish partner transaction context.

## 2. Authorization
Evaluate evidenced authorization dimensions such as:
geography → product/portfolio → program/tier → customer/segment → transaction type → effective dates → certifications/agreements where applicable.

If not authorized, block or route to the approved exception/assistance path.

## 3. End-Customer Identification
1. Identify end customer/prospect.
2. Distinguish partner from end customer.
3. establish required customer party roles.
4. validate duplicate/customer identity where architecture requires.
5. determine whether customer eligibility restrictions apply.

## 4. Deal / Opportunity Context
Create or associate opportunity/deal registration/partner transaction according to process → capture owner/channel → preserve partner/end-customer relationship → establish commercial context.

Do not assume deal registration is required.

## 5. Deal Registration
Where applicable:
partner submits opportunity → validate uniqueness/eligibility → review → approve/reject → establish protected/recognized relationship and validity period according to policy.

## 6. Product Discovery
Filter or validate products according to partner authorization, end-customer eligibility, geography, lifecycle, channel, date and other evidenced rules.

## 7. Configuration
Partner selects product/bundle → configures permitted options → system applies standard compatibility/dependency rules plus channel-specific restrictions where evidenced → validate.

## 8. Channel Pricing
Determine approved price context:
partner/channel → end customer → currency → geography → date → product → quantity → term → contract/program.

Calculate the appropriate governed commercial values.

## 9. Buy Price vs Sell Price
Where architecture supports separate values:
determine partner acquisition/buy price → determine end-customer sell/list/net context → calculate permitted margin/discount representation → preserve visibility rules.

Never assume the partner can view every price component.

## 10. Partner Discount / Incentive
Apply eligible program/channel discount or incentive according to policy → distinguish automatic entitlement from discretionary request → preserve source/rule.

## 11. Customer Discount
If the partner may discount the end-customer price, evaluate permitted discount authority and relationship to partner economics → apply approval where required.

## 12. Special Pricing Request
Partner requests non-standard commercial treatment → capture reason/competitive context where required → calculate requested economics → route to appropriate approvers → capture approved value and validity.

## 13. Quote Validation
Validate:
partner authorization → end customer → products → configuration → channel pricing → discounts → party roles → dates/term → required downstream data.

## 14. Approval
Evaluate partner/channel-specific plus standard commercial triggers → provide partner, end-customer, product, buy/sell economics and exception context where permitted → route → capture decision.

## 15. Partner Quote / Proposal
Generate governed partner-facing and/or customer-facing commercial output according to process → enforce price visibility → preserve source quote/version lineage.

## 16. Negotiation / Revision
Partner/customer requests change → revise configuration/quantity/commercial values → reprice → rediscount → revalidate → reapprove where required → regenerate appropriate output.

## 17. Customer Acceptance
Capture required customer/partner acceptance and exact quote/version according to the transaction model.

Do not assume the partner's acceptance substitutes for end-customer acceptance.

## 18. Order Route Decision
Determine transaction route:
- partner/reseller places order;
- distributor places/aggregates order;
- direct vendor order attributed to partner;
- another evidenced channel route.

## 19. Partner Order
Create order with correct sold-to/bill-to/ship-to/service-to/payer/end-customer/partner roles → preserve quote/version and partner attribution → validate → submit.

## 20. Distributor / Multi-Tier Route
Where applicable:
partner transaction → distributor/intermediary transaction → vendor order → end-customer fulfillment.

Preserve each party's role and source correlation; do not collapse the chain.

## 21. Fulfillment / Provisioning
Execute product/service delivery for the correct end customer/service location → preserve partner attribution where required → handle errors/holds/retries.

## 22. Subscription / Installed Base
Create/update authoritative end-customer subscription/installed-base state while preserving relevant partner/channel relationships and source order lineage.

## 23. Billing
Determine approved payer/bill-to relationship → create charges/invoice accordingly → preserve end-customer and partner references required by architecture.

Do not infer whether vendor bills partner or end customer.

## 24. Partner Amendment
Retrieve authoritative end-customer installed base → validate current partner/channel authority → perform governed amendment → preserve partner attribution and correct billing/entitlement relationships.

## 25. Partner Renewal
Identify renewable end-customer subscription → determine renewal owner/channel → validate partner authorization → build renewal from authoritative baseline → price according to renewal/channel rules → execute → preserve predecessor/successor and partner lineage.

## 26. Partner Change
If partner of record changes, determine whether and when reassignment is allowed → preserve historical attribution → update future transaction rights according to policy.

## 27. Channel Conflict
Detect competing partner claims/registrations/ownership conditions → route to governed resolution → avoid silently changing commercial ownership.

## 28. Exception / Recovery
Detect authorization, pricing, party-role, mapping, order, subscription or billing exception → assign owner → correct/retry → prevent duplicate order or attribution.

## 29. Reconciliation
Compare:
**Partner/Customer Context → Quote → Approved Economics → Order → End-Customer Fulfillment/Subscription → Billing → Partner Attribution**

Flag unexplained differences.

## Flow Depth
L2/L3 vendor-neutral. Exact PRM/CRM portals, distributor integrations, program tiers, rebate systems, APIs and platform objects belong in platform/integration modules.
