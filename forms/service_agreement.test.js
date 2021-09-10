//проверка пользовательского соглашения
const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {urlItem} = require('../url/url.Item');
const {massLands} = require('../lands/massLands');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
    describe('web', () => {
        test ('register', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
            await scrollToElement.call(driver, '.forms');
            await driver.findElement(By.className('register-form__agreement-link')).click();

            await driver.wait(until.elementLocated(By.className('section-terms')), 20000/*ms*/);

            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toEqual('https://olymptrade.com/terms');

            driver.quit();
        }, 20000);
    });
});
//готово