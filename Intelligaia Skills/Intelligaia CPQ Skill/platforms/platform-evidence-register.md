# Platform Evidence Register

## Purpose
Track platform-specific claims/questions that require source evidence before being treated as reliable knowledge.

## Record
| Field | Meaning |
|---|---|
| Evidence ID | `PE-<NNN>` |
| Platform | Salesforce / CCW / Zuora / Other |
| Domain | Quote / Pricing / Approval / Order / Lifecycle / Billing / Integration / UX / Other |
| Claim / Question | Exact fact needing validation |
| Source ID | `SRC-*` when available |
| Source Location | page / slide / row / section |
| Evidence State | Validated / Historical / Hypothesis / Proposed / Unknown |
| Authority / Scope | product, org, project, release, customer context |
| Knowledge Target | platform file to update |
| Notes | conflicts, caveats, follow-up |

## Register
| ID | Platform | Domain | Claim / Question | Source | Evidence State | Target |
|---|---|---|---|---|---|---|
| _Add during evidence enrichment_ | | | | | | |

## Rules
- One evidence record may support several knowledge files.
- Preserve conflicting evidence rather than silently reconciling it.
- Vendor capability does not prove customer configuration.
- Customer configuration does not prove product-wide behavior.
- Historical implementation does not prove current state.
- Unknown source-of-truth or ownership stays **Validation Needed**.
