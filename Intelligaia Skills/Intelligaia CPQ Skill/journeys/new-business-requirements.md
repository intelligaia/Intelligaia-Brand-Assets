# New Business — Journey Requirement Patterns

## Context Reuse
**Story:** As a seller, I want approved customer/opportunity context reused throughout the transaction so I do not repeatedly enter the same data.
**Acceptance:** Defined source fields are mapped to downstream transaction context and remain traceable.

## Guided Product Selection
**Story:** As a seller, I want eligible products presented according to the deal context.
**Acceptance:** Approved eligibility rules filter or validate product selection before progression.

## Valid Solution
**Story:** As a seller, I want configuration issues resolved before presenting the proposal.
**Acceptance:** Defined blocking configuration rules pass at the governed quote checkpoint.

## Commercial Calculation
**Story:** As a seller, I want pricing and discounting calculated from approved rules.
**Acceptance:** Price source/context and discount policy are evaluated and resulting values remain traceable.

## Proactive Approval
**Story:** As a seller, I want to know approval requirements before I submit the customer proposal.
**Acceptance:** Approval-driving conditions are evaluated against the current quote/version before the governed presentation point.

## Proposal Fidelity
**Story:** As a seller, I want the proposal generated from the current eligible quote version.
**Acceptance:** Proposal values and document/version lineage correlate to the source quote.

## Negotiation Revision
**Story:** As a seller, I want customer-requested changes to trigger the required recalculation and governance.
**Acceptance:** Material configuration/commercial changes revalidate pricing, discount, approval and document state according to policy.

## Acceptance Integrity
**Story:** As operations, I want customer acceptance tied to the exact version agreed.
**Acceptance:** Accepted quote/version and required acceptance evidence are preserved before order conversion.

## Order Readiness
**Story:** As Order Operations, I want downstream-required information validated before submission.
**Acceptance:** Defined customer, configuration, commercial, date, fulfillment and billing data checks pass.

## Quote-to-Order Fidelity
**Story:** As operations, I want the order to preserve accepted commercial intent.
**Acceptance:** Approved mappings transform products, quantities, configuration, prices, dates and identifiers and unexplained differences are flagged.

## Subscription / Installed-Base Creation
**Story:** As a lifecycle seller, I want executed products represented in the authoritative installed base.
**Acceptance:** Eligible fulfilled/activated order components create/update the approved subscription/asset representation with source lineage.

## Billing Fidelity
**Story:** As billing operations, I want charges derived from the accepted/executed commercial state.
**Acceptance:** Required rate/price, quantity, currency, dates, frequency and source references are mapped or explicitly transformed.

## End-to-End Traceability
**Story:** As support/governance, I want the transaction traceable from quote through order and billing.
**Acceptance:** Required cross-system identifiers support correlation from accepted quote/version to downstream execution and financial records.

## Exception Ownership
**Story:** As an operations user, I want failures routed with enough context to resolve them.
**Acceptance:** A blocking exception identifies the affected transaction/component, error category, owner/action and retry/resubmission state where defined.

## Guardrail
Do not invent opportunity stages, customer-specific required fields, approval thresholds, proposal templates, acceptance methods, order mappings, activation triggers, billing rules, platform automation, or KPI targets. Mark missing rules **Unknown / Validation Needed**.
