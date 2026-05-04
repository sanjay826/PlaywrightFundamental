import{test, expect} from '@playwright/test';


test('Login test', async ({page})=> {

    // Page is autometically created for you 
    // Playwright already launched a browser, created a context , and opned this page 

    await page.goto("https://app.vwo.com/#/login");
    await page.getByRole("textbox", { name: "Email address" }).fill("admin");
    await page.getByRole("textbox", { name: "Password" }).fill("pass123");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();

    await expect(page).toHaveURL(/login/);

});

test('Another test', async ({page})=>{
    // This gets a Fresh page in FRESH Context
    // Zero shared state with the test above 
    // Each test is completely isolated 

    await page.goto("https://app.vwo.com/#/signup");
    await expect(page).toHaveTitle("Login - VWO");
});
