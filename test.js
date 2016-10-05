"use strict";

let async = require('async');
let R = require('ramda');

function scitacka(a, b, c) {
    return a + b + c;
}

function testovaci() {
    console.log('-----------');

    let scitackaR = R.curry(scitacka);

    console.log(scitacka(1,2,3));
    console.log(scitackaR('a', R.__, 'c')('b'));
    
    console.log('-----------');

    console.log(async);
    console.log(R);
}

module.exports = testovaci;
