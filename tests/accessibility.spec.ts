//Accessibility Testing is a type of testing used to check whether a software application or website can be used by people with disabilities.
//ext that would be hard to read for users with vision impairments due to poor color contrast with the background behind it
//UI controls and form elements without labels that a screen reader could identify
//Interactive elements with duplicate IDs which can confuse assistive technologies


//-->WCAG -web content accessibility guidelines

import{test,expect} from '@playwright/test';

import AxeBuilder from "@axe-core/playwright";

test("Accessibility test",async({page},testinfo)=>{
    //await page.goto("https://demowebshop.tricentis.com/");

    await page.goto("https://www.w3.org/"); //full accessible no violation
    
//1.scanning detect all types of WCAG violoations
/*const accessibilityScanResults=await new AxeBuilder({page}).analyze();
console.log("Number of WCAG violations:",accessibilityScanResults.violations.length);

expect(accessibilityScanResults.violations).toEqual([]);
expect(accessibilityScanResults.violations.length).toEqual(0);*/


//2.scanning for few wcag violation
/*const accessibilityScanResults= await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();

await testinfo.attach("accessibility-scan-results",{
    body:JSON.stringify(accessibilityScanResults,null,2),
    contentType:"application/json"});

console.log("Number of violations:",accessibilityScanResults.violations.length);
expect(accessibilityScanResults.violations.length).toEqual(0);*/

//3.scanning for fe wcag violation with rules

const accessibilityScanResults= await new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();


await testinfo.attach("accessibility-scan-results",{
    body:JSON.stringify(accessibilityScanResults,null,2),
    contentType:"application/json"});

console.log("Number of violations:",accessibilityScanResults.violations.length);
expect(accessibilityScanResults.violations.length).toEqual(0);
});




