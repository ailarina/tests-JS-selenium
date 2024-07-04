//Check using class attribute
const { Builder, By } = require('selenium-webdriver');
const assert = require("assert");

(async function classAttrTest() {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://uitestingplayground.com/classattr');

    //Click primary button
    const primaryBtn = await driver.findElement(By.xpath("//button[contains(@class, 'btn-primary')]"));
    await primaryBtn.click();
    console.log('Click button');

    //Check alert acception
    const alertAccept = await driver.switchTo().alert();
    await alertAccept.accept();
    console.log('Alert accepted');
    
  } catch (e) {
    console.error('Error during the test', e);

  } finally {
    //close browser
    await driver.quit();
  }
})()