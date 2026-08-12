# Quote-to-Cash Diagnostics

## Purpose
Provide assessment questions and reusable failure-pattern categories for end-to-end Q2C analysis.

# Commercial Process
- Where does Q2C begin and end for this organization?
- Which teams own each stage?
- Which steps require manual handoff?
- Where does the process wait?
- Where is data re-entered?
- Where are exceptions handled outside the primary workflow?

# Quote / Approval
- How is the authoritative quote determined?
- What makes a quote ready for approval?
- What triggers approval?
- What happens after rejection, customer change, or contract negotiation?
- Are quote and contract approvals distinct?

# Contract
- What determines standard vs non-standard contracting?
- When does Legal enter?
- How are redlines tracked?
- Which contract changes require quote/pricing revision?
- How is accepted contract context passed downstream?

# Order
- How is an order created from the accepted quote?
- Which fields are mandatory before submission?
- What causes order rejection/manual review?
- How is quote/order fidelity checked?
- Who owns order reconciliation?

# Fulfillment / Provisioning
- Which order attributes drive fulfillment?
- How are entitlements established?
- Can users see provisioning status?
- How are failures returned upstream?

# Billing
- What commercial/order data is required by billing?
- Which system owns billing account/contact?
- How are price, dates, term, and payment conditions synchronized?
- What causes invoice/billing correction?
- Who owns reconciliation?

# Subscription / Asset
- Where is active customer purchase state mastered?
- Is the state complete enough for amendment and renewal?
- Are product, quantity, price, term, dates, and entitlement traceable?
- How quickly are order/billing changes reflected?

# Amendment
- How is the active relationship selected?
- How are effective date and proration handled?
- How are add-ons, upgrades, reductions, co-term, and cancellation represented?
- What requires approval or agreement change?

# Renewal
- How is the renewal population identified?
- Are renewal opportunity/quote records created automatically or manually?
- Is historical purchase/pricing visible?
- How are uplift, expansion, upgrade, partial renewal, and co-term handled?
- What happens after non-renewal?

# Data and Integration
- What is the system of record for customer, product, price, quote, contract, order, subscription, and billing?
- Which IDs link systems?
- Are integrations synchronous, asynchronous, batch, or manual?
- How are retries, duplicates, partial updates, and reconciliation handled?
- Is user-visible status available?

# Operating Model
- Who owns catalog?
- Who owns pricing rules?
- Who owns approval policy?
- Who owns quote templates?
- Who owns integrations and reconciliation?
- Which standard transactions still require expert intervention?
- Where is tribal knowledge concentrated?

# UX / Adoption
- How many systems must each persona use?
- Is lifecycle status understandable?
- Are errors actionable?
- Are downstream failures visible to the originating user?
- Which activities cause the highest support/training burden?

# Reusable Failure-Pattern Categories
Use these only as diagnostic categories until customer evidence confirms them:
- fragmented tools;
- duplicate entry;
- inconsistent account/contact;
- catalog/SKU complexity;
- manual pricing/discounting;
- Deal Desk dependency;
- opaque approval status;
- quote/order discrepancy;
- contract-driven rework;
- missing downstream-required data;
- failed synchronization;
- manual reconciliation;
- incomplete subscription/asset history;
- duplicate/manual renewal activity;
- weak historical pricing visibility.

# Evidence Rule
For each observed issue record:
**Evidence → Source → Current/Historical → Pain Point → Root Cause → Downstream Impact → Required Capability → KPI**

Do not convert a diagnostic pattern into a customer finding without evidence.
