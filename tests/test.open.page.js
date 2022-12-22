import HomePage from "../po/pages/home.page.js"

describe("Open Home page", () => {
    before(async () => {
        await browser.maximizeWindow()
        await HomePage.open()
    
    });
    
    it.skip("should open the main page", async () => {
        const title = await browser.getTitle()
        await expect(browser).toHaveTitle(title);
    });

    it('Should search given value', async () => {
        await HomePage.searchInput.setValue("Google Cloud Pricing Calculator")
        await HomePage.searchResultOption.click()

    })
    it('Should open calculator page', async () => {
        await expect(browser).toHaveTitle(
            "Google Cloud Pricing Calculator"
        );
    })
})