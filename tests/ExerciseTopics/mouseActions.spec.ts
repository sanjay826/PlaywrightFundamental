import { test, expect, Locator } from "@playwright/test";
import { it } from "node:test";

test("Mouse Move", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const pointMe: Locator = page.locator(".dropbtn");
  await pointMe.hover();
  await page.waitForTimeout(5000);
  const laptop: Locator = page.locator(".dropdown-content a:nth-child(2)");
  laptop.hover();
  await page.waitForTimeout(5000);
});

test("Right click", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  const button = page.locator(".context-menu-one.btn.btn-neutral");
  await button.click({ button: "right" });
  await page.waitForTimeout(5000);
});

test("Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const btncopy = page.locator('button:has-text("Copy Text")');
  await btncopy.dblclick();

  const field2 = page.locator("#field2");
  await expect(field2).toHaveValue("Hello World!");
  await page.waitForTimeout(5000);
});

test("Drag and Drop ", async ({ page }) => {
  await page.goto("https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE");
  const frame = page.frameLocator("#result");
  const rome = frame.locator("#box6");
  const italy = frame.locator("#box106");

  // Approach -1  - Mouse over and drag manually 
  await rome.hover();
  await page.mouse.down();
  await italy.hover();
  await page.mouse.up();

  // Approach -2
  const seaol :Locator = frame.locator('#box5');
  const southKoria :Locator = frame.locator('#box105');
  await seaol.dragTo(southKoria);




  await page.waitForTimeout(5000);
});
