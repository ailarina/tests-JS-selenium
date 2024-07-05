//Check load delays
const { Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

(async function loadDelaysTest() {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://uitestingplayground.com/');

    //Go to page Load Delays
    const loadDelays = await driver.findElement(By.linkText('Load Delay'));
    await loadDelays.click();
    console.log('Go to page');

    //Click on the button on the load delays page
    const btnAfterDelay = await driver.findElement(By.className('btn btn-primary'));
    await btnAfterDelay.click();
    console.log('Click on the button')

  } catch (e) {
    console.error('Error during the test', e);

  } finally {
    //close browser
    await driver.quit();
  }
})()