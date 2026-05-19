/**
 * Most of the time Playwright will autometically scroll for you before doing any actions
 * there for you do not need to scroll explicitly
 */

import { test, expect } from "@playwright/test";

test("Scrolling to footer", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com");
  const footerText: string = await page
    .locator(".footer-disclaimer")
    .innerText();
  console.log(footerText);
});

test("Scrolling inside the dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#comboBox").click();
  const option = page.locator("#dropdown div:nth-child(100)");

  console.log("Option captured from dropdown :", await option.innerText());
  //await option.scrollIntoViewIfNeeded();
  await option.click();
  await page.waitForTimeout(5000);
});

test('Scrolling inside the table', async ({page})=>{
  await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');
  const name = await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText();
  const email = await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText();
  console.log(name);
  console.log(email);
  
});
