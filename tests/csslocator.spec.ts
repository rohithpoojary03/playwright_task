//CSS
//css is cascading style sheets
//css is used to style html elements
//css is used to make html elements look better
//css is used to change the layout of html elements
//css is used to make html elements responsive
//css is used to add animations to html elements
//css is used to add transitions to html elements
//css is used to add effects to html elements
//css is used to create themes for html elements
//css is used to create custom styles for html elements

//types of css locators
// 1) absolute locator
// 2) relative locator
// 3) attribute locator

/* tag with id  tag#id  or #id */
/* tag with class  tag.class  or .class */
/* tag with attribute  tag[attribute='value']  or [attribute='value'] */
/* tag with multiple classes  tag.class1.class2  or .class1.class2 */
/* tag with multiple attributes  tag[attribute1='value1'][attribute2='value2']  or [attribute1='value1'][attribute2='value2'] */
/* tag with pseudo-class  tag:pseudo-class  or :pseudo*/
// # represents id
// . represents class

import { expect,test } from '@playwright/test';
test("verify css locators",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //tag with id 
    await expect(page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("input#small-searchterms").fill("T-Shirts");

//tag with class
await page.locator("input.search-box-text").fill("T-Shirts");

//tag with attribute
//tag[attribute='value']
await page.locator(".search-box-text[value='Search store']").fill("T-Shirts");
});



//Absolute locator starts from the root (html) and follows the full DOM path to the element, making it brittle and not recommended for automation.
//What “absolute locator” means

//It tells the browser/test tool:

//“Go from html → body → first div → next div → then p … exactly in this order.”