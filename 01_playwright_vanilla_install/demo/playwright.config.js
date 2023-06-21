const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'html'
});
