"use strict";

/* Express server */
/*
var server = require('./server.js');
server();
*/

/* Testíček */
/*
let test = require('./test.js');
test();
*/

/* Moment */
let testMoment = require('./testMoment.js');
testMoment();

/* Hoisting test */
console.log(a);
var a = "něco";
//let a = "a ještě něco";


let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () {
        return i * 2;
    };
}

console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());
