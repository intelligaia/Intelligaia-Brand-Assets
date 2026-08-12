# CPQ Data Model

## Core entities
Account/Customer → Contact → Opportunity → Quote → Quote Line → Product/SKU → Price/Price List → Approval → Contract/Agreement → Order → Order Line → Subscription/Asset → Invoice.

## Important relationships
- Opportunity may contain one or more commercial proposals/quotes.
- Quote lines reference sellable products and configuration context.
- Pricing derives from product, price list, attributes, quantity, term, customer/channel context, and applicable adjustments.
- Accepted quote data must remain reconcilable with contract/order/billing data.
- Subscription/assets provide context for amendments and renewals.

## Data-quality checks
Identity, ownership, effective dates, currency, quantities, term dates, price source, discount reason, approval state, product eligibility, and cross-system IDs.
