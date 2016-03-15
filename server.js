var express = require('express');
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost/web-app-maker');

// install, load, and configure body parser module
var bodyParser = require('body-parser');
var multer = require('multer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./app/app.js")(app, db);

app.listen(3000);