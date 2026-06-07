import { test, expect } from "@playwright/test";

test.describe("Mobile Drawer functionality", () => {
  // Configurar para emular mobile em todos os testes deste describe
  test.use({ viewport: { width: 375, height: 667 }, hasTouch: true });

  test.beforeEach(async ({ page }) => {
    // Go to home page
    await page.goto("./");
  });

  test("should open and close projects drawer on mobile", async ({ page }) => {
    // Scroll to projects section to ensure it's visible/loaded
    await page.locator("#projects").scrollIntoViewIfNeeded();

    const filterBtn = page.locator(".projects__mobile-filter-btn");
    await expect(filterBtn).toBeVisible();

    const drawerPanel = page.locator("#projectsFiltersDrawer");
    const drawerOverlay = page.locator("#projectsFiltersDrawerOverlay");

    // Click to open drawer - retry until open because of dynamic import hydration
    await expect(async () => {
      await filterBtn.click();
      await expect(drawerPanel).toHaveClass(/is-open/, { timeout: 1000 });
    }).toPass({ timeout: 10000 });

    // Drawer should have is-open class
    await expect(drawerPanel).toHaveClass(/is-open/);
    await expect(drawerOverlay).toHaveClass(/is-open/);

    // Click close button
    const closeBtn = drawerPanel.locator(".drawer__close");
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();

    // Drawer should close
    await expect(drawerPanel).not.toHaveClass(/is-open/);
  });

  test("should open and close skills drawer on mobile", async ({ page }) => {
    await page.locator("#skills").scrollIntoViewIfNeeded();

    const filterBtn = page.locator(".skills__mobile-cat-btn").first();
    await expect(filterBtn).toBeVisible();

    const drawerPanel = page.locator("#skillsDrawer");

    // Click to open drawer - retry until open
    await expect(async () => {
      await filterBtn.click();
      await expect(drawerPanel).toHaveClass(/is-open/, { timeout: 1000 });
    }).toPass({ timeout: 10000 });

    // Drawer should open
    await expect(drawerPanel).toHaveClass(/is-open/);

    const closeBtn = drawerPanel.locator(".drawer__close");
    await closeBtn.click();

    await expect(drawerPanel).not.toHaveClass(/is-open/);
  });
});
