import{test ,expect,Page, chromium, firefox, webkit} from '@playwright/test';

// Browser -> context ---> pages
// context  --> we can have multiple conte


test('Browser context demo' , async ()=>{

const browser = await chromium.launch();
const context = await browser.newContext();

// creating two pages 
const page1 = await context.newPage();
const page2 = await context.newPage();
console.log("No. of pages created" , context.pages().length)
await page1.goto("https://playwright.dev/");
expect(page1).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

await page2.goto("https://www.selenium.dev/");
expect(page2).toHaveTitle('Selenium');
await page1.waitForTimeout(5000);
await page2.waitForTimeout(5000);


});