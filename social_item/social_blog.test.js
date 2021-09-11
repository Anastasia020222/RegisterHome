const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const {massItemBlog, massItemTwitter, massItemYoutube, massItemFacebook, massItemInstagram} = require('../Lands/massItem');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
    describe('web', () => {
        test('blog_en', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            console.log(element[2].includes('es'))
            if(element[2].includes('en')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[0].blog_en);
                console.log(element[0] + ' тест blog_en пройден')
                }
            } else{
                console.log(element[0] + ' нет локали en');
            };
            driver.quit();
        }, 20000);

        test('blog_es', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            console.log(element[2].includes('es'))
            if(element[2].includes('es')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'es/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[1].blog_es);
                console.log(element[0] + ' тест blog_es пройден')
                }
            } else{
                console.log(element[0] + ' нет локали es');
            };
            driver.quit();
        }, 20000);

        test('blog_ar', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('ar')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'ar/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_ar);
                console.log(element[0] + ' тест blog_ar пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ar');
            };
            driver.quit();
        }, 20000);

        test('blog_ru', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('ru')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_ru);
                console.log(element[0] + ' тест blog_ru пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ru');
            };
            driver.quit();
        }, 20000);

        test('blog_pt', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('pt')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'pt/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_pt);
                console.log(element[0] + ' тест blog_pt пройден')
                }
            } else{
                console.log(element[0] + ' нет локали pt');
            };
            driver.quit();
        }, 20000);

        test('blog_tr', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('tr')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'tr/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_tr);
                console.log(element[0] + ' тест blog_tr пройден')
                }
            } else{
                console.log(element[0] + ' нет локали tr');
            };
            driver.quit();
        }, 20000);

        test('blog_fr', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('fr')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'fr/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_fr);
                console.log(element[0] + ' тест blog_fr пройден')
                }
            } else{
                console.log(element[0] + ' нет локали fr');
            };
            driver.quit();
        }, 20000);

        test('blog_th', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('fr')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'th/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_th);
                console.log(element[0] + ' тест blog_th пройден')
                }
            } else{
                console.log(element[0] + ' нет локали th');
            };
            driver.quit();
        }, 20000);

        test('blog_vi', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('vi')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'vi/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_vi);
                console.log(element[0] + ' тест blog_vi пройден')
                }
            } else{
                console.log(element[0] + ' нет локали vi');
            };
            driver.quit();
        }, 20000);

        test('blog_id', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('id')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'id/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_id);
                console.log(element[0] + ' тест blog_id пройден')
                }
            } else{
                console.log(element[0] + ' нет локали id');
            };
            driver.quit();
        }, 20000);

        test('blog_ms', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('ms')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'ms/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_ms);
                console.log(element[0] + ' тест blog_ms пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ms');
            };
            driver.quit();
        }, 20000);

        test('blog_zh', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('zh')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'zh/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_zh);
                console.log(element[0] + ' тест blog_zh пройден')
                }
            } else{
                console.log(element[0] + ' нет локали zh');
            };
            driver.quit();
        }, 20000);

        test('blog_hi', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('hi')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'hi/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_hi);
                console.log(element[0] + ' тест blog_hi пройден')
                }
            } else{
                console.log(element[0] + ' нет локали hi');
            };
            driver.quit();
        }, 20000);
    });
});