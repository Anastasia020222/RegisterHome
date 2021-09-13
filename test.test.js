const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures')
const { getParameters } = require('./url/getParameters');
const { alertIsPresent } = require('selenium-webdriver/lib/until');
const {massLands} = require('./Lands/massLands');
const {massItemBlog} = require('./Lands/massItem');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
  element[2].forEach((e) => {
    describe('web', () => {

      let driver;

      beforeAll( async () => {
          driver = await new Builder()
          .forBrowser('chrome')
          .build();
      })

      test('test', async () => {
        await driver.get('https://static.olymptrade.com/lands/'+ element[0] + e + '/');
        const currentUrl = await driver.getCurrentUrl();
        console.log(currentUrl)
      }, 20000)

        afterAll(() => 
        driver.quit()
        );
    });
});
});
//       test('blog_en', async () => {
//         if(element[2].includes('en')){
//             await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
//             await driver.findElement(By.css(".accept-btn")).click();
//             await scrollToElement.call(driver, '.footer');
//             await driver.findElement(By.css("[title=Blog]")).click();
//             await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
//             const currentUrl = await driver.getCurrentUrl();
//             for(index in massItemBlog){
//             expect(currentUrl).toBe(massItemBlog[0].blog_en);
//             // console.log(element[0] + ' тест blog_en пройден')
//             }
//         } else{
//             console.log(element[0] + ' нет локали en');
//         };
//     }, 20000);
//   })
// });