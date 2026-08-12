# CPQ Usability Taxonomy

## 1. Orientation
### Signals
User cannot identify customer, deal, quote, version, status, owner, transaction type, or next action.

### Diagnostic Questions
What context is missing? Is the state absent, ambiguous, stale, or distributed across screens/systems?

## 2. Navigation
### Signals
Backtracking, repeated searching, loss of transaction context, excessive switching, inability to resume.

### Distinguish
Navigation problem vs missing workflow orchestration vs authorization issue.

## 3. Duplicate Data Entry
### Signals
Same customer/deal/product/commercial/lifecycle information is entered in multiple systems or steps.

### Root Causes May Include
missing integration; unclear source-of-truth; poor defaulting; data quality; security boundary; process requirement.

Do not assume integration is always the correct solution.

## 4. Product Discovery
### Signals
Users cannot locate eligible products, understand product families, or distinguish similar offerings.

## 5. Configuration Complexity
### Signals
Invalid combinations discovered late; dependencies unclear; excessive irrelevant options; hidden required choices.

## 6. Pricing Comprehension
### Signals
User cannot explain a price, total, adjustment, currency, term value, recurring/one-time amount, or why pricing changed.

## 7. Discounting
### Signals
User does not know permitted action, approval consequence, requested vs approved value, or current commercial state.

## 8. Approval
### Signals
Unclear reason for approval; unclear owner/status; approval tied to wrong/unknown version; rejection lacks corrective path.

## 9. Quote Versioning
### Signals
Seller cannot identify current, approved, accepted, ordered, superseded, or draft version.

## 10. Large Quote Management
### Signals
Difficulty finding lines/errors/changes; repetitive edits; poor hierarchy; slow manual comparison.

## 11. Customer Output
### Signals
Proposal differs from governed quote; version unclear; document generation requires manual correction; customer-facing terminology is inconsistent.

## 12. Cross-System Continuity
### Signals
Context is lost when moving CRM → CPQ → approval → order → subscription/billing or partner systems.

## 13. Status Visibility
### Signals
Users manually ask other teams whether an order, approval, amendment, renewal, billing or fulfillment action completed.

## 14. Error Comprehension
### Signals
Generic failure; technical code only; no affected component; no safe next action; user recreates transaction.

## 15. Unknown Outcome
### Signals
Timeout/error causes user to submit again because target completion is unclear.

This has both UX and business-integrity implications.

## 16. Partial Success
### Signals
Some components succeed but the interface presents the whole transaction simply as failed/successful.

## 17. Performance / Waiting
### Signals
Users wait without progress meaning, repeat actions, abandon flow, or switch channels.

Measured performance requires evidence.

## 18. Lifecycle Baseline
### Signals
Amendment/renewal starts from old quote or manually reconstructed installed state.

## 19. Lifecycle Delta
### Signals
User cannot distinguish current state, requested change, resulting state, effective date, or commercial consequence.

## 20. Pending Lifecycle State
### Signals
A new amendment/renewal is started without visibility of pending future changes.

## 21. Partner Identity
### Signals
Partner, distributor, end customer or payer roles are conflated.

## 22. Partner Commercial Visibility
### Signals
Price meaning is ambiguous or confidential/internal values are exposed to an inappropriate role.

## 23. Learnability
### Signals
Users rely on memorized workarounds, external instructions, tribal knowledge, or support for routine tasks.

## 24. Expert Efficiency
### Signals
Experienced users repeat low-value interactions that could potentially be streamlined.

## 25. Accessibility
### Signals
Task depends on color alone, inaccessible labels, keyboard traps, unclear focus, inaccessible errors, or poor semantic structure.

## 26. Role Fit
### Signals
Seller, approver, operations, partner or billing users receive the same dense interface despite different goals.

## Diagnostic Rule
A signal is not automatically a root cause. Trace it through business rules, data, integration, platform behavior, process, authorization, training and interaction design before recommending a solution.

## Guardrail
Treat all customer-specific signals as hypotheses until supported by evidence.
