var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var inputfile  = "index.html";
var fileContent = buf.toString(fs.readFileSync(inputfile));
console.log("contents: " + fileContent)

app.get('/', function(request, response) {
  response.send(fileContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
