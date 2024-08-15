const { test } = require('./fixtures/basePage');
const { allure } = require('allure-playwright');

test('Automation exercise - Account Setup', async ({ loginPage, accountCreationPage }) => {
    allure.description('Automation exercise - Account Setup');
    allure.severity('critical');
    await loginPage.gotoSignUp_Login_Page();
    await loginPage.newUserID();
    await loginPage.enterAccountInformation('1', 'March', '1994');
    await loginPage.clickOnCreateAccount();
    await accountCreationPage.validateAccountCreation();
});

test('Login into Account - Add and Delete Products in Cart', async ({ loginPage, productDescriptionPage }) => {
    await allure.description('Login into Account - Add and Delete Products in Cart');
    await allure.severity('Major');
    await loginPage.gotoSignUp_Login_Page();
    await loginPage.loginAccount("testplaywright@mailinator.com", "Playwright@123");
    await productDescriptionPage.selectCategoryMens();
    await productDescriptionPage.addProductToCart();
});