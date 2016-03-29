var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var bodyParser = require('body-parser');
var multer = require('multer');
app.use(bodyParser.json());

require("./public/project/server/app.js")(app);

require("./public/assignment/server/app.js")(app);

app.listen(port, ipaddress);