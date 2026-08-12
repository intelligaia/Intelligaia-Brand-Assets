# New Business — Controls, Data & Handoffs

## Purpose
Define cross-capability control points that prevent a locally valid CPQ step from creating an invalid downstream transaction.

## 1. Journey Source Lineage
Preserve correlation where applicable:
**Customer/Opportunity → Quote → Quote Version → Proposal → Acceptance → Order → Order Line/Component → Subscription/Asset → Charge → Invoice**

## 2. Authoritative Commercial Version
At customer acceptance and order conversion, explicitly identify the quote/version that is authoritative.

Do not allow an older approved/presented version to silently become the order source.

## 3. Customer / Party Control
Validate relevant sold-to, bill-to, ship-to, service-to, payer, partner/reseller or other party roles according to architecture.

Do not assume one account represents every role.

## 4. Product Eligibility Control
Before configuration/order:
validate product sellability/availability by evidenced dimensions such as date, geography, channel, customer, lifecycle state and dependencies.

## 5. Configuration Control
A quote should not progress past governed checkpoints with unresolved blocking configuration violations.

## 6. Pricing Control
Preserve price source, applicable date/context, calculated values and required explanation/audit.

## 7. Discount Control
Preserve discount basis, requested/approved value, reason and authority/approval context where required.

## 8. Approval-Version Control
Approval must remain associated with the commercial state reviewed.

Material post-approval changes require evaluation against reapproval policy.

## 9. Proposal-Version Control
Generated customer-facing output must remain traceable to its source quote/version.

## 10. Acceptance Control
Acceptance must identify the exact commercial version agreed to by the customer.

## 11. Quote-to-Order Mapping Control
For each material entity/field define:
**Source → Transformation/Default → Target → Validation → Owner**

Do not assume direct copy.

## 12. Configuration Fidelity
Preserve downstream-required bundle/component hierarchy, attributes, quantities and technical selections.

## 13. Commercial Fidelity
Preserve or explicitly transform:
price/rate, discount, quantity, term, dates, currency, recurring/one-time/usage charge context.

## 14. Date Semantics
Distinguish quote/pricing date, proposal validity, requested service date, order date, activation date, subscription start, charge start and invoice/service period.

## 15. Downstream Readiness
Before order submission validate the data needed by fulfillment, provisioning, subscription, billing and entitlement processes.

## 16. Error Ownership
Every blocking integration/business exception should identify:
affected transaction/component → error category → owner → corrective action → retry/resubmission rule.

## 17. Duplicate Prevention
Order, subscription and billing creation should have approved duplicate-prevention/correlation controls.

Exact idempotency design belongs in integrations.

## 18. Reconciliation
Define checkpoints:
- quote vs proposal;
- accepted quote vs order;
- order vs fulfillment/subscription;
- subscription vs billing;
- accepted commercial state vs invoice.

## 19. Audit
Preserve material decisions/changes:
actor/system, timestamp, version, prior/new state, approval/acceptance, downstream reference.

## 20. Source of Truth
Explicitly identify authoritative systems for:
customer/opportunity, quote, product/configuration, price, approval, order, fulfillment, subscription/installed base, billing and invoice.

## 21. Ownership Matrix
For each major step capture:
**Process Owner → System Owner → Data Owner → Exception Owner → Approval Authority**

Actual owners require evidence.

## 22. Journey Risks
Potential hypotheses:
duplicate data entry; stale quote version; product/configuration mismatch; price mismatch; approval reuse; manual proposal edits; quote/order mapping loss; fulfillment missing attributes; billing starts from wrong date/rate; cross-system status divergence.

Validate before asserting.
