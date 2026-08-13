# Discounting Capability

## Purpose
Define the vendor-neutral CPQ capability used to apply, govern, explain, and audit reductions or other discretionary commercial adjustments to calculated pricing.

This is the capability entry module. Detailed flows, rules/data, UX/diagnostics, and requirement patterns are delegated to linked modules.

## Capability Outcome
Authorized users can apply valid discounts consistently, understand their commercial effect, obtain required approval for exceptions, and preserve a traceable discount history through quote and downstream execution.

## Capability Boundary
**Pricing = calculate the applicable commercial price.**  
**Discounting = modify that price according to approved policy or exception.**  
**Approvals = authorize governed exceptions/transactions.**

Automatic pricing adjustments may occur within Pricing. This capability focuses on discount policy, discretionary/standard discounts, stacking, limits, exception handling, and governance.

## Scope
- standard/automatic discounts where governed as discount policy;
- discretionary discounts;
- line-level and quote-level discounting;
- percentage and amount discounts;
- discount reason/justification;
- discount limits and thresholds;
- floor/minimum-price interaction;
- stacking/precedence;
- non-discountable products/charges;
- approval triggers;
- overrides;
- reapproval after commercial change;
- discount history and audit;
- downstream fidelity.

## Core Flow
**Establish Discount Context → Determine Eligibility → Apply Standard/Requested Discount → Evaluate Limits/Stacking → Recalculate Net Price → Validate → Trigger Approval if Required → Finalize → Preserve Audit/Downstream State**

Detailed flow: `discounting-flows.md`.

## Key Actors
Seller/AE, Partner Seller, Deal Desk, Pricing/Finance, Approver/Management, RevOps, CPQ Administrator.

## Key Questions
1. Which products/charges are discountable?
2. Who can apply which discount?
3. Is discount line-level, group-level, or quote-level?
4. What is the discount basis?
5. Which discounts stack and in what order?
6. What limits/floors apply?
7. Which conditions trigger approval?
8. What justification/reason is required?
9. What changes trigger reapproval?
10. How is the approved discount preserved into order/billing?

## Detail Modules
| Topic | Module |
|---|---|
| Standard, discretionary, stacking and reapproval flows | `discounting-flows.md` |
| Rules, thresholds, waterfall interaction, data and governance | `discounting-rules-data.md` |
| UX, diagnostics, failure patterns and KPIs | `discounting-ux-diagnostics.md` |
| Reusable stories and acceptance patterns | `discounting-requirements.md` |

## Cross-Links
- `pricing.md`
- `approvals.md`
- `quoting.md`
- `../foundations/terminology-pricing.md`
- `../foundations/personas-governance.md`

## Evidence Rule
Do not invent discount percentages, thresholds, approval matrices, floor-price logic, stacking order, margin rules, partner authority, or customer-specific policies. These require evidence.
