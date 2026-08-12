# Billing — Rules, Data & Governance

## Billing Account
Conceptually represent the party/account/profile against which charges are billed. Clarify relationship to sold-to, bill-to, payer and customer account.

## Charge
Conceptual data:
charge ID, source subscription/product/order line, type, quantity, rate/amount, currency, frequency, start/end dates, billing state and references.

## Charge Types
Common conceptual models:
recurring, one-time, usage/consumption.
Other models require evidence.

## Billing Frequency
Examples may include monthly, quarterly, annual or event-based, but actual allowed frequencies and semantics require evidence.

## Date Semantics
Distinguish:
order date, service start, subscription start, charge start, bill-cycle date, invoice date, service period, usage period, cancellation date and end date.

## Bill Cycle
Define how charges are assigned to billing periods/invoice runs. Do not invent cycle rules.

## Billing in Advance / Arrears
Define whether eligible charges bill before or after the service period and at what event/date.

## Proration
Define:
eligible charge types, period basis, day-count convention, inclusive/exclusive date treatment, rounding, minimum/maximum behavior and amendment/cancellation interaction.

## Usage
Define:
meter/event identity, source, customer/subscription correlation, unit of measure, period, aggregation, deduplication, rating rule and late-arriving usage behavior.

## Rating
Usage rating may depend on tier, volume, package allowance, overage, time, geography or other dimensions. Keep rating rules in pricing/billing policy according to architecture.

## Invoice
Conceptually capture:
invoice ID, billing account, currency, invoice date, service period(s), lines, subtotal, tax, adjustments, total, status and source references.

## Invoice Line
Preserve correlation to billing charge and source commercial/lifecycle entity where architecture permits.

## Credit / Adjustment
Define adjustment type, source invoice/charge, amount, currency, reason, effective/accounting date, authorization and resulting balance effect.

## Refund
A credit does not automatically mean a cash refund. Refund policy/process must be explicitly defined.

## Tax
Define tax ownership, taxable basis inputs, jurisdiction/customer/product attributes, exemption references and returned tax result. Do not invent tax logic.

## Payment Terms
Capture approved terms required by billing; distinguish payment terms from actual payment processing.

## Currency
Clarify transaction, billing and settlement currency and any permitted conversion point.

## Rounding
Define precision and rounding stage for charge, proration, usage rating, tax and invoice totals.

## Amendment Impact
Effective-dated lifecycle changes may create charge additions, removals, quantity/rate changes, credits or future schedule changes.

## Renewal Impact
Renewal establishes next-term charge state using the accepted renewal commercial basis.

## Cancellation Impact
Define stop date, final charge, credit/refund treatment, future schedule cancellation and entitlement/subscription relationship.

## Billing Schedule
Where used, represent expected future billable periods/amounts. Clarify whether schedule is authoritative, forecast, or generated dynamically.

## Source Lineage
Preserve:
**Quote/Version → Order/Line → Subscription/Product/Charge → Billing Charge → Invoice/Line → Credit/Adjustment**

## Financial Immutability
Finalized financial documents should not be silently overwritten. Corrections should follow governed financial adjustment patterns.

## Source of Truth
Identify authoritative systems for commercial price, subscription state, billable charge, invoice, tax, payment and accounting state.

## Reconciliation
Define dimensions, timing, tolerances, ownership and remediation for commercial-to-billing and billing-to-accounting comparisons.

## Audit
Preserve material charge/invoice/adjustment events, actor/system, timestamp, source reference, prior/new state and reason.

## Governance
For billing identify:
**Billing Context → Charge Creation → Scheduling → Rating/Proration → Invoice → Tax → Finalization → Adjustment → Reconciliation → Audit**

## Risks
Potential hypotheses:
wrong bill-to; incorrect start date; quote/billing price mismatch; duplicate charge; missed charge; incorrect proration; duplicate usage; late usage; tax failure; credit duplicated/missed; cancelled subscription still billed; renewal overlap/gap; manual invoice correction; source lineage missing.

Validate before asserting.
