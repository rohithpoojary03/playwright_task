//Shadow Dom Test
//This test verifies that the application correctly interacts with elements inside a shadow DOM.
//Shadow DOM is a web standard that allows developers to encapsulate their HTML, CSS, and JavaScript, creating a separate DOM tree for a component. This helps in avoiding style and behavior conflicts with the main document.


import { test, expect } from '@playwright/test';

test('Shadow Dom Test', async ({ page }) => {
    await page.goto('https://books-pwakit.appspot.com/'); //navigate to the application under test
 
    await page.locator('#input').fill('Playwright automation'); //fill the search input field with the search term
    await page.keyboard.press('Enter'); //press enter to perform the search
    await page.waitForTimeout(3000); //wait for the search results to load

    const booksfound=await page.locator('h2.title').all();
    console.log("Books found: ",booksfound.length); //print the number of books found

    //assert that at least one book is found
    expect(booksfound.length).toBe(5); //assert that at least one book is found
    console.log("Books found successfully...."); //print the status message
});    


test.only('shadow dom 2nd test', async ({ page }) => {
    await page.goto("https://shop.polymer-project.org/"); //navigate to the application under test

    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click(); //click on the men's outerwear category link
    

    await page.locator('div.title').first().waitFor(); //wait for the product titles to be visible
    const productfound=await page.locator('div.title').all(); //get all the product titles
    console.log("Products found: ",productfound.length); //print the number of products found

    //assert that at least one product is found
    expect(productfound.length).toBe(16); //assert that at least one
    await page.waitForTimeout(5000); //wait for some time before closing the browser
    console.log("Products found successfully...."); //print the status message
});   