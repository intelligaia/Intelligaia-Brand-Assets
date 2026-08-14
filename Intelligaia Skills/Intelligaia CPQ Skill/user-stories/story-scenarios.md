# CPQ/Q2C Story Scenario Coverage

## Purpose
Help determine which scenario dimensions a story should cover without forcing every CPQ concern into every story.

## Configure
Consider:
product eligibility → required options → dependencies → incompatibilities → quantity/cardinality → validation → resulting configuration.

## Price
Consider:
pricing context → currency → quantity → term/date → calculation authority → recalculation trigger → resulting commercial meaning.

Do not invent formulas.

## Discount
Consider:
requested adjustment → authorization → permitted behavior → approval trigger → approved value → quote/version applicability.

## Quote
Consider:
quote identity → version → currentness → validity → customer artifact → revision → acceptance.

## Approval
Consider:
approval driver → exact commercial version → approver context → decision → rejection → invalidation after change.

## Order
Consider:
source quote/version → readiness → submission → submitted vs completed → partial/error → duplicate prevention → resulting reference/state.

## Amendment
Consider:
authoritative current baseline → pending changes → requested delta → effective date → resulting state → downstream consequence.

## Renewal
Consider:
current term → renewal boundary → pending lifecycle changes → carry-forward/migration → next-term commercial state → approval/acceptance.

## Cancellation
Consider:
scope → effective timing → resulting state → renewal interaction → billing/service consequence.

## Partner / Channel
Consider:
partner → distributor → end customer → payer/service recipient roles; authorization; commercial visibility; special pricing; lifecycle ownership.

## Cross-System
Consider:
identity → semantics → source of truth → version → status → async completion → failure → recovery → reconciliation.

## Exception / Recovery
Consider:
what failed → what completed → whether outcome is known → state preserved → retry safety → correction owner/domain → final verification.

## Scenario Selection Rule
Include a scenario dimension only when it materially affects the story's business outcome, integrity, dependency, risk, or acceptance.

## Guardrail
These are analytical prompts, not assertions that every CPQ implementation behaves this way.
