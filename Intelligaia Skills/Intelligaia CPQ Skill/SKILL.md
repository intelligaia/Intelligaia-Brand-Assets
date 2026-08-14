---
name: cpq-insight
description: Evidence-grounded CPQ/Q2C analysis across processes, platforms, journeys, integrations, UX, requirements, and advisory opportunities.
version: 6.10.0
---

# CPQ Insight

## Purpose
Use this skill to explain and analyze Configure-Price-Quote and Quote-to-Cash, including business flows, platform behavior, requirements, integrations, UX, gaps, roadmaps, and evidence-backed advisory opportunities.

This file is the router. Detailed CPQ knowledge belongs in the routed modules.

## Operating Rules
1. Start with the user's question and supplied evidence.
2. Load the smallest relevant module set; expand only for dependencies, decisions, exceptions, or handoffs.
3. Keep platform-neutral knowledge separate from platform-specific findings.
4. Never invent business rules, platform capabilities, APIs, fields, mappings, pricing logic, approval logic, or ROI.
5. Preserve customer/project terminology when analyzing supplied material.
6. For flow questions, provide actual source-backed steps and decisions rather than only capability labels.
7. Surface unknowns and validation questions instead of silently filling gaps.
8. Connect recommendations to evidence, business impact, capability need, and KPI.

## Evidence States
- **Confirmed** — explicitly supported by user facts, project evidence, or validated documentation.
- **Inferred** — reasonable interpretation of confirmed evidence; label material inferences.
- **Unknown** — evidence is insufficient; identify what must be validated.
- **Historical** — supported by an earlier assessment/case study/product state. Never present as a current platform limitation without current validation.

## Source Precedence
Prefer, in order:
1. Current user facts/instructions.
2. Current validated project/customer evidence.
3. Current validated platform documentation.
4. Platform modules with provenance.
5. Platform-neutral foundations/capabilities.
6. Clearly labeled inference.

If credible sources conflict, expose the conflict. Compare date, specificity, version/context, and validation status. Do not silently reconcile contradictory evidence.

## Intent → Route

| Intent | Primary modules |
|---|---|
| CPQ/Q2C concept or terminology | `foundations/`, `capabilities/` |
| Business/process flow | `journeys/`, `capabilities/`, `analysis/flow-analysis-framework.md` |
| Cisco CCW | `platforms/cisco-ccw/` |
| Zuora | `platforms/zuora/` |
| Salesforce | `platforms/salesforce/` |
| Platform comparison | relevant `platforms/` + common `capabilities/` |
| User story / requirement | `user-stories/`, `analysis/story-analysis-framework.md`, `analysis/acceptance-criteria.md` |
| Gap / current-state assessment | `analysis/gap-analysis.md`, `analysis/impact-analysis.md` + relevant domain modules |
| Journey mapping | `journeys/` + relevant `platforms/`, `integrations/`, `ux/` |
| Integration / data flow | `integrations/`, `foundations/cpq-data-model.md` |
| UX / seller / partner experience | `ux/` + relevant journey/platform |
| Roadmap / maturity | `analysis/roadmap-framework.md`, `analysis/maturity-model.md` |
| Intelligaia opportunity mapping | `intelligaia/` + evidence-bearing modules |

## Context Selection
Start with the directly relevant module. Add:
- a journey when sequence matters;
- a capability when functional behavior matters;
- a platform when implementation/product context matters;
- integration/data modules for cross-system handoffs;
- UX modules when user experience is material;
- analysis modules when evaluating gaps, requirements, impact, or roadmap.

Do not load or reproduce the whole knowledge base.

## Flow Depth
Use `analysis/flow-analysis-framework.md`.

- **L0** — revenue lifecycle; executive orientation.
- **L1** — major business stages.
- **L2** — numbered user/system activities.
- **L3** — actor, platform, action, input, rule/decision, output, error/rework, next step, data and handoffs.
- **L4** — objects, fields, APIs, configuration, mappings; only with validated implementation evidence.

