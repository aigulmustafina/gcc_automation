import HomePage from '../po/pages/home.page.js';
import TempEmailPage from '../po/pages/tempEmail.page.js';
import titles from '../testdata/pageTitles.js';

describe('Hardcore - smoke', () => {
    before(async () => {
        await HomePage.open()
        await browser.newWindow(TempEmailPage.url, {
            windowName: '10 Minutes mail',
            windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
        });
    });
    
    it('Should open 10 Minute Email page in a new tab', async () => {
        await expect(browser).toHaveTitle(titles.tempEmail);
    });

    after(async () => {
        await TempEmailPage.close();
    });

});