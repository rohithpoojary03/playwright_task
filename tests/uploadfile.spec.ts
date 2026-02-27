//upload files
//used to upload files to the application under test
//filechooser is a class which is used to handle file upload dialog box
//setInputFiles is a method of filechooser class which is used to set the file to be uploaded

//since file upload dialog box is a system level dialog box which cannot be handled by playwright, we can use setInputFiles method to set the file to be uploaded

import { test, expect } from '@playwright/test';        
test('File Upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#singleFileInput").setInputFiles('upload/Day26-Tables-Lab+Assignment.pdf'); //provide the path of the file to be uploaded
   await page.locator("button:has-text('Upload single file ')").click(); //click on the upload button
const msg=await page.locator('#singleFileStatus').textContent(); //get the text of the status message
expect(msg).toContain('Day26-Tables-Lab+Assignment.pdf'); //assert the status message
console.log("Upload successful...."); //print the status message

await page.waitForTimeout(5000);
});   


//multiple file upload
test.only('Multiple File Upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#multipleFilesInput").setInputFiles(['upload/Day26-Tables-Lab+Assignment.pdf','upload/Day27-DatePickers-Labs.pdf']); //provide the path of the files to be uploaded
    await page.locator("button:has-text('Upload multiple files')").click(); //click on the upload button

    const msg=await page.locator('#multipleFilesStatus').textContent(); //get the text of the status message
    expect(msg).toContain('Day26-Tables-Lab+Assignment.pdf'); //assert the status message
    expect(msg).toContain('Day27-DatePickers-Labs.pdf'); //assert the status message
    console.log("Multiple Upload successful...."); //print the status message
await page.waitForTimeout(5000);
});