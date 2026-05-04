# Getting started with Allure Playwright
1. Make sure Node.js is installed.
2. Make sure that you run this command from the parent Playwright Folder,
     -> npm install --save-dev @playwright/test allure-playwright
3. In the playwright.config.ts add this line ["allure-playwright"]
4. Check Confgi - npx playwright test
5. Under test case 
       - import * as allure from "allure-js-commons";
       - await allure.epic("VWO Login Tests");
       - await allure.feature("Essential features");
       - await allure.story("Authentication");
6. Go to the Terminal -
   - export ALLURE_LABEL_epic=WebInterface
   - npx playwright test tests/05_Allure_Reporting/230_Login.spec.ts
7. Make sure that before running this command - npm i allure-commandline (one time)
8. To see the allure serve allure-results/

# 95 % Default playwright reporter
# 2-3 % Allure Reporter - HTML 
# 1% Custom Solution -> Create by using AI or you can reuse CostumTTA Report