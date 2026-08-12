# CPQ Lifecycle Stages

## Purpose
Provide detailed vendor-neutral definitions for each major stage in the CPQ/Q2C lifecycle.

# 1. Account / Opportunity
## Objective
Establish who is buying, what commercial motion is occurring, deal ownership, expected timing/value, customer/channel context, and relevant existing commercial relationships.

## Typical Inputs
Account, contacts, opportunity, channel, geography, currency, segment, deal type, expected close date, existing subscriptions/assets where relevant.

## Typical Output
Commercial context from which a quote can be created.

## Key Decisions
New business vs renewal/amendment/expansion; direct vs partner; applicable account/contact; currency/price context; existing contract/subscription impact; need for multiple quote scenarios.

# 2. Configure
## Objective
Determine what can and should be sold for the customer and selling context.

## Activities
1. Discover/select products or bundles.
2. Select options/add-ons.
3. Enter attributes and quantities.
4. Set term/effective dates where relevant.
5. Apply eligibility/visibility rules.
6. Apply compatibility/dependency rules.
7. Use guided selling where applicable.
8. Validate configuration.

## Inputs
Customer/opportunity context, catalog, lifecycle status, attributes, bundles, rules, existing assets/subscriptions.

## Output
Valid commercial configuration ready for pricing.

## Key Decisions
Sellability, eligibility, required options, compatibility, dependencies, quantity/term validity, completeness.

## Data
Quote lines, quantities, options, attributes, bundle relationships, dates, asset/subscription references, validation state.

# 3. Price
## Objective
Determine what the configured solution should cost.

## Activities
1. Identify applicable price source.
2. Calculate base/list price.
3. Apply configuration-driven effects.
4. Apply quantity/tier/term effects.
5. Apply customer/channel/contractual pricing.
6. Apply standard discounts/promotions.
7. Capture discretionary exceptions.
8. Calculate net/extended totals.
9. Recalculate after relevant changes.

## Pricing Patterns
List/base, price lists, attribute-based, tiered, quantity, term, ramp, contractual, channel, deal-registration, promotions, discretionary discount, renewal uplift, asset/subscription pricing, price waterfall.

## Key Decisions
Price list/currency; customer-specific price; discount eligibility; exception approval; reapproval after change; historical subscription context.

## Output
Calculated line and quote-level commercial values.

# 4. Quote
## Objective
Turn configuration and pricing into a governed commercial proposal.

## Core Flow
1. Create/reopen quote.
2. Validate header/context.
3. Add/configure products.
4. Calculate pricing.
5. Apply discounts.
6. Qualify terms.
7. Validate completeness.
8. Submit for approval where required.
9. Revise/reapprove where required.
10. Generate proposal/order form.
11. Present/negotiate.
12. Accept/eSign.
13. Finalize authoritative commercial proposal.
14. Convert/synchronize downstream.

## Typical Scenarios
New business, budgetary, renewal, amendment, expansion, partner, standard, non-standard.

Detailed flow: `../capabilities/quoting.md`.

# 5. Approve
## Objective
Govern commercial and policy exceptions without unnecessarily slowing standard business.

## Typical Triggers
Discount, pricing exception, configuration, payment terms, commercial terms, contract language, economics, deal structure, other policy.

## Flow
Submit → determine approvers → review → approve/reject/need-more-information → revise or continue → complete approval.

## Output
Approval decision, reason/comments, audit trail, approved state or rework request.

Detailed model: `../capabilities/approvals.md`.

# 6. Contract / Accept
## Objective
Convert approved commercial intent into customer-accepted terms.

## Activities
Determine standard/non-standard path → generate document → internal review if needed → customer review → negotiate/redline → evaluate commercial changes → finalize → eSign/accept.

## Critical Loop
Contract negotiation changes commercial terms → return to quote → recalculate/revalidate → reapprove if needed → regenerate agreement.

# 7. Order
## Objective
Convert accepted commercial intent into an executable downstream transaction without losing quote fidelity.

## Activities
Select final quote → create order → copy commercial/configuration details → validate → capture downstream-required information → credit/order checks where applicable → submit → integrate → reconcile status/errors.

## Output
Executable order and downstream references.

Detailed model: `../capabilities/ordering.md`.

# 8. Fulfillment / Provisioning
## Objective
Deliver purchased product, service, access, or entitlement.

## Inputs
Accepted order, configuration, customer/entitlement context, effective dates, fulfillment instructions.

## Outputs
Delivered product/service, entitlement, provisioning state, asset/subscription context, status.

# 9. Billing / Invoice
## Objective
Translate accepted commercial/order terms into accurate financial execution.

## Activities
Receive validated data → establish/update billing context → calculate charges → generate billing/invoice events → process lifecycle changes → reconcile discrepancies.

## Critical Control
Commercial intent should remain traceable from Quote → Order → Subscription/Asset → Billing.

Detailed model: `../capabilities/billing.md`.

# 10. Subscription / Asset
## Objective
Maintain active commercial state needed for in-life changes and renewal.

Typical state includes purchased offering, quantity, dates, price, contract/subscription relationship, entitlement and status.

# 11. Amendment
## Objective
Change an active commercial/subscription relationship during term.

## Flow
Active subscription/asset → effective change → configure delta → price/proration → approve if required → document/accept → amendment transaction/order → billing/provisioning update → reconcile state.

Scenarios: add-on, expansion/reduction, upgrade/downgrade, term change, co-term, cancellation where applicable.

Detailed flow: `../journeys/amendment.md`.

# 12. Renewal
## Objective
Continue, restructure, expand, or end an expiring relationship.

## Flow
Renewal window → expiring subscriptions/assets → renewal opportunity → renewal quote → existing product/pricing review → renewal policy → expansion/upgrade/co-term → approval → contract/accept → renewal order → lifecycle update.

Detailed flow: `../journeys/renewal.md`.

# 13. Cancellation / Churn
## Objective
End or reduce an active relationship according to policy and contractual terms.

Consider eligibility, notice, effective date, financial impact, entitlement termination, billing termination, approval and churn reason.

Detailed flow: `../journeys/cancellation.md`.
