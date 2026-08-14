# Order & Lifecycle Acceptance Criteria

## 1. Order Readiness
Before order submission, verify all evidenced prerequisites are satisfied:
eligible source quote/version → configuration → commercial validity → required approval/acceptance → required customer/partner data.

## 2. Source Version Integrity
Order must correlate to the intended accepted/eligible commercial version.

## 3. Submission State
After submission, distinguish:
submitted/accepted for processing from business completion.

## 4. Duplicate Prevention
When a submission is repeated because of retry/timeout, verify duplicate business outcome is prevented where required by the architecture/business rule.

## 5. Partial Processing
If partial completion is possible, criteria must verify:
completed components → failed/pending components → overall business status → safe next action.

## 6. Order Completion
Verify successful completion yields the expected downstream reference/state and correlation to the source transaction.

## 7. Subscription Baseline
Amendment/renewal must start from the authoritative current lifecycle state.

## 8. Pending Changes
Where pending/future changes can exist, verify they are considered before another lifecycle transaction proceeds.

## 9. Amendment Delta
Test:
current state → requested change → effective date → resulting state → commercial consequence.

## 10. Amendment Validation
Invalid or conflicting change must not silently alter the authoritative lifecycle state.

## 11. Amendment Completion
Verify the resulting subscription/lifecycle state matches the approved/requested transaction after downstream completion.

## 12. Renewal Boundary
Test renewal against the actual current term and renewal boundary.

## 13. Renewal Carry-Forward
Where applicable, verify products/quantities/terms/relationships carry forward or change according to evidenced rules.

## 14. Renewal Pricing
Test the approved renewal pricing/uplift logic only when rules are known.

## 15. Renewal vs Pending Amendment
Verify the system/process handles pending amendments or future changes according to defined lifecycle policy.

## 16. Cancellation
Test:
scope → effective timing → resulting lifecycle state → downstream commercial/billing/service consequence.

## 17. Partner Lifecycle
Where applicable, verify partner eligibility/ownership changes do not incorrectly alter end-customer/subscription identity.

## 18. Effective Date
Validate the correct business meaning of effective date across CPQ, subscription, billing and service domains.

## 19. Billing
If acceptance includes billing outcome, verify against authoritative billing state rather than CPQ estimate alone.

## 20. Regression Set
Consider:
new order → timeout/retry → partial failure → amendment → overlapping/pending change → renewal → cancellation → partner ownership change.

## Guardrail
Lifecycle criteria must not assume a state model, proration formula, renewal rule, or cancellation policy that has not been evidenced.
