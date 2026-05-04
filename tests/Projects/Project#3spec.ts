/** 
 * @Project4 The objective is to verify the error message when you enter a
 *  gmail at vwo.com/free-trail
 */ 
import{test , expect} from "@playwright/test";

test('Verify error message when entering a Gmail id', async ({page})=>{
 
  await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
  const enterID =page.getByLabel('Business Email', { exact: true });
  await enterID.pressSequentially("Sky@gmail.com");
  const errorText =page.locator('div.invalid-reason').first();
  //await errorText.textContent();
  await expect(errorText).toHaveText("gmail.com doesn't look like a business domain. Please use your business email.");




})
