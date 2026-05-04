import{test , expect} from '@playwright/test';


test("Verify the Cookies", async ({page,context})=>{
  await page.goto("https://awesomeqa.com/practice.html");
  await page.locator("[name='firstname']").pressSequentially("The TestAcademy",{delay :200});
  
  await page.goto("https://app.vwo.com/#login");

  // Read ALL cookies 
  let cookies = await context.cookies();
  await context.addCookies([
    {
      name : "session_id",
      value : "fake_sess_on_abc",
      domain : "app.com",
      path : "/"
    },
    {
      name: "user_role",
      value: "admin",
      domain : "app.com",
      path : "/"
    }
  ]);
  await context.clearCookies();

  console.log("Total cookies: ", cookies.length);

  cookies.forEach(function (cookie){
    console.log( " " +cookie.name + " = " + cookie.value);
  });
})
