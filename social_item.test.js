const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const {urlItem} = require('./url/url.Item')
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures')
const {massLandsItem} = require('./Lands/massLands');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLandsItem.forEach((element) => {
    describe('web', () => {
          test ('иконки соц.сетей', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
            await driver.findElement(By.className("accept-btn")).click();
            await scrollToElement.call(driver, '.footer-block__container');
            await driver.findElement(By.className("social__item:nth-child(1) path")).click();
            const currentUrl = await driver.getCurrentUrl();
            expect(urlItem(currentUrl)).toStrictEqual(element[1]);

            driver.quit();
        }, 20000);
    });
});