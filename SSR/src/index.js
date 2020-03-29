var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(
        `<html>
            <head></head>
            <body>hello world</body>
        </html>`
    );
});

var server = app.listen(3001);