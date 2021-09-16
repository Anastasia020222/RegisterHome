const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('../scroll/scrollFeatures');
const {massLands} = require('../Lands/massLands');
const { getParameters } = require('../url/getParameters');
const { makeid } = require('../mail.pass/mail.pass')
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

massLands.forEach((element) => {

    const URL = 'https://static.olymptrade.com/lands/'+ element[0] +'en/';
    
    describe('web', () => {
        let driver;
        let mail = makeid(10) + '@dataduck.com';
        let pass = makeid(5);

        test('Принять соглашение', async () => {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get(URL);
            await driver.wait(until.elementLocated(By.id('cookies-popup')), 20000/*ms*/);

            const text = await driver.findElement(By.className('accept-btn')).getText();
            expect(text).toBe('Accept');
            await driver.findElement(By.className('accept-btn')).click();

            await driver.wait(until.invisibilityOfElementLocated(By.id("some-id")));
            //проверить что элемент не видим на странице
            driver.quit();
        }, 20000);

        // test('Отклонить соглашение', async () => {
        //     driver = await new Builder().forBrowser('chrome').build();
        //     await driver.get(URL);
        //     await driver.wait(until.elementLocated(By.id('cookies-popup')), 20000/*ms*/);

        //     const text = await driver.findElement(By.className('close-btn')).getText();
        //     expect(text).toBe('Close');
        //     await driver.findElement(By.className('close-btn')).click();
        //     //проверить что элемент не видим на странице
        //     driver.quit();
        // }, 20000);

        // test('Открыть страницу соглашения', async () => {
        //     driver = await new Builder().forBrowser('chrome').build();
        //     await driver.get(URL);
        //     await driver.wait(until.elementLocated(By.id('cookies-popup')), 20000/*ms*/);
        //     const text = await driver.findElement(By.id('cookie-link')).getText();

        //     expect(text).toBe('our cookies policy.');

        //     await driver.findElement(By.id('cookie-link')).click();
        //     const currentUrl = await driver.getCurrentUrl();
        //     const textLegal = await driver.findElement(By.css('#wrapper > div:nth-child(1) > div.section-terms.content-2-columns > h1')).getText(); //переписать локатор

        //     expect(textLegal).toBe('Legal Information');
        //     expect(currentUrl).toBe('https://olymptrade.com/terms');
        //     driver.quit();
        // }, 20000);
        
        afterAll(() => 
        driver.quit()
        );
    });
});