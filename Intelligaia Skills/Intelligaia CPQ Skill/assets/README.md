# Assets — Source Evidence Layer

## Purpose
`assets/` is the canonical global repository for source/reference evidence used by CPQ Insight.

**Assets = source/reference evidence.**  
**Knowledge folders = normalized, interpreted, reusable knowledge.**

## Structure
- `source-index.md` — canonical provenance registry.
- `user-stories/` — original/reference story evidence.
- `research/` — interview, discovery and research evidence.
- `process-flows/` — source process/flow evidence.
- `screenshots/` — UI/reference images when materially useful.
- `source-documents/` — other retained source artifacts.

## Source IDs
Use stable IDs: `SRC-<DOMAIN>-<TYPE>-<NNN>`.

Examples: `SRC-ZUORA-STORY-001`, `SRC-CCW-RESEARCH-001`, `SRC-XPLAT-FLOW-001`.

## Evidence States
**Validated · Historical · Hypothesis · Proposed · Unknown / Validation Needed**

## Provenance
Derived knowledge should identify, when available:
**Source ID → Source Location → Evidence State → Derived Knowledge**

## Original vs Extracted Assets
Retain large originals only when they materially improve reasoning or verification. Prefer compact Markdown extracts where practical while preserving original name, source ID, page/slide/row/section, terminology, meaning, and reference to the original.

## Multi-Domain Evidence
A source can support many knowledge modules. Keep one canonical asset and reference it rather than duplicating it.

## Guardrails
- Do not silently rewrite source evidence as current truth.
- Do not reconcile contradictory sources without evidence.
- Do not infer missing rules, thresholds, ownership or implementation behavior.
- Do not duplicate the same source across knowledge folders.


## Enrichment
See [`source-enrichment-protocol.md`](source-enrichment-protocol.md) before converting project artifacts into normalized knowledge.
