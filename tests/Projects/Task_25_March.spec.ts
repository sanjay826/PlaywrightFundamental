/**
 * 
 * @Project3 Please now automate the App.vwo invalid username and password with error message. 
 * But now you have to use get by role : https://app.vwo.com/#/login
 */

import{test , expect} from "@playwright/test";


test('Verify login flow ', async ({page})=>{
  await page.goto('https://app.vwo.com/#/login');
  
  let EmailID = page.getByRole('textbox', {name: 'Email address'});
  let password = page.locator("#login-password");
  let forgetPswd = page.getByRole("button", {name : "Forgot Password?"});
  let checkBox = page.locator("use[href='#icon--checkbox-button']").first();
  
  let signIn = page.getByRole('button',{name : "Sign in" ,exact : true});

  let errorMsg = page.locator("#js-notification-box-msg");


  await EmailID.fill("test@reliance.com");
  await password.fill("12345@123");
  await expect(forgetPswd).toBeVisible();

  if(await checkBox.isChecked()){
    console.log("Checkbox is already checked for Remember my Choice!!");
    await expect(checkBox).toBeChecked();
  }else {
      console.log("Checkbox is not checked yet but now making it !!!");
      await checkBox.click();
      await expect(checkBox).toBeChecked();
    }
  
  await signIn.click();
  await expect(errorMsg).toHaveText('Your email, password, IP address or location did not match');


})