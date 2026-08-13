# Integration & Data Opportunities

## Use When
Evidence indicates identity, semantic, state, synchronization, reliability or reconciliation problems across Q2C boundaries.

## Typical Evidence Signals
- mismatched customer/product/price identifiers;
- quote/order/subscription state divergence;
- duplicate downstream transactions;
- timeout/unknown outcome;
- manual reconciliation;
- stale synchronized data;
- unclear source-of-truth;
- inconsistent effective-date/term semantics;
- partial success without recoverable state.

## Service Motions
### Integration Assessment
Map triggers, sources, targets, contracts, correlation, states, failure semantics and ownership.

### Canonical Data / Semantic Design
Align business meaning across customer, product, quote, order, subscription and billing domains.

### API / Event / Orchestration Modernization
Use only after evidence and architecture establish the appropriate technical approach.

### Reliability & Recovery Engineering
Design observable processing states, safe retry, duplicate prevention and recovery.

### Reconciliation Design
Compare expected source outcome with authoritative downstream result and define correction workflow.

## Expected Outcomes
Clearer data authority, semantic consistency, traceable transactions, safer recovery and reduced state divergence.

## Validation
Processing success → duplicate rate → reconciliation mismatch → recovery completion → data-quality measures, where baselines exist.

## Guardrail
Do not invent APIs, events, middleware, sync direction, retry policy or source-of-truth.
