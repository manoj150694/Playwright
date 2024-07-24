// example.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.waitrose.com/');
  const title = await page.title();
  expect(title).toBe('Flipkart');
});
