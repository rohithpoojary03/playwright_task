//Bootstrapdropdown
//1)static drop down(select tag)
//A static dropdown is simply a dropdown built using the HTML <select> tag`, where the options are already present in the DOM (they don’t load dynamically from an API).
//2)Dynamic drop down/Auto suggest drop down
//A dynamic dropdown is a dropdown NOT built with the <select> tag.
//Its options are usually loaded at runtime (via JavaScript / API) and rendered using tags like
//3)hidden drop down
//A hidden dropdown is a dropdown where the options exist in the DOM but are not visible until some user action (hover, click, focus).
//Automation fails if you try to click options before they become visible.


//Autosuggest Drop down
import{test,expect,Locator} from "@playwright/test";
test("Auto suggest drop down",async({page})=>{
await page.goto("https://www.flipkart.com/");
await page.locator("input[name='q']").fill("smart");
await page.waitForTimeout(5000);
//get all suggeted options -->ctrl+shift+p on DOM-->emulated focused page
const options:Locator=page.locator("ul>li");
const count=await options.count();
console.log("Number of suggested options:",count);

await page.waitForTimeout(3000);
//return the text of perticular item
//console.log("5th option:",await options.nth(5).innerText());
//printing all the suggested options in the console
for(let i=0;i<count;i++)
{
    //console.log("5th option:",await options.nth(i).innerText());
    console.log(await options.nth(i).textContent());
    //console.log(await options.nth(i).allTextContents());
}
await page.waitForTimeout(2000);
//select/click on the smartphone option
for(let i=0;i<count;i++)
{
   const text=await options.nth(i).innerText();
   if(text==='smartphone')
   {
    await options.nth(i).click();
    await page.waitForTimeout(2000);
    break;
    
   }
}
});