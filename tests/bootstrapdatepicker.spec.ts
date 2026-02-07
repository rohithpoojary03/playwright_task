import { test, expect } from '@playwright/test';

test('Booking.com Date Picker Test - Check-in and Check-out', async ({ page }) => {
  await page.goto('https://www.booking.com/');

  // Open calendar
  await page.getByTestId('searchbox-dates-container').click();

  // ================= CHECK-IN DATE =================
  const checkinYear = "2026";
  const checkinMonth = "June";
  const checkinDay = "20";

  // Wait for calendar header to appear
  await page.locator("h3[aria-live='polite']").first().waitFor({ state: 'visible' });

  let attempts = 0;

  while (attempts < 24) {
    const headerText = await page
      .locator("h3[aria-live='polite']")
      .nth(0)
      .textContent();

    if (!headerText) throw new Error('Check-in month header not found');

    const [currentMonth, currentYear] = headerText.split(" ");

    if (currentMonth === checkinMonth && currentYear === checkinYear) {
      break;
    }

    await page.locator('button[aria-label="Next month"]').click();
    attempts++;
  }

  if (attempts === 24) {
    throw new Error('Check-in month/year not reached');
  }

  // Select check-in day
  const checkinDates = await page
    .locator('table.b8fcb0c66a tbody')
    .nth(0)
    .locator('td')
    .all();

  let checkinDateSelected = false;

  for (const date of checkinDates) {
    const dateText = await date.innerText();
    const classes = await date.getAttribute('class');

    if (
      dateText === checkinDay &&
      !classes?.includes('b8fcb0c66a--disabled')
    ) {
      await date.click();
      checkinDateSelected = true;
      break;
    }
  }

  expect(checkinDateSelected).toBeTruthy();

  // ================= CHECK-OUT DATE =================
  const checkoutYear = "2026";
  const checkoutMonth = "July";
  const checkoutDay = "25";

  await page.locator("h3[aria-live='polite']").nth(1).waitFor({ state: 'visible' });

  attempts = 0;

  while (attempts < 24) {
    const headerText = await page
      .locator("h3[aria-live='polite']")
      .nth(1)
      .textContent();

    if (!headerText) throw new Error('Check-out month header not found');

    const [currentMonth, currentYear] = headerText.split(" ");

    if (currentMonth === checkoutMonth && currentYear === checkoutYear) {
      break;
    }

    await page.locator('button[aria-label="Next month"]').click();
    attempts++;
  }

  if (attempts === 24) {
    throw new Error('Check-out month/year not reached');
  }

  // Select check-out day
  const checkoutDates = await page
    .locator('table.b8fcb0c66a tbody')
    .nth(1)
    .locator('td')
    .all();

  let checkoutDateSelected = false;

  for (const date of checkoutDates) {
    const dateText = await date.innerText();
    const classes = await date.getAttribute('class');

    if (
      dateText === checkoutDay &&
      !classes?.includes('b8fcb0c66a--disabled')
    ) {
      await date.click();
      checkoutDateSelected = true;
      break;
    }
  }

  expect(checkoutDateSelected).toBeTruthy();

  await page.waitForTimeout(5000); // optional visual check
});
