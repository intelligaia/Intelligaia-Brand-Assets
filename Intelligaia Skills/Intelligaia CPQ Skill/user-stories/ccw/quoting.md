# CCW Quoting Story Patterns

## Scope
Normalize source stories concerning quote creation, editing, copying/reuse, revision, versioning, proposal generation, validity, and customer acceptance.

## Story Pattern — Create Quote
**As a** supported seller/partner role  
**I want** to create a quote in the appropriate customer/deal context  
**So that** I can build a governed commercial proposal.

Validate from evidence:
customer/deal context → transaction type → quote identity → initial state → required data.

## Story Pattern — Revise Quote
**As a** supported role  
**I want** to revise an existing quote  
**So that** I can respond to a changed commercial requirement while preserving quote/version integrity.

Check:
editable state → version behavior → pricing recalculation → approval impact → customer artifact → superseded/current version.

## Story Pattern — Reuse Existing Quote
Normalize “copy/clone quote” requests into the business need first:
reuse an existing configuration/commercial starting point under governed rules.

Validate:
what may be reused → what must be refreshed → customer/deal restrictions → price validity → approvals → source/new quote relationship.

Do not assume a copy mechanism exists.

## Story Pattern — Generate Proposal
Capture:
intended quote/version → customer/partner context → commercial values → terms/content source → generation state → traceability.

## Story Pattern — Quote Validity
If expiration/currentness is evidenced, cover:
validity driver → behavior at expiry → repricing/reapproval need → order eligibility.

## Story Pattern — Customer Acceptance
Capture:
accepted quote/version → acceptance evidence → acceptance status → subsequent order readiness.

## Integrity Questions
- Which quote/version is current?
- Can an approved quote be changed?
- What invalidates approval?
- Can a superseded/expired version be shared or ordered?
- Does the proposal match the governed quote version?
- What happens when price-driving data changes?

## Evidence
Link every concrete story to `SRC-CCW-*`.

Unknown CCW-specific state behavior remains **Unknown / Validation Needed**.
