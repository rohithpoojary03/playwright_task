//download files
//used to download files from the application under test
//since file download dialog box is a system level dialog box which cannot be handled by playwright, we can use the page.waitForEvent('download') method to wait for the download event and then use the download.saveAs() method to save the downloaded file to a specific location


import { test, expect } from '@playwright/test';
import fs from 'fs';


test('Text File Download', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.locator("#inputText").fill("Hello World"); //provide some text to be downloaded
    await page.locator("#generateTxt").click(); //click on the generate text file button


    //start waiting for the download event before clicking on the download link    
    const [download]=await Promise.all(
    [
     page.waitForEvent('download'), //wait for the download event
     page.locator("#txtDownloadLink").click() //click on the download text file button
    ]);   

//save the downloaded file to a specific location
const downloadpath='downloads/HelloWorld.txt'; //provide the path where the downloaded file will be saved
await download.saveAs(downloadpath); //save the downloaded file to the specified location

//check if file exists in the specified location

const fileexists=fs.existsSync(downloadpath);//check if the file exists in the specified location
expect(fileexists).toBeTruthy(); //assert that the file exists in the specified location
console.log("File downloaded successfully...."); //print the status message


//cleanup - delete the downloaded file after the test is completed
if(fileexists)
{
    fs.unlinkSync(downloadpath); //delete the downloaded file
    console.log("Downloaded file deleted successfully...."); //print the status message
}


 await page.waitForTimeout(5000);

});    



//pdf file download

test.only('PDF File Download', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.locator("#inputText").fill("Hello World"); //provide some text to be downloaded
    await page.locator("#generatePdf").click(); //click on the generate text file button
    

    //start waiting for the download event before clicking on the download link    
    const [download]=await Promise.all(
    [
     page.waitForEvent('download'), //wait for the download event
     page.locator("#pdfDownloadLink").click() //click on the download text file button
    ]);   

//save the downloaded file to a specific location
const downloadpath='downloads/HelloWorld.pdf'; //provide the path where the downloaded file will be saved
await download.saveAs(downloadpath); //save the downloaded file to the specified location

//check if file exists in the specified location

const fileexists=fs.existsSync(downloadpath);//check if the file exists in the specified location
expect(fileexists).toBeTruthy(); //assert that the file exists in the specified location
console.log("File downloaded successfully...."); //print the status message


//cleanup - delete the downloaded file after the test is completed
if(fileexists)
{
    fs.unlinkSync(downloadpath); //delete the downloaded file
    console.log("Downloaded file deleted successfully...."); //print the status message
}


 await page.waitForTimeout(2000);

});    