# Quote-to-Cash

## Purpose
Define the vendor-neutral Quote-to-Cash (Q2C) operating model and its relationship to CPQ, contracting, ordering, fulfillment, billing, payment, revenue, and recurring lifecycle motions.

This is the entry module for Q2C. Detailed stages, controls, diagnostics, and data/system handoffs are delegated to linked modules.

## Q2C at a Glance
**Opportunity → Configure → Price → Quote → Approve → Contract / Accept → Order → Fulfill / Provision → Bill / Invoice → Collect / Payment → Revenue / Reporting → Amend / Renew / Cancel**

Organizations may define Q2C boundaries differently. Use the model as a reasoning framework, not a mandatory application architecture.

## CPQ vs Quote-to-Order vs Quote-to-Cash

### CPQ
**Configure → Price → Quote**

Focus: create a valid and commercially accurate proposal.

### Quote-to-Order
**Quote → Approve → Contract / Accept → Order**

Focus: convert commercial intent into an executable order.

### Quote-to-Cash
Extends the commercial process through downstream financial execution and recurring lifecycle management.

Focus: preserve agreed commercial intent from proposal through order, billing, collection, revenue, and subsequent change.

## Core Q2C Principle
A healthy Q2C process preserves traceability across:

**Customer → Opportunity → Quote → Agreement → Order → Subscription / Asset → Billing → Invoice / Payment → Amendment / Renewal**

The exact objects and systems vary by implementation.

## Q2C Outcomes
A mature Q2C operating model aims to improve:
- seller and partner productivity;
- commercial accuracy;
- pricing and approval governance;
- quote-to-order fidelity;
- contract/order consistency;
- billing accuracy;
- downstream automation;
- lifecycle visibility;
- renewal readiness;
- reconciliation effort;
- auditability and reporting.

## Ownership Principle
Q2C is cross-functional. No single team should be assumed to own the complete lifecycle.

Typical participants include Sales, Deal Desk, Sales/Revenue Operations, Product/Catalog Operations, Pricing/Finance, Legal, Order Operations, Fulfillment/Provisioning, Billing/Finance, Customer Success/Renewals, and IT/Application/Integration teams.

See `personas.md`.

## Detail Modules

| Topic | Module |
|---|---|
| Q2C stages and stage boundaries | `quote-to-cash-stages.md` |
| Controls, traceability, exceptions and KPIs | `quote-to-cash-controls.md` |
| Assessment questions and failure patterns | `quote-to-cash-diagnostics.md` |
| CPQ lifecycle | `cpq-lifecycle.md` |
| Commercial/data objects | `cpq-data-model.md` |
| Cross-system handoffs | `../integrations/end-to-end-data-flow.md` |
| Detailed capabilities | `../capabilities/` |
| New business/amendment/renewal journeys | `../journeys/` |

## Reasoning Rule
For a Q2C question:
1. Identify the commercial motion.
2. Identify the lifecycle stages in scope.
3. Identify business ownership at each stage.
4. Identify the commercial record that enters and exits each stage.
5. Identify system-of-record and handoff boundaries where known.
6. Identify validations and controls.
7. Identify exception/reconciliation loops.
8. Trace downstream financial impact.
9. Identify lifecycle impact on amendment/renewal.
10. Use platform modules only when platform-specific evidence is required.

## Boundaries
This module does not define customer-specific processes, vendor implementation details, APIs, field mappings, accounting policy, or revenue-recognition rules.

Those require validated project/platform evidence.

## Evidence
The supplied project corpus supports Q2C analysis across opportunity, catalog/configuration, pricing/discounting, quoting, approvals, contracting, ordering, amendments/renewals, billing/revenue integration, data, UX, and operating-model concerns.

Project findings must retain source provenance.

See `source-provenance.md`.
