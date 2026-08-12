# Amendment Journey — Controls, Data & Governance

## 1. Authoritative Baseline
Every amendment must identify the authoritative subscription/version/state used for calculation.

## 2. Pending-Change Awareness
Future or in-flight lifecycle changes must be considered before creating another amendment.

## 3. Delta Semantics
Explicitly distinguish:
**Current Value | Requested Delta | Resulting Value**

Especially for quantity, recurring value, configuration and dates.

## 4. Effective-Date Control
Validate the requested effective date against evidenced term, billing, lifecycle and product constraints.

## 5. Product Eligibility
Identify whether each product/component can be added, removed, changed, migrated, cancelled or renewed at the requested point.

## 6. Dependency Control
A change to one component may affect configuration, discounts, entitlements, fulfillment or billing of other components.

## 7. Pricing Basis
Document the approved basis used to price the amendment. Do not assume current list, original price, contracted price, or another basis.

## 8. Proration Control
Where applicable capture:
effective date → billing/service period → approved convention → eligible charge → calculated effect → rounding.

## 9. Credit / Refund Distinction
A negative amendment value may produce a billing credit, future offset, refund, or no financial return according to policy. Keep these concepts distinct.

## 10. Discount Control
Define whether prior discounts carry, reset, recalculate, or require new approval.

## 11. Approval Context
Approvers should see source state, requested change, resulting state, effective date, commercial impact and reason.

## 12. Version / Acceptance Integrity
Customer acceptance must correlate to the exact amendment version that is executed.

## 13. Execution Lineage
Preserve:
**Subscription/Product → Amendment Quote/Line → Change Order/Component → Fulfillment → Resulting Subscription/Product → Billing/Entitlement**

## 14. Partial Execution
Track completed, pending and failed change components. Do not assume atomic rollback.

## 15. Concurrency
Define whether overlapping amendments are blocked, sequenced, rebased, merged, cancelled/recreated, or handled another approved way.

## 16. Future State
For future-dated changes preserve both current active state and pending resulting state.

## 17. Billing Control
Reconcile charge additions/removals/changes, effective dates, credits/adjustments and future schedule to the accepted amendment.

## 18. Entitlement Control
Ensure entitlement timing and quantity/product state align with the effective amendment result.

## 19. Historical Integrity
Do not overwrite the pre-amendment subscription state. Preserve effective-dated history sufficient for reconstruction.

## 20. Source of Truth
Explicitly identify authoritative systems for installed base, amendment quote, order execution, subscription state, billing and entitlement.

## Risks
Potential hypotheses:
stale installed base; hidden pending amendment; delta/result confusion; wrong effective date; manual proration; duplicate credit; unsupported removal; migration mismatch; acceptance/version mismatch; partial execution; billing/entitlement divergence.

Validate before asserting.
