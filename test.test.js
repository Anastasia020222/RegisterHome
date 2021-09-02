const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures')
const { makeid } = require('./mail.pass/mail.pass')
const { getParameters } = require('./url/getParameters');
const { alertIsPresent } = require('selenium-webdriver/lib/until');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

const massLands = [
    ['LPL60-01-03', 'https://olymptrade.com/platform?deeplink_action=trading&project=bo']
];

massLands.forEach((element) => {
    describe('web', () => {

          let driver;
          let mail = makeid(10) + '@dataduck.com';
          let pass = makeid(5);

          test('', async () => {
            driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.css(".accept-btn")).click();
              await scrollToElement.call(driver, '.footer');
              await driver.findElement(By.css("[title=Blog]")).click();
            }, 20000);
        })
});