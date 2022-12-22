import BasePage from "./base.page.js";

class CalculatorPage extends BasePage {
    constructor() {
        super("https://cloud.google.com/products/calculator")
    }

    get outerFrame() { return $('devsite-iframe > iframe') }

    get innerFrame() { return $('//div/iframe') };

    get instNumber() { return $('#input_90') }

    get seriesDropdown() { return $('//md-select[@id="select_115"]') }

    get optionN1() {return $('//div[contains(text(), "N1")]')}

    get machineTypeDropdown() {return $('//md-select[@id="select_117"]')}

    get machineTypeOption() {return $('//div[contains(text(), "n1-standard-8")]')}

    get addGPUCheckbox() {return $('(//md-checkbox)[3]')}

    get GPUtypeDropdown() {return $('(//md-select[@placeholder="GPU type"])[1]')}

    get GPUtypeOption() {return $('//div[contains(text(),"NVIDIA Tesla V100")]')}

    get numberOfGPUDropdown() {return $('//md-select[@placeholder="Number of GPUs"]')}

    get numberOfGPUOption() {return $('(//md-option[@value="1"])[14]')}

    get localSSDDropdown() {return $('(//md-select[@placeholder="Local SSD"])[1]')}

    get localSSDOption() {return $('//div[contains(text(), "2x375 GB")]')}

    get datacenterLocDropdown() {return $('(//md-select[@placeholder="Datacenter location"])[1]')}

    get datacenterLocOption() {return $('//md-option[@id="select_option_228"]')}
    
    get commitTermDropdown() {return $('(//md-select[@placeholder="Committed usage"])[1]')}

    get commitTermOption() {return $('//md-option[@id="select_option_128"]')}

    get addToEstimate() {return $('//button[@aria-label="Add to Estimate"]')}

    get receipt() {return $('//md-content[@id="compute"]')}

    get regionInReceipt() {return $('//div[contains(text(), "Region: ")]')}

    get commitmentTermInReceipt() {return $('//div[contains(text(), "Commitment term: ")]')}

    get vmclassInReceipt() {return $('//div[contains(text(), "Provisioning model: ")]')}

    get instanceTypeInReceipt() {return $('//div[contains(text(), "Instance type: ")]')}

    get localSSDinReceipt() {return $('//div[contains(text(), "Local SSD: ")]')}

    get totalCost() {return $('//b[contains(text(), "Total Estimated Cost")]')}

    get emailEstimateBtn() {return $('//button[@id="Email Estimate"]')}

    get inputEmail() {return $('(//input[@name="description"])[3]')}

    get sendEmailBtn() {return $('//button[@aria-label="Send Email"]')}
    

}

export default new CalculatorPage();