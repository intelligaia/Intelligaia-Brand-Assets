# CPQ Lifecycle Controls, Decisions, Rework and KPIs

## Purpose
Centralize lifecycle-wide controls so they are not duplicated across every stage file.

# Cross-Lifecycle Decisions

## Product Eligibility
Can affect configuration, pricing, quote validation, order validation and fulfillment.

## Commercial Change
A change to product, quantity, price, discount, term or clause may require recalculation, revalidation, reapproval and document regeneration.

## Authoritative Quote
When multiple scenarios exist, the process needs a clear method for identifying the quote that drives opportunity/order/downstream state.

## Effective Dates
Can affect eligibility, pricing, contract, order, subscription, amendment, renewal and billing.

## Customer Identity
Account/contact inconsistencies can propagate across opportunity, quote, order, billing and renewal.

## Subscription / Asset State
Accurate active state is required for amendment and renewal.

# Core Rework Loops

## Configuration
Invalid configuration → revise product/options/attributes → revalidate.

## Pricing
Pricing/discount exception → revise or justify → recalculate.

## Approval
Reject / need more information → seller revises/responds → resubmit/review.

## Customer Negotiation
Customer requests change → reopen quote → recalculate → revalidate → reapprove if material → regenerate document.

## Order Validation
Missing/invalid downstream data → correct source → resubmit.

## Integration Reconciliation
Downstream failure → identify inconsistency → correct → retry/reconcile without creating duplicate transactions.

A process model that omits known material rework is incomplete.

# UX Controls

Across lifecycle stages, favor:
- recognition over recall;
- early validation;
- explainable rules/pricing;
- clear status and ownership;
- preserved context during revision;
- actionable errors;
- minimal duplicate entry;
- controlled self-service;
- visibility into downstream state.

# KPI Framework

| Stage | Example measures |
|---|---|
| Opportunity | stage aging, opportunity quality, forecast integrity |
| Configure | configuration time, errors, self-service, Deal Desk touch |
| Price | pricing time, manual touch, exception rate |
| Quote | quote cycle, revisions, error/rework, conversion |
| Approve | turnaround, aged approvals, rejection/reapproval |
| Contract | cycle time, redlines, legal touch |
| Order | order touch, auto-book, rejection, quote/order discrepancy |
| Provision | activation time, provisioning errors |
| Billing | accuracy, reconciliation, time to bill |
| Amendment | cycle time, manual touch, downstream errors |
| Renewal | preparation time, renewal rate, expansion, manual touch |

Do not invent targets or benchmark values without evidence.

# Actor Responsibilities

Typical actors:
Seller/AE; Partner Seller; Product/Solution Specialist; Deal Desk; Pricing/Finance; Sales Ops/RevOps; Product/Catalog Ops; Legal; Approver/Management; Customer; Order Ops; Billing Ops; Fulfillment/Provisioning; Customer Success/Renewal Seller.

Actual ownership is organization-specific and must be validated.
