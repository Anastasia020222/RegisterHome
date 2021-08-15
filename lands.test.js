const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures')
const { makeid } = require('./mail.pass/mail.pass')
const {getParameters} = require('./url/getParameters')
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

const massLands = ['FX-LPL79-01-01'];
massLands.forEach((lands) => {
    describe('web', () => {

          let driver;
          let mail = makeid(10) + '@gmail.com';
          let pass = makeid(5);

          test ('register', async () => {
              driver = await new Builder().forBrowser('chrome').build();
            //   driver.manage().window().setSize(320, 740);
              await driver.get('https://static.olymptrade.com/lands/'+ lands +'en/');
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
              // console.log(`current url = ${currentUrl}`); 
              // expect(currentUrl).toBe('https://olymptrade.com/platform?asset=Bitcoin&deeplink_action=trading&project=fx');

              expect(getParameters(currentUrl)).toBe({asset: "Bitcoin", deeplink_action: "trading", project: "fx"});
              
              driver.quit();
          }, 20000);
      });
});
