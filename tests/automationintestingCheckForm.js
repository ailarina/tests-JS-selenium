const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function checkForm() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('https://automationintesting.online/');
    const name = await driver.wait(until.elementLocated(By.id('name')), 10000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", name);

    const email = await driver.findElement(By.id('email'));
    const phoneNumber = await driver.findElement(By.id('phone'));
    const subject = await driver.findElement(By.id('subject'));
    const message = await driver.findElement(By.id('description'));
    const submitContact = await driver.findElement(By.id('submitContact'));
    const nameValue = 'TestName';
    const emailValue = 'test@email.test';
    const phoneNumberValue = '777779999999';
    const subjectValue = 'TestTestTestTestTestTestTestTest';
    const messageValue = 'FieldTestField TestTestTest';
    
    await name.sendKeys(nameValue);
    await email.sendKeys(emailValue);
    await phoneNumber.sendKeys(phoneNumberValue);
    await subject.sendKeys(subjectValue);
    await message.sendKeys(messageValue);
    await driver.actions().click(submitContact).perform();

  } catch (error) {
    console.error('Ошибка', error);

  } finally {
    await driver.quit();
  }
})()