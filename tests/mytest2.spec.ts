import { test, expect } from '@playwright/test';

test("Verify the title of the page", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await expect(page).toHaveTitle(/Test Automation Practice Hub/);

  console.log("Title:", await page.title());
  console.log("URL:", page.url());

  await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
});
