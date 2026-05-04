import { test, expect } from '@playwright/test';

test('Validate End to End TTA Bank', async ({ page }) => {

  
  await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  await page.waitForLoadState('networkidle');

  await page.click('text=Sign Up');
  await page.waitForLoadState('networkidle');
  const email = `ttasky${Date.now()}@mailinator.com`;
  await page.getByPlaceholder('John Doe').fill('TTA Sky');
  await page.getByPlaceholder('you@example.com').fill(email);
  await page.locator('input[type="password"]').fill('Test@1234');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.waitForLoadState('networkidle', { timeout: 60000 });

 await page.getByRole('button', { name: 'Transfer Funds' }).click();
 await page.getByPlaceholder('0.00').fill('5000');
 await page.getByPlaceholder('e.g. Rent for October').fill('Rent');
await page.getByRole('button', { name: 'Continue' }).click();
await expect(page.getByText(/5000|confirm|review/i).first()).toBeVisible({ timeout: 10000 });
});
