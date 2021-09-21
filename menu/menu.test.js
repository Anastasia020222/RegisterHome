const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const {getParameters} = require('../url/getParameters')
const {massLands} = require('../lands/massLands');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
    describe('web', () => {
          test ('menu', async () => {
              driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.className("header__login-btn")).click();
              await driver.findElement(By.css(".geo-dropdown__current-lang")).click();
              await driver.findElement(By.css("[data-flag=Español]")).click();
              const currentUrl = await driver.getCurrentUrl();
              expect(currentUrl).toBe('https://static.olymptrade.com/lands/FX-LPL77-01-01es/index.html?');
              await driver.findElement(By.css(".header__login-btn")).click();

              driver.quit();
          }, 20000);
        });
    });