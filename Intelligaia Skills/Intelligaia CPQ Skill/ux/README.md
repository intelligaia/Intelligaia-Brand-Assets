# UX

## Purpose
Route CPQ/Q2C experience work to the correct UX module while preserving authoritative business, platform and integration boundaries.

## Start Here
| Need | Module |
|---|---|
| Reusable CPQ experience principles | [`cpq-ux-principles.md`](cpq-ux-principles.md) |
| Seller workflows and experience | [`seller-experience.md`](seller-experience.md) |
| Partner/channel experience | [`partner-experience.md`](partner-experience.md) |
| Current-state usability findings | [`usability-issues.md`](usability-issues.md) |
| Future-state design opportunities | [`design-opportunities.md`](design-opportunities.md) |
| UX completeness/ownership audit | [`UX-AUDIT.md`](UX-AUDIT.md) |

## Analysis Routing
### Current-State Research
Use:
**Evidence → Usability Finding → Root-Cause Analysis → Impact / Dependency**

Start with [`usability-issues.md`](usability-issues.md).

### Future-State Design
Use:
**Validated Finding → Desired Outcome → Opportunity → Proposed Pattern → Validation → Requirement**

Start with [`design-opportunities.md`](design-opportunities.md).

### Seller / Partner Journey
Use the relevant role experience module, then link to capability/journey/integration modules for authoritative rules and mechanics.

## Ownership Boundaries
UX owns interaction principles, role experience, evidence-backed usability diagnostics and proposed design opportunities.

Do not duplicate:
- business rules from `capabilities/`;
- business orchestration from `journeys/`;
- platform behavior from `platforms/`;
- cross-system mechanics from `integrations/`.

## Evidence States
Use consistently:
**Validated · Historical · Hypothesis · Proposed · Unknown / Validation Needed**

## Traceability
Preserve:
**Evidence → Finding → Root Cause → Opportunity → Requirement → Acceptance Criteria → Success Evidence**


## Evidence-Dependent Runtime Rule
UX principles and research dimensions are reusable. Actors, pain points, task frequency, workflow friction and recommended design require source/research evidence.
