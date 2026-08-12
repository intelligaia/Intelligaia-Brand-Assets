# Amendment Journey — Requirement Patterns

## Installed-Base Baseline
**Story:** As a lifecycle seller, I want an amendment initiated from authoritative current state.
**Acceptance:** Source subscription/version, active products, quantities, configuration, dates and applicable pending changes are retrieved before change calculation.

## Change Eligibility
**Story:** As a seller, I want to know which changes are permitted before configuring an amendment.
**Acceptance:** Approved subscription/product/change-type eligibility rules are evaluated and unsupported actions are prevented or routed appropriately.

## Before / After State
**Story:** As a seller, I want to see the resulting customer state before submitting the amendment.
**Acceptance:** Current, requested delta and resulting values are distinguishable for defined lifecycle dimensions.

## Effective Date
**Story:** As a seller, I want the requested effective date validated and its impact explained.
**Acceptance:** The date is evaluated against approved lifecycle, term and billing rules before progression.

## Proration
**Story:** As a seller, I want partial-period commercial effects calculated consistently.
**Acceptance:** Approved pricing basis, period convention, effective date and rounding rules produce a traceable charge/credit result.

## Product Removal
**Story:** As a seller, I want removal to account for dependent products and services.
**Acceptance:** Defined dependencies and downstream entitlement/billing effects are evaluated before removal is accepted.

## Upgrade / Downgrade
**Story:** As a seller, I want approved migration paths applied consistently.
**Acceptance:** Source-target mapping, configuration/quantity migration, effective date and commercial treatment follow approved rules.

## Pending Change Awareness
**Story:** As a seller, I want future/in-flight changes visible when creating another amendment.
**Acceptance:** The amendment baseline includes or explicitly handles applicable pending changes according to concurrency policy.

## Approval Context
**Story:** As an approver, I want to see lifecycle and financial impact of the requested change.
**Acceptance:** Decision context includes source state, delta, resulting state, effective date, commercial impact and reason where required.

## Acceptance Integrity
**Story:** As operations, I want the executed amendment tied to the version the customer accepted.
**Acceptance:** Accepted amendment quote/version is preserved and used as the governed execution source.

## Change-Order Execution
**Story:** As operations, I want accepted lifecycle changes transformed into traceable executable components.
**Acceptance:** Source subscription/product and amendment quote references are preserved through change-order and downstream execution.

## Billing / Entitlement Alignment
**Story:** As operations, I want financial and service rights aligned to the resulting amendment state.
**Acceptance:** Defined charge and entitlement changes occur using the approved effective date and remain correlated to the amendment.

## Reconciliation
**Story:** As governance, I want the executed result compared with the accepted amendment.
**Acceptance:** Defined product, quantity, configuration, dates, commercial, subscription, billing and entitlement dimensions are compared and unexplained differences flagged.

## Guardrail
Do not invent eligibility, effective dates, proration, credits/refunds, migration rules, concurrency, approval thresholds, acceptance methods or downstream mechanics. Mark missing rules **Unknown / Validation Needed**.
