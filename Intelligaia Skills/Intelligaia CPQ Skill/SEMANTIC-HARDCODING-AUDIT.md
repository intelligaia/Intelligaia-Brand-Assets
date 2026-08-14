# Package-Wide Semantic Hardcoding Audit — v6.7

## Scope
Reviewed **323 Markdown files** across the complete skill package after the User Story deep audit.

## Governing Test
**Reusable structure may be static. Customer facts, actor, rationale, implementation, rules, ownership and value must be evidence-derived.**

A literal value is not automatically a defect. It is acceptable when it is:
- source evidence with provenance;
- an explicitly labelled example;
- a methodology invariant;
- a safety/evidence rule.

It is a defect when reusable guidance can cause a literal customer-specific value or conclusion to be emitted without evidence.

## Areas Reviewed
- User Stories
- Journeys
- Capabilities
- Platforms
- Integrations
- UX
- Analysis
- Opportunity Mapping
- Acceptance Criteria
- Assets/evidence
- routers, READMEs and package guidance

## Findings and Corrections

### User Stories
v6.6 already parameterized all reusable Story Pattern bodies. No regression is permitted.

### Journeys
Reusable stages may remain static. Added an explicit runtime rule that ownership, handoffs, triggers, exceptions and outcomes are customer-evidence dependent.

### Capabilities
Capability names/definitions remain static taxonomy. Added an explicit rule preventing definitions from being treated as proof of customer rules, thresholds, configuration or maturity.

### Platforms
Vendor/platform patterns remain reference knowledge. Added explicit protection against inferring customer version/configuration, objects, rules or source-of-truth.

### Integrations
Integration analysis dimensions remain reusable. Added explicit protection for source/target, API, middleware, sync direction, retry, authority and failure semantics.

### UX
Reusable research/design principles remain static. Added explicit protection for actor, pain point, frequency, workflow friction and recommendations.

### Analysis
Framework structure remains static. Added explicit rule that gap, dependency, impact, severity and causality require evidence or explicit hypothesis state.

### Opportunity Mapping
Reusable service motions remain static. Added explicit rule preventing reverse-inference of customer pain, readiness, scope, value or quantified benefit.

### Acceptance Criteria
Reusable quality dimensions remain static. Added explicit rule that final AC must be scenario-specific and source AC must remain separate from derived AC.

## Literal / Strong-Language Scan
The scan intentionally flags candidates for review rather than automatically rewriting them:
- fixed-actor candidate lines: **10**
- generic-outcome candidate lines: **4**
- universal-language candidate lines: **269**
- numeric threshold/value candidate lines: **0**
- source-of-truth candidate lines: **29**
- integration/platform-mechanic candidate lines: **336**

Most remaining strong terms occur in evidence rules, explicit anti-patterns, source-backed registers, or methodology. They are not blindly parameterized because doing so would corrupt source evidence or weaken valid invariants.

## Runtime Invariant
Before emitting a customer-specific statement, classify it:
1. **Source-backed fact/finding** → preserve provenance.
2. **Derived interpretation** → show traceability.
3. **Reusable pattern/framework** → specialize to evidence.
4. **Unsupported customer-specific detail** → Hypothesis / Validation Needed.

## Prohibited Shortcut
**pattern/example → customer fact** is prohibited.

Required path:
**Evidence → normalized finding → applicable framework → dynamic specialization → output → traceability / validation state**
