//Action
//action is used to perform operations on the web elements
//like click, type, select etc.

//input text action
import {test, expect,Locator} from "@playwright/test";
test('Text input action demo', async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const textbox:Locator=page.locator('#name');
await expect(textbox).toBeVisible();
await expect(textbox).toBeEnabled();
const maxLength:string | null=await textbox.getAttribute("maxlength"); //returns the max length of the textbox
//await textbox.fill("Playwright Automation");
//await expect(textbox).toHaveValue("Playwright Automation");
expect(maxLength).toBe("15");
await textbox.fill("Jhon Cannady");
console.log("text content of Firstname:",await textbox.textContent());
console.log("value of Firstname:",await textbox.inputValue());//inputValue() returns the value entered in the textbox
const enteredValue:string=await textbox.inputValue();
expect(enteredValue).toBe("Jhon Cannady");
await page.waitForTimeout(3000);
});


//Radio button action
//only used to execute only this perticular test
test('Radio button action demo', async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const maleRadio:Locator=page.locator('#male');
await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
await maleRadio.check();
expect(await maleRadio.isChecked()).toBe(true);
expect(maleRadio).toBeChecked
await page.waitForTimeout(3000);
console.log("check for radion button selected",await maleRadio.isChecked());
});  


//check box action
test.only('Check box action demo', async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//using getByLablel specific check box
const sundaycheckbox:Locator=page.getByLabel('Sunday');
await sundaycheckbox.check();
expect(await sundaycheckbox.isChecked()).toBe(true);
await expect(sundaycheckbox).toBeChecked();
console.log("Check box is selected:",await sundaycheckbox.isChecked());

//select all the chek box
const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));
expect(checkboxes.length).toBe(7);

//make all check box marked
for(const checkbox of checkboxes)
{
    await checkbox.check();
    await expect (checkbox).toBeChecked();
} 
await page.waitForTimeout(2000);
//uncheck last 3 checkbox and assert
for(const checkbox of checkboxes.slice(-3))
{
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}
await page.waitForTimeout(5000);
//Toggle checkbox:if checked uncheck,if unchecked ,check.

for(const checkbox of checkboxes)
{
    if (await checkbox.isChecked())
    {
    //only if unchecked
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
 
    }
    else{
    //only if checked
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}}

await page.waitForTimeout(2000);

//random check box select
const indexes=[1,3,6];
for(const i of indexes)
{
 await checkboxes[i].check();
 await expect(checkboxes[i]).toBeChecked();

}
await page.waitForTimeout(2000);

//select check box based on the label
const weekname:string="Friday";
for(const label of days)
{
    if(label.toLowerCase()===weekname.toLowerCase())
    {
    const checkbox=page.getByLabel(label);
    checkbox.check();
    await expect(checkbox).toBeChecked();
    }
}
await page.waitForTimeout(3000);
});