//Allure Report is a popular tool used to create beautiful and detailed test reports for automation frameworks like Playwright, Selenium, Cypress, etc.import { test, expect } from '@playwright/test';

//install package
//-> npm install -D allure-playwright

//then install
//npm uninstall -g allure-commandline
//then download allure zip file place in program files then open enviornment variable and add the path for the allure report 


//to genarate report
//-->  allure generate ./allure-results -o ./allure-report

//to open report
//--> allure open ./allure-report


//to overwrite the report
//--> allure generate ./allure-results -o ./allure-report --clean

import { test, expect } from '@playwright/test';

test.beforeEach('Launchinf app', async ({ page }) => {
  
await page.goto('https://demowebshop.tricentis.com/');
});

test('logotest', async ({ page }) => {
  await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test('title test', async ({ page }) => {
  expect(await page.title()).toContain("Demo Web Shop1");
});

test('search test', async ({ page }) => {
  await page.locator('#small-searchterms').fill("laptop"); // fill teh text in search box
  await page.locator("input[value='Search']").click(); // click on the button
  await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
});
