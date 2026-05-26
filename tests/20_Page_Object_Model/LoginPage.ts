import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Email Address' });
    this.passwordInput = page
      .getByRole('textbox', { name: 'Password' })
      .or(page.locator('#password'))
      .or(page.locator('[name="password"]'));
    this.loginButton = page
      .getByRole('button', { name: 'Login to Practice Account' })
      .or(page.getByTestId('login-button'));
  }

  async goto() {
    await this.page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
