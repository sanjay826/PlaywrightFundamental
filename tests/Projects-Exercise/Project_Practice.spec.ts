/**
 * Practice single frame, multiple frame, multiple nested frames, and frame
 * within the frames from this, and add everything into the GitHub.
 * https://app.thetestingacademy.com/playwright/frames/
 *
 */

import { test, expect, Locator } from "@playwright/test";

test("Verify th frame", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/frames/");

  // Total number of frame
  const frames = page.frames();
  console.log("Number of frame :", frames.length);

  // ---- Approach -1 : Using page.frame();.......
  const frame = page.frame("#frame-one");
  if (frame) {
    const formText: Locator = frame.getByRole("heading", {
      name: "Vehicle registration",
    });
    await expect(formText).toHaveText("Vehicle registration");

    const vehicleName = frame.locator("#RESULT_TextField-1");
    await vehicleName.fill("Mahindra EV-9");

    const ownerName = frame.locator("RESULT_TextField-2");
    await ownerName.fill("Sanjay Kumar");

    const rgNumber = frame.locator("#RESULT_TextField-3");
    await rgNumber.fill("DL -44 -AB-6516");

    const vehcleType = frame.locator("#RESULT_RadioButton-1");
    await vehcleType.selectOption("SUV");

    const year = frame.locator("#RESULT_TextField-4");
    await year.fill("2025");

    const notes = frame.locator("#RESULT_TextArea-1");
    await notes.fill(" This is best EV Car in Inida");

    const submitRegistration = frame.getByRole("button", {
      name: "Submit registration",
    });
    await submitRegistration.click();

  } else {
    console.log("Unable to find any Frame!!");
  }
 const vehicleData = {
        vehicleName: "Mahindra EV-9",
        ownerName: "ARAV",
        regNumber: "*^*&",
        vehicleType: "SUV",
        year: "2025",
        notes: "This is best EV Car in Inida"
    };

});
