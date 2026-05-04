/**
 *  @Referer for All Request in a context
 *  if you load app.com or second website, which is our cura.catlone website which are our 
 *  two testing websites right ? i want this to be available. The referral should be 
 *  testingacademy.com
 * 
 *  */


import{test} from '@playwright/test';

test('set reffer for entire context', async ({browser})=>{

  let context = await browser.newContext({
    extraHTTPHeaders :{
      "Referer" :"https://thetestingacademy.com"}});

  let page = await context.newPage();
  await page.goto("https://app.vwo.com/#login");
  console.log("page1 - partner referer included");

  await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
  console.log("page 2 - partner referer included")

  

});