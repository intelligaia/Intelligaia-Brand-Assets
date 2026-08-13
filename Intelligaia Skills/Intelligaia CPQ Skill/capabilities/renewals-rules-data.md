# Renewals — Rules, Data & Governance

## Renewal Identity
Conceptually capture renewal transaction ID, source subscription/term, renewal date/window, owner, motion, quote/order references, decision/status and resulting subscription/term.

## Renewal Eligibility
Define which subscriptions/products/terms are renewable and exclusions/conditions.

## Renewal Window
Define when renewal preparation, customer engagement, quote generation, notice, and final decision activities occur. Do not invent timing.

## Baseline
The renewal baseline should identify the authoritative effective state expected to renew, including applicable pending changes.

## Carry-Forward
Define which products, quantities, configuration attributes, terms, prices, discounts and commercial references carry forward versus recalculate.

## Auto-Renew
Define eligibility, term, notice/cancellation requirements, pricing treatment, transaction generation and exception handling.

## Renewal Term
Define new term start/end/duration and relationship to prior term.

## Renewal Pricing Basis
Potential evidenced bases:
contracted price, prior term price, uplifted price, current list/reference price, indexed price, customer-specific price, negotiated price.

Never infer.

## Uplift
Define source, percentage/index/formula, effective date, eligible products/charges, caps/floors/exceptions and rounding where applicable.

## Discount Treatment
Define whether prior discounts carry forward, reset, recalculate, expire or require new approval.

## Product Migration
Define source product, target product, eligibility, configuration mapping, quantity mapping, commercial treatment and effective date.

## Product Availability
A product may be sellable for new business but not renewable, or renewable but not newly sellable. Lifecycle eligibility must be explicit.

## Renewal Changes
Define whether add/remove/quantity/configuration changes are permitted inside renewal and how they interact with amendment policy.

## Co-Term / Consolidation
Define eligible source subscriptions, target date/term, alignment treatment, pricing impact and resulting subscription structure.

## Partial Renewal
Define product/quantity-level continuation and treatment of non-renewed components.

## Non-Renewal
Capture decision, reason, effective end, notice/reference where required, downstream billing/entitlement effect and forecast treatment.

## Renewal Status
Conceptual states may include Identified, Preparing, Quoting, Negotiating, Pending Approval, Accepted, Non-Renewing, Ordered, Renewed, Expired. Do not use as exact platform statuses.

## Forecast / Pipeline
Clarify relationship between renewal subscription, renewal opportunity, forecast amount, probability/status and quote. Do not infer formulas.

## Approval
Potential triggers:
uplift exception, discount, price override, non-standard term, migration exception, contraction, cancellation, commercial value. Actual triggers require evidence.

## Version Integrity
Renewal approval and acceptance must correlate to the exact renewal quote/version reviewed.

## Predecessor / Successor
Preserve source term/subscription → renewed term/subscription lineage.

## Billing Alignment
Define renewed charges, start dates, invoice timing, usage continuity and billing references.

## Entitlement Alignment
Define continuation, migration, quantity changes and end/revoke behavior.

## Audit
Preserve baseline, renewal rules applied, proposed/accepted changes, pricing basis, approval, customer decision, quote/order, prior/resulting term and downstream references.

## Governance
For renewal policy identify:
**Identification → Readiness → Baseline → Carry-Forward/Migration → Pricing → Discount/Approval → Negotiation → Decision → Order → Subscription/Billing/Entitlement → Reconciliation**

## Risks
Potential hypotheses:
stale renewal baseline; missed pending amendment; wrong uplift; obsolete product renewed; discount carried incorrectly; duplicate renewal; renewal quote generated too early/late; non-renewal not propagated; lapse between terms; billing continues after churn; renewed state differs from accepted quote.

Validate before asserting.
