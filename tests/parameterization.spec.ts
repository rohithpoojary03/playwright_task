//parametrization
//Parameterization in testing means running the same test case multiple times with different input data instead of writing separate test cases for each input.


import { test, expect } from '@playwright/test';


//test data

const searchitem:string[]=['laptop','Gift card','smartphone','monitor'];


//using for-of-loop
/*for(const item of searchitem)
{

//-->'Search Test for ${item}` this is for evry time loop run without this element it will give duplicate error
test(`Search Test for ${item}`, async ({ page }) => {

await page.goto('https://demowebshop.tricentis.com/');
await page.locator('#small-searchterms').fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
});
}*/


//using forEach function

/*searchitem.forEach((item)=>{

test(`Search Test for ${item}`, async ({ page }) => {

await page.goto('https://demowebshop.tricentis.com/');
await page.locator('#small-searchterms').fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
}); 
});*/

//describe block

test.describe("Searching itesms",async()=>{


 searchitem.forEach((item)=>{

test(`Search Test for ${item}`, async ({ page }) => {

await page.goto('https://demowebshop.tricentis.com/');
await page.locator('#small-searchterms').fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
}); 
});
});