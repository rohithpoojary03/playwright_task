import { test, expect } from '@playwright/test';

test.beforeEach('Launchinf app', async ({ page }) => {
  
await page.goto('https://demowebshop.tricentis.com/');
});

test('logotest', async ({ page }) => {
  await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test('title test', async ({ page }) => {
  expect(await page.title()).toContain("Demo Web Shop");
});

test('search test', async ({ page }) => {
  await page.locator('#small-searchterms').fill("laptop"); // fill teh text in search box
  await page.locator("input[value='Search']").click(); // click on the button
  await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
});



//1.using config file
//-->reporter:[['html',{open:'always','outputFolder':'html-report'}]]

//2.npx playwright test reporter.spec.ts --reporter=html


//list reporter
//3.reporter:[['html',{open:'always','outputFolder':'html-report'}],['list']]


//line reporter
//4.eporter:[['html',{open:'always','outputFolder':'html-report'}],['list'],['line']]


//dot reporter
//reporter:[['html',{open:'always','outputFolder':'html-report'}],['list'],['line'],['dot']]


//junit reporter
//reporter:[['html',{open:'always','outputFolder':'html-report'}],['list'],['line'],['dot'],['junit',{outputFile:'junit.xml'}]]


//json report
//reporter:[['html',{open:'always','outputFolder':'html-report'}],['list'],['line'],['dot'],['junit',{outputFile:'junit.xml'}],['json',{outputFile:'result.json'}]]