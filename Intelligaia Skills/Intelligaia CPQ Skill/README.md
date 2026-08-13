# CPQ Insight Skill v0.4

v0.4 deepens the package from a capability index into an operational CPQ playbook.

## Major additions
- Detailed Quote flow with L1/L2/L3 steps.
- Source-derived Zuora AS-IS and proposed TO-BE Opportunity-to-Order flows.
- Detailed approval decision/rework flow.
- Proposal/customer-change and contract/CLM paths.
- Detailed order capture and downstream handoff flow.
- Detailed renewal and amendment journeys.
- Illustrative Salesforce CPQ lifecycle from supplied source material.
- End-to-end CPQ data lineage and handoff contract.
- New `analysis/flow-analysis-framework.md` defining L0-L4 process depth.

## Evidence warning
The proposed Zuora TO-BE process was not business-reviewed according to the supplied assessment. Historical platform gap statements and illustrative flows must be validated before being treated as current product behavior.

## v0.4
Finalized `SKILL.md` operating contract: routing, evidence precedence, L0-L4 flow depth, assessment contracts, contradiction handling, output modes, provenance, and quality gate.

## v0.5
Refactored `SKILL.md` from ~670 lines to a compact router. Detailed operating frameworks remain delegated to `analysis/`, `foundations/`, and domain modules.

## v0.6
Completed `foundations/cpq-lifecycle.md` as the authoritative vendor-neutral lifecycle reference, with stages, actors, inputs/outputs, decisions, rework loops, data lineage, UX considerations, KPIs, diagnostics, and module boundaries.

## v0.7
Refactored the oversized CPQ lifecycle foundation into linked modules:
- `cpq-lifecycle.md` — compact lifecycle router/reference
- `cpq-lifecycle-stages.md` — stage definitions and flows
- `cpq-lifecycle-controls.md` — decisions, rework, UX controls, actors, KPIs
- `cpq-lifecycle-diagnostics.md` — assessment questions

This keeps each file focused and makes progressive loading possible.

## v0.8
Completed the Quote-to-Cash foundation using progressive disclosure:
- `quote-to-cash.md` — compact Q2C entry/reference
- `quote-to-cash-stages.md` — end-to-end stage definitions and boundaries
- `quote-to-cash-controls.md` — traceability, fidelity, controls, reconciliation, KPIs
- `quote-to-cash-diagnostics.md` — assessment questions and evidence-safe failure patterns

## v0.9
Completed the terminology foundation using a compact canonical index plus focused domain glossaries:
- `terminology.md`
- `terminology-catalog-configuration.md`
- `terminology-pricing.md`
- `terminology-commercial.md`
- `terminology-subscription-billing.md`
- `terminology-data-analysis.md`

## v1.0
Completed the persona foundation using a compact actor index plus focused role modules:
- `personas.md`
- `personas-selling.md`
- `personas-governance.md`
- `personas-operations.md`
- `personas-technology.md`
- `personas-customer.md`
- `personas-handoffs.md`

## v1.1
Completed the conceptual CPQ/Q2C data-model foundation:
- `cpq-data-model.md` — compact canonical entity/relationship index
- `cpq-data-model-commercial.md` — customer, opportunity, catalog, pricing, quote, approval, agreement and order
- `cpq-data-model-lifecycle.md` — subscription, asset, entitlement, amendment and renewal
- `cpq-data-model-financial.md` — billing and commercial-to-financial linkage
- `cpq-data-model-governance.md` — system of record, IDs, cardinality, state, dates, versions, lineage and synchronization

## v1.2
Completed the final foundation area: source provenance and evidence governance.
- `source-provenance.md`
- `source-provenance-evidence.md`
- `source-provenance-validation.md`
- `source-provenance-analysis.md`

Foundations are now structurally complete and ready to be treated as the stable knowledge layer before capability deep-dives.

