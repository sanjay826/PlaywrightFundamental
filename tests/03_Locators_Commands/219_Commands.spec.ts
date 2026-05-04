import{test , expect} from "@playwright/test";

test('Goto with different waitUntil options', async ({page})=>{
   
  await page.goto("https://app.com/pag1",{waitUntil: "commit"});
  console.log("Commit : server respnded");

  // wait for HTML to be parsed
  await page.goto("https://app.com/pag2",{waitUntil: "domcontentloaded"});
  console.log("load : all resource loaded");

  // DEFAULT - wait for everything (HTML , CSS , Scripts)
  await page.goto("https://app.com/page3", {waitUntil: "load"});
  console.log("Load: all resources loaded");

  // SLOWEST  - wait for all network activity to stop 
  await page.goto('https://app.com/pag4',{waitUntil: "networkidle"});
  console.log("netwrokidle: no request for 500");

})