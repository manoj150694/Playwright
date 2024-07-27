//***importing the playwright library from node_modules and assinging to test package***
const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/loginPage'
import { AccountCreationPage } from '../pages/AccountCreationPage'
import {BasePage} from '../pages/BasePage'

test('Automation exercise - Account Setup', async ({ page,loginPage }) => {
    // const loginPage = new LoginPage(page)
    // const accountCreationPage = new AccountCreationPage(page)
    //const basePage = new BasePage(page)
    await gotoSignUpPage()
    await loginPage.newUserID()
    await loginPage.enterAccountInformation('1', 'March', '1994')
    await loginPage.clickOnCreateAccount()

    await accountCreationPage.validateAccountCreation()

    // await loginPage.ranorexTrialAccountName('ABCD','EFGH')
    // await loginPage.ranorexTrialAccountEmailnCompany('Mailinator','Automation Analyst')
    // await loginPage.ranorexTrailAccountPhoneNumber('07777777777')
    // await loginPage.ranorex_IndustrynCountry('Software Vendor','No','Desktop','United Kingdom')
    // await loginPage.clickOnCheckBox()
    // await loginPage.clickOnSubmit()
});