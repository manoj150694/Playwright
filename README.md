# Playwright

1. Prerequisites
Ensure you have Node.js installed on your machine. You can download and install it from Node.js official website.

2. Create a New Project Directory
Create a new directory for your project and navigate into it:

sh
Copy code
mkdir my-playwright-project
cd my-playwright-project
3. Initialize a New Node.js Project
Initialize a new Node.js project by running:

sh
Copy code
npm init -y
This will create a package.json file in your project directory.

4. Install Playwright
Install Playwright and its testing library:

sh
Copy code
npm install @playwright/test
5. Install Browsers
Playwright can automatically install the required browsers (Chromium, Firefox, and WebKit) with the following command:

sh
Copy code
npx playwright install
6. Create Your First Test
Create a test file, e.g., example.spec.js, in your project directory:

js
Copy code
// example.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
7. Run Your Test
Run your test with the following command:

sh
Copy code
npx playwright test
8. View Results
Playwright will execute the test and output the results in the terminal. You should see something like this if the test passes:

bash
Copy code
Running 1 test using 1 worker
  ✓  [chromium] › example.spec.js:3:1 › basic test (1s)
9. Additional Configuration (Optional)
For more complex projects, you might want to add a Playwright configuration file. Create a playwright.config.js file in your project directory:

js
Copy code
// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
};
Then you can organize your tests in the tests directory.

10. Running Tests with Configuration
Run your tests using the configuration file:

sh
Copy code
npx playwright test --config=playwright.config.js
Resources
For more detailed information and advanced usage, refer to the Playwright documentation.

By following these steps, you'll have a basic Playwright setup ready to write and execute tests for your web applications.