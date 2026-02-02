//Duplicate drop down

import{test,expect,Locator} from '@playwright/test';
test("Single select drop down",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');

//Having duplicate 
const duplicateDropdown:Locator=page.locator('#colors>option');

//not having duplicate
//cons duplicateDropdown:Locator=page.locator('#animals>option');//try animals

const Dropdown:string[]=(await (duplicateDropdown.allTextContents())).map(text=>text.trim());
//array and tupple can have duplicate value
//Set cannot have duplicate value.
const myset=new Set<string>(); //set 
const duplicates:string[]=[]; //array

for(const text of Dropdown)
{
    if(myset.has(text))
    {
           duplicates.push(text);
    }
    else{
            myset.add(text);
    }
}
console.log("Duplicated options are:",duplicates)
if(duplicates.length>(0))
{
    console.log("Duplicate option found:",duplicates);
}
else{
    console.log("No duplicate found..");
}
expect(duplicates.length).toBe(0);//2
});