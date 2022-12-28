import HomePage from './home.page.js';
import CalculatorPage from './calculator.page.js';
import TempEmailPage from './tempEmail.page.js';

function page(name) {
    const items = {
        home: new HomePage(),
        calculator: new CalculatorPage(),
        emailtemp: new TempEmailPage()
    };
    return items[name.toLowerCase()];
}

export default {HomePage, CalculatorPage, TempEmailPage, page};