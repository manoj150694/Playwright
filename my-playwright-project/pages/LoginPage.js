const { expect } = require("@playwright/test");
const { faker } = require('@faker-js/faker');

exports.LoginPage = class LoginPage{
    constructor(page) {
        this.page = page;
        this.loginSignUpBtn = page.locator(`xpath=//a[contains(text(),"Signup / Login")]`)
        this.consentBtn = page.locator('//p[contains(text(),"Consent")]')
        this.enterUserName = page.locator('[placeholder="Name"]')
        this.userEmail = page.locator('[data-qa="signup-email"]')
        this.signUpBtn = page.locator('[data-qa="signup-button"]')
        this.selectMr = page.locator('[value="Mr"]')
        this.userPassword = page.locator('[id="password"]')
        this.dayDrp = page.locator('id=days')
        this.monthDrp = page.locator('id=months')
        this.yearDrp = page.locator('id=years')
        this.firstNameTxtBx = page.locator('id=first_name')
        this.lastNameTxtBx = page.locator('id=last_name')
        this.companyTxtBx = page.locator('id=company')
        this.address1TxtBx = page.locator('id=address1')
        this.address2TxtBx = page.locator('id=address2')
        this.stateTxtBx = page.locator('id=state')
        this.cityTxtBx = page.locator('id=city')
        this.zipCodeTxtBx = page.locator('id=zipcode')
        this.mobileNumberTxtBx = page.locator('id=mobile_number')
        this.createAccountBtn = page.locator(`xpath=//button[contains(text(),'Create Account')]`) 
    }

    async gotoSignUpPage() {
        await this.page.goto("https://automationexercise.com/")
        await this.consentBtn.click()
        await this.loginSignUpBtn.click()
    }

    async newUserID() {
        let randomNum = Math.random();
        const businessEmail = "Tekstac" + randomNum + "@mailinator.com"
        const randomUsername = faker.internet.userName();
        await this.enterUserName.fill(randomUsername)
        await this.userEmail.fill(businessEmail)
        await this.signUpBtn.click()
    }

    async enterAccountInformation(date,month,year) {
       const randomPassword = faker.internet.password(12, true, /[A-Z]/, '!', 'Passw0rd');
        await this.selectMr.click()
        await this.userPassword.fill(randomPassword)
        await this.dayDrp.click()
        await this.dayDrp.selectOption(date)
        await this.monthDrp.click()
        await this.monthDrp.selectOption(month)
        await this.yearDrp.click()
        await this.yearDrp.selectOption(year)
        await this.firstNameTxtBx.fill('Tekstac')
        await this.lastNameTxtBx.fill('Framework')
        await this.companyTxtBx.fill('Testcompany')
        await this.address1TxtBx.fill('Test1')
        await this.address2TxtBx.fill('Test2')
        await this.stateTxtBx.fill('TamilNadu')
        await this.cityTxtBx.fill('Chennai')
        await this.zipCodeTxtBx.fill('600001')
        await this.mobileNumberTxtBx.fill('9898787765')
    }

    async clickOnCreateAccount() {
         await this.createAccountBtn.click()
    }

}