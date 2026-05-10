import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,

  reporter: [
    ["html"],
    /* ["allure-playwright"],
    ["./reporters/CustomTTAReporter.ts"] */
  ],

  use: {
    /* Capture screenshot on every test — pass or fail */
    screenshot: "on",

    /* Record video for every test */
    video: "on",

    /* Capture trace for every test */
    trace: "on",

    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], headless: false },
    },
  ],
});
