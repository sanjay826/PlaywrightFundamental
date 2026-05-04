import { test, expect } from "@playwright/test";
import * as allure from "allure-js-commons";

test("Verify the login functionality", async ({ page }) => {
  await allure.epic("VWO Login Tests");
  await allure.description("verify the login page works ");
  await allure.feature("Essential feature");
  await allure.story("Authentication");

  await page.goto("https://app.vwo.com/#login");
  await page.waitForSelector("#login-username", { state: "visible" });

  await page.fill("#login-username", "jkxvrv1891@1maillt.store");
  await page.fill("#login-password", "Sonardih@123");
  await page.click("#js-login-btn");

  // Wait for login to actually complete before snapshotting storage - otherwise
  // the auth cookies isn't set yet and the saved state is empty

  await page.waitForURL(/dashboard/, { timeout: 15000 });
  await expect(page).toHaveTitle("Dashboard");
});
