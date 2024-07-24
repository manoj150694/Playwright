# Playwright

1. Prerequisites
Ensure you have Node.js installed on your machine. You can download and install it from Node.js official website.

2. Create a New Project Directory
Create a new directory for your project and navigate into it:

mkdir my-playwright-project
cd my-playwright-project
3. Initialize a New Node.js Project
Initialize a new Node.js project by running:

npm init -y
This will create a package.json file in your project directory.

4. Install Playwright
Install Playwright and its testing library:

npm install @playwright/test

5. Install Browsers
Playwright can automatically install the required browsers (Chromium, Firefox, and WebKit) with the following command:

npx playwright install

6. Run Your Test
Run your test with the following command:


npx playwright test

7. Running Tests with Configuration
Run your tests using the configuration file:

npx playwright test --config=playwright.config.js
