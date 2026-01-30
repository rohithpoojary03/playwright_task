//xpath is syntax used to navigate through elements and attributes in an XML document.
//xpath is used to locate elements in a web page for automation testing
//xpath is used in selenium to locate elements
//xpath is used in playwright to locate elements
//xpath is used in many other automation tools to locate elements
//types of xpath
//1) absolute xpath
//2) relative xpath
//absolute xpath starts from the root element and follows the full path to the target element
//single slash (/) is used in absolute xpath
//like html/body/div/div/p

//relative xpath starts from anywhere in the document and uses double slash (//)
//double slash (//) is used in relative xpath
//like //tagname[@attribute='value']
//like //tagname[text()='textvalue']

//And operator in xpath
//used to combine multiple conditions in a single xpath expression
//syntax: //tagname[@attribute1='value1' and @attribute2='value2']
//example:
//input[@type='submit' and @value='Search']


//Or operator in xpath
//used to specify multiple conditions where at least one must be true
//syntax: //tagname[@attribute1='value1' or @attribute2='value2']
//example:
//input[@type='submit' or @value='Search']


import { expect, test,Locator} from '@playwright/test';
import { count } from 'node:console';
test("XPathe demo in Playwright",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
//absolute xpath    
//use xpath or double slash(//) because it take single slash as css xpath= or //html
const absolutelogo:Locator=page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
await expect(absolutelogo).toBeVisible();


//relative xpath
const relativelogo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(relativelogo).toBeVisible();


//contains() function in xpath
//used to find elements that contain a specific text or attribute value
//syntax: //tagname[contains(@attribute,'value')]
const products :Locator=page.locator("//h2//a[contains(@href,'computer')]");
await products.first().isVisible();
const productCount:number=await products.count();
console.log("Number of products found with 'computer' in href: "+productCount);
expect(productCount).toBeGreaterThan(0);

//textContent used to get the text inside the element
//get text from ALL matching elements
const productNames = await products.allTextContents();
console.log(productNames);

//get text from specific element
//by using first(), last(), nth() methods
console.log("First computer related product: ",await products.first().textContent());
console.log("Last computer related product: ",await products.last().textContent());
console.log("Nth computer related product: ",await products.nth(1).textContent());

//by using array index
console.log("first computer related product: ",await products.nth(0).textContent());
console.log("second computer related product: ",await products.nth(1).textContent());


//starts-with() function in xpath
//used to find elements whose attribute value starts with a specific string
//syntax: //tagname[starts-with(@attribute,'value')]
const searchBox:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
const count: number = await searchBox.count(); // ✅ CALL + await
expect(count).toBeGreaterThan(0);

//text() function in xpath
//used to find elements based on their exact text content
//syntax: //tagname[text()='textvalue']
const reglink:Locator=page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();

//last() function in xpath
//used to select the last element in a set of matching elements
//syntax: (//tagname)[last()]
const lastProduct:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
console.log("Last product on the page: ",await lastProduct.textContent());
await expect(lastProduct).toBeVisible();
console.log("Text content of last product: ",await lastProduct.textContent());


//position() function in xpath
//used to select an element based on its position in a set of matching elements
//syntax: (//tagname)[position()=n]
const positionitem:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");

console.log("Third product on the page: ",await positionitem.textContent());
await expect(positionitem).toBeVisible();

});