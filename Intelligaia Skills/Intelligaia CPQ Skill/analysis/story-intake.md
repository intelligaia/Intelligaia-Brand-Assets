# Story Intake & Normalization

## 1. Preserve Original Story
Retain the source wording before rewriting it.

Record:
source → author/role if known → date/version → platform/journey context → evidence status.

## 2. Identify Actor
Determine the actual business actor:
seller; partner; approver; deal desk; operations; billing/finance; customer success; system/integration; other evidenced role.

Avoid generic “user” when the role affects permissions or goals.

## 3. Identify Goal
Ask what business outcome the actor needs—not merely what screen/button they requested.

## 4. Identify Value
Capture supported value:
complete quote; reduce re-entry; understand price; obtain approval; submit order; amend subscription; renew; recover exception.

Do not invent ROI.

## 5. Identify Transaction Type
Classify:
new business → revision → order → amendment → renewal → cancellation/non-renewal → partner/channel → operational correction.

## 6. Identify Journey Stage
Map the story to the relevant journey and capability:
customer/deal → catalog → configure → price → discount → quote → approval → acceptance → order → subscription → billing/lifecycle.

## 7. Normalize Story
A normalized form may be:

**As a [role], I want [capability/outcome], so that [supported business value].**

Do not encode a UI solution unless the requirement is specifically about the interaction.

## 8. Separate Requirement from Solution
Source: “Add a button to copy quote.”

Potential underlying need:
reuse an existing commercial configuration under governed rules.

The button is a proposed implementation unless explicitly mandated.

## 9. Scope
Identify:
in scope → out of scope → adjacent process → assumptions → unknowns.

## 10. Preconditions
What must already be true?
Examples:
customer exists; opportunity eligible; quote current; product available; subscription active; user authorized.

Only assert customer-specific conditions when evidenced.

## 11. Trigger
What initiates the story?
user action → lifecycle date → system event → approval decision → customer request → error/recovery.

## 12. Desired End State
Define the observable business result, not “screen saved.”

## 13. Story Splitting Signals
Split when one story contains:
multiple actors; independent business outcomes; multiple lifecycle stages; unrelated rules; separate failure/recovery flows; independently releasable capabilities.

## 14. Avoid Over-Splitting
Keep related steps together when splitting would lose the business transaction or integrity requirement.

## 15. Evidence Labels
Use:
Validated → Historical → Hypothesis → Proposed → Unknown / Validation Needed.

## Intake Output
**Original → Normalized Story → Actor → Goal → Value → Transaction Type → Journey/Capability → Trigger → Preconditions → End State → Scope → Unknowns → Evidence**

## Guardrail
Normalization should clarify the source requirement, not silently replace it with a preferred design.
