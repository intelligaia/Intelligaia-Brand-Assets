# CCW ↔ Zuora — Requirement Patterns

## Downstream Readiness
**Story:** As operations, I want only an eligible accepted commercial version sent for subscription/billing processing.
**Acceptance:** Defined approval, acceptance, version and required-data conditions are validated before downstream execution.

## Customer / Billing Account
**Story:** As billing operations, I want the transaction associated with the correct customer and payer context.
**Acceptance:** Approved matching/creation rules preserve source identity and prevent unintended duplicate billing accounts.

## Product Transformation
**Story:** As subscription operations, I want CCW product/configuration intent represented correctly in the target lifecycle model.
**Acceptance:** Defined product, hierarchy, configuration, quantity and lifecycle mappings produce the expected target representation.

## Commercial Fidelity
**Story:** As finance, I want accepted commercial values retain their intended meaning downstream.
**Acceptance:** Defined price/rate, discount, currency, quantity, term and rounding semantics are mapped or derived according to approved ownership.

## Date Integrity
**Story:** As billing operations, I want subscription and charge dates derived from the correct commercial/lifecycle dates.
**Acceptance:** Defined date transformations distinguish requested, subscription, activation, charge, amendment, renewal and cancellation semantics.

## Version Integrity
**Story:** As governance, I want downstream state tied to the accepted CCW commercial version.
**Acceptance:** Source quote/version correlation is preserved through subscription and billing creation/change.

## Amendment Baseline
**Story:** As lifecycle operations, I want amendments calculated from current subscription state.
**Acceptance:** Authoritative subscription state and applicable pending changes are retrieved/validated before the commercial delta is executed.

## Renewal Continuity
**Story:** As renewal operations, I want accepted renewal state create the intended next-term subscription and charges.
**Acceptance:** Defined carry-forward/migration, price, term/date and predecessor/successor relationships are preserved and reconciled.

## Cancellation Integrity
**Story:** As operations, I want cancellation stop/change subscription and billing according to the approved effective state.
**Acceptance:** Defined scope, effective date and financial treatment produce the expected subscription/charge outcome without deleting history.

## Idempotent Retry
**Story:** As support, I want failed processing safely retryable.
**Acceptance:** Retry checks current source/target state and does not create duplicate account, subscription, charge or lifecycle transaction.

## Actionable Failure
**Story:** As operations, I want downstream failures identify what succeeded and what remains.
**Acceptance:** Exceptions expose source transaction/version, failed step, completed target references, category, owner and safe recovery action.

## Reconciliation
**Story:** As governance, I want accepted CCW commercial state reconciled to Zuora subscription/billing state.
**Acceptance:** Defined customer, product, quantity, commercial, date, lifecycle and lineage dimensions are compared and unexplained differences are routed.

## Guardrail
Do not invent CCW/Zuora objects, APIs, mappings, charge models, proration, billing triggers, retry behavior, middleware or ownership. Mark unsupported implementation details **Unknown / Validation Needed**.
