# CCW ↔ Salesforce — Data & Controls

## 1. Source-of-Truth Matrix
For each concept determine authoritative ownership:
- customer/account;
- contact;
- opportunity/deal;
- partner/end customer;
- quote;
- quote version;
- product/configuration;
- price/discount;
- approval;
- proposal/acceptance;
- order reference/status.

Do not label both systems authoritative for the same mutable concept without explicit conflict policy.

## 2. Cross-System Identity
At minimum define correlation between:
**Salesforce Customer/Opportunity ↔ CCW Quote/Transaction**

If multiple quotes per opportunity are allowed, cardinality and current/primary semantics must be explicit.

## 3. Quote Identity
Distinguish:
CCW quote identifier; quote version/revision; Salesforce reference/record if one exists; customer-facing document identifier.

Do not assume one identifier represents all four.

## 4. Initiation Contract
Document:
**Salesforce Source → Trigger → Context Payload/Reference → CCW Target → Returned Identifier → Validation → Error Behavior**

## 5. Return Contract
Document:
**CCW Event/State → Trigger → Returned Data → Salesforce Target → Update Rule → Version/Stale Check → Error Behavior**

## 6. Customer Mapping
Define mapping for required customer/party identities. Include partner/end-customer distinction where applicable.

## 7. Opportunity Mapping
Define only fields required for CCW business processing or cross-system visibility. Avoid indiscriminate CRM replication.

## 8. Currency
Define who establishes transaction currency, whether it can change after quote creation, and how mismatch is handled.

## 9. Product / Configuration Ownership
If CCW is authoritative for configured commercial structure, Salesforce should consume only the level of detail needed for its business purpose.

Actual ownership requires validation.

## 10. Commercial Values
For every synchronized amount define:
meaning → currency → gross/net basis → line/header scope → version → source owner → update behavior.

Avoid a generic `Amount` mapping with ambiguous semantics.

## 11. Approval
If approval status is synchronized, preserve:
decision state → applicable quote/version → decision timestamp/reference → whether Salesforce value is informational or authoritative.

## 12. Status Mapping
Use a business mapping table:
**CCW State → Business Meaning → Salesforce State → Allowed Transition → Terminal? → Exception Behavior**

Exact statuses are **Unknown / Validation Needed**.

## 13. Version Protection
Returned CCW updates should not overwrite Salesforce context for a newer/superseding quote/version.

## 14. Duplicate Prevention
Define business uniqueness for quote initiation/association. A retry should resume or safely detect the existing transaction.

## 15. Deep-Link / Resume Integrity
If links are used, ensure the user resumes the intended quote and authorization is re-evaluated by the target platform.

Exact link mechanism is implementation-specific.

## 16. Party-Role Integrity
For partner transactions preserve:
vendor seller → partner/reseller → distributor if applicable → end customer → payer/service roles.

## 17. Effective Dates
Do not conflate opportunity close date, quote validity, requested service date, order date, subscription start, or renewal date.

## 18. Audit
Preserve material correlation changes, quote associations, status updates, manual overrides, retry/relink actions and integration corrections.

## 19. Reconciliation
Potential match dimensions:
Salesforce opportunity/customer ID; CCW quote/version; currency; commercial summary; quote state; order reference.

Only reconcile dimensions with agreed semantics.

## Validation Matrix
Before L4 implementation is documented, obtain evidence for:
objects → fields → directions → triggers → APIs/middleware → authentication → cardinality → status maps → retry → ownership → SLA/latency → historical behavior.

## Guardrail
Any specific Salesforce object name beyond sourced platform material, Cisco service/API, custom field, middleware flow, status code, sync interval, or mapping remains **Unknown / Validation Needed**.
