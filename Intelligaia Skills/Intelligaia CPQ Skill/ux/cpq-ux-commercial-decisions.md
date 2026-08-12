# CPQ UX — Configuration & Commercial Decisions

## 1. Configuration Goal
Help users construct a valid solution while understanding dependencies, required choices and commercial consequences.

## 2. Progressive Configuration
Reveal detail as required by:
selected product → dependency → user role → transaction type → lifecycle state.

Avoid presenting every option at once when only a subset is relevant.

## 3. Required Choices
Differentiate:
required → optional → recommended → incompatible → unavailable → inherited/defaulted.

## 4. Dependency Explanation
When a selection adds/removes/changes another item, explain the dependency in business terms.

## 5. Validation Timing
Validate early enough to prevent wasted downstream work, while avoiding disruptive errors for incomplete intermediate states.

## 6. Error Placement
Place configuration errors near the affected product/component and provide a corrective action.

## 7. Pricing Transparency
Users should understand the decision-relevant commercial structure:
list/reference price where relevant → adjustments/discount → net price → quantity → term → total.

Do not expose irrelevant calculation internals.

## 8. Price Change Explanation
When price changes after configuration, quantity, term, date, customer, partner or policy changes, make the cause understandable where possible.

## 9. Discount UX
Show:
requested discount → policy/threshold implication → approval consequence → resulting net commercial value.

Exact thresholds require evidence.

## 10. Guardrails
Prevent or clearly warn about:
expired price; incompatible currency; unsupported quantity; invalid date/term; unapproved discount; stale calculation.

## 11. Recalculation
When a change invalidates prior pricing/approval:
tell the user what changed → what must be recalculated → which approvals may be invalidated.

## 12. Commercial Comparison
Support comparison of meaningful deltas:
product/configuration; quantity; unit/net price; discount; term; dates; recurring/non-recurring value.

## 13. Totals
Totals should have explicit semantics. Avoid unlabeled “Total” when users may confuse annual, term, recurring, one-time, net or gross values.

## 14. Currency
Display currency consistently at line and summary level and explain mixed-currency restrictions if they exist.

## 15. Term
Make commercial term and billing/service timing distinguishable.

## 16. Lifecycle Delta
For amendments show:
current state → requested change → resulting state → effective date → commercial impact.

## 17. Renewal Comparison
For renewals show:
current term → proposed next term → carry-forward/migration → quantity change → price/uplift/discount → resulting value.

## 18. Cancellation Consequence
Where relevant, show:
scope → effective date → products/services affected → expected commercial/billing consequence, subject to authoritative calculation.

## 19. Expert Efficiency
Support efficient editing, bulk actions, search/filter and keyboard/workflow acceleration where evidence shows value, without hiding validation.

## Evaluation Questions
- Can users understand why a configuration is invalid?
- Can they identify what caused a price change?
- Are discount and approval consequences visible before submission?
- Can they compare commercial versions without manual reconstruction?
- For lifecycle changes, is the delta and effective state clear?

## Guardrail
Do not invent calculation logic, discount thresholds, price waterfall, proration, renewal uplift or platform UI behavior.
