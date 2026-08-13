# Discounting — Rules, Data & Governance

## Purpose
Define discount rule concepts, policy dimensions, calculation concerns, approval interaction, and audit requirements.

# 1. Discount Basis
A discount must identify the value against which it is calculated.

Potential bases:
- list/reference price;
- calculated unit price;
- extended price;
- another approved commercial basis.

Do not infer the basis.

# 2. Discount Type
Common conceptual types:
- percentage;
- amount;
- target/net price;
- automatic/policy;
- discretionary;
- promotional;
- contractual/customer-specific.

Implementation taxonomy varies.

# 3. Discount Level
Discount may apply at:
- line;
- group/bundle;
- quote;
- another approved aggregation level.

# 4. Discount Eligibility
Potential conditions:
product/charge, customer, channel, seller role, geography, transaction type, quantity, term, date, contract, lifecycle motion.

# 5. Non-Discountable
Some products, fees, services, or charge types may prohibit or limit discounting.

Restriction must be explicit and explainable.

# 6. Discount Authority
Define which persona/role can request or approve discount ranges.

Do not conflate permission to enter a discount with authority to approve it.

# 7. Threshold
A threshold is a condition at which additional governance applies.

Potential measures:
discount %, discount amount, net price, cumulative discount, deal value, margin/economic metric where evidenced.

# 8. Floor / Minimum Price
A governed minimum commercial price.

Define:
- calculation basis;
- applicable product/context;
- effective dates;
- exception behavior;
- approval authority.

Do not infer floor from cost.

# 9. Maximum Discount
A maximum permitted discount can be absolute or role/context-specific.

Clarify whether it is a hard block or approval threshold.

# 10. Stacking
Define:
- which discounts can coexist;
- calculation order;
- additive vs sequential behavior;
- priority;
- exclusions;
- cumulative limits.

# 11. Cumulative Discount
Where multiple adjustments exist, define how the effective/cumulative discount is measured.

Do not assume simple addition.

# 12. Price Waterfall Interaction
Discounting should identify its position relative to:
reference/base/list price → automatic pricing adjustments → standard discounts → discretionary discounts → resulting/net price.

Exact sequence is customer-specific.

# 13. Reason Code
A controlled classification for why a discount/exception is requested.

# 14. Justification
Free-text or structured context explaining the business rationale.

Reason and justification are related but not identical.

# 15. Requested vs Approved Discount
Preserve both when approval changes the request.

Conceptual values:
requested discount, approved discount, calculated price before discount, resulting price, approver/decision.

# 16. Approval Trigger
Discount rules may trigger:
- no approval;
- single approval;
- sequential approval;
- parallel approval;
- escalation.

Routing belongs in `approvals.md`.

# 17. Reapproval Trigger
Potential triggers:
discount increase, quantity/configuration change, term change, price recalculation, customer change, quote total change, expiration/time.

Only approved policy determines actual triggers.

# 18. Override
An override should capture:
original value, override value, actor, reason, timestamp, authority/approval, version.

# 19. Effective Dating
Discount programs/policies may have start/end dates. Validate treatment of in-flight quotes and renewals.

# 20. Currency
Amount-based thresholds/discounts require explicit currency semantics.

# 21. Rounding
Define when discount calculations round and at what precision.

# 22. Audit
For material discount events preserve:
**Quote/Line → Price Before → Discount Type → Requested Value → Approved Value → Resulting Price → Reason → Actor → Approval → Timestamp → Version**

# 23. Historical Integrity
A later repricing or revision should not erase the discount context of the previously approved/accepted quote version.

# 24. Downstream Data
Determine which values must move downstream:
net price, discount amount/percentage, reason, approval reference, pricing source, or other required commercial context.

# 25. Governance
For discount policy identify:
**Policy Owner → Eligible Scope → Authority → Threshold → Floor → Stacking → Approval → Effective Date → Audit → Change Process**

# 26. Risks
Potential hypotheses:
- sellers use overrides to bypass policy;
- threshold logic differs by system;
- stacking produces unexpected effective discount;
- discount reason is low quality;
- approvals use stale price;
- approved discount changes after repricing;
- quote/order discount mismatch.

Validate before asserting.
