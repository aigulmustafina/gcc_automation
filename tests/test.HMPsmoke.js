import HomePage from '../po/pages/home.page.js';
import titles from '../testdata/pageTitles.js';

describe('Hurt me plenty - smoke', () => {
    before(async () => {
        await HomePage.open();
    });
    
    it('should open the home page', async () => {
        await expect(browser).toHaveTitleContaining(titles.homePage);
    });

    it('Should go to Calculator page', async () => {
        await HomePage.goToCalculatorPage();
        await expect(browser).toHaveTitle(titles.calcPage);
    });

    after(async () => {
        await HomePage.close();
    });

});