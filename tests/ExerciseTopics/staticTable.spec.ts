import{test, expect, Locator} from '@playwright/test';


test('static web table', async ({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");
  const table:Locator = page.locator("table[name$='BookTable'] tbody");
  await expect(table).toBeVisible();

  //1. Count number of rows in a table 
  const row:Locator = page.locator("table[name$='BookTable'] tbody tr");
  await expect(row).toHaveCount(7);  // approach -1 

  const rowCounts = await row.count();
  console.log("Number of rows in a table:", rowCounts);
  expect(rowCounts).toBe(7); // Approach-2



  //2. 





});