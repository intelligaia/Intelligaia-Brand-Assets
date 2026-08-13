# Approvals — UX, Diagnostics & KPIs

## Seller Experience
A healthy approval experience should show:
- why approval is required;
- what value/condition triggered it;
- current approver/stage where appropriate;
- status;
- requested vs approved value;
- rejection/change reason;
- whether quote changes will trigger reapproval.

## Approver Experience
Approvers should receive concise decision-ready context:
**Customer/Deal → Exception → Commercial Baseline → Requested Outcome → Policy Trigger → Reason → Relevant History → Decision**

Avoid forcing approvers to reconstruct price/discount calculations across systems.

## Diagnostic Questions
- Which approvals create the most delay?
- Are standard deals routed unnecessarily?
- Can sellers predict approval before submission?
- Do approvers have enough context?
- Are approvals handled in email/chat outside the system?
- Are delegates/escalations clear?
- Do quote changes silently reuse approval?
- Are approval comments/reasons useful?
- Can operations reconstruct the approved version?

## Common Failure Patterns
Treat as hypotheses:
- excessive approval layers;
- wrong approver routing;
- approval based on stale quote;
- missing commercial context;
- email/offline approval;
- unclear delegation;
- no escalation;
- repeated approval after minor changes;
- material changes not reapproved;
- approved discount differs from quote;
- abandoned approval remains pending;
- inability to reconstruct decision history.

## Approval Diagnostic
**Trigger → Rule → Route → Approver → Context → Wait Time → Decision → Quote Change → Reapproval → Downstream Impact → Evidence**

## Routing Diagnostic
**Input Conditions → Expected Authority → Actual Route → Exception/Manual Redirect → Cause → Impact → Evidence**

## Reapproval Diagnostic
**Approved Version → Changed Field/Value → Expected Reapproval → Actual Behavior → Risk → Evidence**

## KPI Examples
Approval turnaround; approvals per quote; approval levels per deal; reapproval rate; rejection/change-request rate; escalations; offline/manual approvals; time waiting vs active review; routing errors.

Do not invent targets.

## Opportunity Patterns
Approval prediction, decision-ready summary, mobile/simple decision interaction, delegation visibility, SLA reminders, revision comparison, reapproval explanation, approval audit timeline. Proposed until validated.

Apply `../foundations/source-provenance.md`.
