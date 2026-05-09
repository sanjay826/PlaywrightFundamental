import { test, expect } from "@playwright/test";
import { log } from "node:console";

test.describe("Multiple Emenets handling", () => {
  test("Basic Test - verify title", async ({ page }) => {
    await page.goto(
      "https://app.thetestingacademy.com/playwright/multiple_element_filter",
    );

    const rightpanelLinksTexts: string[] = await page
      .locator("a.list-group-item")
      .allInnerTexts();
    console.log(rightpanelLinksTexts.length);

    for (const linkText of rightpanelLinksTexts) {
      if (linkText === "My Account") {
        await page.getByText(linkText).first().click();
        break;
      }
    }

    const rightpanelLinks = await page.locator("a.list-group-item").all();
    for (const link of rightpanelLinks) {
      console.log(await link.getAttribute("href"));
    }
  });
});
