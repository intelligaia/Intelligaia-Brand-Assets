# CPQ Insight Content Quality Standard

## Purpose
Define the release quality gate for every CPQ Insight module. This file governs content architecture and maintainability; `SKILL.md` remains the operating router.

## Progressive Disclosure
1. Keep entry/router modules concise.
2. Put deep flows, controls/data, UX/diagnostics, and reusable requirements in focused linked modules.
3. Prefer modules comfortably below 500 lines.
4. Split by coherent concern, not arbitrary line count.

## Authoritative Ownership
Each concept should have one primary home:
- foundations: shared CPQ/Q2C concepts and terminology;
- capabilities: reusable business capability behavior;
- journeys: end-to-end orchestration across capabilities;
- platforms: product/platform-specific behavior;
- integrations: system-to-system contracts, mapping and failure handling;
- UX: cross-cutting experience guidance;
- analysis: reusable analysis methods;
- user-stories: sourced/organized requirements;
- intelligaia: service/opportunity mapping.

Other modules should link rather than restate substantial content.

## Evidence Discipline
Distinguish:
- **Sourced / Validated** — directly supported by supplied evidence;
- **Historical** — supported but tied to an earlier state/time;
- **Proposed** — recommendation or future-state design;
- **Hypothesis** — plausible diagnostic requiring validation;
- **Unknown / Validation Needed** — required detail not supported by evidence.

Never invent customer-specific thresholds, rules, fields, mappings, APIs, statuses, approval logic, commercial policy, or platform behavior.

## Flow Depth
- **L0:** business outcome / value stream.
- **L1:** major stages.
- **L2:** business process steps and actors.
- **L3:** decisions, exceptions, handoffs, controls, data and state.
- **L4:** implementation detail: objects, fields, APIs, mappings, status transitions, platform automation.

Vendor-neutral capability/journey modules normally stop at L2/L3. Put L4 in platform/integration modules when supported.

## Module Pattern
Use only sections relevant to the module:
Purpose → Scope/Boundary → Flow/Routing → Decisions/Exceptions → Controls/Data/Lineage → UX/Diagnostics → Requirements/Acceptance → Cross-References → Evidence Guardrail.

## Link Quality
Use relative Markdown links for navigable cross-references. Before release verify:
- target exists;
- no orphan detail module;
- entry module routes to its detail modules;
- no circular duplication masquerading as navigation.

## Terminology
Prefer canonical terms from `terminology.md`. Distinguish quote/version, order, subscription/installed base, charge, invoice, customer/end customer, partner, acceptance, approval, amendment, renewal, cancellation, credit and refund.

## Integrity Controls
Where applicable preserve:
authoritative baseline → version integrity → approval integrity → acceptance integrity → source/target lineage → effective dates → duplicate prevention → reconciliation.

## Release Gate
Before packaging:
1. scan line counts;
2. scan broken relative links;
3. identify empty/shallow placeholders;
4. inspect duplicate/overlapping ownership;
5. verify entry-to-detail routing;
6. verify evidence labels/guardrails;
7. verify platform-specific detail is not asserted in vendor-neutral modules;
8. verify version/release notes;
9. package only after blocking findings are fixed.
