"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let name = prompt(" Enter your name: ");
console.log(`hello ${name}`);