# Partner Experience — Requirements & Diagnostics

## Party Identity
**Story:** As a partner user, I want my organization and end customer represented separately.
**Acceptance:** Defined partner, customer, distributor and payer/service roles remain distinguishable through the transaction.

## Start or Resume
**Story:** As a partner, I want to resume existing deal/quote work.
**Acceptance:** Current eligible transaction is discoverable and duplicate creation is prevented or governed.

## Eligibility
**Story:** As a partner, I want to know whether I can sell the selected product in the current context.
**Acceptance:** Eligibility is validated from the authoritative rule source and permitted failure guidance is actionable.

## Commercial Clarity
**Story:** As a partner, I want visible price values have clear meaning.
**Acceptance:** Each displayed commercial value has an unambiguous role and unauthorized internal values are not exposed.

## Special Pricing Correlation
**Story:** As a partner, I want approved deal support applied to the correct quote.
**Acceptance:** Approved commercial treatment remains correlated to customer/deal and intended quote/version.

## Approval Status
**Story:** As a partner, I want to know whether vendor/distributor action is pending.
**Acceptance:** Supported approval state and partner next action are visible without exposing confidential internal details.

## Customer Proposal
**Story:** As a partner, I want the customer proposal reflect the governed commercial version.
**Acceptance:** Customer-facing artifact remains correlated to the intended partner/customer quote/version.

## Order Status
**Story:** As a partner, I want to know what happened after submission.
**Acceptance:** Business-relevant submitted, processing, partial, completed and actionable exception states are distinguishable.

## Lifecycle Baseline
**Story:** As a partner, I want amendments/renewals start from current customer state.
**Acceptance:** Authorized authoritative installed/subscription state and relevant pending changes are used.

## Renewal Ownership
**Story:** As channel operations, I want current partner eligibility validated for renewal.
**Acceptance:** Renewal ownership/authorization follows approved current relationship rules and preserves historical attribution.

## Diagnostic Framework
Assess:
**Identity → Customer/Deal → Eligibility → Product Discovery → Configure → Commercials → Deal Support → Approval → Proposal → Acceptance → Order → Status → Amendment → Renewal → Support**

For each capture:
evidence → user goal → friction → business impact → access/security concern → root-cause hypothesis → dependency → proposed opportunity → evidence/metric needed.

## Evidence Guardrail
Do not infer partner programs, rules, permissions, pricing, margin, severity, frequency or measured impact. Label unsupported findings **Hypothesis** and future-state changes **Proposed**.
