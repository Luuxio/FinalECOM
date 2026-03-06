import { test, expect } from "@playwright/test";

test("Authentification", async ({ page }) =>
{
    await page.goto("http://localhost:5173/login");

    await page.fill("#email", "admin@example.com");
    await page.fill("#password", "admin123");
    await page.click("button[type='submit']")

    await expect(page.getByText("Mon Profil")).toBeVisible();
});
