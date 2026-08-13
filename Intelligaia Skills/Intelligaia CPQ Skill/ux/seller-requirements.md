# Seller Experience — Requirements & Diagnostics

## Start or Resume
**Story:** As a seller, I want to resume the correct active commercial transaction.
**Acceptance:** Existing active/current quote or lifecycle work is discoverable and duplicate creation is prevented or clearly governed.

## Context Preservation
**Story:** As a seller, I want customer/deal context carried into CPQ.
**Acceptance:** Defined authoritative context is reused and remains correlated through the seller journey.

## Quote Orientation
**Story:** As a seller, I want to know the current quote/version/status.
**Acceptance:** Required transaction identity, version, stage and ownership are visible.

## Configuration Guidance
**Story:** As a seller, I want invalid configuration explained before I reach approval/order.
**Acceptance:** Affected component, reason and corrective action are presented at the appropriate time.

## Commercial Explanation
**Story:** As a seller, I want to understand material price changes.
**Acceptance:** Defined price/discount/quantity/term dimensions and supported change causes are visible with unambiguous labels.

## Approval Impact
**Story:** As a seller, I want to know whether my change requires or invalidates approval.
**Acceptance:** Approval-driving conditions and current approval applicability are surfaced before irreversible handoff.

## Version Comparison
**Story:** As a seller, I want to compare revisions without manually checking every line.
**Acceptance:** Material product, quantity, commercial, date/term and approval differences are identifiable.

## Accepted Version
**Story:** As a seller, I want customer acceptance tied to the exact commercial version.
**Acceptance:** Accepted version identity is preserved and later drafts cannot be mistaken for accepted intent.

## Downstream Status
**Story:** As a seller, I want to know whether my accepted quote completed downstream.
**Acceptance:** Submitted, processing, partial, completed and actionable exception states are distinguishable at the supported business level.

## Safe Failure
**Story:** As a seller, I want an integration failure preserve my valid work.
**Acceptance:** The experience explains affected transaction, preserved state, safe next action and support reference.

## Lifecycle Baseline
**Story:** As a seller, I want amendments and renewals start from current subscription state.
**Acceptance:** Authoritative current state and relevant pending changes are used before constructing the new transaction.

## Lifecycle Delta
**Story:** As a seller, I want to understand what will change and when.
**Acceptance:** Current state, requested delta, resulting state and effective date are distinguishable.

## Diagnostic Framework
Assess seller workflows across:
**Entry → Orientation → Data Reuse → Product Discovery → Configuration → Pricing → Discount → Validation → Approval → Customer Handoff → Acceptance → Downstream → Lifecycle → Exception Recovery**

For each step capture:
goal → current behavior/evidence → friction → business/user impact → root-cause hypothesis → dependency → opportunity → metric/evidence needed.

## Evidence Guardrail
Do not assign severity, frequency, time savings, revenue impact or user preference without evidence. Label unvalidated observations **Hypothesis** and future-state changes **Proposed**.
