import { test, expect, Locator } from "@playwright/test";
import { log } from "console";

test("Comparing methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com");
  const products: Locator = page.locator(".product-title");

  // innerText() Vs textContent()

  /* console.log(await products.nth(1).innerText());
  console.log(await products.nth(1).textContent()); */

  /* const count = await products.count();
  for (let i = 0; i < count; i++) {
    const productName=await products.nth(i).innerText();
    console.log(productName);
    const productName :string | null = await products.nth(i).textContent();
    console.log(productName);

    const productName :string | null = await products.nth(i).textContent();
    console.log(productName?.trim());
  } */
  // console.log("******Comapring allInnerText() VS allTextContent********");

  // const productNames :string[] = await products.allInnerTexts();
  // console.log("Product Names captured by allInnerText()",productNames);

  /* const productNames: string[] = await products.allTextContents();
  console.log("Product Names captured by allTextContents()", productNames);

  const productNamesTrimed: string[] = productNames.map((text) => text.trim());
  console.log("Product Names after trimed: ", productNamesTrimed); */

  // all() - Convert locator ---> locator[] -Returns of array of locators 
  const productLocators: Locator[] = await products.all();
  console.log(productLocators);
  //console.log(await productLocators[0]?.innerText());

  // for of loop 
  /* for (let productlocs of productLocators) {
    console.log(await productlocs.innerText());
  } */

  // for in loop 

   for (let i in productLocators) {
    console.log(await productLocators[i]?.innerText());
   }
    
});
