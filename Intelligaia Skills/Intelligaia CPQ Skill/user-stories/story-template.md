# CPQ/Q2C User Story Template

## Purpose
Create a normalized, evidence-traceable CPQ/Q2C story without overloading the story with every analysis detail.

Use companion modules for detailed guidance:
- [`story-template-guidance.md`](story-template-guidance.md)
- [`story-scenarios.md`](story-scenarios.md)
- [`story-traceability.md`](story-traceability.md)
- [`../analysis/story-analysis-framework.md`](../analysis/story-analysis-framework.md)
- [`../analysis/acceptance-criteria.md`](../analysis/acceptance-criteria.md)

---

## 1. Identification
**Story ID:**  
**Title:**  
**Status:** Source / Normalized / Analyzed / Ready for Refinement / Acceptance Defined / Implemented / Superseded  
**Evidence State:** Validated / Historical / Hypothesis / Proposed / Unknown / Validation Needed  
**Platform Scope:** CCW / Zuora / Salesforce / Cross-Platform / Platform-Neutral  
**Journey:**  
**Capability:**  
**Actor:**  
**Transaction Type:**  

## 2. Source & Provenance
**Source ID(s):** `SRC-...`  
**Source Name:**  
**Source Location:** page / slide / row / section / source story ID  
**Original Source Story / Requirement:**  
**Interpretation Notes:**  
**Conflicting Evidence:** None known / describe  

> Preserve original wording before normalization. Do not silently rewrite the source.

## 3. Normalized Story
**As a** [business role]  
**I want** [business capability/outcome]  
**So that** [supported business value/outcome]

## 4. Business Context
**Problem / Need:**  
**Desired Outcome:**  
**In Scope:**  
**Out of Scope:**  
**Assumptions:**  
**Unknowns / Validation Needed:**  

## 5. Trigger & Preconditions
**Trigger:**  
**Preconditions:**  
1.  
2.  

**Starting Business State:**  

## 6. Main Business Flow
1.  
2.  
3.  
4.  

**Expected End State:**  

## 7. Decisions & Business Rules
| Decision / Rule | Input / Condition | Expected Outcome | Authority / Source | Evidence |
|---|---|---|---|---|
| | | | | |

Do not invent thresholds, formulas, eligibility, approval, renewal or cancellation rules.

## 8. Data & State
**Required Business Data:**  
**Source of Truth / Authority:**  
**Identifiers / Correlation:**  
**Quote / Version State:**  
**Current / Pending Lifecycle State:**  
**Effective Date Semantics:**  

Use **Unknown / Validation Needed** when authority or state behavior is not evidenced.

## 9. Platform & Integration
**Systems / Domains Involved:**  
**Cross-System Handoff(s):**  
**Expected Business Result:**  
**Asynchronous / Pending State:**  
**Reconciliation Need:**  

Do not invent APIs, objects, fields, middleware, event names or timing.

## 10. Exceptions & Recovery
| Scenario | Expected Business Behavior | State Preserved? | Recovery / Next Action | Evidence |
|---|---|---|---|---|
| Validation failure | | | | |
| Technical failure | | | | |
| Timeout / unknown outcome | | | | |
| Partial success | | | | |
| Duplicate / retry | | | | |

Use only scenarios relevant to the story.

## 11. Security & Audit
**Who may view:**  
**Who may act/edit:**  
**Sensitive commercial/customer data:**  
**Audit / traceability need:**  

## 12. Dependencies
**Depends On:**  
**Enables / Blocks:**  
**Shared Dependencies:**  
**Decisions / Discovery Needed:**  

Link `DEP-*` records where created.

## 13. Impact & Risk
**Affected Roles / Processes:**  
**Commercial Risk:**  
**Lifecycle Risk:**  
**Integration / Data Risk:**  
**Operational / UX Risk:**  

Link `IMP-*` records where created. Do not quantify unsupported impact.

## 14. Acceptance Summary
List the minimum observable outcomes this story must satisfy.

1.  
2.  
3.  

Detailed criteria belong in the Acceptance Criteria framework.

## 15. CPQ Integrity Check
Mark relevant items:

- [ ] Configuration validity
- [ ] Pricing / commercial semantics
- [ ] Discount / approval
- [ ] Quote / version integrity
- [ ] Customer artifact / acceptance
- [ ] Order readiness / duplicate prevention
- [ ] Subscription baseline / pending state
- [ ] Amendment / renewal / cancellation
- [ ] Effective date
- [ ] Billing / service consequence
- [ ] Partner / customer / distributor identity
- [ ] Authorization / confidentiality
- [ ] Async / error / recovery / reconciliation
- [ ] None of the above materially applies

## 16. Traceability
**Source:** `SRC-*`  
**Story:** `STORY-*` / platform story ID  
**Gap:** `GAP-*`  
**Dependency:** `DEP-*`  
**Impact:** `IMP-*`  
**Acceptance:** `AC-*`  
**Validation Evidence:**  

Not every story requires every artifact.

## 17. Readiness
**Readiness Status:** Ready for refinement / Needs business clarification / Needs technical discovery / Needs UX/research validation / Blocked by dependency / Insufficient evidence

**Open Questions:**  
1.  
2.  

**Next Action:**  

---

## Guardrails
- Preserve source wording and provenance.
- Separate business need from proposed solution.
- Never infer current platform capability from a requested story.
- Never invent rules, thresholds, fields, APIs, ownership, SLAs, severity or ROI.
- Keep unsupported details explicitly unknown.
- Split stories only when doing so preserves end-to-end commercial/lifecycle integrity.
