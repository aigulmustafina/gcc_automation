import HomePage from '../po/pages/home.page.js';
import CalculatorPage from '../po/pages/calculator.page.js';
import computeData from '../testdata/compute.data.js';

describe('Hurt me plenty - regression', () => {
    before(async () => {
        await HomePage.open();
        await HomePage.goToCalculatorPage();
        await CalculatorPage.switchFrames();
        await CalculatorPage.fillComputeForm();
    });
    computeData.forEach(({property: string, value: expectedValue}) => {
        it('Should be valid value', async () =>{
            await expect(CalculatorPage.receipt).toHaveTextContaining(expectedValue);
        });
    });

    after(async () => {
        await CalculatorPage.close();
    });
});
    