"use strict";

let moment = require('moment');

function testMoment() {
    console.log('-----------');

    console.log('Test Moment.js');
    console.log('Locales:' + moment.locales());
    console.log('Locale:' + moment.locale());
    moment.locale('cs');
    console.log('Locale:' + moment.locale());
    console.log('Locales:' + moment.locales());

    let momentDateTime = moment();
    let denVTydnu = momentDateTime.format('dddd');
    console.log(denVTydnu);

    console.log('-----------');
}

module.exports = testMoment;