## v1.3
Started the capability layer with Product Catalog:
- `capabilities/product-catalog.md` — compact capability entry/router
- `capabilities/product-catalog-flows.md` — introduction, publication, change, retirement, bundle/attribute, eligibility and mapping flows
- `capabilities/product-catalog-rules-data.md` — catalog entities, rules, lifecycle, effective dating, readiness and dependencies
- `capabilities/product-catalog-ux-diagnostics.md` — seller/admin UX, failure patterns, diagnostics and KPIs
- `capabilities/product-catalog-requirements.md` — reusable stories and acceptance patterns

## v1.4
Completed the Configuration capability:
- `capabilities/configuration.md`
- `capabilities/configuration-flows.md`
- `capabilities/configuration-rules-data.md`
- `capabilities/configuration-ux-diagnostics.md`
- `capabilities/configuration-requirements.md`

Configuration explicitly separates catalog definition, runtime configuration, and pricing while covering guided selling, bundle/attribute rules, validation, reconfiguration, installed-base changes, downstream fidelity, diagnostics, KPIs, and reusable requirement patterns.

## v1.5
Completed the Pricing capability:
- `capabilities/pricing.md`
- `capabilities/pricing-flows.md`
- `capabilities/pricing-rules-data.md`
- `capabilities/pricing-ux-diagnostics.md`
- `capabilities/pricing-requirements.md`

Pricing now covers reference/list/base pricing, price selection, quantity/tier, attribute, term, customer/contract, channel, recurring/one-time/usage, proration, ramp pricing, renewal inputs, repricing, overrides, effective dating, currency, rounding governance, downstream fidelity, diagnostics, KPIs, and evidence-safe requirement patterns.

## v1.6
Completed the Discounting capability:
- `capabilities/discounting.md`
- `capabilities/discounting-flows.md`
- `capabilities/discounting-rules-data.md`
- `capabilities/discounting-ux-diagnostics.md`
- `capabilities/discounting-requirements.md`

Discounting now covers standard and discretionary discounts, line/quote-level discounting, discount basis, authority, eligibility, non-discountable items, stacking, thresholds, floors/minimum price, reason/justification, requested-vs-approved values, approval and reapproval interaction, overrides, audit, downstream fidelity, diagnostics, KPIs, and evidence-safe requirement patterns.

## v1.7
Completed Quoting with entry, flows, rules/data, UX/diagnostics, and requirement-pattern modules. Coverage includes quote creation, scenarios, validation, revisions/versioning, proposal generation, negotiation, expiration, customer acceptance, quote-to-agreement/order readiness, lineage and diagnostics.

## v1.8
Completed Approvals with entry, flows, rules/data, UX/diagnostics, and requirement-pattern modules. Coverage includes trigger evaluation, authority matrices, conditional/sequential/parallel routing, escalation, delegation, decision context, rejection/change requests, modified approvals, reapproval, expiration, SLA concepts, audit and quote-version integrity.

## v1.9
Completed Ordering with entry, flows, rules/data, UX/diagnostics, and requirement-pattern modules. Coverage includes quote-to-order readiness, order creation and line transformation, decomposition, validation, orchestration, fulfillment/provisioning and billing handoffs, holds, errors, retries, partial failures, cancellation/change patterns, completion, lineage and reconciliation.

## v2.0
Completed Subscriptions with entry, flows, rules/data, UX/diagnostics, and requirement-pattern modules. Coverage includes subscription creation and activation, products/charges, terms and date semantics, installed-base representation, configuration fidelity, ramps/phases, co-term relationships, billing and entitlement alignment, lifecycle versioning, source-of-truth, synchronization, lineage, amendment/renewal source context, diagnostics and reconciliation.

## v2.1
Completed Amendments with entry, flows, rules/data, UX/diagnostics, and requirement-pattern modules. Coverage includes authoritative installed-base sourcing, add/remove products, quantity changes, upgrades/downgrades, configuration changes, effective and future-dated changes, co-term dependencies, proration inputs, amendment pricing/quote/change-order flows, cancellations, concurrent amendments, reversal/correction, billing and entitlement effects, lineage, and resulting-state reconciliation.

