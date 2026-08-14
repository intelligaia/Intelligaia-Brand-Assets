# Process / Current-State — Claim-Level Normalization

## Source
`SRC-PROCESS-DOC-001` — CPQ Tools & Renewal Process.docx

## Interpretation
The source mixes market descriptions, renewal best practices, illustrative scenarios, a stated renewal/amendment process, product comparisons, and proposed custom functionality. Claims are normalized individually.

## Candidate Process Claims
### `PROC-001` — Renewal quote chain
Account → Opportunity → multiple quotes, one identified as primary → order from primary quote → contract → renewal opportunity → renewal quote.
**Evidence state:** Unknown / Validation Needed.
**Reason:** “Process Followed” is stated, but customer, implementation, date, version and authority are not established.

### `PROC-002` — Amendment quote chain
Account → Opportunity → multiple quotes, one identified as primary → order → contract → amendment opportunity → amendment quote. The amendment is described as originating from an ongoing contract/subscription and may include upsell/downsell.
**Evidence state:** Unknown / Validation Needed.

## Reference / Scenario Claims
### `REF-REN-001`
Auto-renewal, manual renewal, upsell/cross-sell, amendment, multi-year renewal and price-increase scenarios.
**Evidence state:** Hypothesis / Reference Pattern.

### `REF-REN-002`
Comparison of flat, upsell and downsell renewal handling in Zuora CPQ vs Salesforce CPQ.
**Evidence state:** Unknown / Validation Needed.
**Rule:** Validate against authoritative platform evidence before reuse.

## Proposed Functionality
| ID | Proposal | Evidence State |
|---|---|---|
| `PROP-001` | Append `RNWL` to renewal opportunity naming | Proposed |
| `PROP-002` | Validate subscription start date vs effective date | Proposed |
| `PROP-003` | Quote-sync success/failure notifications | Proposed |
| `PROP-004` | Automated renewal quote generation | Proposed |
| `PROP-005` | Product bundle recommendations/configuration | Proposed |
| `PROP-006` | Multi-tier approval workflow | Proposed |
| `PROP-007` | Renewal forecast dashboard | Proposed |
| `PROP-008` | Prefill quote fields from opportunity context | Proposed |
| `PROP-009` | Carry relevant quote fields into order creation | Proposed |
| `PROP-010` | Restrict editing after activation/Closed Won | Proposed |
| `PROP-011` | Discount approval email notifications | Proposed |
| `PROP-012` | Quote-status guidance/messages | Proposed |

## Operational Assumptions Not Promoted
Example timing such as renewal generation 90 or 60 days before expiry, illustrative upsell logic, portal/e-signature steps and described billing updates are not normalized as current business rules because applicability is not established.

## Validation Questions
1. Which organization/process does “Process Followed” describe?
2. Is the primary-quote model actually configured, and where?
3. What is authoritative for renewal/amendment eligibility and effective dates?
4. Are renewal opportunities/quotes automated or manually initiated?
5. Which notification, portal and e-signature capabilities are implemented?
6. Which proposed functions were approved, delivered, rejected or superseded?
7. Are quote-to-order/billing mappings documented elsewhere?
8. Which renewal timing, approval and pricing policies are current rules?
