// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 300000,
  use: {
    headless: false,
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
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
};
