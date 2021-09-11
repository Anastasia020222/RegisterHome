const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
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

          test('такой email уже существует', async () => {
            driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.className("accept-btn")).click();
              await scrollToElement.call(driver, '.forms');
              await driver.findElement(By.id("register-form-1__email")).sendKeys('test_user@dataduck.com');
              await driver.findElement(By.id("register-form-1__password")).sendKeys('12345');
              await driver.findElement(By.className("register-form__agreement-checkbox")).click();
              await driver.findElement(By.className("register-form__button")).click();
              await driver.wait(until.alertIsPresent());
              let alert = await driver.switchTo().alert();
              // let alertText = await alert.getText();
              // expect(alertText).toBe('Пользователь уже существует. Сейчас вы будете перенаправлены на торговую платформу.');
              await alert.accept();
              const currentUrl = await driver.getCurrentUrl();
              expect(currentUrl).toBe(element[1]);

            }, 20000);
    });
});