Тесты для тестирования лендингов OlympTrade.
Для тестирования компонентов используем Jest совместо с Selenium. 

Для того, чтобы локально можно было запустить тесты необходимо установить npm, selenium-webdriver, jest
chromedriver - драйвер для хрома 

Драйвера для других браузеров:
geckodriver -  firefox, 
safaridriver -  safari.

Чтобы установить все необходимое сразу можно воспользоваться следующей командой:

npm install selenium-webdriver@3.x chromedriver geckodriver jest -D

Теперь можно импортировать все что необходимо из пакетов.

// index.test.js

const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')



