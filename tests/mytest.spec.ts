 

//syntax
/*test( "title",()=> {
    //step 1
    //step 2
    //assertion
});*/

/*test("Verify the title of the page",async ({page})=> {
    //step 1: navigate to the url
     await page.goto("https://demo.opencart.com/");
     let title:string = await page.title();
     console.log("title of the page is: ", title);
   await  expect(page).toHaveTitle("Your Store");

}); */

//await is used to pause code execution until an asynchronous operation finishes, so the next line runs with valid data and state.
import {expect, test} from '@playwright/test'; 
test("Verify the title of the page", async ({ page }) => {
  await page.goto(
    "https://gauravkhurana.in/test-automation-play/",
    { waitUntil: "domcontentloaded" }
  );

  await expect(page).toHaveTitle("Test Automation Practice Hub");

  const title = await page.title();
  console.log("Title of the page is:", title);

  const url = page.url();
  console.log("Current URL is:", url);

  await expect(page).toHaveURL(
    "https://gauravkhurana.in/test-automation-play/"
  );
});