Defaults:
- Concept/executive question → L0/L1.
- "How does X flow/work?" → L2 plus important L3 decisions.
- Detailed process/requirements → L3.
- Technical implementation → L3 plus validated L4.

Never manufacture L4 detail.

## Default Analysis Chain
**Persona & Objective → Journey → Platforms → Evidence → Current State → Pain Point → Business Impact → Root Cause → Gap Type → Required Capability → Dependencies → Recommendation → Roadmap Phase → KPI**

Do not jump from a symptom directly to a product recommendation.

## Assessment Dimensions
When relevant, assess:
- Business Process
- Systems
- Data
- People & Governance
- Integrations
- UX
- Controls & Approvals
- Adoption & Change
- KPI & Measurement

Only claim a gap when evidence supports it.

## Platform vs Capability
`capabilities/` = vendor-neutral functional model.  
`platforms/` = evidence-backed platform/project behavior, findings, and gaps.

Example: `capabilities/renewals.md` defines renewal capability; `platforms/zuora/renewals.md` contains Zuora/project-specific evidence.

Historical vendor findings must remain in platform/project context.

## Cross-Platform Analysis
For material handoffs, identify when known:
**source → target → trigger → entity/IDs → system of record → required data → transformation → timing → validation → retry/idempotency → error/reconciliation → owner/monitoring → user-visible status → downstream impact.**

Mark unsupported implementation details Unknown.

## Requirement / User Story Analysis
Evaluate:
**persona → outcome → journey → platform owner → trigger/preconditions → behavior → rules → data → dependencies → approvals → exceptions → UX → acceptance criteria → KPI → source/confidence → open questions.**

Flag ambiguity, duplicates, conflicting rules, missing dependencies, missing error paths, and hidden cross-platform impact.

## Approval Analysis
When approvals are material, check:
**triggers/thresholds → approval matrix → quote vs contract approval → routing → delegation/escalation → justification/context → SLA/status → reject/more-information path → resubmission → reapproval → audit/downstream effect.**

Use detailed approval knowledge from the relevant capability/platform modules.

## Exceptions and Rework
Do not describe only the happy path when known exceptions materially affect the flow. Consider configuration/pricing errors, approval rejection, missing information, customer changes, contract redlines, order validation, quote/order mismatch, integration failure, and lifecycle edge cases.

Show where the process returns and what must be recalculated, revalidated, or reapproved.

## Historical Product Findings
Historical assessments/case studies must retain source and time/context.

Preferred:
> Historical project assessment: this scenario required customization.

Avoid:
> Platform X does not support this.

unless current validated evidence supports that claim.

Use `foundations/source-provenance.md`.

## Missing Evidence
When a point cannot be established:
1. Mark it Unknown / requires validation.
2. Explain why it matters.
3. Ask or propose the smallest useful validation question.

Do not use generic CPQ knowledge to fill customer-specific gaps.

## Output Modes
Match the answer to the request:
- concise explanation;
- detailed L2/L3 flow;
- assessment/gap table;
- user stories and acceptance criteria;
- dependency/impact analysis;
- integration/data map;
- UX findings;
- roadmap/maturity view;
- executive summary;
- commercial opportunity mapping.

Do not dump unrelated modules into the response.

## Recommendation Standard
Use:
**Evidence → Pain Point → Root Cause → Required Capability → Recommendation → Expected Outcome → KPI**

Do not invent numeric benefits.

## Intelligaia Opportunity Mapping
When requested or relevant to a commercial task:
**Evidence → Customer Pain → Business Impact → Needed Capability → Intelligaia Service → Deliverable → KPI/Outcome**

Start from evidence, not the service catalog. Avoid generic pitches and unsupported ROI.

## Final Quality Gate
Before answering, verify:
- important claims are source-backed or labeled;
- current vs historical evidence is clear;
- flow depth matches the question;
- flow answers contain actual steps and important decisions;
- exceptions/rework are included when material;
- cross-platform answers identify data/system handoffs where known;
- implementation details are not invented;
- requirements include rules/dependencies/exceptions where relevant;
- unknowns and validation questions are visible;
- recommendations trace to evidence and measurable outcomes;
- the answer uses only the context needed for the task.


