import{test , expect} from "@playwright/test";

test('Verify Sequentially Enter the value',async ({page})=>{
  await page.goto("https://awesomeqa.com/practice.html");
  await page.locator("[name='firstname']").pressSequentially("The TestAcademy",{delay :200});

  await page.goto("https://app.vwo.com/#login");
  await page.goBack();
  await page.waitForTimeout(5000);


})