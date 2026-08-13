# Quoting — Requirement & Acceptance Patterns

## Quote Creation
**Story:** As a seller, I want to create a quote from relevant customer/opportunity context so that unnecessary re-entry is avoided.
**Acceptance:** Approved context is associated/transferred according to defined mappings and required quote data is identified.

## Quote Validation
**Story:** As a seller, I want validation before presentation so incomplete or invalid proposals do not reach the customer.
**Acceptance:** Defined blocking checks run at the governed progression point and provide actionable errors.

## Alternative Scenarios
**Story:** As a seller, I want to compare commercial scenarios.
**Acceptance:** Scenarios remain distinguishable and only the governed authoritative scenario progresses.

## Revision
**Story:** As a seller, I want meaningful commercial changes tracked by revision.
**Acceptance:** Source version, changed state, approval lineage and document lineage remain traceable.

## Approval Version Integrity
**Story:** As an approver, I want my decision tied to the version reviewed.
**Acceptance:** Defined material changes invoke reapproval behavior according to policy.

## Proposal Generation
**Story:** As a seller, I want the proposal generated from the current eligible quote.
**Acceptance:** Document is traceable to its source quote/version and approved template/data rules.

## Expiration
**Story:** As a governance owner, I want expired quotes revalidated before progression.
**Acceptance:** Expired state blocks or triggers revalidation according to evidenced policy.

## Customer Acceptance
**Story:** As a seller, I want acceptance tied to the exact version accepted.
**Acceptance:** Version, date, mechanism and required party/reference are recorded.

## Quote-to-Order Readiness
**Story:** As Order Operations, I want execution-required data validated before conversion.
**Acceptance:** Defined customer, configuration, commercial, date and downstream data checks pass.

## Quote-to-Order Traceability
**Story:** As an operations user, I want order records traceable to quote and lines.
**Acceptance:** Correlation is preserved according to approved architecture.

## Clone Revalidation
**Story:** As a seller, I want cloned quotes checked against current rules.
**Acceptance:** Applicable catalog, configuration, pricing, discount, dates and approval rules are re-evaluated.

## Guardrail
Do not invent statuses, expiration duration, primary-quote behavior, templates, acceptance methods, conversion rules, mandatory fields, metric formulas or platform automation. Mark missing rules **Unknown / Validation Needed**.
