const { Builder, Browser, By, until } = require('selenium-webdriver');

(async function checkNavigation() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://practice-automation.com/');
    const footer = await driver.wait(until.elementLocated(By.className('copyright-year')), 5000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", footer);

    const toTop = await driver.findElement(By.id('to-top'));
    await toTop.click();

  } catch (error) {
    console.error('Ошибка', error);

  } finally {
    await driver.quit();
  }
})()