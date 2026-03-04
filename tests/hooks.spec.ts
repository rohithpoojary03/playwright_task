//hooks
//hooks are used to run some code before or after a test or a group of tests
//hooks are used to set up the test environment and clean up the test environment

//types
//beforeAll – runs once before all tests
//afterAll – runs once after all tests
//beforeEach – runs before every test
//afterEach – runs after every test



import { test, expect } from '@playwright/test';

test.beforeAll('Beforeall',async()=>{

    console.log('This is beofre all.....');
});

test.afterAll('Afterall',async()=>{

    console.log('This is After all.....');
});




test.beforeEach('Beforeeach',async()=>{

    console.log("This is before each.....")

})

test.afterEach('Aftereeach',async()=>{

    console.log("This is after each.....")

})

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
});