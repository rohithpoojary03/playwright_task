//Browser settings test
//This test verifies that the application correctly handles browser settings such as viewport size, user agent, and geolocation.
//Browser settings are important for testing the responsiveness of the application, simulating different devices, and testing location-based features.


import { test, expect ,chromium} from '@playwright/test';

test('Browser Settings Test', async () => {

//browser-->context-->page
const browser=await chromium.launch({headless:false}); //launch the browser in headed mode to see the changes in the browser settings
//const browser=await chromium.launch({headless:true}); //launch the browser in headless mode to run the tests in the background without opening the browser window

const context=await browser.newContext(

{
    viewport:{width:1200,height:800 }, //set the viewport size to 1200x800 pixels to test the responsiveness of the application
    locale:'en-US', //set the locale to English (United States) to test the application in different languages and regions
    //proxy:{server:'http://myproxy.com:8080',username:'user1',password:'password1'}, //set the proxy server to test the application in different network conditions

//SSL-secure socket layer
//ssl is a security protocol that provides secure communication over the internet by encrypting the data transmitted between the client and the server. 
//It is commonly used to protect sensitive information such as login credentials, credit card details, and personal data from being intercepted by malicious actors. 
// In Playwright, you can configure SSL settings to test how your application handles secure connections and to ensure that it works correctly with SSL certificates.

ignoreHTTPSErrors:true, //ignore HTTPS errors to test the application with self-signed certificates or in development environments where SSL is not properly configured


}

);
const page=await context.newPage();



//await page.goto("https://www.google.com/"); //navigate to the application under test
await page.goto("https://expired.badssl.com/"); //navigate to the application under test
console.log("Page title: ",await page.title()); //print the page title to verify that the page is loaded successfully


await page.waitForTimeout(3000); //wait for some time to see the changes in the browser settings

});    