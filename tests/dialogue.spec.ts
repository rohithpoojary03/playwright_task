//handling daialogue
//alert, confirm, prompt
//by default dialogue is auto accepted, but we can change it to auto dismiss
//we can also listen to dialogue event and get the message and type of dialogue

import { test, expect } from '@playwright/test';

test('Handling Dialogues Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog',(dialog)=> {
    console.log("Dialogue type is:",dialog.type());//return type of dialogue
    expect(dialog.type()).toContain("alert");//assert dialogue type
    console.log("Dialogue message is:",dialog.message());//return message of dialogue
    expect(`${dialog.message()}`).toContain("I am an alert box!");//assert dialogue message
    dialog.accept(); //auto accept dialogue
  });


  await page.locator("#alertBtn").click(); //open alert dialogue
  await page.waitForTimeout(5000);


});

test('Confirmation Dialogue Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //Register a dialog handler for confirm dialogue
  page.on('dialog',(dialog)=> {
    console.log("Dialogue type is:",dialog.type());//return type of dialogue
    expect(dialog.type()).toContain("confirm");//assert dialogue type
    console.log("Dialogue text is:",dialog.message());//return message of dialogue
    expect(dialog.message()).toContain("Press a button!");//assert dialogue message
    dialog.dismiss(); //close the dialogue by clicking cancel
  });


  await page.locator("#confirmBtn").click(); //open confirm dialogue
  const text:string=await page.locator("#demo").innerText(); //get the text of element after closing the dialogue
  console.log("Text after closing the dialogue is:",text);
  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!"); //assert the text after closing the dialogue
  await page.waitForTimeout(5000);

});


test.only('Prompt Dialogue Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  page.on('dialog',(dialog)=> {
    console.log("Dialogue type is:",dialog.type());//return type of dialogue
    expect(dialog.type()).toContain("prompt");//assert dialogue type
    console.log("Dialogue text is:",dialog.message());//return message of dialogue
    expect(dialog.message()).toContain("Please enter your name:");//assert dialogue message
    expect(dialog.defaultValue()).toContain("Harry Potter");
    dialog.accept('John'); //close the dialogue by providing a value
  });


  await page.locator("#promptBtn").click(); //open prompt dialogue
  const text:string=await page.locator("#demo").innerText(); //get the text of element after closing the dialogue
  console.log("Text after closing the dialogue is:",text);
  await expect(page.locator("#demo")).toHaveText("Hello John! How are you today?"); //assert the text after closing the dialogue
  await page.waitForTimeout(5000);

});