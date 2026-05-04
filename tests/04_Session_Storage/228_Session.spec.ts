import{chromium} from 'playwright';

async function saveSession(){
  let browser = await chromium.launch({headless:false});
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto('https://app.vwo.com/#/login');
  
  await  page.fill("#login-username", "jkxvrv1891@1maillt.store");
  await  page.fill("#login-password" , "Sonardih@123");
  await  page.click("#js-login-btn");

  // Wait for login to complete before saving session
  await page.waitForURL(/dashboard/, {timeout: 30000});

  await context.storageState({path : "./auth/user-session.json"});
  console.log("Session saved to admin-session.json");
  await browser.close();

}

saveSession();