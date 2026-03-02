//to run on different browsers
//npx playwright codegen -o tests/codegen.spec.ts --browser=chromium https://www.saucedemo.com/
//npx playwright codegen -o tests/codegen.spec.ts --browser=firefox https://www.saucedemo.com/
//npx playwright codegen -o tests/codegen.spec.ts --browser=webkit https://www.saucedemo.com/

//to run on different channels of browsers
//npx playwright codegen -o tests/codegen.spec.ts --browser=chromium --channel=chrome https://www.saucedemo.com/
//npx playwright codegen -o tests/codegen.spec.ts --browser=chromium --channel=msedge https://www.saucedemo.com/

//to run in headless mode
//npx playwright codegen -o tests/codegen.spec.ts --headless https://www.saucedemo.com/

//to run in headed mode
//npx playwright codegen -o tests/codegen.spec.ts --headless=false https://www.saucedemo.com/


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
});