## v2.2
Completed Renewals with entry, flows, rules/data, UX/diagnostics, and requirement-pattern modules. Coverage includes renewal identification/readiness, authoritative baseline construction, assisted and auto-renew motions, carry-forward, uplift/repricing, product migration, renewal changes, co-term/consolidation, negotiation, partial renewal, non-renewal/churn, renewal order, subscription continuation, billing/entitlement alignment, forecasting diagnostics, lineage and reconciliation.

## v2.3
Completed Billing with entry, flows, rules/data, UX/diagnostics, and requirement-pattern modules. Coverage includes billing context/accounts, recurring/one-time/usage charges, bill-cycle and date semantics, proration, invoice generation/finalization, amendment and cancellation billing, renewal continuity, credits/adjustments/rebill, tax and payment-term dependencies, billing exceptions, commercial-to-billing fidelity, source lineage and reconciliation.

## v2.4
Started the end-to-end Journeys layer by completing New Business. Added the journey entry module plus detailed flows, cross-capability controls/data handoffs, UX/diagnostics, and requirement patterns. Coverage connects Opportunity/Customer Context → Quote → Product Selection → Configuration → Pricing → Discounting → Validation → Approval → Proposal → Negotiation → Acceptance → Order → Fulfillment/Activation → Subscription/Installed Base → Billing → Reconciliation.

## v2.5
Completed the Modify Existing Deal journey. Added state-aware routing that distinguishes draft/in-flight quote revision, accepted-deal revision, pre/partial-execution order change, cancellation/rebook, active-subscription amendment/cancellation, renewal-time change, and correction paths. Added controls for authoritative baselines, version/approval/acceptance integrity, effective dates, partial execution, duplicate prevention, before/after diagnostics, lineage, reconciliation, and reusable requirements.

## v2.6
Completed the Amendment Journey. Added end-to-end lifecycle flow from customer change request through authoritative installed-base retrieval, eligibility, effective dating, before/after state, add/remove/quantity/migration/configuration changes, pricing/proration, discount/approval, amendment quote, negotiation/acceptance, change order, fulfillment, subscription update, billing/entitlement adjustment, concurrency handling and reconciliation.

## v2.7
Completed the Renewal Journey. Added end-to-end flow from renewal identification and readiness through authoritative baseline construction, pending-change handling, carry-forward, product renewability/migration, expansion/contraction, partial and consolidated renewal, pricing/uplift, discount/approval, quote/negotiation, assisted and auto-renew decisions, non-renewal, renewal order, next-term subscription, billing/entitlement continuity and reconciliation.

## v2.8
Completed the Cancellation Journey. Added state-aware classification across pre-execution cancellation, active-term termination, partial cancellation, amendment removal, quantity reduction, end-of-term non-renewal, and correction. Coverage includes authoritative baseline retrieval, cancellation scope, eligibility, notice/effective-date controls, dependencies, remaining commitment, financial impact, approval, customer confirmation, deprovisioning, subscription termination, billing/credit adjustment, entitlement termination, pending-transaction interaction, withdrawal/reinstatement, failure recovery, lineage, diagnostics and reconciliation.

## v2.9
Completed the Partner Sales Journey and the originally planned Journeys layer. Added partner identity/authorization, end-customer and multi-party role modeling, optional deal registration, channel product eligibility, channel pricing, buy-vs-sell price separation, partner/customer discounts, special pricing, approval, partner/customer quote visibility, direct/reseller/distributor order routes, fulfillment, installed-base ownership, billing relationships, partner amendments/renewals, partner-of-record changes, channel-conflict governance, attribution, diagnostics and reconciliation.

