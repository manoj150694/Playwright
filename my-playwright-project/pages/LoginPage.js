const { expect } = require("@playwright/test");

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

        // this.txt_FirstName = page.getByPlaceholder('Name *')
        // this.txt_LastName = page.getByPlaceholder('Last Name *')
        // this.txt_BusinessEmail = page.getByPlaceholder('Business Email *')
        // this.txt_Company = page.getByPlaceholder('Company *')
        // this.txt_JobTitle = page.getByPlaceholder('Job Title *')
        // this.txt_Phone = page.getByPlaceholder('Phone *')
        // this.drp_SelectYourIndustry = page.locator('//option[contains(text(),"Select Your Industry")]/../../..//following-sibling::div/select')
        // this.drp_AreyouStudent = page.locator('//option[contains(text(),"Are you a student?")]')
        // this.drp_SelectTargetPlatform = page.locator(`xpath=//option[contains(text(),'Select Target Platform')]/..`)
        // this.drp_SelectYourCountry = page.locator(`xpath=//option[contains(text(),'//option[contains(text(),'Select Your Country')]/..')]/..`)
        // this.chbx_AgreeRanorex = page.locator(`xpath=//label[contains(text(),'I agree to the Ranorex ')]/..//following-sibling::input`)
        // this.chbx_ImnotRobot = page.locator('recaptcha-checkbox-border')
        // this.btn_Submit = page.locator('gform_button button')
        
    }

    async gotoSignUpPage() {
        await this.page.goto("https://automationexercise.com/")
        await this.consentBtn.click()
        await this.loginSignUpBtn.click()
    }

    async newUserID() {
        let randomNum = Math.random();
        const businessEmail = "Tekstac" + randomNum + "@mailinator.com"
        //const randomUsername = faker.internet.userName();
        await this.enterUserName.fill('Tekstactest')
        await this.userEmail.fill(businessEmail)
        await this.signUpBtn.click()
    }

    async enterAccountInformation(date,month,year) {
        //const randomPassword = faker.internet.password(12, true, /[A-Z]/, '!', 'Passw0rd');
        await this.selectMr.click()
        await this.userPassword.fill('Passw0rd123')
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

    // async gotoLoginPage() {
    //     await this.page.goto("https://www.ranorex.com/free-trial/")
    //     await this.page.evaluate(() => window.scrollBy(0, 650));
    //     await this.page.locator('//a[contains(text(),"Products")][1]').dblclick();
    //     await this.page.waitForTimeout(2000);
    //     await this.btn_AcceptAll.click()
    // }

    // async ranorexTrialAccountName(firstName, LastName) {
    //     await this.txt_FirstName.waitFor({ state: 'visible' });
    //     await this.txt_FirstName.fill(firstName)
    //     await this.txt_LastName.fill(LastName)
    // }

    // async ranorexTrialAccountEmailnCompany(companyName, jobTitle) {
    //     let randomNum = Math.random();
    //     const businessEmail = "Tekstac"+randomNum+"@mailinator.com"
    //     await this.txt_BusinessEmail.fill(businessEmail)
    //     await this.txt_Company.fill(companyName)
    //     await this.txt_JobTitle.fill(jobTitle)
    // }

    // async ranorexTrailAccountPhoneNumber(phoneNumber) {
    //     await this.txt_Phone.fill(phoneNumber)
    // }

    // async ranorex_IndustrynCountry(industryName, student, platformName, countryName) {
    //     await this.drp_SelectYourIndustry.click()
    //     await this.drp_SelectYourIndustry.selectOption('value',industryName)
    //     await this.drp_AreyouStudent.click()
    //     await this.drp_AreyouStudent.selectOption({ label: student })
    //     await this.drp_SelectTargetPlatform.selectOption(platformName)
    //     await this.drp_SelectYourCountry.selectOption(countryName)
    // }

    // async clickOnCheckBox() {
    //     await this.chbx_AgreeRanorex.click()
    //     await this.chbx_ImnotRobot.click()
    // }
    // async clickOnSubmit() {
    //     await this.btn_Submit.click()
    // }
}