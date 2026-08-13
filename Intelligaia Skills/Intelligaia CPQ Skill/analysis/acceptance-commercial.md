# Commercial, Configuration & Quote Acceptance Criteria

## 1. Product Eligibility
Given valid customer/deal context, when products are evaluated, then only products permitted by the authoritative eligibility rules are available/accepted.

Exact rules require evidence.

## 2. Configuration
Test:
required selections → dependencies → incompatibilities → quantity/cardinality if applicable → validation timing → resulting valid state.

## 3. Invalid Configuration
When a configuration violates a known rule:
the transaction must not proceed through the governed checkpoint and the affected condition must be identifiable/actionable.

## 4. Pricing Context
Verify the calculation uses the correct supported:
customer/context → product/configuration → quantity → currency → term/date → pricing inputs.

Do not invent formula or source.

## 5. Recalculation
When a price-driving input changes, verify the governed commercial result is recalculated/invalidated according to the actual rule.

## 6. Commercial Meaning
Test that users/downstream systems can distinguish relevant:
unit vs extended → gross/list vs net → recurring vs one-time → term value → currency.

Use project terminology.

## 7. Discount
Cover:
requested discount/adjustment → authorization → validation → approval trigger → approved value → resulting quote state.

## 8. Discount Boundary
Test threshold edges only when the approved threshold is known.

## 9. Approval Trigger
Given the actual approval-driving condition, when the quote is submitted, then the correct approval requirement is produced.

## 10. Approval Version
Verify the approval decision applies to the exact quote/commercial version evaluated.

## 11. Post-Approval Change
When an approval-relevant value changes after approval, verify approval remains valid or is invalidated according to the evidenced policy.

## 12. Rejection
Verify rejected work has:
decision status → rationale if required → permitted corrective path → preserved version/audit context.

## 13. Quote Version
Test:
draft → revision → current version → superseded version → approved version → accepted version.

Exact state model is implementation-specific.

## 14. Quote Validity
Where quote/price expiration exists, verify expired commercial state cannot be used contrary to policy.

## 15. Customer Artifact
Verify generated/shared proposal corresponds to the intended governed quote version and commercial values.

## 16. Acceptance
When customer acceptance is recorded, verify it references the intended quote/version and required acceptance evidence.

## 17. Partner Commercial Context
Where channel selling applies, test:
partner/customer/distributor identity → authorized commercial visibility → special/deal pricing applicability → confidentiality.

## 18. Regression Set
At minimum consider:
simple quote → bundle → pricing change → discount → approval → revision → customer artifact → partner quote.

## Guardrail
Never create specific pricing, discount, approval, validity, or partner rules merely to populate criteria.
