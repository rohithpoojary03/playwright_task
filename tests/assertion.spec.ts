//Assertions
//Assertions are used to verify that the application is in the expected state. They are used to check if an element is visible, if it has the correct text, if it is enabled, etc.
//Playwright provides a built-in assertion library which is used to perform assertions in the tests. The expect function is used to perform assertions in the tests. It takes a locator as an argument and returns an assertion object which has various methods to perform assertions on the locator.



import { test, expect } from '@playwright/test';

test('Playwright Assertions Demo', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // 1. Auto-retrying assertion (automatically retries until it passes or times out)
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/'); // waits for correct URL

  // Auto-retry: waits for the element to be visible and have the expected text
  await expect(page.locator('text=Welcome to our store')).toBeVisible();
  await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText('Featured products'); // waits for the text to be present

  // 2. Non-retrying assertion (executes immediately, no retry)
  const title = await page.title();
  expect(title.includes('Demo Web Shop')).toBeTruthy(); // no auto-retry

  const welcometext = await page.locator('text=Welcome to our store').textContent();
  expect(welcometext).toContain('Welcome'); // non-retrying

  // 3. Negating matcher
  //await expect(page.locator('text=Welcome to our store')).not.toBeVisible(); // auto-retry
  //expect(welcometext).not.toContain('Welcome'); // no auto-retry

  await page.waitForTimeout(5000);
});