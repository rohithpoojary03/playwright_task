//popups
//popups is a library for creating popups in the browser. It is built on top of the native browser APIs and provides a simple and consistent interface for creating and managing popups.


import { test, expect,Locator,Page,chromium } from '@playwright/test';

test('Popups demo', async ({browser}) => {
    const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://testautomationpractice.blogspot.com/');


//multiple popups
//page.waitForEvent('popup');
//await page.locator('#PopUp').click();

await Promise.all([page.waitForEvent('popup'), page.locator('#PopUp').click()]);
const allpopupwindows=context.pages();
console.log("Number of popups opened:",allpopupwindows.length);

console.log(allpopupwindows[0].url());
console.log(allpopupwindows[1].url());

for(const pw of allpopupwindows)
    {
const title=await pw.title();
if(title.includes("Playwright"))
{
    await pw.locator('.getStarted_Sjson').click();
    await pw.close();
}
    }
    await page.waitForTimeout(5000);
});    