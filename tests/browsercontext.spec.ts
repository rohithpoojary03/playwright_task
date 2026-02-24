//Broiwser context test
// it is used to create incognito browser context and perform actions in that context
// it is used to create multiple browser contexts in the same test and perform actions in those contexts



import { test, expect,Locator,Page,chromium } from '@playwright/test';

/*test('Browser context demo', async ({ browser }) => {
chromium.launch(); // launch the browser 
 const context=await browser.newContext(); // create a new incognito browser context
 const page=await context.newPage();
 await page.goto('https://testautomationpractice.blogspot.com/');*/


//creating multiple pages in the same browser context 
test('Browser context demo', async () => { 
const browser=await chromium.launch();
const context=await browser.newContext();
const page1=await context.newPage();
const page2=await context.newPage();
console.log("Number of pages created:",context.pages().length);

await page1.goto('https://playwright.dev/');
await expect(page1).toHaveTitle(/Playwright/);
await page1.waitForTimeout(5000);


await page2.goto('https://www.selenium.dev/');
await expect(page2).toHaveTitle(/Selenium/);
await page2.waitForTimeout(5000);

});  