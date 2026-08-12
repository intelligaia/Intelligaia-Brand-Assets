# Billing — Requirement & Acceptance Patterns

## Commercial Fidelity
**Story:** As billing operations, I want billable charges derived from accepted commercial state so invoices reflect what was sold.
**Acceptance:** Defined product, quantity, price/rate, currency, dates, frequency and source identifiers are mapped or explicitly transformed according to approved architecture.

## Billing Account
**Story:** As operations, I want charges assigned to the correct billing account/payer.
**Acceptance:** Approved customer-to-billing-account mapping and required bill-to/payer attributes are validated before billing.

## Charge Creation
**Story:** As billing operations, I want eligible order/subscription components converted into the correct charge model.
**Acceptance:** Approved charge type, quantity, rate, frequency, dates and source lineage are created according to policy.

## Proration
**Story:** As a customer-facing user, I want partial-period charges calculated consistently.
**Acceptance:** The approved proration convention, effective dates, eligible charge and rounding rules produce a traceable result.

## Usage Billing
**Story:** As billing operations, I want usage correlated and rated against the correct subscription/product.
**Acceptance:** Usage identity, period, unit, customer/subscription correlation, deduplication and rating follow approved rules.

## Amendment Billing
**Story:** As billing operations, I want subscription amendments reflected in future charges and required adjustments.
**Acceptance:** Effective-dated additions/removals/changes update billing according to approved credit, proration and scheduling policy.

## Cancellation Billing
**Story:** As operations, I want cancellation stop/adjust billing at the governed effective date.
**Acceptance:** Future charges and required final charge/credit actions reflect the approved cancellation policy.

## Renewal Billing
**Story:** As billing operations, I want renewed charges begin according to the accepted renewed term.
**Acceptance:** Prior/new term boundaries, accepted rates/quantities and billing dates are applied without unintended overlap or gap.

## Invoice Traceability
**Story:** As support/operations, I want invoice lines traceable to their commercial source.
**Acceptance:** Required invoice-line, charge, subscription, order and quote references are preserved or discoverable according to architecture.

## Credit / Adjustment
**Story:** As billing operations, I want financial corrections preserve the original invoice history.
**Acceptance:** Corrections use approved adjustment/credit/rebill patterns and retain source, reason and audit history.

## Billing Exception
**Story:** As operations, I want billing failures actionable and safely recoverable.
**Acceptance:** The affected account/charge/invoice, error category, owner/action and retry/remediation state are available according to design.

## Reconciliation
**Story:** As a governance owner, I want accepted commercial state reconciled to billing.
**Acceptance:** Defined products/charges, quantities, prices, dates, currency and source references are compared and unexplained differences flagged.

## Guardrail
Do not invent bill cycles, invoice timing, proration, tax logic, usage rating, payment terms, credit/refund treatment, accounting posting, rounding, cancellation billing or platform automation. Mark missing rules **Unknown / Validation Needed**.
