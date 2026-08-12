# CPQ UX Requirement & Evaluation Patterns

## Orientation
**Story:** As a user, I want to know which customer/deal/quote/version I am working on.
**Acceptance:** The required business context and current transaction/version are visible without reconstructing them from multiple screens.

## Resume
**Story:** As a seller, I want to resume the current transaction without creating a duplicate.
**Acceptance:** The approved resume path returns to the intended current transaction/version and preserves prior work.

## Context Reuse
**Story:** As a user, I want trusted customer/deal context reused across the journey.
**Acceptance:** Defined authoritative values are carried/referenced across system boundaries and duplicate manual entry is avoided where appropriate.

## Configuration Explanation
**Story:** As a seller, I want invalid selections explain what must change.
**Acceptance:** Validation identifies the affected component, reason and corrective action.

## Price Transparency
**Story:** As a seller, I want to understand material changes in commercial value.
**Acceptance:** Defined price/discount/quantity/term dimensions and change causes are presented with unambiguous semantics.

## Approval Readiness
**Story:** As a seller, I want to know why approval is required before submitting.
**Acceptance:** Approval-driving conditions and the applicable commercial version are visible at the supported level.

## Approval Decision
**Story:** As an approver, I want decision-relevant context without reconstructing the quote.
**Acceptance:** The approval view includes the required customer/deal, commercial variance, rationale and exact quote/version.

## Actionable Error
**Story:** As a user, I want failures tell me what happened and what I can safely do.
**Acceptance:** The experience identifies affected transaction/component, work preservation, actionable next step and support reference where required.

## Unknown Outcome
**Story:** As a user, I want uncertain downstream processing prevented from creating duplicate submissions.
**Acceptance:** Unknown outcomes are represented as verification/pending state and unsafe retry is not offered.

## Partial Success
**Story:** As operations, I want multi-component completion visible.
**Acceptance:** Completed, pending and failed components and the safe recovery path are distinguishable.

## Lifecycle Baseline
**Story:** As a lifecycle user, I want amendments/renewals start from current authoritative state.
**Acceptance:** Current state and applicable pending changes are visible/retrieved before the new change is constructed.

## Lifecycle Delta
**Story:** As a seller, I want to understand the effect of an amendment.
**Acceptance:** Current, requested delta, resulting state, effective date and supported commercial consequence are distinguishable.

## Cross-System Continuity
**Story:** As a user, I want context preserved when work moves between systems.
**Acceptance:** Defined business identity, transaction/version and relevant status survive the handoff and the user can reach the next required action.

## Evaluation Heuristic
For each workflow assess:
**Orientation → Comprehension → Validity Prevention → Decision Support → Efficiency → Continuity → Error Recovery → Traceability → Accessibility/Role Fit → Evidence**

## Evidence Guardrail
Usability findings, user preferences, severity, frequency, time savings, conversion impact and current platform behavior require research/source evidence. Future-state solutions should be labeled **Proposed**.
