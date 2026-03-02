//test generator(codegen)
//it generates test code by recording user interactions with the browser.
//to start codegen, run: npx playwright codegen <url>
//to open the browser in codegen mode, run: npx playwright codegen --browser=chromium https://www.saucedemo.com/

//to create the file automatically- npx playwright codegen -o tests/codegen.spec.ts




import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up').click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  await page.getByRole('link', { name: 'Log out' }).click();
});