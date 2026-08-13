# Salesforce User Stories

## Purpose
Route normalized Salesforce-related CPQ/Q2C stories while separating CRM/deal context from CPQ commercial execution and downstream lifecycle/billing outcomes.

Source evidence belongs in [`../../assets/user-stories/salesforce/`](../../assets/user-stories/salesforce/).

## Story Groups
| Need | Module |
|---|---|
| Account, opportunity and deal context | [`opportunity-context.md`](opportunity-context.md) |
| CPQ and quote orchestration | [`cpq-quoting.md`](cpq-quoting.md) |
| Approvals and commercial governance | [`approvals.md`](approvals.md) |
| Customer/partner identity and access | [`customer-partner-context.md`](customer-partner-context.md) |
| Cross-system handoffs | [`integrations.md`](integrations.md) |
| Exceptions, stale state and recovery | [`exceptions-recovery.md`](exceptions-recovery.md) |

## Evidence Rule
These are normalization/coverage patterns, not assertions about a specific Salesforce org, Salesforce CPQ, Revenue Cloud, object model, automation or integration. Concrete stories must trace to `SRC-SFDC-*`.

## Recommended ID
`SFDC-<CAPABILITY/JOURNEY>-<NNN>`

## Boundary Model
**CRM / Deal Context → Commercial Transaction → Approval / Acceptance → Order / Lifecycle Handoff → Resulting Status**

Evidence must establish the system responsible for each stage.

## Guardrails
Do not invent objects, fields, record types, flows, Apex, APIs, permissions, approval thresholds, package behavior, or synchronization. Do not treat CRM stage as proof of quote/order/subscription completion.
