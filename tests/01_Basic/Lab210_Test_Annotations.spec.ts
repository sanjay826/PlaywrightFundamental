import { test, expect } from "@playwright/test";

// Skip test

test.skip("skipped test", async ({ page }) => {
  // this test is skipped
});

// Only run this test
test.only("focused test", async ({ page }) => {
  // Only this test run
});

// Mark as failing

test.fail("expected to fail", async ({ page }) => {
  // Test is expected to fail
});

// slow test (3x timeout)
test.slow('slow test', async ({page}) => {

    // has extended timeout 

})

// slow test (3x timeout)
test('slow test', async ({page}) => {
    test.slow();

    // has extended timeout 

})

// Conditional Skip 
test('Conditional', async ({page, browserName}) =>{
    test.skip(browserName === "firefox" , 'Not supported in Firefox')
})
```