const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures');
const {massLands} = require('./Lands/massLands');
const { getParameters } = require('./url/getParameters');
const { makeid } = require('./mail.pass/mail.pass')
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

//такой email уже существует

          test('такой email уже существует', async () => {
            driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.className("accept-btn")).click();
              await scrollToElement.call(driver, '.forms');
              await driver.findElement(By.id('register-form-1__email')).sendKeys('test_user@dataduck.com');
              await driver.findElement(By.id("register-form-1__password")).sendKeys('12345');
              await driver.findElement(By.className("register-form__agreement-checkbox")).click();
              await driver.findElement(By.className("register-form__button")).click();
              await driver.wait(until.alertIsPresent());
              let alert = await driver.switchTo().alert();
              // let alertText = await alert.getText();
              // expect(alertText).toBe('Пользователь уже существует. Сейчас вы будете перенаправлены на торговую платформу.');
              await alert.accept();
              const currentUrl = await driver.getCurrentUrl();
              expect(getParameters(currentUrl)).toBe(element[1]);
            }, 20000);
          });
        });