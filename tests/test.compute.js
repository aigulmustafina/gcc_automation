import HomePage from "../po/pages/home.page.js"
import CalculatorPage from "../po/pages/calculator.page.js";
import computeData from "../testdata/compute.data.js";
import titles from "../testdata/pageTitles.js";

describe("Google Cloud Calculator", () => {
    before(async () => {
        await browser.maximizeWindow()
        await HomePage.open()
    });
    
    it.skip("should open the main page", async () => {
        await expect(browser).toHaveTitle(titles.homePage);
    });

    it('Should search given value', async () => {
        await HomePage.searchInput.setValue(titles.calcPage)
        await HomePage.searchResultOption.click()

    })
    it('Should open calculator page', async () => {
        await expect(browser).toHaveTitle(titles.calcPage);
    })

    it("Should switch on outer frame", async () => {
        await browser.setTimeout({ 'pageLoad': 5000 })
        const outerframe = await $("devsite-iframe > iframe");
        await outerframe.waitForExist({ timeout: 5000 });
        await browser.switchToFrame(outerframe);
    })

    it("Should switch on inner frame", async () => {
        const innerFrame = await $("//div/iframe")
        await innerFrame.waitForExist({ timeout: 3000 });
        await browser.switchToFrame(innerFrame); 
    })

    it("Should choose given value for number of instances", async () => {
        await CalculatorPage.instNumber.setValue(computeData.numOfInstances)
        await expect(CalculatorPage.instNumber).toHaveValue(computeData.numOfInstances)
    })

    it("Should select given value for Series dropdown", async () => {
        await CalculatorPage.seriesDropdown.click()
        await CalculatorPage.optionN1.click()
        await expect(CalculatorPage.seriesDropdown).toHaveAttributeContaining("aria-label", "N1")

    })

    it('Should choose given option for Machine type', async () => {
        await CalculatorPage.machineTypeDropdown.click();
        await CalculatorPage.machineTypeOption.click()
        await expect(CalculatorPage.machineTypeDropdown).toHaveAttributeContaining("aria-label", computeData.instanceType.initialData)
    });

    it("Should cllck on AddGPU checkbox", async() => {
        await CalculatorPage.addGPUCheckbox.click()
        await expect(CalculatorPage.addGPUCheckbox).toHaveAttributeContaining("aria-checked", "true")
    });

    it("Should select given type of GPU", async () => {
        await CalculatorPage.GPUtypeDropdown.click()
        await CalculatorPage.GPUtypeOption.click()
        await expect(CalculatorPage.GPUtypeDropdown).toHaveAttributeContaining("aria-label", computeData.GPUtype)
    });

    it("Should select given number of GPUs", async () => {
        await browser.scroll(0, 400)
        await CalculatorPage.numberOfGPUDropdown.click()
        await CalculatorPage.numberOfGPUOption.click()
    });

    it("Should select given number of LocalSSD", async () => {
        await CalculatorPage.localSSDDropdown.click()
        await CalculatorPage.localSSDOption.click()
        await expect(CalculatorPage.localSSDDropdown).toHaveAttributeContaining("aria-label", computeData.localSsd.initialData)
    })

    it("Should select given option for Datacenter Location", async () => {
        await browser.scroll(0, 400)
        await CalculatorPage.datacenterLocDropdown.click();
        await CalculatorPage.datacenterLocOption.waitForDisplayed({timeout: 3000})
        await CalculatorPage.datacenterLocOption.click()
        await expect(CalculatorPage.datacenterLocDropdown).toHaveAttributeContaining("aria-label", computeData.dataCenter.initialData)
    });

    it("Should select given value fot Commitment term", async () => {

        await CalculatorPage.commitTermDropdown.click()
        await CalculatorPage.commitTermOption.click()
        await expect(CalculatorPage.commitTermDropdown).toHaveAttributeContaining("aria-label", computeData.committedUsage)
    })

    it("Should Add to Estimate", async () => {
        await CalculatorPage.addToEstimate.click()
        await expect(CalculatorPage.receipt).toBeDisplayed()
    }); 

    it("Should match values for region in receipt and selected one", async () => {
        await expect(CalculatorPage.regionInReceipt).toHaveTextContaining(computeData.dataCenter.resultData)
    });

    it("Should match values for commitment term in receipt and selected one", async() => {
        await expect(CalculatorPage.commitmentTermInReceipt).toHaveTextContaining(computeData.committedUsage)
    })

    it("Should match values for local SSD in receipt and selected one", async() => {
        await expect(CalculatorPage.localSSDinReceipt).toHaveTextContaining(computeData.localSsd.resultData)
    })

    it("Should match values for vm class in receipt and selected one", async() => {
        await expect(CalculatorPage.vmclassInReceipt).toHaveTextContaining(computeData.vmClass.resultData)
    })

    it("Should match values for vm instance type in receipt and selected one", async() => {
        await expect(CalculatorPage.instanceTypeInReceipt).toHaveTextContaining(computeData.instanceType.resultData)
    })
    
    it("Should match values for total price in receipt and price received during manual check", async() => {
        await expect(CalculatorPage.totalCost).toHaveTextContaining(computeData.totalCostReceivedManually)
    })
   
});