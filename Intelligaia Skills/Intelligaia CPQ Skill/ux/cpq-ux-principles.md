# CPQ UX Principles

## Purpose
Define vendor-neutral UX principles for Configure–Price–Quote and broader Quote-to-Cash experiences. This entry module governs experience quality without duplicating detailed capability, journey, platform, or integration logic.

## UX Outcome
A user should be able to understand:
**Where am I? → What am I trying to accomplish? → What is valid now? → What changed? → Why? → What blocks me? → What happens next? → Which system/action owns the next step?**

## Core Principles
1. Orient the user around the commercial task, not the system architecture.
2. Make current transaction state and current version obvious.
3. Reuse trusted context; avoid unnecessary re-entry.
4. Prevent invalid actions before submission where practical.
5. Explain price, discount, approval and lifecycle consequences.
6. Preserve user intent across system boundaries.
7. Distinguish current, proposed, pending and effective state.
8. Make exceptions actionable and recoverable.
9. Use progressive disclosure for complex commercial detail.
10. Preserve traceability without exposing implementation noise.
11. Support expert efficiency without sacrificing learnability.
12. Design for lifecycle work, not only initial quote creation.

## Detail Modules
| Topic | Module |
|---|---|
| Transaction orientation, state and navigation | [`cpq-ux-orientation.md`](cpq-ux-orientation.md) |
| Configuration and commercial decision UX | [`cpq-ux-commercial-decisions.md`](cpq-ux-commercial-decisions.md) |
| Approval, exception and recovery UX | [`cpq-ux-exceptions.md`](cpq-ux-exceptions.md) |
| Lifecycle, cross-system and continuity UX | [`cpq-ux-lifecycle-continuity.md`](cpq-ux-lifecycle-continuity.md) |
| UX requirements and evaluation heuristics | [`cpq-ux-requirements.md`](cpq-ux-requirements.md) |

## Related Modules
- [Configuration](../capabilities/configuration.md)
- [Pricing](../capabilities/pricing.md)
- [Discounting](../capabilities/discounting.md)
- [Quoting](../capabilities/quoting.md)
- [Approvals](../capabilities/approvals.md)
- [Amendments](../capabilities/amendments.md)
- [Renewals](../capabilities/renewals.md)
- [Integration Router](../integrations/README.md)

## Evidence Rule
These principles are reusable design guidance. Claims about a customer's current UX, measured usability problem, platform behavior, user preference, frequency, severity, or business impact require supplied evidence and should be labeled **Validated**, **Historical**, **Hypothesis**, **Proposed**, or **Unknown / Validation Needed** as appropriate.
