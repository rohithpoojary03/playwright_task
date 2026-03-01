//cookies test
//cookies are small pieces of data that are stored on the client side by the browser. They are used to store user preferences, session information, and other data that can be used to personalize the user experience.
//In Playwright, you can use the page.context().cookies() method to get the cookies for the current page, and the page.context().addCookies() method to add cookies to the browser context.


import { test, expect,chromium } from '@playwright/test';

test('Cookies Test', async () => {

const browser=await chromium.launch({headless:false}); //launch the browser in headed mode to see the cookies in the browser
const context=await browser.newContext();
const page=await context.newPage();

context.addCookies([
    {name:"cookie1",value:"value1",domain:".automationpractice.pl",path:"/"},
    {name:"cookie2",value:"value2",domain:".automationpractice.pl",path:"/"}]); //add cookies to the browser context

console.log("Cookies added to the browser context..."); //print the status message
await page.goto('https://www.automationpractice.pl/index.php'); //navigate to the application under test


//get the cookies for the current page

const cookiesadded=await context.cookies(); //get the cookies for the current page

const retrievedcookie1=cookiesadded.find((i)=>i.name==='cookie1'); //find the cookie with name 'cookie1' in the cookies array
const retrievedcookie2=cookiesadded.find((i)=>i.name==='cookie2'); //find the cookie with name 'cookie2' in the cookies array

console.log("Retrieved Cookie 1: ",retrievedcookie1); //print the retrieved cookie 1
console.log("Retrieved Cookie 2: ",retrievedcookie2); //print the retrieved cookie 2


expect(retrievedcookie1?.value).toBe("value1"); //assert the value of cookie 1
expect(retrievedcookie2?.value).toBe("value2"); //assert the value of cookie 2

expect(retrievedcookie1).toBeDefined(); //assert that cookie 1 is defined
expect(retrievedcookie2).toBeDefined(); //assert that cookie 2 is defined



//get all cookies for the current page and print their names and values
console.log("total number of cookies:",cookiesadded.length); //print the status message

expect(cookiesadded.length).toBeGreaterThan(0); //assert that at least 2 cookies are present in the browser context

console.log("Cookies retrieved successfully...."); //print the status message
for(const cookie of cookiesadded)
    {

    console.log(`${cookie.name}: ${cookie.value}`); //print the name and value of each cookie

    }

//cleaer the cookies after the test is completed
await context.clearCookies(); //clear the cookies from the browser context
console.log("Cookies cleared from the browser context..."); //print the status message

//verify that the cookies are cleared from the browser context
const cookiesafterclear=await context.cookies(); //get the cookies for the current page after clearing the cookies
console.log("Cookies after clearing: ",cookiesafterclear.length); //print the cookies after clearing

expect(cookiesafterclear.length).toBe(0); //assert that no cookies are present in the browser context after clearing the cookies
console.log("Cookies cleared successfully...."); //print the status message

await page.waitForTimeout(3000); //wait for some time to see the cookies in the browser
});    