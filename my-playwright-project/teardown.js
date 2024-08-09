const { execSync } = require('child_process');

module.exports = async () => {
  try {
    // Generate the Allure report
    execSync('rm -rf allure-report', { stdio: 'inherit' });
    execSync('allure generate allure-results --clean', { stdio: 'inherit' });

    // Automatically open the Allure report in the default browser
    execSync('allure open', { stdio: 'inherit' });
  } catch (err) {
    console.error('Failed to generate or open Allure report', err);
  }
};