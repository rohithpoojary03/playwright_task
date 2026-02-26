//Automatic scrolling test
// it is used to handle the automatic scrolling in the browser when the element is not visible in the viewport


import { test, expect } from '@playwright/test';

test('Automatic scrolling demo', async ({ page }) => {

await page.goto('https://demowebshop.tricentis.com/');
//footer element locator=auto scroll to the footer element

const footer:string=await page.locator('.footer-disclaimer').innerText();
console.log("Footer text: "+footer);

await page.waitForTimeout(5000);
});

test('scrolling inside dropdown', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#comboBox').click();

  const option =page.locator('#dropdown div:nth-child(100)'); // locator for the 10th option in the dropdown

  console.log("Option captured from dropdown:",await option.innerText());
  await option.click(); // click on the 10th option in the dropdown

  await page.waitForTimeout(3000);
});


test.only('scrolling inside the table', async ({ page }) => {

  await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');

  const name=await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText(); // locator for the 50th row and 1st column in the table
 console.log("Name captured from table:",name);


 const email=await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText(); // locator for the 50th row and 2nd column in the table
 console.log("Email captured from table:",email);
});