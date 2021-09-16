const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const {massItemInstagram} = require('../Lands/massItem');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
    element[2].forEach((locale) => {
        
        const URL = 'https://static.olymptrade.com/lands/'+ element[0] + locale + '/';
        
        describe('web', () => {
            let driver;
    
            beforeAll( async () => {
                driver = await new Builder()
                .forBrowser('chrome')
                .build();
            })
    
        test('Тестирование ссылки Instagram ' + locale, async () => {
            await driver.get(URL);
            await driver.findElement(By.css(".accept-btn")).click();
            await scrollToElement.call(driver, '.footer');
            await driver.findElement(By.css("[title=Instagram]")).click();
            const currentUrl = await driver.getCurrentUrl();

            for(index in massItemInstagram){
                switch(locale){
                    case 'en':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'es':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'ar':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'ru':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'pt':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'tr':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'fr':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'th':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'vi':
                          expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                          console.log(currentUrl);
                    break;
                    case 'vn':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'id':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'ms':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'zh':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'hi':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'ko':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'hg':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'br':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'my':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'ja':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    case 'fa':
                        expect(currentUrl).toBe(massItemInstagram[0].instagram_en);
                        console.log(currentUrl);
                    break;
                    default:
                        console.log('Нет проверки для локали ' + locale);
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