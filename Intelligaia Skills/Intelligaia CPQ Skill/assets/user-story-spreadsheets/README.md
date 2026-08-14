# Detailed User-Story Spreadsheet Evidence — Wave 4

## Sources
- `SRC-US-ZUORA-001` — Zuora CPQ User Stories - DRAFT.xlsx
- `SRC-US-INTELLIGAIA-001` — Intelligaia CPQ- Feature / Epic / User Story .xlsx
- `SRC-US-CART-001` — CPQ Cart UI (New Data).xlsx.xlsx

## Intake Results
### Zuora `Latest`
- 140 populated story rows.
- 46 rows contain Details.
- 6 exact-name duplicate groups / 7 additional duplicate rows.
- Largest functions include: Pricing Administration (22), Product Administration (17), Quote Lines View (12), Amendments (11), Quotation Administration (10), Quotation Process (10).

### Intelligaia `In Progress`
- 384 rows contain actor + task + goal and were treated as story records.
- 152 contain acceptance-criteria text.
- Priority distribution: High 225, Low 49, Medium 32.
- Phase distribution: Phase 2 113, Phase 1 196, Phase 3 16.
- 6 normalized duplicate groups / 9 additional duplicate rows.

### CPQ Cart UI
- 134 non-empty data/example rows across Salesforce, Telenor, Akamai and Sheet1.
- This source is treated as **design/reference data**, not automatically as user-story evidence.

## Evidence Classification
Backlog/user-story rows are **Proposed** unless another authoritative source establishes implementation or operational behavior.

Priority, phase, task, Done, Dev Status, Review and comments are preserved as source metadata. They are not silently translated into production evidence.

## Normalization Rules
1. Preserve source workbook + sheet + row.
2. Preserve original actor/task/goal or summary/details wording.
3. Do not merge duplicate rows silently.
4. Duplicate requirements are not independent corroboration.
5. Separate user/business need from embedded solution prescription during downstream normalization.
6. Acceptance criteria remain source acceptance criteria; derived AC must be explicitly labelled derived.
7. Missing actor, rationale, state semantics, error behavior or ownership becomes a validation question rather than an invented detail.

## Registers
- [`zuora-row-register.md`](zuora-row-register.md)
- [`intelligaia-row-register.md`](intelligaia-row-register.md)
- [`cart-ui-row-register.md`](cart-ui-row-register.md)
- [`normalization-findings.md`](normalization-findings.md)
