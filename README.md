# Playwright

1. Prerequisites

Ensure you have the latest version of `Node.js` installed on your machine. You can download and install it from the official Node.js website. Make sure Node.js is configured in the environment variable path settings.

Url: `https://nodejs.org/en/download/prebuilt-installer/current`

2. Create a new project directory in git and navigate into it

`mkdir my-playwright-project`
`cd my-playwright-project`

3. Initialize a New Node.js Project:

`npm init -y`

This will create a package.json file in your project directory.

4. Install Playwright and its testing library:

`npm install playwright`

5. Playwright can automatically install the required browsers (Chromium, Firefox, and WebKit) with the following command:

`npx playwright install`

6. Run your test with the following command:

`npx playwright test`

7. Run your tests using the configuration file:

`npx playwright test --config=playwright.config.js`
