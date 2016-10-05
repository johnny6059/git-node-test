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
/*
let testMoment = require('./testMoment.js');
testMoment();
*/

/* Hoisting test */
/*
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
*/

/* Promises */
let promise = require('./promise.js');
promise.testPromise1();

let cpus = require('os').cpus();
console.log(cpus.length);
console.log(cpus[0]);
console.log(cpus[1]);
console.log(cpus[2]);
console.log(cpus[3]);
console.log(cpus[4]);
console.log(cpus[5]);
console.log(cpus[6]);
console.log(cpus[7]);
