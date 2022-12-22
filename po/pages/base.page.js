export default class BasePage {
    constructor(url) {
        this.url = url;
    }

    open() {
        browser.url(this.url)
    }
}
