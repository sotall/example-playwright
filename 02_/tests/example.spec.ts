import { test, expect } from "@playwright/test";

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

test("get started link", async ({ page }) => {
  // Navigate to the SSO login page
  await page.goto("https://opportunity-to-learn.nwea.org");

  // Wait for the login page to load
  await page.waitForLoadState("networkidle");

  // Fill in the login form
  await page.fill("#username", "a.walrus");
  await page.fill("#password", "p0rtl4nd");

  // Submit the login form
  // await page.click('#login-button');
  await page.getByRole("button", { name: "LOG IN" }).click();
  
  // wait for 10 seconds
  await page.waitForTimeout(1000);

  // try {
  //   await page.getByRole("button", { name: "OK" }).click();
  // } catch (error) {
  //   //
  // }
  
  await frame.waitForURL("https://opportunity-to-learn.nwea.org/");


  // Wait for the SSO authentication to complete
  await page.waitForLoadState('networkidle');

  // You are now logged in and can perform further actions
  // For example, you can navigate to a specific page and perform some actions

  // Close the browser
  // await browser.close();
});
