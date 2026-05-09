# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project6.spec.ts >> Verify user can search Kabir Khan and select employee checkbox from searc
- Location: tests\Projects\Project6.spec.ts:33:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#employee-body tr').filter({ hasText: 'Kabir Khan' })
Timeout: 5000ms
- Expected substring  - 1
+ Received string     + 9

- kabir@example.com
+
+                     
+                     Kabir.Khan
+                     KKKabir KhanEMP-1005
+                     Security Tester
+                     Hyderabad
+                     Udaan Risk
+                     Active
+                   

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#employee-body tr').filter({ hasText: 'Kabir Khan' })
    8 × locator resolved to <tr data-team="security" data-username="Kabir.Khan">…</tr>
      - unexpected value "
                    
                    Kabir.Khan
                    KKKabir KhanEMP-1005
                    Security Tester
                    Hyderabad
                    Udaan Risk
                    Active
                  "

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
            - searchbox "Search employee table" [active] [ref=e238]: Kabir Khan
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
              - row "Select Kabir.Khan Kabir.Khan KK Kabir Khan EMP-1005 Security Tester Hyderabad Udaan Risk Active" [ref=e253]:
                - cell "Select Kabir.Khan" [ref=e254]:
                  - checkbox "Select Kabir.Khan" [ref=e255] [cursor=pointer]
                - cell "Kabir.Khan" [ref=e256]
                - cell "KK Kabir Khan EMP-1005" [ref=e257]:
                  - generic [ref=e258]:
                    - generic [ref=e259]: KK
                    - generic [ref=e260]:
                      - strong [ref=e261]: Kabir Khan
                      - generic [ref=e262]: EMP-1005
                - cell "Security Tester" [ref=e263]
                - cell "Hyderabad" [ref=e264]
                - cell "Udaan Risk" [ref=e265]
                - cell "Active" [ref=e266]:
                  - generic [ref=e267]: Active
          - generic [ref=e268]:
            - generic [ref=e269]:
              - generic [ref=e270]: 1 visible rows
              - generic [ref=e271]: 0 selected
            - generic [ref=e272]: Selected usernames will appear here.
        - complementary "Lesson and solution" [ref=e273]:
          - generic [ref=e274]:
            - heading "What students should practise" [level=2] [ref=e275]
            - paragraph [ref=e276]: The page is the problem. Try these on your own first — the solution stays hidden until you reveal it.
            - list [ref=e277]:
              - listitem [ref=e278]: Click the checkbox beside a username using XPath preceding-sibling.
              - listitem [ref=e279]:
                - text: Find a complete row using CSS
                - code [ref=e280]: tr:has(td:text(...))
                - text: .
              - listitem [ref=e281]: Read all the data after a username using following-sibling columns.
              - listitem [ref=e282]: Filter rows by team, city, role, or status without relying on hardcoded row numbers.
          - group [ref=e283]:
            - generic "Playwright solution Try the practice first — reveal the snippet only when you need a hint. Show solution" [ref=e284] [cursor=pointer]:
              - img [ref=e286]
              - generic [ref=e288]:
                - strong [ref=e289]: Playwright solution
                - generic [ref=e290]: Try the practice first — reveal the snippet only when you need a hint.
              - generic [ref=e291]: Show solution
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
  33 | test("Verify user can search Kabir Khan and select employee checkbox from searc", async ({
  34 |   page,
  35 | }) => {
  36 |   await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  37 |   const searchInput: Locator = page.locator("#employee-search");
  38 | 
  39 |   await searchInput.fill("Kabir Khan");
  40 | 
  41 |   const userRow: Locator = page
  42 |     .locator("#employee-body tr")
  43 |     .filter({ hasText: "Kabir Khan" });
  44 | 
  45 |   await expect(userRow).toBeVisible();
  46 | 
> 47 |   await expect(userRow).toContainText("kabir@example.com");
     |                         ^ Error: expect(locator).toContainText(expected) failed
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