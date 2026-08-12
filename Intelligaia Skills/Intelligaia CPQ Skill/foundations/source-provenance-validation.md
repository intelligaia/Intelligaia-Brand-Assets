# Source Provenance — Validation, Conflict & Freshness

## Purpose
Define how to handle conflicting, outdated, ambiguous, and historical evidence.

# 1. Current vs Historical
Classify evidence as current only when its context supports current applicability.

A historical artifact may contain valuable:
- pain points;
- workflow patterns;
- user needs;
- architecture decisions;
- lessons learned.

It must remain Historical until current evidence validates it.

# 2. Date Is Not Enough
File creation/modification date does not by itself prove business freshness.

Check:
- release/version named in content;
- language such as current/future/deprecated;
- project phase;
- referenced system/process;
- decisions superseding earlier content.

# 3. Conflict Handling
When sources disagree, create a conflict record:

**Question → Source A Position → Source B Position → Date/Context → Authority Assessment → Resolution → Remaining Unknown**

Possible resolutions:
- one source supersedes another;
- both are true in different contexts;
- one describes current state and one future state;
- one describes policy and one actual behavior;
- unresolved.

# 4. Policy vs Practice
Distinguish:
- documented process/policy;
- configured system behavior;
- actual user behavior.

All three can differ.

Do not automatically label user workarounds as the official process or official documentation as actual user behavior.

# 5. Requirement vs Implementation
A requirement/user story states desired behavior. Verify implementation separately when the question asks what the system currently does.

# 6. Future State vs Current State
Future-state decks, proposals, roadmaps, and recommendations must be labeled Proposed/Target unless evidence confirms implementation.

# 7. Platform Version
Platform behavior may vary by product edition, release, configuration, and customization.

When version/configuration is unknown, avoid universal claims.

# 8. Customer-Specific vs General
A customer pain point can become a diagnostic hypothesis for another engagement, not a fact.

Example transformation:
Historical finding: “Users required manual order correction.”
Reusable diagnostic: “Validate whether quote-to-order handoff requires manual correction and why.”

# 9. Confidence Adjustment
Lower confidence when:
- evidence is old;
- source is indirect;
- scope is unclear;
- multiple interpretations exist;
- sources conflict;
- implementation/version is unknown.

# 10. Validation Questions
For an uncertain claim ask:
- Who can confirm this?
- Which system/configuration proves it?
- Which current process artifact documents it?
- Is there transaction/analytics evidence?
- Is the behavior universal or scenario-specific?
- When did it last change?
- Does the source describe intended or actual behavior?
