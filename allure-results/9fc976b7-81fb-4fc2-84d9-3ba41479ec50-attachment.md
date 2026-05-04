# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure_Reporting\230_Login.spec.ts >> Verify the login functionality
- Location: tests\05_Allure_Reporting\230_Login.spec.ts:4:1

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://app.vwo.com/#/dashboard"
  navigated to "https://app.vwo.com/#/dashboard?accountId=1228811"
  navigated to "https://app.vwo.com/#/dashboard/get-started?accountId=1228811"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic:
      - navigation:
        - navigation "Main navigation" [ref=e3]:
          - list [ref=e4]:
            - listitem [ref=e5]:
              - link "Go to Dashboard" [ref=e6] [cursor=pointer]:
                - /url: "#/dashboard"
                - img [ref=e7]
                - generic [ref=e9]: Dashboard
            - listitem [ref=e10]:
              - button "Testing menu" [ref=e11] [cursor=pointer]:
                - img [ref=e12]
                - generic [ref=e14]: Testing
                - img [ref=e15]
              - generic [ref=e17] [cursor=pointer]: A/B
              - generic [ref=e18] [cursor=pointer]: Multivariate
              - generic [ref=e19] [cursor=pointer]: Split URL
            - listitem [ref=e20]:
              - button "Insights menu" [ref=e21] [cursor=pointer]:
                - img [ref=e22]
                - generic [ref=e24]: Insights
                - img [ref=e25]
              - generic [ref=e27] [cursor=pointer]: Dashboard
              - generic [ref=e28] [cursor=pointer]: Metric Reports
              - generic [ref=e29] [cursor=pointer]: Funnel Reports
              - generic [ref=e30] [cursor=pointer]: Heatmaps
              - generic [ref=e31] [cursor=pointer]: Session Recordings
              - generic [ref=e32] [cursor=pointer]: Mobile Recordings
              - generic [ref=e33] [cursor=pointer]: Forms
            - listitem [ref=e34]:
              - button "Insights menu" [ref=e35] [cursor=pointer]:
                - img [ref=e36]
                - generic [ref=e38]: Pulse
                - img [ref=e39]
              - generic [ref=e41] [cursor=pointer]: Surveys
              - generic [ref=e42] [cursor=pointer]: Concept Test
              - generic [ref=e43] [cursor=pointer]: Templates
              - generic [ref=e44] [cursor=pointer]: Settings
            - listitem [ref=e45]:
              - button "Feature Experimentation" [ref=e46] [cursor=pointer]:
                - img [ref=e47]
                - generic [ref=e49]: Feature Experimentation
                - img [ref=e50]
              - generic [ref=e52] [cursor=pointer]: Feature Flags
              - generic [ref=e53] [cursor=pointer]: Flag Rollout
              - generic [ref=e54] [cursor=pointer]: Flag Testing
              - generic [ref=e55] [cursor=pointer]: Flag Multivariate
              - generic [ref=e56] [cursor=pointer]: Flag Personalize
              - generic: Tech Debt
            - listitem [ref=e57]:
              - link "Go to Personalize" [ref=e58] [cursor=pointer]:
                - /url: "#/target/targeting"
                - img [ref=e59]
                - generic [ref=e61]: Personalize
            - listitem [ref=e62]:
              - link "Go to Web Rollout" [ref=e63] [cursor=pointer]:
                - /url: "#/deploy/experience"
                - img [ref=e64]
                - generic [ref=e67]: Web Rollout
            - listitem [ref=e68]:
              - button "Data360 menu" [ref=e69] [cursor=pointer]:
                - img [ref=e70]
                - generic [ref=e72]: Data360
                - img [ref=e73]
              - generic [ref=e75] [cursor=pointer]: Introduction
              - generic [ref=e76] [cursor=pointer]: Profiles
              - generic [ref=e77] [cursor=pointer]: Attributes
              - generic [ref=e78] [cursor=pointer]: Events
              - generic [ref=e79] [cursor=pointer]: Segments
              - generic [ref=e80] [cursor=pointer]: Triggers
              - generic [ref=e81] [cursor=pointer]: Metrics
              - generic [ref=e82] [cursor=pointer]: Funnels
              - generic [ref=e83] [cursor=pointer]: Audit
            - listitem [ref=e84]:
              - button "Plan menu" [ref=e85] [cursor=pointer]:
                - img [ref=e87]
                - generic [ref=e89]: Plan
                - img [ref=e90]
              - generic [ref=e92] [cursor=pointer]: Observations
              - generic [ref=e93] [cursor=pointer]: Hypotheses
              - generic [ref=e94] [cursor=pointer]: Ideas
            - listitem
            - listitem [ref=e95]:
              - link "Go to Video Library" [ref=e96] [cursor=pointer]:
                - /url: "#/video-library/"
                - img [ref=e97]
                - generic [ref=e99]: Video Library
              - link "Go to Upgrade" [ref=e100] [cursor=pointer]:
                - /url: "#/settings/upgrade/testing"
                - img [ref=e101]
                - generic [ref=e103]: Upgrade
              - button "Configurations menu" [ref=e104] [cursor=pointer]:
                - img [ref=e105]
                - generic [ref=e107]: Configurations
                - img [ref=e108]
              - generic [ref=e110] [cursor=pointer]: Websites and Apps
              - generic [ref=e111] [cursor=pointer]: Integrations
              - generic [ref=e112] [cursor=pointer]: Pages
            - listitem [ref=e113]:
              - link "Go to Settings" [ref=e114] [cursor=pointer]:
                - /url: "#/settings/accounts/general"
                - img [ref=e115]
                - generic [ref=e117]: Settings
            - listitem [ref=e118]:
              - link "View Product Updates (opens in new tab)" [ref=e119] [cursor=pointer]:
                - /url: http://vwo.com/product-updates
                - img [ref=e120]
                - generic [ref=e122]: Updates
                - img [ref=e124]
              - button "Toggle navigation menu" [ref=e127] [cursor=pointer]:
                - img [ref=e128]
    - banner [ref=e130]:
      - link "Go to dashboard" [ref=e132] [cursor=pointer]:
        - /url: "#/dashboard"
        - img "vwo logo" [ref=e133]
      - generic [ref=e134]:
        - generic [ref=e135]:
          - generic [ref=e137]:
            - button "30 days remaining" [ref=e138] [cursor=pointer]:
              - generic [ref=e139]: 30 days remaining
            - button "Upgrade" [ref=e140] [cursor=pointer]
          - generic [ref=e141]:
            - heading "1maillt" [level=6] [ref=e142]
            - generic [ref=e143]:
              - generic [ref=e144]: "#1228811"
              - button "Copy to clipboard" [ref=e145] [cursor=pointer]:
                - img [ref=e146]
          - button "Need Help?" [ref=e152] [cursor=pointer]:
            - img [ref=e153]
            - generic [ref=e155]: Need Help?
          - button "View Account Usage Activity" [ref=e161] [cursor=pointer]:
            - img [ref=e162]
          - generic "Notifications" [ref=e166]:
            - dialog "Notification dialog" [ref=e167]:
              - button "Open notifications" [ref=e168] [cursor=pointer]:
                - img [ref=e169]
        - button "Open user menu" [ref=e173] [cursor=pointer]:
          - img "test Sky" [ref=e174]
    - main "Application main content" [ref=e175]:
      - generic [ref=e181]:
        - list [ref=e183]:
          - listitem [ref=e184] [cursor=pointer]:
            - generic "View dashboard" [ref=e186]: Dashboard
          - listitem [ref=e187] [cursor=pointer]:
            - generic "Get started with VWO" [ref=e188]: Get Started
          - listitem [ref=e189] [cursor=pointer]:
            - generic "View campaigns overview" [ref=e191]: Campaigns Overview
        - generic [ref=e193]:
          - generic [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197]:
                - generic [ref=e198]:
                  - heading "Set Up Your Account" [level=4] [ref=e199]
                  - generic [ref=e200]: 30% Completed
                - paragraph [ref=e202]: These tasks will help you get the most out of VWO. Let's get started!
              - link "Setup a meeting" [ref=e203] [cursor=pointer]:
                - /url: https://calendar.vwo.com/gaurav.jain?t_account_id=1228811&t_user_id=1714193&t_source=in-app&name=test+Sky&email=jkxvrv1891%401maillt.store
                - img [ref=e204]
                - generic [ref=e206]: Setup a meeting
              - button "More options" [ref=e211] [cursor=pointer]:
                - img [ref=e212]
            - generic [ref=e214]:
              - complementary [ref=e215]:
                - generic [ref=e216]:
                  - list [ref=e217]:
                    - listitem [ref=e218]:
                      - button "Basic Setup" [ref=e220] [cursor=pointer]:
                        - img [ref=e221]
                        - generic [ref=e223]: Basic Setup
                    - listitem [ref=e224]:
                      - button "Manage Data" [ref=e226] [cursor=pointer]:
                        - img [ref=e227]
                        - generic [ref=e229]: Manage Data
                        - img [ref=e230]
                    - listitem [ref=e232]:
                      - button "Product Setup" [ref=e234] [cursor=pointer]:
                        - img [ref=e235]
                        - generic [ref=e237]: Product Setup
                        - img [ref=e238]
                    - listitem [ref=e240]:
                      - button "Privacy & Security" [ref=e242] [cursor=pointer]:
                        - img [ref=e243]
                        - generic [ref=e245]: Privacy & Security
                        - img [ref=e246]
                    - listitem [ref=e248]:
                      - button "Integrations" [ref=e250] [cursor=pointer]:
                        - img [ref=e251]
                        - generic [ref=e253]: Integrations
                  - generic [ref=e254]:
                    - img [ref=e256]
                    - heading "See VWO in Action" [level=5] [ref=e258]
                    - paragraph [ref=e259]: Browse prebuilt experiments and sample data to see VWO in action, no setup required.
                    - button "Create Demo Workspace" [ref=e260] [cursor=pointer]:
                      - img [ref=e261]
                      - generic [ref=e263]: Create Demo Workspace
              - generic [ref=e264]:
                - generic [ref=e265]:
                  - img [ref=e267]
                  - generic [ref=e269]:
                    - heading "Basic Setup" [level=4] [ref=e270]
                    - paragraph [ref=e271]: Complete essential setup tasks to get your account up and running
                  - paragraph [ref=e273]: Takes about 17 min
                - generic [ref=e274]:
                  - generic [ref=e276] [cursor=pointer]:
                    - heading "Account Verified" [level=5] [ref=e278]
                    - img [ref=e281]
                  - generic [ref=e286] [cursor=pointer]:
                    - heading "Review Data Center" [level=5] [ref=e288]
                    - img [ref=e291]
                  - generic [ref=e296] [cursor=pointer]:
                    - heading "Review Products" [level=5] [ref=e298]
                    - img [ref=e301]
                  - generic [ref=e305]:
                    - generic [ref=e306]:
                      - heading "Connect Your First Website" [level=5] [ref=e308]
                      - paragraph [ref=e311]: 3 min
                    - generic [ref=e313]:
                      - generic [ref=e314]:
                        - generic [ref=e315]:
                          - heading "1" [level=6] [ref=e316]:
                            - generic [ref=e317]: "1"
                          - heading "Generate SmartCode" [level=6] [ref=e318]
                        - separator [ref=e319]
                        - generic [ref=e320]:
                          - heading "2" [level=6] [ref=e321]:
                            - generic [ref=e322]: "2"
                          - heading "Verify SmartCode" [level=6] [ref=e323]
                      - generic [ref=e325]:
                        - generic [ref=e329]:
                          - generic [ref=e330]:
                            - generic [ref=e331] [cursor=pointer]: Enter domain
                            - textbox "example.com" [ref=e332]: https://1maillt.store
                          - generic [ref=e335] [cursor=pointer]:
                            - generic [ref=e336]: Automatically register and track all sub-domains
                            - img [ref=e338]
                          - generic [ref=e340]:
                            - img [ref=e342]
                            - generic [ref=e344]:
                              - heading "Why is this needed?" [level=5] [ref=e345]
                              - paragraph [ref=e346]: Your domain name is used to generate the SmartCode and helps us auto-verify the installation.
                        - button "Add domain" [ref=e350] [cursor=pointer]
                  - generic [ref=e352] [cursor=pointer]:
                    - heading "Debug your website" [level=5] [ref=e354]
                    - paragraph [ref=e357]: 2 min
                  - generic [ref=e359] [cursor=pointer]:
                    - heading "Invite your team" [level=5] [ref=e361]
                    - paragraph [ref=e364]: 2 min
                  - generic [ref=e366] [cursor=pointer]:
                    - heading "Review Currency and Timezone Settings" [level=5] [ref=e368]
                    - paragraph [ref=e371]: 2 min
                  - generic [ref=e373] [cursor=pointer]:
                    - heading "Add VWO Chrome Extension" [level=5] [ref=e375]
                    - paragraph [ref=e378]: 2 min
          - img [ref=e379]
      - generic [ref=e383]:
        - list [ref=e385]:
          - listitem [ref=e386] [cursor=pointer]:
            - button "Get Support" [ref=e387]:
              - img [ref=e388]
              - generic [ref=e390]: Get Support
          - listitem [ref=e391] [cursor=pointer]:
            - link "Developer resources" [ref=e392]:
              - /url: "#/developers"
              - img [ref=e393]
              - generic [ref=e395]: Developer resources
          - listitem [ref=e396] [cursor=pointer]:
            - link "Give us a call" [ref=e397]:
              - /url: tel:+14153493207
              - img [ref=e398]
              - generic [ref=e400]: +1-415-349-3207
        - list [ref=e402]:
          - listitem [ref=e403] [cursor=pointer]:
            - link "Show logged in users" [ref=e404]:
              - /url: javascript:void(0)
              - img [ref=e405]
              - generic [ref=e407]: Show logged in users
          - listitem [ref=e408] [cursor=pointer]:
            - link "Uptime Status" [ref=e409]:
              - /url: https://secure-stats.pingdom.com/yd4ybaf8hhh2
              - img [ref=e410]
              - generic [ref=e412]: Uptime Status
        - generic [ref=e414]:
          - link "Visit wingify.com" [ref=e415] [cursor=pointer]:
            - /url: https://wingify.com
            - img "Wingify logo" [ref=e416]
          - generic [ref=e417]:
            - img [ref=e418]
            - generic [ref=e420]: Language option is now under your profile icon in the top bar.
  - img [ref=e421]:
    - generic:
      - img
  - img [ref=e422]
  - img [ref=e423]
  - img [ref=e424]
  - img [ref=e425]
  - img [ref=e426]
  - img [ref=e427]
  - img [ref=e428]
  - img [ref=e429]
  - img [ref=e430]
  - img [ref=e431]
  - img [ref=e432]
  - img [ref=e433]
  - img [ref=e434]
  - img [ref=e435]
  - img [ref=e436]
  - img [ref=e437]
  - img [ref=e438]
  - textbox [ref=e439]
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
     |              ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  21 |   await expect(page).toHaveTitle("Dashboard");
  22 | });
  23 | 
```