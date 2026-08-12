# Salesforce ↔ Zuora — Requirement Patterns

## Customer Correlation
**Story:** As operations, I want Salesforce customers correlated to the correct Zuora customer/billing relationships.
**Acceptance:** Approved identity/matching rules preserve stable cross-system references and route ambiguous matches without creating unintended duplicates.

## Field Ownership
**Story:** As a data owner, I want synchronized customer attributes updated only by their authoritative source.
**Acceptance:** Defined attributes identify authoritative ownership, transformation and conflict behavior.

## Subscription Visibility
**Story:** As a seller/CS user, I want current subscription context available in Salesforce.
**Acceptance:** Approved subscription identity, lifecycle state and required product/date context are presented with defined freshness and source ownership.

## Pending-State Visibility
**Story:** As a seller, I want future/pending lifecycle changes distinguishable from current state.
**Acceptance:** Current effective and pending future states are represented separately where required by the process.

## Amendment Integrity
**Story:** As lifecycle operations, I want Salesforce-initiated changes calculated from authoritative subscription state.
**Acceptance:** Current subscription and applicable pending changes are validated before amendment execution.

## Renewal Correlation
**Story:** As a renewal owner, I want Salesforce renewal work traceable to the source subscription/term and resulting next-term state.
**Acceptance:** Source subscription, renewal work/opportunity, accepted commercial transaction and resulting Zuora term remain correlated.

## Renewal Amount
**Story:** As a forecast owner, I want renewal values in Salesforce have an explicit business definition.
**Acceptance:** The renewal amount identifies its source/formula, currency, effective term and whether it is forecast, current, proposed or booked value.

## Status Integrity
**Story:** As a seller, I want Salesforce lifecycle status reflect the relevant Zuora business state.
**Acceptance:** Approved state mapping, freshness and stale-update controls are applied.

## Billing Visibility
**Story:** As an authorized user, I want only the billing summary required for my customer workflow.
**Acceptance:** Defined billing data is exposed with source, freshness, authorization and informational/actionable semantics.

## Partner / Payer Integrity
**Story:** As operations, I want partner, end-customer and payer relationships remain distinct across systems.
**Acceptance:** Approved party-role mappings preserve each required relationship through subscription/billing processing.

## Idempotent Lifecycle Retry
**Story:** As support, I want failed lifecycle operations retryable without duplicate business transactions.
**Acceptance:** Retry validates current source/target state and prevents duplicate subscription, amendment, renewal or cancellation outcomes.

## Actionable Failure
**Story:** As operations, I want failed Salesforce–Zuora handoffs show enough context to resolve them.
**Acceptance:** Exceptions expose source transaction, target reference/state, failed step, category, owner and safe recovery action.

## Reconciliation
**Story:** As governance, I want Salesforce lifecycle context reconciled to authoritative Zuora state.
**Acceptance:** Defined customer, subscription, lifecycle, date, status and relevant commercial dimensions are compared and unexplained differences routed.

## Guardrail
Do not invent Salesforce/Zuora objects, APIs, fields, renewal automation, formulas, managed packages, sync directions, billing summaries or middleware. Mark unsupported implementation details **Unknown / Validation Needed**.
