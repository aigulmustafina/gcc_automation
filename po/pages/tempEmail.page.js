import BasePage from './base.page.js';

class TempEmailPage extends BasePage {

    constructor() {
        super('https://temprmail.com/');
    };

    get emailGenerator() {return $('//input')};

    get emailSubject() {return $('//h3[contains(text(), "Google Cloud Price Estimate")]')};

    get refresh() {return $('//button[contains(text(), "Refresh")]')};
    
    get totalPricePropinEmail() {return $('(//table)[2]//tr[2]/td/h3')};

    get totalPriceValueinEmail() {return $('(//table)[2]//tr[2]/td/h3/../following-sibling::td/h3')};
    
    async getEmailContent() {
        await this.refresh.click()
        await this.emailSubject.waitForClickable({timeout: 60000});
        await this.emailSubject.click();
    };
};

export default new TempEmailPage();