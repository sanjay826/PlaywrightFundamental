# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project4_TTABank.spec.ts >> Validate End to End TTA Bank
- Location: tests\Projects\Project4_TTABank.spec.ts:11:1

# Error details

```
Error: Error reading storage state from ./auth/TTA-session.json:
ENOENT: no such file or directory, open 'D:\Promod Dutta\LearningPlaywrightFundamental\auth\TTA-session.json'
```

# Test source

```ts
  1  | import { chromium } from 'playwright';
  2  | 
  3  | export async function saveTTABankSession() {
  4  |   const browser = await chromium.launch({ headless: false });
> 5  |   const context = await browser.newContext();
     |                   ^ Error: Error reading storage state from ./auth/TTA-session.json:
  6  |   const page = await context.newPage();
  7  | 
  8  |   await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  9  |   await page.click('text=Sign Up');
  10 | 
  11 |   await page.getByPlaceholder("John Doe").fill("SKY");
  12 |   const email = `test${Date.now()}@gmail.com`;
  13 |   await page.getByPlaceholder("you@example.com").fill(email);
  14 |   await page.getByPlaceholder("••••••••").fill("Test@123");
  15 | 
  16 |   await page.getByRole('button', { name: "Create Account" }).click();
  17 | 
  18 |   await context.storageState({ path: "./auth/TTA-session.json" });
  19 | 
  20 |   await browser.close();
  21 | }
```