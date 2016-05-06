var express = require('express');
var app = express();

var fs = require('read-file');

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/home', function (req, res) {
    res.send('Welcome to My Home.');
});

app.get('/contact', function (req, res) {
    res.send('Hi contact theerayut_than@hotmail.com');
});

app.post('/add', function (req, res) {
    res.send('POST request to the homepage.');
});

app.get('/text', function (req, res) {
    fs.resdFile('./text.txt', function read(err, data) {
       if(err)
       {
           throw err;
       }
        var content = data;

        res.send(content);
    });
});

app.listen(3000);