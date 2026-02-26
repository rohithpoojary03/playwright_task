//Mouse action tests
// it is used to handle the mouse actions in the browser by using the mouse object


import { test, expect } from '@playwright/test';

test('Mouse action demo', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');
const pointme=page.locator('.dropbtn');
await pointme.hover();
const laptops=page.locator('.dropdown-content a:nth-child(2)');
laptops.hover();
await page.waitForTimeout(5000);

});


test('Mouse Right click action demo', async ({ page }) => {

await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
const button=page.locator('span.context-menu-one');
await button.click({button:'right'}); // right click action

await page.waitForTimeout(3000);

});

test('Double click action demo', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');
const btncopy=page.locator('button[ondblclick="myFunction1()"]');
await btncopy.dblclick(); // double click action

const textfield=page.locator('#field2');
await expect(textfield).toHaveValue('Hello World!'); // assertion to verify the double click action

await page.waitForTimeout(3000);

});


test.only('Drag and Drop action demo', async ({ page }) => {

  await page.goto('https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE');

  // Target ONLY the result iframe
  const frame = page.frameLocator('iframe.result-iframe');

  const rome = frame.locator('#box6');
  const italy = frame.locator('#box106');

  //await rome.dragTo(italy);
   await rome.hover();
   await page.mouse.down();
    await italy.hover();
    await page.mouse.up();


  //approach 2: using mouse move and mouse down and mouse up actions
  const washington = frame.locator('#box3');
  const usa = frame.locator('#box103');

  await washington.dragTo(usa); // using dragTo method


  await page.waitForTimeout(5000);
});