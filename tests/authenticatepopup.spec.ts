//Authenticated popup test
// it is used to handle the authenticated popup in the browser
// it is used to handle the authenticated popup in the browser by providing the username and password in the URL

import { test, expect, Locator, Page, chromium } from '@playwright/test';

test('Authenticated popup demo', async ({ browser }) => {

    // ✅ EXTRA ADDED HERE (authentication)
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    });

    const page = await context.newPage();

    // Approach 2: directly pass login along with url
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await page.waitForLoadState(); // wait for page loaded completely

    await expect(page.locator('text=Congratulations')).toBeVisible();

    await page.waitForTimeout(5000);
});