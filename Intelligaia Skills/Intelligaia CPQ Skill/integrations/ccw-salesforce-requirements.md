# CCW ↔ Salesforce — Requirement Patterns

## Context Reuse
**Story:** As a seller, I want approved Salesforce customer/deal context available when entering the CCW commerce flow.
**Acceptance:** Defined source context is transferred/referenced without requiring duplicate manual entry and remains traceable to its Salesforce source.

## Quote Correlation
**Story:** As a seller, I want the CCW quote correlated to the Salesforce selling context.
**Acceptance:** The approved relationship between Salesforce customer/opportunity and CCW quote/version is persisted and retrievable.

## Safe Quote Initiation
**Story:** As a seller, I want retrying quote initiation to avoid unintended duplicate CCW transactions.
**Acceptance:** Repeating the governed initiation operation detects/resumes the existing business transaction or otherwise prevents duplicate creation.

## Resume
**Story:** As a seller, I want to resume the current CCW quote from Salesforce.
**Acceptance:** Navigation/association resolves to the intended current transaction according to approved quote-selection semantics.

## Quote Status Visibility
**Story:** As a seller, I want relevant CCW quote status visible in Salesforce.
**Acceptance:** Approved business status and freshness are synchronized or retrieved with defined source ownership and mapping.

## Commercial Summary
**Story:** As a seller, I want the approved quote summary visible without ambiguous amount semantics.
**Acceptance:** Synchronized commercial values identify their business meaning, currency, scope and source quote/version.

## Version Integrity
**Story:** As operations, I want stale CCW updates prevented from overwriting newer Salesforce quote context.
**Acceptance:** Defined version/state checks identify and handle superseded updates.

## Approval Visibility
**Story:** As a seller, I want approval state visible in the system where I manage the deal.
**Acceptance:** Where required, approval status is correlated to the applicable quote/version and clearly treated as authoritative or informational.

## Order Traceability
**Story:** As a seller, I want the resulting order traceable from the Salesforce opportunity and CCW quote.
**Acceptance:** Required opportunity/customer, quote/version and order references remain correlated after order creation.

## Partner / End-Customer Integrity
**Story:** As a channel seller, I want partner and end-customer identities preserved across Salesforce and CCW.
**Acceptance:** Approved party-role mappings keep partner and end-customer relationships distinguishable.

## Actionable Failure
**Story:** As a seller, I want a failed Salesforce–CCW handoff recoverable without restarting the deal.
**Acceptance:** The failure exposes actionable context, preserves source state, identifies retry/resume behavior, and prevents unintended duplicate quote creation.

## Reconciliation
**Story:** As operations, I want Salesforce and CCW commercial correlations monitored.
**Acceptance:** Defined customer/opportunity, quote/version, status and order-reference dimensions are compared and unexplained differences are routed to an owner.

## Guardrail
Do not invent Salesforce/CCW object names, fields, APIs, middleware, launch mechanisms, status mappings, synchronization direction, intervals or ownership. Mark unsupported implementation details **Unknown / Validation Needed**.
