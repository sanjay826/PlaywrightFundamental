import { test, expect, Page } from "@playwright/test";

test("handles pop-ups", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Multiple pop-up

  const [popupPage] = await Promise.all([
    page.waitForEvent("popup"),
    await page.locator("#PopUp").click(),
  ]);
  await popupPage.waitForLoadState();
  const allPopupWindows = context.pages();
  console.log("Numbers of pages/Window :", allPopupWindows.length);

  console.log(allPopupWindows[0].url());
  console.log(allPopupWindows[1].url());
  console.log(allPopupWindows[2].url());

  for(const pw of allPopupWindows){
    const title = await pw.title();
    if(title.includes('Playwright')){
      await pw.locator('.getStarted_Sjon').click();
      await pw.waitForTimeout(5000);
      await pw.close();
    }
  }
  await page.waitForTimeout(5000);
});
