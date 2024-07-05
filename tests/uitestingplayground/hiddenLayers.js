//Check using hidden layers
const { Builder, By } = require('selenium-webdriver');
const assert = require("assert");

(async function hiddenLayersTest() {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://uitestingplayground.com/hiddenlayers');

    //Search and first click on the green button
    const greenButton = await driver.findElement(By.id("greenButton"));
    await greenButton.click();
    console.log('First click');
    
    //Second click on the green button
    try {
      await greenButton.click();
      console.log('Second click');
    } catch (error) {
      console.error('You can not click green button');
    }
    
  } catch (e) {
    console.error('Error during the test', e);

  } finally {
    //close browser
    await driver.quit();
  }
})()