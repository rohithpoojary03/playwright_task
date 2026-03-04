//Tagging
//Tagging is the process of assigning labels (tags) to test cases so that specific groups of tests can be easily identified, organized, and executed during test runs.
//Tags help testers run only selected tests based on categories like smoke, regression, or sanity.


//to run all sanity check to specific test
//to run--> npx playwright test tagging.spec.ts --grep "@sanity"
//npx playwright test tagging.spec.ts --grep "@regression"

//to run both -->should have both sanity and regression
//-->npx playwright test tagging.spec.ts --grep(?=.*@sanity)(?=.*@regression)


//to run either sanity or regression
//-->npx playwright test tagging.spec.ts --grep "@sanity|@regression"


//run sanity test which are not belong to regression
//npx playwright test tagging.spec.ts --grep "@sanity" --grep invert "@regression"

//run using config file 
//grep:/@sanity/ 


import { test, expect } from '@playwright/test';
//1.@sanity -->sanity is user defined
test('@sanity @regression Check the title of the home page', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
    console.log('test 1 is running...');
});


//2.{tag:'@sanity'}
test('Check the title of the home page',{tag:'@sanity'} ,async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
console.log('test 2 is running...');
});

//3.{tag:'@regression'}
test('Check the navigation to the store page',{tag:'@regression'} ,async ({ page }) => {

  await page.goto('https://store.google.com/?hl=en-IN&pli=1');

  await expect(page.getByText('Popular on the Google Store')).toBeVisible();

  console.log('test 3 is running...');
});

//4.{tag:['@sanity','@regression']}
test('Check the top recommendations',{tag:['@sanity','@regression']} ,async ({ page }) => {

  await page.goto('https://store.google.com/?hl=en-IN&pli=1');

  await expect(
    page.getByRole('heading', { name: /Switch to Google Pixel/i })
  ).toBeVisible();

  console.log('test 4 is running...');

});
