# Salesforce CPQ — Illustrative Flow Knowledge

> The supplied source corpus includes an illustrative Salesforce CPQ flow. Treat it as source material, not authoritative current Salesforce product documentation.

## Illustrative flow
Account / Opportunity → Create Quote → Add/Edit Products → Configure Options → Price/Discount → Approve → Generate Document → eSignature → Closed Won → Order → Amend Contract / Renew.

## Analysis use
Use this flow to map ownership and integration questions:
- Where is Account/Opportunity mastered?
- Which quote becomes authoritative?
- How are opportunity and quote synchronized?
- Where do product/price rules execute?
- Where do approvals execute?
- What creates the order?
- What contract/subscription state supports amendment/renewal?
- Which system owns billing?

Validate exact objects, automations, and current product behavior for the implementation being analyzed.
