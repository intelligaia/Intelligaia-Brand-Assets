# Cross-Platform CPQ/Q2C User Stories

## Purpose
Represent business outcomes that cross CRM, CPQ/commerce, approval, order, subscription/lifecycle, billing or service boundaries.

Source evidence belongs in `../../assets/user-stories/cross-platform/`.

## Modules
| Outcome | Module |
|---|---|
| Lead/deal through quote | [`deal-to-quote.md`](deal-to-quote.md) |
| Quote through order | [`quote-to-order.md`](quote-to-order.md) |
| Order through subscription/billing | [`order-to-subscription.md`](order-to-subscription.md) |
| Amend/renew/cancel lifecycle | [`lifecycle-change.md`](lifecycle-change.md) |
| Partner/channel transaction | [`partner-channel.md`](partner-channel.md) |
| Failure/recovery/reconciliation | [`exceptions-reconciliation.md`](exceptions-reconciliation.md) |

## Evidence Rule
These modules define end-to-end story architecture, not a claim that Salesforce, CCW, Zuora or another platform owns a particular step. Concrete stories must trace to `SRC-XPLAT-*` and/or relevant platform source IDs.

## Recommended ID
`XPLAT-<JOURNEY/CAPABILITY>-<NNN>`

## End-to-End Model
**Business Trigger → Source Context → Commercial Transaction → Decision/Acceptance → Handoff → Downstream Processing → Resulting State → Reconciliation/Validation**

For each boundary identify:
owner/authority → business data → correlation → state → failure semantics.

## Story Boundary Rule
Do not split a single business outcome solely because several systems participate. Create platform child stories/dependencies when implementation ownership requires them.

## Guardrails
Never infer source-of-truth, sync direction, API, object/field mapping, event, timing, SLA, or platform ownership without evidence.
