const { execSync } = require('child_process');

module.exports = async () => {
  try {
    // Generate the Allure report
    //For Mac
    //execSync('rm -rf allure-report', { stdio: 'inherit' });
    //execSync('allure generate allure-results --clean', { stdio: 'inherit' });

    //For windows
    execSync('rmdir /s /q allure-report', { stdio: 'inherit' });
    execSync('allure generate allure-results --clean', { stdio: 'inherit' });

    // Automatically open the Allure report in the default browser
    execSync('allure open ./allure-report', { stdio: 'inherit' });
  } catch (err) {
    console.error('Failed to generate or open Allure report', err);
  }
};