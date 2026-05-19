import { chromium } from 'playwright';

export async function saveTTABankSession() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  await page.waitForLoadState('networkidle');

  // Sign up with a fresh account
  await page.click('text=Sign Up');
  await page.waitForLoadState('networkidle');

  await page.getByPlaceholder('John Doe').fill('TTA Sky');
  const email = `ttasky${Date.now()}@mailinator.com`;
  await page.getByPlaceholder('you@example.com').fill(email);
  await page.locator('input[type="password"]').fill('Test@1234');

  console.log(`Signing up with: ${email}`);
  await page.getByRole('button', { name: 'Create Account' }).click();

  await context.storageState({ path: './auth/TTA-session.json' });
  console.log('TTA Bank session saved to ./auth/TTA-session.json');

  await browser.close();
}

saveTTABankSession();
