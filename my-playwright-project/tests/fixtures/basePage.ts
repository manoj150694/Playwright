//import { test as base } from '@playwright/test';
const base = require('@playwright/test')
import { LoginPage } from '../../pages/loginPage';
import { AccountCreationPage } from '../../pages/AccountCreationPage';

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    accountCreationPage: async ({ page }, use) => {
        const accountCreationPage = new AccountCreationPage(page);
        await use(accountCreationPage);
    },
});
exports.expect = base.expect;