
//to run on different devices
//npx playwright codegen -o tests/codegen.spec.ts --device="iPhone 12" https://www.saucedemo.com/

import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 12'],
});

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  await page.getByRole('link', { name: 'Log out' }).click();
});