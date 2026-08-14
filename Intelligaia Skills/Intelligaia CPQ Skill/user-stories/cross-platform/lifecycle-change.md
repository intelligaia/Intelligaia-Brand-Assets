# Cross-Platform Lifecycle Change Stories

## Scope
Amendment, renewal, cancellation/non-renewal and other changes that start in one domain and complete in subscription/billing/service domains.

## Lifecycle Model
**Authoritative Current State → Pending State → Requested Delta → Effective Date → Commercial Decision → Approval/Acceptance → Processing → Resulting State → Billing/Service Consequence**

## Story Pattern
**As a** supported seller/customer-success/operations role  
**I want** to initiate and complete an eligible lifecycle change from the correct baseline  
**So that** future commercial, subscription and billing state reflect the approved change.

## Flow
1. Current authoritative subscription/customer state is obtained.
2. Pending/future changes are identified where relevant.
3. Requested delta and effective timing are defined.
4. Commercial consequence is calculated/represented as appropriate.
5. Approval/acceptance occurs if required.
6. Lifecycle request is handed to the authoritative processing domain.
7. Resulting subscription state is confirmed.
8. Billing/service consequence is confirmed or reconciled.

## Cross-System Risks
stale baseline → overlapping pending changes → date-semantic mismatch → quote/subscription drift → renewal/amendment collision → cancellation conflict → billing mismatch.

## Acceptance Focus
correct baseline, explicit delta, effective-date fidelity, no lost pending change, resulting-state confirmation and safe recovery.

## Guardrail
Do not invent amendment, renewal, cancellation or proration policy.
