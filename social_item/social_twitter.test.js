const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const {massItemTwitter} = require('../Lands/massItem');
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
    
        test('Тестирование ссылки twitter ' + locale, async () => {
            await driver.get(URL);
            await driver.findElement(By.css('.accept-btn')).click();
            await scrollToElement.call(driver, '.footer');
            await driver.findElement(By.css('[title=Twitter]')).click();
            const currentUrl = await driver.getCurrentUrl();

            for(index in massItemTwitter){
                switch(locale){
                    case 'en':
                        expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
                        console.log(currentUrl);
                    break;
                    case 'es':
                        expect(currentUrl).toBe(massItemTwitter[5].twitter_la);
                        console.log(currentUrl);
                    break;
                    case 'ar':
                        expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
                        console.log(currentUrl);
                    break;
                    case 'ru':
                        expect(currentUrl).toBe(massItemTwitter[1].twitter_ru);
                        console.log(currentUrl);
                    break;
                    case 'pt':
                        expect(currentUrl).toBe(massItemTwitter[4].twitter_br);
                        console.log(currentUrl);
                    break;
                    case 'tr':
                        expect(currentUrl).toBe(massItemTwitter[7].twitter_tr);
                        console.log(currentUrl);
                    break;
                    case 'fr':
                        expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
                        console.log(currentUrl);
                    break;
                    case 'th':
                        expect(currentUrl).toBe(massItemTwitter[3].twitter_th);
                        console.log(currentUrl);
                    break;
                    case 'vi':
                          expect(currentUrl).toBe(massItemTwitter[6].twitter_vi);
                          console.log(currentUrl);
                    break;
                    case 'vn':
                        expect(currentUrl).toBe(massItemTwitter[6].twitter_vi);
                        console.log(currentUrl);
                    break;
                    case 'id':
                        expect(currentUrl).toBe(massItemTwitter[2].twitter_id);
                        console.log(currentUrl);
                    break;
                    case 'ms':
                        expect(currentUrl).toBe(massItemTwitter[8].twitter_ms);
                        console.log(currentUrl);
                    break;
                    case 'zh':
                        expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
                        console.log(currentUrl);
                    break;
                    case 'hi':
                        expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
                        console.log(currentUrl);
                    break;
                    case 'ko':
                        expect(currentUrl).toBe(massItemTwitter[0].blog_en);
                        console.log(currentUrl);
                    break;
                    case 'hg':
                        expect(currentUrl).toBe(massItemTwitter[0].blog_en);
                        console.log(currentUrl);
                    break;
                    case 'br':
                        expect(currentUrl).toBe(massItemTwitter[4].twitter_br);
                        console.log(currentUrl);
                    break;
                    case 'my':
                        expect(currentUrl).toBe(massItemTwitter[8].twitter_ms);
                        console.log(currentUrl);
                    break;
                    case 'ja':
                        expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
                        console.log(currentUrl);
                    break;
                    case 'fa':
                        expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
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