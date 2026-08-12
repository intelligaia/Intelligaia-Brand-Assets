# Ordering — Rules, Data & Governance

## Order Identity
Conceptually capture order identifier, source quote/version, customer/parties, transaction type, currency, dates, state and downstream references.

## Order Header
Potential data:
sold-to/bill-to/ship-to/service parties, currency, order/effective dates, terms, addresses, channel, source transaction and lifecycle context.

## Order Line
Potential data:
product/offer, quantity, configuration/component relationships, commercial values, dates, fulfillment/billing attributes, source quote-line reference, lifecycle reference.

## Source Lineage
Preserve correlation:
**Opportunity/Deal → Quote → Quote Version → Quote Line → Order → Order Line/Component → Fulfillment/Billing/Subscription**

## Transformation
Explicitly document:
source field/entity → transformation/default/derivation → target field/entity → validation → owner/system.

Do not assume copy semantics.

## Cardinality
Possible patterns:
one quote → one order;
one quote → multiple orders;
one quote line → multiple order components;
multiple quote lines → consolidated execution component.

Actual behavior requires evidence.

## Order State
Conceptual states may include Draft/Created, Validating, Submitted, In Progress, Held, Completed, Failed, Cancelled. Do not use as exact platform values.

## Dependencies
Order components may have prerequisite relationships. Define dependency type, trigger, completion condition and failure behavior.

## Decomposition Rule
Potential dimensions:
product family, fulfillment type, geography, legal entity, supplier, billing treatment, provisioning domain.

## Effective Dates
Distinguish order date, requested start, service start, activation, fulfillment, billing start, cancellation/end dates.

## Commercial Fidelity
Identify which accepted quote values must be preserved or transformed:
unit/net price, charge type, discount context, quantity, term, period/ramp values, currency.

## Configuration Fidelity
Preserve downstream-required:
bundle/component hierarchy, attributes, quantities, technical/fulfillment selections and identifiers.

## Hold
Define hold reason/category, affected scope, owner, release condition, timestamp and audit.

## Error
Capture:
source system/process, order/component, error category/code/message, payload/reference where permitted, timestamp, retry/remediation state.

## Retry
Define eligibility, attempt controls, duplicate prevention, backoff/manual behavior and final failure handling in integration architecture.

## Downstream Reference
Store fulfillment/provisioning/billing/subscription identifiers required for correlation and lifecycle operations.

## Cancellation
Define eligibility based on execution state, downstream impact, approval/authorization, financial effect and compensation behavior.

## Reconciliation
Define comparison dimensions, tolerance where applicable, timing, owner and remediation workflow.

## Audit
Preserve material order creation/change/submission/hold/cancellation events with actor/system, timestamp, prior/new state and source version.

## Source of Truth
Clarify authoritative system for order state, fulfillment state, billing state, subscription state and customer-facing status.

## Governance
For order process identify:
**Readiness → Conversion → Validation → Submission → Orchestration → Exception → Completion → Cancellation/Change → Reconciliation**

## Risks
Potential hypotheses:
mapping loss, duplicate order, stale quote version, flattened bundle hierarchy, missing attributes, partial failure, stuck hold, duplicate retry, price mismatch, billing before activation, status divergence.

Validate before asserting.
