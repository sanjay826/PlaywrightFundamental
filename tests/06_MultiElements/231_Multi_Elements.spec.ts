import{test, expect} from '@playwright/test';
import { log } from 'node:console';


test.describe('Multiple Emenets handling',()=>{
 test('Basic Test - verify title', async ({page})=>{
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  
  const rightpanelLinks :string[] = await page.locator("a.list-group-item").allInnerTexts();
  console.log(rightpanelLinks);
  

  
  
 })

})