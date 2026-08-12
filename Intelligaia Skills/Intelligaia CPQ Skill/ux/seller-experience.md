# CPQ Seller Experience

## Purpose
Define the seller-facing CPQ/Q2C experience across opportunity context, quote creation, configuration, pricing, discounting, approvals, customer acceptance, ordering, amendments and renewals.

This entry module focuses on seller goals and task continuity. Detailed business rules remain in capabilities and journeys.

## Seller Outcome
A seller should be able to answer:
**What customer/deal am I working on? → What can I sell/change? → Is it valid? → What will it cost? → What approval is needed? → What can I send/commit? → What is blocking progress? → What happened downstream?**

## Core Seller Journey
**Customer / Opportunity → Start or Resume Quote → Configure → Price → Discount → Validate → Approve → Generate/Present Quote → Revise/Accept → Order/Handoff → Track → Amend/Renew**

Not every implementation uses every system or step.

## Experience Principles
- Preserve customer/deal context.
- Resume instead of recreate.
- Keep quote/version state explicit.
- Guide configuration decisions.
- Explain material commercial changes.
- Show approval consequences before submission.
- Protect accepted/approved versions from accidental mutation.
- Make downstream status actionable.
- Start lifecycle changes from authoritative current state.
- Minimize duplicate entry and cross-system searching.

## Detail Modules
| Topic | Module |
|---|---|
| Seller journey and task flow | [`seller-journey.md`](seller-journey.md) |
| Quote workspace and commercial editing | [`seller-quote-workspace.md`](seller-quote-workspace.md) |
| Approval, customer and downstream handoffs | [`seller-handoffs.md`](seller-handoffs.md) |
| Amendment and renewal seller experience | [`seller-lifecycle.md`](seller-lifecycle.md) |
| Seller diagnostics and requirements | [`seller-requirements.md`](seller-requirements.md) |

## Related Modules
- [CPQ UX Principles](cpq-ux-principles.md)
- [New Business Journey](../journeys/new-business.md)
- [Modify Existing Deal](../journeys/modify-existing-deal.md)
- [Amendment Journey](../journeys/amendment.md)
- [Renewal Journey](../journeys/renewal.md)
- [Quoting](../capabilities/quoting.md)
- [Approvals](../capabilities/approvals.md)

## Evidence Guardrail
Do not claim seller pain points, time spent, click counts, adoption, preference, conversion impact, current platform behavior, or workflow frequency without source evidence. Label future-state improvements **Proposed**.
