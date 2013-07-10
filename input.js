#!/usr/bin/env node

var fs = require('fs');
var inputfile  = "index.html";
var fileContent = fs.readFileSync(inputfile).toString();
console.log("contents: " + fileContent)

