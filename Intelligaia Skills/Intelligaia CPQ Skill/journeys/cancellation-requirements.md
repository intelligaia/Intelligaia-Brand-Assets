# Cancellation Journey — Requirement Patterns

## Cancellation Classification
**Story:** As a seller, I want the requested end-state routed to the correct lifecycle process.
**Acceptance:** Transaction state, requested timing and scope determine whether the governed path is cancellation, amendment, non-renewal, order cancellation or correction.

## Authoritative Baseline
**Story:** As operations, I want cancellation based on current authoritative state.
**Acceptance:** Active products, quantities, dates, pending changes and required billing/entitlement references are retrieved before execution.

## Scope Clarity
**Story:** As a seller, I want to see exactly what will end and what will remain.
**Acceptance:** Cancellation scope and expected resulting state are explicit for defined products/components/quantities/services.

## Eligibility
**Story:** As a seller, I want cancellation eligibility evaluated before making a customer commitment.
**Acceptance:** Approved contractual and operational eligibility rules are evaluated and unsupported actions are prevented or routed.

## Effective Date
**Story:** As a seller, I want the cancellation date validated across lifecycle and billing rules.
**Acceptance:** The requested date is evaluated against approved notice, term, service and billing constraints.

## Dependency Impact
**Story:** As a seller, I want dependent products/services identified before cancellation.
**Acceptance:** Defined dependencies are evaluated and required cascade, block, migration or retention behavior is shown.

## Financial Impact
**Story:** As a customer-facing user, I want cancellation financial effects explained accurately.
**Acceptance:** Future charges, final charges, credits/adjustments, refunds and termination charges remain distinct and follow approved policy.

## Approval
**Story:** As an approver, I want the full cancellation impact before deciding.
**Acceptance:** Decision context includes scope, reason, effective date, remaining commitment, financial impact and dependency/service impact where required.

## Pending Transaction
**Story:** As operations, I want pending amendments and renewals handled when cancellation is approved.
**Acceptance:** Defined pending transactions are cancelled, sequenced or otherwise resolved according to policy before conflicting execution occurs.

## Subscription Termination
**Story:** As operations, I want subscription state end according to the approved cancellation.
**Acceptance:** Affected products/quantities/end dates update at the governed effective point while unaffected scope is preserved.

## Billing Stop / Adjustment
**Story:** As billing operations, I want cancellation reflected in charges without duplicate financial effects.
**Acceptance:** Future charges, final-period treatment and approved credits/adjustments are applied once and correlated to the cancellation.

## Entitlement Termination
**Story:** As service operations, I want entitlements end at the correct time.
**Acceptance:** Affected entitlements terminate according to the approved effective date while retained entitlements remain intact.

## Withdrawal / Correction
**Story:** As operations, I want cancellation withdrawal or correction governed according to execution state.
**Acceptance:** Pending cancellation may be withdrawn only where permitted; executed cancellation uses the approved corrective/reinstatement process and preserves history.

## Reconciliation
**Story:** As governance, I want cancellation outcomes reconciled across systems.
**Acceptance:** Approved scope, effective date, subscription state, billing/credits, deprovisioning and entitlement state are compared and unexplained differences flagged.

## Guardrail
Do not invent cancellation rights, notice periods, effective dates, remaining-commitment formulas, termination fees, credit/refund policy, approval thresholds, deprovisioning behavior or platform mechanics. Mark missing rules **Unknown / Validation Needed**.
