// import { faker } from '@faker-js/faker';
// const { faker } = require('@faker-js/faker');

// const firstName = faker.name.findName()
// const LastName = faker.name.findName()
// const businessEmail = faker.internet.email()
// const phoneNumber = faker.phone.phoneNumber()

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.btn_AcceptAll = page.locator('id=cookiescript_accept')
        this.txt_FirstName = page.getByPlaceholder('First Name *')
        this.txt_LastName = page.getByPlaceholder('Last Name *')
        this.txt_BusinessEmail = page.getByPlaceholder('Business Email *')
        this.txt_Company = page.getByPlaceholder('Company *')
        this.txt_JobTitle = page.getByPlaceholder('Job Title *')
        this.txt_Phone = page.getByPlaceholder('Phone *')
        this.drp_SelectYourIndustry = page.locator(`xpath='//option[contains(text(),'Select Your Industry')]/../../..//following-sibling::div/select'`)
        this.drp_AreyouStudent = page.locator(`xpath=//option[contains(text(),'Are you a student?')]/..`)
        this.drp_SelectTargetPlatform = page.locator(`xpath=//option[contains(text(),'Select Target Platform')]/..`)
        this.drp_SelectYourCountry = page.locator(`xpath=//option[contains(text(),'//option[contains(text(),'Select Your Country')]/..')]/..`)
        this.chbx_AgreeRanorex = page.locator(`xpath=//label[contains(text(),'I agree to the Ranorex ')]/..//following-sibling::input`)
        this.chbx_ImnotRobot = page.locator('recaptcha-checkbox-border')
        this.btn_Submit = page.locator('gform_button button')
    }

    async gotoLoginPage() {
        await this.page.goto("https://www.ranorex.com/free-trial/")
        await this.page.evaluate(() => window.scrollBy(0, 650));
        if (await this.btn_AcceptAll.waitFor({ state: 'visible' } == true))
        {
            await this.btn_AcceptAll.click()
        }
    }

    async ranorexTrialAccountName(firstName, LastName) {
        await this.txt_FirstName.waitFor({ state: 'visible' });
        await this.txt_FirstName.fill(firstName)
        await this.txt_LastName.fill(LastName)
    }

    async ranorexTrialAccountEmailnCompany(companyName, jobTitle) {
        let randomNum = Math.random();
        const businessEmail = "Tekstac"+randomNum+"@mailinator.com"
        await this.txt_BusinessEmail.fill(businessEmail)
        await this.txt_Company.fill(companyName)
        await this.txt_JobTitle.fill(jobTitle)
    }

    async ranorexTrailAccountPhoneNumber(phoneNumber) {
        await this.txt_Phone.fill(phoneNumber)
    }

    async ranorex_IndustrynCountry(industryName, student, platformName, countryName) {
        await this.drp_SelectYourIndustry.click()
        await this.drp_SelectYourIndustry.selectOption(industryName)
        await this.drp_AreyouStudent.selectOption(student)
        await this.drp_SelectTargetPlatform.selectOption(platformName)
        await this.drp_SelectYourCountry.selectOption(countryName)
    }

    async clickOnCheckBox() {
        await this.chbx_AgreeRanorex.click()
        await this.chbx_ImnotRobot.click()
    }
    async clickOnSubmit() {
        await this.btn_Submit.click()
    }
}
