from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:8080/admin")
    expect(page.get_by_role("button", name="Login with Netlify Identity")).to_be_visible(timeout=15000)

    # Check that the error message is NOT present
    error_message = page.locator("text=There's been an error")
    expect(error_message).not_to_be_visible()

    page.screenshot(path="jules-scratch/verification/admin_fix.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)