//Dyanamic table
//means data keeps changing


import{test,expect,Locator} from "@playwright/test";

test("Dyanamic table",async({page})=>{
await page.goto("https://practice.expandtesting.com/dynamic-table");

const table:Locator=page.locator("table.table tbody");
await expect(table).toBeVisible();

//select all the rows,then find number of rows
const rows:Locator[]=await table.locator("tr").all();
console.log("Number of rows in table:",rows.length);
expect(rows).toHaveLength(4);

//step1:for chrome process ges value of CPU load
//Read each row 0 check chrome presence.
let cpuLoad='';
for(const row of rows)
{
   const processrow:string=await row.locator("td").nth(0).innerText();
   if(processrow==="Chrome")
   {
        //cpuLoad=await row.locator('td:had-text("%")').innerText();
        cpuLoad=await row.locator('td:has-text("%")').innerText();
        console.log("CPU load of Chrome:",cpuLoad);
        break;

   }

}


//step 2: compare it with value in the yellow label.
let yellowboxtext:string=await page.locator("#chrome-cpu").innerText();
console.log("Chrome CPU load from yellow box:",yellowboxtext);
if(yellowboxtext.includes(cpuLoad))
{
    console.log("CPU load of chrome is equal.");
}
else{
    console.log("CPU load of chrome is not equal.");

}

expect(yellowboxtext).toContain(cpuLoad);
await page.waitForTimeout(5000);




});