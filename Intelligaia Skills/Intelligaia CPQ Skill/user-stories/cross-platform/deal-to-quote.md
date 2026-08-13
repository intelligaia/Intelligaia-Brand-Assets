# Cross-Platform Deal-to-Quote Stories

## Outcome
Carry the intended customer/deal context into a governed commercial transaction without losing identity or semantics.

## Story Pattern
**As a** supported seller/partner  
**I want** to initiate the correct commercial transaction from the intended customer/deal context  
**So that** quoting begins with consistent business identity and commercial context.

## Flow
1. Actor selects/creates the relevant business context.
2. Required customer/deal context is established.
3. Commercial transaction is initiated.
4. Required context crosses the system boundary where applicable.
5. Target validates the received context.
6. Quote/commercial identity is established and correlated.
7. Status/reference is visible to the appropriate upstream context.

## Validate
customer/account identity → opportunity/deal identity → partner/channel role → transaction type → currency/term/date → product context → quote correlation.

## Decisions
- Is the context complete and eligible?
- Which system is authoritative for each shared attribute?
- What happens when upstream context changes after quote creation?
- Can more than one quote/version exist for the deal?

## Failure
Missing/invalid context → stale data → duplicate initiation → target unavailable → unknown creation result → correlation failure.

## Acceptance Focus
Correct identity, no unintended duplicate transaction, preserved commercial semantics, traceable source/target references, actionable failure state.

## Guardrail
Do not assume Salesforce is the source or CCW/Zuora is the target unless evidence says so.
