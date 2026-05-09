# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project6.spec.ts >> Verify user can search Kabir Khan and select employee checkbox from searchbox
- Location: tests\Projects\Project6.spec.ts:33:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Search employees...')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ./index.html
        - generic [ref=e6]: T
        - strong [ref=e8]: The Testing Academy
      - button "Toggle sidebar" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic [ref=e13]:
      - img [ref=e14]
      - searchbox / [ref=e17]
      - generic [ref=e18]: /
    - navigation [ref=e19]:
      - generic [ref=e20]:
        - paragraph [ref=e21]:
          - img [ref=e22]
          - generic [ref=e24]: Get started
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Overview" [ref=e27] [cursor=pointer]:
              - /url: ./index.html
              - img [ref=e29]
              - generic [ref=e32]: Overview
      - generic [ref=e33]:
        - paragraph [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Selectors & Locators
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Multiple Element Filter" [ref=e40] [cursor=pointer]:
              - /url: ./multiple_element_filter.html
              - img [ref=e42]
              - generic [ref=e45]: Multiple Element Filter
          - listitem [ref=e46]:
            - link "Web Table Directory" [ref=e47] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e49]
              - generic [ref=e54]: Web Table Directory
      - generic [ref=e55]:
        - paragraph [ref=e56]:
          - img [ref=e57]
          - generic [ref=e60]: Tables & Forms
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "QA Profile Form" [ref=e63] [cursor=pointer]:
              - /url: ./tables/practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ./tables/webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ./tables/webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ./tables/dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ./tables/select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ./tables/sortable.html
              - generic [ref=e99]: Sortable Admin Table
      - generic [ref=e100]:
        - paragraph [ref=e101]:
          - img [ref=e102]
          - generic [ref=e107]: Frames
        - list [ref=e108]:
          - listitem [ref=e109]:
            - link "Frames overview" [ref=e110] [cursor=pointer]:
              - /url: ./frames/index.html
              - img [ref=e112]
              - generic [ref=e114]: Frames overview
          - listitem [ref=e115]:
            - link "Multi-frame frameset" [ref=e116] [cursor=pointer]:
              - /url: ./frames/multi-frames.html
              - img [ref=e118]
              - generic [ref=e123]: Multi-frame frameset
          - listitem [ref=e124]:
            - link "Nested iframes" [ref=e125] [cursor=pointer]:
              - /url: ./frames/nested-iframes.html
              - img [ref=e127]
              - generic [ref=e131]: Nested iframes
          - listitem [ref=e132]:
            - link "Courses frameset" [ref=e133] [cursor=pointer]:
              - /url: ./frames/courses-frameset.html
              - generic [ref=e135]: Courses frameset
      - generic [ref=e136]:
        - paragraph [ref=e137]:
          - img [ref=e138]
          - generic [ref=e141]: Widgets
        - list [ref=e142]:
          - listitem [ref=e143]:
            - link "SVG locators" [ref=e144] [cursor=pointer]:
              - /url: ./widgets/svg.html
              - generic [ref=e146]: SVG locators
          - listitem [ref=e147]:
            - link "Shadow DOM" [ref=e148] [cursor=pointer]:
              - /url: ./widgets/shadow-dom.html
              - generic [ref=e150]: Shadow DOM
          - listitem [ref=e151]:
            - link "Calendar / date picker" [ref=e152] [cursor=pointer]:
              - /url: ./widgets/calendar.html
              - generic [ref=e154]: Calendar / date picker
          - listitem [ref=e155]:
            - link "Drag & drop Kanban" [ref=e156] [cursor=pointer]:
              - /url: ./widgets/dnd.html
              - generic [ref=e158]: Drag & drop Kanban
          - listitem [ref=e159]:
            - link "Toasts & notifications" [ref=e160] [cursor=pointer]:
              - /url: ./widgets/toasts.html
              - generic [ref=e162]: Toasts & notifications
          - listitem [ref=e163]:
            - link "Native dialogs" [ref=e164] [cursor=pointer]:
              - /url: ./widgets/dialogs.html
              - generic [ref=e166]: Native dialogs
      - generic [ref=e167]:
        - paragraph [ref=e168]:
          - img [ref=e169]
          - generic [ref=e172]: Network
        - list [ref=e173]:
          - listitem [ref=e174]:
            - link "Network interception" [ref=e175] [cursor=pointer]:
              - /url: ./network/intercept.html
              - generic [ref=e177]: Network interception
      - generic [ref=e178]:
        - paragraph [ref=e179]:
          - img [ref=e180]
          - generic [ref=e182]: Coming next
        - list [ref=e183]:
          - listitem [ref=e184]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e185]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e186]:
      - generic [ref=e187]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e188] [cursor=pointer]:
        - img [ref=e189]
  - generic [ref=e191]:
    - banner [ref=e192]:
      - button "Open sidebar" [ref=e193] [cursor=pointer]:
        - img [ref=e194]
      - generic [ref=e196]:
        - link "Practice" [ref=e197] [cursor=pointer]:
          - /url: ./index.html
        - img [ref=e198]
        - strong [ref=e200]: Web Table Directory
      - generic [ref=e201]:
        - generic [ref=e202]: 10 rows
        - button "Toggle dark mode" [ref=e203] [cursor=pointer]:
          - img [ref=e204]
          - img [ref=e206]
    - main [ref=e209]:
      - region "CloudOps India Employee Directory" [ref=e210]:
        - generic [ref=e211]: Locator practice · Web table
        - heading "CloudOps India Employee Directory" [level=1] [ref=e213]:
          - text: CloudOps India
          - emphasis [ref=e214]: Employee Directory
        - paragraph [ref=e215]:
          - text: A realistic employee table built for practising XPath sibling traversal, CSS
          - code [ref=e216]: :has()
          - text: ", checkbox selection, and extracting row data. The data is intentionally Indianised so the names feel familiar."
        - generic [ref=e217]:
          - generic [ref=e218]:
            - strong [ref=e219]: "10"
            - generic [ref=e220]: Employee rows
          - generic [ref=e221]:
            - strong [ref=e222]: "7"
            - generic [ref=e223]: Visible columns
          - generic [ref=e224]:
            - strong [ref=e225]: "3"
            - generic [ref=e226]: Selector patterns
          - generic [ref=e227]:
            - strong [ref=e228]: "0"
            - generic [ref=e229]: External APIs
      - region "Web table practice workspace" [ref=e230]:
        - generic [ref=e231]:
          - generic [ref=e232]:
            - generic [ref=e233]:
              - heading "CloudOps India Employee Directory" [level=2] [ref=e234]
              - paragraph [ref=e235]: Use this table to practise locating rows, checkboxes, and sibling columns.
            - generic [ref=e236]: Practice page
          - generic "Table tools" [ref=e237]:
            - searchbox "Search employee table" [ref=e238]
            - button "Select Cloud QA" [ref=e239] [cursor=pointer]
            - button "Clear" [ref=e240] [cursor=pointer]
          - table "Employee Management System table" [ref=e242]:
            - rowgroup [ref=e243]:
              - row "Select Username Employee Name User Role City Project Status" [ref=e244]:
                - columnheader "Select" [ref=e245]
                - columnheader "Username" [ref=e246]
                - columnheader "Employee Name" [ref=e247]
                - columnheader "User Role" [ref=e248]
                - columnheader "City" [ref=e249]
                - columnheader "Project" [ref=e250]
                - columnheader "Status" [ref=e251]
            - rowgroup [ref=e252]:
              - row "Select Aarav.Sharma Aarav.Sharma AS Aarav Sharma EMP-1001 QA Engineer Pune Cloud QA Active" [ref=e253]:
                - cell "Select Aarav.Sharma" [ref=e254]:
                  - checkbox "Select Aarav.Sharma" [ref=e255] [cursor=pointer]
                - cell "Aarav.Sharma" [ref=e256]
                - cell "AS Aarav Sharma EMP-1001" [ref=e257]:
                  - generic [ref=e258]:
                    - generic [ref=e259]: AS
                    - generic [ref=e260]:
                      - strong [ref=e261]: Aarav Sharma
                      - generic [ref=e262]: EMP-1001
                - cell "QA Engineer" [ref=e263]
                - cell "Pune" [ref=e264]
                - cell "Cloud QA" [ref=e265]
                - cell "Active" [ref=e266]:
                  - generic [ref=e267]: Active
              - row "Select Priya.Nair Priya.Nair PN Priya Nair EMP-1002 Product Owner Bengaluru Nimbus CRM Active" [ref=e268]:
                - cell "Select Priya.Nair" [ref=e269]:
                  - checkbox "Select Priya.Nair" [ref=e270] [cursor=pointer]
                - cell "Priya.Nair" [ref=e271]
                - cell "PN Priya Nair EMP-1002" [ref=e272]:
                  - generic [ref=e273]:
                    - generic [ref=e274]: PN
                    - generic [ref=e275]:
                      - strong [ref=e276]: Priya Nair
                      - generic [ref=e277]: EMP-1002
                - cell "Product Owner" [ref=e278]
                - cell "Bengaluru" [ref=e279]
                - cell "Nimbus CRM" [ref=e280]
                - cell "Active" [ref=e281]:
                  - generic [ref=e282]: Active
              - row "Select Rohan.Mehta Rohan.Mehta RM Rohan Mehta EMP-1003 SDET Lead Gurugram Cloud QA Active" [ref=e283]:
                - cell "Select Rohan.Mehta" [ref=e284]:
                  - checkbox "Select Rohan.Mehta" [ref=e285] [cursor=pointer]
                - cell "Rohan.Mehta" [ref=e286]
                - cell "RM Rohan Mehta EMP-1003" [ref=e287]:
                  - generic [ref=e288]:
                    - generic [ref=e289]: RM
                    - generic [ref=e290]:
                      - strong [ref=e291]: Rohan Mehta
                      - generic [ref=e292]: EMP-1003
                - cell "SDET Lead" [ref=e293]
                - cell "Gurugram" [ref=e294]
                - cell "Cloud QA" [ref=e295]
                - cell "Active" [ref=e296]:
                  - generic [ref=e297]: Active
              - row "Select Ananya.Iyer Ananya.Iyer AI Ananya Iyer EMP-1004 DevOps Engineer Chennai Monsoon Pay Onboarding" [ref=e298]:
                - cell "Select Ananya.Iyer" [ref=e299]:
                  - checkbox "Select Ananya.Iyer" [ref=e300] [cursor=pointer]
                - cell "Ananya.Iyer" [ref=e301]
                - cell "AI Ananya Iyer EMP-1004" [ref=e302]:
                  - generic [ref=e303]:
                    - generic [ref=e304]: AI
                    - generic [ref=e305]:
                      - strong [ref=e306]: Ananya Iyer
                      - generic [ref=e307]: EMP-1004
                - cell "DevOps Engineer" [ref=e308]
                - cell "Chennai" [ref=e309]
                - cell "Monsoon Pay" [ref=e310]
                - cell "Onboarding" [ref=e311]:
                  - generic [ref=e312]: Onboarding
              - row "Select Kabir.Khan Kabir.Khan KK Kabir Khan EMP-1005 Security Tester Hyderabad Udaan Risk Active" [ref=e313]:
                - cell "Select Kabir.Khan" [ref=e314]:
                  - checkbox "Select Kabir.Khan" [ref=e315] [cursor=pointer]
                - cell "Kabir.Khan" [ref=e316]
                - cell "KK Kabir Khan EMP-1005" [ref=e317]:
                  - generic [ref=e318]:
                    - generic [ref=e319]: KK
                    - generic [ref=e320]:
                      - strong [ref=e321]: Kabir Khan
                      - generic [ref=e322]: EMP-1005
                - cell "Security Tester" [ref=e323]
                - cell "Hyderabad" [ref=e324]
                - cell "Udaan Risk" [ref=e325]
                - cell "Active" [ref=e326]:
                  - generic [ref=e327]: Active
              - row "Select Meera.Rao Meera.Rao MR Meera Rao EMP-1006 Automation Architect Mumbai Cloud Ledger Active" [ref=e328]:
                - cell "Select Meera.Rao" [ref=e329]:
                  - checkbox "Select Meera.Rao" [ref=e330] [cursor=pointer]
                - cell "Meera.Rao" [ref=e331]
                - cell "MR Meera Rao EMP-1006" [ref=e332]:
                  - generic [ref=e333]:
                    - generic [ref=e334]: MR
                    - generic [ref=e335]:
                      - strong [ref=e336]: Meera Rao
                      - generic [ref=e337]: EMP-1006
                - cell "Automation Architect" [ref=e338]
                - cell "Mumbai" [ref=e339]
                - cell "Cloud Ledger" [ref=e340]
                - cell "Active" [ref=e341]:
                  - generic [ref=e342]: Active
              - row "Select Vikram.Singh Vikram.Singh VS Vikram Singh EMP-1007 API Tester Noida Bharat API Inactive" [ref=e343]:
                - cell "Select Vikram.Singh" [ref=e344]:
                  - checkbox "Select Vikram.Singh" [ref=e345] [cursor=pointer]
                - cell "Vikram.Singh" [ref=e346]
                - cell "VS Vikram Singh EMP-1007" [ref=e347]:
                  - generic [ref=e348]:
                    - generic [ref=e349]: VS
                    - generic [ref=e350]:
                      - strong [ref=e351]: Vikram Singh
                      - generic [ref=e352]: EMP-1007
                - cell "API Tester" [ref=e353]
                - cell "Noida" [ref=e354]
                - cell "Bharat API" [ref=e355]
                - cell "Inactive" [ref=e356]:
                  - generic [ref=e357]: Inactive
              - row "Select Neha.Patel Neha.Patel NP Neha Patel EMP-1008 Release Manager Ahmedabad Cloud Retail Active" [ref=e358]:
                - cell "Select Neha.Patel" [ref=e359]:
                  - checkbox "Select Neha.Patel" [ref=e360] [cursor=pointer]
                - cell "Neha.Patel" [ref=e361]
                - cell "NP Neha Patel EMP-1008" [ref=e362]:
                  - generic [ref=e363]:
                    - generic [ref=e364]: NP
                    - generic [ref=e365]:
                      - strong [ref=e366]: Neha Patel
                      - generic [ref=e367]: EMP-1008
                - cell "Release Manager" [ref=e368]
                - cell "Ahmedabad" [ref=e369]
                - cell "Cloud Retail" [ref=e370]
                - cell "Active" [ref=e371]:
                  - generic [ref=e372]: Active
              - row "Select Ishaan.Das Ishaan.Das ID Ishaan Das EMP-1009 Manual Tester Kolkata Cloud QA Onboarding" [ref=e373]:
                - cell "Select Ishaan.Das" [ref=e374]:
                  - checkbox "Select Ishaan.Das" [ref=e375] [cursor=pointer]
                - cell "Ishaan.Das" [ref=e376]
                - cell "ID Ishaan Das EMP-1009" [ref=e377]:
                  - generic [ref=e378]:
                    - generic [ref=e379]: ID
                    - generic [ref=e380]:
                      - strong [ref=e381]: Ishaan Das
                      - generic [ref=e382]: EMP-1009
                - cell "Manual Tester" [ref=e383]
                - cell "Kolkata" [ref=e384]
                - cell "Cloud QA" [ref=e385]
                - cell "Onboarding" [ref=e386]:
                  - generic [ref=e387]: Onboarding
              - row "Select Sana.Qureshi Sana.Qureshi SQ Sana Qureshi EMP-1010 Data QA Analyst Indore Sky Analytics Active" [ref=e388]:
                - cell "Select Sana.Qureshi" [ref=e389]:
                  - checkbox "Select Sana.Qureshi" [ref=e390] [cursor=pointer]
                - cell "Sana.Qureshi" [ref=e391]
                - cell "SQ Sana Qureshi EMP-1010" [ref=e392]:
                  - generic [ref=e393]:
                    - generic [ref=e394]: SQ
                    - generic [ref=e395]:
                      - strong [ref=e396]: Sana Qureshi
                      - generic [ref=e397]: EMP-1010
                - cell "Data QA Analyst" [ref=e398]
                - cell "Indore" [ref=e399]
                - cell "Sky Analytics" [ref=e400]
                - cell "Active" [ref=e401]:
                  - generic [ref=e402]: Active
          - generic [ref=e403]:
            - generic [ref=e404]:
              - generic [ref=e405]: 10 visible rows
              - generic [ref=e406]: 0 selected
            - generic [ref=e407]: Selected usernames will appear here.
        - complementary "Lesson and solution" [ref=e408]:
          - generic [ref=e409]:
            - heading "What students should practise" [level=2] [ref=e410]
            - paragraph [ref=e411]: The page is the problem. Try these on your own first — the solution stays hidden until you reveal it.
            - list [ref=e412]:
              - listitem [ref=e413]: Click the checkbox beside a username using XPath preceding-sibling.
              - listitem [ref=e414]:
                - text: Find a complete row using CSS
                - code [ref=e415]: tr:has(td:text(...))
                - text: .
              - listitem [ref=e416]: Read all the data after a username using following-sibling columns.
              - listitem [ref=e417]: Filter rows by team, city, role, or status without relying on hardcoded row numbers.
          - group [ref=e418]:
            - generic "Playwright solution Try the practice first — reveal the snippet only when you need a hint. Show solution" [ref=e419] [cursor=pointer]:
              - img [ref=e421]
              - generic [ref=e423]:
                - strong [ref=e424]: Playwright solution
                - generic [ref=e425]: Try the practice first — reveal the snippet only when you need a hint.
              - generic [ref=e426]: Show solution
