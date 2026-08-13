# CPQ / Quote-to-Cash Conceptual Data Model

## Purpose
Define the canonical vendor-neutral conceptual data model used by CPQ Insight.

This model describes business entities and relationships, not vendor object names, database schemas, API payloads, or customer-specific fields.

## Core Commercial Lineage
**Customer / Account → Opportunity → Quote → Quote Line / Configuration → Pricing / Adjustment → Approval → Agreement → Order → Subscription / Asset / Entitlement → Billing**

Amendments and renewals operate on active commercial state and create new/changed downstream transactions.

## Modeling Rules
- Separate business concepts from platform objects.
- Identify the authoritative record for each concept when implementation evidence exists.
- Preserve cross-system identifiers and lineage.
- Treat effective dates and versions as first-class lifecycle concepts.
- Do not assume one-to-one mappings between systems.
- Distinguish master/reference data from transaction/lifecycle data.
- Distinguish current state from transaction history.
- Do not invent Salesforce, Zuora, Cisco, ERP, CLM, or billing field names.

## Entity Domains

| Domain | Primary entities |
|---|---|
| Customer & selling context | Customer/Account, Contact/Party, Opportunity |
| Catalog & configuration | Product, Offer, Bundle/Option, Attribute, Configuration |
| Pricing | Price List, Price, Adjustment/Discount |
| Commercial transaction | Quote, Quote Line, Approval, Proposal/Agreement |
| Execution | Order, Order Line |
| Customer lifecycle | Subscription, Asset, Entitlement, Amendment, Renewal |
| Financial execution | Billing Account, Charge, Invoice |
| Integration/governance | Identifier, Cross-System Reference, Status, Effective Date, Version |

## High-Level Relationships
- Customer/Account can have multiple Contacts and Opportunities.
- Opportunity can have one or more Quote scenarios.
- Quote contains Quote Lines.
- Quote Lines reference catalog Products/Offers and configuration state.
- Pricing and adjustments apply to quote/line context.
- Quote can require multiple Approval decisions.
- Accepted commercial state can generate an Agreement and/or Order.
- Order contains Order Lines traceable to accepted commercial lines where architecture supports it.
- Order execution can establish/update Subscription, Asset, and Entitlement state.
- Billing uses customer, charge, date, price, term, and lifecycle context.
- Amendment changes active lifecycle state.
- Renewal references expiring lifecycle state and creates a subsequent commercial transaction.

Exact cardinalities are implementation-specific unless explicitly defined.

## Detail Modules

| Topic | Module |
|---|---|
| Customer, opportunity, catalog, quote, approval, agreement, order | `cpq-data-model-commercial.md` |
| Subscription, asset, entitlement, amendment, renewal | `cpq-data-model-lifecycle.md` |
| Billing account, charge, invoice and financial linkage | `cpq-data-model-financial.md` |
| IDs, SoR, dates, versions, lineage, synchronization | `cpq-data-model-governance.md` |

## Data Analysis Contract
For an entity or integration question identify:

**Entity → Business Purpose → Key Relationships → Key Conceptual Attributes → Lifecycle State → Effective Dates → Identifier(s) → System of Record → Source/Target → Validation → History/Version → Downstream Dependency → Evidence**

## Cross-Links
- `terminology.md`
- `cpq-lifecycle.md`
- `quote-to-cash.md`
- `../integrations/end-to-end-data-flow.md`
- `../integrations/api-patterns.md`

## Evidence
Platform/customer mappings must be supported by implementation evidence. This foundation must not be used to claim that a specific platform uses a particular object, field, relationship, or system-of-record pattern.
