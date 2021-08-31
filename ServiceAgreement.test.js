const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures')
const {getParameters} = require('./url/getParameters')
const {massLandsCards} = require('./Lands/massLands');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLandsCards.forEach((element) => {
    describe('web', () => {
        test ('register', async () => {
            driver = await new Builder().forBrowser('chrome').build();
          //   driver.manage().window().setSize(320, 740);
            await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
            await scrollToElement.call(driver, '.forms');
            await driver.findElement(By.className("register-form__agreement-link")).click();
        })
    })
});