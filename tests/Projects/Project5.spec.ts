import { test, expect } from "@playwright/test";

test("Verify the QA Profile Form Practice page", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/practice",
  );

  // Verify the personal informatiopn
  await page.fill("#first-name", "Sanjay");
  await page.fill("#last-name", "Kumar");
  await page.getByTestId("gender-male").click();

  await page.locator("#years-experience").selectOption("7");
  await page.locator('#profile-date').fill('2026-05-07');

  await page.getByTestId("profession-automation").click();
  await page.getByTestId("tool-protractor").click();
  await page.getByTestId("continent-asia").click();
  await page.getByTestId('tab-navigation').click();

  const navigationCMD = await page
    .locator("#selenium-tab-panel")
    .allTextContents();
  console.log("All Navigation Command Printed :", navigationCMD);
 let actualCnt = page.locator('strong').filter({ hasText: 'Navigation commands' })

  expect(actualCnt).toHaveText("Navigation commands");
});
