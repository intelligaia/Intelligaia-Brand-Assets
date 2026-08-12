# End-to-End CPQ Data Flow

## Reference lineage
Account/Contact → Opportunity → Quote → Quote Lines/Configuration → Approval → Proposal/Agreement → Order → Order Lines → Subscription/Asset → Billing/Invoice → Amendment/Renewal.

## Handoff contract
For every transition document:
1. Source system
2. Target system
3. Trigger/event
4. Source and target IDs
5. System of record by entity
6. Required fields
7. Transformations/defaults
8. Validation
9. Sync timing
10. Retry/idempotency
11. Error/reconciliation path
12. Owner/monitoring
13. User-visible status
14. Downstream impact

## Critical CPQ controls
Account/contact identity; product/SKU; price list/currency; quantity; term/effective dates; discounts; approval state; terms; billing account/contact; payment terms; PO; Ship-to/Entitle-to; subscription/asset references.

## Failure analysis
Never stop at “integration failed.” Identify which business object is inconsistent, who can correct it, whether upstream/downstream state must roll back, and how duplicate/partial transactions are prevented.
