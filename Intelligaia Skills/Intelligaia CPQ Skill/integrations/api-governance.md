# API Governance, Security & Operations

## 1. Ownership
Every interface should identify:
business owner; API/interface owner; producer owner; consumer owner; data owner; support/escalation owner.

## 2. Authentication
Use the organization's approved service/user authentication mechanism. Exact mechanisms are implementation-specific.

## 3. Authorization
Authorize the business action, not merely API access. A caller allowed to read a quote may not be allowed to discount, order, amend, cancel, or access billing data.

## 4. Least Privilege
Grant only operations/data required for the integration purpose.

## 5. Data Minimization
Do not replicate full CRM, CPQ, subscription, or billing records when the consumer needs a small governed subset.

## 6. Sensitive Data
Classify and protect personal, financial, contractual, credential, and other restricted data according to approved policy.

## 7. Secrets
Never place credentials/tokens/secrets in payload examples, logs, URLs, source repositories, or user-visible error messages.

## 8. Transport / Storage Protection
Encryption and certificate/key-management requirements must follow approved enterprise/security architecture.

## 9. Logging
Log enough to trace:
operation → entity → correlation → result → latency → error category.

Avoid logging sensitive payload content unnecessarily.

## 10. Observability
Monitor:
availability; latency; throughput; failure; throttling; business completion; aged pending operations; reconciliation mismatch.

## 11. Business SLO/SLA
Technical API uptime alone is insufficient. Where defined, measure end-to-end business completion and exception recovery.

Do not invent targets.

## 12. Rate Limits / Throttling
Consumers should handle documented throttling safely without uncontrolled retry storms.

Exact limits require evidence.

## 13. Retry Governance
Define retryable categories, backoff strategy, maximum attempts, stale-state checks and escalation.

## 14. Change Management
Contract changes should include:
impact analysis → compatibility review → consumer notification → test → rollout → rollback/deprecation plan.

## 15. Deprecation
Define supported versions and migration timelines. Do not silently remove fields/semantics used by active consumers.

## 16. Test Strategy
Include:
contract tests; mapping tests; authorization tests; idempotency; concurrency; stale version; partial failure; timeout/retry; lifecycle effective dates; reconciliation.

## 17. Non-Production Safety
Test environments should prevent accidental customer communications, production orders, billing, entitlement or fulfillment actions.

## 18. Audit
Material commercial/lifecycle API actions should be attributable to a user/system and correlated to business state.

## 19. Documentation
For each interface maintain:
purpose; owner; consumers; contract/schema; examples; business semantics; errors; security; versioning; operational runbook; dependencies.

## 20. Evidence
Implementation documents should identify whether behavior is current, historical, proposed, or unknown.

## Guardrail
Do not invent security standards, authentication protocols, encryption settings, rate limits, SLAs, monitoring tools, retention periods, or organizational ownership.
