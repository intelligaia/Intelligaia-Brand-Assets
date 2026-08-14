# Zuora Billing Consequence Story Patterns

## Purpose
Keep CPQ/lifecycle intent distinct from authoritative billing consequence.

## Boundary
A quote or amendment may estimate/express commercial intent. Billing may independently determine authoritative invoice/charge/credit outcomes according to configured rules.

Do not state that CPQ-calculated values are final billing values unless evidenced.

## Story Pattern — Understand Billing Consequence
**As a** supported role  
**I want** visibility into the expected billing consequence of a commercial/lifecycle change  
**So that** I can make or communicate the business decision with appropriate context.

Define whether the source asks for estimate, preview, or authoritative result.

## Inputs
Potentially relevant:
subscription baseline → requested delta → effective date → charge type → billing period → usage/tax/payment context.

Use only evidenced inputs.

## Completion
Where billing is downstream, distinguish:
commercial transaction accepted → lifecycle processed → billing calculated → invoice/credit/result produced.

## Reconciliation
If expected and actual billing outcomes can differ, capture:
source transaction → expected consequence → authoritative billing result → mismatch → investigation/correction.

## Error / Partial State
Do not assume a lifecycle transaction failed merely because billing processing is delayed or errored; represent actual system state.

## Cross-Layer Links
- `../../platforms/zuora/billing.md`
- `../../capabilities/billing.md`
- `../../integrations/end-to-end-data-flow.md`
- `../../analysis/impact-commercial-lifecycle.md`

## Guardrail
Do not invent invoice timing, proration, taxation, payment, credit, refund, usage, or revenue-recognition behavior.
