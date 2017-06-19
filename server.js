// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var bodyParser  = require('body-parser');
var port  	 = process.env.PORT || 80; 				// set the port

// configuration ===============================================================

app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({
   extended: false
}));						// pull information from html in POST
// app.use(express.methodOverride()); 						// simulate DELETE and PUT

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
