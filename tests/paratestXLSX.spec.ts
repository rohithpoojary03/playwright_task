
//->npm install xlsx


import { test, expect } from '@playwright/test';
import fs from 'fs';

import * as XLSX from 'xlsx';


//load excel file

const excelPath="json-and-csv-testdata/Data.xlsx";
const workbook=XLSX.readFile(excelPath);
const sheetName=workbook.SheetNames[0];
const worksheet=workbook.Sheets[sheetName];
const records=XLSX.utils.sheet_to_json(worksheet);

//convert sheet into json

const loginTestData:any=XLSX.utils.sheet_to_json(worksheet);




//main test

test.describe("Login data driven Test", async() => {

for (const  {email, password, validity } of loginTestData) {

    test(`Login test with email: "${email}" and password: "${password}"`, async ({ page }) => {

      await page.goto('https://demowebshop.tricentis.com/login');

      // Fill login form
      await page.locator('#Email').fill(email);
      await page.locator('#Password').fill(password);
      await page.locator('input[value="Log in"]').click();

      if (validity.toLowerCase() === 'valid') {

        const logoutLink = page.locator('a[href="/logout"]');
        await expect(logoutLink).toBeVisible({ timeout: 5000 });

      } else {

        const errorMessage = page.locator('.validation-summary-errors');
        await expect(errorMessage).toBeVisible({ timeout: 5000 });

        await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');

      }

    });

  }
  
});


  

