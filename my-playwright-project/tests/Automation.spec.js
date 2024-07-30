//***importing the playwright library from node_modules and assinging to test package***

const { test,expect } = require('./fixtures/basePage')
import { LoginPage } from '../pages/loginPage'
import { AccountCreationPage } from '../pages/AccountCreationPage'

test('Automation exercise - Account Setup', async ({ loginPage,accountCreationPage}) => {
    await loginPage.gotoSignUpPage();
    await loginPage.newUserID();
    await loginPage.enterAccountInformation('1', 'March', '1994');
    await loginPage.clickOnCreateAccount();
    await accountCreationPage.validateAccountCreation();
});