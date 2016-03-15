var express = require('express');
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost/web-app-maker');

require ("./app/app.js")(db);

app.listen(3000);