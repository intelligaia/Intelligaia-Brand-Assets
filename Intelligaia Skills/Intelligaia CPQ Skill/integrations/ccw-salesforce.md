# Cisco CCW ↔ Salesforce Integration

## Purpose
Define the evidence-safe integration architecture between Salesforce selling context and Cisco Commerce Workspace (CCW) commerce/quote context.

This entry module intentionally separates supported business patterns from customer-specific implementation. Exact objects, fields, APIs, middleware, ownership, sync direction, and status transitions require source evidence.

## Business Outcome
Salesforce and CCW should preserve a coherent commercial transaction so sellers do not reconstruct customer/deal context manually, quote identity remains correlated to CRM context, and downstream commercial state can be traced to the originating customer/opportunity.

## Core Interaction Pattern
**Salesforce Customer / Opportunity Context → CCW Quote / Commerce Transaction → Configuration / Commercial Processing → Quote Status / Identifiers / Selected Commercial Context → Salesforce → Downstream Order / Lifecycle**

The actual direction and payload of each exchange is **Unknown / Validation Needed** until evidenced.

## Detail Modules
| Topic | Module |
|---|---|
| Business flows and handoffs | [`ccw-salesforce-flows.md`](ccw-salesforce-flows.md) |
| Data ownership, identifiers, mappings and controls | [`ccw-salesforce-data-controls.md`](ccw-salesforce-data-controls.md) |
| UX, operational diagnostics and failure analysis | [`ccw-salesforce-ux-diagnostics.md`](ccw-salesforce-ux-diagnostics.md) |
| Requirements and acceptance patterns | [`ccw-salesforce-requirements.md`](ccw-salesforce-requirements.md) |

## Related Modules
- [End-to-End Data Flow](end-to-end-data-flow.md)
- [Salesforce Opportunity](../platforms/salesforce/opportunity.md)
- [Salesforce CPQ](../platforms/salesforce/cpq.md)
- [Salesforce Quote](../platforms/salesforce/quote.md)
- [Cisco CCW Overview](../platforms/cisco-ccw/overview.md)
- [Cisco CCW Workflows](../platforms/cisco-ccw/workflows.md)

## Evidence Classification
Use:
- **Validated** for behavior directly supported by supplied source material;
- **Historical** for supported prior-state behavior;
- **Proposed** for future-state design;
- **Hypothesis** for diagnostic possibilities;
- **Unknown / Validation Needed** for implementation details not supported by evidence.

## Guardrail
Do not assume Salesforce CPQ is the quoting engine merely because Salesforce is present. Do not assume CCW is launched from Opportunity, that quote records sync bidirectionally, or that any particular Salesforce/Cisco object or API is used unless evidenced.
