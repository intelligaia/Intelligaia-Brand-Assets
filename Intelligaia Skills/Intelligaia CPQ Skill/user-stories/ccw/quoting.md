# CCW Quoting Story Patterns

## Scope
Normalize source stories concerning quote creation, editing, copying/reuse, revision, versioning, proposal generation, validity, and customer acceptance.

## Story Pattern — Create Quote
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

Validate from evidence:
customer/deal context → transaction type → quote identity → initial state → required data.

## Story Pattern — Revise Quote
**As a** `[actor/role evidenced for this scenario]`
**When** `[business trigger/context, if evidenced and useful]`
**I want** `[specific need/action/capability derived from evidence]`
**So that** `[specific business outcome derived from the actor, decision/action, and desired consequence; otherwise Validation Needed]`

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
