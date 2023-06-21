# Install and Run Playwright

## Description

-   This project demonstrates how to install and run Playwright the first time.

## Prerequisites

-   Node.js 14 or higher installed [link](https://nodejs.org/en/download/)

## Project Structure

-   The project consists of the following files:

## Usage

1. Option 1: Run Manually

    - Initialize as a new project -- (_accept the defaults during the prompts_)
        ```
        npm init playwright@latest --save-dev demo
        npx playwright test
        ```
    - OR - Install in an existing project
        ```
        npm install @playwright/test --save-dev
        npx playwright install
        ```

        `e2e/example.spec.ts` Create this file/folder and copy the below code into it.

        ```
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
        ```

        `playwright.config.ts` Create this file and copy the below code into it.
        ```
        const { defineConfig, devices } = require('@playwright/test');
        module.exports = defineConfig({
            testDir: './e2e',
            fullyParallel: true,
            reporter: 'html'
        });
        ```

        `npx playwright test`

2. Option 2: Run the bash script
    ```
    ./runme.sh
    ```

## Results

Open the report `npx playwright show-report`

## Notes

## File Breakdown

---

### Dockerfile

The

```

```

1.

---

### runme.sh

The `runme.sh`

```

```

1.

---

## Acknowledgements

-

<br>
<br>
<br>
Thank you for using and contributing to this project. Happy coding!
