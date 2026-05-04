import { chromium } from 'playwright';

async function run(){

    //Level 1 : Launch Browser  - heaviest operation , do it once 
    let browser = await chromium.launch();
    console.log("Browser launched ", browser);

    // Level 2: Create Context  - Fresh session, isolated cookies 
    let context = await browser.newContext();
    console.log("Context created ", context);

    // Level 3: Open page  a tab inside the context 
    let page = await context.newPage();
    console.log("Page Opened");

    await page.goto("https://example.com");
    console.log("Title :", await page.title());

    // Cleanup - Revserse Order 
    await page.close();
    await context.close();
    await browser.close();
}

run();