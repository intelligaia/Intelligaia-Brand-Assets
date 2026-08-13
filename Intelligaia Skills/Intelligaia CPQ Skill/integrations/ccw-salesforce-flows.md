# CCW ↔ Salesforce — Flows

## Purpose
Describe business-level interaction patterns between Salesforce and CCW without inventing implementation mechanics.

## 1. Seller Context to Commerce
Potential business flow:
1. Seller identifies customer/opportunity in Salesforce.
2. Seller initiates or associates a commerce/quote transaction.
3. Required customer/deal context is transferred or selected.
4. CCW establishes its transaction/quote identity.
5. Cross-system correlation is preserved.

### Validation Needed
Confirm initiation point, systems involved, transferred fields, defaults, ownership, and whether an existing CCW quote can be associated back to Salesforce.

## 2. Customer / Account Context
Potential dimensions:
customer identity; sold-to/service-to context; geography; partner/end-customer relationship; account identifiers.

### Control
Do not use free-text customer data when a governed cross-system identity is required.

## 3. Opportunity / Deal Context
Potential dimensions:
opportunity/deal ID; seller/owner; channel; transaction type; currency; commercial dates; partner context.

Exact fields and ownership are **Unknown / Validation Needed**.

## 4. Quote Creation / Association
Salesforce context → request/launch/association → CCW quote created or selected → CCW identifier returned/stored → seller can resume the correct transaction.

### Risks
duplicate CCW quotes; quote associated to wrong opportunity; stale link; user launches a new quote instead of resuming existing work.

## 5. Product / Configuration Work
CCW commerce process may perform product selection/configuration according to the supported platform model.

Salesforce should not be assumed to duplicate the same configuration state unless evidence shows it does.

## 6. Commercial Processing
Pricing, discounting and approval may occur in one or more systems depending on architecture.

### Required Design Question
For each commercial concept identify:
**Authoritative System → Consumer → Sync Direction → Trigger → Version → Error Behavior**

## 7. Quote Status Back to Salesforce
Potential return context:
CCW quote identifier; quote state; total/commercial summary; validity; approval state; customer-facing status; order status.

Only fields supported by actual implementation should be synchronized.

## 8. Quote Revision
When CCW quote changes:
determine whether Salesforce receives an update → preserve quote/version identity → prevent an older asynchronous update from overwriting newer state.

## 9. Approval State
If approval is performed outside Salesforce:
Salesforce may need decision/status context for seller visibility.

If approval is performed in Salesforce or another engine, the reverse may apply.

Do not infer the approval authority location.

## 10. Proposal / Customer Acceptance
Determine which system owns proposal generation and acceptance evidence and which references Salesforce needs for visibility/forecast/process progression.

## 11. Quote-to-Order
Determine whether order conversion is initiated from CCW, Salesforce, another system, or an orchestrated process.

Preserve:
Salesforce opportunity/customer → CCW quote/version → order reference.

## 12. Order Status
If seller visibility requires order state in Salesforce, define a summarized business status rather than exposing raw downstream technical statuses without interpretation.

## 13. Amendment / Renewal Context
For lifecycle transactions determine whether Salesforce initiates opportunity/work context while CCW constructs the commercial transaction, or another architecture applies.

Preserve source subscription/installed-base references where required.

## 14. Partner Sales
Where partner motion applies, preserve partner and end-customer roles across Salesforce and CCW. Do not collapse them into a single account identity.

## 15. Reopen / Resume
Seller returns to Salesforce → selects existing correlated transaction → resumes correct CCW quote/version.

Avoid creating a duplicate transaction merely because the user re-enters the flow.

## 16. Failure Path
Context transfer/association fails → keep source transaction intact → expose actionable error → avoid partial duplicate quote → allow safe retry/resume.

## 17. Reconciliation
Compare:
**Salesforce Customer/Opportunity → CCW Quote/Version → Commercial Status → Order Reference**

Flag missing, duplicate, stale, or conflicting correlations.

## Flow Depth
L2/L3. Exact Salesforce objects/fields, CCW services, deep links, APIs, middleware, callbacks and statuses are L4 and require evidence.