```

# Test source

```ts
  1  | import { test, expect, Locator } from "@playwright/test";
  2  | 
  3  | test("Verify Kabir Khan is visible in the web table and select checkbox", async ({
  4  |   page,
  5  | }) => {
  6  |   await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  7  | 
  8  |   const tableRows: Locator = page.locator("#employee-body tr");
  9  | 
  10 |   const rowCount = await tableRows.count();
  11 | 
  12 |   for (let index = 0; index < rowCount; index++) {
  13 |     const currentRow = tableRows.nth(index);
  14 | 
  15 |     const rowText = await currentRow.innerText();
  16 | 
  17 |     if (rowText.includes("Kabir Khan")) {
  18 |       console.log(`Employee Found: ${rowText}`);
  19 | 
  20 |       const checkbox = currentRow.locator('input[type="checkbox"]');
  21 | 
  22 |       await checkbox.check();
  23 | 
  24 |       await expect(checkbox).toBeChecked();
  25 | 
  26 |       break;
  27 |     }
  28 |   }
  29 | });
  30 | 
  31 | // Another way
  32 | 
  33 | test("Verify user can search Kabir Khan and select employee checkbox from searchbox", async ({
  34 |   page,
  35 | }) => {
  36 |   await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  37 |   const searchInput: Locator = page.getByPlaceholder("Search employees...");
  38 | 
> 39 |   await searchInput.fill("Kabir Khan");
     |                     ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  40 | 
  41 |   const userRow: Locator = page
  42 |     .locator("#employee-body tr")
  43 |     .filter({ hasText: "Kabir Khan" });
  44 | 
  45 |   await expect(userRow).toBeVisible();
  46 | 
  47 |   await expect(userRow).toContainText("kabir@example.com");
  48 |   await expect(userRow).toContainText("Marketing");
  49 |   await expect(userRow).toContainText("Manager");
  50 | 
  51 |   const employeeCheckbox: Locator = userRow.locator('input[type="checkbox"]');
  52 |   await employeeCheckbox.check();
  53 |   await expect(employeeCheckbox).toBeChecked();
  54 |   console.log("Kabir Khan record verified successfully.");
  55 | });
  56 | 
```