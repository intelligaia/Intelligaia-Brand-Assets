# End-to-End Integration Orchestration

## Purpose
Describe business-level handoffs across the CPQ/Q2C transaction without assuming a specific platform topology.

## 1. Customer / Opportunity → Quote
### Intent
Provide CPQ with sufficient customer and selling context to create a governed quote.

### Contract Pattern
**Source Identity → Customer/Party Context → Opportunity/Deal Context → Seller/Channel → Currency/Geography → Transaction Type → Target Quote Identity**

### Controls
- avoid duplicate quote initiation;
- preserve source opportunity/customer identifiers;
- validate required party roles;
- distinguish defaults from source-authoritative values.

## 2. Catalog / Configuration Context
CPQ retrieves or receives eligible product/catalog context → applies configuration rules → captures product hierarchy/options/attributes → preserves identifiers needed downstream.

### Handoff Risk
A display label or SKU alone may be insufficient to reconstruct configured intent downstream.

## 3. Pricing / Discount / Approval
Pricing context is assembled → calculated values are produced → discount policy is applied → approval-driving measures are evaluated → approval decision is associated with the exact commercial version.

### Integration Control
Do not let asynchronous price/approval responses silently update a superseded quote version.

## 4. Quote → Proposal / Acceptance
Generate customer-facing output from an eligible quote/version → preserve document/version relationship → capture acceptance against the exact commercial version.

## 5. Accepted Quote → Order
### Readiness
Validate customer/party, product/configuration, quantities, prices, discounts, term/dates, approvals, acceptance, fulfillment attributes, and billing attributes.

### Transformation
**Quote Header/Lines/Hierarchy → Transformation/Defaults → Order Header/Components → Validation → Submission**

### Controls
- one governed source version;
- no unexplained commercial drift;
- duplicate order prevention;
- configuration hierarchy preservation.

## 6. Order → Fulfillment / Provisioning
Order components are decomposed where required → dependencies/sequencing are established → work is sent downstream → acknowledgements/statuses are correlated → partial completion is visible.

## 7. Order / Activation → Subscription / Installed Base
Eligible executed products create/update authoritative lifecycle state → effective dates and product/quantity/configuration state are established → source order lineage is preserved.

Do not assume subscription creation waits for the same trigger for every product.

## 8. Subscription / Order → Billing
Required customer/payer, product/charge, quantity, rate/price, currency, date, term/frequency, tax/payment-term context is transferred or derived according to architecture → billing schedule/charges are established.

## 9. Subscription → Entitlement
Product/service rights are created/changed/revoked using the approved lifecycle trigger and effective date.

## 10. Amendment Orchestration
Authoritative installed base → amendment delta/effective date → pricing/proration → approval/acceptance → change order → fulfillment → subscription update → billing/entitlement adjustment.

### Critical Control
Calculate from current authoritative state including applicable pending changes.

## 11. Renewal Orchestration
Renewal trigger → authoritative term baseline → pending-change resolution → carry-forward/migration → pricing/uplift → approval/acceptance → renewal order → next-term subscription → billing/entitlement continuity.

## 12. Cancellation Orchestration
Cancellation decision → effective date/scope → executable change → deprovisioning → subscription end-state → billing/credit treatment → entitlement termination.

## 13. Partner Orchestration
Preserve partner, distributor where applicable, end-customer, payer and service roles across quote/order/subscription/billing according to the business model.

## 14. Asynchronous Handoff Pattern
**Business Trigger → Outbound Request/Event → Correlation ID → Accepted/Queued → Processing → Success/Failure Callback/Event → Source State Update → Reconciliation**

Do not equate transport acknowledgement with business completion.

## 15. Partial Success
For multi-component transactions:
identify completed/pending/failed components → determine retry/compensation policy → prevent replay of successful components → update aggregate business state.

## 16. Human-in-the-Loop
When integration cannot safely resolve a business exception:
create actionable work item → include transaction/component, source/target state, error category, recommended action, retry eligibility and owner.

## 17. Reconciliation Checkpoints
Recommended business checkpoints:
- quote vs proposal;
- accepted quote vs order;
- order vs fulfillment;
- order vs subscription/installed base;
- subscription vs billing;
- subscription vs entitlement;
- amendment/renewal/cancellation decision vs resulting state.

## Flow Depth
L2/L3. Exact endpoints, event topics, middleware routes, object mappings, status codes and field transformations are L4 and belong in pair/platform modules when evidenced.
