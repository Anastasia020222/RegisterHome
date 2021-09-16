const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures');
const { alertIsPresent } = require('selenium-webdriver/lib/until');
const {massLands} = require('./Lands/massLands');
const {massItemBlog, massItemTwitter} = require('./Lands/massItem');
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
      });

      test('test', async () => {
        await driver.get('https://static.olymptrade.com/lands/'+ element[0] + e + '/');
        await driver.findElement(By.css('.accept-btn')).click();
        await scrollToElement.call(driver, '.footer');
        await driver.findElement(By.css('[title=Blog]')).click();
        // await driver.findElement(By.css("[title=Twitter]")).click();
        const currentUrl = await driver.getCurrentUrl();
        
        for(index in massItemBlog){
          switch(e){
            case 'en': 
              expect(currentUrl).toBe(massItemBlog[0].blog_en);
              // console.log(currentUrl);
              if(driver.findElement){
                await driver.findElement(By.className('css-901oao'));
                console.log(1);
              } else {
                console.log(2);
              }
                  // try 
                  // {
                  //   await driver.findElement(By.className('css-901oao')).Displayed;
                  //   // const element = await driver.FindElement(By.className('logo-container')).Displayed;
                  //   // console.log(element)
                  //   console.log(1);
                  // }
                  // catch (StaleElementReferenceException)
                  // {
                  //   console.log(2);
                  // }
              break;
            // case 'es':
            //   expect(currentUrl).toBe(massItemBlog[1].blog_es);
            //   console.log(currentUrl);
            //   break;
            // case 'ar':
            //   expect(currentUrl).toBe(massItemBlog[2].blog_ar);
            //   console.log(currentUrl);
            //   break;
            default:
              console.log('проверки нет для локали ' + e);
          }
          break;
        };
      }, 20000);
      
      afterAll(() => 
      driver.quit()
      );
    });
  });
});