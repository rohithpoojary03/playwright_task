//flaky test
//flaky test is a test that fails randomly due to various reasons such as network issues, timing issues, or other external factors.
//  It is important to identify and fix flaky tests to ensure the reliability of your test suite.

//ways to handle flaky tests in playwright
//global level
//1. using retry option in the playwright.config.ts file -->retry: 3, this will retry the test 3 times before marking it as failed

//for a specific test
//npx playwright test flakytest.spec.ts  --retries=3

import { test, expect } from '@playwright/test';

test('Flaky Test', async ({ page }) => {


  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(8000); //introducing a delay to simulate a flaky test
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');


});  



