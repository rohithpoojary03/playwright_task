//frame
//frame is a class that represents a frame in the game
//it has a constructor that takes in the frame number and the rolls in the frame
//it has a method that calculates the score of the frame based on the rolls and the next rolls in the game

import { test, expect,Locator } from '@playwright/test';
import { url } from 'node:inspector';

test('Frames demo', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
// total frames in the page
const frames=page.frames();
console.log("Total frames in the page:",frames.length);

/*//using frame locator to access the frame and perform actions
  const frame = page.frame({ url: /frame_1/ });

if(frame){
    await frame.locator(("[name='mytext1']")).fill("Hello");
    //await frame.fill("[name='mytext1']","Hello World");
}
else{
    console.log("Frame is not visible");
}
await page.waitForTimeout(5000);*/


//using frame locator to access the frame and perform actions

const frame=page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Hello World");
await page.waitForTimeout(5000);

});





test.only('inner child frames demo', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Get frame_3
  const frame3 = page.frame({ url: /frame_3/ });

  if (frame3) {
    // Fill textbox in frame_3
    await frame3.locator("[name='mytext3']").fill("Hello World");

    // Wait until child frame loads
    await page.waitForTimeout(2000);

    const childFrames = frame3.childFrames();
    console.log("Child frames count:", childFrames.length);

    if (childFrames.length > 0) {
      const child = childFrames[0];

      // Use exact label text (Google form is case sensitive)
      const radio = child.getByLabel("I am a human");

      await radio.check();
      await expect(radio).toBeChecked();
    } else {
      console.log("Child frame not found");
    }

  } else {
    console.log("Frame is not visible");
  }

  await page.waitForTimeout(5000);
});