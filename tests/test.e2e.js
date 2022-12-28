import HomePage from '../po/pages/home.page.js';
import CalculatorPage from '../po/pages/calculator.page.js';
import TempEmailPage from '../po/pages/tempEmail.page.js'; 

describe('Hardcore - regression', () => {
    before(async () => {
        await HomePage.open();
        await HomePage.goToCalculatorPage();
        await CalculatorPage.switchFrames();
        await CalculatorPage.fillComputeForm();
        await CalculatorPage.estimateEmail();
        await browser.newWindow(TempEmailPage.url);
        await browser.setTimeout({ 'pageLoad': 5000 })
        const email = await TempEmailPage.emailGenerator.getValue();
        await browser.switchWindow(CalculatorPage.url);
        await CalculatorPage.switchFrames();
        await CalculatorPage.inputEmail.setValue(email);
        await browser.scroll(0, 200);
        await CalculatorPage.sendEmail();
        await browser.switchWindow(TempEmailPage.url);
        await browser.refresh();
        await browser.scroll(0, 300);
        await TempEmailPage.getEmailContent();

    });
    it('Should be expected value for total price', async () => {
        await expect(TempEmailPage.totalPricePropinEmail).toHaveTextContaining('Total Estimated Monthly Cost');
        await expect(TempEmailPage.totalPriceValueinEmail).toHaveTextContaining('USD 1,081.20');
    });

    after(async () => {
        await TempEmailPage.close();
    });
});