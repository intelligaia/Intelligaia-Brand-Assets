# Cisco CCW User Stories

## Purpose
Route normalized Cisco Commerce Workspace (CCW) story knowledge while preserving the difference between evidenced CCW behavior, requested future behavior, and platform-neutral CPQ patterns.

Source/reference story evidence belongs in [`../../assets/user-stories/ccw/`](../../assets/user-stories/ccw/).

## Story Groups
| Need | Module |
|---|---|
| Quote creation and revision | [`quoting.md`](quoting.md) |
| Configuration and commercial behavior | [`configuration-pricing.md`](configuration-pricing.md) |
| Discounts and approvals | [`discounts-approvals.md`](discounts-approvals.md) |
| Order handoff and completion | [`ordering.md`](ordering.md) |
| Partner/channel selling | [`partner-sales.md`](partner-sales.md) |
| Exceptions and recovery | [`exceptions-recovery.md`](exceptions-recovery.md) |

## Evidence Rule
These files provide **story architecture and normalization patterns**, not claims that CCW currently implements every described behavior.

A concrete CCW story must link to `SRC-CCW-*` evidence and use the appropriate evidence state.

## Recommended ID
`CCW-<CAPABILITY/JOURNEY>-<NNN>`

Examples:
`CCW-QUOTE-001`, `CCW-APPROVAL-004`, `CCW-ORDER-006`.

## Common Story Context
Capture where relevant:
seller/partner role → customer/deal context → quote/version → configuration → commercial state → approval → customer artifact → order → downstream status.

## Cross-Platform Boundary
If the outcome depends materially on Salesforce, Zuora, billing, entitlement, or another system, create/link a cross-platform story rather than pretending the outcome is CCW-only.

## Guardrails
- Do not infer current CCW functionality from generic CPQ knowledge.
- Do not invent Cisco-specific rules, APIs, fields, approval thresholds, partner programs, or order behavior.
- Preserve source terminology when it is materially meaningful.
