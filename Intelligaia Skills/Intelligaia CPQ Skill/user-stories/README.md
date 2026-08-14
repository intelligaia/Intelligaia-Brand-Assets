# CPQ User Stories

## Purpose
Provide an evidence-traceable library of normalized CPQ/Q2C stories aligned to journeys, capabilities, platforms, integrations, analysis and acceptance.

## Source vs Story
Source/reference material belongs in [`../assets/user-stories/`](../assets/user-stories/). This folder contains normalized, analyzed, reusable stories.

## Start Here
| Need | Location |
|---|---|
| Create a normalized story | [`story-template.md`](story-template.md) |
| Cisco CCW stories | [`ccw/`](ccw/) |
| Zuora stories | [`zuora/`](zuora/) |
| Salesforce stories | [`salesforce/`](salesforce/) |
| Cross-platform stories | [`cross-platform/`](cross-platform/) |
| Analyze story quality/dependencies | [`../analysis/story-analysis-framework.md`](../analysis/story-analysis-framework.md) |
| Write acceptance criteria | [`../analysis/acceptance-criteria.md`](../analysis/acceptance-criteria.md) |
| Find source evidence | [`../assets/source-index.md`](../assets/source-index.md) |

## Taxonomy
### Journey
New Business · Quote Revision · Order · Amendment · Renewal · Cancellation/Non-Renewal · Partner/Channel · Exception/Recovery

### Capability
Product Catalog · Configuration · Pricing · Discounting · Quoting · Approvals · Ordering · Subscriptions · Amendments · Renewals · Billing

### Actor
Use evidenced roles such as seller, partner, approver, deal desk, operations, billing/finance, customer success, administrator/system. Avoid generic `user` when role changes intent or authorization.

### Platform Scope
CCW · Zuora · Salesforce · Cross-Platform · Platform-Neutral

## Story IDs
Recommended: `<DOMAIN>-<JOURNEY/CAPABILITY>-<NNN>`.

Examples: `CCW-QUOTE-001`, `ZUORA-RENEW-014`, `SFDC-OPP-003`, `XPLAT-ORDER-007`.

## Evidence & Provenance
Capture original/source reference, `SRC-*` ID, source location, evidence state, interpretation notes, and unresolved assumptions.

**Validated · Historical · Hypothesis · Proposed · Unknown / Validation Needed**

## Story Lifecycle
**Source → Intake → Normalized → Analyzed → Ready for Refinement → Acceptance Defined → Validated / Implemented / Superseded**

## Normalization
**As a [role], I want [business capability/outcome], so that [supported business value].**

Do not encode a proposed UI/API implementation unless it is itself a requirement.

## Required Context
Where relevant expose:
**Actor → Transaction → Journey/Capability → Trigger → Preconditions → Flow → Decisions/Rules → Data → Platform/Integration → State/Version → Exceptions → Dependencies → Acceptance → Evidence**

Use progressive disclosure rather than forcing everything into the one-line story.

## CPQ Integrity Checks
Check relevant configuration validity, pricing/commercial semantics, discount/approval, quote/version integrity, accepted-to-order integrity, lifecycle baseline/pending state, amendment/renewal/cancellation, effective dates, billing/service consequences, partner/customer identity, authorization/confidentiality, and asynchronous/error/recovery/reconciliation.

## Cross-Platform Stories
Use `cross-platform/` when the business outcome spans systems and cannot be accurately represented as one platform story. Do not split an end-to-end outcome merely to match system boundaries.

## Story Splitting
Split independent outcomes, materially different actors/rules, separate lifecycle stages, or independently releasable behavior. Do not over-split until commercial/lifecycle integrity disappears.

## Traceability
**SRC → STORY → GAP → DEP → IMP → AC → Validation Evidence**

Not every story requires every artifact.

## Guardrails
- Never silently improve a source story and present it as original.
- Never infer platform behavior from a story request.
- Never invent rules, thresholds, fields, APIs, ownership or SLAs.
- Never treat proposed future-state stories as validated current capability.
- Preserve contradictory evidence until resolved.


## Architecture Audit
See [`USER-STORIES-AUDIT.md`](USER-STORIES-AUDIT.md) for the consistency, completeness, evidence-discipline and readiness assessment of the full User Stories layer.
