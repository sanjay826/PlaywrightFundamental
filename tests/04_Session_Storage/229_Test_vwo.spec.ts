import{test , expect} from '@playwright/test';

// Load saved session - already logged in 
test.use({
  storageState : "./auth/user-session.json"

});

test("go Directly to dashboard- no login", async ({page})=>{
  await page.goto("https://app.vwo.com/#/dashboard");
  await expect(page).toHaveURL(/dashboard/);
  console.log("Dashboard loaded - No login needed");
});

test("Go directly to settings - No login", async ({page})=>{
  await page.goto("https://app.vwo.com/#/settings/");
  await expect(page).toHaveURL(/settings/);
  console.log("Settings loaded -still logged in");
});