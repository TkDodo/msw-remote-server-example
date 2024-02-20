import { test, expect } from "@playwright/test";

test("renders post", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");

  await expect(page.getByText("Loading tRPC query...")).toBeVisible();
  await expect(page.getByText("sunt aut facere")).toBeVisible();
});
