//Static Drop down list:


import{test,expect,Locator} from '@playwright/test';
test("Single select drop down",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');
//select option from the drop down
//by using visible text
await page.locator('#country').selectOption('india');  
await page.waitForTimeout(2000);
//by using value attribute
await page.locator('#country').selectOption({value:'uk'});
await page.waitForTimeout(2000);
//by using label
await page.locator('#country').selectOption({label:'India'});
await page.waitForTimeout(2000);
//by using index
await page.locator('#country').selectOption({index:3});
await page.waitForTimeout(3000);

//check number of option in the dropdown(count)
const dropdownoption:Locator=page.locator('#country>option');
await expect(dropdownoption).toHaveCount(10);
const count=await dropdownoption.count();
console.log("Number of countries:",count);
await page.waitForTimeout(2000)

//check an option present in the drop down:
const optiontext:string[]=(await dropdownoption.allTextContents()).map(text=>text.trim());
console.log(optiontext);
expect(optiontext).toContain('Japan');


//printing option from the drop down
for(const option of  optiontext)
{
    console.log(option);
}
await page.waitForTimeout(3000);


});

//Multi drop down
test("Multi select drop down",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');
//select multiple option
//using visible text
await page.locator('#colors').selectOption(['Red','Blue','Green']);
await page.waitForTimeout(3000);
//using vale attribute
await page.locator('#colors').selectOption(['red','green','white']);
await page.waitForTimeout(3000);
//by using label
await page.locator('#colors').selectOption([
  { value: 'red'},
  { value: 'green'},
  { value: 'yellow'}
]);
await page.waitForTimeout(3000);
//using index
await page.locator('#colors').selectOption([{index:0},{index:1}]);
await page.waitForTimeout(3000);

//check number of option in the dropdwon(count)
const dropdownoption: Locator = page.locator('#colors > option');
await expect(dropdownoption).toHaveCount(7);
await page.waitForTimeout(3000);

//Check an  option present in the drop down:
const optiontext: string[] = (await dropdownoption.allTextContents())
  .map(text => text.trim());

console.log(optiontext);
expect(optiontext).toContain('Green'); //check if the array contains green
await page.waitForTimeout(3000);

//printing option from the multi drop down
for(const option of optiontext)
{
    console.log(option);
}
await page.waitForTimeout(3000);

});