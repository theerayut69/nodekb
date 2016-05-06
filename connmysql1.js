var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'company'
});

var app = express();

connection.connect(function(err){
    if(!err)
    {
        console.log("Database is connected ...");
    }
    else
    {
        console.log("Error connection database ...");
    }

    app.get('/', function(req, res){
        connection.query('SELECT * FROM company LIMIT 0, 100', function (err, rows, fields) {
            connection.end();
            if(!err)
            {
                console.log('Data rows : ', rows);
            }
            else
            {
                console.log('Error Query.');
            }
        });
    });
});
app.listen(3000)