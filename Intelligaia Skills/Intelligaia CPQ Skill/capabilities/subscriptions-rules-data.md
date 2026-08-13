# Subscriptions — Rules, Data & Governance

## Subscription Identity
Conceptually capture:
subscription ID, customer/account, source order, state, start/end dates, term, currency, renewal context and downstream references.

## Subscription Product
Potential data:
product/offer, quantity, configuration attributes, start/end dates, lifecycle state, source order-line reference, charge/entitlement references.

## Charge
Conceptually represent a recurring, one-time, usage or other approved financial charge associated with a subscription/product.

Subscription product and billing charge may not be the same entity.

## Term
Define term start, term end, duration/basis, renewal behavior and applicable lifecycle rules.

## Dates
Distinguish:
order date, contract/effective date, service start, subscription start, charge start, billing start, renewal date, cancellation date and end date.

Do not assume they are identical.

## Subscription State
Conceptual states may include Pending, Active, Suspended, Cancelled, Expired, Renewed or Superseded. Do not use as exact platform values.

## Product State
Individual subscription products/components may have lifecycle state distinct from the overall subscription.

## Installed Base
The installed base is the authoritative/current representation of products/services the customer owns, subscribes to, or is entitled to, according to the business architecture.

Clarify whether it is sourced from subscriptions, assets, entitlements, orders, billing, or a composite view.

## Quantity
Preserve current quantity and, where required, prior/future quantity by effective period.

## Configuration
Preserve lifecycle-relevant product hierarchy, options and attributes needed for future change, fulfillment, support or entitlement.

## Commercial Context
Determine which values remain lifecycle-relevant:
price/rate, discount context, currency, term, charge frequency/type, ramp/phase values, contractual price/uplift references.

## Ramp / Phase
Represent effective-dated commercial periods with start/end and applicable product/quantity/price context.

## Co-Term
Define target alignment date, relationship, eligibility and commercial treatment. Do not infer proration or date rules.

## Entitlement
Conceptually represent rights created from the commercial relationship. Define product-to-entitlement mapping, effective dates, quantity/capacity and lifecycle synchronization where applicable.

## Billing Relationship
Preserve billing account/profile, charge/subscription identifiers, billing dates/status and other required references according to architecture.

## Source Lineage
Preserve:
**Quote → Order → Order Line/Component → Subscription → Subscription Product/Charge → Amendment/Renewal → Billing/Entitlement**

## Versioning / Effective Dating
Lifecycle changes should preserve enough prior state to reconstruct what was active at a given business date.

## Amendment Reference
An amendment should identify the source subscription and affected products/charges, effective date and resulting state.

## Renewal Reference
A renewal should identify the source subscription/term and the resulting continuation/new term according to the business model.

## Cancellation
Define cancellation effective date, scope, reason, financial/billing effects, entitlement effect and authorization.

## Source of Truth
Explicitly identify authoritative systems for:
subscription state, installed base, commercial terms, billing state, entitlement state and renewal status.

## Synchronization
Define publish/consume direction, identifiers, event timing, conflict handling and reconciliation.

## Audit
Preserve lifecycle event, prior/new state, effective date, actor/system, source transaction and downstream references.

## Governance
For subscription lifecycle identify:
**Creation → Activation → Maintenance → Amendment → Renewal → Cancellation/Expiration → Billing/Entitlement Synchronization → Audit**

## Risks
Potential hypotheses:
duplicate subscriptions, missing source lineage, wrong dates, stale installed base, lost configuration, billing/subscription mismatch, entitlement mismatch, overlapping phases, lifecycle event duplication, CPQ using non-authoritative state.

Validate before asserting.
