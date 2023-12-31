const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

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