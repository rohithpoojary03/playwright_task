import{expect,Locator,test} from "@playwright/test";

test("Static Table",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");


const table:Locator=page.locator("table[name='BookTable'] tbody");
await expect(table).toBeVisible();

//1)count number of rows in a table:
//const rows:Locator=page.locator("table[name='BookTable'] tbody tr");// returns al the rows including heade
const rows:Locator=table.locator("tr");
await expect(rows).toHaveCount(7);  //approach 1

const rowcounts:number=await rows.count();
console.log("Number of rows in a table",rowcounts);
expect(rowcounts).toBe(7);//approach 2

//2)Count number of headers/column
//const columns:Locator=page.locator("table[name='BookTable'] tbody tr th");

const columns:Locator=rows.locator("th");
await expect(columns).toHaveCount(4);

const columncounts:number=await columns.count();
console.log("Number of columns in a table",columncounts);
expect(columncounts).toBe(4);



//3)Read all data from 2nd row(index 2 means 3rd row including header)
const secondrowcells:Locator=rows.nth(2).locator("td");
const secondrowText:string[]=await secondrowcells.allInnerTexts();
console.log("2nd row data:",secondrowText); //2nd row data: [ 'Learn Java', 'Mukesh', 'Java', '500' ]

await expect(secondrowcells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);//assertion

console.log("Printing 2nd row data.....");
for(let text of secondrowText)
    {
        console.log(text);
    }

//4)Read all data from the table(Excluding header)
console.log("Printing all data from the table.....");
const allrowdata=await rows.all();
console.log("BookName\tAuthor\tSubject\tPrice");
for(let row of allrowdata.slice(1)) //slice skip headwr row
{
    const cols=await row.locator('td').allInnerTexts();
    console.log(cols.join('\t'));
}


//5)print book names where author is Mukesh
console.log("Printing book names where author is Mukesh.....");
const mukeshbook:string[]=[];
for(let row of allrowdata.slice(1))
{
    const cells=await row.locator('td').allInnerTexts();
    const author=cells[1];
    const BookName=cells[0];
    if(author==='Mukesh')
    {
        console.log(`${author}\t${BookName}`);
        mukeshbook.push(BookName);
    
    }
}
expect(mukeshbook).toHaveLength(2);//ASSERTION

//Calculate total price of all book
let totalprice:number=0;
console.log("Printing total price of all book.....");
for(let row of allrowdata.slice(1))
{
    const cells=await row.locator('td').allInnerTexts();
    const price=cells[3];
    totalprice=totalprice+parseInt(price);
}
console.log("Total price:",totalprice);
expect(totalprice).toBe(7100);//assertion
});