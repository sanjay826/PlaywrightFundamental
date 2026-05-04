// Resuing Context across Tests 
import {test} from '@playwright/test';

test.describe('Shared context tests', () =>{

  test.use({
    viewport:{width: 1280, height: 720},
    locale: 'en-us'
  })

 test('test 1', async ({page})=>{
  await page.goto("https://app.vwo.com/#login")
 });

 test('test 2', async ({page})=>{
  await page.goto("https://app.vwo.com/#login")
 })

});