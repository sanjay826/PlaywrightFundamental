import{test , expect} from "@playwright/test";

test('Get By Role ', async ({page})=>{

  await page.goto("https://katalon-demo-cura.herokuapp.com");

  await page.getByRole("link",{name : "Make Appointment" , disabled:false}).click();


});