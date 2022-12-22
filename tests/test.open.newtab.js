import TempEmailPage from "../po/pages/tempEmail.js";

describe("Open pages", () => {
    
    it('Should open new tab', async () => {
        await browser.newWindow(TempEmailPage.url, {
            windowName: '10 Minutes mail',
            windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
        })
        await expect(browser).toHaveTitle('10 Minute Mail - Free Anonymous Temporary email - 10 Minute Mail - Free Anonymous Temporary email');
    })
})