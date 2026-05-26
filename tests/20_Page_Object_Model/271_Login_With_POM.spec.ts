import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { faker } from '@faker-js/faker';

test.describe('POM with Login Page', () => {
  test(`Login with Faker generated credentials`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const email = faker.internet.email();
    const password = faker.internet.password();

    await loginPage.goto();
    await loginPage.login(email, password);

    await expect(page).toHaveURL(/multiple_element_filter/);
    await expect(page).not.toHaveURL(/admin/);
  });
});
