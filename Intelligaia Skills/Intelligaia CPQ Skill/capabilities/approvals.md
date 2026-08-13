# Approvals Capability

## Purpose
Define the vendor-neutral CPQ capability for governing commercial exceptions and transaction decisions through explicit approval policy, routing, decision context, and audit.

## Boundary
**Pricing/Discounting = commercial calculation and exception request. Quoting = commercial transaction/version. Approvals = authorization decision.**

## Scope
Approval triggers; authority; routing; sequential/parallel decisions; escalation; delegation; approval context; approve/reject/request-change; resubmission; reapproval; expiry; SLA; audit; version integrity.

## Core Flow
**Detect Trigger → Determine Required Authority → Build Decision Context → Route → Decide → Apply Outcome → Revalidate Commercial State → Preserve Audit**

## Key Questions
- What conditions require approval?
- Which measure drives authority?
- Who can approve each exception?
- Are approvals sequential, parallel, or conditional?
- What happens when an approver is unavailable?
- What information must an approver see?
- What happens after rejection or requested changes?
- Which commercial changes invalidate approval?
- Can approval expire?
- How are approval decisions tied to quote version?

## Detail Modules
| Topic | Module |
|---|---|
| Submission, routing, decision, escalation and reapproval flows | `approvals-flows.md` |
| Policy, authority, routing, state, SLA and audit | `approvals-rules-data.md` |
| Seller/approver UX, diagnostics and KPIs | `approvals-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `approvals-requirements.md` |

## Cross-Links
`discounting.md`, `quoting.md`, `pricing.md`, `../foundations/personas-governance.md`, `../analysis/dependency-analysis.md`

## Evidence Rule
Do not invent thresholds, approvers, hierarchy, SLA, delegation rules, escalation timing, approval sequence, expiration, or reapproval policy.
