var express = require('express');
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost/web-app-maker');

app.listen(3000);