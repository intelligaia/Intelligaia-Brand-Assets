# Partner Sales — Requirement Patterns

## Partner Authorization
**Story:** As a partner seller, I want to know whether I am authorized for the requested transaction.
**Acceptance:** Approved partner, product, customer, geography, channel, program and effective-date rules are evaluated before governed progression.

## End-Customer Identity
**Story:** As operations, I want the true end customer preserved even when a partner places the transaction.
**Acceptance:** Required end-customer identity and party-role references remain correlated from quote through downstream execution.

## Channel Product Eligibility
**Story:** As a partner, I want to see products I am permitted to sell.
**Acceptance:** Approved channel and partner eligibility rules filter or validate product selection.

## Channel Pricing
**Story:** As a partner, I want pricing calculated using my approved channel context.
**Acceptance:** Defined partner/customer/channel/date/currency/product/quantity/term inputs determine the applicable governed price.

## Price Visibility
**Story:** As a channel owner, I want each party to see only the commercial values permitted for that role.
**Acceptance:** Partner-facing and customer-facing experiences/documents enforce approved price-layer visibility.

## Special Pricing
**Story:** As a partner, I want to request non-standard pricing with a traceable decision.
**Acceptance:** Requested values, reason, products/customer, validity, approval and quote/version context are preserved.

## Approval Integrity
**Story:** As an approver, I want to evaluate the correct partner/customer economics.
**Acceptance:** Decision context uses the approved commercial layer and remains associated with the exact quote/version reviewed.

## Party-Role Mapping
**Story:** As Order Operations, I want partner, end-customer, payer and service roles mapped correctly to the order.
**Acceptance:** Approved source-to-target party mappings are validated before order submission.

## Distributor Route
**Story:** As operations, I want multi-tier channel transactions preserve each party and transaction relationship.
**Acceptance:** Distributor/intermediary, partner and end-customer references remain distinguishable and correlated through execution.

## Installed-Base Integrity
**Story:** As lifecycle operations, I want fulfilled products associated with the correct customer relationship.
**Acceptance:** Subscription/asset ownership and partner attribution follow the approved business model and source order context.

## Partner Amendment
**Story:** As a partner seller, I want permitted in-term customer changes based on authoritative installed base.
**Acceptance:** Current partner authority, end-customer subscription state and amendment policy are validated before change execution.

## Partner Renewal
**Story:** As a renewal owner, I want renewal routed to the correct authorized partner/channel.
**Acceptance:** Renewal ownership/authorization and predecessor partner/customer relationships are evaluated according to policy.

## Partner-of-Record Change
**Story:** As channel operations, I want partner reassignment preserve history and future attribution rules.
**Acceptance:** Approved eligibility/effective timing is applied and historical attribution is not overwritten.

## Reconciliation
**Story:** As governance, I want partner economics and party roles reconciled end to end.
**Acceptance:** Defined partner/customer roles, approved pricing, order, subscription, billing and attribution dimensions are compared and unexplained differences flagged.

## Guardrail
Do not invent partner tiers, authorization, deal registration, discounts, margins, rebates, price visibility, distributor mechanics, billing responsibility, installed-base ownership, renewal ownership or channel-conflict policy. Mark missing rules **Unknown / Validation Needed**.
