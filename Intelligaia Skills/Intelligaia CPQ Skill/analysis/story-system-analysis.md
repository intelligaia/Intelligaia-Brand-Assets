# Story Data, Platform & Integration Analysis

## 1. Business Data
Identify the minimum business information required.

Potential domains:
customer/account → partner → opportunity/deal → product/configuration → quote/version → pricing/discount → approval → order → subscription → billing → entitlement.

## 2. Data Semantics
For each material value define:
business meaning → source → owner → editable/read-only → validation → target use → lifecycle.

## 3. Identity
Preserve stable identifiers for relevant:
customer → deal → quote/version → order → subscription → lifecycle transaction → partner.

Exact fields require evidence.

## 4. Source of Truth
Ask which system/domain is authoritative for each decision-driving value.

Do not assume CRM, CPQ, billing, or subscription ownership solely from common practice.

## 5. Platform Mapping
Map story behavior to:
Cisco CCW → Zuora → Salesforce → other evidenced platform.

If platform is not specified, keep analysis vendor-neutral.

## 6. Integration Handoff
For each boundary capture:

**Source → Business Event/Operation → Payload/Data Meaning → Target → Correlation → Expected Result → Failure/Recovery**

## 7. Synchronous vs Asynchronous
Identify whether the user expects immediate completion or a pending operation.

Do not infer implementation transport without evidence.

## 8. Current vs Pending State
Lifecycle stories may require both current effective and future/pending state.

## 9. Version Integrity
Check whether the operation depends on:
quote version → product/catalog version → price validity → approval version → subscription version/state.

## 10. Effective Dates
Ensure date semantics survive cross-system mapping.

## 11. Monetary Semantics
Clarify:
currency → unit/extended → gross/net → recurring/one-time → term → rounding/proration meaning where applicable.

## 12. Product Hierarchy
Preserve parent/child/bundle/component semantics when downstream behavior depends on them.

## 13. Partner Roles
Do not collapse partner, distributor, end customer, payer or service recipient if the story depends on these roles.

## 14. Security / Authorization
Identify:
who may view → edit → discount → approve → order → amend → cancel → see billing/commercial details.

Exact permissions require evidence.

## 15. Audit
Determine which material action/decision must remain traceable.

## 16. Error / Recovery
Map story-specific failures to the reusable integration-error framework rather than duplicating generic mechanics.

## 17. Reconciliation
If story crosses systems, define what business state must match after completion/recovery.

## System Analysis Output
**Data → Semantics → Authority → Platform → Integration → Identity → Version → Dates → Security → Audit → Error/Recovery → Reconciliation → Unknowns**

## Guardrail
Do not invent object names, fields, APIs, middleware, sync directions, timing, retry counts, or platform limitations.
