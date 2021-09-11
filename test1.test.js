const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures');
const {massLands} = require('./Lands/massLands');
const {massItemBlog} = require('./Lands/massItem');
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
            console.log(element[2].includes('ar'))
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
    });
});
