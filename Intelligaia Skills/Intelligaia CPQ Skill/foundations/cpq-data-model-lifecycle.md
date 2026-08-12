# CPQ Data Model — Customer Lifecycle Entities

## Purpose
Define the conceptual data needed for subscriptions, installed base, amendments, renewals, and entitlement.

# 1. Subscription
## Purpose
Represent an ongoing time-based commercial/service relationship.

## Conceptual Attributes
Identifier, customer/account, product/offer, quantity, status, start/effective date, end/renewal date, term, current price/charge context, agreement/order references.

## Relationships
Can contain or relate to multiple subscription items/charges depending on architecture.

## Key Questions
What is authoritative for active state? How are amendments represented? Is history preserved? What drives renewal eligibility?

# 2. Subscription Item
## Purpose
Represent a product/service/charge component within a subscription where the implementation uses this level.

## Conceptual Attributes
Product, quantity, price, dates, status, parent subscription, source order line.

# 3. Asset / Installed Product
## Purpose
Represent a product/service that a customer owns, has purchased, has installed, or is entitled to use.

## Conceptual Attributes
Identifier, customer, product, quantity, status, acquisition/order reference, dates, location/context where relevant.

## Important Distinction
Asset and Subscription are not universally interchangeable. Determine what each means in the target architecture.

# 4. Entitlement
## Purpose
Represent the customer's right to use/access/receive a product, service, feature, or support capability.

## Conceptual Attributes
Customer/party, product/service, scope, status, effective dates, source order/subscription/asset.

# 5. Installed Base
## Purpose
A business view of the customer's active/historical purchased relationship, potentially composed of subscriptions, assets, entitlements, and related commercial history.

Installed Base is often a view/domain concept rather than one universal object.

# 6. Amendment
## Purpose
Represent a transaction that changes active lifecycle state during term.

## Conceptual Attributes
Identifier, source subscription/asset, effective date, change type, delta quantity/product/term/price, status, source quote/order.

## Common Change Types
Add, expand, reduce, upgrade, downgrade, co-term, date/term change, cancellation where applicable.

## Modeling Principle
Preserve both prior state and resulting state; avoid losing the history needed to explain what changed.

# 7. Renewal
## Purpose
Represent continuation/restructuring of expiring lifecycle state.

## Conceptual Attributes
Renewal identifier/motion, source subscription/assets, renewal date/window, renewal status, source opportunity/quote, renewed term, pricing context.

## Relationships
Expiring state → renewal opportunity/quote where used → accepted renewal order → new/updated lifecycle state.

# 8. Cancellation / Termination
## Purpose
Represent the end/reduction of an active relationship.

## Conceptual Attributes
Source lifecycle record, request/effective date, reason, status, financial/entitlement implications, downstream transaction references.

# 9. Lifecycle History
A robust lifecycle model should preserve enough history to answer:
- What did the customer buy?
- What changed?
- When did it change?
- Why did it change?
- Which quote/order/agreement caused the change?
- What was the price/quantity before and after?
- What is active now?
- What is eligible to renew?

# 10. Effective Dating
Dates may include:
- transaction date;
- service/start date;
- amendment effective date;
- end date;
- renewal date;
- cancellation date;
- price/rule effective dates.

Do not collapse different date semantics into one generic date.

# 11. Lifecycle Traceability
Where architecture supports it, maintain correlation:

**Original Quote Line → Order Line → Subscription/Asset/Entitlement → Amendment/Renewal Quote Line → New Order Line → Updated Lifecycle State**

Exact object mappings require platform/customer evidence.
