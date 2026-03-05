import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  //set the maximum time one test can run for global level
  //timeout: 60000, //done by rohith 

//grep:/@sanity/  //done by rohith

//set the maximum time for each assertion to be met global level
//expect: {timeout: 60000},//done by rohith 
  /* Run tests in files in parallel */
  fullyParallel: true, //done by rohith
  //run test in serial mode
  //fullyparallel: false, //done by rohith
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, 


  //retry locally for all tests
  //retries: 3,  //done by rohith 
  /* Opt out of parallel tests on CI. */ //workers
  workers: process.env.CI ? 1 : undefined,
  //workers:2, //done by rohith 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    video:'off', //record video only on failure
    //video:'retain-on-failure', //record video for all tests
    //video:'off', //disable video recording

//to take screenshot globally for all tests //done by rohith  
    //screenshot:'only-on-failure', //take screenshot only on failure
    //screenshot: 'only-on-failure', //take screenshot only on failure
    //screenshot: 'on', //take screenshot on every test
    //screenshot: 'on-first-failure', //take screenshot on first retry
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    //viewport: { width: 1280, height: 720 }, //done by rohith 
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
  },

  /* Configure projects for major browsers */
  projects: [
  {  //fullyParallel: true, //done by rohith
    name: 'chromium',
    use: {
      browserName: 'chromium',
      headless: false,
      viewport: null,
      launchOptions: {
        args: ['--start-maximized']
        
      }
    },
  },


    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
