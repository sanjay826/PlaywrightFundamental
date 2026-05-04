/** 
 * 1. First one is browser with multiple context, 
 *  one browser with multiple context and multiple pages
 */

import{chromium} from 'playwright';

async function multiUser(){

  // one is browser
let browser = await chromium.launch({headless : false});

// multiple context,
let context1 = await browser.newContext();
let context2 = await browser.newContext();
let context3 = await browser.newContext();

// multiple pages
let page1 = await context1.newPage();
await page1.goto('https:www.google.com');

let page2 = await context2.newPage();
await page2.goto('https://www.youtube.com/');


let page3 = await context3.newPage();
await page3.goto('https://mail.google.com/');

await page1.close();
await page2.close();
await page3.close();
await context1.close();
await context2.close();
await context3.close();
await browser.close();

}

multiUser();