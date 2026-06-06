import { test, expect } from "@playwright/test";

test.describe("Visual Regression", () => {
  test("homepage visual snapshot", async ({ page }) => {
    await page.goto("./");

    // Wait for animations and fonts to load
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);

    // Take a full page screenshot and compare it
    await expect(page).toHaveScreenshot("homepage-full.png", {
      fullPage: true,
    });
  });
});
