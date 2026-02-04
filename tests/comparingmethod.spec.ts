//static web table:

import{test,expect, Locator} from "@playwright/test";

test("comparing methods",async({page})=>{
await page.goto('https://demowebshop.tricentis.com/');
const products:Locator=page.locator('.product-title');

//1)innerText() extracts plain text.eliminates white space and line breaks
//textContent() extracts text including hidden elements.includes extra whitesspace,line breaks,etc
//console.log(await products.nth(1).innerText());  //14.1 inch laptop
//console.log(await products.nth(1).textContent());

/*const count=await products.count();

for(let i=0;i<count;i++)
{
    //const productname:string=await products.nth(i).innerText();//extracts plain text.eliminates white space and line breaks.
    //console.log(productname);
    //const productname:string | null=await products.nth(i).textContent();//extracts text including hidden elements.includes extra whitesspace,line breaks,etc
    //console.log(productname);
   const productname:string | null=await products.nth(i).textContent();
   console.log(productname?.trim()); //trim to remove the extras.
}*/



//2)allInnerText()
//allTextContent()
console.log("Second methos Results:");
//const productNames:string[]=await products.allInnerTexts();
//console.log("Prodct name captured by allInnerText():",productNames);

/*const productNames:string[]=await products.allTextContents();
console.log("Prodct name captured by allTextContent():",productNames);

const productNameTrimmed:string[]=productNames.map(text=>text.trim());
console.log("Product name after trim:",productNameTrimmed);*/


//3) all()
const productslocator:Locator[]=await products.all();
console.log(productslocator);
//console.log(await productslocator[3].innerText());
/*for(let productloc of productslocator)
{
    console.log(await productloc.innerText());

}*/

//for in loop
for(let i in productslocator)
{
    console.log(await productslocator[i].innerText());

}

});