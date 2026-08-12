# Source Provenance — Evidence Capture

## Purpose
Define the minimum structure for capturing source-backed CPQ/Q2C findings.

# Evidence Record Template

## Claim
The specific statement being evaluated.

## Status
Confirmed / Inferred / Unknown / Historical / Proposed.

## Source
File, meeting, research artifact, system evidence, public/vendor documentation, or other origin.

## Date / Version
When the evidence was created or the relevant version.

## Context
Customer, platform, process, persona, journey, release, geography, channel, or other scope needed to interpret the evidence.

## Evidence Reference
Relevant section, slide, row, story, excerpt, object/field, screenshot, metric, or observation.

## Confidence
Use confidence to communicate evidence quality, not certainty theater.

Suggested qualitative scale:
- **High** — direct, specific, current, authoritative evidence.
- **Medium** — relevant evidence with some ambiguity or indirectness.
- **Low** — weak/partial evidence useful mainly as a hypothesis.

## Scope
State whether the evidence applies to:
- customer current state;
- historical state;
- specific platform/process;
- specific persona/journey;
- broader vendor-neutral pattern.

## Conflicts
Record contradicting sources or observations.

## Open Question
State what still needs validation.

# Evidence Quality Questions
- Is the source direct or second-hand?
- Is it current?
- Is it specific to the question?
- Is the source authoritative for this type of fact?
- Is the terminology unambiguous?
- Does another source contradict it?
- Is the claim broader than the evidence supports?
- Does the evidence describe current state or future intent?

# Evidence by Artifact Type

## User Story / Requirement
Strong for intended/required behavior; not automatically proof of current implemented behavior.

## Acceptance Criteria
Strong for expected/testable requirement; not automatically proof the system currently satisfies it.

## Meeting Notes
Useful for stakeholder statements, pain points, decisions, and open questions. Validate critical technical facts when possible.

## User Research
Strong for observed/reported user experience and workflow problems within the research scope.

## Analytics
Strong for measured behavior when metric definition, timeframe, population, and data quality are understood.

## Architecture / Integration Documentation
Strong for intended/implemented technical relationships when version/current-state status is clear.

## Case Study
Useful for documented historical/project outcomes and patterns. Do not generalize customer-specific findings as universal behavior.

## Spreadsheet / Backlog
Useful for structured requirements, mappings, priorities, status, and data. Confirm semantics of columns/statuses.

## Public / Vendor Documentation
Useful for documented platform capabilities and terminology. Confirm version/release relevance.

# Citation Discipline
When producing source-based analysis, keep enough source detail that a reviewer can locate the supporting evidence.

Do not fabricate page, slide, row, field, or quote references.

# Unknowns
Unknown is a valid result. Record:
- what is unknown;
- why current evidence is insufficient;
- which source/person/system could resolve it;
- whether the unknown blocks a decision.
