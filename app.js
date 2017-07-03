var express = require ('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var router = require('./router');
var mongoose = require('mongoose');
//var googlecloud = require('./services/googlecloud');

//DB Setup

var mongoURL = "mongodb://user:user@ds032340.mlab.com:32340/landmarks2"||"mongodb://localhost:auth/auth"

//"mongodb://user:password@ds145892.mlab.com:45892/landmarks"
mongoose.connect(mongoURL);


//App Setup

app.use('/', express.static(__dirname + '/public'));

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app)

//Server Setup

var port = process.env.PORT || 3000;


app.listen(port, function() {
  console.log('Server listening on port: ', port)
});
