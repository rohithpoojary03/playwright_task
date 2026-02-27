//Keyboard Action
//it is used to perform keyboard actions like key press, key down, key up etc.
//keyboard methods:
//keyboard methods are used to perform keyboard actions like key press, key down, key up etc.
//keyboard.press(key, options) - it is used to press a key.
//keyboard.down(key, options) - it is used to press a key down.
//keyboard.up(key, options) - it is used to release a key.
//inserttext,down,press,type,up are the methods of keyboard class which are used to perform keyboard actions.


import { test, expect } from '@playwright/test';

test('Keyboard Action', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const input1=page.locator('#input1');
//1.focus on the input field
    await input1.focus(); //focus|click
//2.provide some text in the input field
    await page.keyboard.insertText('Hello World'); //type|insertText
//3.ctrl+a to select all the text
    await page.keyboard.down('Control');
    await page.keyboard.press('a');
    await page.keyboard.up('Control');
//4.ctrl+c to copy the text
    await page.keyboard.down('Control');
    await page.keyboard.press('c');
    await page.keyboard.up('Control');
//5.press tab twice to move to the next input field   
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
//6.ctrl+v to paste the text in the next input field
    await page.keyboard.down('Control');
    await page.keyboard.press('v');
    await page.keyboard.up('Control');  
//7.press tab twice to move to the next input field
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
//8.ctrl+v to paste the text in the next input field
    await page.keyboard.down('Control');
    await page.keyboard.press('v'); 
    await page.keyboard.up('Control');      

await page.waitForTimeout(5000);

});     



test.only('Keyboard Action -simple mode', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const input1=page.locator('#input1');
//1.focus on the input field
    await input1.focus(); //focus|click
//2.provide some text in the input field
    await page.keyboard.insertText('Hello World'); //type|insertText
//3.ctrl+a to select all the text
    await page.keyboard.press('Control+a'); //shortcut for select all
//4.ctrl+c to copy the text
    await page.keyboard.press('Control+c'); //shortcut for copy
//5.press tab twice to move to the next input field   
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
//6.ctrl+v to paste the text in the next input field
    await page.keyboard.press('Control+v'); //shortcut for paste
//7.press tab twice to move to the next input field
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
//8.ctrl+v to paste the text in the next input field
    await page.keyboard.press('Control+v'); //shortcut for paste     

await page.waitForTimeout(5000);

});     