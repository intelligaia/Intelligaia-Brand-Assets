# Quote-to-Cash Controls and Traceability

## Purpose
Define the controls that preserve commercial intent across Q2C and the metrics used to evaluate the operating model.

# 1. Commercial Traceability
A Q2C process should be able to trace, where relevant:

**Opportunity → Quote → Approval → Agreement → Order → Subscription/Asset → Billing/Invoice → Amendment/Renewal**

Important questions:
- Which record is authoritative at each stage?
- Which IDs link the records?
- Which system owns each entity?
- What changed between stages?
- Can the accepted commercial state be reconstructed?

# 2. Quote-to-Order Fidelity
Validate that order execution preserves:
- product/SKU;
- configuration;
- quantity;
- price;
- discount;
- currency;
- term/effective dates;
- customer/account;
- payment/billing terms;
- other downstream-required commercial context.

Differences should be intentional, governed, and auditable.

# 3. Contract-to-Order Alignment
Where contract/agreement terms affect execution:
- confirm accepted terms match the order;
- identify commercial changes introduced during negotiation;
- route material changes back through quote/pricing/approval controls.

# 4. Order-to-Billing Alignment
Validate that billing receives sufficient and correct:
- customer/billing account context;
- products/charges;
- price/discount;
- quantities;
- dates/terms;
- billing frequency;
- payment terms;
- subscription/lifecycle context.

Exact required data is implementation-specific.

# 5. Lifecycle Continuity
Amendments and renewals should operate from trustworthy active commercial state.

Key dependencies:
- accurate subscription/asset inventory;
- effective dates;
- historical products and pricing;
- entitlement state;
- contract/term context;
- prior order/billing linkage.

# 6. System-of-Record Control
For each major entity, identify the authoritative system and synchronization responsibility.

Never assume that CRM, CPQ, billing, ERP, or CLM owns a particular entity without evidence.

# 7. Validation Timing
Prefer validation before expensive downstream processing.

Examples:
configuration validation → pricing validation → quote completeness → approval → contract checks → order pre-validation → billing validation.

Late detection increases rework and reconciliation.

# 8. Exception / Reconciliation Loops

## Commercial Revision
Customer/internal change → quote revision → recalculate → revalidate → reapprove if required → regenerate downstream document.

## Order Failure
Order validation/downstream rejection → identify source data/rule → correct → resubmit.

## Billing Mismatch
Compare accepted quote/order/subscription/billing state → identify divergence → correct authoritative source → reconcile downstream.

## Integration Failure
Determine source/target state → prevent duplicate transaction → retry or reconcile → confirm downstream acceptance.

Detailed integration handling: `../integrations/integration-errors.md`.

# 9. Q2C KPI Framework

| Area | Example measures |
|---|---|
| Commercial velocity | quote cycle, approval time, contract cycle, order cycle |
| Productivity | seller touches, Deal Desk touch, manual order touch |
| Quality | quote errors, order errors, billing errors, reconciliation |
| Automation | self-service, automated approvals where governed, auto-book/order automation |
| Conversion | quote-to-order / opportunity-to-order where measured |
| Financial execution | time to bill, invoice accuracy, disputes caused by upstream data |
| Lifecycle | amendment cycle, renewal preparation, renewal/expansion performance |
| Experience | task completion, support burden, error recovery, adoption |

Do not invent KPI targets or benchmark values without evidence.

# 10. Governance
Q2C governance should clarify:
- process ownership;
- data ownership;
- catalog/pricing ownership;
- approval policy ownership;
- exception ownership;
- integration monitoring;
- reconciliation ownership;
- release/change governance;
- KPI ownership.

Cross-functional ambiguity is itself a diagnostic area, but only claim it as a gap when evidence supports it.
