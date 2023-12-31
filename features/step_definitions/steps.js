const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(daysOfWeek) {
    const today1 = new Date();
    const dayOfWeekIndex = today1.getDay();
    return daysOfWeek[dayOfWeekIndex];
}

Given('today is Sunday', function () {
    this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.daysOfWeek);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});