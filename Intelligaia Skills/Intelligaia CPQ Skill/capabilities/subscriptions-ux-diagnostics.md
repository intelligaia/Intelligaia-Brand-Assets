# Subscriptions — UX, Diagnostics & KPIs

## Purpose
Define installed-base and subscription lifecycle experience, diagnostics, reconciliation patterns, and measures.

## Seller / Customer Success Experience
A healthy experience should make it possible to understand:
- what the customer currently has;
- quantities and relevant configuration;
- current term/start/end;
- upcoming renewal;
- which products can be changed;
- current vs future/ramped state;
- relevant commercial context where permitted;
- amendment/renewal eligibility.

## Operations Experience
Operations should be able to trace:
order → subscription → products/charges → billing → entitlement → lifecycle changes.

## Diagnostic Questions
- Which system is trusted for installed base?
- Can sellers see current active products without manual reconciliation?
- Are subscription dates consistent across systems?
- Are configuration attributes preserved?
- Can users identify which products are amendable/renewable?
- Are ramps/phases understandable?
- Are billing and entitlement states aligned?
- How quickly do order changes appear in subscription state?
- Are duplicate/stale subscriptions common?
- Can prior state be reconstructed?

## Common Failure Patterns
Treat as hypotheses:
- CRM and billing show different installed base;
- seller uses prior quote instead of current subscription;
- subscription starts before/after actual activation incorrectly;
- configuration details lost after order;
- duplicate subscription/product records;
- quantity differs from billing;
- renewal uses stale commercial state;
- amendment cannot identify source product;
- co-term dates inconsistent;
- ramp periods overlap/gap;
- cancelled product remains entitled/billed;
- lifecycle synchronization fails silently.

## Installed-Base Diagnostic
**Customer → Source Systems → Subscription → Products/Quantities → Configuration → Dates/Term → Billing → Entitlements → CPQ View → Difference → Evidence**

## Lifecycle Diagnostic
**Source Subscription → Event → Effective Date → Prior State → Resulting State → Billing Effect → Entitlement Effect → CPQ/CRM Synchronization → Evidence**

## Lineage Diagnostic
**Quote/Order → Subscription → Product/Charge → Amendment/Renewal → Billing/Entitlement Reference → Missing Link → Impact → Evidence**

## KPI Examples
Order-to-subscription activation time; installed-base synchronization latency; subscription data exceptions; duplicate records; billing/subscription discrepancies; entitlement discrepancies; amendment/renewal failures caused by source-state issues; manual reconciliation touches.

Do not invent targets.

## Opportunity Patterns
Unified installed-base view, effective-dated timeline, current/future-state comparison, lifecycle eligibility guidance, order/subscription lineage, billing/entitlement status, reconciliation alerts and proactive renewal readiness. Proposed until validated.

Apply `../foundations/source-provenance.md`.
