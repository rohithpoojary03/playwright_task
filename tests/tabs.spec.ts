//tabs
//tabs should be able to switch between different content when clicked
//tabs is a component that allows users to switch between different content by clicking on the tab headers

import{test,expect,chromium,Locator} from '@playwright/test';   
test('Tabs demo', async () => {

const browser=await chromium.launch();
const context=await browser.newContext();
//creating 1 page
const parentpage=await context.newPage();
parentpage.goto('https://testautomationpractice.blogspot.com/');

// 2 statements should be executed at the same time, one is waiting for the new page to open and the other is clicking on the button that opens the new page
//context.waitForEvent('page'); //pending,fullfilled,rejected
//parentpage.locator("button:has-text('New tab')").click(); //opens new tab6
const [childpage]=await Promise.all([context.waitForEvent('page'),parentpage.locator("button:has-text('New tab')").click()]); 


//approach 1:switch between pages and get the title of the page
const pages=context.pages();
console.log("Number of pages created:",pages.length);

console.log("Title of the parent page:",await pages[0].title());
console.log("Title of the child page:",await pages[1].title());


//approach 2:alternative way to switch between pages and get the title of the page
console.log("Title of the parent page:",await parentpage.title());
console.log("Title of the child page:",await childpage.title());

await parentpage.waitForTimeout(5000);
await childpage.waitForTimeout(5000);
});    