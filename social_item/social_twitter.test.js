const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const {massItemTwitter} = require('../Lands/massItem');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {
    describe('web', () => {
        test('twitter_en', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            if(element[2].includes('en')){
                await driver.get('https://static.olymptrade.com/lands/'+ element[0] +'en/');
                await driver.findElement(By.css(".accept-btn")).click();
                await scrollToElement.call(driver, '.footer');
                await driver.findElement(By.css("[title=Twitter]")).click();
                const currentUrl = await driver.getCurrentUrl();
                for(index in massItemTwitter){
                expect(currentUrl).toBe(massItemTwitter[0].twitter_en);
                console.log(element[0] + ' тест twitter_en пройден')
                }
            } else{
                console.log(element[0] + ' нет локали en');
            };
            driver.quit();
        }, 20000);
    });
});