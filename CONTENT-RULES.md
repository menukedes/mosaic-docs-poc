# Mosaic Help Center: content rules

Every page on this site follows these rules, whoever writes it. Claude reads this file before
writing or changing any page. If a rule needs to change, change it here first, in its own pull
request, so the whole site stays consistent.

## 1. Audience

The readers are **dispensary owners, managers and budtenders** using Mosaic. They are not
developers.

- Write for someone doing the task in the Admin Portal or at the counter, not someone curious
  about how Mosaic is built.
- Assume they know their store and their POS, but not Mosaic's internal terms.
- Where a task needs a particular role or permission, say so at the start of the page.

## 2. What never appears on a page

- Internal architecture, services, databases, APIs, code, file names from the codebase,
  environment names (dev, QA, staging) or internal URLs.
- Merchant, dispensary, brand or store names, merchant IDs, or anything that identifies a real
  customer. Use the fictional store **Example Dispensary** in all examples.
- Names, emails, phone numbers, addresses or any other data about real people.
- Real order numbers, transactions, balances or loyalty points.
- Credentials, API keys or tokens.
- Ticket keys, pull request links, or mentions of Jira, Confluence, GitHub, Jenkins or other
  internal tools.
- Internal product names. Use **Mosaic Pay & Rewards**, never "Independent eWallet" or "IEW".
- SMS as a marketing channel (Mosaic markets by email and push only).
- Known bugs described as bugs. If a known issue affects users, give the practical workaround as
  a tip (for example, "use only letters, numbers and dashes in file names").
- Features that are planned but not yet released.

## 3. Accuracy

- Use only what the sources confirm: released behaviour in Jira tickets, existing Mosaic
  documentation and, when available, the product itself or its code.
- Never invent a menu name, button label, field, default value or limit.
- Copy screen labels exactly as they appear in the product, in **bold**.
- Where a detail can't be confirmed, leave it out of the page and list it as an open question in
  the pull request. Pages must never contain draft markers such as `[NEEDS CONFIRMATION]` when
  merged.
- Record the sources used for each change in the pull request description, never on the page.

## 4. Site structure and navigation

The site is organized by **feature**: the things merchants run, such as marketing or loyalty. It
is not organized by Admin Portal menu. Each feature explains how it works for shoppers and
staff, then how to set it up and manage it in the Admin Portal.

- Top-level sections, in sidebar order (add one only when it has a real page, see below):
  - `getting-started/`: orientation for new merchants.
  - `marketing/<feature>/`: media banners, offers, segments, messaging.
  - `loyalty/`: your store's own loyalty program (points, loyalty tiers, rewards).
  - `customers/`: shopper accounts and records.
  - `orders/`: online orders, from placing to pickup or delivery.
  - `store-settings/`: store details and how the storefront looks.
  - `pos-integrations/<pos-name>/`: setting up a POS to work with Mosaic.
  - `mosaic-pay-and-rewards/`: Mosaic Pay & Rewards. This program is run by Mosaic, so keep
    it separate from `loyalty/`, and link between the two rather than mixing them.
- A section with several sub-features (Marketing) has one subfolder per feature. A section that
  is one feature (Loyalty) keeps its pages directly in the section folder.
- Every overview page says where the feature lives in the Admin Portal, for example "You'll find
  it in the Admin Portal under **Marketing** → **Offers**."
- Settings only the Mosaic team can change are covered on the feature's own pages, worded as
  "Ask the Mosaic support team to ...". There is no separate section for them.
- **No empty sections.** A section appears in the sidebar (`astro.config.mjs`) and on the home
  page only once it has at least one real page. Never add "coming soon" pages.
- When a section gets its first page, add it to the sidebar and add a card for it on the home page
  in the same pull request.
- A new top-level section not listed above needs the reviewer's agreement first.
- Organize by feature, not by release or ticket. Update an existing page when one covers the
  topic; add a page only when none does.
- File and folder names: lowercase, words separated by dashes, named after the task
  (`create-a-reward.md`, not `reward-creation-v2.md`).
- Set `sidebar.order` in the front matter so pages appear in a logical order.

## 5. Page types

Each feature gets a small set of pages, in this order:

1. **Overview** (`index.md` in the feature folder): what the feature is, who it's for, how it
   works for shoppers and staff (online and in store, where relevant), where it lives in the
   Admin Portal, key terms, and links to the task pages. Includes an illustration of where it
   appears and, if useful, a flow or lifecycle diagram. For a feature with a lot to explain
   (such as loyalty), the "how it works" part can be its own page, placed right after the
   overview.
