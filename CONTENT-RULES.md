# Content rules

These rules apply to every page, whoever writes it. Claude reads this file before writing.

## Audience

Merchants and dispensary staff. Write plainly, in second person ("you"), with numbered steps for tasks.

## Accuracy

- Use only what the sources confirm: released code, Jira tickets and existing Mosaic documentation.
- Never invent a menu name, button label, field, default value or limit.
- Where a detail is unconfirmed, write `[NEEDS CONFIRMATION: question]`. Reviewers resolve these before merging.
- Where a screenshot is needed, write `[SCREENSHOT: what to capture]`.
- Document released behaviour only. Unreleased features stay out.

## Never publish

- Merchant, dispensary, brand or store names, or merchant IDs. Use "your store" or "Example Dispensary".
- Names, emails, phone numbers, addresses, dates of birth or any other data about real people.
- Order numbers, transaction or payment data, balances or loyalty points taken from real records.
- Credentials, API keys, tokens, internal or staging URLs.
- Ticket keys, pull request links, repository or service names, table names, SQL, or mentions of Jira, Confluence, GitHub or Jenkins.
- Internal product names. Use "Mosaic Pay & Rewards", never "Independent eWallet" or "IEW".
- SMS as a marketing channel.

## Structure

- Organise pages by area (Admin Portal, storefront, POS, payments and loyalty, settings managed by Mosaic), not by ticket or release.
- Update an existing page when one covers the topic; create a new page only when none does.
- Settings that only the Mosaic team can change go under "Settings managed by Mosaic", described as "ask Mosaic to enable".

## Images and diagrams

- Diagrams: use Mermaid code blocks.
- Screenshots: test data only, never a real merchant's store or real customer data.
- Every image needs alt text describing what it shows.
