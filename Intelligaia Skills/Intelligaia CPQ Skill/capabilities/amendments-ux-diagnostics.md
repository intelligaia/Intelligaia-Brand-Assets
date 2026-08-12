# Amendments — UX, Diagnostics & KPIs

## Seller / Customer Success Experience
A healthy amendment experience should show:
- current authoritative subscription;
- current products/quantities/configuration;
- what can be changed;
- current and proposed effective dates;
- requested delta and resulting state;
- incremental/decremental commercial effect;
- pending future changes;
- approval requirements;
- resulting term/renewal implications where relevant.

## Operations Experience
Operations should trace:
source subscription → amendment quote → change order → billing/entitlement changes → resulting subscription state.

## Diagnostic Questions
- Do sellers start from authoritative installed base?
- Can they distinguish delta from resulting quantity?
- Are eligible upgrades/downgrades clear?
- Are effective-date restrictions understandable?
- Are proration/credits manually calculated?
- Can pending future changes be seen?
- What happens when a second amendment is requested?
- Are prior discounts preserved correctly?
- Are billing and entitlements updated consistently?
- Can users reconcile expected vs actual resulting state?

## Common Failure Patterns
Treat as hypotheses:
- seller rebuilds customer state from old quote;
- wrong source subscription selected;
- quantity delta interpreted as resulting quantity;
- manual proration spreadsheet;
- removal leaves dependent product active;
- upgrade creates duplicate active products;
- future change hidden from later transactions;
- overlapping amendments conflict;
- cancellation credit duplicated/missed;
- amendment quote accepted but billing not updated;
- entitlement remains after removal;
- renewal starts from pre-amendment state.

## Amendment Diagnostic
**Source Subscription → Current State → Requested Change → Effective Date → Configuration Impact → Price/Proration → Discount/Approval → Quote → Change Order → Resulting State → Billing/Entitlement → Evidence**

## Delta Diagnostic
**Current Value → Requested Delta → Expected Result → Actual Result → Commercial Effect → Downstream Effect → Difference → Evidence**

## Effective-Date Diagnostic
**Request Date → Effective Date → Term/Billing Period → Pricing Convention → Scheduled Execution → Actual Activation → Difference → Evidence**

## Concurrent-Change Diagnostic
**Active State → Pending Change A → New Change B → Baseline Used → Conflict Handling → Resulting State → Evidence**

## KPI Examples
Amendment cycle time; amendment failure rate; manual pricing/proration touches; change-order fallout; billing adjustment errors; entitlement errors; concurrent-change conflicts; amendment-to-subscription reconciliation exceptions; cancellations requiring manual correction.

Do not invent targets.

## Opportunity Patterns
Installed-base-driven change UI, before/after comparison, delta vs resulting-state clarity, effective-date guidance, proration explanation, pending-change timeline, migration guidance, amendment reconciliation and proactive conflict detection. Proposed until validated.

Apply `../foundations/source-provenance.md`.
