# CCW ↔ Salesforce — UX & Diagnostics

## Seller Experience Goal
The seller should experience Salesforce and CCW as one coherent commercial journey even when responsibilities remain separated across platforms.

## Desired Experience Questions
- Can the seller start/resume the correct CCW transaction from the relevant Salesforce context?
- Is customer/deal context reused rather than re-entered?
- Is the current quote/version obvious?
- Can the seller understand whether action is needed in Salesforce or CCW?
- Is approval/order status visible at the right level?
- Can the seller return to the transaction without creating duplicates?

## Context-Switch Diagnostic
**Salesforce Step → CCW Step → Data Re-entered → User Decision → Return Step → Lost Context? → Evidence**

## Quote-Correlation Diagnostic
**Opportunity → Expected CCW Quote(s) → Actual Quote(s) → Current Version → Salesforce Reference → Duplicate/Stale? → Evidence**

## Data-Reentry Diagnostic
For each field manually repeated across systems:
business meaning → source of truth → why re-entered → risk → integration opportunity → evidence.

## Status Diagnostic
**CCW State → Seller Meaning → Salesforce Display → Freshness → Required Action → Evidence**

A status is not useful if the seller cannot interpret its business consequence.

## Error Diagnostic
**User Action → Handoff → Error → What User Sees → Can Retry? → Duplicate Risk → Owner → Evidence**

## Common Failure Hypotheses
Validate before asserting:
- seller rekeys account/opportunity data in CCW;
- multiple CCW quotes exist for one Salesforce opportunity without clear primary semantics;
- Salesforce displays stale quote totals/status;
- seller cannot resume the correct quote;
- approval status differs across systems;
- quote is accepted but Salesforce remains in an earlier stage;
- order reference is not returned;
- partner/end-customer identities are confused;
- integration failure causes duplicate quote creation.

## Operational Diagnostics
Track:
missing correlation; duplicate correlation; stale version; mapping failure; invalid customer/party; status mapping error; return-update failure; quote initiation retry; orphan Salesforce or CCW transaction.

## KPI Candidates
Potential measures:
manual re-entry; quote launch/resume success; duplicate quote rate; integration error rate; stale-status incidents; handoff latency; orphan transaction count; manual relinking; seller support cases.

Do not invent targets.

## Design Opportunities
Evidence may support:
single transaction launcher/resume; contextual quote summary; current-version indicator; cross-system status timeline; actionable error recovery; duplicate detection; role-aware partner/customer context; direct navigation to the system requiring action.

Mark future-state ideas **Proposed**.

## Guardrail
Do not claim current Cisco/Salesforce UI behavior unless supported by source evidence.
