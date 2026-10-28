---
title: Create an offer
description: Set up a new offer step by step, including its audience, timing, discount and the settings for each offer type.
sidebar:
  order: 2
---

Create an offer to give your online shoppers a discount. The steps are the same for every offer type up to choosing the type; after that, each type has a few settings of its own.

## Before you start

- **Choose the offer type.** See the [offer types table](../#offer-types).
- **Choose the audience.** Offers for **All Users** can only be Category, Product or Order Total offers, and can be used multiple times. Birthday, Sign-up and Date and Time offers need **Registered Users**.
- **Work out your start and end times in UTC.** Offer times are in UTC (Coordinated Universal Time), not your store's time. For a store on US Eastern Time, add 4 hours in summer and 5 hours in winter. For example, 9:00 AM Eastern in July is 1:00 PM UTC.
- **Prepare an offer image** for the Specials page card.
- *(Optional)* **Pick a promo code** shoppers can type in the cart.

## Steps

### Set up the basics

1. In the Admin Portal, select **Marketing** from the left menu.
2. Select the **Offers** tab, then select **Create New**. A panel opens on the right.
3. Select the store or stores the offer applies to.
4. Choose the audience:
   - **All Users** for guests and registered shoppers.
   - **Registered Users** for registered shoppers only. You can then choose which loyalty tiers can use it.
5. Enter the **Offer name** (up to 50 characters) and a description. Shoppers see these on the Specials page and in the cart.
6. Upload the **Offer image**.
7. *(Optional)* Enter a **Promo Code**.
8. Set the start date and start time, and the end date, in UTC.
9. Decide whether to email the audience when the offer starts. The option to **Send email notifications to the audience on activation** is on by default.

### Choose the offer type

10. In **Offer Type Group**, choose the group, then choose the offer type in the next dropdown.
11. Complete the settings for your offer type, described below.

### Set the discount and usage

12. Choose the discount method: a dollar amount or a percentage.
13. Enter the discount amount.
14. Under redemption details, choose how often each shopper can use it: **One Time**, **Once per Day** or **Multiple**.
15. Select **Save**.

## Settings for each offer type

### Category offer

- For each store, choose the categories the discount applies to.
- Set a **Minimum product value** if needed. The offer applies when one product in the category, at any quantity, reaches this value. A mix of different products can't be combined to reach it.

### Product offer

1. Next to each store, select the **Settings** icon.
2. Search for products **By Category** or **By Product**. Type at least three letters of the name.
3. Select the products. They appear under **Selected Products**.
4. Enter a **Minimum Order Quantity** for each product: how many the shopper must add to get the discount.
5. Select **Save** to return to the offer.

### Order Total offer

- Enter the minimum order total the cart must reach.
- *(Optional)* Enter a maximum order total. The discount is calculated on the order only up to this amount.

### Birthday offer

- No extra settings. Registered shoppers can use it once during their birthday month, and Mosaic emails them on the first day of that month.

### Sign-up offer

- Enter how many days after registering a new shopper has to use it.

### Date and Time offer

- In **Who will receive this offer**, choose a [segment](../../segments/), or choose **Individual** and enter up to 100 shopper email addresses separated by commas.
- *(Optional)* Tick the date and time option to limit the offer to certain days of the week and hours of the day.

### POS offer

- Enter the name, description, dates and image for the Specials page card.
- *(Optional)* Add a link to a page with more details. Links to other websites aren't clickable on in-store kiosks.
- The discount itself is applied by your POS at the counter, not by Mosaic.

:::note
If your store's POS needs it, a **POS Discount ID** field also appears. Enter the ID of the matching discount in your POS so the two stay in step. Ask the Mosaic support team if you're not sure.
:::

## What to expect

- The offer appears in the **Offers** list and switches on by itself at the start date and time.
- When it's active, shoppers see it on the Specials page, on product cards and in the cart, depending on the offer type.
- If you left the activation email on, your audience receives an email when the offer starts.
- If the discount doesn't show on product cards straight away, select **Update Storefront**. See [Manage offers](../manage-offers/).

## Examples

**Weekend category deal.** Example Dispensary offers 20% off Edibles for all shoppers, Friday 9:00 AM to Sunday 11:59 PM Eastern. They create a Category offer for **All Users**, choose Edibles, set **Multiple** redemption, and enter the times converted to UTC.

**Spend-and-save.** To grow basket size, they create an Order Total offer: $10 off orders of $100 or more, for **Registered Users**, **One Time** per shopper.

**Win-back offer.** For lapsed shoppers, they create a Date and Time offer for the **Win Back** segment: 15% off for two weeks, with the activation email on.

## Related

- [Offers overview](../)
- [How offers apply in the cart](../how-offers-apply/)
- [Manage offers](../manage-offers/)
- [Troubleshooting and FAQ](../troubleshooting/)
