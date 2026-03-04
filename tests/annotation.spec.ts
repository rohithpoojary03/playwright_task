//Annotations
//Annotations in Playwright are special markers added to tests to control their execution or provide additional information about them.
//hey help testers skip tests, focus on specific tests, mark expected failures, or categorize tests during execution.

//only,skip,fail,fixme,slow


import { test, expect } from '@playwright/test';


//only
//test.only('test1', async ({page}) => {
test('test1', async ({page}) => {
   await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('test 1 is running...');
});


test.skip('test2', async ({page}) => {
   await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('test 2 is running...');
});    

//skip the test based on condition
test.skip('test3', async ({page,browserName}) => {

    test.skip(browserName==='chromium','this test skipped if browser is chromium')
   await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('test 3 is running...');
});

//fail
test.fail('test4', async ({page}) => {
   await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('test 4 is running...');
});

//fixme
test.fixme('test5', async ({page}) => {
   await page.goto('https://www.google.com/');
    //No assertion
    console.log('test 5 is running...');
});

//slow
test('test6', async ({page}) => {
    test.slow(); //triple the default timeout(default:30sec,after this 90sec)
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('test 6 is running...');
});