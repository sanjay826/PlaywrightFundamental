import{test, expect, chromium} from '@playwright/test';


test('handles tabs', async ()=>{

  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  // creating two pages 
  const parentpage = await context.newPage();
  await parentpage.goto('https://testautomationpractice.blogspot.com/');
 
  const [childPage] =await Promise.all([context.waitForEvent('page'),parentpage.locator("button:has-text('New Tab')").click()])
  //context.waitForEvent('page'); // pending , fulfilled , rejected

  // Approach 1 : switch between pages and get titles 
  const pages = context.pages();
  console.log("Number of pages is created :",pages.length);

  

  console.log("Title of parent page:", await parentpage.title());

  console.log('Title of child page:', await childPage.title());

  
  



  
  
})