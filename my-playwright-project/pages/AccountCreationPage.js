const { expect } = require("@playwright/test");
exports.AccountCreationPage = class AccountCreationPage{
    constructor(page) {
        this.page = page;
        this.msg_AccountCreation = page.locator(`xpath=//h2[@class='title text-center']/..//following-sibling::h2/b`);
        this.btn_Continue = page.locator(`xpath=//a[contains(text(),'Continue')]`);
    }

    async validateAccountCreation() {
        await expect(this.msg_AccountCreation).toHaveText('Account Created!');
    }
}