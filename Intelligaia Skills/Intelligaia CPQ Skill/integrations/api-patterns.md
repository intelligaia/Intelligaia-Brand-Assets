# CPQ/Q2C API Patterns

## Purpose
Define reusable, platform-neutral API and integration-interface patterns for CPQ/Q2C. This entry module focuses on business-safe interface design rather than vendor-specific endpoints.

## Outcomes
Interfaces should preserve commercial intent, business identity, version/effective-date semantics, authorization, idempotency, observability, and recoverability across synchronous and asynchronous boundaries.

## Core Principles
1. Design around business operations, not database CRUD alone.
2. Define the authoritative source and target business state.
3. Use stable identifiers and explicit correlation.
4. Make version/effective-date semantics explicit.
5. Validate before irreversible business execution.
6. Make retries idempotent at the business-operation level.
7. Separate transport success from business completion.
8. Treat partial success as an explicit state.
9. Version contracts without silently changing meaning.
10. Return actionable business errors without exposing sensitive internals.

## Detail Modules
| Topic | Module |
|---|---|
| Operation, resource and contract design | [`api-contract-design.md`](api-contract-design.md) |
| Idempotency, concurrency, versioning and effective dates | [`api-integrity-patterns.md`](api-integrity-patterns.md) |
| Async, event, batch and long-running operation patterns | [`api-async-patterns.md`](api-async-patterns.md) |
| Security, observability and operational governance | [`api-governance.md`](api-governance.md) |
| API requirement and acceptance patterns | [`api-requirements.md`](api-requirements.md) |

## Related Modules
- [End-to-End Data Flow](end-to-end-data-flow.md)
- [State & Events](end-to-end-state-events.md)
- [Integration Operations](end-to-end-operations.md)
- [CCW ↔ Salesforce](ccw-salesforce.md)
- [CCW ↔ Zuora](ccw-zuora.md)
- [Salesforce ↔ Zuora](salesforce-zuora.md)

## Evidence Guardrail
Exact endpoints, HTTP methods, payloads, schemas, authentication mechanisms, event brokers, delivery guarantees, rate limits, retry counts, timeouts, SLAs and vendor APIs are implementation-specific and must be sourced or marked **Unknown / Validation Needed**.
