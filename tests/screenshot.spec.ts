//screenshot capture
//to capture screenshot, use page.screenshot() method
//it captures the screenshot of the current page and saves it in the specified path
//it returns a buffer of the screenshot which can be used to save the screenshot in the desired location



import { test, expect } from '@playwright/test';

test('Screenshot Capture', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');


    const timestamp=Date.now(); //get the current timestamp
    //capture screenshot of the entire page
    await page.screenshot({path:'screenshot/'+'homepage_'+timestamp+'.png'}); //provide the path where the screenshot will be saved and set fullPage to true to capture the entire page


//full page screenshot
await page.screenshot({path:'screenshot/'+'homepage_fullpage_'+timestamp+'.png',fullPage:true}); //provide the path where the screenshot will be saved and set fullPage to true to capture the entire page

    
//to capture screenshot of a specific element, use locator.screenshot() method
const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
   await logo.screenshot({path:'screenshot/'+'logo'+timestamp+'.png'}); //provide the path where the screenshot will be saved


//to capture perticular section of the page, use page.screenshot() method with clip option
await page.screenshot({path:'screenshot/'+'featuredproducts_'+timestamp+'.png', clip:{x:0,y:0,width:800,height:400}}); //provide the path where the screenshot will be saved and set clip option to capture the specific section of the page




    console.log("Screenshot captured successfully...."); //print the status message

});    




//to capture screenshot globally for all tests, we can set the screenshot option in the playwright.config.ts file

test.only('screenshot from the config file', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@13');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  
  

});    