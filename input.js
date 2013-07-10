#!/usr/bin/env node

var fs = require('fs');
var inputfile  = "index.html";
var fileContent = fs.readFileSync(inputfile);
console.log("contents: " + fileContent)

