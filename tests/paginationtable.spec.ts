//paginationtable
//A pagination table is a table that splits large data into multiple pages instead of showing everything at once.

import { test, expect, Locator } from "@playwright/test";
test("paginationtable", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

let hasmorepages=true;

//const rows=await page.locator("#example tbody tr").all();
/*for(let row of rows)
{
    console.log(await row.innerText());

}*/

while(hasmorepages)
{
     const rows=await page.locator("#example tbody tr").all();
     for(const row of rows)
     {
        console.log(await row.innerText());
     }

await page.waitForTimeout(2000);

//button[aria-label='Next']
//button[aria-controls='example']:has-text(",")
//button[aria-controls='example']:nth-child(9  )

const nextButton:Locator=page.locator("button[aria-label='Next']");
const isDisabled=await nextButton.getAttribute('class');
if(isDisabled?.includes("disabled"))
{
    hasmorepages=false;
}
else{
    await nextButton.click();

}
}
//await page.waitForTimeout(5000);



});

test("Filter rows and check the rows count", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

  const dropdowns:Locator=await page.locator('#dt-length-0');
  await dropdowns.selectOption({label:'25'});
//Approach 1
  const rows=await page.locator("#example tbody tr").all();
  expect(rows.length).toBe(25);//assertion
//Approach 2
  const rows2=await page.locator("#example tbody tr");
  await expect(rows2).toHaveCount(25);


});
test.only("Searching rows and check the rows count", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

const searchbox:Locator=page.locator('#dt-search-0');
await searchbox.fill('Paul Byrd');

await page.waitForTimeout(5000);
const rows=await page.locator("#example tbody tr").all();
if(rows.length>=1)
{
    let matchfound=false;
    for(let row of rows)
    {
        const text=await row.innerText();
        if(text.includes('Paul Byrd'))
        {
            console.log("Record exist- found");
            matchfound=true;
            break;

        }
    }
    //expect(matchfound).toBe(true);
    expect(matchfound).toBeTruthy();
}
else{
    console.log("Record not found");
}
}); 




