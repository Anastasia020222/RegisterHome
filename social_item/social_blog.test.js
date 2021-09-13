const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const {massItemBlog} = require('../Lands/massItem');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
    describe('web', () => {

        beforeAll( async () => {
            driver = await new Builder()
            .forBrowser('chrome')
            .build();
        })

        test('blog_en', async () => {
            if(element[2].includes('en')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[0].blog_en);
                // console.log(element[0] + ' тест blog_en пройден')
                }
            } else{
                console.log(element[0] + ' нет локали en');
            };
        }, 20000);

        test('blog_es', async () => {
            if(element[2].includes('es')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'es/');
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[1].blog_es);
                }
            } else{
                console.log(element[0] + ' нет локали es');
            };
        }, 20000);

        test('blog_ar', async () => {
            if(element[2].includes('ar')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'ar/');
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[2].blog_ar);
                // console.log(element[0] + ' тест blog_ar пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ar');
            };
        }, 20000);

        test('blog_ru', async () => {
            if(element[2].includes('ru')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'/');
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[3].blog_ru);
                // console.log(element[0] + ' тест blog_ru пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ru');
            };
        }, 20000);

        test('blog_pt', async () => {
            if(element[2].includes('pt')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'pt/');
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[4].blog_pt);
                // console.log(element[0] + ' тест blog_pt пройден')
                }
            } else{
                console.log(element[0] + ' нет локали pt');
            };
        }, 20000);

        test('blog_tr', async () => {
            if(element[2].includes('tr')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'tr/');
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[5].blog_tr);
                // console.log(element[0] + ' тест blog_tr пройден')
                }
            } else{
                console.log(element[0] + ' нет локали tr');
            };
        }, 20000);

        test('blog_fr', async () => {
            if(element[2].includes('fr')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'fr/');
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[6].blog_fr);
                // console.log(element[0] + ' тест blog_fr пройден')
                }
            } else{
                console.log(element[0] + ' нет локали fr');
            };
        }, 20000);

        test('blog_th', async () => {
            if(element[2].includes('fr')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'th/');
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[7].blog_th);
                // console.log(element[0] + ' тест blog_th пройден')
                }
            } else{
                console.log(element[0] + ' нет локали th');
            };
        }, 20000);

        test('blog_vi', async () => {
            if(element[2].includes('vi')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'vi/');
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[8].blog_vi);
                // console.log(element[0] + ' тест blog_vi пройден')
                }
            } else{
                console.log(element[0] + ' нет локали vi');
            };
        }, 20000);

        test('ленд с локалью vn ведет на блог en', async () => {
            if(element[2].includes('vn')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'vn/');
                await driver.wait(until.elementLocated(By.css('[class=header-logo-container]')), 20000/*ms*/);
                // await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[8].blog_vi);
                // console.log(element[0] + ' тест blog_vn пройден')
                }
            } else{
                console.log(element[0] + ' нет локали vn');
            };
        }, 20000);

        test('blog_id', async () => {
            if(element[2].includes('id')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'id/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[9].blog_id);
                // console.log(element[0] + ' тест blog_id пройден')
                }
            } else{
                console.log(element[0] + ' нет локали id');
            };
        }, 20000);

        test('blog_ms', async () => {
            if(element[2].includes('ms')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'ms/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[10].blog_ms);
                // console.log(element[0] + ' тест blog_ms пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ms');
            };
        }, 20000);

        test('blog_zh', async () => {
            if(element[2].includes('zh')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'zh/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[11].blog_zh);
                // console.log(element[0] + ' тест blog_zh пройден')
                }
            } else{
                console.log(element[0] + ' нет локали zh');
            };
        }, 20000);

        test('blog_hi', async () => {
            if(element[2].includes('hi')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'hi/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[12].blog_hi);
                // console.log(element[0] + ' тест blog_hi пройден')
                }
            } else{
                console.log(element[0] + ' нет локали hi');
            };
        }, 20000);

        test('ленд с локалью ko ведет на блог en', async () => {
            if(element[2].includes('ko')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'ko/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[0].blog_en);
                // console.log(element[0] + ' тест blog_ko пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ko');
            };
        }, 20000);

        test('ленд с локалью hg ведет на блог en', async () => { 
            if(element[2].includes('hg')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'hg/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[0].blog_en);
                // console.log(element[0] + ' тест blog_hg пройден')
                }
            } else{
                console.log(element[0] + ' нет локали hg');
            };
        }, 20000);

        test('ленд с локалью br ведет на блог en', async () => {
            if(element[2].includes('br')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'br/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[0].blog_en);
                // console.log(element[0] + ' тест blog_hg пройден')
                }
            } else{
                console.log(element[0] + ' нет локали br');
            };
        }, 20000);

        test('ленд с локалью my ведет на блог ms', async () => {
            if(element[2].includes('my')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'my/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[10].blog_ms);
                // console.log(element[0] + ' тест blog_hg пройден')
                }
            } else{
                console.log(element[0] + ' нет локали my');
            };
        }, 20000);

        test('ленд с локалью ja ведет на блог en', async () => {
            if(element[2].includes('ja')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'ja/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[0].blog_en);
                // console.log(element[0] + ' тест blog_hg пройден')
                }
            } else{
                console.log(element[0] + ' нет локали ja');
            };
        }, 20000);

        test('ленд с локалью fa ведет на блог en', async () => {
            if(element[2].includes('fa')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'fa/');
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Blog]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemBlog){
                expect(currentUrl).toBe(massItemBlog[0].blog_en);
                // console.log(element[0] + ' тест blog_fa пройден')
                }
            } else{
                console.log(element[0] + ' нет локали fa');
            };
        }, 20000);

        afterAll(() => 
        driver.quit()
        );
    });
});