//***importing the playwright library from node_modules and assinging to test package***
const { test, expect } = require('@playwright/test')
import { LoginPage} from '../pages/loginPage'

test('Automation exercise - Account Setup', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.gotoSignUpPage()
    await loginPage.newUserID()
    // await loginPage.ranorexTrialAccountName('ABCD','EFGH')
    // await loginPage.ranorexTrialAccountEmailnCompany('Mailinator','Automation Analyst')
    // await loginPage.ranorexTrailAccountPhoneNumber('07777777777')
    // await loginPage.ranorex_IndustrynCountry('Software Vendor','No','Desktop','United Kingdom')
    // await loginPage.clickOnCheckBox()
    // await loginPage.clickOnSubmit()
});