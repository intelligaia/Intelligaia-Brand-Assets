# User Story Traceability

## Purpose
Maintain evidence lineage from source material through normalized story, analysis, acceptance and validation.

## Canonical Chain
**SRC → STORY → GAP → DEP → IMP → AC → Validation Evidence**

Not every story requires every link.

## Source
`SRC-*` identifies canonical evidence under `assets/`.

Capture source location when possible:
page → slide → row → section → original story ID.

## Story
The normalized story is a derived knowledge artifact.

It must not overwrite the original source wording.

## Gap
Create `GAP-*` only when an evidenced current-vs-required difference exists.

Unknown current behavior may be an evidence gap rather than a capability gap.

## Dependency
Create `DEP-*` for material prerequisites, contracts, decisions, or discovery needed for correctness/readiness.

## Impact
Create `IMP-*` for material direct/upstream/downstream consequence or risk analysis.

## Acceptance
Create `AC-*` for observable, testable outcomes.

## Validation Evidence
Record what proves:
requirement understood → dependency satisfied → gap closed → behavior accepted → risk controlled.

## Suggested Story Header
```text
Story ID:
Source ID:
Evidence State:
Journey:
Capability:
Platform Scope:
Related GAP:
Related DEP:
Related IMP:
Related AC:
```

## Many-to-Many Relationships
One source can support many stories.
One story can have many sources.
One dependency can support many stories.
One gap can affect many journeys.
One acceptance criterion can validate a shared rule, but avoid hiding story-specific outcomes.

## Conflicting Sources
Link all relevant `SRC-*` records and state the unresolved conflict.

Do not silently choose the newest source unless its authority/applicability is established.

## Supersession
When a story changes:
retain prior identifier/history where useful → mark superseded state → link replacement → preserve source lineage.

## Implementation Status
Evidence status and implementation status are different.

A Validated requirement may be unimplemented.
An Implemented behavior may be documented only historically.
A Proposed story is not current capability.

## Guardrail
Traceability exists to preserve reasoning and evidence, not to create administrative overhead. Use the minimum links needed to support reliable decisions.