## v3.0
Completed an architecture and best-practices quality pass before deepening Integrations. Added an authoritative content-quality standard, a packaged audit report, navigable journey-to-detail and journey-to-capability links, and an explicit release gate covering progressive disclosure, file size, broken links, shallow placeholders, content ownership, evidence discipline, L0-L4 depth, platform separation, integrity controls and reconciliation.

## v3.1
Deepened the Integrations layer with the vendor-neutral End-to-End Data Flow set. Added cross-domain orchestration from opportunity/customer through quote, order, fulfillment, subscription, billing and entitlement; canonical data-contract and source-of-truth patterns; identifier, mapping, quantity/date/version semantics; asynchronous state/event, idempotency, ordering, concurrency and retry patterns; operational observability, error ownership and reconciliation; and reusable integration requirement patterns. Platform-specific CCW, Salesforce and Zuora implementation details remain delegated to pair/platform modules and require evidence.

## v3.2
Deepened the CCW–Salesforce integration as an evidence-safe platform-pair module set. Added business flows for seller context, quote creation/association, commercial/status return, revisions, approvals, order traceability, lifecycle and partner motions; data controls for source-of-truth, cross-system identity, quote/version correlation, commercial/status semantics, duplicate prevention and reconciliation; UX/operational diagnostics; and reusable requirements. Exact Salesforce/CCW objects, fields, APIs, middleware, sync directions and status mappings remain Unknown / Validation Needed unless supported by supplied evidence.

## v3.3
Deepened the CCW–Zuora integration into an evidence-safe module set. Added new-business and lifecycle flows from accepted CCW commercial state through customer/account resolution, product/configuration and commercial transformation, subscription creation, billing, amendments, renewals and cancellations; data controls for account identity, product/charge mapping, quantity/date/term/price/discount semantics, version integrity, proration, lifecycle lineage and duplicate prevention; operational diagnostics and reconciliation; and reusable requirements. Exact CCW/Zuora topology, APIs, objects, fields, rate-plan/charge structures, billing triggers and middleware behavior remain Unknown / Validation Needed unless supported by supplied evidence.

## v3.4
Deepened the Salesforce–Zuora integration into an evidence-safe module set. Added customer/account and payer correlation, opportunity-to-lifecycle handoffs, subscription visibility, amendment and renewal orchestration, renewal opportunity/forecast semantics, cancellation/non-renewal, billing visibility, pending-state and concurrency handling; data controls for authoritative ownership, customer matching, lifecycle correlation, date/commercial/status semantics, stale-update and duplicate prevention; UX/operational diagnostics; and reusable requirements. Exact Salesforce/Zuora objects, managed packages, APIs, fields, formulas, sync directions, automation and middleware remain Unknown / Validation Needed unless supported by supplied evidence.

## v3.5
Deepened API Patterns into a progressive-disclosure module set. Added business-operation-first contract design, request/response and error semantics, stable identity/correlation, product hierarchy and lifecycle delta modeling; idempotency, optimistic concurrency, version/effective-date integrity, duplicate/replay protection and compensation; long-running, callback/webhook, event, polling, batch, delta-sync, backfill and dead-letter patterns; security, authorization, data minimization, observability, change/deprecation governance and test strategy; and reusable API requirement patterns. Exact endpoints, schemas, protocols, brokers, security mechanisms, limits, retries, timeouts and vendor APIs remain Unknown / Validation Needed unless evidenced.

## v3.6
Deepened Integration Errors into a progressive-disclosure module set. Added a business-aware error taxonomy; detection, triage, impact/scope/currentness and ownership patterns; safe retry, resume, rebuild, compensation, timeout, duplicate and stale-version recovery; amendment/renewal/billing recovery; reconciliation across quote, order, fulfillment, subscription, billing, entitlement and lifecycle state; audit/closure patterns; operational metrics; and reusable error-management requirements. Unsupported platform-specific error codes, severities, queues, retry counts, SLAs and tooling remain Unknown / Validation Needed.

