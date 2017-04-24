// variables to require
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Global variables
var port = 4321;
var allTotal =[];

// setting up use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// set server up to listen
app.listen(port, function(){
  console.log('server is up on ->', port);
}); // end of listen

// base url
app.get( '/', function(req, res){
  // send back index.html as response
  res.sendFile(path.resolve('public/index.html'));
}); // end base url

app.post('/calulations', function(req, res){
  console.log('/calulations hit:', req.body);

  var total = 0;
  var type = req.body.type;
  var x = parseInt(req.body.x);
  var y = parseInt(req.body.x);

  switch (type) {
    case 'addition':
      total = (x + y);
      break;
    case 'subtraction':
      total = (x - y);
      break;
    case 'multiply':
      total = (x * y);
      break;
    case 'divide':
      total = (x / y);
      break;
  }

  allTotal.push(req.body);
  res.send(200);
}); // end of /calulations app.post

app.get('/total', function(req, res){
  console.log('/total is click');
  var responseObject = {
    total: allTotal
  };
  res.send(responseObject);
}); //end of /total app.get
