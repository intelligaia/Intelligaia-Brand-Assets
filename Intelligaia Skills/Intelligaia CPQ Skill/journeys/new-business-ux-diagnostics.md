# New Business — UX, Diagnostics & KPIs

## Purpose
Diagnose the complete seller-to-cash experience rather than optimizing isolated CPQ screens.

## Seller Experience
A healthy journey should minimize context switching and make clear:
- where the deal is in the journey;
- what information is missing;
- current configuration/commercial state;
- why validation failed;
- whether approval is required;
- which quote/version is current;
- customer proposal status;
- order-conversion readiness;
- downstream exceptions requiring seller action.

## Operations Experience
Deal Desk, Order Operations and Billing Operations should be able to trace the same transaction without reconstructing it manually across disconnected identifiers.

## Customer Experience
The customer should receive a coherent proposal whose products, quantities, prices, dates and terms remain consistent through acceptance and downstream execution.

## Diagnostic Questions
- How many systems does a seller touch?
- What data is re-entered?
- Where are spreadsheets/manual documents used?
- Where does the seller wait?
- Which steps create the most revisions?
- Which errors are discovered only after acceptance?
- Can every downstream order/invoice be traced to the accepted quote?
- Are customers asked to clarify information already captured upstream?
- Which teams manually reconcile the transaction?
- Where does status become ambiguous?

## Journey Diagnostic
**Customer Need → Opportunity → Quote → Configure → Price/Discount → Validate → Approve → Proposal → Negotiate → Accept → Order → Fulfill → Subscribe → Bill → Exception/Rework → Evidence**

## Handoff Diagnostic
For each handoff:
**Source System/Record → Trigger → Payload/Data → Transformation → Target → Acknowledgement → Error Handling → Reconciliation → Owner → Evidence**

## Wait-State Diagnostic
**Step → Entry Time → Active Work → Waiting Time → Dependency → Owner → Exit Condition → Evidence**

## Rework Diagnostic
**Original State → Failure/Change → Detection Point → Returned Step → Manual Work → Reapproval/Reprocessing → Impact → Evidence**

## Common Failure Patterns
Treat as hypotheses:
- seller swivel-chair across CRM/CPQ/ERP/billing;
- product selection requires tribal knowledge;
- pricing validated offline;
- discount approvals through email/chat;
- proposal manually edited;
- multiple quote versions sent to customer;
- order team rekeys quote;
- downstream fields discovered after signature;
- fulfillment cannot interpret configuration;
- subscription differs from order;
- invoice differs from quote;
- no single end-to-end transaction trace.

## KPI Framework
Potential measures:
quote cycle time; configuration error rate; pricing/discount exceptions; approval turnaround; revisions per quote; proposal manual-edit rate; accepted-to-order success; order fallout; activation time; billing setup errors; end-to-end manual touches; reconciliation exceptions.

Do not invent targets or claim causality without evidence.

## Opportunity Patterns
Evidence may support:
guided selling, reusable customer context, proactive validation, price explanation, approval prediction, quote completeness, version comparison, integrated proposal/acceptance, quote-to-order readiness, cross-system status timeline, automated reconciliation.

Keep opportunities Proposed until validated.

Apply `../foundations/source-provenance.md`.
