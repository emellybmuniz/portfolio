import { test, expect } from "@playwright/test";

test.describe("Core Flows: Navbar & Navigability", () => {
  test("should load the homepage and display navbar", async ({
    page,
    isMobile,
  }) => {
    await page.goto("./");

    // Check if the navbar exists
    const navbar = page.locator("nav").first();
    if (!isMobile) {
      await expect(navbar).toBeVisible();
    }

    // Check if hero section is visible
    const hero = page.locator("#home, .hero").first();
    await expect(hero).toBeVisible();
  });

  test("should navigate to sections using navbar links", async ({
    page,
    isMobile,
  }) => {
    await page.goto("./");

    // Wait for the page to settle
    await page.waitForLoadState("networkidle");

    if (isMobile) {
      // Open mobile menu
      const menuButton = page.locator(
        '.navbar__mobile-toggle, button[aria-label="Menu"]',
      );
      if (await menuButton.isVisible()) {
        await menuButton.click();
      }
    }

    // Click on the 'Projetos' or 'Projects' link
    const projectsLink = page
      .locator(
        'nav a[href="#projetos"], nav a[href="#projects"], nav a:has-text("Projetos"), nav a:has-text("Projects")',
      )
      .first();

    if (await projectsLink.isVisible()) {
      await projectsLink.click();

      // Verify URL hash or scroll position
      await expect(page).toHaveURL(/#projetos|#projects/);
    }
  });
});

test.describe("Core Flows: Theme Switch", () => {
  test("should toggle theme and persist state", async ({ page }) => {
    await page.goto("./");

    // Attempt to find the theme toggle button
    const themeToggle = page
      .locator(
        '.theme-toggle, [data-theme-toggle], button[aria-label="Alternar tema"], button[aria-label="Toggle theme"]',
      )
      .first();

    if (await themeToggle.isVisible()) {
      // Get initial theme from html attribute (e.g., data-theme)
      const htmlElement = page.locator("html");
      const initialTheme =
        (await htmlElement.getAttribute("data-theme")) || "light";

      // Click to toggle
      await themeToggle.click();

      // Wait for a short moment for classes to apply
      await page.waitForTimeout(300);

      // Check if theme changed
      const newTheme = await htmlElement.getAttribute("data-theme");
      expect(newTheme).not.toBe(initialTheme);

      // Reload and check persistence
      await page.reload();
      const persistedTheme = await htmlElement.getAttribute("data-theme");
      expect(persistedTheme).toBe(newTheme);
    }
  });
});
