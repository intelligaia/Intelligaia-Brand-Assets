# Integration Error Detection, Triage & Ownership

## 1. Detection Sources
Potential:
API response; asynchronous callback; event-consumer failure; timeout; dead-letter/quarantine; business-status aging; user report; reconciliation mismatch.

## 2. Triage Envelope
Capture:
**Transaction / Component → Operation → Source System/State/Version → Target System/State → Correlation → Error Category → Timestamp → Completed Steps → Retry Status → Owner**

## 3. First Decision: Is Outcome Known?
### Known Failure
Target confirms business action did not complete.

### Known Success
Transport/callback failed but target business action completed.

### Unknown
Target outcome cannot yet be established.

Do not retry an unknown outcome until duplicate/business-state risk is assessed.

## 4. Determine Business Impact
Ask:
- Is customer quote/order blocked?
- Is service/provisioning affected?
- Can billing be wrong or duplicated?
- Is renewal/cancellation timing threatened?
- Is accepted commercial state at risk?
- Is only informational visibility delayed?

## 5. Determine Scope
Single record → single component → transaction → customer → product/map → interface → broad platform/dependency.

## 6. Determine Currentness
Verify the source quote/version/subscription/lifecycle state is still current before correcting or replaying.

## 7. Determine Ownership
Potential owners:
business process; source application; target application; integration/platform; data/reference; product/catalog; pricing; billing; fulfillment; security/access.

Route by root cause and required action, not by where the error surfaced.

## 8. Actionable User Message
A business-facing message should communicate:
what could not complete → affected transaction/component → whether work is preserved → whether user can retry → what action is needed → support reference.

Avoid raw stack traces.

## 9. Technical Diagnostic Context
Support may need:
correlation/operation ID; interface; timestamps; source/target references; contract version; sanitized error details; retry history.

## 10. Data Error Triage
Identify authoritative value → correct at authoritative source → revalidate mapping → reprocess safely.

Avoid fixing a replicated target field that will be overwritten again.

## 11. Mapping Error Triage
Identify unmapped source value → validate business meaning → approve mapping → version/change control → reprocess affected records → reconcile.

## 12. State Conflict Triage
Retrieve authoritative current state → identify competing/pending operation → determine reject/rebase/sequence/cancel policy.

## 13. Partial Success Triage
List completed, failed and pending components → determine whether successful components remain valid → retry failed subset or execute approved compensation.

## 14. Aging
Track time in:
queued; processing; retrying; awaiting business correction; awaiting technical correction; reconciliation exception.

## 15. Escalation
Escalate based on business impact and aging, not only technical error count.

## 16. Incident vs Transaction Exception
A single bad customer record may be a transaction exception; a widespread mapping/service defect may require incident/problem management.

Exact organizational process requires evidence.

## 17. Closure
Do not close solely because the technical message processed. Verify the expected business outcome or reconciliation state.

## Guardrail
Do not invent team names, severity thresholds, support tools, ticket queues, SLAs or escalation paths.
