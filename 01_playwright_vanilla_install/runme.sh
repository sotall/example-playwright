#!/bin/bash

# Delete previousruns
rm -rf demo

# Install Playwright
mkdir -p demo
cd demo || exit
npm init -y
npm install playwright@^1.0.0 --save-dev
npm install --save-dev @playwright/test
npx playwright install

# Create the e2e folder if it doesn't exist
mkdir -p e2e

# Create the Playwright test spec file
filename="e2e/example.spec.js"
cat >$filename <<EOL
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});
EOL

echo "Created $filename"

# Create the Playwright Config file
filename="playwright.config.js"
cat >$filename <<EOL
const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'html'
});
EOL

echo "Created $filename"

# Run the test
npx playwright test --headed