## Integration routing
For integration analysis, start with [`integrations/README.md`](integrations/README.md).


## UX routing
For CPQ/Q2C experience analysis, start with [`ux/README.md`](ux/README.md).


## Analysis routing
For requirements, gap, dependency, impact, and acceptance analysis, start with [`analysis/README.md`](analysis/README.md).


## Source evidence
Use [`assets/source-index.md`](assets/source-index.md) as the canonical provenance registry. Source/reference evidence belongs in `assets/`; derived reusable knowledge belongs in domain knowledge folders.


## Dynamic Output Rule
Reusable files are frameworks, patterns and evidence references—not fixed customer answers. Compose customer-specific stories, findings, journeys, acceptance criteria and recommendations from evidence at runtime.

For User Stories, follow [`user-stories/dynamic-story-generation.md`](user-stories/dynamic-story-generation.md):
**Evidence → Actor → Trigger → Need/Task → Decision/Action → Specific Business Outcome → State/Data → Acceptance → Exceptions → Traceability**.

Do not reuse generic `As a`, `I want`, or `So that` prose as final story content. The business rationale must be specific to the evidenced actor and decision. If unsupported, mark it **Validation Needed** or **Hypothesis**.

Apply the same principle across journeys, capabilities, platforms, integrations, UX, analysis and opportunity mapping: reusable structure may be static; customer facts, rationale, implementation and value must be evidence-derived.


### Story Pattern Invariant
Any section named `Story Pattern` is a routing/scenario archetype only. Its `As a`, `When`, `I want`, and `So that` body must be parameterized in reusable knowledge files and resolved dynamically at runtime. A static pattern title is acceptable; a static final story body is not.

Do not interpret broadly useful prose such as `seller/partner`, `correct the transaction before progressing`, `avoid stale pricing`, or `customer commitment can progress` as safe defaults. Those are scenario hypotheses unless supported by the current evidence.


## Package-Wide Semantic Specialization Rule
Apply the dynamic-output rule to every layer, not only User Stories.

Before using reusable content in a customer-specific answer, determine whether each actor, process step, business rationale, threshold, ownership statement, platform behavior, integration mechanic, acceptance outcome and quantified value is supported by evidence.

Static taxonomy, methodology, analytical dimensions and explicitly labelled examples are allowed. They must not be transformed directly into customer facts.

For every customer-specific statement use one of:
- source-backed fact/finding with provenance;
- derived interpretation with traceability;
- Hypothesis;
- Validation Needed.

Never use the shortcut `pattern/example → customer fact`.


## Comparative Evidence Rule
Case studies, proposals, resource plans and executive concepts are bounded to their source context.

Use comparative sources to create investigation patterns and hypotheses. Do not transfer another project's pain, implementation, architecture, staffing, metric or outcome into a target customer without independent target evidence.

Required path:
**reference evidence → investigation pattern → target evidence → target corroboration → recommendation candidate → target validation**

For quantified outcomes, preserve measured/reported/estimate/target/qualitative/unknown status and never reuse a source metric as a target forecast without a target-specific value model.


## Contradictory Evidence Rule
When credible sources conflict, do not silently choose, merge or reconcile them. Preserve each claim with provenance and evidence state, identify the conflicting dimension, and mark the unresolved point **Contradiction / Validation Needed** until an authoritative source resolves it.

A newer file date alone does not automatically make a source authoritative. Use document content, version/release context, source authority and scope.


## Runtime Asset Routing
Use [`assets/ASSET-MANIFEST.md`](assets/ASSET-MANIFEST.md) to locate original supplied references. Use normalized evidence modules for efficient reasoning and traceability; return to original reference assets when exact source context matters.

Maintain: **original source → normalized evidence → reusable pattern → customer-specific runtime output**.
