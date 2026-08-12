# Terminology — Data, Integration, Process & Analysis

## System of Record (SoR)
The authoritative system for a defined business entity or data element.

## Source System
The system from which data/event originates in a handoff.

## Target System
The system receiving data/event.

## Master Data
Relatively stable governed data used across transactions, such as customer/product/reference data.

## Transaction Data
Data created by business activity, such as quote, approval, order, invoice, amendment, or renewal records.

## Reference Data
Controlled values used to classify or govern transactions, such as currencies, reason codes, regions, or statuses.

## Identifier / ID
A value uniquely identifying a record/entity within a defined scope.

## Cross-System ID
An identifier/reference used to correlate the same or related business entity across systems.

## Data Lineage
The trace of how data originates, transforms, moves, and is used across the lifecycle.

## Data Mapping
Definition of how source data elements correspond to target data elements.

## Transformation
Logic that converts source data into the form/value required by the target.

## Default
A value applied when defined conditions are met and an explicit value is not otherwise provided.

## Integration
A mechanism/process connecting systems to exchange data or trigger behavior.

## API
Application Programming Interface: a defined interface for system-to-system or application interaction.

## Event
A business/system occurrence that can trigger processing or integration.

## Synchronous Integration
Interaction in which the initiating process waits for an immediate response.

## Asynchronous Integration
Interaction in which processing continues independently and response/completion may occur later.

## Batch Integration
Data processing/exchange performed for groups of records at scheduled or defined intervals.

## Retry
Reattempting a failed integration/transaction.

## Idempotency
Design property that prevents repeated processing of the same request from creating unintended duplicate outcomes.

## Reconciliation
Comparing states across systems/processes and resolving discrepancies.

## Integration Error
A failure in data transfer, validation, processing, connectivity, or target acceptance.

## Validation
Checking whether data/process conditions satisfy defined rules.

## Business Rule
A policy/logic condition governing business behavior.

## Decision
A point at which different process paths result from rules, judgment, or customer choice.

## Exception
A condition outside the standard/happy path requiring alternate handling.

## Rework
Repeating/revising prior work because a validation, decision, customer change, or downstream condition requires correction.

## Handoff
Transfer of work, data, or responsibility between people, teams, or systems.

## Touch
A manual human interaction with a transaction/process.

## Cycle Time
Elapsed time required to complete a defined process or stage.

## SLA
Service Level Agreement/target: an agreed expectation for service/timing. Do not assume a target exists without evidence.

## KPI
Key Performance Indicator used to measure performance/outcome.

## Current State / AS-IS
The observed existing process/system/operating model.

## Future State / TO-BE
A proposed or approved target process/system/operating model. Clearly distinguish proposed from business-approved.

## Pain Point
An observed difficulty, inefficiency, error, delay, or negative experience.

## Root Cause
The underlying condition producing or materially contributing to a pain point.

## Gap
Difference between current capability/process and required/desired capability/process.

## Dependency
A condition, capability, data element, decision, or deliverable required by another item.

## Impact
The business, user, operational, technical, financial, or downstream consequence of a condition/change.

## Requirement
A statement of needed behavior, capability, rule, quality, or outcome.

## User Story
A requirement format commonly expressing persona, desired capability/action, and business value.

## Acceptance Criteria
Testable conditions that define when a requirement/story is satisfied.

## Persona
A defined user/actor type with responsibilities, objectives, tasks, and needs.

## Journey
An end-to-end sequence through which a persona/business transaction achieves an outcome.

## UX
User Experience: the quality and effectiveness of a user's interaction with a process/product/system.

## Usability
How effectively, efficiently, and satisfactorily users can complete intended tasks.

## Evidence
Information supporting a finding or claim.

## Confirmed
Explicitly supported by relevant evidence.

## Inferred
Reasonably derived from evidence but not explicitly stated.

## Unknown
Not established by available evidence.

## Historical Finding
A finding tied to an earlier project/product state and not automatically valid as a current product fact.
