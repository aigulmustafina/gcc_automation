import BasePage from "./base.page.js";

class TempEmailPage extends BasePage {

    constructor() {
        super("https://10minutemail.com/")
    }

    get emailGenerator() {return $('//input[@id="mail_address"]')}

    get emailSender() {return $('//div[@class="small_subject"]/span')}

    get totalPricePropinEmail() {return $('(//table)[2]//tr[2]/td/h3')}

    get totalPriceValueinEmail() {return $('(//table)[2]//tr[2]/td/h3/../following-sibling::td/h3')} 

    // open () {
    //     super.open("https://10minutemail.com/")
    // }
}

export default new TempEmailPage();