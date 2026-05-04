import{ expect, test} from '@playwright/test';

// Rule - if it is ID - use # befor  id value 
// Rule - If if it is class  use - . dot befor value 

test('locators are lazy, strict , and auto-wait', async ({page})=>{
   await page.goto('https://app.vwo.com/#login');


   // Create locators - Nothing happens yet (lazy);

   let usernanmeField = page.locator('#login-username');
   let passwordField = page.locator('#login-password');
   let loginButton = page.locator('#js-login-btn');

   // NOW playwright finds the element and acts(auto-wait)
   await usernanmeField.fill("admin");
   await passwordField.fill("pass123");
   await loginButton.click();

   console.log("All actions completed ");

   let error_message =page.locator("#js-notification-box-msg");
   await expect(error_message).toContainText("Your email, password, IP address or location did not match");





});