import { test, expect } from "@playwright/test";

test.describe("Projects Explorer Filters", () => {
  test("should filter projects when searching and show empty state", async ({
    page,
  }) => {
    // Navigate to the projects page
    await page.goto("projects/");

    // Ensure the projects grid is visible
    const grid = page.locator("[data-projects-grid]");
    await expect(grid).toBeVisible();

    // Get the initial count of projects
    const countElement = page.locator("[data-projects-count]");
    // JS needs to execute, so we wait for the counter to be initialized
    await expect(countElement).not.toBeEmpty();

    const initialCountText = await countElement.textContent();
    const initialCount = parseInt(initialCountText || "0", 10);
    expect(initialCount).toBeGreaterThan(0);

    // Type a string that will definitely yield 0 results
    const searchInput = page.locator("[data-projects-search]");
    await searchInput.fill("zzz_non_existent_project_zzz");

    // Wait for the count to become '0'
    await expect(countElement).toHaveText("0");

    // The empty state message should become visible
    const emptyState = page.locator("[data-projects-empty]");
    await expect(emptyState).not.toHaveClass(/is-hidden/);

    // Click the clear filters button
    const clearButton = page.locator("[data-projects-clear]");
    await clearButton.click();

    // The count should go back to the original count
    await expect(countElement).toHaveText(initialCountText as string);

    // The empty state should be hidden again
    await expect(emptyState).toHaveClass(/is-hidden/);
  });
});