## v3.7
Completed the Integration-layer consistency and completeness audit. Added an Integration router, standardized ownership boundaries across end-to-end, platform-pair, API, error, platform and journey modules, verified symmetric platform-pair structure and cross-cutting integrity coverage, and documented remaining evidence-driven L4 work. The Integration architecture is now structurally complete without fabricating unsupported implementation detail.

## v3.8
Started the UX deepening phase with CPQ UX Principles. Added a UX router and focused modules for transaction orientation/state/navigation, configuration and commercial decision support, approval/exception/recovery UX, lifecycle and cross-system continuity, and reusable UX requirements/evaluation heuristics. The UX layer links to authoritative capability, journey and integration content rather than duplicating business rules. Current-state usability claims remain evidence-driven and future-state concepts are labeled Proposed.

## v3.9
Deepened Seller Experience into a progressive-disclosure module set. Added seller journey/task flow, quote workspace and commercial editing, approval/customer/downstream handoffs, amendment and renewal seller experience, and reusable seller requirements/diagnostics. Coverage emphasizes start-vs-resume, transaction/version orientation, context reuse, configuration guidance, pricing/discount transparency, approval applicability, accepted-version integrity, asynchronous downstream state, safe failure recovery, authoritative lifecycle baselines, current-vs-delta-vs-resulting state, renewal comparison and evidence-safe UX analysis.

## v4.0
Deepened Partner Experience into a progressive-disclosure module set. Added partner journey/context, commercial/deal/approval UX, order/lifecycle continuity, and partner requirements/diagnostics. Coverage distinguishes partner, distributor, end-customer and payer roles; start/resume and duplicate prevention; eligibility; role-based commercial visibility; special-pricing/deal-support correlation; confidentiality; approval and validity; downstream status; authoritative amendment/renewal baselines; current partner eligibility at renewal; partner reassignment continuity; and evidence-safe partner UX analysis.

## v4.1
Deepened Usability Issues into a progressive-disclosure module set. Added a CPQ/Q2C usability taxonomy, evidence and prioritization model, root-cause/dependency analysis, and reusable finding/requirement templates. The framework separates observation from interpretation and proposal, prevents unsupported severity/frequency claims, connects UX symptoms to process/rules/data/integration/platform/security/operations causes, and preserves evidence status throughout analysis.

## v4.2
Deepened Design Opportunities into a progressive-disclosure module set. Added outcome-based opportunity framing, reusable future-state CPQ design patterns, prioritization/validation guidance, and an opportunity-to-requirement template. The model preserves traceability from evidence and root cause through opportunity, design pattern, requirement, acceptance criteria and success evidence; distinguishes proposed patterns from current capabilities; and explicitly checks architecture, policy, security, lifecycle and commercial-integrity dependencies before solution commitment.

## v4.3
Completed the UX-layer consistency and completeness audit. Added an explicit UX ownership/completeness record, strengthened the UX router, standardized evidence states and finding-to-design traceability, clarified current-state versus proposed-future-state boundaries, and added a full-package next-phase assessment. The UX layer is now structurally complete. The next recommended major phase is Analysis Frameworks.

## v4.4
Started the Analysis Frameworks phase by deepening Story Analysis. Added an Analysis router plus focused modules for story intake/normalization, flow/rule/decision analysis, data/platform/integration analysis, dependency/risk/impact analysis, and story quality/readiness. The framework preserves original source intent, separates requirement from proposed solution, exposes lifecycle/version/effective-date semantics, maps system boundaries without inventing implementation detail, and carries evidence/unknowns into testable acceptance work.

## v4.5
Deepened Gap Analysis into a progressive-disclosure module set. Added gap identification/classification, current-vs-target comparison, root-cause/consequence/dependency analysis, prioritization/closure, and a reusable gap record template. The framework explicitly separates evidence gaps from capability gaps, prevents feature-comparison bias, distinguishes required/validated/proposed/benchmark targets, and carries evidence through closure and residual-risk validation.

