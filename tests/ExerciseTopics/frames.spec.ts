import { test, expect } from "@playwright/test";
import { log } from "console";

test("frames demo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // Total number of frames present on the page
  const frames = page.frames();
  console.log("number of frames :", frames.length);

  // Approach-1 : Using page.frame()-----
  /* const frame = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  if (frame) {
    // await frame.locator("[name='mytext1']").fill("Hello");
    await frame.fill("[name='mytext1']", "Hello");
  } else {
    console.log("Frame is not available");
  }
  await page.waitForTimeout(5000); */

  // Approach-2 : Using page.frame()-----
  const inputBox = page
    .frameLocator("[src='frame_1.html']")
    .locator("[name='mytext1']");
  await inputBox.fill("Hello 2");
  await page.waitForTimeout(5000);
});

test.only("Inner /child frames demo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame3 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  if (frame3) {
    await frame3.locator("[name='mytext3']").fill("Welcome!");
    const childFrames = frame3.childFrames();
    console.log("Child Frames Inside the Frame3 :", childFrames.length);
    if (childFrames.length > 0) {
      const radioBtn = childFrames[0].getByLabel("I am a human");
      await radioBtn.check();
      await expect(radioBtn).toBeChecked();
    } else {
      console.log("No child frames found in frame3");
    }
  } else {
    console.log("Frame3 is not Found .....");
  }
});
