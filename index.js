'use strict'

let hello = require('./build/Release/binding.node');

console.log("Hello : ", hello.add(1,100));
