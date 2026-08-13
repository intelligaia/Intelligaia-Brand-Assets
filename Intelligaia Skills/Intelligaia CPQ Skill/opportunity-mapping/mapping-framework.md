# Opportunity Mapping Framework

## Purpose
Convert CPQ/Q2C evidence into defensible advisory and delivery opportunities.

## Mapping Chain
**SRC → Finding → Gap/Risk → Affected Journey/Capability → Service Motion → Expected Outcome → Validation**

Where existing artifacts exist, link:
`SRC-* → STORY-* → GAP-* → DEP-* → IMP-* → Opportunity → AC/Validation`.

## Step 1 — Establish Evidence
Record:
source ID → source location → evidence state → applicable platform/process/customer scope → conflicts/unknowns.

## Step 2 — State the Finding
Use neutral, observable wording.

Prefer:
“Users report repeated manual reconciliation between quote and downstream status.”

Avoid:
“The customer has a broken quote-to-cash architecture.”

## Step 3 — Identify Consequence
Classify only supported consequences:
seller effort → cycle-time friction → error/rework risk → approval friction → customer/partner experience → data/state inconsistency → operational support burden → lifecycle/billing risk.

Do not quantify without a supported baseline.

## Step 4 — Identify the Gap
A gap may be:
process → UX → capability → integration → data/semantic → governance → operating model → evidence/discovery.

Unknown current state may require assessment rather than implementation.

## Step 5 — Select Service Motion
Choose the smallest credible service motion:
assessment/advisory → research/UX → solution/design → engineering/modernization → integration/data → transformation/change.

Multiple motions may form a sequence, but do not inflate scope.

## Step 6 — Define Expected Outcome
Examples:
validated current-state map → prioritized requirements → reduced ambiguity → governed future-state flow → validated UX → reliable handoff → reconciliation design → modernization roadmap.

Do not promise business metrics without evidence.

## Step 7 — Define Validation
Specify what would demonstrate value:
baseline established → user validation → workflow acceptance → defect/rework trend → processing success → reconciliation accuracy → cycle-time measure → adoption/usability measure.

## Confidence
### High
Validated evidence directly supports the finding and service fit.

### Medium
Evidence supports the concern, but scope/root cause needs discovery.

### Low
Hypothesis or incomplete evidence; recommend validation before solution commitment.

## Anti-Patterns
- Service-first selling.
- Treating generic CPQ best practice as customer evidence.
- Converting one user complaint into enterprise-wide fact.
- Claiming ROI without baseline.
- Prescribing implementation before establishing source-of-truth and process ownership.
- Hiding conflicting evidence.
