//Check text input
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require("assert");

(async function textInputTest() {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://uitestingplayground.com/textinput');
    const textInputField = await driver.findElement(By.id("newButtonName"));
    const textValue = {
        first: 'First button by Anastasia',
        second: 'Second button by Anastasia'
    };

    //The first text for the text field has been written
    await textInputField.sendKeys(textValue.first); 
    let fieldValue = await textInputField.getAttribute('value');
    assert.strictEqual(fieldValue, textValue.first, 'Text input doesnt match');
    console.log('**First text has been written:** ' + fieldValue);

    //Updating button name
    const updatingBtn = await driver.findElement(By.id("updatingButton"));
    await updatingBtn.click();
    console.log('**First updating button name**');

    await textInputField.clear();
    
    //The second text for the text field has been written
    await textInputField.sendKeys(textValue.second);
    fieldValue = await textInputField.getAttribute('value');
    assert.strictEqual(fieldValue, textValue.second, 'Text input doesnt match');
    console.log('**Second text has been written:** ' + fieldValue);

    //Second updating button name
    await updatingBtn.click();
    console.log('**Second updating button name**');
    
  } catch (e) {
    console.error('Error during the test', e);

  } finally {
    await driver.quit();
  }
})()