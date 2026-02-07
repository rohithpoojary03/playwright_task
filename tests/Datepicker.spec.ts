//Date pcikers

import { test, expect, Locator,Page } from '@playwright/test';


async function selectDate(targetyear:string,targetmonth:string,targetdate:string,page:Page,isFuture:boolean)
{
 while(true)
{
   const selectedmonth=await page.locator('.ui-datepicker-month').textContent();
   const selectedyear=await page.locator('.ui-datepicker-year').textContent();
    
   if(selectedmonth?.trim()===targetmonth && selectedyear?.trim()===targetyear)
   {
    break;
   }   


 if(isFuture)
 {
 await page.locator('.ui-datepicker-next').click();  //Future
 }
 else{
 await page.locator('.ui-datepicker-prev').click();   //Past
 } 
 //await page.waitForTimeout(2000);
 }
 /*const allDates=await page.locator(".ui-datepicker-calender td").all();
 for(let dates of allDates)
 {
   const dateText= await dates.innerText();
   if(dateText===date)
   {
    await dates.click();
    break;
   }
    
 }*/


   
 const allDates=await page.locator(".ui-datepicker-calendar td").all();
 for(let dates of allDates)
 {
 const dateText= await dates.innerText();
   if(dateText===targetdate)
   {
    await dates.click();
    break;
   }
    
 }
}


test("Date picker",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const dateInput:Locator=page.locator("#datepicker");
await expect(dateInput).toBeVisible();

//xpect(dateInput).toBeVisible();

//1)using fill() method
/*datepicker.fill("07/02/2026");   //mm/dd/yy
await page.waitForTimeout(5000);*/

await dateInput.click(); //opens date picker

/*//past target date
const year='2023';
const month='May';
const date='22';*/

//Future target date
const year='2028';
const month='July';
const date='14';

await selectDate(year,month,date,page,true);
const expecteddate='07/14/2028';
await expect(dateInput).toHaveValue(expecteddate);
await page.waitForTimeout(2000);

});