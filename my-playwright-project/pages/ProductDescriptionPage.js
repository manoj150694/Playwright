const { expect } = require("@playwright/test");
import { allure }  from 'allure-playwright';

exports.ProductDescriptionPage = class ProductDescriptionPage {
    constructor(page) {
        this.page = page;
        this.plusBtn_Women = page.locator('//div[@id="Women"]/..//preceding-sibling::a/span')
        this.plusBtn_Men = page.locator('//div[@id="Men"]/..//preceding-sibling::a/span')
        this.plusBtn_Kids = page.locator('//div[@id="Kids"]/..//preceding-sibling::a/span')
        this.category_MenTshirts = page.locator('//div[@id="Men"]/..//following-sibling::li/a[contains(text(),"Tshirts")]')
        this.lbl_AddToCart = page.locator('//div[@class="productinfo text-center"]/..//following-sibling::a)[1]')
        this.overlay_AddToCart = page.locator('(//div[@class="overlay-content"]/..//following-sibling::a)[1]')
    }

    async selectCategoryMens() {
        await allure.step('Select the Mens Category', async () => {
        await this.page.plusBtn_Men.click();
        await this.page.category_MenTshirts.click();
        const screenshot = await this.page.screenshot();
        await allure.attachment('Screenshot', screenshot, 'image/png');
        });
    }

    async addProductToCart() {
        await allure.step('Adding Products to the Cart', async () => {
        await this.page.lbl_AddToCart.hover();
        await this.page.overlay_AddToCart.click();
        const screenshot = await this.page.screenshot();
        await allure.attachment('Screenshot', screenshot, 'image/png');
        });
    }
}