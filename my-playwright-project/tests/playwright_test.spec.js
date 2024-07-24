// example.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.waitrose.com/');
  const title = await page.title();
  expect(title).toBe('Waitrose & Partners | Food | Drink | Recipes');
  await page.click('text=Allow all');
  await page.click('[data-element="search-term"]');
  await page.type('[data-element="search-term"]', 'carrots');
  await page.click('[aria-label="Search"]');
});
