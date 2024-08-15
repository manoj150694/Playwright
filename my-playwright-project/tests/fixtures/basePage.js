const base = require('@playwright/test')
import { LoginPage } from '../../pages/loginPage';
import { AccountCreationPage } from '../../pages/AccountCreationPage';
import { ProductDescriptionPage } from '../../pages/ProductDescriptionPage';

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    accountCreationPage: async ({ page }, use) => {
        const accountCreationPage = new AccountCreationPage(page);
        await use(accountCreationPage);
    },
    productDescriptionPage: async ({ page }, use) => {
        const productDescriptionPage = new ProductDescriptionPage(page);
        await use(productDescriptionPage);
    },
});
exports.expect = base.expect;