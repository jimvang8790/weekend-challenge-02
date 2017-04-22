// variables to require
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Global variables
var port = 3000;

// setting up use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extened: true}));

// set server up to listen
app.listen(port, function(){
  console.log('server is up on ->', port);
});
