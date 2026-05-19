import { test, expect } from "@playwright/test";
// Approach -1
test("authenticated Pop-up demo", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState();
  await expect(
    page.locator("text=Congratulations! You must have the proper credentials."),
  ).toBeVisible();
  await page.waitForTimeout(5000);
});

// Approach -2
test("authenticated Pop-up demo 2", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState();
  await expect(
    page.locator("text=Congratulations! You must have the proper credentials."),
  ).toBeVisible();
  await page.waitForTimeout(5000);
});
