# Zuora User Stories

## Purpose
Route normalized Zuora-related CPQ/Q2C stories with particular care for subscription lifecycle, effective dates, amendments, renewals, cancellations, billing consequences, and cross-system state.

Source/reference evidence belongs in [`../../assets/user-stories/zuora/`](../../assets/user-stories/zuora/).

## Story Groups
| Need | Module |
|---|---|
| CPQ / quote commercial stories | [`cpq-quoting.md`](cpq-quoting.md) |
| Subscription baseline and state | [`subscriptions.md`](subscriptions.md) |
| Amendments | [`amendments.md`](amendments.md) |
| Renewals | [`renewals.md`](renewals.md) |
| Cancellation / non-renewal | [`cancellations.md`](cancellations.md) |
| Billing consequence and handoff | [`billing.md`](billing.md) |
| Exceptions / lifecycle recovery | [`exceptions-recovery.md`](exceptions-recovery.md) |

## Evidence Rule
These modules are story architecture and normalization patterns. They do not assert that a particular Zuora product/configuration currently behaves this way.

Concrete stories must trace to `SRC-ZUORA-*` evidence.

## Recommended ID
`ZUORA-<CAPABILITY/JOURNEY>-<NNN>`

Examples:
`ZUORA-SUB-001`, `ZUORA-AMEND-004`, `ZUORA-RENEW-014`.

## Lifecycle Integrity Model
For lifecycle stories, reason through:

**Authoritative Current State → Pending/Future State → Requested Delta → Effective Date → Commercial Consequence → Approval/Acceptance → Processing → Resulting State → Billing/Service Consequence**

Use only the elements relevant to the evidenced story.

## Cross-Platform Boundary
When Salesforce, CCW, billing, entitlement, payment, or another domain materially participates, link/create a cross-platform story rather than treating the full outcome as Zuora-only.

## Guardrails
- Do not invent Zuora object models, product-edition behavior, APIs, amendment types, billing formulas, renewal settings, or workflow automation.
- Distinguish CPQ commercial intent/estimate from authoritative billing result.
- Preserve source terminology and evidence state.
