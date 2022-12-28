import BasePage from './base.page.js';

class TempEmailPage extends BasePage {

    constructor() {
        super('https://10minutemail.com/');
    }

    get emailGenerator() {return $('//input[@id="mail_address"]')};
    get emailSubject() {return $('//span[contains(text(), "Google Cloud Price Estimate")]')};

    // get emailGenerator() {return $('//input[@id="eposta_adres"]')};

    // get emailSubject() {return $('//div[contains(text(), "Google Cloud Price Estimate")]')};

    get totalPricePropinEmail() {return $('(//table)[2]//tr[2]/td/h3')};

    get totalPriceValueinEmail() {return $('(//table)[2]//tr[2]/td/h3/../following-sibling::td/h3')};

    async getEmailContent() {
        await this.emailSubject.click();
    };
};

export default new TempEmailPage();