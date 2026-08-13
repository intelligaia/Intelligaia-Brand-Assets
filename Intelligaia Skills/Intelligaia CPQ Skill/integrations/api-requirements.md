# API Requirement Patterns

## Business Operation
**Story:** As an integration consumer, I want the interface express the intended Q2C business operation.
**Acceptance:** The contract documents purpose, preconditions, business action, resulting state and failure behavior rather than relying on ambiguous CRUD semantics.

## Correlation
**Story:** As operations, I want API operations traceable across systems.
**Acceptance:** Defined source, target, operation and correlation identifiers are preserved and queryable.

## Idempotency
**Story:** As support, I want a timed-out/retried operation to avoid duplicate business outcomes.
**Acceptance:** Repeating the same governed operation returns/resumes the existing outcome or safely rejects conflicting reuse.

## Version Integrity
**Story:** As a process owner, I want stale updates prevented from overwriting newer commercial/lifecycle state.
**Acceptance:** Mutating operations validate the required entity/version/state before applying changes.

## Effective-Date Integrity
**Story:** As lifecycle operations, I want processing time distinguished from business effective time.
**Acceptance:** Defined effective dates are validated, persisted and represented separately from request/processing timestamps.

## Async Completion
**Story:** As a consumer, I want long-running operations distinguish acceptance from completion.
**Acceptance:** Submission returns a stable operation/business reference and subsequent status identifies pending, completed, partial or failed state.

## Partial Failure
**Story:** As operations, I want composite transactions recoverable without replaying completed components.
**Acceptance:** Component outcomes are distinguishable and safe retry/compensation behavior is defined.

## Actionable Errors
**Story:** As support, I want API errors explain the business problem and safe next action.
**Acceptance:** Stable error category/code, affected entity/component, correlation and retry/correction guidance are returned where appropriate without exposing sensitive internals.

## Contract Evolution
**Story:** As a consumer owner, I want interface changes avoid silent semantic breakage.
**Acceptance:** Breaking changes use approved version/deprecation behavior and compatibility is tested.

## Authorization
**Story:** As a security owner, I want callers authorized for the specific commercial/lifecycle action and data.
**Acceptance:** Defined operations and data scopes enforce approved authorization independently of simple connectivity.

## Observability
**Story:** As operations, I want interface health tied to business completion.
**Acceptance:** Defined metrics/logs correlate transport processing with business transaction outcome and aged exceptions.

## Reconciliation
**Story:** As governance, I want API-driven state independently reconciled.
**Acceptance:** Defined source expected state and target actual state are compared and unexplained differences routed.

## Guardrail
Do not invent endpoint paths, HTTP methods, payload schemas, authentication, event technology, rate limits, retries, timeouts, SLAs or vendor implementation details. Mark unsupported L4 detail **Unknown / Validation Needed**.
