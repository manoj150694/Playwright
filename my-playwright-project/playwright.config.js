// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 300000,
  use: {
    headless: false,
    viewport: { width: 1440, height: 900 },
    actionTimeout: 30000,
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
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
   reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
};
