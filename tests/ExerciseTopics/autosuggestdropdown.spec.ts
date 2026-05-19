import{test, expect, Locator} from '@playwright/test';


test('Autosuggest Dropdown', async ({page})=>{

  await page.goto('https://www.flipkart.com/');

  const logincrosIcon:Locator = page.locator('.b3wTlE');
  await logincrosIcon.click();
  const searchInput:Locator = page.locator('input[name="q"]').first();
  await searchInput.pressSequentially('Smart');
  const suggestions : Locator= page.locator(".I01Bvi");
  await page.waitForTimeout(2000);
  await expect(suggestions).toBeVisible();
  const count = await suggestions.count();
  console.log("Suggestion count is:", count);

  for (let i = 0; i < count; i++) {
    const text = await suggestions.nth(i).textContent();
    console.log(text);
  }

  await page.getByText('watch waterproof').click();
  await page.waitForTimeout(5000);



  });