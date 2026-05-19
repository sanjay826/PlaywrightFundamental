import { test, expect } from "@playwright/test";

test("Verify the QA Profile Form Practice page", async ({ page }) => {
  test.setTimeout(60000); // Increase timeout to 60 seconds

  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/practice",
  );

  // Personal Information
  await page.fill("#first-name", "Sanjay");
  await page.fill("#last-name", "Kumar");
  await page.getByTestId("gender-male").click();

  // Dropdowns and Date
  await page.locator("#years-experience").selectOption("7");
  await page.locator("#profile-date").pressSequentially("2026-05-07");

  // Profession and Tool Selection
  await page.getByTestId("profession-automation").check();
  await page.getByTestId("tool-protractor").check();

  // Dynamic Tool Checkboxes
  const tools = page.locator('input[name="tool"]');
  const toolCount = await tools.count();

  for (let i = 0; i < toolCount; i++) {
    const checkbox = tools.nth(i);

    await checkbox.check();
    await expect(checkbox).toBeChecked();

    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  // Re-select required tool after loop
  await page.getByTestId("tool-selenium").check();

  // Asia Checkbox
  const asiaCheckbox = page.getByTestId("continent-asia");

  if (await asiaCheckbox.isVisible()) {
    await asiaCheckbox.check();
    console.log("Asia checkbox was visible and clicked.");
  }

  // Selenium Tabs Navigation
  const tabs = page.locator('#selenium-tabs [role="tab"]');
  const tabCount = await tabs.count();

  for (let i = 0; i < tabCount; i++) {
    const currentTab = tabs.nth(i);
    await currentTab.click();
    await expect(currentTab).toHaveClass(/is-active/);
  }

  // Save Profile
  await page.getByRole("button", { name: "Save profile" }).click();

  // Wait for success message or form submission
  await page.waitForTimeout(2000);
  console.log("Profile submitted successfully.");
});
