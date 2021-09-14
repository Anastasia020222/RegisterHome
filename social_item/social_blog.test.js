const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const {massItemBlog} = require('../Lands/massItem');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {

    const URL = 'https://static.olymptrade.com/lands/'+ element[0] +'en/';

    describe('web', () => {
        let driver;

        beforeAll( async () => {
            driver = await new Builder()
            .forBrowser('chrome')
            .build();
        })

        test('test', async () => {
            await driver.get('https://static.olymptrade.com/lands/'+ element[0] + e + '/');
            await driver.findElement(By.css('.accept-btn')).click();
            await scrollToElement.call(driver, '.footer');
            await driver.findElement(By.css('[title=Blog]')).click();
            await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
            const currentUrl = await driver.getCurrentUrl();
            
            for(index in massItemBlog){
              switch(e){
                case 'en': 
                  expect(currentUrl).toBe(massItemBlog[0].blog_en);
                  console.log(currentUrl);
                  break;
                case 'es':
                  expect(currentUrl).toBe(massItemBlog[1].blog_es);
                  console.log(currentUrl);
                  break;
                case 'ar':
                  expect(currentUrl).toBe(massItemBlog[2].blog_ar);
                  console.log(currentUrl);
                  break;
                case 'ru':
                  expect(currentUrl).toBe(massItemBlog[3].blog_ru);
                  console.log(currentUrl);
                  break;
                case 'pt':
                  expect(currentUrl).toBe(massItemBlog[4].blog_pt);
                  console.log(currentUrl);
                  break;
                case 'tr':
                  expect(currentUrl).toBe(massItemBlog[5].blog_tr);
                  console.log(currentUrl);
                  break;
                case 'fr':
                  expect(currentUrl).toBe(massItemBlog[6].blog_fr);
                  console.log(currentUrl);
                  break;
                case 'th':
                  expect(currentUrl).toBe(massItemBlog[7].blog_th);
                  console.log(currentUrl);
                  break;
                case 'vi':
                  expect(currentUrl).toBe(massItemBlog[8].blog_vi);
                  console.log(currentUrl);
                  break;
                case 'vn':
                  expect(currentUrl).toBe(massItemBlog[8].blog_vi);
                  console.log(currentUrl);
                  break;
                case 'id':
                  expect(currentUrl).toBe(massItemBlog[9].blog_id);
                  console.log(currentUrl);
                  break;
                case 'ms':
                  expect(currentUrl).toBe(massItemBlog[10].blog_ms);
                  console.log(currentUrl);
                  break;
                case 'zh':
                  expect(currentUrl).toBe(massItemBlog[11].blog_zh);
                  console.log(currentUrl);
                  break;
                case 'hi':
                  expect(currentUrl).toBe(massItemBlog[12].blog_hi);
                  console.log(currentUrl);
                  break;
                case 'ko':
                  expect(currentUrl).toBe(massItemBlog[0].blog_en);
                  console.log(currentUrl);
                  break;
                case 'hg':
                  expect(currentUrl).toBe(massItemBlog[0].blog_en);
                  console.log(currentUrl);
                  break;
                case 'br':
                  expect(currentUrl).toBe(massItemBlog[0].blog_pt);
                  console.log(currentUrl);
                  break;
                case 'my':
                  expect(currentUrl).toBe(massItemBlog[10].blog_ms);
                  console.log(currentUrl);
                  break;
                case 'ja':
                  expect(currentUrl).toBe(massItemBlog[0].blog_en);
                  console.log(currentUrl);
                  break;
                case 'fa':
                  expect(currentUrl).toBe(massItemBlog[0].blog_en);
                  console.log(currentUrl);
                  break;
                default:
                  console.log('проверки нет')
              }
              break;
            };
          }, 20000);

        afterAll(() => 
        driver.quit()
        );
    });
});