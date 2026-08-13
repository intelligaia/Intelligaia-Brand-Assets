# Subscriptions — Requirement & Acceptance Patterns

## Subscription Creation
**Story:** As an operations user, I want eligible completed/accepted order context converted into subscription state so the customer's recurring relationship is represented accurately.
**Acceptance:** Approved source order data is mapped to the subscription and source lineage is preserved.

## Activation
**Story:** As operations, I want subscriptions activated only when the defined activation condition is met.
**Acceptance:** Activation prerequisites and the approved trigger are satisfied before the governed active state is established.

## Installed Base
**Story:** As a seller, I want the authoritative current products and quantities available when I start a lifecycle transaction.
**Acceptance:** CPQ retrieves or receives the approved installed-base source with current lifecycle identifiers and effective state.

## Configuration Fidelity
**Story:** As a lifecycle seller, I want relevant configuration preserved so I can modify an existing product accurately.
**Acceptance:** Defined hierarchy/options/attributes required for lifecycle change remain traceable to the subscription product.

## Date Integrity
**Story:** As operations, I want subscription, service and billing dates represented according to approved semantics.
**Acceptance:** Distinct date types are stored/mapped according to the defined lifecycle model and validated for allowed relationships.

## Ramp / Phase
**Story:** As a seller, I want future quantity/price phases represented so time-phased commitments remain understandable.
**Acceptance:** Approved phase start/end and applicable commercial/product state are preserved without unintended gaps/overlaps.

## Co-Term
**Story:** As a lifecycle seller, I want eligible additions aligned to the governed term where required.
**Acceptance:** The approved co-term date and commercial treatment are applied using evidenced rules.

## Billing Alignment
**Story:** As billing operations, I want subscription charge context synchronized so invoicing reflects the active commercial relationship.
**Acceptance:** Required product/charge, quantity, dates, price and identifiers are transferred and correlated according to architecture.

## Entitlement Alignment
**Story:** As service operations, I want entitlements aligned with active subscription state.
**Acceptance:** Defined entitlement creation/change/revocation events correlate to the applicable subscription product and effective dates.

## Amendment Source
**Story:** As a seller, I want amendments based on the authoritative subscription state.
**Acceptance:** Amendment initiation identifies source subscription/product, current quantity/configuration, relevant dates and lifecycle identifiers.

## Renewal Source
**Story:** As a renewal seller, I want renewal generated from the current subscription/term.
**Acceptance:** Renewal context references the authoritative source term/products and approved current commercial/lifecycle data.

## Historical State
**Story:** As an auditor/support user, I want prior subscription state reconstructable.
**Acceptance:** Effective-dated lifecycle events/versions preserve enough information to identify prior and resulting state.

## Guardrail
Do not invent subscription statuses, activation triggers, term rules, ramp semantics, co-term calculations, billing/entitlement ownership, cancellation behavior, renewal mechanics or platform object models. Mark missing rules **Unknown / Validation Needed**.
