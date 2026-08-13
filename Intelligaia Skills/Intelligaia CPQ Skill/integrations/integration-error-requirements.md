# Integration Error Requirement Patterns

## Error Classification
**Story:** As support, I want integration failures classified consistently.
**Acceptance:** Defined failures are assigned a stable category that distinguishes connectivity, authorization, data, mapping, business-rule, state/version, duplicate, timeout, partial-success and reconciliation conditions.

## Unknown Outcome
**Story:** As operations, I want timeouts treated as unknown outcomes until target state is verified.
**Acceptance:** A timed-out operation is checked using approved correlation/state mechanisms before retry.

## Actionable Error
**Story:** As a user/support analyst, I want an error identify the affected business transaction and next action.
**Acceptance:** The error exposes approved transaction/component, category, correlation, ownership and safe retry/correction guidance without sensitive internals.

## Current-State Check
**Story:** As operations, I want recovery based on current authoritative state.
**Acceptance:** Before replay/rebuild, the current quote/version/subscription/lifecycle state is validated.

## Partial Success
**Story:** As operations, I want completed and failed components distinguishable.
**Acceptance:** Component outcomes remain identifiable and recovery does not unintentionally replay successful business actions.

## Safe Retry
**Story:** As support, I want retry prevent duplicate business outcomes.
**Acceptance:** Retry validates target outcome, current source state and idempotency before execution.

## Data Correction
**Story:** As a data owner, I want invalid data corrected at the authoritative source.
**Acceptance:** The correction process identifies source ownership, revalidates the transaction and prevents target-only fixes from creating divergence.

## Mapping Correction
**Story:** As an integration owner, I want new/incorrect mappings governed.
**Acceptance:** Mapping changes capture business meaning, approval/version, affected transactions and reprocessing/reconciliation.

## Compensation
**Story:** As operations, I want partially completed transactions corrected through approved business actions.
**Acceptance:** Required reversal/correction is explicit, auditable and followed by reconciliation.

## Reconciliation
**Story:** As governance, I want successful and recovered transactions independently checked.
**Acceptance:** Defined expected/actual business dimensions detect unexplained mismatches and route them to an owner.

## Closure
**Story:** As a process owner, I want errors closed only after business state is resolved.
**Acceptance:** Closure requires intended/accepted state, completed audit and required reconciliation.

## Guardrail
Do not invent error codes, severity levels, support groups, retry counts, SLAs, queues, tools, compensation operations or reconciliation tolerances. Mark unsupported implementation details **Unknown / Validation Needed**.
