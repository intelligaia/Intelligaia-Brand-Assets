# Source Index

## Purpose
Canonical provenance catalog for evidence used by CPQ Insight.

## Source Record
| Field | Description |
|---|---|
| Source ID | Stable `SRC-*` identifier |
| Source Name | Original artifact/reference name |
| Domain | CCW / Zuora / Salesforce / Cross-Platform / General |
| Source Type | Story / Research / Flow / Screenshot / Document / Other |
| Evidence State | Validated / Historical / Hypothesis / Proposed / Unknown |
| Scope | Project, platform, journey, capability or release context |
| Source Location | Page / slide / row / section / source story ID |
| Asset Path | Canonical location under `assets/` |
| Derived Knowledge | Files/modules derived from this source |
| Notes | Applicability, conflicts, limitations, validation needs |

## Registry
| Source ID | Source Name | Domain | Type | Evidence | Asset Path | Derived Knowledge |
|---|---|---|---|---|---|---|
| _Add during evidence ingestion_ | | | | | | |

## Provenance Chain
**Source → Source Location → Evidence State → Extracted Fact/Story → Knowledge Module → Analysis → Acceptance/Validation**

## Conflict Handling
Preserve conflicting sources, record the conflict, identify scope/version/date differences when evidenced, and mark unresolved conclusions **Validation Needed**.

- `SRC-PROCESS-DOC-001` — **CPQ Tools & Renewal Process.docx** — mixed CPQ reference/process/recommendation source; claim-level evidence state required. Evidence intake: `process-current-state/README.md`.

## Zuora Research / Advisory Source Family
- `SRC-ZUORA-READOUT-001` — Zuora O2O Advisory & Assessment Readout — mixed assessment/recommendation evidence.
- `SRC-ZUORA-RESEARCH-001` — Zuora User Research Findings — research evidence; duplicates require deduplication.
- `SRC-ZUORA-MEETING-001` — Zuora meeting material — stakeholder/context evidence.
- `SRC-ZUORA-PROPOSAL-001` — Forsys Assessment & Advisory Proposal — proposed scope, not proof of execution.
- `SRC-ZUORA-ANALYTICS-001` — Zuora Analytics Sample — demonstrative evidence; production applicability requires validation.

## Cisco Commerce Source Family
- `SRC-CISCO-CASE-001` — Cisco Commerce — Case Study — case-study evidence; duplicate PDF copies form one source lineage unless materially different.
- `SRC-CISCO-COMMERSEX-001` — CommerceX Executive Presentation — strategic/design/modernization evidence; roadmap and delivered capability must remain distinct.

Normalized evidence: `cisco-commerce-evidence/`.

## Detailed User-Story Spreadsheet Sources
- `SRC-US-ZUORA-001` — Zuora CPQ User Stories - DRAFT.xlsx — draft backlog; row-level register under `user-story-spreadsheets/`.
- `SRC-US-INTELLIGAIA-001` — Intelligaia CPQ- Feature / Epic / User Story .xlsx — feature/epic/story backlog with priority, phase and status metadata.
- `SRC-US-CART-001` — CPQ Cart UI (New Data).xlsx.xlsx — cart/UI reference dataset; not automatically a requirement source.

## Comparative Case-Study / Proposal Sources
- `SRC-COMP-HP-001` — HP Ezmeral Case Study — bounded comparative case evidence.
- `SRC-COMP-SYNNEX-001` — Synnex Case Study — bounded comparative case evidence.
- `SRC-COMP-HITACHI-001` — Hitachi ABB Ecommerce UX — bounded UX/ecommerce reference evidence.
- `SRC-COMP-ZUORA-PROP-001` — Forsys Assessment & Advisory Proposal — Zuora — proposed service/scope evidence.
- `SRC-COMP-APTTUS-001` — Apttus Resource Plan — proposed delivery/resource evidence.
- `SRC-COMP-COMMERSEX-001` — CommerceX Executive Presentation — strategy/concept evidence.
