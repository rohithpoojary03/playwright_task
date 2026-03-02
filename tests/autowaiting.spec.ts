//auto waiting test
//auto waiting is a feature of playwright which automatically waits for the element to be visible, enabled and stable before performing any action on it
//this test verifies that the application correctly waits for the element to be visible, enabled and stable before performing any action on it

import { test, expect } from '@playwright/test';

test('Auto Waiting Test', async ({ page }) => {

//default timeout for this test is 30 seconds, if the element is not visible, enabled and stable within 30 seconds, the test will fail
//test.slow(); //mark this test as slow to increase the timeout for this test to 90 seconds only for this test since we are waiting for the element to be visible, enabled and stable before performing any action on it


//set the timeout for this test to 60 seconds only for this test since we are waiting for the element to be visible, enabled and stable before performing any action on it
    test.setTimeout(60000); //set the timeout for this test to 60 seconds
    await page.goto('https://demowebshop.tricentis.com/'); //navigate to the application under test

//assertion-auto wait works
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/'); //assert the URL of the page
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:5000}); //assert the visibility of the element

//Action-auto wait works
//force:true is used to perform the action on the element even if it is not visible, enabled and stable
    await page.locator('#small-searchterms').fill('laptop',{force:true});  //fill the search input field with the search term
    await page.locator('.button-1.search-box-button').click({force:true}); //click on the search button

     


});    