## v4.6
Deepened Dependency Analysis into a progressive-disclosure module set. Added dependency identification/taxonomy, directed mapping and sequencing, cross-system/lifecycle dependency analysis, risk/resolution/readiness guidance, and a reusable dependency record template. The framework distinguishes dependency from relationship, hard from soft prerequisites, exposes shared/circular/decision/evidence dependencies, and explicitly covers identity, semantics, source-of-truth, freshness, version, asynchronous state, unknown outcomes, idempotency, reconciliation, security and lifecycle dependencies.

## v4.7
Deepened Impact Analysis into a progressive-disclosure module set. Added impact scope/taxonomy, commercial and lifecycle impact, system/data/integration impact, user/operations/rollout impact, and a reusable impact record. The framework separates baseline evidence from predicted impact, traces direct/upstream/downstream consequences, explicitly checks commercial/version/approval/lifecycle integrity, contract/data/security/reporting/migration implications, in-flight transition states, operational readiness, and success/guardrail evidence without inventing quantitative impact.

## v4.8
Deepened Acceptance Criteria into a progressive-disclosure module set. Added criteria writing/structure, commercial/configuration/quote coverage, order/lifecycle coverage, integration/error/recovery coverage, quality/traceability checks, and a reusable acceptance template. The framework tests observable business outcomes rather than implementation preferences; explicitly covers quote/version/approval integrity, lifecycle current/pending/effective state, asynchronous submission versus completion, timeout/unknown outcome, duplicate prevention, partial success, reconciliation, authorization, regression and evidence-driven TBDs.

## v4.9
Completed the Analysis-layer consistency and completeness audit. Added `analysis/ANALYSIS-AUDIT.md`, strengthened the Analysis router, standardized STORY/GAP/DEP/IMP/AC traceability, confirmed evidence and ownership boundaries, and verified CPQ commercial, quote/version, order, lifecycle, integration, security, recovery and reconciliation coverage. The Analysis phase is now structurally complete. The next major phase is User Stories.

## v5.0
Started User Stories by establishing a global `assets/` source-evidence layer and deepening the User Stories router/taxonomy. Added source IDs, provenance rules, evidence states, conflict handling, source folders, source-vs-derived separation, story taxonomy/ID conventions, CPQ integrity checks and SRC→STORY→GAP→DEP→IMP→AC traceability. Next: deepen the reusable story template.

## v5.1
Deepened the reusable CPQ/Q2C user-story template while preserving progressive disclosure. The primary template now captures provenance, normalized outcome, business context, trigger/preconditions, flow, rules, data/state, platform/integration, exceptions/recovery, security/audit, dependencies, impact, acceptance summary, CPQ integrity checks, traceability and readiness. Detailed guidance, scenario prompts and traceability rules were split into companion modules to keep the main template compact. Next: CCW story architecture/content.

## v5.2
Deepened the Cisco CCW user-story layer. Added a CCW story router plus focused modules for quoting, configuration/pricing, discounts/approvals, ordering, partner/channel sales, and exceptions/recovery. The modules provide evidence-safe normalization patterns and CPQ integrity prompts without asserting unsupported Cisco-specific behavior. Concrete CCW stories must trace to `SRC-CCW-*` evidence. Next: Zuora user-story architecture and lifecycle content.

## v5.3
Deepened the Zuora User Stories layer with focused modules for CPQ/quoting, subscription baseline/state, amendments, renewals, cancellation/non-renewal, billing consequences, and lifecycle exceptions/recovery. Added a lifecycle integrity model that traces authoritative current state, pending/future state, requested delta, effective date, commercial consequence, processing, resulting subscription state, and billing/service consequence. The modules deliberately separate CPQ intent/estimate from authoritative lifecycle and billing outcomes and require `SRC-ZUORA-*` evidence for concrete product-specific claims. Next: Salesforce User Stories.

