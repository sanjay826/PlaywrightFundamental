import { test, expect, Locator } from "@playwright/test";

test("verify Hover the parent and click child", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/widgets/hover-menu",
  );

  const mouseOver: Locator = page.getByTestId("nav-add-ons");
  await mouseOver.hover();
  const wifi: Locator = page.getByTestId("test-id-Wifi");
  await wifi.click();

  await page.getByTestId("nav-add-ons").hover();
  const addonsElments: Locator = page.locator(
    '[data-testid="nav-add-ons"] .submenu .submenu-item',
  );
  const adonEle: string[] = await addonsElments.allTextContents();
  console.log(adonEle);

  const wifiOtput: Locator = page.locator("#output");
  const alltextVlaue: string = await wifiOtput.innerText();

  const jsonData = JSON.parse(alltextVlaue);
  console.log(jsonData);

  expect(jsonData.clicked).toContain('Wi-Fi');
  expect(jsonData.testId).toBe('test-id-Wifi');

  const currentTime: string = new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });
  expect(alltextVlaue).toContain(currentTime);
});
   