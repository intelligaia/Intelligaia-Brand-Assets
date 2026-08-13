# Subscriptions — Flows

## 1. Subscription Creation
1. Receive eligible order/order component.
2. Correlate source order and line.
3. Establish customer/account and subscription identity.
4. Establish transaction/source context.
5. Establish term and relevant dates.
6. Create subscription products/charges.
7. Preserve configuration/quantity/attribute context required for lifecycle.
8. Preserve commercial values required for lifecycle/billing.
9. Establish billing/entitlement references where applicable.
10. Validate.
11. Activate according to approved trigger.

## 2. Activation
Validate activation prerequisites → establish actual/effective service start where applicable → activate subscription/products/charges → notify/synchronize billing and entitlement systems → preserve activation event/time.

Activation trigger may be order completion, provisioning, service acceptance, a date, or another evidenced event.

## 3. Installed-Base Publication
Current active subscription state → expose eligible products/components, quantities, attributes, dates, terms and lifecycle identifiers → make available to CPQ/CRM/service processes according to architecture.

## 4. Subscription Product / Charge Creation
Source order component → identify subscription representation → create product/charge → establish quantity → dates → pricing/charge context → hierarchy/reference → validate.

Do not assume every order line creates exactly one subscription product or charge.

## 5. Ramp / Phased Subscription
Create phase schedule → define phase start/end → product/quantity/price/charge context per phase → validate continuity/overlap → synchronize billing/lifecycle representation.

## 6. Co-Term Alignment
Identify target subscription/term → determine eligible co-term date → calculate required commercial/date effects according to policy → validate → create/update relationship.

Exact co-term calculation belongs to evidenced business rules.

## 7. Subscription Synchronization
Authoritative subscription change → publish/synchronize required state to CRM/CPQ/billing/entitlement/reporting systems → preserve correlation/version → monitor errors → reconcile.

## 8. Amendment Initiation
Retrieve authoritative subscription → identify changeable products/quantities/attributes/dates → create amendment context → pass installed-base state to configuration/pricing.

See `amendments.md`.

## 9. Renewal Initiation
Identify subscription approaching governed renewal point → retrieve current state/terms → establish renewal context → determine eligible continuation/change → create renewal quote/process.

See `renewals.md`.

## 10. Cancellation Initiation
Retrieve active subscription → validate cancellation eligibility/date → determine affected products/charges/entitlements → calculate downstream financial effects according to policy → authorize if required → update lifecycle and downstream systems.

## 11. Expiration / End of Term
Reach end date without continuation → apply governed end-state behavior → stop/adjust entitlements and billing according to architecture → preserve historical state.

## 12. Subscription Version / State Change
Lifecycle event → preserve prior state → apply effective-dated change → establish new current state/version according to data model → synchronize downstream.

## 13. Billing Alignment
Subscription/charge state → provide billing-relevant product, charge, quantity, dates, price and lifecycle context → receive billing identifiers/status → reconcile.

## 14. Entitlement Alignment
Activated/changed subscription → create/update/revoke applicable entitlement according to product/service rules → correlate entitlement to subscription/product → reconcile.

## 15. Error Recovery
Detect synchronization/lifecycle failure → identify authoritative source → isolate affected subscription/product/charge → correct/retry according to architecture → prevent duplicate lifecycle events → reconcile.

## Flow Depth
L2/L3 vendor-neutral. Exact subscription APIs, billing engines, entitlement systems, status transitions and platform objects belong in platform/integration modules.
