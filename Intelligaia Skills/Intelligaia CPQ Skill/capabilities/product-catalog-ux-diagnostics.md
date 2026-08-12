# Product Catalog — UX, Diagnostics & KPIs

## Purpose
Define catalog experience principles, common diagnostic patterns, assessment questions, and measures.

# 1. Seller / Partner Experience

A healthy catalog experience should support:
- fast product discovery;
- understandable names/descriptions;
- relevant results;
- clear availability;
- useful grouping/filtering;
- recognition of compatible choices;
- early warning for invalid/unavailable items;
- visibility of replacement alternatives where applicable.

## Diagnostic Questions
- Can users find the right product without memorizing codes?
- Do search terms match user/customer language?
- Are obsolete/ineligible products still visible?
- Is the difference between similar offers understandable?
- Do users need spreadsheets or experts to identify SKUs?
- Are channel/customer-specific offerings obvious?
- Are errors discovered during selection or much later?

# 2. Catalog Administrator Experience

A healthy admin/operations experience should support:
- controlled creation/editing;
- validation before publication;
- dependency visibility;
- effective dating;
- bulk maintenance where appropriate;
- change history/audit;
- testability;
- downstream mapping visibility;
- safe retirement.

## Diagnostic Questions
- How many systems must be updated for a launch?
- Is catalog data re-entered?
- Can dependencies be identified before change?
- Are launches blocked by missing pricing/mapping?
- How are changes tested?
- Can an admin see what downstream processes will break?

# 3. Common Failure Patterns
Use these as hypotheses until evidenced:
- duplicate/ambiguous SKUs;
- poor searchability;
- inconsistent naming;
- obsolete products still selectable;
- missing product metadata;
- complex bundle maintenance;
- rules embedded in tribal knowledge;
- channel/geography eligibility applied manually;
- catalog/pricing effective-date mismatch;
- missing downstream mapping;
- product launch requiring multiple disconnected updates;
- retirement breaking amendment/renewal;
- excessive Deal Desk/Product Specialist dependency.

# 4. Root-Cause Categories
Potential causes:
- catalog architecture;
- taxonomy;
- data ownership;
- governance;
- system fragmentation;
- rule complexity;
- integration;
- release process;
- UX/search;
- missing lifecycle design.

Validate before asserting.

# 5. Impact Categories
Possible impacts:
- seller search time;
- configuration errors;
- invalid quotes;
- pricing errors;
- Deal Desk touch;
- order rejection;
- provisioning/billing failure;
- launch delay;
- renewal/amendment errors;
- reporting inconsistency.

Do not invent quantified impact.

# 6. KPI Framework

| Area | Example measure |
|---|---|
| Discovery | time to find product, failed searches |
| Quality | catalog defects, invalid selections |
| Operations | catalog change lead time |
| Launch | commercial readiness / launch defects |
| Automation | percentage of items passing automated validation where measured |
| Support | catalog-related support/Deal Desk touches |
| Downstream | order/billing failures caused by catalog data |
| Lifecycle | renewal/amendment issues caused by retired/missing catalog context |

Do not invent targets.

# 7. Assessment Evidence
Useful sources:
- catalog exports;
- user research;
- support tickets;
- Deal Desk notes;
- product-launch process;
- configuration/pricing rules;
- integration mappings;
- failed-order/billing data;
- historical case studies.

Apply `../foundations/source-provenance.md`.

# 8. Finding Pattern
**Evidence → Catalog Finding → Persona/Scenario → Root-Cause Hypothesis → Impact → Required Capability → Recommendation → KPI**

# 9. Design Opportunities
Evidence may support opportunities such as:
- guided product discovery;
- better taxonomy/search;
- eligibility-aware catalog;
- centralized commercial readiness;
- pre-publication validation;
- dependency impact analysis;
- lifecycle-safe retirement;
- downstream mapping checks.

These are Proposed until validated/approved.
