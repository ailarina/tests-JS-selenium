//Check home page
const { Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

(async function homeTest() {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://uitestingplayground.com/');

    //check title
    const title = await driver.getTitle();
    console.log('Home page title ' + title);
    assert.strictEqual(title, 'UI Test Automation Playground', 'Title doesnt match');

    //maximize browser window
    await driver.manage().window().maximize();

    //check URL
    const url = await driver.getCurrentUrl();
    console.log("Current URL"+ url);
    
  } catch (e) {
    console.error('Error during the test', e);

  } finally {
    //close browser
    await driver.quit();
  }
})()


