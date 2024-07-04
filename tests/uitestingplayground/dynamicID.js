//Check button with dynamic ID
const { Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

(async function dynamicIdTest() {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://uitestingplayground.com/dynamicid');

    //Click button with dynamic ID
    let dynamicBtn = await driver.findElement(By.className('btn btn-primary'));
    await dynamicBtn.click();
    console.log('Click button');

    //Refresh page
    await driver.navigate().refresh();
    console.log('Refresh page');
    
    //Second click button with dynamic ID
    dynamicBtn = await driver.findElement(By.className('btn btn-primary'));
    await dynamicBtn.click();
    console.log('Second click');
    
  } catch (e) {
    console.error('Error during the test', e);

  } finally {
    await driver.quit();
  }
})()