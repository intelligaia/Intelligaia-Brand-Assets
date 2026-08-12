# Ordering — Flows

## 1. Quote-to-Order Readiness
1. Identify accepted authoritative quote/version.
2. Confirm customer/party data.
3. Confirm configuration validity.
4. Confirm approved price/discount.
5. Confirm required approvals.
6. Confirm service/effective dates and terms.
7. Confirm order/fulfillment/billing-required attributes.
8. Confirm lifecycle references where applicable.
9. Resolve blocking errors before conversion.

## 2. Order Creation
Accepted quote → create order identity → establish parties, currency, dates and transaction type → transform eligible quote lines → preserve source lineage → calculate/transfer required commercial values → validate.

## 3. Line Transformation
For each source quote line:
1. Identify product/offer and configuration hierarchy.
2. Determine target order representation.
3. Preserve/transform quantity.
4. Preserve/transform attributes.
5. Preserve commercial values required downstream.
6. Preserve lifecycle/source references.
7. Establish parent-child/dependency relationships.
8. Validate mapping result.

Do not assume one quote line always equals one order line.

## 4. Order Decomposition
Where required, decompose a commercial order into executable components based on product, fulfillment domain, legal entity, geography, billing, provisioning, shipment, or other evidenced rules.

## 5. Order Validation
Potential checks:
party/customer, product/configuration, quantity, price, dates, addresses, entitlements, required attributes, approvals, dependencies, downstream mappings.

Classify failures as blocking/warning according to policy.

## 6. Order Submission
Validated order → establish submission state → invoke downstream process/system → capture acknowledgement/reference → update status → monitor execution.

## 7. Orchestration
Identify executable tasks/components → determine dependencies → sequence/parallelize according to orchestration rules → track completion → release dependent steps → aggregate order state.

## 8. Fulfillment / Provisioning Handoff
Order component → send required product/configuration/customer/date data → receive acknowledgement/result → correlate to order line/component → update execution state.

## 9. Billing Handoff
Order/activated service → send billing-relevant charge, quantity, dates, account and lifecycle context according to architecture → receive billing reference/status → reconcile material commercial values.

See `billing.md`.

## 10. Order Hold
Detect hold condition → identify affected order/component → prevent governed progression → expose reason/owner/action → resolve → revalidate → release.

## 11. Downstream Failure
Receive failure → correlate source order/component → classify retryable vs business/data error according to design → preserve payload/error context → correct or retry → reconcile state.

## 12. Retry
Validate retry eligibility → avoid unintended duplicate execution → retry affected operation → capture attempt/result → reconcile.

Idempotency behavior is architecture-specific.

## 13. Partial Failure
Some components succeed while others fail → preserve completed state → isolate failure → determine rollback/continue/remediation policy → resolve → aggregate final state.

Do not assume rollback is possible.

## 14. Order Cancellation
Identify cancellable order/components → validate current execution state → evaluate downstream effects → authorize where required → cancel/compensate according to process → update fulfillment/billing/lifecycle → preserve audit.

## 15. Order Change
If post-order modification is supported, determine whether change is handled as order edit, change order, amendment, cancellation/rebook, or another governed pattern. Do not infer.

## 16. Order Completion
Confirm required components completed → confirm downstream references → reconcile material data → establish completed/activated state → make lifecycle context available.

## 17. Quote-to-Order Reconciliation
Compare accepted quote/version to resulting order:
products/components, quantities, commercial values, dates, customer/party, lifecycle references, required attributes.
Flag unexplained differences.

## Flow Depth
L2/L3 vendor-neutral. Exact orchestration engines, APIs, status transitions and fulfillment behavior belong in platform/integration modules.
