import{test, expect} from '@playwright/test';

test('varify the appointment', async ({page})=>{
  await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");

  let username = page.locator("#txt-username");
  let password = page.locator("#txt-password");
  let loginButton = page.locator("#btn-login");


  await username.fill("John Doe");
  await password.fill("ThisIsNotAPassword");
  await loginButton.click();

  let appointmentText =page.locator(".col-sm-12");
  console.log(await appointmentText.innerText());

  await expect(appointmentText).toHaveText("Make Appointment");

});