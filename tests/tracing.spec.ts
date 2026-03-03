//tracing
//tracing is a tool that allows you to trace the execution of your code and see how it is executed. It is useful for debugging and understanding how your code works.

//ways to enable tracing in playwright
//1.using playwright.config.ts file
//2.npx playwright test tracing.spec.ts --headed --trace on 
//3. using start and stop tracing in the test file


//to view the trace file 
//1.from html report click on the trace file link trcce.zip
//2.npx playwright show-trace trace.zip
//3.utility-->https://trace.playwright.dev/ to view the trace file in the browser(drag and drop the trace.zip file in the browser)



import { test, expect } from '@playwright/test';

test('Tracing', async ({ page,context }) => {


    //start tracing
   context.tracing.start({ screenshots: true, snapshots: true });
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');


//stop tracing and export it into a zip file
//run the test
//save the zip file in the root directory of the project
//npx playwright show-trace trace.zip run this to view the trace file in the browser
  await context.tracing.stop({ path: 'trace.zip' });

});  



//to open the trace file
//npx playwright show-report