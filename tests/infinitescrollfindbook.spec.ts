
import { test, expect } from '@playwright/test';

test('To find a book in infinite scroll demo', async ({ page }) => {

    test.slow(); // slow down the test execution to see the scrolling effect
await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');
//window.scrollTo(0, document.body.scrollHeight); // scroll to the bottom of the page to load more elements

let previousheight = 0;
let bookFound = false;
while(true)
     {

const title = await page.locator('#productsDiv h3').allTextContents();
if(title.includes("The Ink Black Heart"))
{
    console.log("Book found");
    bookFound = true;
    expect(bookFound).toBeTruthy();
    break;
}
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight); // scroll to the bottom of the page
         // wait for 2 seconds to load more elements
        
        });
        await page.waitForTimeout(2000);


        //capture the current height of the page after scrolling
        const currentheight =await page.evaluate(() => {
           return document.body.scrollHeight; // scroll to the bottom of the page to load more elements
        })
        console.log("Previous height: ",previousheight);
        console.log("Current height: ",currentheight);

        if(currentheight === previousheight)
        {
            break;
        }
        previousheight = currentheight;
    }
console.log("Reached the end of the page");
if(!bookFound){
    console.log("Book not found");
   
}
});         
