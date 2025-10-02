import asyncio
from playwright.sync_api import sync_playwright, Page, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 1000})
        page.goto("file:///app/index.html")

        # Remove 'light-mode' to apply dark theme
        page.evaluate("document.documentElement.classList.remove('light-mode')")

        # Scroll to the projects section
        projects_section = page.locator("#projects")
        projects_section.scroll_into_view_if_needed()

        # Wait for the projects to be visible and for animations to complete
        page.wait_for_selector('.projects .project.active', state='visible')
        page.wait_for_timeout(500) # Wait for CSS transitions

        # Take a screenshot of the projects section
        projects_section.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run()