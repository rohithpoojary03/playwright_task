//Hard vs soft assertion
//Hard assertion is an assertion that will stop the execution of the test if it fails. 
// It is used to verify that the application is in the expected state before performing any action on it. It is used to check if an element is visible, if it has the correct text, if it is enabled, etc.
//Soft assertion is an assertion that will not stop the execution of the test if it fails. 
// It is used to verify that the application is in the expected state after performing an action on it. It is used to check if an element is visible, if it has the correct text, if it is enabled, etc.
//Playwright provides a built-in assertion library which is used to perform assertions in the tests.


import { test, expect } from '@playwright/test';

test('Hard vs Soft Assertion', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

//1. Hard Assertion

/*await expect(page).toHaveTitle('Demo Web Shop2'); //hard assertion, if the title is not correct, the test will fail and stop execution
await expect(page).toHaveURL('https://demowebshop.tricentis.com/'); //hard assertion, if the URL is not correct, the test will fail and stop execution

const logo=await page.locator("img[alt='Tricentis Demo Web Shop']");//click on the logo to navigate to the home page
await expect(logo).toBeVisible(); *///hard assertion, if the logo is not visible, the test will fail and stop execution



//2. Soft Assertion
await expect.soft(page).toHaveTitle('Demo Web Shop2'); //soft assertion, if the title is not correct, the test will fail but continue execution
await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/'); //hard assertion, if the URL is not correct, the test will fail and stop execution

const logo=await page.locator("img[alt='Tricentis Demo Web Shop']");//click on the logo to navigate to the home page
await expect.soft(logo).toBeVisible(); 

await page.waitForTimeout(5000);

});