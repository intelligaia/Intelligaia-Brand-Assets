# Partner Sales — UX, Diagnostics & KPIs

## Partner Experience
A strong partner experience should make clear:
- whether the partner is authorized;
- which customers/products are eligible;
- which prices the partner may see;
- applicable program/channel benefits;
- special-pricing status;
- approval status;
- customer-facing quote state;
- order status;
- renewal/change responsibilities.

## Vendor Channel-Seller Experience
Vendor users should see partner, end customer, channel route, deal registration where applicable, commercial exception, approval status, order/subscription outcome and attribution without reconstructing the relationship across systems.

## Operations Experience
Operations should be able to distinguish:
**Who sold | Who bought | Who pays | Who receives service | Who owns the subscription | Who gets attribution**

according to the approved business model.

## Party-Role Visualization
Prefer a role map:
**Vendor → Distributor (if any) → Partner/Reseller → End Customer**
with sold-to, bill-to/payer, service-to and subscription relationships shown separately where relevant.

## Diagnostic Questions
- Are partners manually validated for authorization?
- Are end-customer identities duplicated or missing?
- Can partners see only permitted prices?
- Are special-pricing requests handled by email?
- Are margin and discount confused?
- Are quote/order party roles rekeyed?
- Does distributor involvement break lineage?
- Is installed base created under the correct customer?
- Who owns partner renewals?
- Can a partner change mid-term?
- How are channel conflicts resolved?
- Can finance reconcile partner economics to billing?

## Partner Journey Diagnostic
**Partner → Authorization → Customer → Deal Context → Product → Configuration → Channel Pricing → Discount/Special Pricing → Approval → Quote → Acceptance → Order Route → Subscription → Billing → Attribution → Evidence**

## Party Diagnostic
**Business Role → Source Record → Quote Role → Order Role → Subscription Role → Billing Role → Expected Owner → Actual Owner → Difference → Evidence**

## Pricing Diagnostic
**Reference Price → Channel Rule → Partner Buy Price → Incentive/Discount → Customer Sell Price → Approved Economics → Order/Billing Value → Evidence**

Only use layers supported by the actual model.

## Authorization Diagnostic
**Partner → Product → Customer → Geography → Program/Contract → Date → Transaction Type → Expected Eligibility → Actual Eligibility → Evidence**

## Common Failure Patterns
Treat as hypotheses:
- partner sees unauthorized products;
- partner eligibility stored in spreadsheet;
- end customer represented only as free text;
- wrong price layer displayed;
- special pricing copied to another deal;
- partner and customer discounts conflated;
- order uses wrong payer;
- distributor order loses end-customer identity;
- installed base assigned incorrectly;
- renewal sent to wrong partner;
- partner-of-record history overwritten.

## KPI Examples
Partner quote cycle time; authorization failures; special-pricing turnaround; quote revisions; partner-order fallout; party-role mapping errors; end-customer identity exceptions; pricing reconciliation exceptions; partner renewal routing errors; channel-conflict cases; manual touches.

Do not invent targets.

## Opportunity Patterns
Partner eligibility guidance, role-aware customer selection, channel-specific catalog, price-layer explanation, special-pricing workflow, party-role visualization, distributor lineage, partner renewal workspace and attribution reconciliation.

Apply `../foundations/source-provenance.md`.
