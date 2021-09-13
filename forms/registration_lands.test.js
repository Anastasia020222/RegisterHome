const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const { getParameters } = require('../url/getParameters');
const { makeid } = require('../mail.pass/mail.pass')
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {

  const URL = 'https://static.olymptrade.com/lands/'+ element[0] +'en/';

    describe('web', () => {

          let driver;
          let mail = makeid(10) + '@dataduck.com';
          let pass = makeid(5);
          
          test ('регистрация нового пользователя', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get(URL);
            await driver.findElement(By.className('accept-btn')).click();
            await scrollToElement.call(driver, '.forms');
            await driver.findElement(By.id('register-form-1__email')).sendKeys(mail);
            await driver.findElement(By.id('register-form-1__password')).sendKeys(pass);
            await driver.findElement(By.className('register-form__agreement-checkbox')).click();
            await driver.findElement(By.className("register-form__button")).click();
            await driver.findElement(By.className('register-form__button')).click();
            
            await driver.wait(until.elementLocated(By.className('SvgIcon-module-host-3SE')), 20000/*ms*/);
            
            const currentUrl = await driver.getCurrentUrl();
            expect(getParameters(currentUrl)).toStrictEqual(element[1]);
            
            await driver.findElement(By.className('SvgIcon-module-host-3SE')).click();
            await driver.findElement(By.className('Button-module-hostColorContainedNegative-2cV')).click();
            await driver.findElement(By.className('Button-module-hostColorContainedAccent-24t')).click();
          }, 20000);
        });
      });