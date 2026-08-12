# Persona Handoffs & Diagnostics

## Purpose
Define common cross-persona handoffs and a reusable persona-analysis framework.

# Handoff Model
For each important handoff identify:

**From Persona → To Persona → Trigger → Information/Artifact → Decision/Action → SLA/Expectation → Status Visibility → Exception Path → System Handoff → KPI**

Do not assume an SLA exists unless evidence supports it.

# Common Handoffs

## Seller → Product Specialist
Trigger: complex solution/configuration.  
Need: customer requirements, current configuration, open technical questions.  
Risk: context loss or offline solution design.

## Seller → Deal Desk
Trigger: complex/non-standard commercial transaction.  
Need: complete deal context, configuration, pricing, exception, justification.  
Risk: incomplete intake, repeated clarification, Deal Desk performing standard seller work.

## Seller / Deal Desk → Pricing / Finance
Trigger: pricing/discount/economic exception.  
Need: calculated commercial context and justification.  
Risk: approver reconstructs price logic manually.

## Seller → Approver
Trigger: approval rule.  
Need: concise decision context, exception magnitude/reason, customer/deal impact.  
Risk: opaque status, missing information, long cycle.

## Seller / Deal Desk → Legal
Trigger: non-standard terms/agreement.  
Need: approved commercial state and requested deviations.  
Risk: commercial changes occur in contract negotiation without returning to quote controls.

## Legal → Seller / CPQ
Trigger: negotiated commercial change.  
Need: exact change and downstream implication.  
Risk: contract and quote diverge.

## Seller → Order Operations
Trigger: accepted transaction.  
Need: final quote/order context and downstream-required data.  
Risk: re-entry, missing PO/party data, quote/order mismatch.

## Order Ops → Billing / Fulfillment
Trigger: validated/booked order.  
Need: complete executable commercial data.  
Risk: integration failure or ambiguous source of correction.

## Billing / Fulfillment → Upstream Teams
Trigger: downstream error.  
Need: correlated source transaction, error reason, owner/action.  
Risk: manual reconciliation and duplicate corrections.

## Customer Success / Renewal → Seller / Deal Desk
Trigger: expansion, complex amendment, renewal exception.  
Need: active subscription/asset and historical commercial context.  
Risk: incomplete installed-base/pricing history.

# Persona UX Diagnostic

For each persona ask:
1. What outcome are they trying to achieve?
2. Which tasks are frequent vs exceptional?
3. Which information must they search for?
4. What must they remember?
5. Where do they switch systems?
6. Where is data re-entered?
7. Which decisions lack context?
8. Which errors arrive too late?
9. Where is status/ownership unclear?
10. Which tasks require expert help?
11. Which handoffs create waiting?
12. Which workarounds exist outside the system?

# Persona KPI Categories
- task/cycle time;
- manual touches;
- self-service;
- error/rework;
- handoff wait;
- approval turnaround;
- support/escalation volume;
- adoption/completion;
- downstream correction.

Use only KPIs relevant to the persona and evidence. Do not invent targets.

# Responsibility Analysis
When ownership is unclear, use a responsibility view rather than guessing:
- performs work;
- makes decision;
- owns policy;
- owns data;
- owns system/configuration;
- receives handoff;
- resolves exception;
- monitors KPI.

This can later be translated into RACI or another governance model if requested.
