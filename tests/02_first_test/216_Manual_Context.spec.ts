import{test, expect} from "@playwright/test";

test('two user interact', async ({browser})=>{
  let adminContext = await browser.newContext();
  let adminPage = await adminContext.newPage();


  let guestContext = await browser.newContext();
  let guestPage = await guestContext.newPage();

  await adminPage.goto("https://app.vwo.com/#/login");
  await guestPage.goto("https://app.vwo.com/#/signup");

  await adminPage.close();
  await guestPage.close();
  await adminContext.close();
  await guestContext.close();

})