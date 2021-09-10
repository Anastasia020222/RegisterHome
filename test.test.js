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
    ['LPL60-01-03', 'https://olymptrade.com/platform?deeplink_action=trading&project=bo',
    'https://www.instagram.com/olymptradecom?',
    'https://www.youtube.com/channel/UCY6DeO0JlJ8dcdWPX9DDzRg?',
    'https://www.facebook.com/olymptradecom/?',
    'https://twitter.com/OlympTrade?',
    'https://twitter.com/id_olymptrade',
    'https://twitter.com/th_olymptrade',
    'https://twitter.com/br_olymptrade',
    'https://twitter.com/la_olymptrade',
    'https://twitter.com/vn_olymptradee',
    'https://twitter.com/tr_olymptrade',
    'https://twitter.com/my_olymptrade'
  ]
];

massLands.forEach((element) => {
    describe('web', () => {

          let driver;
          let mail = makeid(10) + '@dataduck.com';
          let pass = makeid(5);

          test('blog', async () => {
            driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.css(".accept-btn")).click();
              await scrollToElement.call(driver, '.footer');
              await driver.findElement(By.css("[title=Blog]")).click();
              
            }, 20000);

          test('Instagram', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
            await driver.findElement(By.css(".accept-btn")).click();
            await scrollToElement.call(driver, '.footer');
            await driver.findElement(By.css("[title=Instagram]")).click();

          }, 20000);
        })
});