2. **Task pages** (one per task, titled with a verb: "Create a media banner", "Schedule a media
   banner"): numbered steps, then "What to expect", then examples.
3. **Troubleshooting and FAQ**: symptoms in the reader's words, each with the likely cause and the
   fix.

## 6. Page template

Every page starts with front matter:

```yaml
---
title: Create a media banner          # Sentence case, verb first for task pages
description: One sentence, under 160 characters, saying what the reader can do.
sidebar:
  order: 2
---
```

Task pages use these headings, in this order (leave out any that don't apply):

1. Opening paragraph: one or two sentences on what the reader will achieve.
2. `## Before you start`: permissions, files to prepare, decisions to make.
3. `## Steps`: numbered steps. One action per step. Start each step with a verb. Put screen labels
   in **bold**. Use `→` for menu paths (**Marketing** → **Media Banners**).
4. `## What to expect`: what happens in the Admin Portal and on the storefront, and how long it
   takes.
5. `## Examples`: one to three realistic scenarios for Example Dispensary.
6. `## Related`: links to other pages.

A copy of this template is in `templates/task-page.md`.

## 7. Writing style

- Plain, friendly and direct. Second person ("you", "your store"). Short sentences.
- Sentence case for titles and headings.
- Use the same word for the same thing on every page (see the glossary below).
- Use American English spelling.
- Write times as "4:00 PM", dates as "October 31".
- Don't use "simply", "just" or "easy".
- Use callouts sparingly and consistently:
  - `:::tip`: a better way to do something.
  - `:::note`: useful background.
  - `:::caution`: something that can't be undone or will surprise the reader.
  - `:::danger`: risk of losing data or affecting customers. Rarely needed.

## 8. Glossary

Use these terms exactly.

| Term | Meaning | Don't use |
|---|---|---|
| Admin Portal | Where merchants manage Mosaic | admin panel, back office, dashboard |
| storefront | The online store shoppers use | website, web app, e-commerce site |
| landing page | The storefront home page | home screen, main page |
| store | One dispensary location | location, outlet, tenant (except to quote a screen label such as **Location**) |
| shopper | A person browsing or buying on the storefront | customer user, end user, consumer |
| kiosk | The in-store self-service device running the storefront | tablet mode |
| media banner | An image, image carousel or video shown on the landing page | marketing banner, ad, carousel widget |
| Mosaic Pay & Rewards | Mosaic's wallet and rewards product | Independent eWallet, IEW |
| loyalty program | Your store's own points program, set up in the Admin Portal | rewards program (except to quote a label) |
| points | What shoppers earn by spending and spend on rewards | credits, coins |
| loyalty tier | A level shoppers reach by earning points (the Admin Portal labels these **Levels**) | rank, status |
| reward | Something shoppers get in exchange for points | prize, redemption item |
| offer | A discount set up under **Marketing** → **Offers**, no points needed | deal, coupon (except "promo code") |
| segment | A group of shoppers chosen by their activity or profile | audience list, cohort |

When the product's own label differs from the glossary term, use the label for the click and the
glossary term in the prose (for example: "Select the store in the **Location** field").

## 9. Diagrams and illustrations

- **Diagrams** explain flows, lifecycles and decisions. Write them as Mermaid code blocks so they
  stay editable. Keep them to about 10 boxes, label boxes in plain words and run left to right
  for processes, top to bottom for decisions.
- **Illustrations** show where something appears or what it looks like. Draw them as simple SVG
  wireframes in `src/assets/illustrations/`, named after the page
  (`media-banners-landing-page.svg`). Style:
  - Mosaic greens `#025E43` (dark), `#3FAE84` (mid), `#D9EFE6` (light), with greys `#F3F4F6`
    and `#9CA3AF` for neutral blocks, on a white background.
  - Generic placeholder content only: no real products, prices, brands or people.
  - Labels in plain words matching the glossary.
- Every image needs alt text that describes what it shows.
- Each page gets at most one illustration and one diagram per major section, only where they make
  the text easier to follow.

## 10. Screenshots

- Only from a test store with fictional data. Never a real merchant's Admin Portal or storefront.
- Crop to the part of the screen being discussed. Highlight with a single green box if needed.
- Store in `src/assets/screenshots/<feature>/`, named after what they show.
- Retake them when the screen changes; an out-of-date screenshot is worse than none.

## 11. Pull requests

- One feature or one fix per pull request.
- The description lists: pages added or changed, sources used, and any open questions for the
  reviewer.
- Include the Cloudflare preview link.
- Claude never merges. A person reviews, approves and merges.
