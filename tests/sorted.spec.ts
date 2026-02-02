//sorted dropdown

import{test,expect,Locator} from '@playwright/test';
test("Single select drop down",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

//const Dropdownoption:Locator=page.locator('#colors>option');
const Dropdownoption:Locator=page.locator('#animals>option');//try animals
console.log(await Dropdownoption.allTextContents());

const  optiontext:string[]=(await Dropdownoption.allTextContents()).map(text=>text.trim());
const originallist:string[]=[...optiontext];//... spread operator
const sortedlist:string[]=[...optiontext.sort()]; //array sort is mutable
console.log("original list",originallist);
console.log("sorted list",sortedlist);

expect(originallist).toEqual(sortedlist); //this will give error

 //await page.waitForTimeout(3000);
});