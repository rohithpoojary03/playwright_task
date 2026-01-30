//The button text changes dynamically between START and STOP
//XPath uses logical OR:
//button[text()='STOP' or text()='START']
//Playwright automatically:
//Waits for the button
//Re-evaluates the XPath every time inside the loop

//using XPath to handle dynamic elements in Playwright
/*import { test, expect, Locator } from '@playwright/test';

test('Handle Dynamic Elements using XPath', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Loop to click the button 5 times
  for (let i = 1; i <= 5; i++) {

    // XPath to handle dynamic START / STOP button text
    const button: Locator = page.locator(
      "//button[text()='STOP' or text()='START']"
    );

    // Click the button
    await button.click();

    // Wait for 2 seconds
    await page.waitForTimeout(2000);
  }
});*/


//using CSS to handle dynamic elements in Playwright
/*import { test, expect, Locator } from '@playwright/test';
test('Handle Dynamic Elements using CSS', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');  
    // Loop to click the button 5 times
    for (let i = 1; i <= 5; i++) {

      // CSS to handle dynamic START / STOP button text
      const button: Locator = page.locator(
        'button#start_stop'
      );
        // Click the button
        await button.click();

        // Wait for 2 seconds
        await page.waitForTimeout(2000);
    }
});*/


//using Playwright specific locators to handle dynamic elements
//getByRole with regex to match dynamic button text
import { test, expect } from '@playwright/test';

// Using Playwright specific locators
test('Handle Dynamic Elements using PW Locators', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Loop to click the button 5 times
  for (let i = 1; i <= 5; i++) {

    // Locate button by role and dynamic name
    const button = page.getByRole('button', { name: /START|STOP/ });

    // Click the button
    await button.click();

    // Wait for 2 seconds
    await page.waitForTimeout(2000);
  }
});

