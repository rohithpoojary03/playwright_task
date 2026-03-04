//grouping 
// grouing is a way to organize your tests into logical groups.
//  It helps to run specific groups of tests based on the requirement.

//ways to group tests in playwright


//1.using fullyallparallel: false, //done by rohith in config file

/*import { test, expect } from '@playwright/test';

test('test1', async () => {
    console.log('This is test 1');
});

test('test2', async () => {
    console.log('This is test 2');
});


test('test3', async () => {
    console.log('This is test 3');
});

test('test4', async () => {
    console.log('This is test 4');
});*/




//2.describe block
//to run--> npx playwright test grouping.spec.ts --grep Group1


import { test, expect } from '@playwright/test';

test.describe('Group1',async() => {

test('test1', async () => {
    console.log('This is test 1');
});

test('test2', async () => {
    console.log('This is test 2');
});
});



test.describe('Group2',async() => {

test('test3', async () => {
    console.log('This is test 3');
});

test('test4', async () => {
    console.log('This is test 4');
});
});
