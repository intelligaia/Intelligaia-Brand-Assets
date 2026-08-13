# Quoting Capability

## Purpose
Define the vendor-neutral CPQ capability for assembling configured and priced products into a governed commercial quote, managing revisions, producing customer-facing output, and progressing accepted intent toward agreement and order.

## Boundary
**Configuration = valid solution. Pricing/Discounting = commercial values. Quoting = proposal transaction and version. Approvals = governed decisions. Ordering = execution.**

## Scope
Quote creation; customer/opportunity context; header/lines; alternatives; lifecycle; validation; versioning; validity; commercial terms; proposal generation; negotiation; acceptance; approval interaction; quote-to-order readiness; audit and lineage.

## Core Flow
**Initiate → Establish Context → Configure → Price/Discount → Validate → Approve → Generate Proposal → Negotiate/Revise → Accept → Final Validate → Agreement/Order Handoff**

## Key Questions
- What creates the quote and which customer/opportunity context is inherited?
- Can multiple scenarios exist, and which quote/version is authoritative?
- What makes a quote complete and presentable?
- What creates a revision?
- Which changes invalidate approval?
- How is validity/expiration governed?
- How are terms and customer acceptance captured?
- What must pass before order conversion?

## Detail Modules
| Topic | Module |
|---|---|
| End-to-end quote flows | `quoting-flows.md` |
| Data, lifecycle, versioning and governance | `quoting-rules-data.md` |
| UX, diagnostics and KPIs | `quoting-ux-diagnostics.md` |
| Stories and acceptance patterns | `quoting-requirements.md` |

## Cross-Links
`configuration.md`, `pricing.md`, `discounting.md`, `approvals.md`, `ordering.md`, `../foundations/cpq-data-model-commercial.md`

## Evidence Rule
Do not invent quote statuses, validity periods, primary-quote rules, templates, acceptance mechanisms, required fields, conversion rules, or platform behavior.
