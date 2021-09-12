const { Builder, By, Key, until, WebElement, Condition } = require('selenium-webdriver');
const { scrollAndClick, scrollToElement } = require('./scroll/scrollFeatures');
const {massLands} = require('./Lands/massLands');
const {massItemBlog} = require('./Lands/massItem');
const { getParameters } = require('./url/getParameters');
const { makeid } = require('./mail.pass/mail.pass')
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

        beforeAll(async () => {
            driver = await new Builder()
            .forBrowser('chrome')
            .build();
        });

        test ('регистрация нового пользователя', async () => {
            await driver.get(URL);
            await driver.findElement(By.className("accept-btn")).click();
            await scrollToElement.call(driver, '.forms');
            await driver.findElement(By.id("register-form-1__email")).sendKeys(mail);
            await driver.findElement(By.id("register-form-1__password")).sendKeys(pass);
            await driver.findElement(By.className("register-form__agreement-checkbox")).click();
            await driver.findElement(By.className("register-form__button")).click();

            await driver.wait(until.elementLocated(By.className('SvgIcon-module-host-3SE')), 20000/*ms*/);

            const currentUrl = await driver.getCurrentUrl();
            expect(getParameters(currentUrl)).toStrictEqual(element[1]);

            await driver.findElement(By.className("SvgIcon-module-host-3SE")).click();
            await driver.findElement(By.className("Button-module-hostColorContainedNegative-2cV")).click();
            await driver.findElement(By.className("Button-module-hostColorContainedAccent-24t")).click();
 
        }, 20000);

        test('регистрация пользователя, зарегистрированного ранее и есть куки', async () => {
            await driver.get(URL);
            await scrollToElement.call(driver, '.forms');
            await driver.findElement(By.id("register-form-1__email")).sendKeys(mail);
            await driver.findElement(By.id("register-form-1__password")).sendKeys(pass);
            await driver.findElement(By.className("register-form__agreement-checkbox")).click();
            await driver.findElement(By.className("register-form__button")).click();

            await driver.wait(until.alertIsPresent());
            let alert = await driver.switchTo().alert();
            let alertText = await alert.getText();
            await alert.accept();
            const currentUrl = await driver.getCurrentUrl();
            expect(getParameters(currentUrl)).toStrictEqual(element[1]);
            await driver.wait(until.elementLocated(By.css('[data-test=asset-select-button]')), 20000/*ms*/);
            
        }, 20000);
        afterAll(() => driver.quit());
    }) 
})

    // test('register', () => {
    //     return driver.get(URL).then(() => {
    //         return driver.findElement(By.css(".accept-btn")).click().then(() => {
    //         return scrollToElement.call(driver, '.forms').then(() => {
    //             return driver.findElement(By.id("register-form-1__email")).sendKeys(mail).then(() => {
    //                 return driver.findElement(By.id("register-form-1__password")).sendKeys(pass).then(() => {
    //                     return driver.findElement(By.className("register-form__agreement-checkbox")).click().then(() => {
    //                         return driver.findElement(By.className("register-form__button")).click().then(() => {
    //                             driver.wait(until.elementLocated(By.className('SvgIcon-module-host-3SE')), 20000/*ms*/);
    //                             driver.findElement(By.className("SvgIcon-module-host-3SE")).click();
    //                             driver.findElement(By.className("Button-module-hostColorContainedNegative-2cV")).click();
    //                             driver.findElement(By.className("Button-module-hostColorContainedAccent-24t")).click();
    //                             const currentUrl = driver.getCurrentUrl();
    //                             expect(currentUrl).toEqual(element[1]);

    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })
    // }, 20000);
    // });
    //    // beforeAll(() => driver.quit());
            // driver.quit();
        // }), 20000)}