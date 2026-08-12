# Personas — Technology, Administration & Integration

## Purpose
Define the technology personas that configure, operate, integrate, monitor, and evolve the CPQ/Q2C ecosystem.

# 1. CPQ / CRM / Billing Administrator

## Objective
Maintain reliable business configuration while enabling controlled change.

## Responsibilities
Configuration, rules, permissions, templates, workflow administration, release support, troubleshooting, data/configuration maintenance according to platform scope.

## Information Needed
Business policy, configuration dependencies, environment/release state, defects, usage, change requests.

## UX / Tooling Needs
Safe configuration, validation, audit/history, deployment controls, dependency analysis, testability.

## Diagnostic Questions
Which changes require code vs configuration? How are changes tested/deployed? Where is admin knowledge concentrated? How are dependencies documented?

# 2. IT / Application Owner

## Objective
Maintain platform reliability, architecture, security, supportability, and alignment with business needs.

## Responsibilities
Application ownership, architecture, environments, releases, vendor/platform coordination, incident/problem management, technical roadmap.

## Information Needed
Business priorities, architecture, integrations, usage, defects, technical debt, release constraints, security/compliance requirements.

## KPIs
Availability, incident trends, release quality, support volume, change lead time where measured.

# 3. Integration / Data Team

## Objective
Maintain reliable, traceable data movement and shared business state across Q2C systems.

## Responsibilities
Interfaces, events/APIs/batches, mappings, transformations, retries, idempotency, monitoring, reconciliation, data lineage.

## Information Needed
Source/target ownership, business entities/IDs, triggers, schemas, validation, timing, error handling, operational owners.

## UX / Operational Needs
Observability, correlation IDs, actionable errors, replay/retry controls, duplicate prevention, lineage, ownership.

## Diagnostic Questions
What triggers each handoff? Which IDs correlate records? How are partial failures handled? Can users see downstream status? Who owns reconciliation?

# 4. Data / Reporting Analyst
This responsibility may be a distinct role or part of RevOps/IT/Finance.

## Objective
Produce trusted operational and business insight from Q2C data.

## Responsibilities
Metric definition, reporting, data-quality analysis, lifecycle analytics, reconciliation insight.

## Information Needed
Authoritative data definitions, lineage, timestamps/statuses, cross-system identifiers, business definitions.

## Evidence Rule
Do not assume technical ownership, platform permissions, architecture, or support model without implementation evidence.
