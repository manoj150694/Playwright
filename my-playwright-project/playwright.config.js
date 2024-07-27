// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 300000,
  use: {
    headless: false,
    video: 'on',
    viewport: { width: 1440, height: 900 },
    actionTimeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
  retries: 0,
   reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
  ],
};
