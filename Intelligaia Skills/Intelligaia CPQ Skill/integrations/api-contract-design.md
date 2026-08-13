# API Contract Design

## 1. Business Operation First
Prefer operations that express commercial intent:
create/associate quote; validate configuration; calculate price; submit approval; convert accepted quote; create lifecycle change; renew; cancel; retrieve authoritative state.

Do not expose internal persistence mechanics as the business contract unless required.

## 2. Contract Definition
For each operation document:
**Purpose → Caller → Authority → Preconditions → Request → Validation → Business Action → Response → Resulting State → Errors → Idempotency → Audit**

## 3. Resource Identity
Use stable business identifiers. Where cross-system identity is needed preserve:
source entity ID; source version; target ID; correlation ID; operation ID.

Exact identifier fields are implementation-specific.

## 4. Request Semantics
Separate:
- required business inputs;
- optional inputs;
- references;
- user-entered values;
- source-authoritative values;
- derived/defaulted values.

## 5. Response Semantics
Return sufficient information to understand:
accepted/rejected → business reference → current/expected state → validation/errors → next action → correlation.

Avoid returning only a technical success flag for long-running business operations.

## 6. Validation
Potential validation layers:
schema → identity/reference → authorization → business eligibility → state/version → configuration → commercial → effective date → downstream readiness.

## 7. Error Contract
Use stable error categories/codes plus human-readable context. Include affected entity/component and safe recovery guidance where appropriate.

Do not expose secrets, credentials, stack traces, or sensitive internals.

## 8. Query / Read Pattern
Read APIs should make source freshness and effective/current/pending state understandable where lifecycle decisions depend on it.

## 9. Pagination
For collections, define deterministic pagination/order semantics. Do not assume consumers can safely retrieve an unbounded catalog, installed base, or transaction history in one request.

## 10. Filtering
Expose filters aligned to business use cases such as customer, transaction, lifecycle status, effective date, product, or updated-since when supported.

## 11. Sparse / Expanded Views
Where large resources exist, distinguish summary from expanded detail rather than forcing every consumer to retrieve full commercial/configuration/billing structures.

## 12. Monetary Values
For monetary fields define:
currency → unit/extended meaning → gross/net → discount relationship → rounding/precision → tax inclusion where relevant.

## 13. Quantity
Name quantity by meaning: requested, ordered, delta, resulting, subscription, billing, usage, committed.

## 14. Dates
Name dates by business meaning rather than generic `date`: pricing, validity, requested start, effective, subscription start/end, charge start/end, renewal, cancellation.

## 15. Hierarchical Products
Preserve parent/child/component identity and required configuration attributes. Flat line arrays may lose commercial intent.

## 16. Party Roles
Represent customer, end customer, partner, distributor, sold-to, bill-to/payer, ship-to/service-to roles explicitly where the business model requires them.

## 17. Lifecycle Delta
For amendments distinguish:
**Current State → Requested Delta → Resulting State**

Avoid ambiguous updates where the caller cannot tell whether quantity is delta or final quantity.

## 18. Contract Evolution
Additive changes are safer only when consumers can ignore new optional data without changing meaning. Breaking semantic changes require explicit contract/schema version strategy.

## 19. Backward Compatibility
Test old consumers against new producers and new consumers against supported old versions according to the approved compatibility window.

## 20. Examples
Examples should be labeled illustrative unless derived from actual implementation evidence. Never let sample field names become undocumented “facts.”
