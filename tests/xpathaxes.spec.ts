//xpath axes
//defines the relationship between the current node and nodes in the document.
//allow you to navigate through the XML or HTML document structure in a flexible way.

//parent
//parent axis selects the parent node of the current node.
//example: /bookstore/book/parent::bookstore

//child
//child axis selects all child nodes of the current node.
//example: /bookstore/child::book

//ancestor
//ancestor axis selects all ancestor nodes (parent, grandparent, etc.) of the current node.
//example: /bookstore/book/ancestor::library

//descendant
//descendant axis selects all descendant nodes (children, grandchildren, etc.) of the current node.
//example: /bookstore/descendant::book

//following
//following axis selects all nodes that come after the current node in the document, excluding descendants.
//example: /bookstore/book/following::author

//following-sibling
//following-sibling axis selects all sibling nodes that come after the current node.
//example: /bookstore/book/following-sibling::book

//preceding
//preceding axis selects all nodes that come before the current node in the document, excluding ancestors.
//example: /bookstore/book/preceding::magazine

//preceding-sibling
//preceding-sibling axis selects all sibling nodes that come before the current node.
//example: /bookstore/book/preceding-sibling::book

//self
//self axis selects the current node itself.
//example: /bookstore/book/self::book

import {test,expect} from '@playwright/test';

test("xpath axes demo",async ({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
//self axis
const germanycell:Locator=page.locator("//td[text()='Germany']/self::td");
await expect(germanycell).toHaveText("Germany");


//parent axis
const parentRow:Locator=page.locator("//td[text()='Germany']/parent::tr");
await expect(parentRow).toContainText("Maria Anders");
console.log(await parentRow.textContent());


//child axis
const secondRowChildren:Locator=page.locator("//table[@id='customers']/child::tbody/child::tr[2]/child::td");
await expect(secondRowChildren).toHaveCount(3);


//ancestor axis
const ancestorTable:Locator=page.locator("//td[text()='Germany']/ancestor::table");
await expect(ancestorTable).toHaveAttribute("id","customers");


//descendant axis
const tableDescendants:Locator=page.locator("//table[@id='customers']/descendant::td");
await expect(tableDescendants).toHaveCount(18); //try 15

//following axis
const followingNodes:Locator=page.locator("(//td[normalize-space()='Germany'])[1]/following::td");
await expect(followingNodes).toHaveText("Centro comercial Moctezuma"); //try 12

//following-sibling axis
const followingSiblings:Locator=page.locator("//td[text()='Germany']/following-sibling::td");
await expect(followingSiblings).toHaveText("UK"); 

//preceding axis
const precedingNodes:Locator=page.locator("(//td[normalize-space()='Germany'])[1]/preceding::td");
await expect(precedingNodes).toHaveText("Maria Anders"); //try 6
});