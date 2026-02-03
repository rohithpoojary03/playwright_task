//Auto suggest drop down;
import { test, expect, Locator } from '@playwright/test';

test("Bootstrap hidden drop down",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
 //Login page: 
await page.locator('input[name="username"]').fill('Admin'); 
await page.locator('input[name="password"]').fill('admin123');
await page.locator('button[type="submit"]').click();
  
//click on the PIM: 
await page.getByText('PIM').click(); 

// //click on job title: 
await page.locator('formm i').nth(2).click();
await page.waitForTimeout(3000);

//capture all the option from dropdown:
const options:Locator=page.locator("div[role='listbox'] span");

const count:number=await options.count();
console.log("Number of options in dropdown:",count);

//print all the options
console.log("All the text content:",await options.allTextContents());
console.log("printing all the options....");
for(let i=0;i<count;i++)
{
    //console.log(await options.nth(i).innerText());
    console.log(await options.nth(i).textContent());
}

//selecct/click on option
for(let i=0;i<count;i++)
{
    const text=await options.nth(i).innerText();
    if(text==='Automation Tester')
    {
        await options.nth(i).click();
        break;
    }
}
await page.waitForTimeout(5000);
});





