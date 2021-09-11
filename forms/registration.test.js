//логика работы формы регистрации
const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures')
const { makeid } = require('../mail.pass/mail.pass')
const { getParameters } = require('../url/getParameters');
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

          test ('регистрация нового пользователя', async () => {
              driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.className("accept-btn")).click();
              await scrollToElement.call(driver, '.forms');
              await driver.findElement(By.id("register-form-1__email")).sendKeys(mail);
              await driver.findElement(By.id("register-form-1__password")).sendKeys(pass);
              await driver.findElement(By.className("register-form__agreement-checkbox")).click();
              await driver.findElement(By.className("register-form__button")).click();

              await driver.wait(until.elementLocated(By.className('SvgIcon-module-host-3SE')), 20000/*ms*/);

              await driver.findElement(By.className("SvgIcon-module-host-3SE")).click();
              await driver.findElement(By.className("Button-module-hostColorContainedNegative-2cV")).click();
              await driver.findElement(By.className("Button-module-hostColorContainedAccent-24t")).click();
              const currentUrl = await driver.getCurrentUrl();
              
              expect(currentUrl).toEqual(element[1]);

              driver.quit(); 
          }, 20000);

          test('регистрация пользователя, зарегистрированного ранее и есть куки', async () => {
              driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.className("accept-btn")).click();
              await scrollToElement.call(driver, '.forms');
              await driver.findElement(By.id("register-form-1__email")).sendKeys(mail);
              await driver.findElement(By.id("register-form-1__password")).sendKeys(pass);
              await driver.findElement(By.className("register-form__agreement-checkbox")).click();
              await driver.findElement(By.className("register-form__button")).click();

              await driver.wait(until.alertIsPresent());
              let alert = await driver.switchTo().alert();
              let alertText = await alert.getText();
              await alert.accept();
              const currentUrl = await driver.getCurrentUrl();
              expect(currentUrl).toBe(element[1]);
              await driver.wait(until.elementLocated(By.css('[data-test=asset-select-button]')), 20000/*ms*/);
          })
          })
      });