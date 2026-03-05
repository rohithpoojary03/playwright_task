//visual test
//Visual Testing (or Visual UI Testing) is a type of testing used to verify that the user interface of an application looks correct and consistent to the user.
//It checks whether the layout, colors, fonts, images, and elements appear correctly on the screen.

import { test, expect } from '@playwright/test';

test('Visual Test', async ({ page }) => {

await page.goto("https://demowebshop.tricentis.com/")

//comapre snapshot of the page
//approach 1
//run the test it will give error but create snapshot folder within ur visual test folder then run again
expect(await page.screenshot()).toMatchSnapshot("homepage.png");

//approach 2

//if mistakenly we go to another page it will give error
//await page.goto("https://demowebshop.tricentis.com/register")

//await expect(page).toHaveScreenshot();


//comapre snapshot of the specific element

//here no error bcz logo is same in both pages
///await page.goto("https://demowebshop.tricentis.com/register")

const logo = page.locator("img[alt='Tricentis Demo Web Shop']")
expect(await logo.screenshot()).toMatchSnapshot("logo.png");


});    