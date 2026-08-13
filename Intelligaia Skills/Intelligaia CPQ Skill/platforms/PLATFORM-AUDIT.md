# Platform Evidence & Completeness Audit

## Purpose
Assess whether the platform knowledge layer is structured, evidence-safe, complete enough for CPQ/Q2C advisory work, and ready for later source enrichment.

## Scope
Review platform modules as architecture and knowledge boundaries, not as validation of any customer's implementation.

## Audit Principles
1. Platform files describe platform-specific knowledge only when evidence supports it.
2. Generic CPQ/Q2C concepts belong in foundations/capabilities/journeys.
3. Customer/org configuration must not be inferred from vendor/product capability.
4. Source-of-truth, integration, object/field/API and automation claims require evidence.
5. Unknown implementation detail remains **Unknown / Validation Needed**.

## 1. Domain Coverage
The platform layer should be able to route knowledge for:
- CRM/deal context;
- product/catalog/configuration;
- pricing/discounting;
- quote/version/proposal;
- approvals;
- ordering;
- subscription/lifecycle;
- billing consequences;
- partner/channel context;
- integrations;
- exception/recovery;
- platform-specific UX/operational behavior when evidenced.

A platform does not need every domain if it does not own that concern.

## 2. Generic vs Platform-Specific Boundary
### Keep Generic
Business semantics such as quote integrity, effective-date reasoning, lifecycle state, approval principles, retry safety and reconciliation belong primarily in shared layers.

### Keep Platform-Specific
Use platform files for evidenced:
product terminology → platform behavior → supported capability → platform state/model → platform-specific limitation → platform integration behavior.

### Avoid Duplication
Platform modules should link to shared capabilities/journeys rather than restating generic CPQ theory.

## 3. Evidence Posture
Every concrete platform claim should be classifiable as:
**Validated · Historical · Hypothesis · Proposed · Unknown / Validation Needed**

Preferred provenance:
`SRC-*` → source location → extracted platform fact → platform module → derived story/analysis.

## 4. Salesforce Boundary
Required separation:
CRM/deal context ≠ quote state ≠ approval state ≠ order state ≠ subscription/billing state.

Audit checks:
- no assumption of Salesforce CPQ vs Revenue Cloud vs custom implementation;
- no invented objects/fields/flows/Apex/APIs;
- no assumed stage-to-downstream completion mapping;
- integrations identify authority only when sourced.

## 5. Cisco CCW Boundary
Audit checks:
- generic commerce/CPQ patterns are not presented as current CCW behavior;
- Cisco-specific configuration, pricing, approval, partner and order rules require evidence;
- quote/order state names and APIs are not invented;
- cross-platform lifecycle outcomes are not incorrectly assigned to CCW.

## 6. Zuora Boundary
Audit checks:
- CPQ intent is distinguished from authoritative subscription/billing outcome;
- current/pending/future lifecycle state is preserved;
- amendment/renewal/cancellation rules require evidence;
- proration, billing, object model and automation are not invented;
- downstream completion is not inferred from quote creation.

## 7. Source-of-Truth Audit
For each shared business concept ask:
- Which domain/platform is authoritative?
- Is that authority evidenced?
- Is another system a consumer/cache/estimate?
- What happens when states diverge?

If unsupported, record **Unknown / Validation Needed**.

## 8. Integration Completeness
Platform integration knowledge should cover, where evidenced:
trigger → source → data/semantics → target → expected result → correlation → status → failure/recovery → reconciliation.

Do not require a technical implementation pattern unless the source establishes it.

## 9. Lifecycle Completeness
Where a platform participates in lifecycle change, assess:
authoritative baseline → pending state → delta → effective date → commercial consequence → processing → resulting state → billing/service consequence.

Ownership may span platforms.

## 10. Exception / Operational Completeness
Check whether platform knowledge can represent:
validation failure → stale state → timeout/unknown outcome → partial success → duplicate/retry → authorization failure → reconciliation.

Exact mechanisms remain evidence-dependent.

## 11. Party & Security Completeness
Where relevant distinguish:
seller → customer → partner → distributor → payer/bill-to → service recipient → approver.

Do not infer platform permission/sharing implementation.

## 12. Missing-Evidence Register
During source enrichment, capture unresolved platform facts in a structured register:

| ID | Platform | Claim / Question | Needed Evidence | Status |
|---|---|---|---|---|
| PE-001 | | | | Validation Needed |

Examples:
- actual source of truth for quote status;
- exact approval routing;
- supported lifecycle operations;
- downstream order status semantics;
- billing authority;
- partner/customer role mapping.

## 13. Source-Enrichment Readiness
A platform module is ready for enrichment when it has:
- clear scope/boundary;
- links to generic knowledge rather than duplication;
- evidence-state discipline;
- provenance path;
- explicit unknowns;
- integration/lifecycle touchpoints where relevant;
- no unsupported implementation assertions.

## 14. Audit Result
**Status: Platform layer is structurally ready for evidence enrichment, with implementation-specific facts intentionally unresolved.**

The next work should not expand platform claims speculatively. It should map evidence and opportunities, then enrich the platform layer from supplied source artifacts.

## Guardrail
Architecture completeness is not evidence that a product or customer environment supports a described behavior.
