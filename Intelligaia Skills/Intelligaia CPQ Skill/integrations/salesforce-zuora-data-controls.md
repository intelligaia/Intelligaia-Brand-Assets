# Salesforce ↔ Zuora — Data & Controls

## 1. Source-of-Truth Matrix
Explicitly assign ownership for:
customer identity; legal/billing attributes; payer; opportunity; commercial transaction; subscription; product/charge; effective dates; billing; renewal pipeline; lifecycle status.

## 2. Identity Correlation
Define stable relationships between applicable:
**Salesforce Account/Customer → Zuora Customer/Billing Account → Subscription**

Exact objects/IDs require evidence.

## 3. Customer Matching
Define deterministic matching, ambiguous-match handling, duplicate prevention, merge behavior and correction ownership.

## 4. Field Ownership
Classify each synchronized attribute:
Salesforce-authoritative; Zuora-authoritative; transformed; derived; defaulted; informational replica.

## 5. Conflict Resolution
For any bidirectional field define:
version/timestamp basis → precedence → user override → conflict handling → audit.

Avoid last-write-wins unless explicitly approved.

## 6. Subscription Summary
If subscription data is surfaced in Salesforce, define the minimal business view:
subscription identity; lifecycle status; products/quantities; start/end; renewal boundary; pending changes; commercial summary where justified.

## 7. Product Mapping
If Salesforce product context is mapped to Zuora lifecycle/billing constructs, preserve stable product identity and mapping version.

## 8. Commercial Semantics
For synchronized monetary values define:
meaning; currency; unit/extended basis; gross/net; discount relationship; term scope; authoritative owner.

## 9. Date Semantics
Distinguish:
opportunity close; quote validity; requested start; subscription start/end; charge start/end; amendment effective; renewal date; cancellation date; invoice/service period.

## 10. Renewal Amount Semantics
If a renewal amount is stored in Salesforce, document its formula/source and whether it represents current recurring value, projected renewal, booked renewal, forecast value, or another measure.

Never infer.

## 11. Renewal Ownership
Define who determines:
renewal eligibility; renewal trigger; opportunity creation; renewal owner; forecast status; quote initiation; accepted outcome.

## 12. Pending Changes
A Salesforce subscription view should distinguish current effective state from future-dated/pending amendment or cancellation state where relevant.

## 13. Lifecycle Transaction Correlation
Preserve:
source subscription → Salesforce lifecycle work/opportunity → commercial quote/order where applicable → Zuora lifecycle transaction → resulting subscription/term.

## 14. Version / Stale Protection
Prevent older subscription/billing responses from overwriting newer Salesforce lifecycle context.

## 15. Status Mapping
Document:
**Zuora State → Business Meaning → Salesforce State/Display → Allowed Transition → Freshness → Action**

Exact values require evidence.

## 16. Billing Summary
If billing information returns to Salesforce, define purpose, freshness, security, owner and whether the value is informational or actionable.

## 17. Party Roles
Separate customer, end customer, partner, payer/bill-to and service relationships.

## 18. Duplicate Prevention
Retries must not create duplicate billing accounts, subscriptions, amendments, renewals, cancellations or renewal opportunities.

## 19. Security / Access
Subscription and billing information displayed in Salesforce should follow approved authorization and data-minimization rules.

## 20. Audit
Preserve correlation changes, lifecycle requests, returned states, manual corrections, ownership overrides, retries and reconciliation decisions.

## 21. Reconciliation
Compare business semantics rather than similarly named fields.

## Validation Matrix
Obtain evidence for:
objects → IDs → field ownership → customer matching → sync direction → triggers → lifecycle actions → renewal automation → status mapping → billing summary → pending changes → retries → reconciliation → security.

## Guardrail
Specific Salesforce/Zuora objects, custom fields, managed packages, APIs, event topics, flows, triggers, formulas and mappings are **Unknown / Validation Needed** unless sourced.
