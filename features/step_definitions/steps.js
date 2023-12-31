const assert = require('assert');
const { Given, When, Then, AfterAll, until } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');
require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the Google search page', async function () {
    await driver.get('https://www.google.com/');
    await driver.manage().window().maximize();
});

When('Click on the google icon', async function () {
    const element = await driver.findElement(By.xpath("//picture/img[@title='New Year's Eve 2023']"));
    element.click()
});
When('Click on the new year celebration', async function () {
    const element = await driver.findElement(By.className('lZiC3d'));
    element.click()
});


// Another Examples
function isFriday(today) {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

// When('Click on the new year celebration again', async function () {
//     const element = await driver.wait(until.elementLocated(By.className('lZiC3d')), 10000);
//     element.click()
// });


// function isItFriday(daysOfWeek) {
//     const today1 = new Date();
//     const dayOfWeekIndex = today1.getDay();
//     if (daysOfWeek[dayOfWeekIndex] === "Friday") {
//         return "HASAN"
//     } else {
//         return "Nope!!!!!!!!"
//     }
//     // return daysOfWeek[dayOfWeekIndex];
// }
// Given('today is Sunday', function () {
//     this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// });
// When('I ask whether it\'s Friday yet', function () {
//     this.actualAnswer = isItFriday(this.daysOfWeek);
// });
// Then('I should be told {string}', function (expectedAnswer) {
//     if (this.actualAnswer === "Friday") {
//         assert.strictEqual(this.actualAnswer, expectedAnswer);
//     } else {
//         console.log("Today is not Friday")
//     }
// });

AfterAll(async function () {
    await driver.quit();
});
