const { expect } = require("@playwright/test");
import { allure }  from 'allure-playwright';

exports.AccountCreationPage = class AccountCreationPage{
    constructor(page) {
        this.page = page;
        this.msg_AccountCreation = page.locator('//h2[@class="title text-center"]/..//following-sibling::h2/b');
        this.btn_Continue = page.locator(`xpath=//a[contains(text(),'Continue')]`);
    }

    async validateAccountCreation() {
        await allure.step('Validate the New Account is created successfully', async () => {
        await expect(this.msg_AccountCreation).toHaveText('Account Created!');
        });
    }
}