'use strict'

let hello = require('./build/Release/binding.node');

console.log("Hello : ", hello.hello());
