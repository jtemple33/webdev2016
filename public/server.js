var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.get('/hello', function(req, res){
    res.send('hello world');
});

app.get('/getSomeJson', function(req, res){
    res.send({message: "Hello World"});
});

app.get('/getJsonArray', function(req, res){
    var array = [{title: "Java"}, {title:"C#"}];
    res.send(array);
});

// CRUD
app.get('/rest/course', function(req, res)
{
    var courses = [
        {title: "", seats: 23, start: ""},
        {title: "2", seats: 34, start: ""},
        {title: "5", seats: 56, start: ""}
    ];
    res.send(courses);
});

app.listen(port, ipaddress);