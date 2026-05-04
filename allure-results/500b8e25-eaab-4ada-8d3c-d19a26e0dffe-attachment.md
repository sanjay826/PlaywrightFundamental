# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure_Reporting\230_Login.spec.ts >> Verify the login functionality
- Location: tests\05_Allure_Reporting\230_Login.spec.ts:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "VWO" [ref=e12]
        - list [ref=e15]:
          - listitem [ref=e16]:
            - textbox "Email address" [ref=e18]:
              - /placeholder: Enter email ID
              - text: jkxvrv1891@1maillt.store
          - listitem [ref=e19]:
            - generic [ref=e20]:
              - textbox "Password" [ref=e21]:
                - /placeholder: Enter password
                - text: Sonardih@123
              - button "Toggle password visibility" [ref=e22] [cursor=pointer]:
                - img [ref=e23]
          - listitem [ref=e25]:
            - button "Forgot Password?" [ref=e26] [cursor=pointer]
          - listitem [ref=e27]:
            - generic [ref=e29] [cursor=pointer]:
              - generic [ref=e30]: Remember me
              - img [ref=e32]
          - listitem [ref=e34]:
            - button "Sign in" [active]:
              - generic: Sign in
          - listitem [ref=e35]:
            - heading "Or" [level=6] [ref=e37]
          - listitem [ref=e39]:
            - button "Sign in with Google" [ref=e41] [cursor=pointer]:
              - generic [ref=e42]:
                - img [ref=e43]
                - generic [ref=e45]: Sign in with Google
          - listitem [ref=e47]:
            - button "Sign in using SSO" [ref=e48] [cursor=pointer]:
              - img [ref=e49]
              - generic [ref=e51]: Sign in using SSO
          - listitem [ref=e52]:
            - button "Sign in with Passkey" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
              - generic [ref=e56]: Sign in with Passkey
          - listitem [ref=e57]:
            - generic [ref=e59]: New to VWO?
          - listitem [ref=e61]:
            - link "Start a FREE TRIAL" [ref=e62] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
              - generic [ref=e63]: Start a FREE TRIAL
          - listitem [ref=e64]:
            - text: By continuing, you agree to VWO's
            - link "Privacy policy" [ref=e65] [cursor=pointer]:
              - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e66] [cursor=pointer]:
              - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e70]:
        - img "Vwo abtasty logo" [ref=e71]
        - generic [ref=e72]:
          - heading "have joined forces to redefine the future of" [level=4] [ref=e73]
          - heading "Digital Experience Optimization" [level=4] [ref=e74]
        - img "Vwo Abtasty Shakehands" [ref=e75]
        - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5] [ref=e76]
  - img [ref=e77]:
    - generic:
      - img
  - img [ref=e78]
  - img [ref=e79]
  - img [ref=e80]
  - img [ref=e81]
  - img [ref=e82]
  - img [ref=e83]
  - img [ref=e84]
  - img [ref=e85]
  - img [ref=e86]
  - img [ref=e87]
  - img [ref=e88]
  - img [ref=e89]
  - img [ref=e90]
  - img [ref=e91]
  - img [ref=e92]
  - img [ref=e93]
  - img [ref=e94]
  - generic:
    - generic:
      - iframe
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import * as allure from "allure-js-commons";
  3  | 
  4  | test("Verify the login functionality", async ({ page }) => {
  5  |   await allure.epic("VWO Login Tests");
  6  |   await allure.description("verify the login page works ");
  7  |   await allure.feature("Essential feature");
  8  |   await allure.story("Authentication");
  9  | 
  10 |   await page.goto("https://app.vwo.com/#login");
  11 |   await page.waitForTimeout(2000);
  12 | 
  13 |   await page.fill("#login-username", "jkxvrv1891@1maillt.store");
  14 |   await page.fill("#login-password", "Sonardih@123");
  15 |   await page.click("#js-login-btn");
  16 | 
  17 |   // Wait for login to actually complete before snapshotting storage - otherwise
  18 |   // the auth cookies isn't set yet and the saved state is empty
  19 | 
> 20 |   await page.waitForURL(/#\/(dashboard | home)/, { timeout: 15000 });
     |              ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  21 |   await page.waitForTimeout(3000);
  22 |   await expect(page).toHaveTitle("Dashboard");
  23 | });
  24 | 
```