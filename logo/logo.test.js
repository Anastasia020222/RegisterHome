const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const {getParameters} = require('../url/getParameters')
const {massLands} = require('../lands/massLands');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
    describe('web', () => {
          test ('logo', async () => {
              driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              driver.findElement(By.css(".header__logo")).isEnabled();
              await driver.findElement(By.css(".header__logo")).click();

              // await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'Register to Continue')]")), 20000/*ms*/);
              const currentUrl = await driver.getCurrentUrl();
              expect(getParameters(currentUrl)).toStrictEqual(element[1]);

              driver.quit();
          }, 20000);
        });
    });
    //готово