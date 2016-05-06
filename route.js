var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/home', function (req, res) {
    res.send('Welcome to My Home.');
});

app.get('/contact', function (req, res) {
    res.send('Hi contact theerayut_than@hotmail.com');
});

app.listen(3000);