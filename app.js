var express = require ('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var router = require('./router');
var mongoose = require('mongoose');
//var googlecloud = require('./services/googlecloud');

//DB Setup
mongoose.connect('mongodb://localhost:auth/auth');


//App Setup

app.use('/', express.static(__dirname + '/public'));

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app)

//Server Setup

app.post('/upload', (res,req) => {
  console.log('hiiiii')
})

var port = process.env.PORT || 3000;


app.listen(port, function() {
  console.log('Server listening on port: ', port)
});
