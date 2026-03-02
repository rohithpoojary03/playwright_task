//debugging
//debugging is the process of identifying and fixing issues in your code. Playwright provides several tools and techniques to help you debug your tests effectively.




import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('#loginpassword').press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link').filter({ hasText: /^$/ }).nth(1)).toBeVisible();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});