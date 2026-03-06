import { test, expect } from "@playwright/test";

test("Products", async ({ page }) =>
{
    await page.goto("http://localhost:5173/login");

    await page.fill("#email", "admin@example.com");
    await page.fill("#password", "admin123");
    await page.click("button[type='submit']")

    await expect(page.getByText("Mon Profil")).toBeVisible();
    await page.goto("http://localhost:5173/product/1");

    expect(page.locator(".css-izhjt6")).toBeVisible();
});
