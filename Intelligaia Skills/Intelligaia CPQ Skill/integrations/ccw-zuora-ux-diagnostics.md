# CCW ↔ Zuora — UX & Diagnostics

## Seller Experience Goal
A seller should not need to understand billing-system implementation to know whether an accepted commercial transaction is ready, processing, blocked, or successfully established downstream.

## Operations Experience Goal
Operations should be able to trace the commercial source to the exact subscription/billing result and resolve failures without recreating transactions blindly.

## Transaction Trace Diagnostic
**CCW Quote/Version → Order/Operation → Zuora Account → Subscription → Charges → Billing State → Evidence**

## Product Mapping Diagnostic
**CCW Product/Component → Expected Subscription/Charge Representation → Actual Representation → Difference → Mapping Owner → Evidence**

## Commercial Diagnostic
**Accepted Quantity/Price/Discount/Currency/Term → Transformed Values → Subscription/Charge Values → Difference → Reason → Evidence**

## Date Diagnostic
**Requested/Accepted Dates → Transformation → Subscription Start → Charge Start → Billing Period → Difference → Evidence**

## Lifecycle Diagnostic
**Current Subscription → Requested Amendment/Renewal/Cancellation → Effective Date → Expected Result → Actual Result → Billing Result → Evidence**

## Account Diagnostic
**End Customer → Payer/Bill-To → Expected Zuora Account → Actual Account → Duplicate/Ambiguous? → Evidence**

## Error Diagnostic
**Business Operation → Failed Step → Completed Target State → Error Category → Safe Retry? → Owner → Resolution → Evidence**

## Common Failure Hypotheses
Validate before asserting:
- accepted quote creates duplicate billing account;
- configured product loses hierarchy during transformation;
- wrong charge type is created;
- quote net price and target rate have different semantics;
- subscription start and charge start are unintentionally different;
- amendment uses stale baseline;
- future-dated change is ignored by renewal;
- retry creates duplicate subscription/change;
- cancellation stops subscription but billing continues;
- partner is used as subscription owner when end customer should be;
- source quote cannot be traced from invoice/subscription.

## Operational Exception Categories
Potential:
customer match; product mapping; invalid configuration; unsupported charge model; commercial mismatch; date/term mismatch; target business-rule rejection; duplicate/conflict; lifecycle sequencing; billing failure; reconciliation mismatch.

## KPI Candidates
Downstream creation success; account-match exceptions; product-map exceptions; subscription fallout; duplicate prevention; lifecycle-change failure; billing mismatch; reconciliation exceptions; manual correction; time to resolution.

Do not invent targets.

## Design Opportunities
Evidence may support:
downstream readiness indicator; subscription/billing status summary; lifecycle timeline; actionable error details; mapping diagnostics; retry/resume controls; commercial/date comparison; source-to-target trace.

Mark future-state designs **Proposed**.

## Guardrail
Do not claim current CCW/Zuora UI or operational behavior without source evidence.
