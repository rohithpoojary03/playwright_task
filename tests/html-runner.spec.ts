import { test, expect } from '@playwright/test';

test('Run local hosted HTML in Playwright', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/testhtml.html');

  // getByRole (heading)
  await expect(
    page.getByRole('heading', { name: 'Playwright Locator Practice App' })
  ).toBeVisible();

  // getByText
  await expect(
    page.getByText('Practice all Playwright locators on one page')
  ).toBeVisible();

  // getByAltText
  await expect(
    page.getByAltText('Playwright Company Logo')
  ).toBeVisible();

  // getByLabel
  await page.getByLabel('First name:').fill('John');
  await page.getByLabel('Last name:').fill('Wick');
  await page.getByLabel('Email:').fill('john@test.com');

  // getByPlaceholder
  await page.getByPlaceholder('Enter first name').fill('Johnny');

  // getByRole (button)
  await page.getByRole('button', { name: 'Create Account' }).click();

  // getByTitle
  await expect(
    page.getByTitle('Click here to get help')
  ).toBeVisible();

  // getByTestId
  await expect(
    page.getByTestId('dashboard-card')
  ).toBeVisible();
});
