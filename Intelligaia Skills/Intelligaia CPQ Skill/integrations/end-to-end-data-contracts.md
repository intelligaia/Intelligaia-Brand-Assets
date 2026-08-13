# End-to-End Data Contracts

## Purpose
Define reusable data-contract patterns for CPQ/Q2C integrations.

## 1. Contract Template
For each handoff document:

**Business Object / Concept**  
**Source System / Record**  
**Source Identifier**  
**Trigger**  
**Required Fields**  
**Optional Fields**  
**Transformation / Derivation**  
**Defaulting Rule**  
**Target System / Record**  
**Target Identifier**  
**Validation**  
**Effective-Date Semantics**  
**Error Owner**  
**Correlation / Audit Reference**

## 2. Canonical Business Concepts
Common concepts requiring explicit ownership:
- account/customer;
- contact;
- opportunity/deal;
- partner/channel;
- product/offer;
- configuration/component;
- price/rate;
- discount;
- quote/version;
- approval;
- proposal/acceptance;
- order/order component;
- fulfillment/provisioning task;
- subscription/installed-base product;
- charge;
- invoice;
- entitlement.

Canonical does not mean a new physical master data store is required.

## 3. Identifier Strategy
Preserve business correlation using stable identifiers.

Potential categories:
source record ID; quote ID/version; order ID/component; subscription ID/product; external reference; correlation ID; idempotency key.

Exact fields require evidence.

## 4. Source of Truth Matrix
For each concept identify:
**Authoritative Create → Authoritative Update → Read Replicas/Consumers → Allowed Overrides → Reconciliation Owner**

Avoid vague statements such as “systems sync both ways.”

## 5. Field Ownership
Classify target values:
- source-authoritative;
- target-authoritative;
- transformed;
- derived;
- defaulted;
- user-entered at target;
- reference-only.

## 6. Required vs Optional
A source field being optional does not imply the target can operate without it. Define business-required fields at each handoff.

## 7. Null Semantics
Distinguish:
missing/not supplied; unknown; intentionally blank; clear existing value; not applicable.

Do not use null indiscriminately for all meanings.

## 8. Enumeration Mapping
Document:
**Source Value → Business Meaning → Target Value → Unsupported/Fallback Behavior**

Avoid silent “other” mapping where it changes commercial meaning.

## 9. Product Mapping
Preserve stable product identity plus required hierarchy, option, attribute and lifecycle references.

Do not rely only on display name.

## 10. Configuration Mapping
For configured products document:
parent/child relationship → option/component identity → selected attributes → quantities → dependencies required downstream.

## 11. Commercial Mapping
For each monetary value define:
semantic meaning → currency → unit/extended basis → gross/net relationship → discount basis → tax inclusion if relevant → rounding → source/target owner.

## 12. Quantity Semantics
Distinguish ordered quantity, resulting quantity, delta quantity, committed quantity, usage quantity, licensed quantity, and billing quantity where applicable.

## 13. Date Semantics
Name dates by business meaning:
quote/pricing date; validity date; requested service date; order date; fulfillment date; activation date; subscription start/end; amendment effective date; renewal boundary; charge start/end; invoice/service period.

## 14. Version Semantics
A quote ID without quote-version context may be insufficient. Preserve the commercial version used for approval, acceptance and order conversion.

## 15. Party Roles
Model customer/partner roles explicitly. Potential roles include sold-to, bill-to, payer, ship-to, service-to, end customer, end user, reseller and distributor.

## 16. Lifecycle Lineage
Preserve predecessor/successor and source relationships for amendment, renewal, cancellation/rebook, migration and replacement transactions.

## 17. Sensitive / Restricted Data
Only transmit data required for the target business purpose. Authentication, authorization, privacy classification and retention rules are implementation/security concerns and must follow approved architecture.

## 18. Mapping Ownership
Every mapping should have a named business/data owner and change-control process.

## Evidence Guardrail
Object names, field names, data types, enum values, mappings and system ownership are **Unknown / Validation Needed** unless supported by source evidence.
