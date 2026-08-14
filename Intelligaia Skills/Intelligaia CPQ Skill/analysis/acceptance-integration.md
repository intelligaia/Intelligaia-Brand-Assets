# Integration, Error & Recovery Acceptance Criteria

## 1. Business Contract
Test the cross-system business outcome:
source → operation/event → required data → target → correlated result.

Do not reduce acceptance to “API returns 200.”

## 2. Identity
Verify the target result is associated with the correct:
customer → deal → quote/version → order → subscription → partner as relevant.

## 3. Semantic Integrity
Test that mapped values preserve business meaning:
currency → quantity → term → effective date → product identity → commercial measures → role.

## 4. Authorization
Verify only authorized actors/systems can invoke or view the operation/data.

## 5. Success
Successful technical response must correspond to the expected business state.

## 6. Validation Error
When input violates a known business rule:
no invalid business outcome is committed and the error is actionable/correlated.

## 7. Technical Failure
When the target/integration is unavailable:
preserve valid source work and expose a safe recovery path.

## 8. Timeout / Unknown Outcome
When completion cannot be determined:
do not instruct blind resubmission; verify status before a potentially duplicating action.

## 9. Retry
Test retry against the actual duplicate-prevention/idempotency design.

## 10. Partial Success
Where multi-component processing exists:
verify each component's status and the overall transaction state.

## 11. Ordering
If event/operation order matters, test out-of-order or stale updates according to the actual design.

## 12. Duplicate Message / Request
Verify duplicate input does not create unintended duplicate business state.

## 13. Stale Version
When source state changes after request creation, verify stale work is rejected, recalculated, or handled according to policy.

## 14. Correlation
Support/operations must be able to correlate source and target business transactions where required.

## 15. Reconciliation
Verify expected source/target business states can be compared and mismatches identified.

## 16. Recovery
Criteria should cover:
who/what retries → preserved state → correction → final verification → audit.

## 17. Security Failure
Unauthorized or invalid identity must fail without exposing protected commercial/customer information.

## 18. Observability
Where operational support is required, verify meaningful business status/error context is available—not necessarily internal technical details to end users.

## 19. Performance / SLA
Use approved timing criteria only. Otherwise state the business expectation qualitatively and flag numeric SLA as TBD.

## 20. Contract Evolution
When integration semantics change, include compatibility/migration acceptance for affected consumers.

## Guardrail
Do not invent status codes, event names, retry counts, timeout values, APIs, middleware, or SLAs.
