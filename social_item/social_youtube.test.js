const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const {massItemYoutube} = require('../Lands/massItem');
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
    
        test('Тестирование ссылки YouTube ' + locale, async () => {
            await driver.get(URL);
            await driver.findElement(By.css(".accept-btn")).click();
            await scrollToElement.call(driver, '.footer');
            await driver.findElement(By.css("[title=YouTube]")).click();
            const currentUrl = await driver.getCurrentUrl();

            for(index in massItemYoutube){
                switch(locale){
                    case 'en':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'es':
                        expect(currentUrl).toBe(massItemYoutube[7].youtube_es);
                        console.log(currentUrl);
                    break;
                    case 'ar':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'ru' || '':
                        expect(currentUrl).toBe(massItemYoutube[1].youtube_ru);
                        console.log(currentUrl);
                    break;
                    case 'pt':
                        expect(currentUrl).toBe(massItemYoutube[6].youtube_pt);
                        console.log(currentUrl);
                    break;
                    case 'tr':
                        expect(currentUrl).toBe(massItemYoutube[4].youtube_tr);
                        console.log(currentUrl);
                    break;
                    case 'fr':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'th':
                        expect(currentUrl).toBe(massItemYoutube[3].youtube_th);
                        console.log(currentUrl);
                    break;
                    case 'vi':
                          expect(currentUrl).toBe(massItemYoutube[5].youtube_vi);
                          console.log(currentUrl);
                    break;
                    case 'vn':
                        expect(currentUrl).toBe(massItemYoutube[5].youtube_vi);
                        console.log(currentUrl);
                    break;
                    case 'id':
                        expect(currentUrl).toBe(massItemYoutube[2].youtube_id);
                        console.log(currentUrl);
                    break;
                    case 'ms':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'zh':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'hi':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'ko':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'hg':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'br':
                        expect(currentUrl).toBe(massItemYoutube[6].youtube_pt);
                        console.log(currentUrl);
                    break;
                    case 'my':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'ja':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
                        console.log(currentUrl);
                    break;
                    case 'fa':
                        expect(currentUrl).toBe(massItemYoutube[0].youtube_en);
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