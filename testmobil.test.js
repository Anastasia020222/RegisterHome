const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures')
const { makeid } = require('./mail.pass/mail.pass')
const { getParameters } = require('./url/getParameters');
const { alertIsPresent } = require('selenium-webdriver/lib/until');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');
 
// driver = webdriver.Chrome(executable_path='chromedriver.exe', chrome_options=options)
 
// driver.get('http://m.baidu.com')

massLands.forEach((element) => {
    describe('web', () => {

          let driver;
          let mail = makeid(10) + '@dataduck.com';
          let pass = makeid(5);

          test('', async () => {
            mobileEmulation = {'deviceName': 'Apple iPhone 4'};
            options = webdriver.ChromeOptions();
            options.add_experimental_option('mobileEmulation', mobileEmulation)
            driver = await new Builder().forBrowser('chrome').build();
              await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
              await driver.findElement(By.css(".accept-btn")).click();
            }, 20000);
        })
});