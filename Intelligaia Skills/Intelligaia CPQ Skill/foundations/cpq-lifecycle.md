# CPQ Lifecycle

## Purpose
Define the vendor-neutral CPQ/Q2C lifecycle and route detailed lifecycle questions to focused foundation modules.

## Lifecycle
**Account / Opportunity → Configure → Price → Quote → Approve → Contract / Accept → Order → Fulfill / Provision → Bill / Invoice → Amend → Renew / Cancel**

The boundaries vary by organization and platform. Approval, contracting, billing, and lifecycle management may span multiple systems.

## Core CPQ
**Configure → Price → Quote**

- **Configure** — determine what can and should be sold.
- **Price** — calculate applicable commercial values.
- **Quote** — create and govern the commercial proposal.

## Extended Commercial Lifecycle
- Account / Opportunity establishes customer and selling context.
- Configure establishes a valid solution.
- Price establishes commercial values.
- Quote packages the commercial proposal.
- Approve governs exceptions.
- Contract / Accept establishes customer acceptance.
- Order converts accepted intent into execution.
- Fulfillment / Provision delivers the product/service/entitlement.
- Billing executes agreed financial terms.
- Subscription / Asset state supports in-life changes.
- Amendment changes an active relationship.
- Renewal continues or restructures an expiring relationship.
- Cancellation ends or reduces the relationship.

## Detail Modules
Use these modules instead of expanding this file:

| Topic | Module |
|---|---|
| Lifecycle actors/personas | `personas.md` |
| Lifecycle stages and controls | `cpq-lifecycle-stages.md` |
| Data lineage and lifecycle objects | `cpq-data-model.md` |
| Rework, decisions, controls and KPIs | `cpq-lifecycle-controls.md` |
| Assessment/diagnostic questions | `cpq-lifecycle-diagnostics.md` |
| Broader Quote-to-Cash | `quote-to-cash.md` |
| Detailed capabilities | `../capabilities/` |
| Scenario flows | `../journeys/` |
| Platform implementation evidence | `../platforms/` |
| System handoffs | `../integrations/` |

## Lifecycle Reasoning Rule
For a lifecycle question:
1. Identify the commercial motion.
2. Identify the current lifecycle stage.
3. Identify upstream inputs.
4. Identify the stage objective and output.
5. Identify decisions/controls.
6. Identify downstream handoffs.
7. Add rework/exception paths where material.
8. Use platform-specific modules only when platform context is requested or evidenced.

## Boundaries
This module defines **where activities sit and how stages relate**. It does not contain detailed platform behavior, customer-specific findings, APIs, objects, or implementation rules.

## Evidence
This lifecycle model is vendor-neutral. Project-specific findings must retain provenance and must not be generalized as universal CPQ behavior.

See `source-provenance.md`.
