# Story Flow, Rules & Decision Analysis

## 1. Happy Path
Express the business flow as numbered steps.

Example structure:
1. Actor enters valid transaction context.
2. System retrieves authoritative state.
3. Actor performs requested business action.
4. Rules validate eligibility.
5. System calculates/updates governed state.
6. Required approval/handoff occurs.
7. Resulting state is persisted/correlated.
8. Actor sees completion/next action.

This is a pattern, not a claim about a specific implementation.

## 2. Decision Points
For every branch capture:

**Decision → Inputs → Rule Authority → True Path → False Path → Error/Exception → Evidence**

## 3. Business Rules
Classify:
eligibility; configuration; pricing; discount; approval; date/term; lifecycle; partner/channel; billing; authorization.

## 4. Rule Ownership
Identify the authoritative domain/system only when known.

If unclear: **Unknown / Validation Needed**.

## 5. Validation Timing
Ask whether validation should occur:
on entry → during edit → calculation → submission → approval → downstream execution.

## 6. Configuration Stories
Analyze:
product eligibility → required options → dependencies → incompatibilities → defaults → validation → resulting configuration.

## 7. Pricing Stories
Analyze:
pricing context → authoritative calculation → currency → quantity → term/date → adjustments → resulting commercial value → recalculation triggers.

Do not invent formulas.

## 8. Discount Stories
Analyze:
requested value → permitted range/action → approval trigger → approved value → quote/version applicability.

## 9. Approval Stories
Analyze:
approval driver → exact commercial version → approver context → decision → rejection path → change invalidation.

## 10. Quote Stories
Analyze:
quote identity → version → commercial state → validity → customer artifact → revision → acceptance.

## 11. Order Stories
Analyze:
accepted/eligible source version → readiness validation → submission → processing → partial/complete/failure → target reference.

## 12. Amendment Stories
Analyze:
current authoritative baseline → pending changes → requested delta → effective date → resulting state → commercial consequence → downstream completion.

## 13. Renewal Stories
Analyze:
current term → renewal boundary → pending changes → carry-forward/migration → proposed next term → approval/acceptance → resulting state.

## 14. Exception Flow
For every material failure ask:
what failed? → what completed? → is outcome known? → is work preserved? → can retry occur? → who owns correction? → how is final state verified?

## 15. Concurrency
Check:
quote changed during approval; duplicate submission; overlapping amendment; renewal vs pending amendment/cancellation; partner ownership change.

## 16. Effective Date
Separate:
request date → processing date → pricing date → effective date → billing/service date where relevant.

## 17. State Transition
Document:
starting state → action/decision → resulting state → invalid transitions.

## Flow Output
**Preconditions → Trigger → Steps → Decisions → Rules → Exceptions → State Changes → End State → Unknowns**

## Guardrail
Do not fabricate branches simply to make a story appear complete. Flag missing decisions for validation.
