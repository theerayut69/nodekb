var express = require('express');
var app = express();

var fs = require('fs');

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
    fs.readFile('text.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});

app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

app.listen(3000);