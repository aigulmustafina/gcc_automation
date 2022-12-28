import BasePage from './base.page.js';
const numOfInstances = 4;

class CalculatorPage extends BasePage {
    constructor() {
        super('https://cloud.google.com/products/calculator');
    };

    get outerFrame() { return $('devsite-iframe > iframe') };

    get innerFrame() { return $('//div/iframe') };

    get instNumber() { return $('#input_90') };

    get seriesDropdown() { return $('//md-select[@id="select_115"]') };

    get seriesOption() {return $('//div[contains(text(), "N1")]')};

    get machineTypeDropdown() {return $('//md-select[@id="select_117"]')};

    get machineTypeOption() {return $('//div[contains(text(), "n1-standard-8")]')};

    get addGPUCheckbox() {return $('(//md-checkbox)[3]')};

    get GPUtypeDropdown() {return $('(//md-select[@placeholder="GPU type"])[1]')};

    get GPUtypeOption() {return $('//div[contains(text(),"NVIDIA Tesla V100")]')};

    get numberOfGPUDropdown() {return $('//md-select[@placeholder="Number of GPUs"]')};

    get numberOfGPUOption() {return $('(//md-option[@value="1"])[14]')};

    get localSSDDropdown() {return $('(//md-select[@placeholder="Local SSD"])[1]')};

    get localSSDOption() {return $('//div[contains(text(), "2x375 GB")]')};

    get datacenterLocDropdown() {return $('(//md-select[@placeholder="Datacenter location"])[1]')};

    get datacenterLocOption() {return $('//md-option[@id="select_option_228"]')};
    
    get commitTermDropdown() {return $('(//md-select[@placeholder="Committed usage"])[1]')};

    get commitTermOption() {return $('//md-option[@id="select_option_128"]')};

    get addToEstimate() {return $('//button[@aria-label="Add to Estimate"]')};

    get receipt() {return $('//md-content[@id="compute"]')};

    get totalCost() {return $('//b[contains(text(), "Total Estimated Cost")]')};

    get emailEstimateButton() {return $('//button[@id="Email Estimate"]')};

    get inputEmail() {return $('(//input[@name="description"])[3]')};

    get sendEmailButton() {return $('//button[@aria-label="Send Email"]')};

    async switchFrames() {
        await browser.setTimeout({ 'pageLoad': 5000 });
        await this.outerFrame.waitForExist({ timeout: 5000 });
        await browser.switchToFrame(await this.outerFrame);
        await this.innerFrame.waitForExist({ timeout: 5000 });
        await browser.switchToFrame(await this.innerFrame);
    }

    async fillComputeForm() {
        await this.instNumber.setValue(numOfInstances);
        await this.seriesDropdown.click();
        await this.seriesOption.waitForClickable();
        await this.seriesOption.click();
        await this.machineTypeDropdown.click();
        await this.machineTypeOption.waitForClickable();
        await this.machineTypeOption.click();
        await this.addGPUCheckbox.click();
        await this.GPUtypeDropdown.click();
        await this.GPUtypeOption.waitForClickable();
        await this.GPUtypeOption.click();
        await this.numberOfGPUDropdown.click();
        await this.numberOfGPUOption.waitForClickable();
        await this.numberOfGPUOption.click();
        await this.localSSDDropdown.click();
        await this.localSSDOption.waitForClickable();
        await this.localSSDOption.click();
        await this.datacenterLocDropdown.click();
        await this.datacenterLocOption.waitForClickable();
        await this.datacenterLocOption.click();
        await this.commitTermDropdown.click();
        await this.commitTermOption.waitForClickable();
        await this.commitTermOption.click();
        await browser.scroll(0, 300); 
        await this.addToEstimate.waitForClickable();
        await this.addToEstimate.click();
    };    

    async estimateEmail() {
        await this.emailEstimateButton.click();
    };

    async sendEmail(email) {
        await this.inputEmail.setValue(email);
        await browser.scroll(0, 200);
        await this.sendEmailButton.click();
    };
};

export default new CalculatorPage();