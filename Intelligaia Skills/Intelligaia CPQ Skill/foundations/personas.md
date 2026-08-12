# CPQ / Quote-to-Cash Personas

## Purpose
Canonical vendor-neutral actor model for CPQ and Quote-to-Cash.

Use this file to identify who performs work, makes decisions, receives handoffs, experiences friction, and owns outcomes. Detailed persona profiles are delegated to linked modules.

## Persona Rules
- A persona represents responsibilities and needs, not necessarily a job title.
- One person may perform multiple personas.
- One persona may be split across multiple teams.
- Do not assume customer-specific ownership without evidence.
- Preserve customer/source role names when analyzing supplied material.
- Platform permissions and object ownership belong in platform/implementation modules.

## Core Persona Groups

### Selling
- Account Executive / Seller
- Partner / Channel Seller
- Solution / Product Specialist
- Customer Success / Renewal Seller

### Commercial Governance
- Deal Desk
- Pricing / Finance
- Approver / Management
- Legal

### Operations
- Sales Operations / Revenue Operations
- Product / Catalog Operations
- Order Operations
- Billing Operations
- Fulfillment / Provisioning

### Technology / Administration
- CPQ / CRM / Billing Administrator
- IT / Application Owner
- Integration / Data Team

### External
- Customer / Buyer

## Persona → Lifecycle View

| Persona | Primary lifecycle touchpoints |
|---|---|
| Seller / AE | Opportunity, Configure, Price, Quote, Approval, Contract, Order |
| Partner Seller | Configure, Price, Quote, Approval, Order |
| Product/Solution Specialist | Configure, solution validation |
| Deal Desk | Configure, Price, Quote, Approval, exception management |
| Pricing/Finance | Price, discount governance, approval |
| Approver/Management | Approval |
| Legal | Contract, non-standard terms, negotiation |
| RevOps/Sales Ops | Process governance, data, reporting, adoption |
| Product/Catalog Ops | Catalog, configuration rules, commercial readiness |
| Order Ops | Order validation, booking, reconciliation |
| Billing Ops | Billing setup, exceptions, reconciliation |
| Fulfillment/Provisioning | Delivery, activation, entitlement |
| Customer Success/Renewals | Installed base, amendment, expansion, renewal |
| Admin/IT/Integration | Platform, automation, data, integrations, support |
| Customer/Buyer | Proposal review, negotiation, acceptance |

## Detail Modules

| Topic | Module |
|---|---|
| Seller, partner, specialist, renewal roles | `personas-selling.md` |
| Deal Desk, pricing, approvers, legal | `personas-governance.md` |
| RevOps, catalog, order, billing, fulfillment | `personas-operations.md` |
| Admin, IT, integration/data | `personas-technology.md` |
| Customer/buyer | `personas-customer.md` |
| Cross-persona handoffs and diagnostics | `personas-handoffs.md` |

## Persona Analysis Contract
For persona-focused analysis, identify when relevant:

**Objective → Lifecycle Stage → Tasks → Decisions → Required Information → Systems → Handoffs → Exceptions → UX Needs → KPI → Evidence → Open Questions**

## Evidence
These are vendor-neutral persona archetypes. Customer-specific responsibilities, pain points, organization structures, and KPIs must be validated from project evidence.

See `source-provenance.md`.
