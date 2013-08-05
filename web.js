var express = require('express');
var fs =require('fs');
var inputFile="index.html";
var data = fs.readFileSync(inputFile);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
response.send(data.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
