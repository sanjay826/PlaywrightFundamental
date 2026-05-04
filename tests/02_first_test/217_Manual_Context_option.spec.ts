import{test, expect} from '@playwright/test'


test('context with Option', async ({browser})=>{
const context = await browser.newContext({
viewport: {width :1920, height:1080},
timezoneId : "Asia/Kolkata",
geolocation: {latitude : 48.8566 ,longitude: 2.3522},
permissions : ['geolocation'],

});

const page = await context.newPage();
await page.goto('https://playwright.dev');
await context.close();

});

test('Mobile Context', async ({browser})=>{
  const iPhone = {
    viewpoint : {width:375 , height:667},
    userAgent :'Mozila/5.0', //(iPhone; CPU iphone os 14_0 like Mac OS X),
    deviceScaleFactor: 2,
    isMobile : true,
    hasTouch : true
  };

  const context = await browser.newContext(iPhone);
  const page = await context.newPage();

  await page.goto('https://playwright.dev');

  await context.close();

});

// Incoginito  - like Context
test('fresh context like Incoginito ', async ({browser})=>{
  // Each newContext() is like inconginito
  // No shared cookies, local storage  etc 

  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

  // Three are completely isolated 
  const page1 = await context1.newPage();
  const page2 = await context2.newPage();

  await context1.close();
  await context2.close();

})