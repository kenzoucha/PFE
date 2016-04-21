

// Dependencies requirements, Express 4
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require("mongoose");
var app            = express();

app.use(express.static(__dirname + '/public')); 	// set the static files location
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT

//Add the routes
routes = require('./routes/pc')(app);

mongodb://node:nodeuser@ds051655.mongolab.com:51655/projetkenza
// MongoDB configuration
//  mongodb://admin:admin@ds055485.mongolab.com:55485/stockdeal
//  mongodb://localhost/Pc
mongoose.connect('mongodb://admin:admin@ds055485.mongolab.com:55485/stockdeal', function(err, res) {
  if(err) {
    console.log('error connecting to MongoDB Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

app.listen(81);
console.log('Estoy en el puerto 81'); 			// shoutout to the user

// First example router
app.get('/public', function(req, res) {
  res.send(index.html);
});
