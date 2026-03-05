//parallel testing
//Parallel Testing means running multiple test cases at the same time on different environments instead of running them one by one.
//This helps reduce the total testing time and increase efficiency.




/* Run tests in files in parallel */
//-->fullyParallel: true, //done by rohith


/* Run tests in files in serial */
//-->fullyParallel: false, //done by rohith
//in serial mode 1 worker should be there

//-->we can change worker number in config file as we need

//-->fullyParallel: true,we can also run this inside specific browser
//paste this code into specifin broswer code section

//run time also we can specify the worker
//--> npx playwright test paralleltest.spec.ts --workers 4


import { test} from '@playwright/test';

//test.describe.configure({mode:'serial'});

//ctest.describe.configure({mode:'parallel'});
test.describe('Group1',async() => {
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

    test('test5', async () => {
        console.log('This is test 5');
});
});



    