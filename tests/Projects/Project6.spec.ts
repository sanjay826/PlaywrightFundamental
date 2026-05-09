import { test, expect, Locator } from "@playwright/test";

test("Verify Kabir Khan is visible in the web table and select checkbox", async ({
  page,
}) => {
  await page.goto("https://app.thetestingacademy.com/playwright/webtable");

  const tableRows: Locator = page.locator("#employee-body tr");

  const rowCount = await tableRows.count();

  for (let index = 0; index < rowCount; index++) {
    const currentRow = tableRows.nth(index);

    const rowText = await currentRow.innerText();

    if (rowText.includes("Kabir Khan")) {
      console.log(`Employee Found: ${rowText}`);

      const checkbox = currentRow.locator('input[type="checkbox"]');

      await checkbox.check();

      await expect(checkbox).toBeChecked();

      break;
    }
  }
});

// Another way

test("Verify user can search Kabir Khan and select employee checkbox from search", async ({
  page,
}) => {
  await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  const searchInput: Locator = page.locator("#employee-search");
  await searchInput.fill("Kabir Khan");
  const userRow: Locator = page
    .locator("#employee-body tr")
    .filter({ hasText: "Kabir Khan" });

  await expect(userRow).toBeVisible();
  await expect(userRow).toContainText("Security Tester");
  await expect(userRow).toContainText("Hyderabad");
  await expect(userRow).toContainText("Udaan Risk");
  await expect(userRow).toContainText("Active");

  const employeeCheckbox: Locator = userRow.locator('input[type="checkbox"]');
  await employeeCheckbox.check();
  await expect(employeeCheckbox).toBeChecked();
  console.log("Kabir Khan record verified successfully.");
});
