# CPQ Data Model — Governance, IDs, State & Lineage

## Purpose
Define cross-cutting data principles required to keep CPQ/Q2C records reliable across systems and lifecycle stages.

# 1. System of Record
For each entity/data element identify:
- authoritative system;
- creation point;
- permitted update sources;
- downstream consumers;
- synchronization direction;
- conflict/reconciliation behavior.

Do not assume CRM owns Customer, CPQ owns Quote, or Billing owns Subscription without implementation evidence.

# 2. Business Key vs Technical Identifier
## Technical Identifier
System-generated unique record ID within a defined platform/scope.

## Business Key
A meaningful identifier used by the business, such as customer number, quote number, SKU, order number, or subscription number.

A robust integration may require both.

# 3. Cross-System Correlation
Maintain references that allow related records to be correlated across systems.

Examples conceptually:
Opportunity ID ↔ Quote ID ↔ Agreement ID ↔ Order ID ↔ Subscription/Asset ID ↔ Billing/Invoice ID.

Exact fields and mappings belong in platform/integration modules.

# 4. Parent / Child Relationships
Common hierarchical relationships include:
- customer hierarchy;
- product/bundle/options;
- quote/quote lines;
- order/order lines;
- subscription/subscription items;
- invoice/invoice lines.

Preserve hierarchy where it affects configuration, pricing, lifecycle, billing, or reporting.

# 5. Cardinality
Never assume cardinality from names alone.

Validate questions such as:
- one opportunity to one or many quotes?
- one quote to one or many orders?
- one agreement to multiple orders?
- one order line to one or many subscription/asset records?
- one customer to multiple billing accounts?

# 6. Status / State
State describes where an entity is in its lifecycle.

Examples conceptually:
Draft, Validated, Pending Approval, Approved, Accepted, Ordered, Active, Amended, Renewed, Cancelled.

Do not use these as exact platform status values unless evidenced.

# 7. State Transition
A controlled change from one state to another.

For important transitions define:
**Current State → Trigger → Validation → Decision → New State → Event/Handoff → Audit**

# 8. Effective Dating
Products, prices, rules, quotes, agreements, subscriptions, amendments, and charges can all be time-sensitive.

Capture semantic meaning of dates rather than treating all dates as equivalent.

# 9. Versioning
Version/revision is important where commercial state changes during negotiation or lifecycle processing.

Key questions:
- What creates a new version?
- Which version is authoritative?
- Are prior versions immutable?
- Which approval belongs to which version?
- Which document/order was generated from which version?

# 10. Auditability
For governed changes retain sufficient context to answer:
who changed what, when, why, from what value, to what value, under which transaction/approval.

# 11. Data Lineage
For each critical value identify:
**Origin → Transformations → Systems → Consumers → Final Use**

Critical values often include customer identity, SKU/product, quantity, price, discount, currency, term, effective dates, billing terms, and lifecycle references.

# 12. Synchronization
For cross-system synchronization identify:
- trigger;
- direction;
- frequency/timing;
- payload/entity;
- validation;
- success acknowledgement;
- retry;
- duplicate prevention;
- error ownership;
- reconciliation.

# 13. Data Quality Dimensions
Useful dimensions:
- completeness;
- validity;
- consistency;
- uniqueness;
- timeliness;
- accuracy where verifiable;
- referential integrity;
- lineage/traceability.

# 14. History vs Current State
Do not overwrite transaction history simply to represent current state.

Lifecycle analysis often requires both:
- current active state;
- sequence of commercial changes that produced it.

# 15. Data Ownership
Distinguish:
- business owner;
- data steward;
- system owner;
- integration owner;
- process owner.

These may be different personas.

# 16. Integration Failure
A failed handoff should preserve enough correlation to determine:
source transaction, target transaction if created, failure reason, retry state, owner, and whether duplicate processing is possible.

See `../integrations/integration-errors.md`.

# 17. Evidence Rule
Platform object names, fields, APIs, mappings, ownership, and cardinalities require explicit implementation evidence. If unavailable, label them Unknown rather than filling gaps with assumed architecture.
