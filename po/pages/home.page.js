import BasePage from './base.page.js';
import titles from '../../testdata/pageTitles.js';

class HomePage extends BasePage {
    constructor() {
        super('https://cloud.google.com/');
    };

    get searchInput() { return $('//input[@aria-label="Search"]')};
    get searchResultOption() { return $('//a[@href="https://cloud.google.com/products/calculator?hl=en"]')};
    get searchBtn() { return $('//button[@aria-label="Open search"]') };


    async goToCalculatorPage() {
        await this.searchInput.setValue(titles.calcPage);
        await this.searchResultOption.click();    
    }

}

export default new HomePage();