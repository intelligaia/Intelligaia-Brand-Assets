# Salesforce ↔ Zuora — Flows

## 1. Customer / Account Synchronization
Salesforce customer context → identity/match decision → Zuora customer/billing context → correlation returned/persisted.

Define whether creation and updates are one-way, bidirectional, event-driven, batch, or another architecture.

## 2. Customer Update
Authoritative customer attribute changes → validate ownership → transfer only target-required values → apply conflict rule → audit.

Do not implement uncontrolled bidirectional synchronization.

## 3. Payer / Billing Relationship
End customer may differ from payer/bill-to. Preserve the approved relationship rather than assuming Salesforce Account equals one Zuora billing identity.

## 4. Opportunity to Lifecycle Transaction
Salesforce opportunity/deal reaches approved commercial/lifecycle condition → required context is assembled → downstream transaction is initiated or correlated → resulting Zuora lifecycle reference is persisted.

Exact trigger requires evidence.

## 5. New Subscription
Approved commercial/order context → customer/account resolution → product/charge transformation → subscription/term/date establishment → billing readiness → Salesforce receives required lifecycle summary/reference.

## 6. Subscription Visibility in Salesforce
Where seller/customer-success visibility is required, expose business-relevant subscription state such as products, quantities, dates, renewal context, or status at an agreed level.

Do not replicate the full billing data model without a business purpose.

## 7. Amendment Initiation
Salesforce user identifies customer change → authoritative Zuora subscription state is retrieved/referenced → governed amendment is constructed → effective date/commercial treatment is approved → lifecycle change executes → Salesforce receives outcome.

## 8. Amendment Feedback
Return only business-relevant state:
transaction reference → affected subscription → effective date → resulting lifecycle status → commercial summary where needed.

## 9. Renewal Identification
Zuora subscription/term data and/or Salesforce process identifies a renewal candidate according to approved ownership → correlate/create renewal work → preserve source subscription/term.

Do not assume which system creates the renewal opportunity.

## 10. Renewal Opportunity
If Salesforce manages renewal pipeline:
source subscription/term → approved renewal trigger → opportunity/work record → forecast/commercial context → renewal quote/process → accepted renewal → Zuora next-term state.

Exact record type, amount formula and automation are **Unknown / Validation Needed**.

## 11. Renewal Baseline
Renewal must derive from authoritative subscription state and applicable pending changes, even when Salesforce hosts the customer-facing renewal workflow.

## 12. Renewal Feedback
Accepted renewal → Zuora next-term subscription/charges → Salesforce receives relevant renewal completion/status/reference → predecessor/successor relationship remains traceable.

## 13. Cancellation / Non-Renewal
Salesforce captures customer decision where appropriate → classify cancellation vs end-of-term non-renewal → execute approved lifecycle action in authoritative system → return resulting state.

## 14. Product / Installed-Base Visibility
Salesforce may require a summarized installed-base view for seller/CS workflows.

Define:
authoritative source → freshness → granularity → pending-change representation → user action allowed.

## 15. Billing Visibility
Potential seller/CS needs may include billing account status, invoice/payment summary, balance, or billing exceptions.

Only expose data justified by process, authorization, privacy and source ownership.

## 16. Partner Scenario
Preserve partner, end-customer, payer and subscription relationships across Salesforce and Zuora according to the business model.

## 17. Future-Dated Change
If Salesforce displays subscription state, pending future changes must not be mistaken for current effective state.

## 18. Concurrency
Potential conflict:
Salesforce initiates lifecycle change while another amendment/renewal/cancellation is pending in Zuora.

Validate current authoritative state/version before executing.

## 19. Retry / Resume
Before replaying a failed Salesforce–Zuora operation:
check current source state → target existence → transaction/version → idempotency/correlation → safely resume or rebuild.

## 20. Reconciliation
Compare:
**Salesforce Customer/Opportunity/Lifecycle Context → Zuora Account/Subscription/Billing State → Salesforce Returned Summary**

Flag identity, lifecycle, commercial, date, status, or lineage mismatches.

## Flow Depth
L2/L3. Exact objects, APIs, managed-package behavior, platform events, middleware routes, field mappings and automation are L4 and require evidence.
