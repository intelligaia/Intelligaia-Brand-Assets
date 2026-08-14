# Dynamic Content / Hardcoding Audit

## Result
**Architecture corrected.**

## Package-Wide Rule
Reusable knowledge may hardcode taxonomy, method, decision frameworks, lifecycle/state models, quality dimensions, evidence rules and example patterns.

Reusable knowledge must not hardcode as customer truth: actor, pain point, current-state behavior, source-of-truth, approval threshold, pricing/billing rule, integration mechanism, business rationale/value, quantified impact or acceptance outcome.

## Layer Review
- **User Stories:** generic actor/outcome prose converted to parameterized generation where detected; dynamic generation is mandatory.
- **Journeys:** reusable stages/questions only; customer stages, ownership, exceptions and handoffs are evidence-derived.
- **Capabilities:** reusable capability semantics only; customer rules, formulas, thresholds and implementations require evidence.
- **Platforms:** vendor capability does not prove customer configuration.
- **Integrations:** trigger/source/target/status/recovery dimensions may be reusable; APIs, middleware, direction, retry rules and authority are evidence-dependent.
- **UX:** principles/research methods are reusable; user pain and recommended design require evidence.
- **Analysis:** GAP/DEP/IMP frameworks are methods; records require evidence or explicit hypothesis state.
- **Opportunity Mapping:** service motions are reusable; customer pain/value cannot be reverse-engineered from the service catalog.
- **Acceptance Criteria:** quality dimensions may guide generation; final AC must be scenario-specific and derived AC must not masquerade as source AC.
- **Reference Evidence:** row registers, case studies and source-backed stories are evidence for their own scope, not universal outputs.

## Runtime Priority
**Evidence → normalized fact/finding → applicable reusable framework → dynamically composed output → traceability → validation**

When evidence is missing, use **Hypothesis** or **Validation Needed** rather than polished generic filler.


## v6.6 Deep Story-Pattern Audit
The prior v6.5 correction targeted known generic phrases but did not parameterize every reusable `Story Pattern` body. v6.6 corrects that gap.

- Story Pattern blocks converted: **17**
- Files affected: **15**
- Remaining fixed `As a` / `I want` / `So that` lines under reusable Story Pattern headings: **0**

Static pattern names are allowed for retrieval. Static final story bodies are not.
