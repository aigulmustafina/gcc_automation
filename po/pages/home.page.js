import BasePage from "./base.page.js";

class HomePage extends BasePage {
    constructor() {
        super("https://cloud.google.com/")
    }

    get searchResultOption() { return $('//a[@href="https://cloud.google.com/products/calculator?hl=en"]')}

    get searchBtn() { return $('//button[@aria-label="Open search"]') };

    get searchInput() { return $('//input[@aria-label="Search"]')}

}

export default new HomePage();