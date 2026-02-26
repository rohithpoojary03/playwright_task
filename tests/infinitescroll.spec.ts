//infinte scroll test
// it is used to handle the infinite scrolling in the browser when the element is not visible in the viewport and we need to scroll down to load more elements


import { test, expect } from '@playwright/test';

test('Infinite scroll demo', async ({ page }) => {

    test.slow(); // slow down the test execution to see the scrolling effect
await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');
//window.scrollTo(0, document.body.scrollHeight); // scroll to the bottom of the page to load more elements

let previousheight = 0;
while(true)
     {
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
      
});         
