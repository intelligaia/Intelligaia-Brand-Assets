# Salesforce ↔ Zuora — UX & Diagnostics

## Seller / Customer Success Goal
Salesforce users should see enough current subscription/lifecycle context to take the next commercial action without needing to reconstruct the customer state from billing-system screens.

## Operations Goal
Lifecycle requests initiated or surfaced in Salesforce should remain traceable to the authoritative Zuora result.

## Customer Identity Diagnostic
**Salesforce Customer → Expected Billing/Payer Relationship → Zuora Account → Subscription → Duplicate/Ambiguous? → Evidence**

## Subscription Visibility Diagnostic
**Authoritative Subscription State → Salesforce View → Freshness → Missing Fields → Pending Changes Visible? → User Decision Risk → Evidence**

## Renewal Diagnostic
**Source Subscription/Term → Renewal Trigger → Salesforce Renewal Work → Quote/Decision → Zuora Next Term → Salesforce Completion → Evidence**

## Amendment Diagnostic
**Salesforce Request → Retrieved Baseline → Proposed Delta → Effective Date → Zuora Result → Salesforce Updated State → Evidence**

## Billing Visibility Diagnostic
**Business Need → Zuora Billing Data → Salesforce Representation → Freshness → User Action → Security/Ownership → Evidence**

## Status Diagnostic
**Zuora State → Salesforce Display → Business Meaning → Freshness → Required Action → Evidence**

## Error Diagnostic
**Salesforce Action → Integration Step → Target State → Error → User Message → Retry/Resume → Owner → Evidence**

## Common Failure Hypotheses
Validate before asserting:
- Salesforce and Zuora contain duplicate customer identities;
- seller sees stale subscription state;
- future-dated amendment is displayed as current;
- renewal opportunity is generated twice;
- renewal amount has unclear semantics;
- lifecycle request is based on stale installed base;
- Salesforce status differs from actual Zuora state;
- billing summary is stale or overexposed;
- partner and payer roles are conflated;
- retry creates duplicate amendment/subscription;
- completed Zuora renewal does not close/update Salesforce renewal work.

## Operational Exception Categories
identity/match; stale subscription; lifecycle concurrency; product mapping; date/term mismatch; renewal correlation; duplicate transaction; status sync; billing summary; authorization; reconciliation.

## KPI Candidates
customer-match exceptions; stale-state incidents; renewal creation duplicates; lifecycle integration failures; manual corrections; status latency; reconciliation mismatches; support cases; retry rate.

Do not invent targets.

## Design Opportunities
Evidence may support:
subscription summary panel; current-vs-pending state; renewal timeline; lifecycle action launcher; billing-health summary; source freshness indicator; direct trace to authoritative transaction; actionable recovery.

Mark future-state ideas **Proposed**.

## Guardrail
Do not claim current Salesforce or Zuora UX behavior unless supported by supplied evidence.
