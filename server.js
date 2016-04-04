var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

var multer = require('multer');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://locaolhost/cs4550');

require("./public/project/server/app.js")(app);

require("./public/assignment/server/app.js")(app, db, mongoose);

app.listen(port, ipaddress);

