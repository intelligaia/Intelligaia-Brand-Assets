# Integration Error Taxonomy

## Purpose
Provide a consistent CPQ/Q2C error classification so routing and recovery depend on business meaning rather than inconsistent platform messages.

## 1. Connectivity / Availability
Target, network, middleware or dependency is unavailable.

### Typical Decision
Is target state known? → if no, verify before retry → if safe and transient, retry according to policy.

## 2. Authentication
Caller cannot authenticate.

Do not repeatedly retry invalid credentials/tokens without remediation.

## 3. Authorization
Authenticated caller lacks permission for the requested business operation or data.

Differentiate access failure from business-rule rejection.

## 4. Contract / Schema
Payload cannot be parsed or violates the interface contract.

Examples of categories:
missing required structure; invalid type/format; unsupported contract version.

## 5. Required Data
Business-required information is missing or invalid.

Potential dimensions:
customer/party; product; quantity; currency; dates; term; commercial values; lifecycle references.

## 6. Reference / Mapping
Source value cannot be resolved to an approved target reference.

Examples:
customer identity; product mapping; enumeration; partner role; billing account.

## 7. Business-Rule Rejection
Request is technically valid but target business rules reject it.

Potential cases:
configuration invalid; discount not approved; quote expired; amendment not eligible; subscription state incompatible.

## 8. State / Version Conflict
Operation is based on stale or incompatible state.

Potential cases:
superseded quote; changed subscription; overlapping amendment; renewal already processed; cancellation pending.

## 9. Duplicate / Idempotency Conflict
Target detects an existing business outcome or reuse of an idempotency reference with conflicting content.

## 10. Sequencing / Ordering
Required predecessor action has not completed or events arrive out of order.

## 11. Concurrency
Two valid operations compete for the same commercial/lifecycle state.

## 12. Timeout / Unknown Outcome
Caller did not receive a conclusive result.

### Critical Rule
Unknown outcome ≠ failed business operation.

Check operation/target state before retry.

## 13. Throttling / Capacity
Target temporarily limits processing.

Retry only according to documented safe policy.

## 14. Downstream Processing
Initial handoff succeeds but a later business step fails.

Example pattern:
order accepted → provisioning fails; subscription created → billing setup fails.

## 15. Partial Success
Some components complete while others fail.

Represent component-level state explicitly.

## 16. Transformation
Data is syntactically valid but transformation produces an invalid or semantically incorrect target representation.

## 17. Commercial Mismatch
Resulting price/rate/discount/currency/quantity/term differs unexpectedly from accepted source semantics.

## 18. Effective-Date Mismatch
Target lifecycle or billing state is effective at the wrong business date.

## 19. Reconciliation Mismatch
Interfaces report success, but expected and actual business state do not match.

## 20. Unknown
Failure cannot yet be classified.

Unknown should trigger diagnosis; it should not become a permanent catch-all.

## Severity Dimensions
Classify separately from error type:
customer impact; financial impact; service impact; transaction blockage; data-integrity risk; regulatory/security impact where applicable; time sensitivity.

Exact severity levels and thresholds require organizational evidence.

## Retryability
Error category alone does not determine retryability. Evaluate:
target outcome known? → source state current? → operation idempotent? → target state changed? → dependency recovered? → business eligibility still valid?

## Guardrail
Do not invent platform-specific codes, severities, retryability rules or ownership.
