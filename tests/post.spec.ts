import { test, expect } from "@playwright/test";

import { setupRemoteServer } from "msw/node";
import { http, HttpResponse } from "msw";

const remote = setupRemoteServer();

test.beforeAll(async () => await remote.listen({ port: 3000 }));
test.afterEach(() => remote.resetHandlers());
test.afterAll(async () => await remote.close());

test("renders post", async ({ page }) => {
  remote.use(
    http.get("*", () => {
      return HttpResponse.json({
        id: 2,
        title: "Hello MSW",
      });
    }),
  );

  await page.goto("http://127.0.0.1:3000/");

  await expect(page.getByText("Loading tRPC query...")).toBeVisible();
  await expect(page.getByText("Hello MSW")).toBeVisible();
});
