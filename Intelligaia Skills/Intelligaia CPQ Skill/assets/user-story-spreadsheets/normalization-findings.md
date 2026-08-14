# User-Story Spreadsheet — Normalization Findings

## `US-FIND-001` — Draft status is explicit
The Zuora material is a draft/scoped user-story set subject to stakeholder review and grooming. Treat story rows as proposed requirements, not validated implementation.

## `US-FIND-002` — Story coverage is broad but uneven
The Zuora `Latest` sheet spans product administration, pricing, catalog/configuration, quotation, approvals, amendments, renewals, collaboration and related administration. Coverage breadth does not establish completeness for every Q2C domain.

## `US-FIND-003` — Duplicate requirements exist
Exact-name duplicates occur in the Zuora backlog, and normalized actor/task/goal duplicates occur in the Intelligaia backlog. Preserve row lineage and consolidate only in a derived normalized layer.

## `US-FIND-004` — Acceptance criteria are incomplete
Many Intelligaia story rows do not contain acceptance criteria. Missing AC must remain a gap; do not manufacture source AC.

## `US-FIND-005` — Solution-prescriptive wording requires separation
Some backlog rows describe UI controls, automation, platform behavior or implementation mechanisms. Preserve the original wording, then derive the underlying user/business outcome separately when useful.

## `US-FIND-006` — Status metadata is not implementation proof
Phase, priority, task, Done, Dev Status and review columns describe backlog/work status. They do not prove deployment, adoption or current production behavior.

## `US-FIND-007` — Cart workbook is reference data
The CPQ Cart UI workbook contains example product, pricing, adjustment, approval and net-price data across named sheets. It can inform UX/data-shape analysis but is not automatically a requirement or production-data source.

## Downstream Story Pattern
For derived normalized stories use:

**Source Row → Actor → Business Trigger → Need/Task → Business Outcome → Relevant State/Data → Acceptance Evidence → Exceptions → Traceability**

If the source does not provide a field, mark it **Validation Needed** rather than filling it silently.