## v5.4
Deepened Salesforce User Stories with modules for opportunity/deal context, CPQ/quoting, approvals, customer/partner identity, integrations, and exceptions/recovery. The layer separates CRM state from quote, approval, order and lifecycle state; avoids assuming Salesforce CPQ vs Revenue Cloud vs custom implementation; and requires `SRC-SFDC-*` evidence for org/package-specific claims. Next: cross-platform end-to-end User Stories.

## v5.5
Added cross-platform end-to-end User Stories covering deal-to-quote, quote-to-order, order-to-subscription/billing, lifecycle changes, partner/channel transactions, and exceptions/reconciliation. The new layer preserves business outcomes across system boundaries, explicitly separates submitted/processing/completed states, and requires evidence for system ownership, source-of-truth and technical contracts. Next: User Stories consistency/completeness audit.

## v5.6
Completed the User Stories consistency and completeness audit. The audit verifies evidence discipline, taxonomy coverage, platform boundaries, end-to-end and lifecycle integrity, state/version handling, exception/recovery, party identity, commercial/data/integration integrity, traceability and progressive disclosure. The User Stories architecture is now considered complete for the architecture phase; actual platform behavior remains subject to source evidence. Next: Platform Evidence & Completeness Audit.

## v5.7
Completed the Platform Evidence & Completeness Audit. Added explicit rules for generic-vs-platform-specific knowledge, Salesforce/CCW/Zuora boundaries, source-of-truth validation, integration/lifecycle completeness, exception/party/security coverage, and source-enrichment readiness. Added a platform evidence register for unresolved claims and questions. The platform layer is structurally ready for evidence enrichment without expanding unsupported implementation claims. Next: Intelligaia Opportunity / Service Mapping.

## v5.8
Added Intelligaia Opportunity / Service Mapping. The new layer converts evidenced CPQ/Q2C findings into proportionate advisory, UX/research, engineering/modernization, integration/data and transformation opportunities. It uses an evidence-first chain and explicitly prevents service-first selling, fabricated customer pain, unsupported implementation claims and ungrounded ROI. Added a reusable opportunity template and validation/confidence rules. Next: full cross-layer consistency audit.

## v5.9
Completed the Full Cross-Layer Consistency Audit. The package now has an explicit end-to-end layering model from source evidence through normalized knowledge, stories, analysis, opportunity mapping and validation. The audit verifies evidence states, identifiers/traceability, generic-vs-platform boundaries, journey/capability alignment, state/version integrity, cross-system and party identity, exception/recovery consistency, progressive disclosure and duplication rules. Added a formal source-evidence enrichment protocol. The architecture phase is complete. Next: enrich the skill from the supplied CPQ/Q2C project artifacts.

## v6.0
Started source-evidence enrichment. Registered `CPQ Tools & Renewal Process.docx` as `SRC-PROCESS-DOC-001` and classified its mixed content without converting illustrative scenarios or recommendations into customer current-state facts. Next: claim-level normalization, followed by Zuora research/advisory evidence.

## v6.1
Completed claim-level normalization of Wave 1 process evidence. Candidate process claims, reference scenarios and twelve proposed custom-functionality items are separated, with validation questions and traceability. Next: Zuora research/advisory evidence enrichment.

## v6.2
Completed Zuora research/advisory evidence enrichment architecture. Separated research/current-state findings from recommendations and service proposals, established duplicate-source and quantified-value guardrails, and added traceability/validation questions. Next: Cisco Commerce evidence enrichment.

## v6.3
Completed the Cisco Commerce evidence wave. Added case-study scoping, duplicate-PDF handling, design-vs-implementation rules, CommerceX roadmap-vs-delivered safeguards, measured-vs-claimed outcome classification, traceability and validation questions. Next: detailed user-story spreadsheet enrichment.
